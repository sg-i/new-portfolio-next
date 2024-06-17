import { SectionTitle } from '../SectionTitle';
import { AboutElement } from './AboutElement';
import Image from 'next/image';

export const About = () => {
  return (
    <div className="flex flex-col items-center w-3/5 m-auto gap-6 mb-14">
      <SectionTitle
        title={'ABOUT'}
        description={'Here is some information about me'}></SectionTitle>
      <div className="flex flex-col items-center w-full ">
        <div className="flex h-[52px] justify-start w-full">
          <div className="flex gap-2 h-[52px] w-[390px] ">
            <Image
              className="w-[48px] h-[48px] mt-[2px]"
              alt={'Higher Education'}
              src={'/icons/about/education.png'}
              width={320}
              height={320}
            />
            <div>
              <div className="text-xl font-medium text-nowrap">Higher Education</div>
              <div className="text-gray-500 text-nowrap font-medium">
                Bachelor's degree in Computer Science
              </div>
            </div>
          </div>

          <div className="flex gap-2  h-[52px] w-[390px] items-center ">
            <Image
              className="w-[40px] h-[40px] "
              alt={'Location'}
              src={'/icons/about/map.png'}
              width={320}
              height={320}
            />
            <div>
              <div className="text-xl font-medium ">Location</div>
              <div className="text-gray-500 font-medium">Saint-Petersburg, Russia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
