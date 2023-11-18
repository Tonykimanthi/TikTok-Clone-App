import ArrowUpIcon from "../assets/ArrowUpIcon";

const NewCommentForm = ({text, handleDisplayIcon, handleAddComment}) => {
  
  return (
    <form onSubmit={(e)=>e.preventDefault()} className="p-2 flex gap-x-2 items-center absolute bottom-0 left-0 right-0 border-t">
      <div className="w-9 h-9 text-xl font-medium rounded-full overflow-hidden">
        <img className="w-full h-full object-cover" src="https://media.istockphoto.com/id/1500238408/photo/program-code-development-icon-on-a-digital-lcd-display-with-reflection.webp?b=1&s=170667a&w=0&k=20&c=CfaVabgMcwwc-ijzVAxNs_Sz6q3JVPJnlQ-Py-dpuAQ=" alt="Unsplash" />
      </div>
      <div className="w-full h-9 rounded-full relative overflow-hidden">
        <input
          type="text"
          name="text"
          value={text}
          onChange={handleDisplayIcon}
          placeholder="Add comment..."
          autoComplete="off"
          className="w-full h-full pl-4 pr-12 bg-slate-100 outline-none"
        />
        <ArrowUpIcon text={text} handleAddComment={handleAddComment}/>
      </div>
    </form>
  );
};

export default NewCommentForm;
