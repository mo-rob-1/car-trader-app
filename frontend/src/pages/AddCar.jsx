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
  const [price, setPrice] = useState(0);
  const [doors, setDoors] = useState("");
  const [seats, setSeats] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [region, setRegion] = useState("");
  const [make, setMake] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [transmission, setTransmission] = useState("");
  const [mileage, setMileage] = useState(0);
  const [colour, setColour] = useState("");
  const [engineSize, setEngineSize] = useState(1.0);

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
        make,
        model,
        description,
        price,
        imageURL,
        location,
        region,
        phoneNumber,
        email,
        fuelType,
        transmission,
        doors,
        seats,
        bodyType,
        mileage,
        colour,
        engineSize,
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
              <span className="label-text">Make:</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              id="make"
              name="make"
              onChange={(e) => setMake(e.target.value)}
              value={make}
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
              <span className="label-text">Fuel Type:</span>
            </label>
            <select
              className="select select-bordered"
              id="fuelType"
              name="fuelType"
              value={fuelType}
              onChange={(e) => setFuelType(e.target.value)}
              required
            >
              <option value="" disabled>
                Add fuel type
              </option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Engine Size:</span>
            </label>
            <select
              className="select select-bordered"
              id="engineSize"
              name="engineSize"
              value={engineSize}
              onChange={(e) => setEngineSize(e.target.value)}
              required
            >
              <option value="" disabled>
                Select the engine size
              </option>
              <option value="1">1.0 litre</option>
              <option value="1.2">1.2 litres</option>
              <option value="1.4">1.4 litres</option>
              <option value="1.6">1.6 litres</option>
              <option value="1.8">1.8 litres</option>
              <option value="2">2.0 litres</option>
              <option value="2.2">2.2 litres</option>
              <option value="2.4">2.4 litres</option>
              <option value="2.6">2.6 litres</option>
              <option value="2.8">2.8 litres</option>
              <option value="3">3.0 litres</option>
              <option value="4">4.0 litres</option>
              <option value="5">5.0 litres</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Body Type:</span>
            </label>
            <select
              className="select select-bordered"
              id="bodyType"
              name="bodyType"
              value={bodyType}
              onChange={(e) => setBodyType(e.target.value)}
              required
            >
              <option value="" disabled>
                Add body type
              </option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
              <option value="SUV">SUV</option>
              <option value="MPV">MPV</option>
              <option value="Coupe">Coupe</option>
              <option value="Saloon">Saloon</option>
              <option value="Estate">Estate</option>
              <option value="Convertible">Convertible</option>
              <option value="Supercar">Supercar</option>
              <option value="Sports">Sports</option>
              <option value="Luxury">Luxury</option>
              <option value="Pickup">Pickup</option>
              <option value="Van">Van</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Transmission:</span>
            </label>
            <select
              className="select select-bordered"
              id="transmission"
              name="transmission"
              value={transmission}
              onChange={(e) => setTransmission(e.target.value)}
              required
            >
              <option value="" disabled>
                Add transmission
              </option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Colour:</span>
            </label>
            <select
              className="select select-bordered"
              id="colour"
              name="colour"
              value={colour}
              onChange={(e) => setColour(e.target.value)}
              required
            >
              <option value="" disabled>
                Select colour
              </option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
              <option value="Yellow">Yellow</option>
              <option value="Purple">Purple</option>
              <option value="Orange">Orange</option>
              <option value="Pink">Pink</option>
              <option value="Brown">Brown</option>
              <option value="Grey">Grey</option>
              <option value="Silver">Silver</option>
              <option value="Gold">Gold</option>
              <option value="Bronze">Bronze</option>
              <option value="Multicolour">Multicolour</option>
              <option value="Platinum">Platinum</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Number of doors:</span>
            </label>
            <select
              className="select select-bordered"
              id="doors"
              name="doors"
              value={doors}
              onChange={(e) => setDoors(e.target.value)}
              required
            >
              <option value="" disabled>
                Select number of doors
              </option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Number of seats:</span>
            </label>
            <select
              className="select select-bordered"
              id="seats"
              name="seats"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              required
            >
              <option value="" disabled>
                Select number of seats
              </option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="8">8</option>
            </select>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Mileage:</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="number"
              step="1"
              id="mileage"
              name="mileage"
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
              required
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Price:</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="number"
              step="0.01"
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

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Pick a region:</span>
            </label>
            <select
              className="select select-bordered"
              id="region"
              name="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              required
            >
              <option value="" disabled>
                Add a region
              </option>
              <option value="London">London</option>
              <option value="North West">North West</option>
              <option value="North East">North East</option>
              <option value="Yorkshire">Yorkshire</option>
              <option value="Midlands">Midlands</option>
              <option value="South East">South East</option>
              <option value="South West">South West</option>
              <option value="Wales">Wales</option>
              <option value="Scotland">Scotland</option>
            </select>
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
