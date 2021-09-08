import { BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Sensor from './components/sensor/Sensor';
import Navbar from './components/navigation/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" component={Sensor}/>
    </Router>
  );
}

export default App;
