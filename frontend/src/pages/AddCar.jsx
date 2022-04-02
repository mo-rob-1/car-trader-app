import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addCar, reset } from "../features/cars/carSlice";

function AddCar() {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector((state) => state.car);

  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      dispatch(reset());
      navigate("/");
    }

    dispatch(reset());
  }, [dispatch, isError, isSuccess, navigate, message]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addCar({
        model,
        description,
        year,
        price,
        imageURL,
        location,
        phoneNumber,
        email,
      })
    );
  };

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <section>
        <h1 className="text-3xl font-bold">Add a car</h1>
      </section>
      <section>
        <form onSubmit={onSubmit}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Seller's Name:</span>
            </label>
            <input className="input input-bordered w-full max-w-xs" id="name" value={name} name="name" disabled />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Seller's Email Address:</span>
            </label>
            <input className="input input-bordered w-full max-w-xs" id="email" value={email} name="email" disabled />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Seller's Phone Number:</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Model:</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              id="model"
              name="model"
              onChange={(e) => setModel(e.target.value)}
              value={model}
              required
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Model Year:</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              id="model"
              name="model"
              onChange={(e) => setYear(e.target.value)}
              value={year}
              required
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Image URL:</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              id="imageURL"
              name="imageURL"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Price:</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Location:</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div>
            <button className="btn">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default AddCar;
