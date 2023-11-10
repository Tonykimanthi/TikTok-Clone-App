import NameCaption from "./NameCaption";
import SidePanel from "./SidePanel";

const Feed = ({ showComments, handleShowComments, commentsList }) => {
  return (
    <main className="h-[72%] relative">
      <img
        className="w-full h-full"
        src="https://images.unsplash.com/photo-1682686581797-21ec383ead02?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
        alt="Unsplash"
      />
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
