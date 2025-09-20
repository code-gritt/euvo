import { Role } from "../generated/prisma";

export interface Context {
  user?: {
    id: number;
    email: string;
    role: Role;
  };
}
