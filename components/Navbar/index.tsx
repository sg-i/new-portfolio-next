import { contentInterface, contentNavbarInterface, localisedContentInterface } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { ElementNavbar } from './ElementNavbar';
interface NavbarProps {
  content: contentNavbarInterface;
}
export default function Navbar({ content }: NavbarProps) {
  const router = useRouter();
  const locale = router.locale || 'ru';
  const [language, setLanguage] = useState(locale);
  const [activeId, setActiveId] = useState('bioSection');

  useEffect(() => {
    // Сохраняем текущее положение прокрутки
    const saveScrollPosition = () => {
      sessionStorage.setItem(
        'scrollPosition',
        JSON.stringify({ x: window.scrollX, y: window.scrollY }),
      );
    };

    // Восстанавливаем положение прокрутки после навигации
    const restoreScrollPosition = () => {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      if (savedPosition) {
        const { x, y } = JSON.parse(savedPosition);
        window.scrollTo(x, y);
      }
    };

    router.events.on('routeChangeStart', saveScrollPosition);
    router.events.on('routeChangeComplete', restoreScrollPosition);

    // Убираем подписки при размонтировании компонента
    return () => {
      router.events.off('routeChangeStart', saveScrollPosition);
      router.events.off('routeChangeComplete', restoreScrollPosition);
    };
  }, [router]);

  // Функция для обновления активного элемента при скролле
  const handleScroll = useCallback(() => {
    const sections = ['bioSection', 'aboutSection', 'portfolioSection']; // Ваши секции
    const scrollPosition = window.scrollY || window.pageYOffset;
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop - 57 && scrollPosition < sectionTop + sectionHeight) {
          setActiveId(sectionId); // Устанавливаем активный id
        }
      }
    });
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    console.log(activeId);
  }, [activeId]);

  return (
    <div className=" h-14 w-full z-10 bg-white fixed flex justify-between  items-center sm:px-10 p-4 sm:py-5 font-semibold ">
      <div className="w-[100px]">Sgadov.dev</div>
      <ul className="flex gap-3 ">
        <ElementNavbar
          setActiveId={setActiveId}
          idSection="bioSection"
          text={content.home}
          isActive={activeId === 'bioSection'}
        />
        <ElementNavbar
          setActiveId={setActiveId}
          idSection="aboutSection"
          text={content.about}
          isActive={activeId === 'aboutSection'}
        />
        <ElementNavbar
          setActiveId={setActiveId}
          idSection="portfolioSection"
          text={content.projects}
          isActive={activeId === 'portfolioSection'}
        />
        {/* <ElementNavbar text={content.contact} /> */}
      </ul>
      <div className="w-[100px] flex gap-1 justify-end text-center">
        <Link
          className={`cursor-pointer border-b-2 transition border-transparent ${
            locale == 'ru' ? 'font-bold' : 'text-gray-400 hover:text-gray-600'
          }`}
          href={router.asPath}
          locale="ru">
          RU
        </Link>
        <Link
          className={`cursor-pointer border-b-2 transition border-transparent ${
            locale == 'en' ? 'font-bold' : 'text-gray-400 hover:text-gray-600'
          }`}
          href={router.asPath}
          locale="en">
          EN
        </Link>
      </div>
    </div>
  );
}
