// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HMCL-PE-Docs',
  tagline: 'Hello Minecraft! Launcher For Android',
  url: 'https://hmclpe.adorable0v0.top',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'FrostN_0v0', // Usually your GitHub org/user name.
  projectName: 'HMCL-PE-Docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: '0v0の文档',
        logo: {
          alt: 'My Site Logo',
          src: 'img/Setup.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '帮助文档',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/FrostN0v0',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '帮助',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社交',
            items: [
              {
                label: 'MinecraftQQGroup',
                href: 'https://jq.qq.com/?_wv=1027&k=0yXjvzRz',
              },
              {
                label: 'Github',
                href: 'https://github.com/FrostN0v0',
              },
              {
                label: 'bilibili',
                href: 'https://space.bilibili.com/381893181',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/FrostN0v0',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FrostN0v0, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
