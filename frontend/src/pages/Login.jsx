import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <section>
        <h1 className="text-3xl font-bold my-5">Login</h1>
      </section>

      <section>
        <form className="my-5" onSubmit={onSubmit}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter your email:</span>
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
              <span className="label-text">Enter password:</span>
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
            <button className="btn btn-wide">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
