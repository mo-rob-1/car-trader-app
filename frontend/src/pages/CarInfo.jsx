import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserCar } from "../features/cars/carSlice";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { BsShareFill, BsGearFill, BsArrowLeft } from "react-icons/bs";
import { FaPhoneAlt, FaEnvelope, FaCarAlt, FaGasPump, FaRoad } from "react-icons/fa";
import { MdLocationPin, MdSensorDoor } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { RiPaintFill } from "react-icons/ri";
import { GiCarSeat } from "react-icons/gi";
import { Link } from "react-router-dom";

function CarInfo() {
  const { car, isLoading, isError } = useSelector((state) => state.car);

  const dispatch = useDispatch();

  const { carId } = useParams();

  const getUrl = window.location.href;

  async function copyToClip() {
    await navigator.clipboard.writeText(getUrl);
    toast.success("URL copied to clipboard");
  }

  useEffect(() => {
    dispatch(getUserCar(carId));
    //eslint-disable-next-line
  }, [isError, carId]);

  if (isLoading) {
    return <h3 className="text-2xl font-bold mt-5 m-auto w-11/12 max-w-screen-2xl">Loading...</h3>;
  }

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content lg:gap-12 flex-col lg:flex-row">
          <img src={car.imageURL} alt={car.model} className="w-full max-w-sm rounded-lg shadow-2xl my-5" />
          <div>
            <div className="flex justify-between">
              <Link className="btn mb-10" to="/">
                <BsArrowLeft className="mr-2" /> Back
              </Link>

              <button className="btn" onClick={copyToClip}>
                <BsShareFill className="mr-2" /> Share URL
              </button>
            </div>

            <h1 className="text-5xl font-bold mb-5">
              {car.make} {car.model}
            </h1>
            <h2 className="text-2xl font-bold mb-5">£{car.price}</h2>

            {car.status === "Available" ? (
              <div className="bg-green-600 w-fit px-5 py-3 rounded-md my-3">
                <p className="text-white font-bold">Available</p>
              </div>
            ) : (
              <div className="bg-red-600 w-fit px-5 py-3 rounded-md my-3">
                <p className="text-white font-bold">Sold</p>
              </div>
            )}

            <p className="mt-8 mb-8">{car.description}</p>

            <div className="mt-5 mb-8 grid gap-5 md:grid-cols-3">
              <p className="flex items-center text-base font-bold">
                <MdLocationPin className="mr-2" /> {car.location}
              </p>
              <p className="flex items-center text-base font-bold">
                <FaCarAlt className="mr-2" /> {car.bodyType}
              </p>
              <p className="flex items-center text-base font-bold">
                <FaGasPump className="mr-2" /> {car.fuelType}
              </p>
              <p className="flex items-center text-base font-bold">
                <GiGearStickPattern className="mr-2" /> {car.transmission}
              </p>
              <p className="flex items-center text-base font-bold">
                <FaRoad className="mr-2" /> {car.mileage} Miles
              </p>
              <p className="flex items-center text-base font-bold">
                <RiPaintFill className="mr-2" /> {car.colour}
              </p>
              <p className="flex items-center text-base font-bold">
                <MdSensorDoor className="mr-2" /> {car.doors} Doors
              </p>
              <p className="flex items-center text-base font-bold">
                <GiCarSeat className="mr-2" /> {car.seats} Seats
              </p>
              <p className="flex items-center text-base font-bold">
                <BsGearFill className="mr-2" /> {car.engineSize} Litres
              </p>
            </div>

            <div className="mt-4 mb-6 bg-white p-5 md:p-8 rounded-2xl">
              <h3 className="text-1xl font-bold mb-3">Contact Seller</h3>
              <hr></hr>
              <a href={`tel:${car.phoneNumber}`} className="flex items-center mb-2 mt-4">
                <FaPhoneAlt className="mr-2" /> 0{car.phoneNumber}
              </a>
              <a href={`mailto:${car.email}`} className="flex items-center">
                <FaEnvelope className="mr-2" /> {car.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarInfo;
