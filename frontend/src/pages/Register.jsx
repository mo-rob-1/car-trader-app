import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <section>
        <h1 className="text-3xl font-bold my-5">Register</h1>
      </section>

      <section>
        <form className="my-5" onSubmit={onSubmit}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Enter your name:</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              id="name"
              value={name}
              name="name"
              onChange={onChange}
              required
            />
          </div>

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

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Confirm password:</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              id="password2"
              value={password2}
              name="password2"
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

export default Register;
