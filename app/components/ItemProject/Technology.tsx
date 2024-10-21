const Technology = ({ tech }: { tech: string }) => {
  switch (tech) {
    case "React":
      return (
        <span className="bg-blue-800 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          React
        </span>
      );
    case "HTML":
      return (
        <span className="bg-orange-500 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          HTML
        </span>
      );
    case "CSS":
      return (
        <span className="bg-blue-500 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          CSS
        </span>
      );
    case "JS":
      return (
        <span className="bg-yellow-500 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          JS
        </span>
      );
    case "Spring boot":
      return (
        <span className="bg-green-500 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Spring boot
        </span>
      );
    case "Java":
      return (
        <span className="bg-gray-500 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Java
        </span>
      );
    case "Socket IO":
      return (
        <span className="bg-red-500 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Socket IO
        </span>
      );
    case "Web RTC":
      return (
        <span className="bg-amber-500 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Web RTC
        </span>
      );
    case "TS":
      return (
        <span className="bg-blue-900 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          TS
        </span>
      );
    case "Python":
      return (
        <span className="bg-orange-300 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Python
        </span>
      );
    default:
      return <></>;
  }
};

export default Technology;
