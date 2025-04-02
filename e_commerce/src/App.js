import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./component/pages/Home"
import Cart from "./component/pages/Cart";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/cart" element={ <Cart/> }/>
      </Routes>
    </Router>
  );
}

export default App;
