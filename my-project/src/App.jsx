import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CreateForm from "./Components/CreateForm";
import Card from "./Components/Card";
import Posts from "./Components/Posts";

function App() {

  const [flag, setFlag] = useState("show")
  
  function handleOnClick(chosenButton)  {
    if(chosenButton === "show") setFlag("show")
    else if(chosenButton === "create") setFlag("create")
    console.log(flag);
  }

  return (
    <>
      <div className="flex h-screen w-full bg-blue-300">
        {/* sidebar */}
        <Sidebar onClickButton = {handleOnClick} />
        <div className="flex flex-col justify-between w-[80%]">
          {/* header */}

          <Header/>

          {
            flag==="show" ? <Posts/> : <CreateForm/>
          }

          {/* footer */}
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
