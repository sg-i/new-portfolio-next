import { localisedContentInterface } from "@/types"
export const content: localisedContentInterface = {
    en: {
        navbar:{
            home: "Home",
            about: "About",
            projects: "Projects",
            contact: "Contact",
        },
        bio:{
            title: "Frontend React Developer",
            description: "Hello! I'm Ivan Sgadov, a responsible and hardworking frontend developer.",
            techStack: "Tech Stack"
        },
        about:{
            title: "Here is some information about me",
            quote: '"Simplicity is the soul of efficiency." – Austin Freeman',
            description: " I am a highly responsible frontend developer with a strong passion for creating intuitive and dynamic user interfaces. My attention to detail and commitment to delivering high-quality work ensure that every project meets and exceeds expectations. I thrive in collaborative environments and am always eager to learn and grow my skills.",
            education:{
                title: "Higher Education",
                description: "Bachelor's degree in Computer Science"
            },
            location:{
                title: "Location",
                description: "Saint-Petersburg, Russia"
            },
            languages:{
                title: "Languages",
                description: "Russian (Native) | English (B2)"
            }
        },
        portfolio:{
            description: "My Works: Creativity and Code in Action",
            codeButton:'Code',
            liveDemoButton: 'Live Demo'
        },
        projects:[
            {
              title: 'Netflix Clone - Online Сinema',
              description:
                'A Full Stack app developed using React, Next.js, Tailwind, and SCSS, with MongoDB for data storage. The main features include online movie streaming, easy navigation, and content search. Authorized users can add movies to their favorites.',
                stack: ['React', 'Next', 'Tailwind','SCSS', 'Typescript','MongoDB'],
              codeLink: 'https://github.com/sg-i/netflix-next',
              demoLink: 'https://netflix-next-sg-i.vercel.app/',
              images: [
                {
                  original: '/portfolio/netflix/1.png',
                  thumbnail: '/portfolio/netflix/1.png',
                },
                {
                  original: '/portfolio/netflix/2.png',
                  thumbnail: '/portfolio/netflix/2.png',
                },
                {
                  original: '/portfolio/netflix/3.png',
                  thumbnail: '/portfolio/netflix/3.png',
                },
              ],
            },
            {
              title: 'Spotify Layout - Music Player',
              description:
                'This project is a clone of the music streaming service Spotify, created for practicing layout and interface development. The application is built using Vue and Pinia for state management. A music player for playback has been implemented.',
              stack: ['Vue', 'Pinia', 'Tailwind','TypeScript' ],
              codeLink: 'https://github.com/sg-i',
              demoLink: 'https://github.com/sg-i',
              images: [
                {
                  original: '/portfolio/spotify/1.png',
                  thumbnail: '/portfolio/spotify/1.png',
                },
                {
                  original: '/portfolio/spotify/2.png',
                  thumbnail: '/portfolio/spotify/2.png',
                },
                {
                  original: '/portfolio/spotify/3.png',
                  thumbnail: '/portfolio/spotify/3.png',
                },
                {
                  original: '/portfolio/spotify/4.png',
                  thumbnail: '/portfolio/spotify/4.png',
                },
              ],
            },
            {
              title: '2Netflix Clone - Online Сinema 🎬',
              description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda sint dolorum molestias reprehenderit perferendis unde illo consequuntur et amet! Fugit, laboriosam earum! Vel quam dolores voluptate tempora pariatur, sit maxime.',
              stack: ['React', 'Next', 'SCSS'],
              codeLink: 'https://github.com/sg-i',
              demoLink: 'https://github.com/sg-i',
              images: [
                {
                  original: '/portfolio/netflix/1.png',
                  thumbnail: '/portfolio/netflix/1.png',
                },
                {
                  original: '/portfolio/netflix/2.png',
                  thumbnail: '/portfolio/netflix/2.png',
                },
                {
                  original: '/portfolio/netflix/3.png',
                  thumbnail: '/portfolio/netflix/3.png',
                },
              ],
            },
          ]
    },
    ru: {
        navbar:{
            home: "Главная",
            about: "Обо мне",
            projects: "Проекты",
            contact: "Контакты",
        },
        bio:{
            title: "Frontend React Developer",
            description: "Привет! Меня зовут Иван Сгадов, я ответственный и трудолюбивый frontend-разработчик.",
            techStack: "Техн. Стек"
        },
        about:{
            title: "Немного информации о себе",
            quote: '«Простота — душа эффективности». – Остин Фриман',
            description: "Я высокоответственный frontend-разработчик с сильной страстью к созданию интуитивно понятных и динамичных пользовательских интерфейсов. Мое внимание к деталям и стремление к качеству гарантируют, что каждый проект соответствует и превышает ожидания. Я прекрасно работаю в команде и всегда стремлюсь учиться и развивать свои навыки.",
            education:{
                title: "Высшее образование",
                description: "Степень бакалавра (Прикладная информатика)"
            },
            location:{
                title: "Расположение",
                description: "Санкт-Петербург, Россия"
            },
            languages:{
                title: "Языки",
                description: "Русский (Родной) | Английский (B2)"
            }
        },
        portfolio:{
            description: "Мои Работы: Творчество и Код в Действии",
            codeButton: 'Код',
            liveDemoButton: 'Демо'
        },
        projects:[
            {
              title: 'Клон Netflix - Онлайн Кинотеатр',
              description:
                'Full Stack приложение разработанное с использованием React, Next.js, Tailwind и SCSS, а также MongoDB для хранения данных. Основные функции включают просмотр фильмов онлайн, удобную навигацию и поиск контента. Авторизованные пользователи могут добавлять фильмы в избранное.',
              stack: ['React', 'Next', 'Tailwind','SCSS', 'TypeScript','MongoDB'],
              codeLink: 'https://github.com/sg-i/netflix-next',
              demoLink: 'https://netflix-next-sg-i.vercel.app/',
              images: [
                {
                  original: '/portfolio/netflix/1.png',
                  thumbnail: '/portfolio/netflix/1.png',
                },
                {
                  original: '/portfolio/netflix/2.png',
                  thumbnail: '/portfolio/netflix/2.png',
                },
                {
                  original: '/portfolio/netflix/3.png',
                  thumbnail: '/portfolio/netflix/3.png',
                },
              ],
            },
            {
              title: 'Вёрстка Spotify - Музыкальный Плеер',
              description:
                'Этот проект представляет собой клон музыкального стримингового сервиса Spotify, созданный для практики вёрстки и разработки интерфейсов. Приложение написано с использованием Vue и Pinia для управления состоянием. Также реализован плеер для воспроизведения музыки.',
              stack: ['Vue', 'Pinia', 'TypeScript' ],
              codeLink: 'https://github.com/sg-i',
              demoLink: 'https://github.com/sg-i/spotify-vue',
              images: [
                {
                  original: '/portfolio/spotify/1.png',
                  thumbnail: '/portfolio/spotify/1.png',
                },
                {
                  original: '/portfolio/spotify/2.png',
                  thumbnail: '/portfolio/spotify/2.png',
                },
                {
                  original: '/portfolio/spotify/3.png',
                  thumbnail: '/portfolio/spotify/3.png',
                },
                {
                  original: '/portfolio/spotify/4.png',
                  thumbnail: '/portfolio/spotify/4.png',
                },
              ],
            },
            {
              title: '2Netflix Clone - Online Сinema 🎬',
              description:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda sint dolorum molestias reprehenderit perferendis unde illo consequuntur et amet! Fugit, laboriosam earum! Vel quam dolores voluptate tempora pariatur, sit maxime.',
              stack: ['React', 'Next', 'SCSS'],
              codeLink: 'https://github.com/sg-i',
              demoLink: 'https://github.com/sg-i',
              images: [
                {
                  original: '/portfolio/netflix/1.png',
                  thumbnail: '/portfolio/netflix/1.png',
                },
                {
                  original: '/portfolio/netflix/2.png',
                  thumbnail: '/portfolio/netflix/2.png',
                },
                {
                  original: '/portfolio/netflix/3.png',
                  thumbnail: '/portfolio/netflix/3.png',
                },
              ],
            },
          ]
    },

}
