import Link from "next/link";
import Image from "next/image";
import { HiThumbUp } from "react-icons/hi";

import React from "react";

type Props = {
  result: {
    title: string;
    id: string;
    poster_path?: string;
    backdrop_path?: string;
    overview: string;
    name: string;
    release_date: string;
    first_air_date: string;
    vote_count: number;
  };
};

const Card = ({ result }: Props) => {
  const {
    title,
    id,
    backdrop_path,
    poster_path,
    overview,
    name,
    release_date,
    first_air_date,
    vote_count,
  } = result;
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`movie/${id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            backdrop_path || poster_path
          }`}
          width={500}
          height={300}
          alt="image is not available"
          style={{ maxWidth: "100%", height: "auto" }}
          className="sm:rounded-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/favicon.ico"
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2">{overview}</p>
          <h2 className="truncate text-lg font-bold">{title || name}</h2>
        </div>
        <p className="flex items-center">
          {release_date || first_air_date}{" "}
          <HiThumbUp className="h-5 mr-1 ml-3" /> {vote_count}
        </p>
      </Link>
    </div>
  );
};

export default Card;
