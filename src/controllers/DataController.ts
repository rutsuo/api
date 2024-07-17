import { Request, Response } from "express";
import { DataService } from "../services/DataService";

const service = new DataService();

const getData = async (_req: Request, res: Response) => {
  try {
    const result = await service.getData();
    res.status(200).send({
      status: "OK",
      data: result,
    });
  } catch (error: any) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export { getData };
