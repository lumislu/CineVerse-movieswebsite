"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchPopularMovies } from "@/app/utils/fetchMovies";
import { CarouselProps } from "@/types";
const Carousel = ({ top10Movies }:CarouselProps) => {
  return (
    <div
      id="carousel-container"
      className="relative flex flex-col p-2 w-full h-fit bg-black text-gray-200 "
    >
      <p className="pl-10 text-lg sm:text-2xl ">熱播排行Top10</p>
      <div id="carouselbar" className="flex  gap-4  overflow-y-auto ">
        {top10Movies &&
          top10Movies.map((item, index) => (
            <Link
              key={item.id}
              href={`/movies/${item.id}`}
              className="flex flex-col  items-center justify-center p-4 sm:flex-row"
            >
              <div className=" text-2xl sm:text-9xl font-extrabold text-gray-200/80">
                <span className="text-2xl sm:hidden">Top</span>
                {index + 1}
              </div>
              <div className="w-20 sm:w-40 z-10">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                  className="rounded-2xl"
                />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Carousel;
