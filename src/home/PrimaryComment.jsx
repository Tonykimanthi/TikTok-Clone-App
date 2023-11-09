import HeartIcon from "../assets/HeartIcon";
import DislikeIcon from "../assets/DislikeIcon";

const PrimaryComment = () => {
    const heartIconSize = "w-4 h-4";
    const dislikeIconSize = "w-4 h-4";
    
  return (
    <article className="flex gap-x-2">
      <img
        className="w-9 h-9 object-cover rounded-full"
        src="https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=--Ei0owZ8KqwVppB5o0bMRG4aNV8VA0HHnsH1YfuxAw="
        alt="User"
      />
      <div className="leading-tight text-sm w-full">
        <h4 className="text-slate-500 font-medium">Fred Okello</h4>
        <p>I created it using React.</p>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-4">
            <small>18h</small>
            <button className="text-sm text-slate-500">Reply</button>
          </div>
          <div className="flex items-center gap-x-4">
            <HeartIcon heartIconSize={heartIconSize}/>
            <DislikeIcon dislikeIconSize={dislikeIconSize}/>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PrimaryComment;
