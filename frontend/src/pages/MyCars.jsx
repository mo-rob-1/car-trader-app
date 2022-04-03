import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserCars, updateCar, deleteCar, reset } from "../features/cars/carSlice";

function MyCars() {
  const { cars, isLoading, isSuccess, isError, message } = useSelector((state) => state.car);
  const { user } = useSelector((state) => state.auth);

  const params = useParams();
  const { carId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <h1 className="text-3xl font-bold">My Cars - {user.name}</h1>
      {cars.length > 0 ? (
        <div>
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
                <button
                  onClick={() => {
                    dispatch(updateCar(car._id, car.status));
                    toast.success("Car status updated");
                  }}
                  className="btn btn-success"
                >
                  Mark As Sold
                </button>
                <button onClick={() => dispatch(deleteCar(car._id))} className="btn btn-error">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3>No Cars Available</h3>
      )}
    </>
  );
}

export default MyCars;
