import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Azure Infra Handbook', // Kitap ismi güncellendi
  tagline: 'Azure Infrastructure & Architecture Notes', // Slogan güncellendi
  favicon: 'img/favicon.ico',

  // GitHub Pages ayarları - Repo ismine dikkat!
  url: 'https://kardelruveyda.github.io', 
  baseUrl: '/azure-infra/', // Repo ismini 'azure-infra' yaptığını varsayıyorum
  organizationName: 'kardelruveyda', 
  projectName: 'azure-infra', 
  trailingSlash: false,
  onBrokenLinks: 'warn',

  // Çoklu dil ayarı
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'tr'], // 'tr' burada var mı?
  localeConfigs: {
    en: { label: 'English' },
    tr: { label: 'Türkçe' },
  },
},
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Ana sayfa doğrudan dokümanlar olsun
        },
        blog: false, 
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Arama motoru ve sosyal medya için meta image ekleyebilirsin
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Azure Infra Handbook', // Navbar başlığı
      logo: {
        alt: 'Azure Infra Logo',
        src: 'img/logo.svg', // Eğer bir logon varsa buraya ekle
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Handbook',
        },
        {
          type: 'localeDropdown', 
          position: 'right',
        },
        {
          href: 'https://github.com/kardelruveyda/azure-infra', // Yeni repo linkin
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [], // Footer linklerini istersen doldurabilirsin
      copyright: `Copyright © ${new Date().getFullYear()} Kardel Ruveyda Çetin. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;