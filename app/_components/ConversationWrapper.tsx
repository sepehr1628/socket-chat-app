"use client";
import { useConversation } from "./ConversationContext";

type ConversationWrapperPropTypes = {
  children: React.ReactNode;
  chatId: string;
};

const ConversationWrapper: React.FC<ConversationWrapperPropTypes> = function ({
  children,
  chatId,
}) {
  const { setSelectedConversationId } = useConversation();

  return <li onClick={() => setSelectedConversationId(chatId)}>{children}</li>;
};
export default ConversationWrapper;
