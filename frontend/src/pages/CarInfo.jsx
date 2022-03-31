import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserCar, reset } from "../features/cars/carSlice";
import { useParams } from "react-router-dom";

function CarInfo() {
  const { car, isLoading, isError } = useSelector((state) => state.car);

  const dispatch = useDispatch();

  const { carId } = useParams();

  useEffect(() => {
    dispatch(getUserCar(carId));
    //eslint-disable-next-line
  }, [isError, carId]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>Error</h3>;
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={car.imageURL} alt={car.model} className="max-w-sm rounded-lg shadow-2xl my-5" />
        <div>
          <h1 className="text-5xl font-bold">{car.model}</h1>
          <p>Desc: {car.description}</p>
          <p>Price: {car.price}</p>
          <p>Location: {car.location}</p>
          <p>Number: {car.phoneNumber}</p>
          <p>Email: {car.email}</p>
        </div>
      </div>
    </div>
  );
}

export default CarInfo;
