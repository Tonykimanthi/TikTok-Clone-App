import NameCaption from "./NameCaption";
import SidePanel from "./SidePanel";

const Feed = ({ showComments, handleShowComments, commentsList }) => {
  return (
    <main className="h-[72%] relative bg-black">
      <video className="w-full h-full" autoPlay muted>
            <source src="https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-through-a-mountain-range-41576-large.mp4" type="video/mp4" />
        </video>
      <NameCaption />
      <SidePanel
        showComments={showComments}
        handleShowComments={handleShowComments}
        commentsList={commentsList}
      />
    </main>
  );
};

export default Feed;
