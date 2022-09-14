import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Sidebar = () => {
  return (
    <div className="px-4 py-8 h-screen lg:w-[95px] flex flex-col items-center justify-between text-[#1a1919] ">
      <div className="flex lg:flex-col items-center justify-between h-[20%]">
        <a href="" className="lg:-rotate-90">
          <GitHubIcon />
        </a>
        <a href="mailto:someone@yoursite.com" className="lg:-rotate-90">
          <EmailIcon />
        </a>
        <a href="" className="lg:-rotate-90">
          <p className="font-extrabold">Up</p>
        </a>
      </div>
      <div className="h-[20%] w-[1px] mx-auto  bg-[#1a1919]"></div>
      <div className="h-[20%] flex flex-col justify-end">
        <p className="origin-center -rotate-90 -translate-y-5 whitespace-nowrap">
          &copy; | {Date().toString().split(" ")[3]}
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
