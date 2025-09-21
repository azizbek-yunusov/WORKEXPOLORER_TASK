import React from "react";
import { Link, useLocation } from "react-router-dom";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const href = useLocation().pathname;
  const menu = [
    { name: "Login", href: "/login" },
    { name: "Dashboard (Table)", href: "/dashboard" },
    { name: "Product Detail", href: "/products/1" },
    { name: "Edit Product", href: "/products/1/edit" },
  ];

  return (
    <div className="min-h-screen container-full bg-gradient-to-br from-indigo-500/90 via-indigo-500/90 to-purple-700/90 flex items-center justify-center">
      <nav className="absolute top-6 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center  space-x-2 bg-white/10 backdrop-blur-sm border border-gray-300/50 rounded-full px-2 py-3">
          {menu.map((item) => (
            <Link key={item.name} to={item.href}>
              <span
                className={` hover:text-white transition-colors  px-5 py-2 rounded-full text-white/90 ${
                  href === item.href ? "bg-white/20" : ""
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </nav>
      <div className="grid grid-cols-2 w-full">
        <div className="col-span-1 flex_center">
          <div className=" text-white ">
            <h1 className="text-6xl font-bold mb-4 text-balance">ProductHub</h1>
            <p className="text-xl font-light text-white/90 mb-8">
              CRUD Management Platform
            </p>

            <div className="space-y-4 font-light">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gray-400/60 flex items-center justify-center">
                  <span className="text-sm">📊</span>
                </div>
                <span className="text-white/90">Advanced table management</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gray-400/60 flex items-center justify-center">
                  <span className="text-sm">✏️</span>
                </div>
                <span className="text-white/90">Full CRUD operations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gray-400/60 flex items-center justify-center">
                  <span className="text-sm">🔍</span>
                </div>
                <span className="text-white/90">Search & filter products</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gray-400/60 flex items-center justify-center">
                  <span className="text-sm">📱</span>
                </div>
                <span className="text-white/90">Responsive design</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex_center">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
