import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CarListing from "./pages/CarListing";
import CarDetails from "./pages/CarDetails";
import Wishlist from "./pages/Wishlist";
import AddCar from "./pages/AddCar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<CarListing />} />
            <Route path="/car/:id" element={<CarDetails />} />
            <Route path="/add-car" element={<PrivateRoute />}>
              <Route path="/add-car" element={<AddCar />} />
            </Route>
            <Route path="/wishlist" element={<PrivateRoute />}>
              <Route path="/wishlist" element={<Wishlist />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
