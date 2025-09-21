import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logout successfully");
    navigate("/login");
  };

  return (
    <header className="">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Products Dashboard</h1>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r text-xl from-indigo-500/90 via-indigo-600/90 to-purple-900/90 flex_center font-bold text-white">
            {user?.name.charAt(0)}
          </div>
          <div className="">
            <p className="text-lg font-semibold">{user?.name}</p>
            <p className="text-sm font-light text-gray-500">{user?.email}</p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500/10 px-4 py-1.5 cursor-pointer rounded-lg text-red-600 hover:bg-red-500 hover:text-white transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};
