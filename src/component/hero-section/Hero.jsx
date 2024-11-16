import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import car2 from "../hero-section/cars19.jpg";
import car3 from "../hero-section/cars14.jpg";
import car4 from "../hero-section/cars16.jpg";
import car5 from "../hero-section/cars17.jpg";

const Hero = ({
  images = [car2, car3, car4, car2, car5],
  autoplaySpeed = 5000,
  className = "",
  overlayText = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoplaySpeed);

    return () => clearInterval(interval);
  }, [images.length, autoplaySpeed, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = isMobile ? 30 : 50;

    if (Math.abs(distance) < minSwipeDistance) {
      return;
    }

    if (distance > 0) {
      nextSlide();
    } else {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
    setIsAutoPlaying(true);
  };

  return (
    <div
      className={`relative w-full mx-auto overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsAutoPlaying(true);
      }}
    >
      {/* Main container with responsive padding based on screen size */}
      <div
        className="relative overflow-hidden bg-gray-900"
        style={{
          paddingTop: isMobile ? "100%" : "56.25%",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="absolute top-0 left-0 flex w-full h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-full flex-shrink-0">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              {overlayText && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4 md:p-8">
                  <div className="text-center text-white max-w-4xl">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 tracking-tight">
                      Welcome to Ardo Cars
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 md:mb-12 max-w-2xl mx-auto">
                      Discover amazing cars and experiences with our carefully
                      curated collection
                    </p>
                    {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-white text-black px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors text-sm md:text-base">
                        Get Started
                      </button> */}
                    {/* <button className="border-2 border-white text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors text-sm md:text-base">
                        Learn More
                      </button> */}
                    {/* </div> */}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation buttons - Hidden on mobile touch devices */}
        {!isMobile && (
          <div
            className={`absolute inset-0 flex items-center justify-between p-2 md:p-4 opacity-0 ${
              isHovered ? "opacity-100" : ""
            } transition-opacity duration-300`}
          >
            <button
              onClick={prevSlide}
              className="bg-white/90 hover:bg-white p-1 md:p-2 rounded-full transform transition-all hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/90 hover:bg-white p-1 md:p-2 rounded-full transform transition-all hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>
        )}

        {/* Playback control - Hidden on mobile */}
        {!isMobile && (
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`absolute bottom-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full opacity-0 ${
              isHovered ? "opacity-100" : ""
            } transition-opacity duration-300`}
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </button>
        )}

        {/* Progress indicators - Optimized for touch on mobile */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-6 md:w-8 h-2 md:h-2 rounded-full"
                  : "bg-white/50 w-2 md:w-2 h-2 md:h-2 rounded-full hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
