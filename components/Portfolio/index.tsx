import React from 'react';
import { PortfolioElement } from './PortfolioElement';
import { SectionTitle } from '../SectionTitle';

const projects = [
  {
    title: 'Netflix Clone • Online Сinema 🎬',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda sint dolorum molestias reprehenderit perferendis unde illo consequuntur et amet! Fugit, laboriosam earum! Vel quam dolores voluptate tempora pariatur, sit maxime.',
    stack: ['React', 'Next', 'SCSS'],
    codeLink: 'https://github.com/sg-i',
    demoLink: 'https://github.com/sg-i',
    images: [
      {
        original: '/portfolio/netflix/1.png',
        thumbnail: '/portfolio/netflix/1.png',
      },
      {
        original: '/portfolio/netflix/2.png',
        thumbnail: '/portfolio/netflix/2.png',
      },
      {
        original: '/portfolio/netflix/3.png',
        thumbnail: '/portfolio/netflix/3.png',
      },
    ],
  },
  {
    title: '1Netflix Clone • Online Сinema 🎬',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda sint dolorum molestias reprehenderit perferendis unde illo consequuntur et amet! Fugit, laboriosam earum! Vel quam dolores voluptate tempora pariatur, sit maxime.',
    stack: ['React'],
    codeLink: 'https://github.com/sg-i',
    demoLink: 'https://github.com/sg-i',
    images: [
      {
        original: '/portfolio/spotify/1.png',
        thumbnail: '/portfolio/spotify/1.png',
      },
      {
        original: '/portfolio/spotify/2.png',
        thumbnail: '/portfolio/spotify/2.png',
      },
      {
        original: '/portfolio/spotify/3.png',
        thumbnail: '/portfolio/spotify/3.png',
      },
      {
        original: '/portfolio/spotify/4.png',
        thumbnail: '/portfolio/spotify/4.png',
      },
    ],
  },
  {
    title: '2Netflix Clone • Online Сinema 🎬',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda sint dolorum molestias reprehenderit perferendis unde illo consequuntur et amet! Fugit, laboriosam earum! Vel quam dolores voluptate tempora pariatur, sit maxime.',
    stack: ['React', 'Next', 'SCSS'],
    codeLink: 'https://github.com/sg-i',
    demoLink: 'https://github.com/sg-i',
    images: [
      {
        original: '/portfolio/netflix/1.png',
        thumbnail: '/portfolio/netflix/1.png',
      },
      {
        original: '/portfolio/netflix/2.png',
        thumbnail: '/portfolio/netflix/2.png',
      },
      {
        original: '/portfolio/netflix/3.png',
        thumbnail: '/portfolio/netflix/3.png',
      },
    ],
  },
];

export const Portfolio = () => {
  return (
    <div className="flex flex-col items-center w-3/5 m-auto gap-16">
      <SectionTitle title={'PORTFOLIO'} description={'My Works: Creativity and Code in Action'}>
        <div className="animate-bounce text-2xl">🧩</div>
      </SectionTitle>
      <div className="flex flex-col items-center  m-auto gap-24">
        {projects.map((el, index) => (
          <PortfolioElement
            key={el.title}
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
