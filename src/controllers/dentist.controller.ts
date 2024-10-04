import supabase from "../client";
import { Request, Response } from "express";

const getAllDentistsHandler = async (req: Request, res: Response) => {
  const { data } = await supabase.from("dentist").select();
  res.json({ data });
};

const getDentistHandler = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const id = req.params.id;
  try {
    const { data } = await supabase.from("dentist").select("*").eq("id", id);
    res.json({ data });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failure fetching dentists",
    });
  }
};

const createDentistHandler = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from("dentist")
      .insert({
        ...req.body,
      })
      .select();
    if (error) throw Error(error.message);
    res.json({ data: data });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failure creating a dentist record.",
    });
  }
};

const updateDentistHandler = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const { data, error } = await supabase
      .from("dentist")
      .update({
        ...req.body,
      })
      .eq("id", id)
      .select();

    if (error) throw Error(error.message);

    res.json({ data });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failure updating a dentist record.",
    });
  }
};

const deleteDentist = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const { error } = await supabase.from("dentist").delete().eq("id", id);

    if (error) throw Error(error.message);

    res.json({ message: "Success" });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failure deleting a dentist record.",
    });
  }
};

export {
  getAllDentistsHandler,
  getDentistHandler,
  createDentistHandler,
  updateDentistHandler,
  deleteDentist,
};
