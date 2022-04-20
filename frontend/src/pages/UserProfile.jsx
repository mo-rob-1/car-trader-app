import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser, FaEnvelope } from "react-icons/fa";
import { getUserCars, updateCar, deleteCar, reset } from "../features/cars/carSlice";

function UserProfile() {
  const { cars, isLoading, isSuccess } = useSelector((state) => state.car);
  const { user } = useSelector((state) => state.auth);

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
    return <h3 className="text-2xl font-bold mx-auto max-w-screen-2xl w-11/12 mt-10">Loading...</h3>;
  }

  return (
    <>
      <div className="bg-base-200">
        <div className="m-auto w-11/12 max-w-screen-2xl pt-5 pb-5 md:pt-12 md:pb-12">
          <div className="bg-white p-5 md:p-8 rounded-2xl">
            <h1 className="text-3xl font-bold mb-5">My Profile</h1>
            <hr className="mb-5"></hr>
            <h2 className="text-2xl font-bold flex items-center">
              <FaUser className="mr-2" /> {user?.name}
            </h2>
            <h3 className="text-2xl font-bold flex items-center mt-4">
              <FaEnvelope className="mr-2" /> {user?.email}
            </h3>
          </div>
          <h1 className="text-3xl font-bold mt-10">{user?.name}'s Cars:</h1>
          {cars.length > 0 ? (
            <div className="carWrapper xl:mt-2">
              {cars.map((car) => (
                <div className="card bg-base-100 shadow-xl my-5 relative" key={car._id}>
                  <figure>
                    {" "}
                    <img src={car.imageURL} alt={car.model} className="w-full" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {car.make} {car.model}
                    </h2>
                    <p className="font-bold badge mt-2">{car.location}</p>
                    <div className="flex mt-3">
                      <div className="badge  badge-primary font-bold mr-3">{car.fuelType}</div>
                      <div className="badge badge-primary font-bold mr-3">
                        {(Math.round(car.mileage * 100) / 100).toLocaleString()} Miles
                      </div>
                      <div className="badge badge-primary font-bold">{car.transmission}</div>
                    </div>

                    {car.status === "Available" ? (
                      <div className="bg-green-600 w-fit px-5 py-3  my-3 absolute top-0 left-0">
                        <p className="text-white font-bold">Available</p>
                      </div>
                    ) : (
                      <div className="bg-red-600 w-fit px-5 py-3  my-3 absolute top-0 left-0">
                        <p className="text-white font-bold">Sold</p>
                      </div>
                    )}

                    <p className="mt-3 mb-3 font-bold text-xl">
                      £{(Math.round(car.price * 100) / 100).toLocaleString()}
                    </p>

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
            <h3 className="text-2xl font-bold mt-5">- No cars added yet.</h3>
          )}
        </div>
      </div>
    </>
  );
}

export default UserProfile;
