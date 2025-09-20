import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Context } from "./types";

const prisma = new PrismaClient();
const JWT_SECRET =
  "ac24d82e3305bba0cdcf87800757ecfafe32d8172ed5aa3d45ecab5461bf939c27c643fd9ea4117889f12d69483b3eea105aa3a64f4e8642c9bf70420fabd117";

export const resolvers = {
  Query: {
    me: async (_: unknown, __: unknown, context: Context) => {
      if (!context.user) throw new Error("Not authenticated");
      return prisma.user.findUnique({ where: { id: context.user.id } });
    },
  },

  Mutation: {
    register: async (
      _: unknown,
      {
        email,
        password,
        role,
      }: { email: string; password: string; role?: string }
    ) => {
      // check if user already exists
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) throw new Error("User already exists");

      // hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // validate role or fallback to ATTENDEE
      const userRole =
        role && Object.values(Role).includes(role as Role)
          ? (role as Role)
          : Role.ATTENDEE;

      // create user
      const user = await prisma.user.create({
        data: { email, password: hashedPassword, role: userRole },
      });

      // generate JWT
      const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: "1h",
      });

      return { token, user };
    },

    login: async (
      _: unknown,
      { email, password }: { email: string; password: string }
    ) => {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) throw new Error("Invalid credentials");

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) throw new Error("Invalid credentials");

      const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: "1h",
      });

      return { token, user };
    },
  },
};
