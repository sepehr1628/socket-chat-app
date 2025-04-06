"use client";
import Chat from "./Chat";
import { useConversation } from "./ConversationContext";
import SelectChat from "./SelectChat";

type ChatProps = {
  userId: string;
};

const ChatContainer: React.FC<ChatProps> = function ({ userId }) {
  const { selectedConversationId } = useConversation();

  return (
    <div className="w-full h-full">
      {selectedConversationId ? <Chat userId={userId} /> : <SelectChat />}
    </div>
  );
};
export default ChatContainer;
