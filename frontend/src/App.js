import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sensor from "./components/sensor/Sensor";
import Navbar from "./components/navigation/Navbar";
import SensorCreatorForm from "./components/sensor/SensorCreatorForm";
import SensorEvents from "./components/sensorEvent/SensorEvents";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={Sensor} />
          <Route path="/sensorevents" component={SensorEvents} />
          <Route path="/createsensor" component={SensorCreatorForm} />
          <Route path="/update/:id" component={SensorCreatorForm} />
          <Route path="/updateevents/:id" component={SensorEvents} />
        </Switch>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
