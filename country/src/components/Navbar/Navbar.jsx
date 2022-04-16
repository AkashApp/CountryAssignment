import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="Nav_main">
      <Link to={"/"} className="Logo">
        <img
          src="https://media.istockphoto.com/vectors/letter-ab-logo-design-initial-ab-logotype-template-ab-monogram-and-vector-id1372588593?b=1&k=20&m=1372588593&s=612x612&w=0&h=U_-yG-I-rbmMA8Z9Y4qSfFpwUkqD2aZE835L6V44YPA="
          alt="Logo"
        />
      </Link>
      <Link to={"/add-country"} className="Add_But">
        <button>Add Country</button>
      </Link>
      <Link to={"/add-city"} className="Add_But">
        <button>Add City</button>
      </Link>
    </div>
  );
};
