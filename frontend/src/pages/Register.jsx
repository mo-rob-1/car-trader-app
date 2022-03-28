import { useState, useEffect } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

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
