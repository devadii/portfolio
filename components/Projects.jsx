const Projects = ({ type }) => {
  return (
    <div className="h-full w-full relative">
      <div className="h-full w-full blur-lg rounded-3xl">
        <img src={type.img} className="h-full w-full rounded-3xl" />
      </div>
      <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] rounded-3xl bg-[#eee7e1] w-[85%] sm:w-[40%]">
        <div className="w-full">
          <img src={type.img} alt="" className="w-full rounded-t-lg" />
        </div>
        <div className="p-4 text-[#372c2e] flex flex-col items-center justify-center">
          <p className="text-xl font-bold mb-1">{type.title}</p>
          <button className="px-3 py-1 rounded-lg bg-[#372c2e] text-[#eee7e1]">
            Go to Site
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
