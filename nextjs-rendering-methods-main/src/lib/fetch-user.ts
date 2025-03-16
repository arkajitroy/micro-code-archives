"use server";

export async function fetchUser() {
  const response = await fetch("https://randomuser.me/api/", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user.");
  }

  const data = await response.json();
  return data.results[0];
}
