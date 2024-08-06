import Image from 'next/image';
import ProfilePicture from './ProfilePicture';
import { contentBioInterface } from '@/types';
import { TechStackElement } from './TechStackElement';
import { useEffect, useState } from 'react';
interface BioProps {
  content: contentBioInterface;
}
export default function Bio({ content }: BioProps) {
  const socials = [
    {
      id: 1,
      size: 28,
      src: '/icons/socials/linkedin.svg',
      alt: 'linkedin link',
    },
    {
      id: 2,
      size: 25,
      src: '/icons/socials/github-mark.svg',
      alt: 'github link',
    },
  ];
  const techStack = [
    {
      size: 35,
      src: '/icons/tech-stack/vue.svg',
      text: 'Vue',
    },
    {
      size: 34,
      src: '/icons/tech-stack/next-js.svg',
      text: 'Next',
    },
    {
      size: 40,
      src: '/icons/tech-stack/tailwind.svg',
      text: 'Tailwind',
    },

    {
      size: 40,
      src: '/icons/tech-stack/node-js.svg',
      text: 'NodeJS',
    },
    // {
    //   size: 37,
    //   src: '/icons/tech-stack/material-ui.svg',
    //   text: 'MaterialUI',
    // },
  ];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div id="bioSection" className="justify-center  pt-10 md:pt-14 flex flex-col  w-full h-[100vh]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        muted
        loop
        src="/video/abstract2.mp4"></video>

      <div className="flex flex-col  items-center m-auto">
        {/* <div className="flex flex-col gap-14 md:flex-row items-center"> */}
        <div className="gap-0 md:gap-2 lg:gap-14 flex flex-wrap-reverse md:flex-nowrap justify-center items-center">
          {/* <div className="flex flex-col w-[480px] gap-4"> */}
          <div className="flex flex-col w-[330px] sm:w-[500px] md:w-[370px] lg:w-[460px]  text-center md:text-left gap-4">
            <div className="text-3xl sm:text-5xl font-bold">{content.title}</div>
            <div className="text-base sm:text-base text-gray-800 ">{content.description}</div>
            <div className="sm:pt-2">
              <ul className="flex items-center justify-center md:justify-normal gap-3">
                {socials.map((social) => (
                  <li key={social.id}>
                    <a href="https://github.com/sg-i" target="_blank" rel="noopener noreferrer">
                      <Image
                        width={social.size}
                        height={social.size}
                        src={social.src}
                        alt={social.alt}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ProfilePicture />
        </div>
        <div className="flex pt-4 mt-3 md:m-0 sm:pt-10 w-full gap-1 sm:gap-4  justify-center md:justify-start flex-col sm:flex-row  items-center">
          <div className="hidden sm:block font-bold">{content.techStack}</div>
          <div className="hidden sm:block text-slate-400">|</div>
          <ul className="flex gap-5 h-16 items-center flex-nowrap overflow-hidden justify-center sm:justify-start px-8 sm:px-0 ">
            <TechStackElement text="React" size={40} src="/icons/tech-stack/react-icon.svg">
              <img
                className="animate-spin-slow"
                width={40}
                height={40}
                src={'/icons/tech-stack/react-icon.svg'}
                alt="react icon"
              />
            </TechStackElement>
            {techStack.map((el) => (
              <TechStackElement key={el.text} size={el.size} src={el.src} text={el.text} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
