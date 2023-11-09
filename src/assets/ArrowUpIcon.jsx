const ArrowUpIcon = ({ text }) => {
  return (
    <button
      className={`absolute top-2/4 right-4 p-1 rounded-full bg-pink-500 transition duration-500 delay-100 ${
        text ? "-translate-y-2/4" : "translate-y-full"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5 stroke-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
        />
      </svg>
    </button>
  );
};

export default ArrowUpIcon;
