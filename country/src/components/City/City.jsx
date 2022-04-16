import React from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Contexts/Contexts";
import axios from "axios";

export const City = () => {
  const { country, city, country_belong, population, dispatch } =
    React.useContext(MyContext);
  const Navigate = useNavigate();

  React.useEffect(() => {
    if (country == "") {
      alert("Eneter country first");
      Navigate("/add-country");
    }
  }, []);

  const HandleClick = () => {
    if (country != country_belong) {
      alert("Enter Correct Country");
    } else {
      axios
        .post("http://localhost:3001/info", {
          country: country,
          city: city,
          country_belong: country_belong,
          population: population,
        })
        .then((res) => {
          Navigate("/");
        });
    }
  };

  return (
    <div className="city_Main">
      <label>
        Enter Other Details Here!
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => dispatch({ type: "CITY", payload: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter Belonging Country"
          valur={country_belong}
          onChange={(e) =>
            dispatch({ type: "BELONG", payload: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Enter Population"
          value={population}
          onChange={(e) =>
            dispatch({ type: "POPULATION", payload: e.target.value })
          }
        />
      </label>
      <button onClick={HandleClick}>Submit Form</button>
    </div>
  );
};
