import Image from 'next/image';
import ProfilePicture from './ProfilePicture';
import { contentBioInterface } from '@/types';
interface BioProps {
  content: contentBioInterface;
}

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
export default function Bio({ content }: BioProps) {
  return (
    <div id="bioSection" className="justify-center  pt-10 md:pt-14 flex flex-col  w-full h-[100vh]">
      <div className="flex flex-col  items-center m-auto">
        {/* <div className="flex flex-col gap-14 md:flex-row items-center"> */}
        <div className="gap-0 md:gap-2 lg:gap-14 flex flex-wrap-reverse md:flex-nowrap justify-center items-center">
          {/* <div className="flex flex-col w-[480px] gap-4"> */}
          <div className="flex flex-col w-[330px] sm:w-[500px] md:w-[370px] lg:w-[460px]  text-center md:text-left gap-4">
            <div className="text-3xl sm:text-5xl font-bold">{content.title}</div>
            <div className="text-base sm:text-base text-gray-500 ">{content.description}</div>
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
        <div className="flex pt-4 mt-3 md:m-0 sm:pt-10 w-full gap-1 sm:gap-4  justify-center md:justify-normal flex-col sm:flex-row  items-center">
          <div className="hidden sm:block font-bold">{content.techStack}</div>
          <div className="hidden sm:block text-slate-400">|</div>
          <ul className="flex gap-6 h-16 items-center">
            <li className="flex h-full flex-col justify-between items-center">
              <div className="flex  h-full">
                <img
                  className="animate-spin-slow"
                  width={40}
                  height={40}
                  src={'/icons/tech-stack/react-icon.svg'}
                  alt="react icon"
                />
              </div>
              <div>React</div>
            </li>
            <li className="flex h-full flex-col justify-between items-center">
              <div className="flex  h-full">
                <img width={35} height={35} src={'/icons/tech-stack/vue.svg'} alt="react icon" />
              </div>
              <div>Vue</div>
            </li>
            <li className="flex h-full flex-col justify-between items-center">
              <div className="flex  h-full">
                <img
                  width={40}
                  height={40}
                  src={'/icons/tech-stack/tailwind.svg'}
                  alt="react icon"
                />
              </div>
              <div>Tailwind</div>
            </li>
            <li className="flex h-full flex-col justify-between items-center">
              <div className="flex  h-full">
                <img
                  width={34}
                  height={34}
                  src={'/icons/tech-stack/next-js.svg'}
                  alt="react icon"
                />
              </div>
              <div>Next</div>
            </li>
          </ul>
          {/* <div className="visible sm:hidden font-bold">{content.techStack}</div> */}
        </div>
      </div>
    </div>
  );
}
