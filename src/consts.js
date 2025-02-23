export const IS_DEV = process.env.NODE_ENV !== 'production';
export const ROOT_URL = IS_DEV
	? 'http://localhost:3000'
	: 'https://sixfold-origami.com';

export const TITLE = 'sixfold scribblings';
export const DESCRIPTION =
	'Rose "sixfold" Peck\'s weird little corner of the internet';
