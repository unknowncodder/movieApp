import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

type Props = {
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function Home({ searchParams }: Props) {
  const genre = searchParams && searchParams.genre;

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  const data = await res.json();
  const result = data.results;

  return (
    <main>
      <Results results={result || []} />
    </main>
  );
}
