import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET'){
        return res.status(405).end();
    }
    const acceptLanguage:any = req.headers['accept-language'];
    // Разбиваем заголовок на массив строк языков
    const languages = acceptLanguage.split(',');

    // Извлекаем первый язык из списка (самый предпочтительный)
    const preferredLanguage = languages[0].split(';')[0];
    try {
        return res.status(200).json('data["ru-RU"]');
        
    } catch (error) {
        console.log(error);
        return res.status(400).end();
    }
}