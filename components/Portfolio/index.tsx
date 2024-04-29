import React from 'react';
import { PortfolioElement } from './PortfolioElement';

const projects = [
  {
    title: 'Netflix Clone • Online Сinema 🎬',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda sint dolorum molestias reprehenderit perferendis unde illo consequuntur et amet! Fugit, laboriosam earum! Vel quam dolores voluptate tempora pariatur, sit maxime.',
    stack: ['React', 'Next', 'SCSS'],
    codeLink: 'https://github.com/sg-i',
    demoLink: 'https://github.com/sg-i',
  },
  {
    title: '1Netflix Clone • Online Сinema 🎬',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda sint dolorum molestias reprehenderit perferendis unde illo consequuntur et amet! Fugit, laboriosam earum! Vel quam dolores voluptate tempora pariatur, sit maxime.',
    stack: ['React'],
    codeLink: 'https://github.com/sg-i',
    demoLink: 'https://github.com/sg-i',
  },
  {
    title: '2Netflix Clone • Online Сinema 🎬',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda sint dolorum molestias reprehenderit perferendis unde illo consequuntur et amet! Fugit, laboriosam earum! Vel quam dolores voluptate tempora pariatur, sit maxime.',
    stack: ['React', 'Next', 'SCSS'],
    codeLink: 'https://github.com/sg-i',
    demoLink: 'https://github.com/sg-i',
  },
];

export const Portfolio = () => {
  return (
    <div className="flex flex-col items-center w-3/5 m-auto gap-16">
      <div className="w-full">
        <div className="font-bold text-md text-blue-500">PORTFOLIO</div>
        <div className="font-bold text-2xl flex gap-2 items-center">
          <div>My Works: Creativity and Code in Action</div>{' '}
          <div className="animate-bounce text-2xl">🧩</div>
        </div>
      </div>
      <div className="flex flex-col items-center  m-auto gap-24">
        {projects.map((el, index) => (
          <PortfolioElement
            key={el.title}
            title={el.title}
            description={el.description}
            stack={el.stack}
            codeLink={el.codeLink}
            demoLink={el.demoLink}
            leftImage={index % 2 == 1}
          />
        ))}
      </div>
    </div>
  );
};
