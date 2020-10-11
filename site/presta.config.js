import { theme as defaultTheme, configure, getCss } from 'hypobox'
import { document } from 'presta/document'

import { theme } from '@/src/lib/theme'

configure({ theme })

const name = `estrattonbailey`
const image = `/static/og.png`
const url = `https://estrattonbailey.com`

export const pages = 'src/pages/**/*.js'
export const output = 'build'

export function createDocument (ctx) {
  return document(ctx, {
    body: `<div id="root">${ctx.body}</div>`,
    foot: {
      script: [{ src: '/client.js' }]
    },
    head: {
      og: {
        site_name: name,
        image,
        url
      },
      twitter: {
        site_name: name,
        image,
        card: 'summary_large_image',
        creator: '@estrattonbailey'
      },
      meta: [
        { name: 'author', content: '@estrattonbailey' },
      ],
      link: [
        `<link rel="icon" type="image/png" href="/static/favicon.png">`,
        { rel: 'stylesheet', href: '/static/style.css' },
      ],
      style: [
        { id: 'style', children: getCss() },
      ],
    }
  })
}

