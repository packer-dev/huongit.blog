type TechnologyProps = { tech: string; loading?: boolean };

const Technology = ({ tech, loading }: TechnologyProps) => {
  if (loading) return <div className="bg-slate-200 w-6 h-2 rounded-lg" />;
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
    case "Javascript":
      return (
        <span className="bg-yellow-500 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Javascript
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
    case "Typescript":
      return (
        <span className="bg-blue-900 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Typescript
        </span>
      );
    case "Python":
      return (
        <span className="bg-orange-300 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Python
        </span>
      );
    case "Fast API":
      return (
        <span className="bg-gray-950 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Fast API
        </span>
      );
    case "Sass":
      return (
        <span className="bg-pink-500 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Sass
        </span>
      );
    case "NextJS":
      return (
        <span className="bg-black text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          NextJS
        </span>
      );
    case "C#":
      return (
        <span className="bg-indigo-500 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          C#
        </span>
      );
    case "WinForm":
      return (
        <span className="bg-green-500 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          WinForm
        </span>
      );
    case "Java Swing":
      return (
        <span className="bg-red-300 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Java Swing
        </span>
      );
    case "AWS":
      return (
        <span className="bg-orange-500 text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Java Swing
        </span>
      );
    default:
      return <></>;
  }
};

export default Technology;
