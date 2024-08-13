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
            title: "Fullstack Developer",
            description: "Hi! My name is Ivan Sgadov, I am a responsible and hardworking web application developer.",
            techStack: "Tech Stack"
        },
        about:{
            title: "Here is some information about me",
            quote: '"Simplicity is the soul of efficiency." – Austin Freeman',
            description: "I am a highly responsible fullstack developer with a strong passion for creating both intuitive user interfaces and reliable backend solutions. My attention to detail and commitment to quality ensure that every project meets and exceeds expectations. I excel at teamwork and am always eager to learn and improve my skills.",
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
        contact:{
          title: "Time to get acquainted"
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
              title: '3D React - Digital Gallery',
              description:
                "This website is developed using React and Three.js, featuring a gallery of digital artists' works. In the gallery, you can explore 3D models of artworks and learn about their history. The application provides an interactive and immersive experience in the world of digital art.",
                stack: ['React', 'Three.js' , 'SCSS'],
              codeLink: 'https://github.com/sg-i/3d-react',
              demoLink: 'https://3d-react-lyart.vercel.app/',
              images: [
                {
                  original: '/portfolio/3d-react/1.png',
                  thumbnail: '/portfolio/3d-react/1.png',
                },
                {
                  original: '/portfolio/3d-react/2.png',
                  thumbnail: '/portfolio/3d-react/2.png',
                },
                {
                  original: '/portfolio/3d-react/3.png',
                  thumbnail: '/portfolio/3d-react/3.png',
                },
                {
                  original: '/portfolio/3d-react/4.png',
                  thumbnail: '/portfolio/3d-react/4.png',
                },
              ],
            },
            {
              title: 'Spotify Layout - Music Player',
              description:
                'This project is a clone of the music streaming service Spotify, created for practicing layout and interface development. The application is built using Vue and Pinia for state management. A music player for playback has been implemented.',
              stack: ['Vue', 'Pinia', 'Tailwind','TypeScript' ],
              codeLink: 'https://github.com/sg-i/spotify-vue',
              demoLink: 'https://spotify-vue-one.vercel.app/',
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
            }
            
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
            title: "Fullstack Developer",
            description: "Привет! Меня зовут Иван Сгадов, я ответственный и трудолюбивый разработчик web приложений.",
            techStack: "Техн. Стек"
        },
        about:{
            title: "Немного информации о себе",
            quote: '«Простота — душа эффективности». – Остин Фриман',
            description: "Я высокоответственный fullstack-разработчик с сильной страстью к созданию как интуитивно понятных пользовательских интерфейсов, так и надежных серверных решений. Мое внимание к деталям и стремление к качеству гарантируют, что каждый проект соответствует и превышает ожидания. Я отлично работаю в команде и всегда стремлюсь учиться и развивать свои навыки.",
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
        contact:{
          title: "Время познакомиться"
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
              title: '3D React - Digital Галерея',
              description:
                'Данный сайт разработан на React с использованием Three.js, представляет собой галерею работ цифровых художников. В галерее можно осматривать 3D модели произведений искусства и знакомиться с их историей. Приложение обеспечивает интерактивное и захватывающее погружение в мир цифрового искусства.',
              stack: ['React','Three.js' , 'SCSS'],
              codeLink: 'https://github.com/sg-i/3d-react',
              demoLink: 'https://3d-react-lyart.vercel.app/',
              images: [
                {
                  original: '/portfolio/3d-react/1.png',
                  thumbnail: '/portfolio/3d-react/1.png',
                },
                {
                  original: '/portfolio/3d-react/2.png',
                  thumbnail: '/portfolio/3d-react/2.png',
                },
                {
                  original: '/portfolio/3d-react/3.png',
                  thumbnail: '/portfolio/3d-react/3.png',
                },
                {
                  original: '/portfolio/3d-react/4.png',
                  thumbnail: '/portfolio/3d-react/4.png',
                }
              ],
            },
            {
              title: 'Вёрстка Spotify - Музыкальный Плеер',
              description:
                'Этот проект представляет собой клон музыкального стримингового сервиса Spotify, созданный для практики вёрстки и разработки интерфейсов. Приложение написано с использованием Vue и Pinia для управления состоянием. Также реализован плеер для воспроизведения музыки.',
              stack: ['Vue', 'Pinia', 'TypeScript' ],
              codeLink: 'https://github.com/sg-i/spotify-vue',
              demoLink: 'https://spotify-vue-one.vercel.app/',
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
            }
          ]
    },

}
