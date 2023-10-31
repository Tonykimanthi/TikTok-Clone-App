import { useState } from "react";
import Feed from "./home/Feed";

function App() {
  return (
    <>
      <h1 className="text-3xl text-teal-600 text-center font-bold mt-5">
        Tiktok Clone App
      </h1>
      <div className="bg-white mt-5 w-11/12 max-w-sm min-h-[80vh] rounded overflow-hidden">
        <Feed />
      </div>
    </>
  );
}

export default App;
