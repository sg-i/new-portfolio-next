import { contentAboutInterface, contentNavbarInterface } from '@/types';
import { CornerBordersDiv } from '../CornerBordersDiv';
import { SectionTitle } from '../SectionTitle';
import { AboutElement } from './AboutElement';
import Image from 'next/image';
interface AboutProps {
  section: string;
  content: contentAboutInterface;
}
export const About = ({ section, content }: AboutProps) => {
  return (
    <div
      id="aboutSection"
      // className="flex flex-col items-center w-full xl:w-3/5 m-auto gap-6 mb-14 pt-14">
      className="bg-white p-5 shadow-lg rounded-xl  flex flex-col items-center  m-auto gap-2 sm:gap-6 mb-6 md:mb-14 ">
      <SectionTitle title={section} description={content.title}></SectionTitle>
      <div className="flex flex-col w-full ">
        <div className="flex flex-col lg:flex-row gap-3 md:gap-12">
          <Image
            alt="web-design"
            className="w-full lg:w-[24vw] h-[20vh] lg:h-auto object-cover rounded-xl"
            src={'/web-design.jpg'}
            width={700}
            height={700}
          />
          <div className="flex flex-col ">
            <div className="font-serif  italic text-lg sm:text-2xl">{content.quote}</div>
            <div className="text-base sm:text-xl mt-1 sm:mt-3">{content.description}</div>
          </div>
        </div>
        <CornerBordersDiv>
          <div className="sm:flex sm:flex-col items-center w-full gap-2 md:gap-7 text-sm">
            <div className="sm:flex md:h-[52px] justify-normal md:justify-center w-full gap-3 md:gap-8 ">
              <AboutElement
                title={content.education.title}
                description={content.education.description}>
                <Image
                  className="w-[48px] h-[48px] mt-[2px]"
                  alt={'Higher Education'}
                  src={'/icons/about/education.png'}
                  width={320}
                  height={320}
                />
              </AboutElement>
              <AboutElement
                title={content.location.title}
                description={content.location.description}>
                <Image
                  className="w-[40px] h-[40px] "
                  alt={'Location'}
                  src={'/icons/about/map.png'}
                  width={320}
                  height={320}
                />
              </AboutElement>
            </div>
            <div className="flex md:h-[52px]  justify-normal md:justify-center w-full gap-8">
              <AboutElement
                title={content.languages.title}
                description={content.languages.description}>
                <Image
                  className="w-[37px] h-[37px] mt-[2px] mr-[-2px]"
                  alt={'languages'}
                  src={'/icons/about/translation.png'}
                  width={320}
                  height={320}
                />
              </AboutElement>
            </div>
          </div>
        </CornerBordersDiv>
      </div>
    </div>
  );
};
