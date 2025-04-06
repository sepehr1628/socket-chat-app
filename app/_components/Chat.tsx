"use client";

import { useEffect, useState } from "react";
import { useConversation } from "./ConversationContext";
import { supabase } from "../_lib/supabase-browser";
import { CgSpinner } from "react-icons/cg";
import Message from "./Message";

// Define the shape of a message
type Message = {
  id: string;
  content: string;
  conversation_id: string;
  created_at: string;
  sender_id: string;
};

type ChatProps = {
  userId: string;
};

const Chat: React.FC<ChatProps> = function ({ userId }) {
  const { selectedConversationId } = useConversation();
  const [messages, setMessages] = useState<Message[] | null>(null);

  useEffect(() => {
    async function getMessages() {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .eq("conversation_id", selectedConversationId)
        .order("created_at", { ascending: true });
      console.log(data);

      if (error) {
        console.error("Error fetching messages:", error);
        setMessages(null);
      } else {
        setMessages(data as Message[]);
      }
    }
    getMessages();
  }, [selectedConversationId]);

  if (messages === null)
    return (
      <div className="bg-gray-900 flex items-center justify-center w-full h-full">
        <CgSpinner />
      </div>
    );
  if (messages === undefined)
    return <p>There is a problem with getting messages. Please try again!</p>;

  return (
    <div className="bg-gray-900 h-full p-4">
      {messages.map((message) => (
        <Message key={message.id} message={message} userId={userId} />
      ))}
    </div>
  );
};

export default Chat;
