import { useNavigate } from "react-router";
import Button from "../../components/ui/Button";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-content">

        <div className="landing-badge">
          🍴 Restaurant Ordering System
        </div>

        <h1>
          Welcome to <span>FoodHub</span>
        </h1>

        <p>
          Manage your restaurant menu, orders, tables, billing,
          and customer activities from one simple platform.
        </p>

        <div className="landing-buttons">
          <Button onClick={() => navigate("/login")}>
            Get Started →
          </Button>
        </div>

        <div className="landing-features">
          <div>
            <strong>🍽️</strong>
            <span>Menu Management</span>
          </div>

          <div>
            <strong>📋</strong>
            <span>Order Management</span>
          </div>

          <div>
            <strong>📱</strong>
            <span>QR Ordering</span>
          </div>

          <div>
            <strong>💳</strong>
            <span>Billing & Payments</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;