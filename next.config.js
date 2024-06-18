/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://agents-production-function-app.azurewebsites.net/api/:path*", // 代理到你的 API 服务器
      },
    ];
  },
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, "./src")],
    additionalData: "@import '@/assets/css/mixin.scss';",
  },
};

module.exports = nextConfig;
