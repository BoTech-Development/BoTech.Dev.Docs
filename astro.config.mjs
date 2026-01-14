// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy'
import starlightSiteGraph from 'starlight-site-graph'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeGalaxy(), starlightSiteGraph()],
			title: 'My Docs',
			logo: {

				src: './src/assets/BoTech-Logo-Complete.svg',
				replacesTitle: true,

			},
			editLink: {
				baseUrl: 'https://github.com/BoTech-Development/BoTech.Dev.Docs/edit/main/src/content/docs/'
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/BoTech-Development/' }],
		}),
	],
});
