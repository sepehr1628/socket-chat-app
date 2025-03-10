import { createClient } from "@supabase/supabase-js";

if (typeof window !== "undefined") {
  throw new Error("supabase.ts should not be imported in a client component!");
}

const supabaseUrl = "https://pjzlikphmomnubdnxbdv.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);
