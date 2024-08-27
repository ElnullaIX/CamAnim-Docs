// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Camera Animation Hppe Docs',
  tagline: 'System for Camera Animation Hppe in Unity and in VRChat',
  favicon: 'img/CALogo.ico',

  // Set the production url of your site here
  url: 'https://hppedeaf.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Camera-Animation-Hppe-Docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hppedeaf', // Usually your GitHub org/user name.
  projectName: 'Camera-Animation-Hppe-Docs', // Usually your repo name.
  trailingSlash: false, // Explicitly set trailingSlash for better SEO
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/hppedeaf/Camera-Animation-Hppe-Docs/tree/main/',
        },
        blog: {
          blogTitle: 'Updates',
          blogDescription: 'Updates Description',
          postsPerPage: 'ALL',
          showReadingTime: false,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            frontMatter.hide_reading_time ? undefined : defaultReadingTime({ content }),
          path: 'updates',
          routeBasePath: 'updates',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      image: 'img/CA_Banner.png',
      navbar: {
        title: 'Camera Animation Hppe Docs',
        hideOnScroll: true,
        logo: {
          alt: 'CAHppe Logo',
          src: 'img/CALogo.png',
        },
        items: [
          {
            type: 'search',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'CAHppe Intro',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'CAHppe Intro',
                to: '/docs/Installations/Standard',
              },
              {
                label: 'Installation',
                to: '/docs/Installations/Standard',
              },
              {
                label: 'How to use',
                to: '/docs/How-To-Use/Standard',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/KFPUU3pEKg',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/hppedeaf',
              },
              {
                label: 'Gumroad',
                href: 'https://hppedeaf.gumroad.com/l/CameraAnimationHppe',
              },
              {
                label: 'Give feedback',
                href: 'https://camera-animation.canny.io',
              },
            ],
          },
          {
            title: 'Logs',
            items: [
              {
                label: 'Updates',
                to: '/updates',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} hppedeaf, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
