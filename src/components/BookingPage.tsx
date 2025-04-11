import { useEffect, useState } from "react";
import {
  bookTicketsApi,
  getTicketDataApi,
  resetTicketsApi,
} from "../middleware/api";
import { toast } from "react-toastify";
// import getTicketDataApi from "../../middleware/api.ts";

type Seat = {
  seat_number: number;
  booked: boolean;
  bookedBy: string | null;
};

const BookingPage = () => {
  const [bookingData, setBookingData] = useState<Seat[]>([]);

  const [currentBooked, setCurrentBooked] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  const [bookedSeatsCount, setBookedSeatsCount] = useState<number>(0);

  const bookTicketsHandler = async () => {
    try {
      const ticketCount = inputValue;

      if (ticketCount == 0) {
        toast.error("Zero Seats selected !");
        return;
      }

      if (ticketCount >= 8) {
        toast.error("You can Select at most 7 Seats at a time !");
        return;
      }
      setLoading(true);
      const res: any = await bookTicketsApi(ticketCount);

      const bookTicketRes = res.data;

      if (bookTicketRes.success) {
        setCurrentBooked(bookTicketRes.bookedSeats);
        toast.success(bookTicketRes.message);
      } else {
        toast.error(bookTicketRes.message);
      }

      await getData();
      setLoading(false);
    } catch (error: any) {
      console.log("error:", error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  const ticketResetHandler = async () => {
    const res: any = await resetTicketsApi();

    if (res.data.success) toast.success(res.data.message);
    else toast.error(res.data.message);

    await getData();

    setCurrentBooked([]);
  };

  const getData = async () => {
    try {
      const res: any = await getTicketDataApi();
      if (res.data.success) {
        setBookingData(res.data.seatsData);
        const temp = res.data.seatsData.reduce(
          (acc: number, value: any) => (value.booked === true ? acc + 1 : acc),
          0
        );

        setBookedSeatsCount(temp);
        toast.success(res.data.success);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    const temp = async () => {
      await getData();
    };
    temp();
  }, []);

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Booking Page
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left seats array div */}
        <div className="flex-1 grid grid-cols-7 gap-3 p-6 border border-gray-300 shadow-lg rounded-md bg-white mx-auto">
          {bookingData.map((value, index) => {
            return (
              <div
                key={`seat-${index}`}
                className={`w-10 h-10 flex items-center justify-center rounded-md text-white font-semibold text-sm ${
                  value.booked ? "bg-yellow-500" : "bg-green-500"
                }`}
              >
                {value.seat_number}
              </div>
            );
          })}
        </div>

        {/* Right input & booked seats display */}
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-6 rounded-md shadow-md min-w-[300px]">
          {/* Booked seats number */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {currentBooked.map((value, index) => (
              <div
                key={`current-${index}`}
                className="w-10 h-10 flex items-center justify-center bg-yellow-300 text-gray-800 font-medium rounded-md"
              >
                {value}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center space-y-4 w-full">
            <input
              type="number"
              min={0}
              max={7}
              value={inputValue}
              onChange={(e: any) => setInputValue(parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg bg-white shadow-sm"
            />

            <div className="flex space-x-4 w-full justify-center">
              <button
                className="flex-1 px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300"
                onClick={bookTicketsHandler}
              >
                {loading ? (
                  <>
                    <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2 z-10" />
                    Please Wait...
                  </>
                ) : (
                  "Book Tickets"
                )}
              </button>
              <button
                className="flex-1 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300"
                onClick={ticketResetHandler}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className="bg-yellow-500 m-4 px-2 py-1 border rounded-md text-lg">
          Booked Seats:{bookedSeatsCount}
        </span>
        <span className="bg-green-500 m-4 px-2 py-1 border rounded-md text-lg">
          Available Seats:{80 - bookedSeatsCount}
        </span>
      </div>
    </div>
  );
};

export default BookingPage;
