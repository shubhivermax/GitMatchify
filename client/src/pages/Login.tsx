import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", data);
      console.log(response.data); // Replace with redirect or auth logic
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={loginUser}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-purple-700">
          Welcome Back
        </h2>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email..."
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter password..."
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
