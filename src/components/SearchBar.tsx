import { useNavigate } from "react-router-dom";
import { categories } from "../data";

const SearchBar = ({
  term,
  setTerm,
  status,
  setStatus,
  category,
  setCategory,
}: {
  term: string;
  setTerm: (term: string) => void;
  status: string | null;
  setStatus: (status: string | null) => void;
  category: string | null;
  setCategory: (category: string | null) => void;
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            🔍
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-[380px] rounded-xl px-4 py-3 ps-10 text-sm text-gray-900  border-2 border-gray-300  bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search products..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        <select
          id="category"
          className="block w-[150px] rounded-xl px-4 py-3  text-sm text-gray-900  border-2 border-gray-300  bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option selected>All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          id="status"
          className="block w-[150px] rounded-xl px-4 py-3  text-sm text-gray-900  border-2 border-gray-300  bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option selected>All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div className="flex items-center gap-x-4">
        <button
          onClick={() => navigate("/products/new")}
          className="w-[200px] bg-gradient-to-r from-teal-400/90  to-teal-600/90 space-x-2 hover:bg-green-600/20 px-4 py-2.5 cursor-pointer rounded-xl text-white transition-all"
        >
          <span className="">+</span>
          <span className="">Add Product</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
