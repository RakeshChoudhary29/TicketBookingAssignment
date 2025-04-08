import { useState } from "react";

type Seat = {
  seatNumber: number;
  isBooked: boolean;
  userId: string | null;
};

const BookingPage = () => {
  const [bookingData, setBookingData] = useState<Seat[]>([
    {
      seatNumber: 1,
      isBooked: true,
      userId: "5f4dcc3b5aa765d61d8327deb882cf99",
    },
    { seatNumber: 2, isBooked: false, userId: null },
    { seatNumber: 3, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4b8c" },
    { seatNumber: 4, isBooked: false, userId: null },
    { seatNumber: 5, isBooked: false, userId: null },
    { seatNumber: 6, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4b8d" },
    { seatNumber: 7, isBooked: false, userId: null },
    { seatNumber: 8, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4b8e" },
    { seatNumber: 9, isBooked: false, userId: null },
    { seatNumber: 10, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4b8f" },
    { seatNumber: 11, isBooked: false, userId: null },
    { seatNumber: 12, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4b90" },
    { seatNumber: 13, isBooked: false, userId: null },
    { seatNumber: 14, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4b91" },
    { seatNumber: 15, isBooked: false, userId: null },
    { seatNumber: 16, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4b92" },
    { seatNumber: 17, isBooked: false, userId: null },
    { seatNumber: 18, isBooked: false, userId: null },
    { seatNumber: 19, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4b93" },
    { seatNumber: 20, isBooked: false, userId: null },
    { seatNumber: 21, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4b94" },
    { seatNumber: 22, isBooked: false, userId: null },
    { seatNumber: 23, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4b95" },
    { seatNumber: 24, isBooked: false, userId: null },
    { seatNumber: 25, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4b96" },
    { seatNumber: 26, isBooked: false, userId: null },
    { seatNumber: 27, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4b97" },
    { seatNumber: 28, isBooked: false, userId: null },
    { seatNumber: 29, isBooked: false, userId: null },
    { seatNumber: 30, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4b98" },
    { seatNumber: 31, isBooked: false, userId: null },
    { seatNumber: 32, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4b99" },
    { seatNumber: 33, isBooked: false, userId: null },
    { seatNumber: 34, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4ba0" },
    { seatNumber: 35, isBooked: false, userId: null },
    { seatNumber: 36, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4ba1" },
    { seatNumber: 37, isBooked: false, userId: null },
    { seatNumber: 38, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4ba2" },
    { seatNumber: 39, isBooked: false, userId: null },
    { seatNumber: 40, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4ba3" },
    { seatNumber: 41, isBooked: false, userId: null },
    { seatNumber: 42, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4ba4" },
    { seatNumber: 43, isBooked: false, userId: null },
    { seatNumber: 44, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4ba5" },
    { seatNumber: 45, isBooked: false, userId: null },
    { seatNumber: 46, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4ba6" },
    { seatNumber: 47, isBooked: false, userId: null },
    { seatNumber: 48, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4ba7" },
    { seatNumber: 49, isBooked: false, userId: null },
    { seatNumber: 50, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4ba8" },
    { seatNumber: 51, isBooked: false, userId: null },
    { seatNumber: 52, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4ba9" },
    { seatNumber: 53, isBooked: false, userId: null },
    { seatNumber: 54, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4baa" },
    { seatNumber: 55, isBooked: false, userId: null },
    { seatNumber: 56, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4bab" },
    { seatNumber: 57, isBooked: false, userId: null },
    { seatNumber: 58, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4bac" },
    { seatNumber: 59, isBooked: false, userId: null },
    { seatNumber: 60, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4bad" },
    { seatNumber: 61, isBooked: false, userId: null },
    { seatNumber: 62, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4bae" },
    { seatNumber: 63, isBooked: false, userId: null },
    { seatNumber: 64, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4baf" },
    { seatNumber: 65, isBooked: false, userId: null },
    { seatNumber: 66, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4bb0" },
    { seatNumber: 67, isBooked: false, userId: null },
    { seatNumber: 68, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4bb1" },
    { seatNumber: 69, isBooked: false, userId: null },
    { seatNumber: 70, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4bb2" },
    { seatNumber: 71, isBooked: false, userId: null },
    { seatNumber: 72, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4bb3" },
    { seatNumber: 73, isBooked: false, userId: null },
    { seatNumber: 74, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4bb4" },
    { seatNumber: 75, isBooked: false, userId: null },
    { seatNumber: 76, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4bb5" },
    { seatNumber: 77, isBooked: false, userId: null },
    { seatNumber: 78, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4bb6" },
    { seatNumber: 79, isBooked: false, userId: null },
    { seatNumber: 80, isBooked: true, userId: "60b8d6c9f1d2c45f5d2d4bb7" },
  ]);
  const [currentBooked, setCurrentBooked] = useState<number[]>([2, 3, 4, 5, 6]);
  const [inputValue, setInputValue] = useState<number>(0);

  const assignNearestTickets = (ticketCount: number) => {
    // check if available in one line
    for (let i = 0; i < bookingData.length; i++) {
      if (bookingData[i].isBooked == false) {
        let j = 1;
        for (; j < ticketCount; j++) {
          if (bookingData[j].isBooked == false) break;
        }
        console.log({ i, j, ticketCount });

        if (j == ticketCount) {
          setCurrentBooked(
            [...Array(ticketCount).keys()].map((index) => i + index)
          );
          return;
        }
      }
    }
  };

  const bookTickets = () => {
    const ticketCount = inputValue;

    console.log({ ticketCount });

    // find nearest ticketCount
    assignNearestTickets(ticketCount);
  };

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
                  value.isBooked ? "bg-red-400" : "bg-green-500"
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
                onChange={(e: any) => setInputValue(e.target.value)}
                className="w-56 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg"
              />

              <div className="flex space-x-4">
                <button
                  className="px-4 py-2 bg-green-400 text-white font-semibold rounded-md hover:bg-green-500 transition duration-300"
                  onClick={bookTickets}
                >
                  Book Tickets
                </button>
                <button className="px-4 py-2 bg-green-100 text-gray-700 border border-gray-300 rounded-md hover:bg-green-200 transition duration-300">
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
