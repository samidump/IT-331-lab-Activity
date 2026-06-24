-- SQL Script to set up the 'tasks' table in Supabase
-- Paste this script into the Supabase SQL Editor (Dashboard > SQL Editor > New query)

-- 1. Create the 'tasks' table
CREATE TABLE IF NOT EXISTS public.tasks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    completed BOOLEAN DEFAULT false NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- 2. Enable Row Level Security (optional for beginner demo, but recommended)
-- ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;

-- 3. If RLS is enabled, create policy to allow all actions for anonymous access
-- CREATE POLICY "Allow public access" ON public.tasks 
--     FOR ALL USING (true) WITH CHECK (true);
