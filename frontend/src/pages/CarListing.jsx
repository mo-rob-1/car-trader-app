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
        placeholder="Search..."
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

      {carList
        .filter((car) => {
          if (search === "") {
            return car;
          } else if (car.model.toLowerCase().includes(search.toLowerCase())) {
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
        .slice(0, visible)
        .map((car) => (
          <div className="card w-96 bg-base-100 shadow-xl my-5" key={car._id}>
            <figure>
              {" "}
              <img src={car.imageURL} alt={car.model} className="w-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{car.model}</h2>
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
