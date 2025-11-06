// src/supabase.js
import { createClient } from "@supabase/supabase-js";

// URL y clave de tu proyecto
const supabaseUrl = "https://xkaahsgbpruiouyzgzff.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrYWFoc2dicHJ1aW91eXpnemZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwNzQ0MjMsImV4cCI6MjA3NjY1MDQyM30.hVUWNAXjrkyvPsorFGRGLHTPPjSjVlTkg8k24Yt_jo4";

// Cliente con headers forzados (necesario en CodeSandbox)
export const supabase = createClient(supabaseUrl, supabaseKey, {
  global: {
    headers: {
      // Fuerza el formato que Supabase espera
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  },
});

// --- Ejemplo opcional para probar conexión ---
export async function probarConexion() {
  const { data, error } = await supabase.from("usuario").select("*").limit(1);
  if (error) {
    console.error("❌ Error de conexión:", error);
  } else {
    console.log("✅ Conexión exitosa, datos:", data);
  }
}
