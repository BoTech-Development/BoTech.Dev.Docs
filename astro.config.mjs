// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy'
import starlightGiscus from "starlight-giscus";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeGalaxy(), starlightGiscus({
				repo: 'BoTech-Development/BoTech.Dev.Docs-Discussions',
				repoId: 'R_kgDOSIcKfw',
				category: 'Q&A',
				categoryId: 'DIC_kwDOSIcKf84C7VwQ'
			})],
			title: 'docs.botech.dev',
			editLink: {
				baseUrl: 'https://github.com/BoTech-Development/BoTech.Dev.Docs/edit/master/'
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/BoTech-Development/'
				},
				{
					icon: 'email',
					label: 'Email',
					href: "mailto:support@botech.dev"
				}],
			components: {
				SiteTitle: './src/components/overrides/CustomHeader.astro',
			},
			customCss: ['./src/styles/logo.css'],
		}),
	],
});
