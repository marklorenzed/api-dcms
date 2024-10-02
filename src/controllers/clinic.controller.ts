import supabase from "../client";
import { Request, Response } from "express";

const getAllClinicHandler = async (req: Request, res: Response) => {
  const { data } = await supabase.from("clinic").select();
  res.json({ data });
};

export { getAllClinicHandler };
