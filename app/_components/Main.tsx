import { auth } from "../_lib/auth";
import ChatContainer from "./ChatContainer";

const Main: React.FC = async function () {
  const session = await auth();
  return (
    <main>
      <ChatContainer userId={session?.user?.id} />
    </main>
  );
};

export default Main;
