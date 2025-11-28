"use client";

import { useEffect, useState } from "react";

export default function PostsPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch data
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");

        const data = await res.json();
        setPosts(data);
        setFiltered(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  // Filter posts
  useEffect(() => {
    const result = posts.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [search, posts]);

  return (
    <div className="px-20 py-10 font-neue min-h-screen text-white">

      <h1 className="text-4xl font-bold mb-6 text-primary">
        Public API Posts
      </h1>

      {/* Search Input */}
      <input
        type="text"
        value={search}
        placeholder="Search posts..."
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-xl bg-white/10 border border-white/20 
                   focus:border-primary outline-none mb-8"
      />

      {/* Loading State */}
      {loading && (
        <p className="text-lg text-white/70">Loading posts...</p>
      )}

      {/* Error State */}
      {error && (
        <p className="text-red-500 text-lg font-semibold">{error}</p>
      )}

      {/* Empty State */}
      {!loading && filtered.length === 0 && (
        <p className="text-white/60 text-xl">No posts match your search.</p>
      )}

      {/* Posts List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filtered.slice(0,12).map((post) => (
          <div
            key={post.id}
            className="
              bg-white/5 p-6 rounded-2xl border border-white/10 
              hover:bg-white/10 transition
            "
          >
            <h2 className="text-xl font-semibold mb-2">
              {post.title}
            </h2>
            <p className="text-white/60">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
