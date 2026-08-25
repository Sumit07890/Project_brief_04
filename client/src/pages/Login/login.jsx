
import { useState } from "react";
import { Link } from "react-router";


function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login functionality will be connected to the backend in a later sprint.");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {/* Left Section */}
        <div className="login-info">
          <div className="brand">
            <div className="brand-icon">🍴</div>
            <h2>FoodHub</h2>
          </div>

          <h1>Welcome Back!</h1>

          <p>
            Login to manage your restaurant, orders, menu and
            customer activities.
          </p>

          <div className="login-features">
            <div>
              <span>✓</span>
              Manage restaurant orders
            </div>

            <div>
              <span>✓</span>
              Track payments and billing
            </div>

            <div>
              <span>✓</span>
              Manage menu items
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="login-form-section">

          <div className="form-heading">
            <h2>Sign In</h2>
            <p>Enter your details to continue</p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>

              <div className="password-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="login-options">
              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>

              <button type="button" className="forgot-password">
                Forgot Password?
              </button>
            </div>

            <button type="submit" className="login-button">
              Sign In
            </button>

          </form>

          <div className="login-divider">
            <span>FoodHub Restaurant Ordering System</span>
          </div>

          <p className="qr-note">
            Customers can order directly by scanning the QR code at their table.
          </p>

          <Link to="/" className="back-home">
            ← Back to Home
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Login;