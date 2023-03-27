"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {};

const SearchBar = (props: Props) => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) {
      return;
    }
    router.push(`/search/${search}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-center items-center p-5"
    >
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder:gray-500 outline-none bg-transparent flex-1"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
      >
        Submit
      </button>
    </form>
  );
};

export default SearchBar;
