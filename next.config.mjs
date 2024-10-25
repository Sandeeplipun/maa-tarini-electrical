/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				hostname: "www.bajajelectricals.com",
				protocol: "https",
				port: "",
			},
			{
				hostname: "www.crompton.co.in",
				protocol: "https",
				port: "",
			},
			{
				hostname: "in.shop.lighting.philips.com",
				protocol: "https",
				port: "",
			},
			{
				hostname: "d32zxht0g2dn3w.cloudfront.net",
				protocol: "https",
				port: "",
			},
			{
				hostname: "havells.com",
				protocol: "https",
				port: "",
			},
			{
				hostname: "www.panasonic.com",
				protocol: "https",
				port: "",
			},
		],
	},
};

export default nextConfig;
