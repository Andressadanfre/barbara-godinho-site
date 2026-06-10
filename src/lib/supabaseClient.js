import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oyhrzgzvudcbwbzhgsdn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95aHJ6Z3p2dWRjYndiemhnc2RuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNTk1MTAsImV4cCI6MjA2NDYzNTUxMH0.czrgMNp3vVQgp0UaARFwsG2Rm3-Ku8MfYjS8B2yTAFI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);