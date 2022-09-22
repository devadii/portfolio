import Link from "next/link";

const Main = () => {
  return (
    <div className="sm:bg-[url('../public/car.svg')] bg-[length:65%_auto] bg-right-bottom bg-no-repeat bg-center relative flex h-screen w-full justify-center items-start sm:justify-start text-[#1a1919] px-4 lg:px-12 xl:px-16">
      <div className="md:flex-1 flex flex-col justif-start md:justify-between h-[400px] ">
        <div className="mb-8">
          <p className="text-[64px] font-bold">Welcome</p>
          <p className="text-lg ">Adil Here</p>
          <p className="text-lg max-w-md text-justify">
            Passionate Frontend Developer with rich experience in Javescript,
            React, Next, CSS Frameworks.
          </p>
          <br />
          <p className="text-lg max-w-md text-justify">
            I've also worked on Backend with using tools like NodeJS, Express,
            MongoDb.
          </p>
        </div>
        <div className="w">
          <Link href={"/work"}>
            <div className="flex items-center w-max mb-2">
              <img src="/briefcase.svg" alt="" className="h-[40px]" />
              <p className="font-bold ml-3 cursor-pointer p-2 rounded-lg hover:bg-[#1a1919] hover:text-[#eee7e1] hover:scale-90 ">
                Work
              </p>
            </div>
          </Link>
          <Link href={"/work"}>
            <div className="flex items-center w-max mb-2 ml-[60px]">
              <img src="/text.svg" alt="" className="h-[40px] " />
              <p className="font-bold ml-3  cursor-pointer p-2 rounded-lg hover:bg-[#1a1919] hover:text-[#eee7e1] hover:scale-90 ">
                Tools
              </p>
            </div>
          </Link>
          <Link href={"/work"}>
            <div className="flex items-center w-max ml-[120px]">
              <img src="/man.svg" alt="" className="h-[50px]" />
              <p className="font-bold ml-3 cursor-pointer p-2 rounded-lg hover:bg-[#1a1919] hover:text-[#eee7e1] hover:scale-90 ">
                About
              </p>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="hidden md:flex-1 md:flex md:flex-col md:justify-center md:h-[400px]">
        <img src="/main_d.svg" alt="" className="h-full" />
      </div> */}
    </div>
  );
};

export default Main;
