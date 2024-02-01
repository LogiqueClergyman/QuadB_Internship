import "./App.css";
import Details from "./components/Details";
import Home from "./components/Home";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="bg-gradient-to-tr from-gray-900 via-red-800 to-gray-900">
        <BrowserRouter>
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/details" element={<Details/>} />
            <Route path="/register" element={<Register />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
