import supabase from "../client";
import { Request, Response } from "express";

const getAllPatientsHandler = async (req: Request, res: Response) => {
  const { data } = await supabase.from("patient").select();
  res.json({ data });
};

export { getAllPatientsHandler };
