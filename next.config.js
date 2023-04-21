const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["tailwindcss"]);

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPlugins([withTM], nextConfig);
