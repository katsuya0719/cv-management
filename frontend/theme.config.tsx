import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>CV Management</span>,
  project: {
    link: 'https://github.com/katsuya/cv-management',
  },
  docsRepositoryBase: 'https://github.com/katsuya/cv-management/tree/main/frontend',
  footer: {
    text: 'CV Management © 2025',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – CV Management'
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="CV Management" />
      <meta property="og:description" content="自分が作ったもの、経歴を紹介するためのページ" />
      <meta name="language" content="ja" />
    </>
  ),
  i18n: [
    { locale: 'ja', text: '日本語' }
  ],
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    backToTop: true,
  },
};

export default config;