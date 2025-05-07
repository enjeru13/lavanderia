// components/Layout.jsx
import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
