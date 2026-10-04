// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

const GUMROAD = 'https://elnullaix.gumroad.com/l/CameraAnimationElnullaIX';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CamAnim Docs',
  tagline: 'Smooth camera animations for your VRChat avatar',
  favicon: 'img/CALogo.ico',

  url: 'https://elnullaix.github.io',
  baseUrl: '/CamAnim-Docs/',
  organizationName: 'elnullaix',
  projectName: 'CamAnim-Docs',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onBrokenAnchors: 'throw',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: { sidebarPath: './sidebars.js' },
        blog: {
          path: 'updates',
          routeBasePath: 'updates',
          blogTitle: 'Updates',
          blogDescription: 'What changed in each CamAnim version',
          blogSidebarTitle: 'All updates',
          blogSidebarCount: 'ALL',
          postsPerPage: 'ALL',
          showReadingTime: false,
        },
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      { hashed: true, indexBlog: true, docsRouteBasePath: '/docs', blogRouteBasePath: '/updates', highlightSearchTermsOnTargetPage: true },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: { defaultMode: 'dark', disableSwitch: false, respectPrefersColorScheme: true },
      image: 'img/CamAnim_Card.png',
      navbar: {
        title: 'CamAnim Docs',
        hideOnScroll: true,
        logo: { alt: 'CamAnim logo', src: 'img/CALogo.png' },
        items: [
          { to: '/docs/intro', label: 'Get started', position: 'left' },
          { to: '/docs/desktop-app', label: 'Desktop app', position: 'left' },
          { to: '/updates', label: 'Updates', position: 'left' },
          { type: 'search', position: 'right' },
          { href: GUMROAD, label: 'Buy on Gumroad', position: 'right', className: 'navbar-buy' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Get started', to: '/docs/intro' },
              { label: 'Installation', to: '/docs/install/standard' },
              { label: 'Desktop app', to: '/docs/desktop-app' },
              { label: 'FAQ', to: '/docs/faq' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Discord', href: 'https://discord.gg/KFPUU3pEKg' },
              { label: 'X', href: 'https://x.com/ElnullaIX' },
              { label: 'Give feedback', href: 'https://camera-animation.canny.io' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Updates', to: '/updates' },
              { label: 'Gumroad', href: GUMROAD },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} ElnullaIX`,
      },
      prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
    }),
};

export default config;
