import { NavLink, useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();

  const user = localStorage.getItem("foodhubUser");

  const handleLogout = () => {
    localStorage.removeItem("foodhubUser");
    navigate("/home");
  };

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        🍴 FoodHub
      </div>

      {user && (
        <div className="navbar-links">

          <NavLink to="/dashboard">
            Dashboard
          </NavLink>

          <NavLink to="/menu-item">
            Menu
          </NavLink>

          <NavLink to="/categories">
            Categories
          </NavLink>

          <NavLink to="/orders">
            Orders
          </NavLink>

          <NavLink to="/tables">
            Tables / QR
          </NavLink>

          <NavLink to="/billing">
            Billing
          </NavLink>

          <NavLink to="/profile">
            Profile
          </NavLink>

          <button
            className="logout-button"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>
      )}

    </nav>
  );
}

export default Navbar;