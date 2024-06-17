import React from 'react';
import { NextPageContext } from 'next';
import Bio from '@/components/Bio';
import Navbar from '@/components/Navbar';
import { content } from '@/libs/localisedContent';
import { contentInterface, localisedContentInterface } from '@/types';
import { PortfolioElement } from '@/components/Portfolio/PortfolioElement';
import { Portfolio } from '@/components/Portfolio';
import { About } from '@/components/About';

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
        <About />
        <Portfolio />
      </div>
    </>
  );
};

export default Home;
