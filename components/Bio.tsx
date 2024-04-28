import Image from 'next/image';
import ProfilePicture from './ProfilePicture';

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
const techStack = [];
export default function Bio() {
  return (
    <div className="justify-center pt-14 flex flex-col  h-full">
      <div className="flex flex-col items-center  m-auto">
        <div className="flex gap-14 items-center">
          <div className="flex flex-col w-[380px] gap-4">
            <div className="text-5xl font-bold">Frontend React Developer</div>
            <div className="text-gray-500">
              Hello! I'm Ivan Sgadov, a responsible and hardworking frontend developer.
            </div>
            <div className="pt-2">
              <ul className="flex items-center gap-3">
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
        <div className="flex pt-10 w-full gap-4 items-center">
          <div className="font-bold">Tech Stack</div>
          <div className="text-slate-400">|</div>
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
        </div>
      </div>
    </div>
  );
}
