import { createClient } from "@supabase/supabase-js";
import { db_key, db_url } from "./config";
import { Database } from "./database.types";

// import { db_key, db_url } from "config";

const supabaseUrl = db_url;
const supabaseKey = db_key;

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
