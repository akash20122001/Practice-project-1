import React from "react";

function Sidebar({onClickButton}) {
  return (
    <div className="h-full w-[20%] p-8 bg-gray-700 text-white flex flex-col justify-start items-center">
      Sidebar
      <button onClick={()=>{onClickButton("show")}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
        See Posts
      </button>
      <button onClick={()=>{onClickButton("create")}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Create Posts
      </button>
    </div>
  );
}

export default Sidebar;
