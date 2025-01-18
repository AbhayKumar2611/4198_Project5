import React, { useState } from "react";

const Profile = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setErrorMessage("User already exists! Please log in.");
      return;
    }

    // Add new user to localStorage
    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    setErrorMessage("");
    setIsRegistering(false); // Redirect to Login
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      setErrorMessage("Invalid email or password.");
      return;
    }

    setIsAuthenticated(true); // Successful login
    localStorage.setItem("currentUser", JSON.stringify(user));
    setErrorMessage("");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("currentUser"); // Clear logged-in user
  };

  return (
    <div className="p-4">
      {!isAuthenticated ? (
        <div>
          <h2 className="text-lg font-bold mb-4">
            {isRegistering ? "Register" : "Sign In"}
          </h2>
          <form
            onSubmit={isRegistering ? handleRegister : handleLogin}
            className="space-y-4"
          >
            {isRegistering && (
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              {isRegistering ? "Register" : "Sign In"}
            </button>
          </form>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}
          <p className="mt-4 text-sm">
            {isRegistering ? (
              <span>
                Already have an account?{" "}
                <button
                  onClick={() => {
                    setIsRegistering(false);
                    setErrorMessage("");
                  }}
                  className="text-blue-500 underline"
                >
                  Sign In
                </button>
              </span>
            ) : (
              <span>
                Don't have an account?{" "}
                <button
                  onClick={() => {
                    setIsRegistering(true);
                    setErrorMessage("");
                  }}
                  className="text-blue-500 underline"
                >
                  Register
                </button>
              </span>
            )}
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-bold mb-4">Welcome Back!</h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
