import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addCar, reset } from "../features/cars/carSlice";

function AddCar() {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector((state) => state.car);

  const [count, getCount] = useState(0);

  const [name] = useState(user?.name);
  const [email] = useState(user?.email);
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
  const [engineSize, setEngineSize] = useState("");

  const [fuelTypeOptions] = useState({
    options: ["Petrol", "Diesel", "Hybrid", "Electric"],
  });
  const [colourOptions] = useState({
    options: [
      "Black",
      "White",
      "Red",
      "Blue",
      "Green",
      "Yellow",
      "Purple",
      "Orange",
      "Pink",
      "Brown",
      "Grey",
      "Silver",
      "Gold",
      "Bronze",
      "Multicolour",
      "Platinum",
      "Other",
    ],
  });
  const [regionOptions] = useState({
    options: [
      "London",
      "North West",
      "North East",
      "Yorkshire",
      "Midlands",
      "South East",
      "South West",
      "Wales",
      "Scotland",
    ],
  });
  const [doorsOptions] = useState({
    options: ["2", "4", "5", "6"],
  });
  const [seatsOptions] = useState({
    options: ["2", "4", "5", "6", "8"],
  });
  const [engineSizeOptions] = useState({
    options: ["1", "1.2", "1.4", "1.6", "1.8", "2", "2.2", "2.4", "2.6", "2.8", "3", "4", "5"],
  });
  const [bodyTypeOptions] = useState({
    options: [
      "Sedan",
      "Hatchback",
      "SUV",
      "MPV",
      "Coupe",
      "Saloon",
      "Estate",
      "Convertible",
      "Supercar",
      "Sports",
      "Luxury",
      "Pickup",
      "Van",
    ],
  });
  const [gearboxOptions] = useState({
    options: ["Automatic", "Manual"],
  });

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

  // Character counter
  const keyhandler = (e) => {
    getCount(e.target.value.length);
  };

  if (isLoading) {
    return <h3 className="text-2xl font-bold mt-5 m-auto w-11/12 max-w-screen-2xl">Loading...</h3>;
  }

  return (
    <>
      <div className="bg-base-200">
        <div className="m-auto w-11/12 max-w-screen-2xl pt-5 pb-5 md:pt-12 md:pb-12">
          <section className="mt-6 bg-white p-5 md:p-8 rounded-2xl">
            <section className="mb-6">
              <h1 className="text-3xl font-bold">Add a car</h1>
            </section>
            <form onSubmit={onSubmit} className="grid gap-3">
              <div className="md:flex">
                <div className="form-control w-full max-w-xs md:mr-5">
                  <label className="label">
                    <span className="label-text" data-testid="sellers-name-label">
                      Seller's Name:
                    </span>
                  </label>
                  <input
                    data-testid="sellers-name-input"
                    className="input input-bordered w-full max-w-xs !bg-white"
                    id="name"
                    value={name}
                    name="name"
                    disabled
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text" data-testid="sellers-email-label">
                      Seller's Email Address:
                    </span>
                  </label>
                  <input
                    data-testid="sellers-email-input"
                    className="input input-bordered w-full max-w-xs !bg-white"
                    id="email"
                    value={email}
                    name="email"
                    disabled
                  />
                </div>
              </div>

              <hr className="mt-4"></hr>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text" data-testid="contact-number-label">
                    Seller's Contact Number:
                  </span>
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  data-testid="contact-number-input"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text" data-testid="make-label">
                    Make:
                  </span>
                </label>
                <input
                  data-testid="make-input"
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
                  <span className="label-text" data-testid="model-label">
                    Model:
                  </span>
                </label>
                <input
                  data-testid="model-input"
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
                  <span className="label-text" data-testid="image-label">
                    Image URL:
                  </span>
                </label>
                <input
                  data-testid="image-input"
                  className="input input-bordered w-full max-w-xs"
                  id="imageURL"
                  name="imageURL"
                  value={imageURL}
                  onChange={(e) => setImageURL(e.target.value)}
                  required
                />
                <label class="label">
                  <span class="label-text-alt">E.g. https://www.domain.com/ford-focus.jpeg</span>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text" data-testid="desc-label">
                    Description:
                  </span>
                </label>
                <textarea
                  data-testid="desc-textarea"
                  maxlength="2000"
                  onKeyUp={(e) => keyhandler(e)}
                  className="textarea textarea-bordered h-24 lg:w-3/5 xl:w-2/5"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <label class="label">
                  <span class="label-text-alt">Max 2000 characters - {count} / 2000</span>
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text" data-testid="location-label">
                    Location:
                  </span>
                </label>
                <input
                  data-testid="location-input"
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
                  <span className="label-text" data-testid="region-label">
                    Region:
                  </span>
                </label>
                <select
                  data-testid="region-select"
                  className="select select-bordered"
                  id="region"
                  name="region"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select region
                  </option>
                  {regionOptions.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text" data-testid="mileage-label">
                    Mileage:
                  </span>
                </label>
                <input
                  data-testid="mileage-input"
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
                  <span className="label-text" data-testid="fuel-type-label">
                    Fuel Type:
                  </span>
                </label>
                <select
                  data-testid="fuel-type-select"
                  className="select select-bordered"
                  id="fuelType"
                  name="fuelType"
                  value={fuelType}
                  onChange={(e) => setFuelType(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select fuel type
                  </option>
                  {fuelTypeOptions.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text" data-testid="engine-size-label">
                    Engine Size:
                  </span>
                </label>
                <select
                  data-testid="engine-size-select"
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
                  {engineSizeOptions.options.map((option) => (
                    <option key={option} value={option}>
                      {option} litres
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text" data-testid="body-type-label">
                    Body Type:
                  </span>
                </label>
                <select
                  data-testid="body-type-select"
                  className="select select-bordered"
                  id="bodyType"
                  name="bodyType"
                  value={bodyType}
                  onChange={(e) => setBodyType(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select body type
                  </option>
                  {bodyTypeOptions.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text" data-testid="transmission-label">
                    Transmission:
                  </span>
                </label>
                <select
                  data-testid="transmission-select"
                  className="select select-bordered"
                  id="transmission"
                  name="transmission"
                  value={transmission}
                  onChange={(e) => setTransmission(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select transmission
                  </option>
                  {gearboxOptions.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text" data-testid="colour-label">
                    Colour:
                  </span>
                </label>
                <select
                  data-testid="colour-select"
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
                  {colourOptions.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text" data-testid="number-of-doors-label">
                    Number of doors:
                  </span>
                </label>
                <select
                  data-testid="number-of-doors-select"
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
                  {doorsOptions.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text" data-testid="number-of-seats-label">
                    Number of seats:
                  </span>
                </label>
                <select
                  data-testid="number-of-seats-select"
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
                  {seatsOptions.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text" data-testid="price-label">
                    Price:
                  </span>
                </label>
                <input
                  data-testid="price-input"
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

              <div className="mt-3">
                <button className="btn" data-testid="submit-button">
                  Submit
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default AddCar;
