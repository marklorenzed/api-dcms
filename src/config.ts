require("dotenv").config();

const NODE_ENV = process.env.NODE_ENV || "development";

const port = process.env.PORT || 3001;
const db_url = process.env.SUPABASE_URL || "";
const db_key = process.env.SUPABASE_KEY || "";
const FRONTEND_APP_URL = process.env.APP_URL || "";

export { port, db_url, db_key, FRONTEND_APP_URL, NODE_ENV };
