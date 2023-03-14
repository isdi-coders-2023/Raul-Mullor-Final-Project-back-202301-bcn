import { type NextFunction, type Request, type Response } from "express";
import { CustomError } from "../../../CustomError/CustomError.js";
import { Character } from "../../../database/models/Characters/Characters.js";

export const getCharacters = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const characters = await Character.find().exec();

    res.status(200).json({ characters });
  } catch (error) {
    const customError = new CustomError(
      "Bad request",
      400,
      "Couldn't retrieve character"
    );

    next(customError);
  }
};
