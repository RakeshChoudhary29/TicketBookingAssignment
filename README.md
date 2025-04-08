


80 seats in a train
7 in one row and  3 in last row

1 2 ... 7 

one person can book atmost 7 seats at a time.
try to book seats in one row.
if not in one row then booking is done such that they are nearby.
user can book as number until the coch is full
user login and signup

no user can book the booked seats of other users untils those seats are cancelled or reset.


3 colors => booked , available , myBookings 

onReset => make the user bookings available

Database 

multiple seats are booked at a time 
seats => seatNumber , isBooked , userId, transactionId, 


1. user -> (name,password,emailId)
2. Bookings -> ()
3. transactons -> userid,(booked,cancelled,reset)


bookings/login-> after login 

bookings?userid=id
on new bookings and all put a post request



request will be sent by userid

[{seatNumber:,isBooked:,userid=myid}]



