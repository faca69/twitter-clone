import { db } from "@/db";
import { UserCreateModel, UserModel, users } from "@/db/schemas/user.schema";
import { eq } from "drizzle-orm";

export const findByUsername = (username: string) =>
  db.query.users.findFirst({
    where: eq(users.username, username),
    with: {
      followers: true,
      following: true,
    },
  });

export const create = (user: UserCreateModel): Promise<UserModel> =>
  db
    .insert(users)
    .values(user)
    .returning()
    .then((res) => res[0]);

export async function update(
  id: string,
  userData: Omit<UserModel, "password">
) {
  db.update(users)
    .set(userData)
    .where(eq(users.id, id))
    .returning()
    .then((res) => res?.[0]);
}
