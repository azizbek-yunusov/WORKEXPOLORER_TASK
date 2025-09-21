import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";

const SignIn = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await signin(email, password);
      navigate("/dashboard");
      toast.success("Login successful");
    } catch (err: any) {
      setError(err.message || "Login failed");
      toast.error(err.message || "Login failed");
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
            Sign in to access your products dashboard
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm min-w-[340px]">
          <form
            action=""
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
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
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="flex cursor-pointer w-full justify-center rounded-xl bg-gradient-to-r from-indigo-500/90 via-indigo-600/90 to-purple-900/90 px-5 py-2.5 text-lg  text-white shadow-xs "
            >
              Sign In to Dashboard
            </button>
          </form>

          <p className="mt-3 text-sm/6 cursor-pointer text-indigo-500 hover:underline">
            Forgot your password?
          </p>
          <Link
            to="/register"
            className="mt-3 text-sm/6 cursor-pointer text-indigo-500 hover:underline"
          >
            Don't have an account?
          </Link>
          {error && <p className="mt-3 text-sm/6   text-red-500">{error}</p>}
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
