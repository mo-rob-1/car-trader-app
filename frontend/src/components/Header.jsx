import { Link, useNavigate } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <Link to="/">Car Trader</Link>
      </div>
      <ul>
        <li>
          <button>Logout</button>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
