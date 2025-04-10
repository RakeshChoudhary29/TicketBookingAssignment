import { useEffect, useState } from "react";
import {
  bookTicketsApi,
  getTicketDataApi,
  resetTicketsApi,
} from "../middleware/api";
import { toast } from "react-toastify";
// import getTicketDataApi from "../../middleware/api.ts";

type Seat = {
  seatNumber: number;
  booked: boolean;
  bookedBy: string | null;
};

const BookingPage = () => {
  const [bookingData, setBookingData] = useState<Seat[]>([]);

  const [currentBooked, setCurrentBooked] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<number>(0);

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

      const res: any = await bookTicketsApi(ticketCount);

      const bookTicketRes = res.data;

      if (bookTicketRes.success) {
        setCurrentBooked(bookTicketRes.bookedSeats);
        toast.success(bookTicketRes.message);
      } else {
        toast.error(bookTicketRes.message);
      }

      const resp: any = await getData();
    } catch (error: any) {
      console.log("error:", error);
      toast.error(error.message);
    }
  };

  const ticketResetHandler = async () => {
    const res: any = await resetTicketsApi();

    if (res.data.success) toast.success(res.data.message);
    else toast.error(res.data.message);

    await getData();

    setCurrentBooked([]);

    if (!res || !res.success) {
      console.log("abceddfas");
    }
  };

  const getData = async () => {
    try {
      const res: any = await getTicketDataApi();
      if (res.data.success) {
        setBookingData(res.data.seatsData);
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
    <div>
      <h1>Booking Page</h1>;
      <div className="flex">
        {/* left seats array div  */}
        <div className="flex-1 grid grid-cols-7  border-1  border-black shadow-md ">
          {bookingData.map((value, index) => {
            return (
              <div
                key={`seat-${index}`}
                className={`p-2 m-2 border rounded-lg max-w-10 max-h-10 text-center bg-green-50 ${
                  value.booked ? "bg-red-400" : "bg-green-500"
                }`}
              >
                {value.seatNumber}
              </div>
            );
          })}
        </div>

        {/* right input filed Div  */}
        <div className="flex-1 min-w-56 flex justify-center items-center">
          {/* booked seats number  */}
          <div>
            <div className="flex">
              {currentBooked.map((value, index) => (
                <div
                  key={`current-${index}`}
                  className="w-10 h-10 p-2 m-2 text-center bg-yellow-200 border rounded-md"
                >
                  {value}
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center space-y-4 p-4">
              <input
                type="number"
                min={0}
                max={7}
                value={inputValue}
                onChange={(e: any) => setInputValue(parseInt(e.target.value))}
                className="w-56 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg"
              />

              <div className="flex space-x-4">
                <button
                  className="px-4 py-2 bg-green-400 text-white font-semibold rounded-md hover:bg-green-500 transition duration-300"
                  onClick={bookTicketsHandler}
                >
                  Book Tickets
                </button>
                <button
                  className="px-4 py-2 bg-green-100 text-gray-700 border border-gray-300 rounded-md hover:bg-green-200 transition duration-300"
                  onClick={ticketResetHandler}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
