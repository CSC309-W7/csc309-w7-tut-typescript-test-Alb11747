import type { User } from "./types";

export const apiResponse: unknown = [
  { name: "Tony", age: 23 },
  { name: "Kevin", age: "24" }, // invalid
  { name: "Jim", age: 25 },
];

export function getUsersData(): User[] {
  if (!Array.isArray(apiResponse)) {
    return [];
  }
  return apiResponse.map((item) => {
    if (typeof item.name !== "string" || (typeof item.age !== "number" && typeof item.age !== "string")) {
      return { name: "Unknown", age: 0 };
    }
    return { name: item.name, age: typeof item.age === "number" ? item.age : parseInt(item.age, 10) };
  });
}

export function formatAges(users: User[]): string[] {
  return users.map((u) => u.age.toFixed(0));
}