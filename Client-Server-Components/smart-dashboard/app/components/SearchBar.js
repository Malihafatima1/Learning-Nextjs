"use client";

import { useState } from "react";
import LikeButton from "./LikeButton";

export default function SearchBar({ users }) {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* 🔍 Search Input */}
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      {/* 🧩 User Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
        }}
      >
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            style={{
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              background: "#fff",
            }}
          >
            <h3>{user.name}</h3>
            <p>{user.email}</p>

            <LikeButton />
          </div>
        ))}
      </div>
    </div>
  );
}