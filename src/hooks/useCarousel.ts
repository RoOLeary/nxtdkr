/* eslint-disable unused-imports/no-unused-vars */

'use client';

import gsap from 'gsap';
import { useEffect, useState } from 'react';

interface CarouselProps {
  images?: any;
  mapImages?: any;
  duration?: number; // duration for each slide, in seconds
}

export const useCarousel = ({ images, mapImages, duration }: CarouselProps) => {
  gsap.config({ nullTargetWarn: false });

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect((): any => {
    const tl = gsap.timeline({
      defaults: { ease: 'power1.out' },
      repeat: -1,
    });

    images.forEach((_: any, i: number) => {
      tl.to(
        {},
        {
          duration,
          onComplete: () => setCurrentIndex((i + 1) % images.length),
        },
      );
    });

    return () => tl.kill();
  }, [images, duration]);

  return currentIndex;
};

export default useCarousel;
