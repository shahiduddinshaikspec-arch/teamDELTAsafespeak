import { createClient } from '@supabase/supabase-js';

// Access environment variables using Vite's import.meta.env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create and export the Supabase client instance
// It will gracefully fall back if env vars are missing so the app doesn't crash during UI prototyping
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
);
