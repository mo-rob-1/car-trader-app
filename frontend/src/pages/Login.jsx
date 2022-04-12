import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // Redirect when user is logged in
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <h3 className="text-2xl font-bold mt-5 m-auto w-11/12 max-w-screen-2xl">Loading...</h3>;
  }

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <section>
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <form className="my-5 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-8" onSubmit={onSubmit}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email:</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full max-w-xs"
                id="email"
                value={email}
                name="email"
                onChange={onChange}
                required
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password:</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full max-w-xs"
                id="password"
                value={password}
                name="password"
                onChange={onChange}
                required
              />
            </div>

            <div className="my-5">
              <button className="btn btn-primary btn-wide">Login</button>
            </div>
          </form>
          <div className="text-center underline">
            <Link to="/register">Sign Up Instead</Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
