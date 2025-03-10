import { supabase } from "./supabase";

export const getConversations = async (userId: string) => {
  const { data, error } = await supabase
    .from("conversations")
    .select("*")
    .or(`user1_id.eq.${userId},user2_id.eq.${userId}`);

  if (error) {
    return [];
  }

  return data;
};

export const getMessages = async (conversationId: string) => {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("conversation_id", conversationId)
    .order("created_at", { ascending: true });

  if (error) {
    return [];
  }

  return data;
};

export const getUser = async (email: string) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email);

  if (error) throw new Error(error.message);

  return data.length > 0 ? data[0] : null;
};

export const getConversationUser = async (id: string) => {
  const { data, error } = await supabase.from("users").select("*").eq("id", id);

  if (error) throw new Error(error.message);

  return data.length > 0 ? data[0] : null;
};

export const createUser = async (newUser: {
  name: string;
  email: string;
  image: string;
}) => {
  const { data, error } = await supabase
    .from("users")
    .insert([
      { name: newUser.name, email: newUser.email, image: newUser.image },
    ])
    .select();

  if (error) throw new Error("User cannot be created!");

  return data[0];
};
