import React from 'react';
import { NextPageContext } from 'next';
import Bio from '@/components/Bio';
import Navbar from '@/components/Navbar';
import { content } from '@/libs/localisedContent';
import { contentInterface, localisedContentInterface } from '@/types';
import { PortfolioElement } from '@/components/Portfolio/PortfolioElement';
import { Portfolio } from '@/components/Portfolio';
import { About } from '@/components/About';
import Head from 'next/head';
import { Contact } from '@/components/Contact';
import { RevealOnScrol } from '@/components/RevealOnScrol';
export function getServerSideProps(context: NextPageContext) {
  let locale: keyof localisedContentInterface =
    (context.locale as keyof localisedContentInterface) || 'en';
  if (!content.hasOwnProperty(locale)) {
    locale = Object.keys(content)[0] as keyof localisedContentInterface;
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
      <Head>
        <title>Sgadov | Fullstack Developer</title>
        <meta
          name="description"
          content="Привет! Меня зовут Иван Сгадов, я ответственный и трудолюбивый fullstack-разработчик."
        />
        <meta name="author" content="Иван Сгадов" />
      </Head>
      <div className="h-full w-full items-center ">
        <Navbar content={content.navbar} />
        <Bio content={content.bio} />
        <div className="p-2 sm:p-8  lg:w-[950px] xl:w-[1100px] m-auto">
          <RevealOnScrol>
            <About section={content.navbar.about} content={content.about} />
          </RevealOnScrol>

          <RevealOnScrol>
            <Portfolio
              section={content.navbar.projects}
              content={content.portfolio}
              projects={content.projects}
            />
          </RevealOnScrol>
          <RevealOnScrol>
            <Contact section={content.navbar.contact} content={content.contact} />
          </RevealOnScrol>
        </div>
      </div>
    </>
  );
};

export default Home;
