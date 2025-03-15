"use client";
import { createContext, useContext, useState } from "react";

type ConversationContextType = {
  selectedConversationId: string | null;
  setSelectedConversationId: (id: string | null) => void;
};

const ConversationContext = createContext<ConversationContextType | undefined>(
  undefined
);

export const ConversationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedConversationId, setSelectedConversationId] = useState<
    string | null
  >(null);

  return (
    <ConversationContext.Provider
      value={{ selectedConversationId, setSelectedConversationId }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

export const useConversation = () => {
  const context = useContext(ConversationContext);
  if (context === undefined)
    throw new Error("useConversation must be used within ConversationProvider");
  return context;
};
