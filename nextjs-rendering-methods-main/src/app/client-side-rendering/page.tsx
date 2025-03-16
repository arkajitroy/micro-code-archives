"use client";

import React, { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function ClientSidePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from an API
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts.");
        }
        const data = await response.json();
        setPosts(data.slice(0, 5));
      } catch (err) {
        if (err instanceof Error) setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Runs only once when the component mounts

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Client-Side Rendering Example
        </h1>
        <p className="text-gray-700 mb-4">
          This page fetches and displays a list of posts dynamically on the client side
          after the page is loaded.
        </p>

        {loading && <p className="text-gray-500">Loading posts...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {!loading && !error && (
          <ul className="space-y-4">
            {posts.map((post) => (
              <li
                key={post.id}
                className="p-4 bg-white rounded-lg shadow hover:shadow-md transition duration-200"
              >
                <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
                <p className="text-gray-600">{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
