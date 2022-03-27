import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="Header">
      <div className="Header-Links">
        <Link to="/">A11Y Checker</Link>
        <Link to="/about-us">О проекте</Link>
      </div>
    </header>
  );
}
