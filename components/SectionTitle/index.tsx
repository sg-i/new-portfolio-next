import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  description: string;
  children?: ReactNode;
}
export const SectionTitle: React.FC<SectionTitleProps> = ({ title, description, children }) => {
  return (
    <div className="w-full">
      <div className="font-bold text-sm md:text-base uppercase text-blue-500">{title}</div>
      <div className="font-bold text-lg md:text-2xl flex gap-2 items-center">
        <div>{description}</div>
        {children && <div>{children}</div>}
      </div>
    </div>
  );
};
