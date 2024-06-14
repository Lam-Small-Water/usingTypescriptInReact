
import { Routes, Route, Link } from "react-router-dom";
import Basic from "./Basic";
import Local from "./Local";
import Ref from "./Ref";
import './App.css';

const App = () => {
  return (
    <div className="app">
      <nav>
        <Link to="/basic">Basic</Link>
        <Link to="/localStore">LocalStore</Link>
        <Link to="/fer/">Ref</Link>
      </nav>
      <Routes>
        <Route path="/Basic" element={<Basic />} />
        <Route path="/Local" element={<Local />}/>
        <Route path="/Rer" element={<Ref />}/>
      </Routes>
    </div>
  );
};

export default App;
