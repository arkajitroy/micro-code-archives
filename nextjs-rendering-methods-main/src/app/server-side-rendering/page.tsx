import React from "react";
import { fetchUser } from "@/lib/fetch-user";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function page() {
  const user = await fetchUser();

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Server-Side Rendering Example
        </h1>
        <p className="text-gray-700 mb-4">
          This page fetches and displays a random user profile dynamically on the server
          for every request.
        </p>

        <div className="w-fit p-6 bg-white rounded-lg shadow-lg">
          <Image
            quality={100}
            width={1000}
            height={1000}
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            {user.name.first} {user.name.last}
          </h2>
          <p className="text-gray-600 text-center">{user.email}</p>
          <p className="text-gray-600 text-center">
            {user.location.city}, {user.location.country}
          </p>
        </div>
      </div>
    </div>
  );
}
