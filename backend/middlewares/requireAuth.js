import jwt from "jsonwebtoken";
import AppError from "../utils/AppError.js";
import authServices from "../services/auth.services.js";

export default async function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new AppError("Authentication token missing", 401));
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const user = await authServices.findById(decodedToken.id);
    if (!user) {
      return next(new AppError("User not found", 404));
    }

    req.user = user;
    next();

  } catch (err) {
    return next(new AppError("Invalid or Expired Token", 401));
  }
}
