


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Activity } from "../lib/icons";
import { Button } from "../components/common/Button";
// import logo from "../components/assets/logo.png"

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Failed to login");
    } finally {
      setLoading(false);
    }
  }

  function quickLogin(demoEmail, demoPassword) {
    setEmail(demoEmail);
    setPassword(demoPassword);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-hospital-purple/20 via-white to-teal-500/20 flex items-center justify-center p-4">
      <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-glass p-6 sm:p-8 w-full max-w-5xl border border-gray-100">
        
        {/* Header */}
        <div className="text-center mb-8">
          {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-hospital-purple rounded-2xl mb-4">
            <Activity className="w-8 h-8 text-white" />
          </div> */}
          {/* <img src={logo} alt="Hospital Logo" className="mx-auto w-52 h-30 sm:w-56 mb-1"/> */}
          <h1 className="text-2xl sm:text-3xl font-display font-semi-bold text-gray-900">
            Hospital Management System
          </h1>

          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Sign in to access your dashboard
          </p>
          <div className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
            Demo Mode – Instant Login
          </div>
        </div>

        {/* Login + Quick Access */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          {/* Left: Login Form */}
          <div>
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-400 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-hospital-purple focus:border-transparent text-sm sm:text-base"
                  placeholder="you@hospital.com"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-hospital-purple focus:border-transparent text-sm sm:text-base"
                  placeholder="Enter your password"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </div>

          {/* Right: Quick Login Cards */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
              Quick Login – Demo Accounts
            </h3>
            <div className="space-y-2 max-h-96 overflow-y-auto pr-1 sm:pr-2">
              {[
                { email: "admin@hospital.com", password: "admin123", role: "Admin", color: "bg-purple-100 border-purple-300 text-purple-700" },
                { email: "doctor@hospital.com", password: "doctor123", role: "Doctor", color: "bg-blue-100 border-blue-300 text-blue-700" },
                { email: "nurse@hospital.com", password: "nurse123", role: "Nurse", color: "bg-teal-100 border-teal-300 text-teal-700" },
                { email: "receptionist@hospital.com", password: "reception123", role: "Receptionist", color: "bg-green-100 border-green-300 text-green-700" },
                { email: "pharmacist@hospital.com", password: "pharma123", role: "Pharmacist", color: "bg-orange-100 border-orange-300 text-orange-700" },
                { email: "lab@hospital.com", password: "lab123", role: "Lab Tech", color: "bg-cyan-100 border-cyan-300 text-cyan-700" },
                { email: "radio@hospital.com", password: "radio123", role: "Radiologist", color: "bg-indigo-100 border-indigo-300 text-indigo-700" },
                { email: "finance@hospital.com", password: "finance123", role: "Finance", color: "bg-emerald-100 border-emerald-300 text-emerald-700" },
                { email: "hr@hospital.com", password: "hr123", role: "HR", color: "bg-rose-100 border-rose-300 text-rose-700" },
                { email: "patient@hospital.com", password: "patient123", role: "Patient", color: "bg-amber-100 border-amber-300 text-amber-700" },
              ].map((account) => (
                <button
                  key={account.email}
                  type="button"
                  onClick={() => quickLogin(account.email, account.password)}
                  className={`w-full p-3 rounded-lg border-2 text-left hover:shadow-md transition-all ${account.color}`}
                >
                  <div className="font-semibold text-sm sm:text-base">{account.role}</div>
                  <div className="text-xs sm:text-sm opacity-90">{account.email}</div>
                  <div className="text-xs opacity-70 mt-1">
                    Password: {account.password}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 text-center text-xs sm:text-sm text-gray-600">
          <p className="font-medium">How to use:</p>
          <p className="mt-1">
            Click any role card to auto-fill credentials, then click “Sign In”
          </p>
        </div>
      </div>
    </div>
  );
}
