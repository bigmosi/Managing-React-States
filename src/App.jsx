import React from "react";
import Products from "./Products";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";

export default function App() {
  return (
    <>
      <div className="content">
        <Header />
        <main>
            <Products />
        </main>
      </div>
      <Footer />
    </>
  );
}
