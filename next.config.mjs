/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // デプロイ時の型エラーでビルドを落とさない設定
    ignoreBuildErrors: true,
  },
  eslint: {
    // デプロイ時のESLintエラーを無視する設定
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
