import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import BookingPage from "./components/BookingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/ticket-booking" element={<BookingPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
