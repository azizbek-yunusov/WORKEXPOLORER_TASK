import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./data";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
     <Toaster position="top-right" reverseOrder={true} />
      <Routes>
        {routes.map((item) => (
          <Route path={item.path} element={item.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
