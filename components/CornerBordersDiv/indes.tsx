import { ReactNode } from 'react';

interface CornerBordersDivInterface {
  children: ReactNode;
}
export const CornerBordersDiv: React.FC<CornerBordersDivInterface> = ({ children }) => {
  return (
    <div className="relative mt-8 w-fit m-auto py-4 px-8">
      {children}
      <span className="corner-border corner-border-top-left"></span>
      <span className="corner-border corner-border-top-right"></span>
      <span className="corner-border corner-border-bottom-left"></span>
      <span className="corner-border corner-border-bottom-right"></span>
    </div>
  );
};
