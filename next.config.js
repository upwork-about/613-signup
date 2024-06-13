/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, "./src")],
    additionalData: "@import '@/assets/css/mixin.scss';",
  },
};

module.exports = nextConfig;
