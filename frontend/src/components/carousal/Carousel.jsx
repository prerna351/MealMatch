import React, { useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, image: '/food/image2.jpg' },
    { id: 2, image: '/food/image3.jpg' },
    { id: 3, image: '/food/image4.jpg' },
    { id: 4, image: '/food/image1.jpg' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-screen-lg  mx-auto">
      <div className="overflow-hidden relative">
        <div className="carousel-inner flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={slide.id} className="carousel-item flex-none w-full">
              <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full rounded-md max-h-[250px] md:h-[500px] object-contain" />
            </div>
          ))}

        </div>
        <button onClick={prevSlide} className="absolute left-0 top-32 md:top-60 inset-y-0 flex items-center justify-center p-2 bg-gray-400 bg-opacity-45 h-8 rounded-md ml-2 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
          <path fill-rule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clip-rule="evenodd" />
        </svg>


      </button>
      <button onClick={nextSlide} className="absolute right-0 top-32 md:top-60 h-8 rounded-md mr-2 inset-y-0 flex items-center justify-center p-2 bg-gray-400 bg-opacity-45 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"     fill="currentColor" class="size-5">
          <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
        </svg>

      </button>
      </div>
      
    </div>
  );
};

export default Carousel;
