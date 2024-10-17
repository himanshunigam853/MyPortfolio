import "./App.css";

import "./index.css";
import Home from "./Components/Home";
import PracticeContact from "./Components/PracticeContact";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<PracticeContact/>} />
      </Routes>
    </Router>

  );
}

export default App;
