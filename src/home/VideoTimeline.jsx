const VideoTimeline = ({currentTime, duration}) => {
  const timeDuration =(currentTime / duration) * 100;
  // console.log(time)
  return (
    <div className="bg-slate-500 h-1 absolute top-0 left-3 right-3">
      <span style={{width : `${timeDuration}%`}} className="bg-white block relative h-full after:content-[''] after:w-2 after:h-2 after:rounded-full after:absolute after:top-2/4 after:right-0 after:-translate-y-2/4 after:bg-white"></span>
    </div>
  );
};

export default VideoTimeline;
