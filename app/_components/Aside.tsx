import { auth } from "../_lib/auth";
import { getConversations } from "../_lib/data-services";
import Conversation from "./Conversation";
import SettingButton from "./SettingButton";

const Aside: React.FC = async function () {
  const session = await auth();

  if (!session?.user?.id) return;
  const conversations = await getConversations(session?.user?.id);
  return (
    <aside className="group bg-slate-800 relative">
      <ul>
        {conversations.map((conversation) => (
          <Conversation key={conversation.id} conversationInfo={conversation} />
        ))}
      </ul>

      <div className="absolute bottom-2 -translate-x-full group-hover:translate-x-3 transition-transform duration-500">
        <SettingButton />
      </div>
    </aside>
  );
};

export default Aside;
