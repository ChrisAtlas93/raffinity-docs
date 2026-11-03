import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import '@fontsource-variable/geist'
import '@fontsource-variable/figtree'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'home-features-before': () =>
        h('div', { class: 'home-question' }, [h('div', { class: 'home-question-inner' }, [h('h2', 'What would you like to do?')])]),
      'not-found': () =>
        h('div', { class: 'not-found' }, [
          h('p', { class: 'not-found-code' }, '404'),
          h('h1', 'We could not find that page'),
          h('p', 'It may have moved, or the address may have a typo. Try the search at the top of the page, or start from the guides.'),
          h('p', { class: 'not-found-links' }, [
            h('a', { class: 'not-found-button', href: '/' }, 'Go to the home page'),
            h('a', { class: 'not-found-link', href: '/getting-started/' }, 'Open the guides'),
          ]),
        ]),
    }),
} satisfies Theme
