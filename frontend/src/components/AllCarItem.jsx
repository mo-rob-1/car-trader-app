function AllCarItem({ car }) {
  return (
    <div class="card w-96 bg-base-100 shadow-xl my-5">
      <div class="card-body">
        <img src={car.imageURL} alt="car" class="w-full" />
        <h2 class="card-title">{car.model}</h2>
        <p>Desc: {car.description}</p>
        <p>Price: £{car.price}</p>
        <p>Location: {car.location}</p>
        <p>Phone: {car.phoneNumber}</p>
        <p>Email: {car.email}</p>
      </div>
    </div>
  );
}

export default AllCarItem;
