import { createClient } from "@supabase/supabase-js";
import { db_key, db_url } from "./config";

// import { db_key, db_url } from "config";

const supabaseUrl = db_url;
const supabaseKey = db_key;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
