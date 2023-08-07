"use client";

import { options } from "@/app/utils/fetchMovies";
import { NewButton } from "@/components";
import { top10 } from "@/constant";
import { movieProps } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

const MovieDetailPage = ({ params }: { params: { id: string } }) => {
  const [movie, setMovie] = useState<movieProps | null>(null);
  const id = params.id;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=zh-TW`,
          options
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    fetchMovie();
  }, [id]);

  // 在 movie 為 null 時顯示 "Loading..." 的訊息
  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-14 p-10 flex flex-1 flex-col gap-4 w-screen  ">
      <Link
        href="/movies"
        className="hover:bg-slate-300/70 w-20  px-4 py-2 rounded-full text-center "
      >
        返回
      </Link>
      <div className="flex flex-col gap-6 p-4 rounded-xl items-center  bg-yellow-800/20 sm:flex-row sm:">
        <div className="text-center  flex-1 rounded-lg">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-containll rounded-lg"
          />
        </div>

        <div className="h-full flex flex-col flex-1 items-center  justify-around gap-4 text-gray-100">
          <h1 className="text-lg sm:text-4xl ">{movie.title}</h1>
          <h2 className="text-lg sm:text-2xl ">{movie.original_title}</h2>
          <p className="text-xs sm:text-base">{movie.overview}</p>
          <div className="flex justify-around w-full">
            <p className="text-sm">
              上映日期：
              <br />
              {movie.release_date}
            </p>
            <p className="text-sm ">
              評分：
              <br />
              <span className="text-yellow-500 flex  items-center">
                <AiFillStar />{" "}
                {movie.vote_average !== null && (
                  <>
                    {movie.vote_average}
                    <AiFillStar />
                  </>
                )}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
