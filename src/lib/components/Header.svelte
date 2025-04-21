<script>
	// Dein Script bleibt unverändert
	import { preventDefault } from 'svelte/legacy';
	import MainNav from './MainNav.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import { siteTitle } from '$lib/config';

	const focusMain = () => {
		const main = document.querySelector('main');
		if (main) {
			main.setAttribute('tabindex', '-1'); // Make it focusable
			main.focus();
		}
	};
</script>

<style>
    .site-header {
        display: grid; /* Use grid for overall layout */
        grid-template-columns: 1fr; /* A single column that spans the full width */
        align-items: center; /* Vertically center items in the grid row */
        justify-items: center; /* Horizontally center grid items (the centered-content) */
        width: 100%;
        position: relative; /* Needed for absolute positioning of the logo */
        /* Adjust horizontal padding (5rem) based on logo size and desired spacing */
        min-height: 4rem; /* Optional: ensure a minimum header height */
        box-sizing: border-box; /* Include padding in width calculation */
    }

    .site-logo {
        position: absolute; /* Remove logo from grid flow */
        left: 1rem; /* Position it on the left, adjust as needed */
        top: 50%; /* Center vertically */
        transform: translateY(-50%); /* Precise vertical centering */

        /* Size adapts to header height (determined by centered-content or min-height) */
        max-height: 70%; /* Use slightly less than 100% of header height for padding */
        height: auto; /* Maintain aspect ratio */
        width: auto; /* Maintain aspect ratio */
        object-fit: contain;
        /* flex-shrink is not needed for absolute positioning */
    }

    .centered-content {
        /* No grid-column needed, it's the only item in the grid flow */
        /* justify-self: center; is handled by justify-items on parent */
        align-items: center;
        /* Auto margins are no longer needed for centering */
        /* margin-left: auto; */
        /* margin-right: auto; */
    }
</style>

<header class="site-header">
	<a href="/">
		<img src="/favicon.png" alt="Site Logo" class="site-logo" />
	</a>

	<div class="centered-content">
		<a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
			Skip to main content
		</a>
		<a href="/" class="site-title">
			{siteTitle}
		</a>
		<HamburgerMenuButton />
		<MainNav />
	</div>
</header>
