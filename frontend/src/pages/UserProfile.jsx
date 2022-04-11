import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getUserCars, updateCar, deleteCar, reset } from "../features/cars/carSlice";

function UserProfile() {
  const { cars, isLoading, isSuccess } = useSelector((state) => state.car);
  const { user } = useSelector((state) => state.auth);

  // const params = useParams();
  // const { carId } = useParams();

  const dispatch = useDispatch();
  // const navigate = useNavigate();

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
    return <h3 className="text-2xl font-bold">Loading...</h3>;
  }

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">My Profile</h1>
        <h2 className="text-2xl font-bold">Name: {user.name}</h2>
        <h3 className="text-2xl font-bold">Email: {user.email}</h3>
      </div>
      <h1 className="text-3xl font-bold">{user.name}'s Cars</h1>
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
        <h3 className="text-3xl font-bold">No Cars Added.</h3>
      )}
    </>
  );
}

export default UserProfile;
