import ArrowUpIcon from "../assets/ArrowUpIcon";
import { useState } from "react";

const AddNewComment = ({text, handleDisplayIcon}) => {
  
  return (
    <form className="p-2 flex gap-x-2 items-center absolute bottom-0 left-0 right-0">
      <div className="w-9 h-9 flex justify-center items-center text-white text-xl font-medium rounded-full p-4 bg-teal-500">
        T
      </div>
      <div className="w-full h-9 rounded-full relative overflow-hidden">
        <input
          type="text"
          value={text}
          onChange={handleDisplayIcon}
          placeholder="Add comment..."
          className="w-full h-full px-4 bg-slate-100 outline-none"
        />
        <ArrowUpIcon text={text}/>
      </div>
    </form>
  );
};

export default AddNewComment;
