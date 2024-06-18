import withTM from 'next-transpile-modules';

const withTranspileModules = withTM(['@ant-design/icons']); // Add other modules if needed

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withTranspileModules(nextConfig);
