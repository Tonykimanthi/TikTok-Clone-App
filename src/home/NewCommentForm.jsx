import ArrowUpIcon from "../assets/ArrowUpIcon";

const NewCommentForm = ({text, handleDisplayIcon, handleAddComment}) => {
  
  return (
    <form onSubmit={(e)=>e.preventDefault()} className="p-2 flex gap-x-2 items-center absolute bottom-0 left-0 right-0 border-t">
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
        <ArrowUpIcon text={text} handleAddComment={handleAddComment}/>
      </div>
    </form>
  );
};

export default NewCommentForm;
