import { CornerBordersDiv } from '../CornerBordersDiv/indes';
import { SectionTitle } from '../SectionTitle';
import { AboutElement } from './AboutElement';
import Image from 'next/image';

export const About = () => {
  return (
    <div className="flex flex-col items-center w-3/5 m-auto gap-6 mb-14">
      <SectionTitle
        title={'ABOUT'}
        description={'Here is some information about me'}></SectionTitle>
      <div className="flex flex-col w-full ">
        <div className="flex  gap-12">
          <Image
            alt="web-design"
            className="w-[24vw] h-auto object-cover rounded-xl"
            src={'/web-design.jpg'}
            width={700}
            height={700}
          />
          <div className="flex flex-col ">
            <div className="font-serif  italic text-2xl text-nowrap">
              "Simplicity is the soul of efficiency." – Austin Freeman
            </div>
            <div className="text-xl mt-3">
              I am a highly responsible frontend developer with a strong passion for creating
              intuitive and dynamic user interfaces. My attention to detail and commitment to
              delivering high-quality work ensure that every project meets and exceeds expectations.
              I thrive in collaborative environments and am always eager to learn and grow my
              skills.
            </div>
          </div>
        </div>
        <CornerBordersDiv>
          <div className="flex flex-col items-center w-full gap-7 ">
            <div className="flex h-[52px] justify-center w-full gap-8">
              <AboutElement
                title={'Higher Education'}
                description={"Bachelor's degree in Computer Science"}>
                <Image
                  className="w-[48px] h-[48px] mt-[2px]"
                  alt={'Higher Education'}
                  src={'/icons/about/education.png'}
                  width={320}
                  height={320}
                />
              </AboutElement>
              <AboutElement title={'Location'} description={'Saint-Petersburg, Russia'}>
                <Image
                  className="w-[40px] h-[40px] "
                  alt={'Location'}
                  src={'/icons/about/map.png'}
                  width={320}
                  height={320}
                />
              </AboutElement>
            </div>
            <div className="flex h-[52px] justify-center w-full gap-8">
              <AboutElement title={'Languages'} description={'Russian (Native) | English (B2)'}>
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
