import { createClient } from '@supabase/supabase-js'

export async function fetchSupabaseData(tableName: string) {
    const supabaseUrl = 'https://uzzqbgffltjcxmngngns.supabase.co'
    const supabaseKey = process.env.SUPABASE_KEY
    if (!supabaseKey) {
    throw new Error('SUPABASE_KEY environment variable is not set');
    }
    const supabase = createClient(supabaseUrl, supabaseKey)

    const { data, error } = await supabase.from(tableName).select('*')
    if (error) {
        throw new Error(`Error fetching data: ${error.message}`)
    }
    return data
}