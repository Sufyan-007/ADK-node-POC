import { Request, Response } from "express";
import { testFunction } from "../services/test.service";

export const test = (_req: Request, res: Response) => {
    res.send(testFunction());
}