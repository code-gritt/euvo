import jwt from "jsonwebtoken";
import { Request } from "express";
import { Context } from "./types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const JWT_SECRET =
  "ac24d82e3305bba0cdcf87800757ecfafe32d8172ed5aa3d45ecab5461bf939c27c643fd9ea4117889f12d69483b3eea105aa3a64f4e8642c9bf70420fabd117";

export const getUserFromToken = async (
  req: Request
): Promise<Context["user"]> => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return undefined;

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, email: true, role: true },
    });
    return user
      ? { id: user.id, email: user.email, role: user.role }
      : undefined;
  } catch (error) {
    return undefined;
  }
};
