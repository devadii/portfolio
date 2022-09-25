import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-[#372c2e] w-full h-full">
      <div className="bg-[#372c2e] max-w-[1300px] m-auto overflow-x-hidden">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

// light #eee7e1
// dark #1a1919
// light bluish #cbe5ff
// light yellowish #FFF480
