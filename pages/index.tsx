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
  console.log(locale);
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
  console.log(content);
  return (
    <>
      <Navbar content={content.navbar} />
      <Bio />
    </>
  );
};

export default Home;
