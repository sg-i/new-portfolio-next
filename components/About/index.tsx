import { contentAboutInterface, contentNavbarInterface } from '@/types';
import { CornerBordersDiv } from '../CornerBordersDiv/indes';
import { SectionTitle } from '../SectionTitle';
import { AboutElement } from './AboutElement';
import Image from 'next/image';
interface AboutProps {
  section: string;
  content: contentAboutInterface;
}
export const About = ({ section, content }: AboutProps) => {
  return (
    <div id="aboutSection" className="flex flex-col items-center w-3/5 m-auto gap-6 mb-14">
      <SectionTitle title={section} description={content.title}></SectionTitle>
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
            <div className="font-serif  italic text-2xl text-nowrap">{content.quote}</div>
            <div className="text-xl mt-3">{content.description}</div>
          </div>
        </div>
        <CornerBordersDiv>
          <div className="flex flex-col items-center w-full gap-7 ">
            <div className="flex h-[52px] justify-center w-full gap-8">
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
            <div className="flex h-[52px] justify-center w-full gap-8">
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
