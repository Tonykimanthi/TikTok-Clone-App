import HeartIcon from "../assets/HeartIcon";
import CommentIcon from "../assets/CommentIcon";
import BookmarkIcon from "../assets/BookmarkIcon";
import ArrowShareIcon from "../assets/ArrowShareIcon";
import ArrowUpIcon from "../assets/ArrowUpIcon";

const SidePanel = () => {
  return (
    <aside className="absolute -bottom-7 right-2 text-white text-sm">
      <main className="space-y-2">
        {/* Profile image */}
        <article className="w-10 h-10 border border-white rounded-full overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover"
            src="https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=--Ei0owZ8KqwVppB5o0bMRG4aNV8VA0HHnsH1YfuxAw="
            alt="Profile image"
          />
        </article>

        {/* Likes */}
        <article className="grid place-items-center">
          <HeartIcon />
          <span>3500</span>
        </article>

        {/* Comments */}
        <article className="grid place-items-center">
          <CommentIcon />
          <span>156</span>
        </article>

        {/* Favourite */}
        <article className="grid place-items-center">
          <BookmarkIcon />
          <span>248</span>
        </article>

        {/* Share */}
        <article className="grid place-items-center">
          <ArrowShareIcon />
          <span>248</span>
        </article>
      </main>

      <button className="mt-2 grid place-items-center w-10">
        <ArrowUpIcon />
      </button>
    </aside>
  );
};

export default SidePanel;
