// supabaseClient.js

import { createClient } from '@supabase/supabase-js';

//**ATENÇÃO** Mude para as suas chaves reais!
//Em projeto real, use variáveis de ambiente (.env) para as chaves.
const SUPABASE_URL = 'https://lzmwwpwskydoyhscfdzu.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6bXd3cHdza3lkb3loc2NmZHp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2OTc1NjksImV4cCI6MjA3NjI3MzU2OX0.20_mzdo63NHyGX7gcPe7TLXpPmHk4heD6ZDvUZriZNw';

//Inicializa o cliente Supabase
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);