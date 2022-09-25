import Link from "next/link";
import { useCallback, useEffect, useState, useRef } from "react";
import Tools from "./Tools";

const colors = [
  ["#990011FF", "#FCF6F5FF"],
  ["#FFD662FF", "#00539CFF"],
  ["#E94B3CFF", "#2D2926FF"],
  ["#28334AFF", "#FBDE44FF"],
  ["#2901e8", "#fff"],
];
const Main = () => {
  const [randomCol, setRandomCol] = useState(0);
  return (
    <div className="lg:ml-[95px]" style={{ boxSizing: "border-box" }}>
      <div className="relative h-screen w-full flex flex-col text-[#372c2e]  p-4">
        <div className="w-full h-[50%] flex mb-3">
          <div className=" flex-1 flex flex-col">
            <div className="flex-1 bg-[#eee7e1] rounded-3xl mb-3 flex items-center justify-center">
              <img src="/welcome.svg" alt="" className="w-[90%]" />
            </div>
            <div className="flex-1 bg-[#eee7e1] rounded-3xl flex items-center justify-center">
              <img src="/man.svg" alt="" className="h-[100px] mr-2" />
              <div className="">
                <p className="text-3xl font-bold">Hi I'm Adil</p>
                <p>Front-end Web Engineer</p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-[#eee7e1] rounded-3xl ml-3 relative flex justify-center items-center">
            <div className="">
              <p className="text-2xl font-bold text-center mb-4">
                My{" "}
                <span className="text-4xl font-bold italic">{"<conding>"}</span>{" "}
                Box
              </p>
              <Tools />
            </div>
          </div>
        </div>

        <div className="w-full h-[50%] flex">
          <div
            style={{
              backgroundColor: colors[randomCol][0],
              color: colors[randomCol][1],
            }}
            onClick={() =>
              setRandomCol(randomCol >= colors.length - 1 ? 0 : randomCol + 1)
            }
            className={`flex-1  font-thin text-white rounded-3xl mr-3 flex flex-col items-center justify-center
          text-center transition-all hover:scale-95 ease-linear cursor-pointer delay-100`}
          >
            <p className="text-3xl font-bold text-center mb-3">
              What can I do?
            </p>

            <p className="text-3xl italic p-3">
              I provide clients with Pixel Perfect, Seamless, Stunning,
              Attractive, Full Fledged and Well Polished Fast and Responsive
              websites with all requiured Integrations of APIs and different
              ADD-ONS
            </p>
          </div>
          <div className=" flex-1 flex flex-col">
            <div className="flex-1 bg-[#eee7e1] rounded-3xl mb-3"></div>
            <div className="flex-1 bg-[#eee7e1] rounded-3xl"></div>
          </div>
        </div>
      </div>
      <div className="h-screen w-full text-[#eee7e1] "></div>
    </div>
  );
};

export default Main;
