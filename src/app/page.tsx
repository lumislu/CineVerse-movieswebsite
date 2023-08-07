"use client";
import React, { useEffect, useState } from "react";
import { Carousel, Hero, Movies } from "@/components";
import { fetchPopularMovies } from "@/app/utils/fetchMovies";
import { movieProps } from "@/types";
export default function Home() {
  const [top10Movies, setTop10Movies] = useState<movieProps[] | []>([]);

  useEffect(() => {
    const fetchtop10Movies = async () => {
      try {
        const data = await fetchPopularMovies();
        const top10Movies = data.results.slice(0, 10);
        setTop10Movies(top10Movies);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    fetchtop10Movies();
  }, []);

  return (
    <main>
      <Hero top10Movies={top10Movies} />
      <Carousel top10Movies={top10Movies} />
      <Movies />
    </main>
  );
}
