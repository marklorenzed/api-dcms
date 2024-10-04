import supabase from "../client";
import { Request, Response } from "express";

const getAllClinicHandler = async (req: Request, res: Response) => {
  const { data } = await supabase.from("clinic").select();
  res.json({ data });
};

const getClinicHandler = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const id = req.params.id;
  try {
    const { data } = await supabase.from("clinic").select("*").eq("id", id);
    res.json({ data });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failure fetching clinic",
    });
  }
};

const createClinicHandler = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from("clinic")
      .insert({
        ...req.body,
      })
      .select();
    if (error) throw Error(error.message);
    res.json({ data: data });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failure creating a clinic record.",
    });
  }
};

const updateClinicHandler = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const { data, error } = await supabase
      .from("clinic")
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
      message: "Failure updating a clinic record.",
    });
  }
};

const deleteClinicHandler = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const { error } = await supabase.from("clinic").delete().eq("id", id);

    if (error) throw Error(error.message);

    res.json({ message: "Success" });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failure deleting a clinic record.",
    });
  }
};

export {
  getAllClinicHandler,
  getClinicHandler,
  createClinicHandler,
  updateClinicHandler,
  deleteClinicHandler,
};
