import React from "react";
import { useDispatch } from "react-redux";

import { removeFeature } from "../actions";

const AddedFeature = props => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeFeature(props.feature));
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleClick}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

// export default connect(
//   null,
//   { removeFeature }
// )(AddedFeature);
export default AddedFeature;
