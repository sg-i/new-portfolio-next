import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
interface PortfolioElementProps {
  codeButton: string;
  title: string;
  liveDemoButton: string;
  description: string;
  stack: Array<string>;
  codeLink: string;
  demoLink: string;
  leftImage: boolean;
  images: [
    {
      original: string;
      thumbnail: string;
    },
  ];
}

export const PortfolioElement = ({
  title,
  codeButton,
  liveDemoButton,
  description,
  stack,
  codeLink,
  demoLink,
  leftImage,
  images,
}: PortfolioElementProps) => {
  const FullScreenOverCallback = () => {
    const scroll = window.scrollY;
    if (scroll != 0) {
      localStorage.setItem('scrollPosition', scroll.toString());
    }
  };
  const FullScreenChangedCallback = () => {
    const savedScrollPosition = localStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition));
    }
  };

  return (
    <div className={`flex gap-5 items-center ${leftImage && 'flex-row-reverse'}`}>
      <div onMouseMove={FullScreenOverCallback} className="w-3/5   overflow-hidden">
        <ImageGallery
          onScreenChange={FullScreenChangedCallback}
          showFullscreenButton={true}
          showPlayButton={false}
          items={images}
        />
        {/* <Image
          className="w-full"
          width={1920}
          height={1080}
          src={'/portfolio/netflix/1.png'}
          alt="netflix demo"
        /> */}
      </div>
      <div className="w-2/5  text-center gap-3 justify-between flex flex-col">
        <div>
          <div className="text-2xl font-medium mb-3">{title}</div>
          <div className="text-gray-500 font-medium">{description}</div>
        </div>
        <div className="flex gap-1 justify-center">
          {stack.map((el, index) => (
            <React.Fragment key={el}>
              <div className="font-semibold">{el}</div>
              {index < stack.length - 1 && <span className="font-semibold">•</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-center  font-semibold gap-10 text-lg">
          <Link
            target="_blank"
            className="p-2 shadow-md rounded-lg bg-white hover:bg-zinc-50"
            href={codeLink}>
            <div className="flex gap-1 items-center">
              <div>{codeButton}</div>
              <Image
                width={25}
                height={25}
                src={'/icons/socials/github-mark.svg'}
                alt={'github link'}
              />
            </div>
          </Link>
          <Link
            target="_blank"
            className="p-2 shadow-md rounded-lg bg-white hover:bg-zinc-50"
            href={demoLink}>
            <div className="flex gap-1 items-center">
              <div>{liveDemoButton}</div>
              <Image width={27} height={27} src={'/icons/socials/link.svg'} alt={'github link'} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
