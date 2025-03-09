import Header from "@/app/_components/Header";
import Main from "@/app/_components/Main";
import Aside from "./_components/Aside";

const Page: React.FC = async function () {
  return (
    <div className="grid grid-cols-[20rem_1fr] grid-rows-[auto_1fr] h-screen">
      <div className="col-span-2">
        <Header />
      </div>

      <Aside />
      <Main />
    </div>
  );
};

export default Page;
