import Results from "@/components/Results";
import React from "react";

type Props = {
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};

const page = async ({ searchParams }: Props) => {
  const search_term = searchParams && searchParams.search_term;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${search_term}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  const data = await res.json();
  const results = data.results;
  console.log("results", results);
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {results && <Results results={results} />}
    </div>
  );
};

export default page;
