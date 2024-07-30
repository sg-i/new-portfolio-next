/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // Локали, поддерживаемые приложением
    locales: ['en', 'ru'],
    // Дефолтная локаль, которая будет использоваться
    // при посещении пользователем пути без префикса,
    // например, `/hello`
    defaultLocale: 'ru',
  },
};

module.exports = nextConfig;
