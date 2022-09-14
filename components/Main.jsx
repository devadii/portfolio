import Link from "next/link";

const Main = () => {
  return (
    <div className="bg-[url('../public/car.svg')] relative flex h-screen w-full items-center justify-center text-[#1a1919] px-4 lg:px-12 xl:px-16">
      <div className="md:flex-1 flex flex-col justify-center md:justify-between h-[400px] md:p-4 md:mr-6">
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
            <div className="flex items-center w-max ">
              <img src="/main_b.svg" alt="" className="h-[70px]" />
              <p className="font-bold ml-3 mt-4 cursor-pointer p-2 rounded-lg hover:bg-[#1a1919] hover:text-[#eee7e1] hover:scale-90 ">
                Check My Work
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="hidden md:flex-1 md:flex md:flex-col md:justify-center md:h-[400px]">
        <img src="/main_d.svg" alt="" className="h-full" />
      </div>
    </div>
  );
};

export default Main;
