import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="flex h-screen w-full">
        {/* sidebar */}
        <Sidebar/>
        <div className="flex flex-col justify-between w-[80%]">
          {/* header */}
          <Header/>
          {/* footer */}
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
