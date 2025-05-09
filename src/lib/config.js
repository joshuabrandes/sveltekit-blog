/**
 * All of these values are used throughout the site – for example,
 * in the <meta> tags, in the footer, and in the RSS feed.
 *
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/

export const siteTitle = 'Joshua\'s Blog';
export const siteDescription = 'Joshuas Blog – music, code and more';
export const siteURL = 'blog.joshuabrandes.net';
export const siteLink = 'https://blog.joshuabrandes.net';
export const siteAuthor = 'Joshua Brandes';

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10;

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Blog',
		route: '/blog'
	},
	{
		title: 'Categories',
		route: '/blog/category'
	},
	{
		title: 'About',
		route: '/about'
	}
];
