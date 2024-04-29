import Image from 'next/image';
import Link from 'next/link';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
interface PortfolioElementProps {
  title: string;
  description: string;
  stack: Array<string>;
  codeLink: string;
  demoLink: string;
  leftImage: boolean;
}

const images = [
  {
    original: '/portfolio/netflix/1.png',
    thumbnail: '/portfolio/netflix/1.png',
  },
  {
    original: '/portfolio/netflix/1.png',
    thumbnail: '/portfolio/netflix/1.png',
  },
  {
    original: '/portfolio/netflix/1.png',
    thumbnail: '/portfolio/netflix/1.png',
  },
];

export const PortfolioElement = ({
  title,
  description,
  stack,
  codeLink,
  demoLink,
  leftImage,
}: PortfolioElementProps) => {
  return (
    <div className={`flex gap-5 items-center ${leftImage && 'flex-row-reverse'}`}>
      <div className="w-3/5   overflow-hidden">
        <ImageGallery showFullscreenButton={false} showPlayButton={false} items={images} />
        {/* <Image
          className="w-full"
          width={1920}
          height={1080}
          src={'/portfolio/netflix/1.png'}
          alt="netflix demo"
        /> */}
      </div>
      <div className="w-2/5  text-center h-80 justify-between flex flex-col">
        <div>
          <div className="text-2xl font-medium mb-3">{title}</div>
          <div className="text-gray-500 font-medium">{description}</div>
        </div>
        <div className="flex gap-2 justify-center">
          {stack.map((el) => (
            <div className="font-semibold" key={el}>
              {el}
            </div>
          ))}
        </div>
        <div className="flex justify-center  font-semibold gap-10 text-lg">
          <Link
            target="_blank"
            className="p-2 shadow-md rounded-lg bg-white hover:bg-zinc-50"
            href={codeLink}>
            <div className="flex gap-1 items-center">
              <div>Code</div>
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
              <div>Live Demo</div>
              <Image width={27} height={27} src={'/icons/socials/link.svg'} alt={'github link'} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
