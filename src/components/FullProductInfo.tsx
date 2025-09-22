import { useProducts } from "../hooks/useProducts";

const FullProductInfo = () => {
  const { product } = useProducts();

  const info = [
    {
      label: "Category",
      value: product?.data.category || "Electronics",
    },
    {
      label: "Stock",
      value: product?.data.capacity || "45 unites",
    },
    {
      label: "Status",
      value: product?.data.status || "Active",
    },
    {
      label: "Created",
      value: new Date().toLocaleString(),
    },
    {
      label: "Updated",
      value: new Date().toLocaleString(),
    },
  ];
  return (
    <div className="border-2 border-gray-200  shadow-md overflow-hidden rounded-xl  lg:mx-56 mt-8">
      <div className="flex items-center justify-between bg-slate-50">
        <div className="w-full">
          <h2 className="text-2xl font-bold p-7">Product Specification</h2>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <tbody>
              {info?.map((item) => (
                <tr
                  key={item.label}
                  className="bg-white border-b  border-gray-200"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 w-[20%]  font-medium text-gray-900 whitespace-nowrap bg-gray-100 "
                  >
                    {item.label}
                  </th>
                  <td className="px-6 py-4 w-[80%]">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FullProductInfo;
