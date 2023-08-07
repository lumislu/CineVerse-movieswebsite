"use client";
import React, { useState, useEffect } from "react";
import { movieProps } from "@/types";
import { AiFillPlayCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { NewButton } from "./"; // 假设你的按钮组件在此文件中
import Link from "next/link";

const Hero = ({ top10Movies }: { top10Movies: movieProps[] }) => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % top10Movies.length);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [top10Movies.length]);

  const currentMovie = top10Movies[currentMovieIndex];

  return (
    <div className="relative flex flex-col items-start justify-end w-full h-screen text-gray-200">
      <div
        className="relative bg-center bg-cover bg-no-repeat flex flex-col items-start justify-end w-full h-screen"
        style={{
          backgroundImage: currentMovie?.backdrop_path
            ? `url(https://image.tmdb.org/t/p/original${currentMovie.backdrop_path})`
            : "none",
        }}
      >
        <div className="flex flex-col items-start justify-end p-4 bg-gray-900/20 rounded-lg">
          {currentMovie?.title && (
            <>
              <h1 className="sm:text-4xl font-bold">{currentMovie.title}</h1>
              <p className="text-sm">本節目排行榜第{currentMovieIndex + 1}名</p>
            </>
          )}
          {currentMovie?.overview && (
            <p className="hidden sm:flex text-xs sm:max-w-xs">
              {currentMovie.overview}
            </p>
          )}
          <div className="flex gap-4">
            <Link href={currentMovie?.id ? `/movies/${currentMovie.id}` : "#"}>
              <NewButton
                Icon={AiFillPlayCircle}
                title="播放"
                containerStyles="bg-orange-500/90 py-2 px-6 rounded-lg hover:bg-orange-700 text-gray-200"
              />
            </Link>
            <Link href={currentMovie?.id ? `/movies/${currentMovie.id}` : "#"}>
              <NewButton
                Icon={AiOutlineInfoCircle}
                title="更多資訊"
                containerStyles="bg-gray-500/90 py-2 px-6 rounded-lg hover:bg-gray-700 text-gray-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
