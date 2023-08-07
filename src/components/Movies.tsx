"use client";

import { movieProps } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getMovieData } from "../app/utils/fetchMovies";
import { AiFillPlayCircle, AiFillStar, AiOutlineLike } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";

const Movies = () => {
  const [movies, setMovies] = useState<movieProps[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovieData();
        console.log(data);
        if (data?.results) {
          setMovies(data.results);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="pt-20 p-2 sm:p-10 bg-black text-gray-200">
      <h1>電影列表</h1>
      <div className="grid  grid-cols-2 grid-flow-row gap-4 sm:grid-cols-3 sm:gap-10 lg:grid-cols-4 ">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <div
              className=" relative"
              key={movie.id}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
            >
              <Link
                href={`/movies/${movie.id}`}
                className=" relative flex flex-col items-center justify-center p-2 "
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-xl"
                />
                <h2>{movie.title}</h2>
              </Link>
              {hoveredIndex === index && (
                <div className="z-30 absolute top-0 rounded-2xl overflow-hidden bg-stone-900  transform translate-y-2 transition-all ease-in-out duration-300 hover:opacity-100 hover:translate-y-0 hover:scale-105">
                  <Link
                    href={`/movies/${movie.id}`}
                    className=" relative flex flex-col items-start justify-center scale-100 text-gray-200"
                  >
                    <div>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className=" absolute flex flex-col w-full h-full justify-center items-center bg-gray-900/20">
                      <div className="flex text-4xl p-2 gap-2">
                        <AiFillPlayCircle />
                        <MdAddCircleOutline />
                        <AiOutlineLike />
                      </div>
                      <div className="text-yellow-200 flex items-center justify-center p-4">
                        {movie.vote_average}
                        <AiFillStar />
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </div>
  );
};

export default Movies;
