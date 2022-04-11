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
    <header className="mx-auto max-w-screen-2xl w-11/12 md:flex md:justify-between md:pt-5 md:pb-5">
      <div className="text-3xl font-bold md:flex md:justify-center md:items-center">
        <div className="text-center mt-4 md:mt-0">
          <Link to="/">Car Trader</Link>
        </div>
      </div>
      <ul className="mt-4 mb-4 flex justify-center items-center">
        {user ? (
          <>
            <li className="mr-4 md:mr-10">
              <button>
                <Link to="/add-car" className="font-bold">
                  Add Car
                </Link>
              </button>
            </li>
            <li className="mr-4 md:mr-10">
              <button>
                <Link to="/profile" className="font-bold">
                  Profile
                </Link>
              </button>
            </li>
            <li>
              <button onClick={onLogout} className="font-bold">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            {" "}
            <li className="mr-4 md:mr-10">
              <Link to="/login" className="font-bold">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="font-bold">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
