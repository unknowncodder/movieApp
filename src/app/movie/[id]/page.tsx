import React from "react";
import Image from "next/image";
import { title } from "process";

type Props = {};

const getMovieInfo = async (movieId: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
};

const MoviePage = async ({ params }: Props) => {
  const movieId = params.id;
  const movie = await getMovieInfo(movieId);
  const {
    backdrop_path,
    poster_path,
    title,
    name,
    overview,
    release_date,
    first_air_date,
    vote_count,
  } = movie;
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            backdrop_path || poster_path
          }`}
          width={500}
          height={300}
          alt="Movie poster"
          style={{ maxWidth: "100%", height: "100%" }}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/favicon.ico"
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">{title || name}</h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {release_date || first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {release_date || first_air_date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
