// src/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xkaahsgbpruiouyzgzff.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrYWFoc2dicHJ1aW91eXpnemZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwNzQ0MjMsImV4cCI6MjA3NjY1MDQyM30.hVUWNAXjrkyvPsorFGRGLHTPPjSjVlTkg8k24Yt_jo4";
export const supabase = createClient(supabaseUrl, supabaseKey);
