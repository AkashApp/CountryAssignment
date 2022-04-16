import React from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Contexts/Contexts";

export const Country = () => {
  const { country, dispatch } = React.useContext(MyContext);
  const Navigate = useNavigate();
  const HandleClick = () => {
    if (country != "") {
      Navigate("/add-city");
    } else {
      alert("Please Enter Country first");
    }
  };
  return (
    <div className="country_Main">
      <label>
        Enter The Country which you want to add!
        <input
          type="text"
          placeholder="Country Name"
          value={country}
          onChange={(e) =>
            dispatch({ type: "COUNTRY", payload: e.target.value })
          }
        />
      </label>
      <button onClick={HandleClick}>Submit</button>
    </div>
  );
};
