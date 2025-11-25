import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import cors from "cors";
import router from "./routes"
import { globalErrorHandler, routeNotFoundHandler } from "./middleware/errors.middleware";
const app = express();
app.use(express.json());
app.use(cors())

app.use("/", router);

app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: "Not Found" });
});

app.use(routeNotFoundHandler)
app.use(globalErrorHandler)


const PORT = Number(process.env["PORT"] ?? 3000);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
