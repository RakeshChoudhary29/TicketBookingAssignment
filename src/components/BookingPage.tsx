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
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {" "}
      {/* Smaller padding and overall width */}
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Booking Page
      </h1>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left seats array div */}
        <div className="flex-1 grid grid-cols-7 gap-2 p-4 border border-gray-200 shadow-md rounded-md bg-white mx-auto max-w-[480px]">
          {bookingData.map((value, index) => {
            return (
              <div
                key={`seat-${index}`}
                className={`w-8 h-8 flex items-center justify-center rounded-md text-white font-medium text-xs ${
                  value.booked ? "bg-yellow-500" : "bg-green-500"
                }`}
              >
                {value.seat_number}
              </div>
            );
          })}
        </div>

        {/* Right input & booked seats display */}
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-4 rounded-md shadow-md min-w-[240px] max-w-sm">
          {/* Booked seats number */}
          <div className="flex flex-wrap justify-center gap-1 mb-4">
            {currentBooked.map((value, index) => (
              <div
                key={`current-${index}`}
                className="w-8 h-8 flex items-center justify-center bg-yellow-300 text-gray-800 font-medium text-sm rounded-md"
              >
                {value}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center space-y-3 w-full">
            {/* Smaller input */}
            <input
              type="number"
              min={0}
              max={7}
              value={inputValue}
              onChange={(e: any) => setInputValue(parseInt(e.target.value))}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-center text-base bg-white shadow-sm"
            />

            <div className="flex space-x-2 w-full justify-center">
              {/* Book button */}
              <button
                className="flex-1 px-3 py-1.5 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition duration-200 flex items-center justify-center"
                onClick={bookTicketsHandler}
              >
                {loading ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2" />
                    Please Wait...
                  </>
                ) : (
                  "Book"
                )}
              </button>
              {/* Reset button */}
              <button
                className="flex-1 px-3 py-1.5 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-200"
                onClick={ticketResetHandler}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start ml-60 gap-4 pt-4 text-sm">
        <span className="bg-yellow-500 px-3 py-1 rounded-md text-white font-medium">
          Booked: {bookedSeatsCount}
        </span>
        <span className="bg-green-500 px-3 py-1 rounded-md text-white font-medium">
          Available: {80 - bookedSeatsCount}
        </span>
      </div>
    </div>
  );
};

export default BookingPage;
