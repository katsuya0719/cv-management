import { useThemeConfig } from 'nextra-theme-docs'

type ThemeConfig = Parameters<typeof useThemeConfig>[0]

const config: ThemeConfig = {
  project: {
    link: 'https://github.com/your-org/your-repo', // プロジェクトのGitHubリンク
  },
  docsRepositoryBase: 'https://github.com/your-org/your-repo/blob/main/src/content',
  sidebar: {
    defaultMenuCollapseLevel: 1, // サイドバーのデフォルト折りたたみレベル
    items: [
      { type: 'doc', id: 'index', title: 'ホーム' },
      { type: 'doc', id: 'cto', title: 'CTO' },
      { type: 'doc', id: 'enexia', title: 'Enexia' },
      { type: 'doc', id: 'sketches', title: 'Sketches' },
      // さらにカスタム項目を追加可能
      { type: 'separator' },
      { type: 'link', title: '外部リンク', href: 'https://example.com' }
    ]
  },
  i18n: [
    { locale: 'ja', name: '日本語' },
    { locale: 'en', name: 'English' }
  ],
  logo: <span>My CV Site</span>,
  footer: {
    text: '© 2025 Katsuya Obara'
  }
}

export default config