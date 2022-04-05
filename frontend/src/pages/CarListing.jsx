import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCars, reset } from "../features/cars/carSlice";
// import AllCarItem from "../components/AllCarItem";
import axios from "axios";

function CarListing() {
  const { isLoading, isSuccess } = useSelector((state) => state.car);
  const [carList, setCarList] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [status, setStatus] = useState("");
  const [gearbox, setGearbox] = useState("");
  const [colour, setColour] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [engineSize, setEngineSize] = useState("");
  const [doors, setDoors] = useState("");
  const [seats, setSeats] = useState("");
  const [visible, setVisible] = useState(3);

  const API_URL = "/api/cars/";

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setCarList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [isSuccess, dispatch]);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  const showMoreItems = () => {
    setVisible((prevVisible) => prevVisible + 3);
  };

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold">All Cars</h1>
      {/* {cars.length > 0 ? (
        <div>
          {cars.map((car) => (
            <AllCarItem key={car._id} car={car} />
          ))}
        </div>
      ) : (
        <h3>No Cars Available</h3>
      )} */}
      <input
        className="input input-bordered w-full max-w-xs"
        type="text"
        placeholder="Search for a car..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      {/* <select
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      >
        <option value="">Filter by Model</option>
        {carList.map((car) => (
          <option key={car._id} value={car.model}>
            {car.model}
          </option>
        ))}
      </select> */}

      <select
        onChange={(e) => {
          setRegion(e.target.value);
        }}
      >
        <option value="">Filter by Region</option>
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

      <select
        onChange={(e) => {
          setStatus(e.target.value);
        }}
      >
        <option value="">Filter by Status</option>
        <option value="Sold">Sold</option>
        <option value="Available">Available</option>
      </select>

      <select
        onChange={(e) => {
          setColour(e.target.value);
        }}
      >
        <option value="">Filter by Colour</option>
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

      <select
        onChange={(e) => {
          setBodyType(e.target.value);
        }}
      >
        <option value="">Filter by body type</option>
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

      <select
        onChange={(e) => {
          setGearbox(e.target.value);
        }}
      >
        <option value="">Filter by gearbox type</option>
        <option value="Manual">Manual</option>
        <option value="Automatic">Automatic</option>
      </select>

      <select
        onChange={(e) => {
          setFuelType(e.target.value);
        }}
      >
        <option value="">Filter by fuel type</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="Electric">Electric</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <select
        onChange={(e) => {
          setDoors(e.target.value);
        }}
      >
        <option value="">Filter by number of doors</option>
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>

      <select
        onChange={(e) => {
          setSeats(e.target.value);
        }}
      >
        <option value="">Filter by number of seats</option>
        <option value="2">2</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="8">8</option>
      </select>

      <select
        onChange={(e) => {
          setEngineSize(e.target.value);
        }}
      >
        <option value="">Filter by engine size</option>
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

      {carList
        .filter((car) => {
          if (search === "") {
            return car;
          } else if (
            car.model.toLowerCase().includes(search.toLowerCase()) ||
            car.make.toLowerCase().includes(search.toLowerCase())
          ) {
            return car;
          }
          return false;
        })
        .filter((car) => {
          if (region === "") {
            return car;
          } else if (car.region.toLowerCase().includes(region.toLowerCase())) {
            return car;
          }
          return false;
        })
        .filter((car) => {
          if (status === "") {
            return car;
          } else if (car.status.toLowerCase().includes(status.toLowerCase())) {
            return car;
          }
          return false;
        })
        .filter((car) => {
          if (gearbox === "") {
            return car;
          } else if (car.transmission.toLowerCase().includes(gearbox.toLowerCase())) {
            return car;
          }
          return false;
        })
        .filter((car) => {
          if (bodyType === "") {
            return car;
          } else if (car.bodyType.toLowerCase().includes(bodyType.toLowerCase())) {
            return car;
          }
          return false;
        })
        .filter((car) => {
          if (colour === "") {
            return car;
          } else if (car.colour.toLowerCase().includes(colour.toLowerCase())) {
            return car;
          }
          return false;
        })
        .filter((car) => {
          if (fuelType === "") {
            return car;
          } else if (car.fuelType.toLowerCase().includes(fuelType.toLowerCase())) {
            return car;
          }
          return false;
        })
        .filter((car) => {
          if (doors === "") {
            return car;
          } else if (car.doors.toLowerCase().includes(doors.toLowerCase())) {
            return car;
          }
          return false;
        })
        .filter((car) => {
          if (seats === "") {
            return car;
          } else if (car.seats.toLowerCase().includes(seats.toLowerCase())) {
            return car;
          }
          return false;
        })
        .filter((car) => {
          if (engineSize === "") {
            return car;
          } else if (car.engineSize.toLowerCase().includes(engineSize.toLowerCase())) {
            return car;
          }
          return false;
        })
        .slice(0, visible)
        .map((car) => (
          <div className="card w-96 bg-base-100 shadow-xl my-5" key={car._id}>
            <figure>
              {" "}
              <img src={car.imageURL} alt={car.model} className="w-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {car.make} {car.model}
              </h2>

              <p>Desc: {car.description}</p>
              <p>Price: £{car.price}</p>
              <p>Location: {car.location}</p>
              <p>Phone: {car.phoneNumber}</p>
              <p>Email: {car.email}</p>
              {car.status === "Available" ? (
                <div className="bg-green-600 w-fit px-5 py-3 rounded-md my-3">
                  <p className="text-white font-bold">Available</p>
                </div>
              ) : (
                <div className="bg-red-600 w-fit px-5 py-3 rounded-md my-3">
                  <p className="text-white font-bold">Sold</p>
                </div>
              )}
              <Link to={`/cars/${car._id}`} className="btn">
                View
              </Link>
            </div>
          </div>
        ))}
      <button className="btn" onClick={showMoreItems}>
        Load More
      </button>
    </>
  );
}

export default CarListing;
