import React from 'react';
import { NextPageContext } from 'next';
import Bio from '@/components/Bio';
import Navbar from '@/components/Navbar';
import { content } from '@/libs/localisedContent';
import { contentInterface, localisedContentInterface } from '@/types';

export function getServerSideProps(context: NextPageContext) {
  let locale = context.locale || 'en';
  if (!content.hasOwnProperty(locale)) {
    locale = Object.keys(content)[0];
  }
  return {
    props: {
      content: content[locale] || content.en,
    },
  };
}

interface HomeProps {
  content: contentInterface;
}

const Home = ({ content }: HomeProps): any => {
  return (
    <>
      <div className="h-full w-full">
        <Navbar content={content.navbar} />
        <Bio />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam voluptatibus, sunt velit
          mollitia est nostrum esse omnis in minima, fugiat nam fuga dolorum adipisci? Officiis
          laborum quo mollitia nihil natus.
        </div>
      </div>
    </>
  );
};

export default Home;
