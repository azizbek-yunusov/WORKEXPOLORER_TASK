import React, { useState } from "react";
import { AuthLayout } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await signup(name, email, password);
      navigate("/dashboard");
      toast.success("Signup successful");
    } catch (err: any) {
      setError(err.message || "Signup failed");
      toast.error(err.message || "Signup failed");
    }
  };
  return (
    <AuthLayout>
      <div className=" flex bg-white shadow-2xl rounded-2xl flex-col justify-center p-10 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-3xl font-bold tracking-tight text-gray-900">
            Welcome back!
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Sign up to access your products dashboard
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm min-w-[340px]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email Address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full text-xl rounded-xl bg-white px-5 py-2.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 border-2 border-gray-200 focus:border-indigo-600"
                />
              </div>
            </div>

            <button
              type="submit"
              className="flex cursor-pointer w-full justify-center rounded-xl bg-gradient-to-r from-indigo-500/90 via-indigo-600/90 to-purple-900/90 px-5 py-2.5 text-lg  text-white shadow-xs "
            >
              Sign Up to Dashboard
            </button>
          </form>

          <Link
            to="/login"
            className="mt-6 text-sm/6 cursor-pointer text-indigo-500 hover:underline"
          >
            Already have an account?
          </Link>
          {error && <p className="mt-3 text-sm/6   text-red-500">{error}</p>}
        </div>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
