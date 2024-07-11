/* eslint-disable no-console */

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const slidingGalleryImages = [
  {
    src: '/assets/images/heart.webp',
    original: '/assets/images/heart.webp',
    width: 320,
    height: 174,
    title: "We're no strangers to love....",
  },
  {
    src: 'https://media.giphy.com/media/ibqNLl44qRLJyKv7rU/giphy-downsized-large.gif',
    original:
      'https://media.giphy.com/media/ibqNLl44qRLJyKv7rU/giphy-downsized-large.gif',
    width: 350,
    height: 250,
    title: '...you know the rules and so do I...',
  },
  {
    src: '/assets/images/coffee.webp',
    original: '/assets/images/coffee.webp',
    width: 350,
    height: 212,
    title: "...a full commitment's what I'm thinking of...",
  },
  {
    src: 'https://media.giphy.com/media/QyVZ1BCz9Fh6J0qblM/giphy.gif',
    original: 'https://media.giphy.com/media/QyVZ1BCz9Fh6J0qblM/giphy.gif',
    width: 480,
    height: 240,
    title: "...you wouldn't get this from any other guy...",
  },
];

export const SlidingGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const timeout = 1500;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex + 1 === slidingGalleryImages.length ? 0 : prevIndex + 1,
      );
    }, timeout);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slidingGallery">
      {slidingGalleryImages
        .map((img, i) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div className="w-full h-full" key={i}>
              <Image
                src={img.src}
                width={760}
                height={350}
                className={`item ${i === currentImageIndex ? 'active' : ''}`}
                alt={img.title}
                style={{ opacity: i === currentImageIndex ? 1 : 0 }}
              />
            </div>
          );
        })
        .slice(0, 4)}
    </div>
  );
};
