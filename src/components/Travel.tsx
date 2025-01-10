'use client';

import { useState } from 'react';

type TravelPhoto = {
  src: string;
  caption: string;
  location: string;
  date: string;
};

const TRAVEL_PHOTOS: TravelPhoto[] = [
  {
    src: '/nz-mountain.webp',
    caption: 'Sunset gondola ride through the canals',
    location: 'Venice, Italy',
    date: 'July 2023',
  },
];

export const Travel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= TRAVEL_PHOTOS.length - 3 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TRAVEL_PHOTOS.length - 3 : prev - 1
    );
  };

  return (
    <section className='my-8'>
      <h2 className='text-2xl font-bold mb-4'>Travel</h2>
      <div className='relative w-full max-w-6xl mx-auto'>
        <div className='flex gap-4'>
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % TRAVEL_PHOTOS.length;
            return (
              <div key={index} className='flex-1'>
                <div className='aspect-[3/4] relative overflow-hidden rounded-lg'>
                  <img
                    src={TRAVEL_PHOTOS[index].src}
                    alt={TRAVEL_PHOTOS[index].caption}
                    className='w-full h-full object-cover rounded-lg'
                  />
                </div>
                <div className='mt-2 text-gray-600'>
                  <p className='font-medium'>{TRAVEL_PHOTOS[index].caption}</p>
                  <p className='text-sm'>
                    {TRAVEL_PHOTOS[index].location} •{' '}
                    {TRAVEL_PHOTOS[index].date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={prevSlide}
          className='absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity'
          aria-label='Previous photo'
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className='absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity'
          aria-label='Next photo'
        >
          →
        </button>
      </div>
    </section>
  );
};
