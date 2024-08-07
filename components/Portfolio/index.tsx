import React from 'react';
import { PortfolioElement } from './PortfolioElement';
import { SectionTitle } from '../SectionTitle';
import { contentPortfolioInterface, projectInterface } from '@/types';

interface PortfolioProps {
  section: string;
  content: contentPortfolioInterface;
  projects: projectInterface[];
}

export const Portfolio = ({ section, content, projects }: PortfolioProps) => {
  return (
    <div
      id="portfolioSection"
      className="bg-white px-0 md:p-5 shadow-lg rounded-xl flex flex-col items-center  m-auto mb-6 md:mb-14 ">
      <div className="w-full  p-5 md:p-0">
        <SectionTitle title={section} description={content.description}>
          <div className="animate-bounce text-2xl">🧩</div>
        </SectionTitle>
      </div>
      <div className="flex divide-y flex-col items-center  m-auto gap-6 lg:gap-12 ">
        {projects.map((el, index) => (
          <PortfolioElement
            key={el.title}
            codeButton={content.codeButton}
            liveDemoButton={content.liveDemoButton}
            title={el.title}
            description={el.description}
            stack={el.stack}
            codeLink={el.codeLink}
            demoLink={el.demoLink}
            images={el.images}
            leftImage={index % 2 == 1}
          />
        ))}
      </div>
    </div>
  );
};
