import { contentContactInterface } from '@/types';
import { CornerBordersDiv } from '../CornerBordersDiv';
import { SectionTitle } from '../SectionTitle';

interface ContactProps {
  section: string;
  content: contentContactInterface;
}

export const Contact = ({ section, content }: ContactProps) => {
  return (
    <div id="contactSection" className="flex flex-col items-center  m-auto gap-4 lg:gap-16 mb-14">
      <SectionTitle title={section} description={content.title}></SectionTitle>
      {/* <CornerBordersDiv> */}
      <ul className="grid text-xl gap-4">
        <li className="grid grid-cols-3 gap-5">
          <div className="font-bold">Telegram:</div>
          <div className=" col-span-2">
            <a href="https://t.me/ivanquartz" target="_blank" rel="noopener noreferrer">
              @ivanquartz
            </a>
          </div>
        </li>
        <li className="grid grid-cols-3  gap-5">
          <div className=" font-bold">Email:</div>
          <div className=" col-span-2">i.sgadov@yandex.ru</div>
        </li>
      </ul>
      {/* </CornerBordersDiv>
       */}
    </div>
  );
};
