import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://yzhvricfnagcmbreqnew.supabase.co';
;
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6aHZyaWNmbmFnY21icmVxbmV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxOTM5NDgsImV4cCI6MjA5Nzc2OTk0OH0.JnmCpS9KCqOr9TeMM89PTIHeMcyz8rnDbsws0s2n-GU';

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );