import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUserCars, reset } from "../features/cars/carSlice";

function MyCars() {
  const { cars, isLoading, isSuccess } = useSelector((state) => state.car);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [isSuccess, dispatch]);

  useEffect(() => {
    dispatch(getUserCars());
  }, [dispatch]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold">My Cars</h1>
      {/* {cars.length > 0 ? (
        <div>
          {cars.map((car) => (
            <AllCarItem key={car._id} car={car} />
          ))}
        </div>
      ) : (
        <h3>No Cars Available</h3>
      )} */}

      {cars.map((car) => (
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
            <Link to={`/cars/${car._id}`} className="btn">
              View
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default MyCars;
