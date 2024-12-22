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
        <span className="bg-[#E34D24] text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          HTML
        </span>
      );
    case "CSS":
      return (
        <span className="bg-[#264DE4] text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          CSS
        </span>
      );
    case "Javascript":
      return (
        <span className="bg-[#F0DC4E] text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Javascript
        </span>
      );
    case "Spring boot":
      return (
        <span className="bg-[#6AAC3E] text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Spring boot
        </span>
      );
    case "Java":
      return (
        <span className="bg-[#53819E] text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Java
        </span>
      );
    case "Socket IO":
      return (
        <span className="bg-[#F1F3F4] text-gray-500 text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Socket IO
        </span>
      );
    case "Web RTC":
      return (
        <span className="bg-black text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Web RTC
        </span>
      );
    case "Typescript":
      return (
        <span className="bg-[#3178C6] text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Typescript
        </span>
      );
    case "Python":
      return (
        <span className="bg-[#F7CD3F] text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Python
        </span>
      );
    case "Fast API":
      return (
        <span className="bg-[#04988A] text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Fast API
        </span>
      );
    case "Sass":
      return (
        <span className="bg-p[#C66394] text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Sass
        </span>
      );
    case "ReactJS":
      return (
        <span className="bg-[#65D2F0] text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          ReactJS
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
        <span className="bg-[#4E29CE] text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          C#
        </span>
      );
    case "WinForm":
      return (
        <span className="bg-[#7057CF] text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          WinForm
        </span>
      );
    case "Java Swing":
      return (
        <span className="bg-[#53819E] text-gray-500 text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Java Swing
        </span>
      );
    case "AWS":
      return (
        <span className="bg-[#232F3E] text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Java Swing
        </span>
      );
    case "TailwindCSS":
      return (
        <span className="bg-[#38BDF8] text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          TailwindCSS
        </span>
      );
    case "Supabase":
      return (
        <span className="bg-[#3ED08F] text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          TailwindCSS
        </span>
      );
    case "React Native":
      return (
        <span className="bg-[#20242A] text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          React Native
        </span>
      );
    case "Firebase":
      return (
        <span className="bg-[#DD2C00] text-white text-xs font-semibold px-1 py-1 rounded-sm cursor-pointer">
          Firebase
        </span>
      );
    default:
      return <></>;
  }
};

export default Technology;
