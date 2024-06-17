import Image from 'next/image';
import { useState } from 'react';

const images = ['/portfolio/netflix/1.png', '/portfolio/netflix/2.png', '/portfolio/netflix/3.png'];

export const Corousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const index = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };
  return (
    <div className="bg-blue-100 h-full w-full flex flex-col ">
      <div className=" w-full">
        <div className="bg-red-100  w-full">
          <button className="absolute top-0 left-0 z-20 bg-white" onClick={goToPrevSlide}>
            Prev
          </button>
          <Image
            className=" h-full "
            width={1920}
            height={1080}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />
          <button className="absolute top-0 right-0 z-20 bg-white" onClick={goToNextSlide}>
            Next
          </button>
        </div>
      </div>
      <div className="flex h-24 bg-yellow-100 mt-[5px] ">
        {images.map((el) => (
          <Image className="object-contain" key={el} width={400} height={200} src={el} alt={''} />
        ))}
      </div>
    </div>
  );
};
