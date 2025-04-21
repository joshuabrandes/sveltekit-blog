import { error, redirect } from '@sveltejs/kit'

export const load = async () => {
	// Redirect to /blog when the root path is accessed
	redirect(302, '/blog');

	// The code below will not be executed due to the redirect
	try {
		const ReadMeFile = await import('../../README.md')
		const ReadMe = ReadMeFile.default

		return {
			ReadMe
		}
	}
	catch(err) {
		error(500, err);
	}
}
