"use client";
import { useConversation } from "./ConversationContext";
import SelectChat from "./SelectChat";

interface ChatContainerPropTypes {
  children: React.ReactNode;
}

const ChatContainer: React.FC<ChatContainerPropTypes> = function ({
  children,
}) {
  const { selectedConversationId } = useConversation();

  return (
    <div className="w-full h-full">
      {selectedConversationId ? children : <SelectChat />}
    </div>
  );
};
export default ChatContainer;
