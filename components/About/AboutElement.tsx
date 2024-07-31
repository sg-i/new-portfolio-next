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
      <div className="flex items-center justify-center min-w-[52px] min-h-[52px] w-[52px] h-[52px]">
        {children}
      </div>
      <div>
        <div className="text-base font-medium text-wrap md:text-nowrap">{title}</div>
        <div className="text-gray-500 text-wrap md:text-nowrap font-medium">{description}</div>
      </div>
    </div>
  );
};
