import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
interface PortfolioElementImageProps {
  original: string;
  thumbnail: string;
}
interface PortfolioElementProps {
  codeButton: string;
  title: string;
  liveDemoButton: string;
  description: string;
  stack: Array<string>;
  codeLink: string;
  demoLink: string;
  leftImage: boolean;
  images: PortfolioElementImageProps[];
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
    <div>
      <div
        className={` flex flex-col-reverse lg:flex-row gap-2 lg:gap-5 items-center mt-6 md:mt-12 ${
          leftImage && 'lg:flex-row-reverse'
        }`}>
        <div className="flex justify-center lg:hidden font-semibold gap-10 text-lg">
          <Link
            target="_blank"
            className="p-2 shadow-md rounded-lg bg-white border-zinc-200 border-[1px] hover:bg-zinc-50"
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
            className="p-2 shadow-md rounded-lg bg-white border-zinc-200 border-[1px] hover:bg-zinc-50"
            href={demoLink}>
            <div className="flex gap-1 items-center">
              <div>{liveDemoButton}</div>
              <Image width={27} height={27} src={'/icons/socials/link.svg'} alt={'github link'} />
            </div>
          </Link>
        </div>
        <div onMouseMove={FullScreenOverCallback} className="lg:w-3/5 w-full  overflow-hidden">
          <ImageGallery
            onScreenChange={FullScreenChangedCallback}
            showFullscreenButton={true}
            showPlayButton={false}
            items={images}
          />
        </div>
        <div className="lg:w-2/5  text-center gap-3 justify-between flex flex-col">
          <div className="px-5">
            <div className="text-xl lg:text-2xl font-medium mb-1 lg:mb-3">{title}</div>
            <div className="text-gray-500 font-medium">{description}</div>
          </div>
          <div className="flex gap-1 mb-1 justify-center flex-wrap">
            {stack.map((el, index) => (
              <React.Fragment key={el}>
                <div className="font-semibold">{el}</div>
                {index < stack.length - 1 && (
                  <span className="font-semibold block lg:hidden xl:block">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className=" justify-center hidden lg:flex  font-semibold gap-10 text-lg">
            <Link
              target="_blank"
              className="p-2 shadow-md rounded-lg bg-white border-zinc-200 border-[1px] hover:bg-zinc-50"
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
              className="p-2 shadow-md rounded-lg bg-white border-zinc-200 border-[1px] hover:bg-zinc-50"
              href={demoLink}>
              <div className="flex gap-1 items-center">
                <div>{liveDemoButton}</div>
                <Image width={27} height={27} src={'/icons/socials/link.svg'} alt={'github link'} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* <hr className="my-20 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-55 dark:via-neutral-400" /> */}
    </div>
  );
};
