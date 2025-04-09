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
    { seatNumber: 3, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4b8c" },
    { seatNumber: 4, isBooked: false, userId: null },
    { seatNumber: 5, isBooked: false, userId: null },
    { seatNumber: 6, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4b8d" },
    { seatNumber: 7, isBooked: false, userId: null },
    { seatNumber: 8, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4b8e" },
    { seatNumber: 9, isBooked: false, userId: null },
    { seatNumber: 10, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4b8f" },
    { seatNumber: 11, isBooked: false, userId: null },
    { seatNumber: 12, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4b90" },
    { seatNumber: 13, isBooked: false, userId: null },
    { seatNumber: 14, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4b91" },
    { seatNumber: 15, isBooked: false, userId: null },
    { seatNumber: 16, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4b92" },
    { seatNumber: 17, isBooked: false, userId: null },
    { seatNumber: 18, isBooked: false, userId: null },
    { seatNumber: 19, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4b93" },
    { seatNumber: 20, isBooked: false, userId: null },
    { seatNumber: 21, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4b94" },
    { seatNumber: 22, isBooked: false, userId: null },
    { seatNumber: 23, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4b95" },
    { seatNumber: 24, isBooked: false, userId: null },
    { seatNumber: 25, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4b96" },
    { seatNumber: 26, isBooked: false, userId: null },
    { seatNumber: 27, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4b97" },
    { seatNumber: 28, isBooked: false, userId: null },
    { seatNumber: 29, isBooked: false, userId: null },
    { seatNumber: 30, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4b98" },
    { seatNumber: 31, isBooked: false, userId: null },
    { seatNumber: 32, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4b99" },
    { seatNumber: 33, isBooked: false, userId: null },
    { seatNumber: 34, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4ba0" },
    { seatNumber: 35, isBooked: false, userId: null },
    { seatNumber: 36, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4ba1" },
    { seatNumber: 37, isBooked: false, userId: null },
    { seatNumber: 38, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4ba2" },
    { seatNumber: 39, isBooked: false, userId: null },
    { seatNumber: 40, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4ba3" },
    { seatNumber: 41, isBooked: false, userId: null },
    { seatNumber: 42, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4ba4" },
    { seatNumber: 43, isBooked: false, userId: null },
    { seatNumber: 44, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4ba5" },
    { seatNumber: 45, isBooked: false, userId: null },
    { seatNumber: 46, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4ba6" },
    { seatNumber: 47, isBooked: false, userId: null },
    { seatNumber: 48, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4ba7" },
    { seatNumber: 49, isBooked: false, userId: null },
    { seatNumber: 50, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4ba8" },
    { seatNumber: 51, isBooked: false, userId: null },
    { seatNumber: 52, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4ba9" },
    { seatNumber: 53, isBooked: false, userId: null },
    { seatNumber: 54, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4baa" },
    { seatNumber: 55, isBooked: false, userId: null },
    { seatNumber: 56, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4bab" },
    { seatNumber: 57, isBooked: false, userId: null },
    { seatNumber: 58, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4bac" },
    { seatNumber: 59, isBooked: false, userId: null },
    { seatNumber: 60, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4bad" },
    { seatNumber: 61, isBooked: false, userId: null },
    { seatNumber: 62, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4bae" },
    { seatNumber: 63, isBooked: false, userId: null },
    { seatNumber: 64, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4baf" },
    { seatNumber: 65, isBooked: false, userId: null },
    { seatNumber: 66, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4bb0" },
    { seatNumber: 67, isBooked: false, userId: null },
    { seatNumber: 68, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4bb1" },
    { seatNumber: 69, isBooked: false, userId: null },
    { seatNumber: 70, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4bb2" },
    { seatNumber: 71, isBooked: false, userId: null },
    { seatNumber: 72, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4bb3" },
    { seatNumber: 73, isBooked: false, userId: null },
    { seatNumber: 74, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4bb4" },
    { seatNumber: 75, isBooked: false, userId: null },
    { seatNumber: 76, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4bb5" },
    { seatNumber: 77, isBooked: false, userId: null },
    { seatNumber: 78, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4bb6" },
    { seatNumber: 79, isBooked: false, userId: null },
    { seatNumber: 80, isBooked: false, userId: "60b8d6c9f1d2c45f5d2d4bb7" },
  ]);

  const [currentBooked, setCurrentBooked] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<number>(0);

  // make 2D array of the seats
  // make 11*8 2D array
  // 0=> AvailableSeats
  // 1=>bookedSeats

  let seatsGrid: number[][] = Array.from({ length: 12 }, () =>
    Array(7).fill(1)
  );

  for (let i = 0; i < bookingData.length; i++) {
    let row: number = Math.floor(i / 7);
    let col: number = i % 7;
    // console.log({ row, col });

    seatsGrid[row][col] = bookingData[i].isBooked ? 1 : 0;
  }

  const assignSeatsInRow = (seatsGrid: number[][], ticketCount: number) => {
    setCurrentBooked([]);

    for (let i = 0; i < seatsGrid.length; i++) {
      let row = seatsGrid[i];
      // if consecutive ticketCount is available in the row
      let count = 0;
      for (let j = 0; j < row.length; j++) {
        if (row[j] == 1) {
          count = 0;
        } else count++;

        // found tickcount seats in a row
        if (count == ticketCount) {
          //  [ x,    j-1,j]  [j-ticketCount+1,....,j];
          const seatsArr = Array.from({ length: ticketCount }, (_, index) => {
            return i * 7 + (j - index) + 1; // Adjust seat index calculation
          });
          return seatsArr.reverse();
        }
      }
    }

    return [];
  };

  const directions = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  const DFS = (
    seatsGrid: number[][],
    visited: boolean[][],
    elements: number[],
    i: number,
    j: number
  ) => {
    let m = seatsGrid.length;
    let n = seatsGrid[0].length;

    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      visited[i][j] ||
      seatsGrid[i][j] == 1
    )
      return;

    elements.push(i * 7 + j + 1);
    visited[i][j] = true;

    for (let dir of directions) {
      DFS(seatsGrid, visited, elements, i + dir[0], j + dir[1]);
    }
  };

  const assignNearestTickets = (seatsGrid: number[][], ticketCount: number) => {
    // use DFS to find the connected clusters
    // and then assign seats

    let m = seatsGrid.length;
    let n = seatsGrid[0].length;
    const visited: boolean[][] = Array.from({ length: m }, () =>
      Array(n).fill(false)
    );

    let clusterArr: number[][] = [];

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < m; j++) {
        if (visited[i][j] || seatsGrid[i][j] == 1) continue;

        const elements: number[] = [];
        DFS(seatsGrid, visited, elements, i, j);
        if (elements && elements.length) clusterArr.push(elements);

        // if any cluster is of the size greater then  ticketCount send that cluster
        if (elements.length >= ticketCount)
          return elements.slice(0, ticketCount);
      }
    }

    // require multiple cluster to make ticketCount seats

    clusterArr.sort((a: any, b: any) => a.length - b.length);

    let bookSeats = [];

    for (let cluster of clusterArr) {
      let remainingSeats: number = ticketCount - bookSeats.length;

      if (remainingSeats > cluster.length) {
        // add all the elements into the bookSeats
        bookSeats.push(...cluster);
      } else {
        bookSeats.push(...cluster.slice(0, remainingSeats));
        break;
      }
    }

    if (bookSeats.length == ticketCount) return bookSeats;

    return [];
  };

  const bookTickets = () => {
    const ticketCount = inputValue;

    let currBooked = assignSeatsInRow(seatsGrid, ticketCount);

    if (!currBooked || currBooked.length == 0) {
      // no seats available in one row find other seats
      currBooked = assignNearestTickets(seatsGrid, ticketCount);
      console.log("from cluster", currBooked);
    }

    const updatedData = bookingData.map((seat: Seat) => {
      if (currBooked.find((value) => value == seat.seatNumber))
        return { ...seat, isBooked: true, userId: "meriId" };
      return seat;
    });
    setCurrentBooked(currBooked);
    setBookingData(updatedData);
  };

  const cancelBookedTickets = () => {
    const updatedData = bookingData.map((seat: Seat) => ({
      ...seat,
      isBooked: false,
    }));

    setBookingData(updatedData);
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
                onChange={(e: any) => setInputValue(parseInt(e.target.value))}
                className="w-56 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg"
              />

              <div className="flex space-x-4">
                <button
                  className="px-4 py-2 bg-green-400 text-white font-semibold rounded-md hover:bg-green-500 transition duration-300"
                  onClick={bookTickets}
                >
                  Book Tickets
                </button>
                <button
                  className="px-4 py-2 bg-green-100 text-gray-700 border border-gray-300 rounded-md hover:bg-green-200 transition duration-300"
                  onClick={cancelBookedTickets}
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
