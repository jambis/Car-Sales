import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const car = useSelector(state => state.car);

  return (
    <>
      <figure className="image is-128x128">
        <img src={car.image} alt={car.name} />
      </figure>
      <h2>{car.name}</h2>
      <p>Amount: ${car.price}</p>
    </>
  );
};

// const mapStateToProps = state => {
//   return {
//     carImage: state.car.image,
//     carName: state.car.name,
//     carPrice: state.car.price
//   };
// };

// export default connect(mapStateToProps)(Header);

export default Header;
