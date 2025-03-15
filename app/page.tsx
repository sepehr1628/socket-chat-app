import Header from "@/app/_components/Header";
import Main from "@/app/_components/Main";
import Aside from "./_components/Aside";
import SettingModal from "./_components/SettingModal";
import { ConversationProvider } from "./_components/ConversationContext";

const Page: React.FC = async function () {
  return (
    <div className="grid grid-cols-[20rem_1fr] grid-rows-[auto_1fr] h-screen">
      <div className="col-span-2">
        <Header />
      </div>
      <ConversationProvider>
        <Aside />
        <Main />
      </ConversationProvider>
      <SettingModal />
    </div>
  );
};

export default Page;
