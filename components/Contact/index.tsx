import { contentContactInterface } from '@/types';
import { CornerBordersDiv } from '../CornerBordersDiv';
import { SectionTitle } from '../SectionTitle';
import Link from 'next/link';

interface ContactProps {
  section: string;
  content: contentContactInterface;
}

export const Contact = ({ section, content }: ContactProps) => {
  return (
    <div id="contactSection" className="flex flex-col items-center  m-auto gap-4 lg:gap-8 mb-14">
      <SectionTitle title={section} description={content.title}></SectionTitle>
      <CornerBordersDiv>
        <ul className="grid text-xl gap-4 ">
          <li className="grid grid-cols-3 gap-5 items-center">
            <div className="font-bold">Telegram:</div>

            <Link
              target="_blank"
              className="font-mono text-center col-span-2 p-2 shadow-md rounded-lg bg-white border-zinc-200 border-[1px] hover:bg-zinc-50"
              href="https://t.me/ivanquartz">
              @ivanquartz
            </Link>
          </li>
          <li className="grid grid-cols-3  gap-5 items-center">
            <div className=" font-bold">Email:</div>
            <div className="font-mono text-center col-span-2 p-2 shadow-md rounded-lg bg-white border-zinc-200 border-[1px]">
              i.sgadov@yandex.ru
            </div>
          </li>
        </ul>
      </CornerBordersDiv>
    </div>
  );
};
