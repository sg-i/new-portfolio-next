import React, { ReactNode } from 'react';

interface TechStackElementProps {
  size: number;
  src: string;
  text: string;
  children?: ReactNode;
}

export const TechStackElement: React.FC<TechStackElementProps> = ({
  size,
  src,
  text,
  children,
}: TechStackElementProps) => {
  return (
    <li className="flex h-full flex-col justify-between items-center ">
      <div className="flex  h-full">
        {children ? children : <img width={size} height={size} src={src} alt={text + ' icon'} />}
      </div>
      <div>{text}</div>
    </li>
  );
};
