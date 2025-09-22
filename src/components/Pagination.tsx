const Pagination = ({
  active,
  setActive,
  total,
}: {
  active: number;
  setActive: (active: number) => void;
  total: number;
}) => {

  const next = () => {
    if (active === total) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="flex items-center gap-4">
      <button
        className={`flex_center md:gap-2 border border-gray-200 rounded-lg px-2 py-1 w-24  bg-white gap-1 ${
          active === 1 ? "border-gray-100 cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={prev}
        disabled={active === 1}
      >
        <span className="material-symbols-outlined">{"<"}</span>
        <span className="material-symbols-outlined">Prev</span>
      </button>
      <div className="md:flex items-center gap-2 hidden">
        {Array.from({ length: total }, (_, i) => i + 1).map((item) => (
          <button key={item} className="flex_center md:gap-2 border border-gray-200 rounded-md px-3 py-1 cursor-pointer  bg-white gap-1" onClick={() => setActive(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 md:hidden">
        {total > 3 ? (
          <div className="flex items-center md:gap-2 gap-1">
            <button className="flex_center md:gap-2 border border-gray-200 rounded-lg px-3 py-1 bg-white gap-1" onClick={() => setActive(1)}>1</button>
            <span className="material-symbols-outlined">.</span>
            <span className="material-symbols-outlined">.</span>
            <span className="material-symbols-outlined">.</span>
            <button className="flex_center md:gap-2 border border-gray-200 rounded-lg px-3 py-1 bg-white gap-1" onClick={() => setActive(total)}>{total}</button>
          </div>
        ) : (
          Array.from({ length: total }, (_, i) => i + 1).map((item) => (
            <button className="flex_center md:gap-2 border border-gray-200 rounded-lg px-3 py-1 bg-white gap-1" onClick={() => setActive(item)}>{item}</button>
          ))
        )}
      </div>
      <button
        className={`flex_center md:gap-2 border border-gray-200 rounded-lg px-2 py-1 w-24  bg-white gap-1 ${
          active === total
            ? "border-gray-100 cursor-not-allowed"
            : "cursor-pointer"
        }`}
        onClick={next}
        disabled={active === total}
      >
        <span className="material-symbols-outlined">Next</span>
        <span className="material-symbols-outlined">{">"}</span>
      </button>
    </div>
  );
};

export default Pagination;
