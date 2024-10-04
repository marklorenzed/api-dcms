import supabase from "../client";
import { Request, Response } from "express";

const getAllAppointmentsHandler = async (req: Request, res: Response) => {
  const { data } = await supabase.from("appointment").select();
  res.json({ data });
};

export { getAllAppointmentsHandler };
