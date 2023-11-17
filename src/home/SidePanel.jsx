import HeartIcon from "../assets/MainHeartIcon";
import CommentIcon from "../assets/CommentIcon";
import BookmarkIcon from "../assets/BookmarkIcon";
import ArrowShareIcon from "../assets/ArrowShareIcon";
import { useState } from "react";

const SidePanel = ({handleShowComments, commentsList, handleShowShare, feeds, feedCount}) => {
  const [likeFilled, setLikeFilled] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [favFilled, setFavFilled] = useState(false);
  const [favCount, setFavCount] = useState(0);

  const handleLike = () => {
    setLikeFilled(!likeFilled);
    if (!likeFilled) {
      setLikesCount(likesCount + 1);
    } else {
      setLikesCount(likesCount - 1);
    }
  };

  const handleFavourite = () => {
    setFavFilled(!favCount);
    if (!favFilled) {
      setFavCount(favCount + 1);
    } else {
      setFavCount(favCount - 1);
    }
  };

  return (
    <aside className="absolute bottom-0 right-2 text-white text-sm">
      <main className="space-y-2">
        {/* Profile image */}
        <article className="w-10 h-10 border border-white rounded-full overflow-hidden cursor-pointer">
          <img
            className="w-full h-full object-cover"
            src={feeds[feedCount].userImgURL}
            alt="Profile image"
          />
        </article>

        {/* Likes */}
        <article className="grid place-items-center">
          <HeartIcon handleLike={handleLike} likeFilled={likeFilled} />
          <span>{likesCount}</span>
        </article>

        {/* Comments */}
        <article className="grid place-items-center">
          <CommentIcon handleShowComments={handleShowComments}/>
          <span>{commentsList.length}</span>
        </article>

        {/* Favourite */}
        <article className="grid place-items-center">
          <BookmarkIcon
            handleFavourite={handleFavourite}
            favFilled={favFilled}
          />
          <span>{favCount}</span>
        </article>

        {/* Share */}
        <article className="grid place-items-center">
          <ArrowShareIcon handleShowShare={handleShowShare}/>
          <span>0</span>
        </article>
      </main>
    </aside>
  );
};

export default SidePanel;
