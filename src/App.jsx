import Home from "./home/Home";
import Comments from "./home/CommentsSection";

function App() {
  return (
    <>
      <h1 className="text-3xl text-teal-600 text-center font-bold mt-3">
        Tiktok Clone App
      </h1>
      <div className="bg-white mt-3 w-11/12 max-w-xs h-[85vh] rounded overflow-hidden relative">
        <Home />
        <Comments />
      </div>
    </>
  );
}

export default App;
