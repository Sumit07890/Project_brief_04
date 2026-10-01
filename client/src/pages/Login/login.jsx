import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Button from "../../components/ui/Button";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    // Local demo credentials
    const adminEmail = "admin@foodhub.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
      // Save login session
      localStorage.setItem(
        "foodhubUser",
        JSON.stringify({
          email: email,
          role: "admin",
          name: "FoodHub Admin",
        })
      );

      // Go to Dashboard
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {/* Left Section */}
        <div className="login-info">
          <div className="login-brand">
            <span>🍴</span>
            <strong>FoodHub</strong>
          </div>

          <h1>Welcome Back!</h1>

          <p>
            Login to manage your restaurant, orders, menu and
            customer activities.
          </p>

          <div className="login-features">
            <p>✓ Manage restaurant orders</p>
            <p>✓ Track payments and billing</p>
            <p>✓ Manage menu items</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="login-form-section">
          <h2>Sign In</h2>

          <p className="login-subtitle">
            Enter your details to continue
          </p>

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label>Password</label>

              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            {/* Error */}
            {error && (
              <p className="login-error">
                {error}
              </p>
            )}

            {/* Submit */}
            <Button type="submit">
              Sign In
            </Button>
          </form>

          <div className="login-demo">
            <p><strong>Demo Login</strong></p>
            <p>Email: admin@foodhub.com</p>
            <p>Password: admin123</p>
          </div>

          <Link to="/home" className="back-home">
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Login;