"use client";

import { useConversation } from "./ConversationContext";
import Chat from "./Chat";

const ChatWrapper: React.FC = function () {
  const { selectedConversationId } = useConversation();

  if (!selectedConversationId) return null;

  return <Chat />;
};

export default ChatWrapper;
