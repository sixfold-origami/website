const isDev = process.env.NODE_ENV !== 'production';
const rootUrl = isDev ? 'http://localhost:3000' : 'https://sixfold-origami.com';

module.exports = {
	siteUrl: rootUrl,
	generateRobotsTxt: true,
	changefreq: 'monthly',
};
