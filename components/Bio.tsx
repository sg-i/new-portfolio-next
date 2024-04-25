import Image from 'next/image';

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

export default function Bio() {
  return (
    <div className="justify-center min-h-screen flex flex-col ">
      <div className="flex flex-col items-center w-[70%] m-auto">
        <div className="flex gap-14 items-center">
          <div className="flex flex-col w-[380px] gap-4">
            <div className="text-5xl">Frontend React Dev</div>
            <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
            <div>
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
          <div className="overflow-hidden h-64 w-64">
            <Image width={300} height={100} src="/profile-picture.jpg" alt="profile picture" />
          </div>
        </div>
        <div className="flex  justify-between">
          <div>Tech Stack</div>
          <ul className="flex">
            <li>Html</li>
            <li>CSS</li>
            <li>JS</li>
            <li>React</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
