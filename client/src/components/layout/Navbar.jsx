import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        🍴 FoodHub
      </div>

      <div className="navbar-links">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>

    </nav>
  );
}

export default Navbar;