import { NextApiRequest, NextApiResponse } from "next";

const data = {
    en: {
        navbar:{
            home: "Home",
            about: "About",
            projects: "Projects",
            contact: "Contact",
        }
    },
    "ru-RU": {
        navbar:{
            home: "Главная",
            about: "Обо мне",
            projects: "Проекты",
            contact: "Контакты",
        }
    },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET'){
        return res.status(405).end();
    }
    const acceptLanguage:any = req.headers['accept-language'];
    // Разбиваем заголовок на массив строк языков
    const languages = acceptLanguage.split(',');

    // Извлекаем первый язык из списка (самый предпочтительный)
    const preferredLanguage = languages[0].split(';')[0];
    console.log('preferredLanguage')
    try {
        console.log('re',preferredLanguage)
        return res.status(200).json('data["ru-RU"]');
        
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}