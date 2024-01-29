import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CreateForm from "./Components/CreateForm";
import Posts from "./Components/Posts";
import { PostContext } from "./Contexts/PostContext";

function App() {
  const [flag, setFlag] = useState("show");

  const [posts, setPosts] = useState([
    { name: "Akash", description: "Hello how are You?" },
    {
      name: "Mayank",
      description: "What a lovely day :)",
    },
  ]);

  function handleOnClick(chosenButton) {
    if (chosenButton === "show") setFlag("show");
    else if (chosenButton === "create") setFlag("create");
  }

  const handleCreatePost = (name, description) => {
    event.preventDefault();
    const newPost = {name, description};
    setPosts([...posts, newPost]);
  }

  return (
    <PostContext.Provider value={{posts, handleCreatePost, handleOnClick}}>
      <div className="flex h-screen w-full bg-blue-300">
        <Sidebar />
        <div className="flex flex-col justify-between w-[80%]">
          <Header />

          {flag === "show" ? <Posts /> : <CreateForm/>}

          <Footer />
        </div>
      </div>
    </PostContext.Provider>
  );
}

export default App;
