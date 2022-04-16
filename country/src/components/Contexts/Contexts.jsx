import React from "react";

const initeState = {
  country: "",
  city: "",
  country_belong: "",
  population: "",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "COUNTRY":
      return { ...state, country: payload };
    case "CITY":
      return { ...state, city: payload };
    case "BELONG":
      return { ...state, country_belong: payload };
    case "POPULATION":
      return { ...state, population: payload };
    default:
      return state;
  }
}

export const MyContext = React.createContext();

export const MyContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initeState);
  const { country, city, country_belong, population } = state;

  return (
    <MyContext.Provider
      value={{ country, city, country_belong, population, dispatch }}
    >
      {children}
    </MyContext.Provider>
  );
};
