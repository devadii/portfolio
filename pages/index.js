import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-[#eee7e1] h-screen w-screen overflow-hidden flex flex-col lg:flex-row">
      <Sidebar />
      <Main />
    </div>
  );
}
