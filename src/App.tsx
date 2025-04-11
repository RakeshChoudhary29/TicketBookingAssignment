import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import BookingPage from "./components/BookingPage";
import ProtectedRoute from "./middleware/protectedRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/ticket-booking" element={<BookingPage />}></Route>
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
