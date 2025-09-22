import { categories, colors } from "../data";

const ProductForm = ({
  handleSubmit,
  name,
  setName,
  price,
  setPrice,
  color,
  setColor,
  category,
  setCategory,
}: {
  handleSubmit: () => void;
  name: string;
  setName: (name: string) => void;
  price: number;
  setPrice: (price: number) => void;
  color: string;
  setColor: (color: string) => void;
  category: string;
  setCategory: (category: string) => void;
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-5">
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
            htmlFor="price"
            className="block text-sm font-medium text-gray-900"
          >
            Price
          </label>
          <div className="mt-2">
            <input
              id="price"
              name="price"
              type="number"
              required
              autoComplete="price"
              value={price}
              onChange={(e) => setPrice(e.target.valueAsNumber)}
              className="form-input"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-900"
          >
            Category
          </label>
          <div className="mt-2">
            <select
              id="category"
              required
              value={category}
              className="form-input"
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label
            htmlFor="color"
            className="block text-sm font-medium text-gray-900"
          >
            Color
          </label>
          <div className="mt-2">
            <select
              id="color"
              required
              value={color}
              className="form-input"
              onChange={(e) => setColor(e.target.value)}
            >
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="flex mt-10 cursor-pointer w-full justify-center rounded-xl bg-gradient-to-r from-teal-500/90 via-teal-600/90 to-green-900/90 px-5 py-2.5 text-lg  text-white shadow-xs "
      >
        Save
      </button>
    </form>
  );
};

export default ProductForm;
