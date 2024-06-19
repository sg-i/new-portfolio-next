import Image from 'next/image';
import { ReactNode } from 'react';
interface AboutElementInterface {
  children: ReactNode;
  title: string;
  description: string;
}
export const AboutElement: React.FC<AboutElementInterface> = ({ children, title, description }) => {
  return (
    <div className="flex gap-2 h-[52px]  items-center ">
      <div className="flex items-center justify-center w-[52px] h-[52px]">{children}</div>
      <div>
        <div className="text-md font-medium text-nowrap">{title}</div>
        <div className="text-gray-500 text-nowrap font-medium">{description}</div>
      </div>
    </div>
  );
};
