import type { Request, Response, NextFunction } from "express";

export function globalErrorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error("🔥 Error:", err);

  res.status(500).json({
    error: "Internal Server Error",
    message: err instanceof Error ? err.message : "Unknown error",
  });
}


export function routeNotFoundHandler(_req: Request, res: Response) {
  res.status(404).json({ message: "Route not found" });
}
