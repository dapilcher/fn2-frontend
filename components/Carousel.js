"use client"

import { useState, useEffect, useRef } from "react";
import Slide from "./CarouselSlide";

function Carousel({ posts }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [prevSlideIndex, setPrevSlideIndex] = useState(0);
  const [nextSlideIndex, setNextSlideIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const slideTimerRef = useRef(null);

  // Set prev/next slide indexes whenever slideIndex changes
  useEffect(() => {
    setPrevSlideIndex(slideIndex - 1 < 0 ? posts.length - 1 : slideIndex - 1);
    setNextSlideIndex(slideIndex + 1 >= posts.length ? 0 : slideIndex + 1);
  }, [slideIndex, posts.length]);

  // Auto-advance slide
  useEffect(() => {
    if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
    slideTimerRef.current = setTimeout(() => {
      shiftSlide(1);
    }, 10000);
    return () => {
      if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
    };
    // eslint-disable-next-line
  }, [slideIndex, posts.length]);

  const shiftSlide = n => {
    let index = slideIndex + n;
    if (index >= posts.length) index = 0;
    if (index < 0) index = posts.length - 1;
    setSlideIndex(index);
  };

  const setSlide = i => {
    setSlideIndex(i);
  };

  const slides = posts.map(post => (
    <Slide post={post} sliding={sliding} key={`slide-${post.id}`} />
  ));

  return (
    <>
      <div className="max-w-full relative mb-8 border-b-8 border-red-500">
        <>
          {slides[slideIndex]}
        </>

        {slides.length > 1 &&
          <>

            <a className="cursor-pointer absolute top-1/2 -mt-6 p-4 bg-white bg-opacity-40 font-bold text-lg md:text-2xl transition duration-300 ease hover:bg-opacity-80 rounded-r"
              onClick={() => shiftSlide(-1)}>
              &#10094;
            </a>
            <a className="cursor-pointer absolute top-1/2 -mt-6 p-4 bg-white bg-opacity-40 font-bold text-lg md:text-2xl transition duration-300 ease hover:bg-opacity-80 rounded-l right-0"
              onClick={() => shiftSlide(1)}>
              &#10095;
            </a>
            <div className="dots absolute w-full h-auto top-0 left-0 m-2 bottom-auto md:bottom-0 md:top-auto md:text-center">
              {slides.map((_, i) => (
                <a
                  className={`dot cursor-pointer h-2 w-2 md:h-4 md:w-4  mx-2 bg-white bg-opacity-40 rounded-2xl inline-block transition duration-300 ease hover:bg-opacity-80 ${i === slideIndex ? "dot-active bg-opacity-80" : ""}`}
                  onClick={() => setSlide(i)}
                  key={`dot-${i}`}
                />
              ))}
            </div>
          </>
        }
      </div>
    </>
  );
}

export default Carousel;