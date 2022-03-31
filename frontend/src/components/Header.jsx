import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header>
      <div>
        <Link to="/">Car Trader</Link>
      </div>
      <ul>
        {user ? (
          <>
            <li>
              <button className="btn">
                <Link to="/add-car">Add Car</Link>
              </button>
            </li>
            <li>
              <button className="btn">
                <Link to="/mycars">My Cars</Link>
              </button>
            </li>
            <li>
              <button className="btn" onClick={onLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            {" "}
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
