import { Navbar } from "./components/Navbar/Navbar";
import { Router } from "./Router/Router";
import "./App.scss";

function App() {
  return (
    <div className="Main_App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
