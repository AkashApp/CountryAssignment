import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [states, setStates] = React.useState([]);
  const Navigate = useNavigate();

  const HandleDelete = (id) => {
    axios.delete(`http://localhost:3001/info/${id}`).then((res) => {
      alert("item successfully deleted");
      Navigate("/");
    });
  };

  React.useEffect(() => {
    axios.get("http://localhost:3001/info").then((res) => {
      setStates(...states, res.data);
    });
  }, []);
  console.log(states);

  return (
    <div className="Home_Main">
      <div>
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>City</th>
              <th>Population</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {states.map((item) => (
              <tr>
                <td>{item.country}</td>
                <td>{item.city}</td>
                <td>{item.population}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      HandleDelete(item.id);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
