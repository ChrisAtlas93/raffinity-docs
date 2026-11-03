import { defineConfig } from 'vitepress'

// Each category in the order an operator meets it. Add a guide by listing it under `items` (text, link).
// Category pages (index.md) always exist; guides are added one category at a time.
const categories: { text: string; slug: string; items?: { text: string; link: string }[] }[] = [
  {
    text: 'Getting started',
    slug: 'getting-started',
    items: [
      { text: 'Find your way around the admin', link: '/getting-started/welcome-to-your-admin' },
      { text: 'Sign in to your admin', link: '/getting-started/sign-in' },
      { text: 'Run the Setup Wizard', link: '/getting-started/run-the-setup-wizard' },
      { text: 'Switch features on and off', link: '/getting-started/switch-features-on-and-off' },
      { text: 'Read your Overview page', link: '/getting-started/your-overview-page' },
      { text: 'Create your first competition', link: '/getting-started/your-first-competition' },
      { text: 'Before you go live', link: '/getting-started/before-you-go-live' },
    ],
  },
  { text: 'Competitions', slug: 'competitions' },
  { text: 'Instant wins and games', slug: 'instant-wins-and-games' },
  { text: 'Offers and promotions', slug: 'offers-and-promotions' },
  { text: 'Draws and winners', slug: 'draws-and-winners' },
  { text: 'Orders and refunds', slug: 'orders-and-refunds' },
  { text: 'Payments', slug: 'payments' },
  { text: 'Wallets and withdrawals', slug: 'wallets-and-withdrawals' },
  { text: 'Customers', slug: 'customers' },
  { text: 'Player protection', slug: 'player-protection' },
  { text: 'Support and complaints', slug: 'support-and-complaints' },
  { text: 'Your website', slug: 'your-website' },
  { text: 'Marketing and tracking', slug: 'marketing-and-tracking' },
  { text: 'Emails', slug: 'emails' },
  { text: 'Reports', slug: 'reports' },
  { text: 'Your team and settings', slug: 'your-team-and-settings' },
]

const sidebar = [
  ...categories.map((c) => ({
    text: c.text,
    link: `/${c.slug}/`,
    collapsed: true,
    items: c.items ?? [],
  })),
  { text: 'Glossary', link: '/glossary' },
]

export default defineConfig({
  lang: 'en-GB',
  title: 'Raffinity Docs',
  titleTemplate: ':title | Raffinity Docs',
  description: 'Plain-English guides for running your competition site on Raffinity.',
  cleanUrls: true,
  lastUpdated: false,
  sitemap: { hostname: 'https://docs.raffinity.co.uk' },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: '32x32' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'theme-color', content: '#15242c' }],
    ['meta', { property: 'og:site_name', content: 'Raffinity Docs' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],

  themeConfig: {
    logo: { light: '/brand/raffinity-mark.svg', dark: '/brand/raffinity-mark-reversed.svg', alt: 'Raffinity' },
    siteTitle: 'Raffinity Docs',

    nav: [
      { text: 'Guides', link: '/getting-started/', activeMatch: '^/(?!glossary)' },
      { text: 'Glossary', link: '/glossary' },
      { text: 'Get help', link: 'https://raffinity.co.uk' },
    ],

    sidebar,

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Search', buttonAriaLabel: 'Search the guides' },
          modal: {
            noResultsText: 'No guides found for',
            resetButtonTitle: 'Clear',
            footer: { selectText: 'to open', navigateText: 'to move', closeText: 'to close' },
          },
        },
      },
    },

    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: 'Previous', next: 'Next' },
    darkModeSwitchLabel: 'Colour mode',
    lightModeSwitchTitle: 'Switch to light mode',
    darkModeSwitchTitle: 'Switch to dark mode',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Back to top',
    skipToContentLabel: 'Skip to content',

    footer: {
      message: 'Guides for operators who run a competition site on Raffinity.',
      copyright: '<a href="https://raffinity.co.uk">raffinity.co.uk</a>',
    },
  },
})
