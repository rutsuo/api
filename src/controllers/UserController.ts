import { Request, Response } from "express";
import { UserService } from "../services/UserService";
const service = new UserService();

const getUserById = async (req: Request, res: Response) => {
  const {
    params: { id },
  } = req;
  if (!id) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':id' not found!" },
    });
    return;
  } else {
    try {
      const result = await service.getUserById(id);
      res.status(200).send({
        status: "OK",
        data: result,
      });
    } catch (error: any) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  }
  return;
};

export { getUserById };
