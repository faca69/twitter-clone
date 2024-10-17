import { UserCreateModel, UserModel } from "@/db/schemas/user.schema";
import {
  create,
  findByUsername,
  update,
} from "@/repositories/users.repository";

import bcrypt from "bcrypt";

export async function getUserByUsername(username: string) {
  return findByUsername(username);
}

export async function loginUser({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const existingUser = await getUserByUsername(username);

  if (!existingUser) {
    throw new Error("invalid credentials");
  }

  const isPasswordEqual = bcrypt.compareSync(password, existingUser.password);

  if (!isPasswordEqual) {
    throw new Error("invalid credentials");
  }

  return existingUser;
}

export async function createUser(userData: UserCreateModel) {
  const existingUser = await getUserByUsername(userData.username);

  if (existingUser) {
    throw new Error("User already exists");
  }

  const userWithEncryptedPassword: UserCreateModel = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10),
  };
  create(userWithEncryptedPassword);
}

export async function updateUser(
  id: string,
  userData: Omit<UserModel, "password">
) {
  return update(id, userData);
}

export async function followUser(followerId: string, followeeId: string) {}
