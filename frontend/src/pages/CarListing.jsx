import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCars, reset } from "../features/cars/carSlice";
import { AiOutlineSearch } from "react-icons/ai";
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
  const [visible, setVisible] = useState(6);

  const [gearboxOptions, setGearboxOptions] = useState({
    options: ["Automatic", "Manual"],
    selected: "",
  });
  const [statusOptions, setStatusOptions] = useState({
    options: ["Available", "Sold"],
    selected: "",
  });
  const [fuelTypeOptions, setFuelTypeOptions] = useState({
    options: ["Petrol", "Diesel", "Hybrid", "Electric"],
    selected: "",
  });
  const [bodyTypeOptions, setBodyTypeOptions] = useState({
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
    selected: "",
  });
  const [colourOptions, setColourOptions] = useState({
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
    selected: "",
  });

  const [regionOptions, setRegionOptions] = useState({
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
    selected: "",
  });

  const [doorsOptions, setDoorsOptions] = useState({
    options: ["2", "4", "5", "6"],
    selected: "",
  });

  const [seatsOptions, setSeatsOptions] = useState({
    options: ["2", "4", "5", "6", "8"],
    selected: "",
  });

  const [engineSizeOptions, setEngineSizeOptions] = useState({
    options: ["1", "1.2", "1.4", "1.6", "1.8", "2", "2.2", "2.4", "2.6", "2.8", "3", "4", "5"],
    selected: "",
  });

  const handleChangeGearbox = (e) => {
    setGearboxOptions({
      ...gearboxOptions,
      selected: e.target.value,
    });
    setGearbox(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatusOptions({
      ...statusOptions,
      selected: e.target.value,
    });
    setStatus(e.target.value);
  };

  const handleChangeFuelType = (e) => {
    setFuelTypeOptions({
      ...fuelTypeOptions,
      selected: e.target.value,
    });
    setFuelType(e.target.value);
  };

  const handleChangeBodyType = (e) => {
    setBodyTypeOptions({
      ...bodyTypeOptions,
      selected: e.target.value,
    });
    setBodyType(e.target.value);
  };

  const handleChangeColour = (e) => {
    setColourOptions({
      ...colourOptions,
      selected: e.target.value,
    });
    setColour(e.target.value);
  };

  const handleChangeRegion = (e) => {
    setRegionOptions({
      ...regionOptions,
      selected: e.target.value,
    });
    setRegion(e.target.value);
  };

  const handleChangeDoors = (e) => {
    setDoorsOptions({
      ...doorsOptions,
      selected: e.target.value,
    });
    setDoors(e.target.value);
  };

  const handleChangeSeats = (e) => {
    setSeatsOptions({
      ...seatsOptions,
      selected: e.target.value,
    });
    setSeats(e.target.value);
  };

  const handleChangeEngineSize = (e) => {
    setEngineSizeOptions({
      ...engineSizeOptions,
      selected: e.target.value,
    });
    setEngineSize(e.target.value);
  };

  const handleClearGearbox = (e) => {
    setGearboxOptions({
      ...gearboxOptions,
      selected: "",
    });
  };

  const handleClearStatus = (e) => {
    setStatusOptions({
      ...statusOptions,
      selected: "",
    });
  };

  const handleClearFuelType = (e) => {
    setFuelTypeOptions({
      ...fuelTypeOptions,
      selected: "",
    });
  };

  const handleClearBodyType = (e) => {
    setBodyTypeOptions({
      ...bodyTypeOptions,
      selected: "",
    });
  };

  const handleClearColour = (e) => {
    setColourOptions({
      ...colourOptions,
      selected: "",
    });
  };

  const handleClearRegion = (e) => {
    setRegionOptions({
      ...regionOptions,
      selected: "",
    });
  };

  const handleClearDoors = (e) => {
    setDoorsOptions({
      ...doorsOptions,
      selected: "",
    });
  };

  const handleClearSeats = (e) => {
    setSeatsOptions({
      ...seatsOptions,
      selected: "",
    });
  };

  const handleClearEngineSize = (e) => {
    setEngineSizeOptions({
      ...engineSizeOptions,
      selected: "",
    });
  };

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

  const totalCars = carList.length;
  const availableCars = carList.filter((car) => car.status === "Available").length;
  const soldCars = carList.filter((car) => car.status === "Sold").length;

  if (isLoading) {
    return <h3 className="text-2xl font-bold mx-auto max-w-screen-2xl w-11/12 mt-10">Loading...</h3>;
  }

  return (
    <>
      <div className="bg-base-200">
        <div className="mx-auto max-w-screen-2xl w-11/12">
          <div className="appTwoCol pt-5 pb-5 md:pt-12 md:pb-12 xl:pt-16 xl:pb-16">
            <div>
              <div className="flex flex-col mb-6">
                <div className="badge mb-4 font-bold">Total Cars: {totalCars}</div>
                <div className="badge mb-4 font-bold">Available Cars: {availableCars}</div>
                <div className="badge font-bold">Sold Cars: {soldCars}</div>
              </div>
              <select
                className="select select-bordered w-full mb-4"
                onChange={handleChangeRegion}
                value={regionOptions.selected}
                data-testid="region-select"
              >
                <option value="">Filter by Region</option>
                {regionOptions.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                className="select select-bordered w-full mb-4"
                onChange={handleChangeStatus}
                value={statusOptions.selected}
                data-testid="status-select"
              >
                <option value="">Filter by Status</option>
                {statusOptions.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                className="select select-bordered w-full mb-4"
                onChange={handleChangeColour}
                value={colourOptions.selected}
                data-testid="colour-select"
              >
                <option value="">Filter by Colour</option>
                {colourOptions.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                className="select select-bordered w-full mb-4"
                onChange={handleChangeBodyType}
                value={bodyTypeOptions.selected}
                data-testid="body-type-select"
              >
                <option value="">Filter by Body Type</option>
                {bodyTypeOptions.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                className="select select-bordered w-full mb-4"
                onChange={handleChangeGearbox}
                value={gearboxOptions.selected}
                data-testid="gearbox-select"
              >
                <option value="">Filter by Gearbox type</option>
                {gearboxOptions.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                className="select select-bordered w-full mb-4"
                onChange={handleChangeFuelType}
                value={fuelTypeOptions.selected}
                data-testid="fuel-type-select"
              >
                <option value="">Filter by Fuel Type</option>
                {fuelTypeOptions.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                className="select select-bordered w-full mb-4"
                onChange={handleChangeDoors}
                value={doorsOptions.selected}
                data-testid="doors-select"
              >
                <option value="">Filter by Number of Doors</option>
                {doorsOptions.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                className="select select-bordered w-full mb-4"
                onChange={handleChangeSeats}
                value={seatsOptions.selected}
                data-testid="seats-select"
              >
                <option value="">Filter by Number of Seats</option>
                {seatsOptions.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                className="select select-bordered w-full mb-4"
                onChange={handleChangeEngineSize}
                value={engineSizeOptions.selected}
                data-testid="engine-size-select"
              >
                <option value="">Filter by Engine Size</option>
                {engineSizeOptions.options?.map((option) => (
                  <option key={option} value={option}>
                    {option} litres
                  </option>
                ))}
              </select>

              <button
                className="btn w-full mb-5"
                data-testid="clear-filter-btn"
                onClick={() => {
                  setSearch("");
                  setRegion("");
                  setStatus("");
                  setColour("");
                  setBodyType("");
                  setGearbox("");
                  setFuelType("");
                  setDoors("");
                  setSeats("");
                  setEngineSize("");
                  handleClearGearbox();
                  handleClearStatus();
                  handleClearFuelType();
                  handleClearBodyType();
                  handleClearColour();
                  handleClearRegion();
                  handleClearDoors();
                  handleClearSeats();
                  handleClearEngineSize();
                }}
              >
                Clear Filter Result
              </button>
            </div>

            <div>
              <div className="customInputWrapper">
                <AiOutlineSearch className="search-icon" />
                <input
                  data-testid="search-input"
                  className="customInput"
                  type="text"
                  placeholder="Search for a car via make or model..."
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </div>

              {carList.length > 0 ? (
                <div className="carWrapper xl:mt-2">
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
                      <div key={car._id}>
                        <div className="card shadow-xl my-5 relative">
                          <figure>
                            {" "}
                            <img src={car.imageURL} alt={car.model} className="w-full h-60 object-cover" />
                          </figure>
                          <div className="card-body">
                            <h2 className="card-title">
                              {car.make} {car.model}
                            </h2>
                            <p className="font-bold badge mt-2">{car.location}</p>
                            <div className="mt-3">
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
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <h3 className="text-3xl font-bold mt-6">No Cars Available</h3>
              )}

              <div className="text-center mt-6">
                <button className="btn lg:w-1/4" onClick={showMoreItems} data-testid="load-more-btn">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarListing;
