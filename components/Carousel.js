"use client"

import React, { useState, useEffect, useRef } from "react";
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
      <style jsx>{`
                .carousel__container {
                    max-width: 100%;
                    position: relative;
                    {/* border-bottom: 0.3rem solid #eb3e34; */}
                }
                .prev,
                .next {
                    cursor: pointer;
                    position: absolute;
                    top: 50%;
                    width: auto;
                    margin-top: -22px;
                    padding: 1rem;
                    background: rgba(255, 255, 255, 0.4);
                    font-weight: bold;
                    font-size: 1rem;
                    transition: 0.5s ease;
                    border-radius: 0 3px 3px 0;
                }
                .next {
                    right: 0;
                    border-radius: 3px 0 0 3px;
                }
                .prev:hover,
                .next:hover {
                    background: rgba(255, 255, 255, 0.8);
                }
                .dots {
                    position: absolute;
                    width: 100%;
                    top: 0;
                    left: 0;
                    margin: 0.5rem;
                }
                .dot {
                    cursor: pointer;
                    height: 0.5rem;
                    width: 0.5rem;
                    margin: 0 0.5rem;
                    background: rgba(255, 255, 255, 0.4);
                    border-radius: 50%;
                    display: inline-block;
                    transition: 0.5s ease;
                }
                .dot-active,
                .dot:hover {
                    background: rgba(255, 255, 255, 0.8);
                }

                @media (min-width: 768px) {
                    .carousel__container {
                        {/* border-bottom-width: 0.5rem; */}
                    }
                    .dots {
                        text-align: center;
                        position: absolute;
                        width: 100%;
                        bottom: 1rem;
                        top: auto;
                    }
                    .dot {
                        height: 1rem;
                        width: 1rem;
                        margin: 0 0.5rem;
                    }
                }
            `}</style>
      <div className="carousel__container mb-8 border-b-8 border-red-500">
        <div className="carousel__slides">
          {slides[slideIndex]}
        </div>

        <a className="prev" onClick={() => shiftSlide(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => shiftSlide(1)}>
          &#10095;
        </a>
        <div className="dots">
          {slides.map((_, i) => (
            <a
              className={`dot ${i === slideIndex ? "dot-active" : ""}`}
              onClick={() => setSlide(i)}
              key={`dot-${i}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Carousel;