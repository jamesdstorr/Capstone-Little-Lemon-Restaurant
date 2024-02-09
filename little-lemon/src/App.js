import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import "@fontsource/markazi-text";
import "@fontsource/karla";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Reservation from "./pages/Reservation";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/reservations" element={<Reservation/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
