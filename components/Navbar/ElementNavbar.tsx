import React from 'react';

interface ElementNavbarProps {
  text: string;
  idSection: string;
  isActive: boolean;
  clickIntoMobileMenu: () => void;
}

export const ElementNavbar = ({
  clickIntoMobileMenu,
  isActive,
  idSection,
  text,
}: ElementNavbarProps) => {
  const scrollToSection = () => {
    const section = document.getElementById(idSection);
    if (section) {
      const rect = section.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset; // Получаем текущее положение скролла
      window.scrollTo({
        top: rect.top + scrollTop - 56, // Корректируем на 20 пикселей
        behavior: 'smooth',
      });
      clickIntoMobileMenu();
    }
  };

  return (
    <li
      className={`cursor-pointer border-b-2  transition  ${
        isActive ? 'border-blue-500' : ' border-transparent hover:border-zinc-200'
      }`}
      onClick={scrollToSection}>
      {text}
    </li>
  );
};
