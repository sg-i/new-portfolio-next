import { contentInterface, contentNavbarInterface, localisedContentInterface } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { ElementNavbar } from './ElementNavbar';
// import ProgressBar from 'react-scroll-progress-bar';
interface NavbarProps {
  content: contentNavbarInterface;
}
export default function Navbar({ content }: NavbarProps) {
  const router = useRouter();
  const locale = router.locale || 'ru';
  const [language, setLanguage] = useState(locale);
  const [activeId, setActiveId] = useState('bioSection');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = 'auto';
    } else {
      setIsMobileMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

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
    const sections = ['bioSection', 'aboutSection', 'portfolioSection', 'contactSection']; // Ваши секции
    const scrollPosition = window.scrollY || window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / docHeight) * 100;
    setScrollWidth(scrollPercentage);
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
  const clickIntoMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
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
    <>
      <div
        className={` w-full z-10 ${
          scrollWidth && 'shadow-md '
        } bg-white fixed flex justify-between transition-shadow duration-300 items-center sm:px-10 h-14 p-4 sm:py-5 font-semibold `}>
        <div
          className={`${
            !isMobileMenuOpen && 'hidden'
          } fixed sm:hidden -z-10 top-0 left-0 bg-white flex flex-col h-full w-full`}>
          <ul className="w-fit m-auto text-center flex flex-col gap-2 text-4xl">
            <ElementNavbar
              clickIntoMobileMenu={clickIntoMobileMenu}
              idSection="bioSection"
              text={content.home}
              isActive={activeId === 'bioSection'}
            />
            <ElementNavbar
              clickIntoMobileMenu={clickIntoMobileMenu}
              idSection="aboutSection"
              text={content.about}
              isActive={activeId === 'aboutSection'}
            />
            <ElementNavbar
              clickIntoMobileMenu={clickIntoMobileMenu}
              idSection="portfolioSection"
              text={content.projects}
              isActive={activeId === 'portfolioSection'}
            />
            <ElementNavbar
              clickIntoMobileMenu={clickIntoMobileMenu}
              idSection="contactSection"
              text={content.contact}
              isActive={activeId === 'contactSection'}
            />
          </ul>
          <div className="flex items-center gap-2 text-xl justify-center mb-5">
            <Link
              onClick={clickIntoMobileMenu}
              className={` border-b-2 transition border-transparent ${
                locale == 'ru' ? 'font-bold' : 'text-gray-400 hover:text-gray-600'
              }`}
              href={router.asPath}
              locale="ru">
              RU
            </Link>
            <Link
              onClick={clickIntoMobileMenu}
              className={` border-b-2 transition border-transparent ${
                locale == 'en' ? 'font-bold' : 'text-gray-400 hover:text-gray-600'
              }`}
              href={router.asPath}
              locale="en">
              EN
            </Link>
          </div>
        </div>
        <div className="w-[100px]">Sgadov.tech</div>
        <ul className="hidden sm:flex gap-3 ">
          <ElementNavbar
            clickIntoMobileMenu={clickIntoMobileMenu}
            idSection="bioSection"
            text={content.home}
            isActive={activeId === 'bioSection'}
          />
          <ElementNavbar
            clickIntoMobileMenu={clickIntoMobileMenu}
            idSection="aboutSection"
            text={content.about}
            isActive={activeId === 'aboutSection'}
          />
          <ElementNavbar
            clickIntoMobileMenu={clickIntoMobileMenu}
            idSection="portfolioSection"
            text={content.projects}
            isActive={activeId === 'portfolioSection'}
          />
          <ElementNavbar
            clickIntoMobileMenu={clickIntoMobileMenu}
            idSection="contactSection"
            text={content.contact}
            isActive={activeId === 'contactSection'}
          />
          {/* <ElementNavbar text={content.contact} /> */}
        </ul>
        <div className="w-[100px] flex gap-1 justify-end items-center text-center">
          <div onClick={toggleMobileMenu} className=" w-9 top-0 h-full sm:hidden ">
            <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Menu">
                  <rect id="Rectangle" fillRule="nonzero" x="0" y="0" width="24" height="24"></rect>
                  <line
                    x1="5"
                    y1="7"
                    x2="19"
                    y2="7"
                    id="Path"
                    stroke="#0C0310"
                    strokeWidth="2"
                    strokeLinecap="round"></line>
                  <line
                    x1="5"
                    y1="17"
                    x2="19"
                    y2="17"
                    id="Path"
                    stroke="#0C0310"
                    strokeWidth="2"
                    strokeLinecap="round"></line>
                  <line
                    x1="5"
                    y1="12"
                    x2="19"
                    y2="12"
                    id="Path"
                    stroke="#0C0310"
                    strokeWidth="2"
                    strokeLinecap="round"></line>
                </g>
              </g>
            </svg>
          </div>
          <Link
            className={` hidden sm:block border-b-2 transition border-transparent ${
              locale == 'ru' ? 'font-bold' : 'text-gray-400 hover:text-gray-600'
            }`}
            href={router.asPath}
            locale="ru">
            RU
          </Link>
          <Link
            className={` hidden sm:block border-b-2 transition border-transparent ${
              locale == 'en' ? 'font-bold' : 'text-gray-400 hover:text-gray-600'
            }`}
            href={router.asPath}
            locale="en">
            EN
          </Link>
        </div>
      </div>
      <div
        className={`${
          isMobileMenuOpen && 'hidden'
        } h-1 z-10 bg-blue-500 fixed top-14 transition-width duration-200 `}
        style={{ width: `${scrollWidth}%` }}></div>
    </>
  );
}
