import { fileURLToPath } from 'node:url';
/** @type {import('next').NextConfig} */
const nextConfig = {
 basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
 output: 'export', trailingSlash: true, reactStrictMode: true,
 images: { unoptimized: true },
 outputFileTracingRoot: fileURLToPath(new URL('.', import.meta.url)),
};
export default nextConfig;
