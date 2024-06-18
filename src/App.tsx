
import { Routes, Route, Link } from "react-router-dom";
import Basic from "./Basic";
import Local from "./Local";
import Custom from "./Custom";
import './App.css';

const App = () => {
  return (
    <div className="app">
      <nav>
        <Link to="/basic">Basic</Link>
        <Link to="/local">LocalStorage</Link>
        <Link to="/custom/">Custom</Link>
      </nav>
      <Routes>
        <Route path="/basic" element={<Basic />} />
        <Route path="/local" element={<Local />}/>
        <Route path="/custom" element={<Custom />}/>
      </Routes>
    </div>
  );
};

export default App;
