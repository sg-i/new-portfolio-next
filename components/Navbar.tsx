import { contentInterface, contentNavbarInterface, localisedContentInterface } from '@/types';
import Link from 'next/link';
interface NavbarProps {
  content: contentNavbarInterface;
}
export default function Navbar({ content }: NavbarProps) {
  return (
    <div className=" h-14 w-full z-10 bg-white fixed flex justify-between  items-center px-10 py-5 font-semibold">
      <div className="w-[100px]">Sgadov.dev</div>
      <ul className="flex gap-3 ">
        <li>{content.home}</li>
        <li>{content.about}</li>
        <li>{content.projects}</li>
        <li>{content.contact}</li>
      </ul>
      <div className="w-[100px] flex gap-1 justify-end text-center">
        <Link href="/ru" locale="ru">
          RU
        </Link>
        <Link href="/en" locale="en">
          EN
        </Link>
      </div>
    </div>
  );
}
