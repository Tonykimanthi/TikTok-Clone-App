const NameCaption = ({feeds, feedCount}) => {
  return (
    <div className="absolute text-white left-2 -bottom-8">
        <h1 className="font-bold text-lg">{feeds[feedCount].userName}</h1>
        <p className="text-sm leading-tight text-gray-200">{feeds[feedCount].Caption}</p>
    </div>
  );
};

export default NameCaption;