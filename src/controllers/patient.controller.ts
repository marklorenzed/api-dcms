import supabase from "../client";
import { Request, Response } from "express";

const getAllPatientsHandler = async (req: Request, res: Response) => {
  const { data } = await supabase.from("patient").select();
  res.json({ data });
};

const getPatientHandler = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const id = req.params.id;
  try {
    const { data } = await supabase.from("patient").select("*").eq("id", id);
    res.json({ data });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failure fetching patients",
    });
  }
};

const createPatientHandler = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from("patient")
      .insert({
        ...req.body,
      })
      .select();
    if (error) throw Error(error.message);
    res.json({ data: data });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failure creating a patient record.",
    });
  }
};

const updatePatientHandler = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const { data, error } = await supabase
      .from("patient")
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
      message: "Failure updating a patient record.",
    });
  }
};

const deletePatientHandler = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const { error } = await supabase.from("patient").delete().eq("id", id);

    if (error) throw Error(error.message);

    res.json({ message: "Success" });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failure deleting a patient record.",
    });
  }
};

export {
  getAllPatientsHandler,
  getPatientHandler,
  createPatientHandler,
  updatePatientHandler,
  deletePatientHandler,
};
