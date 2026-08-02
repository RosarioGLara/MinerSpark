import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ucusmbkdgoiqrlkejiek.supabase.co'
const supabaseKey = 'sb_publishable_N_AOiyA7auAVcg4FFAvJIg_vrhFK1Zx'

export const supabase = createClient(supabaseUrl, supabaseKey)
