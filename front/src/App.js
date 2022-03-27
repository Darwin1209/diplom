import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";

const A = () => <div>О нас</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about-us" element={<A />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
