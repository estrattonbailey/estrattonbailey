import { configure, getCss } from 'hypobox'
import { document } from 'presta/document'

import { theme } from '@/src/lib/theme'

configure({ theme })

const name = `estrattonbailey`
const title = `estrattonbailey`
const image = `/static/og.png`
const url = `https://estrattonbailey.com`

export function createDocument ({ body }) {
  return document({
    body: `<div id="root">${body}</div>`,
    foot: {
      script: [{ src: '/client.js' }]
    },
    head: {
      og: {
        title,
        site_name: name,
        image,
        url
      },
      twitter: {
        title,
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
        `<link rel="stylesheet" href="https://unpkg.com/svbstrate@4.1.1/src/lib/reset.css" />`,
        `<link rel="stylesheet" href="https://unpkg.com/svbstrate@4.1.1/src/lib/buttons.css" />`,
        `<link rel="stylesheet" href="https://unpkg.com/svbstrate@4.1.1/src/lib/forms.css" />`,
        `<link rel="stylesheet" href="https://unpkg.com/svbstrate@4.1.1/src/lib/lists.css" />`,
        `<link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700" rel="stylesheet" />`
      ],
      style: [
        `<style id="style">${getCss()}</style>`,
        `<style>
          * {
            font-family: 'Roboto Mono', monospace;
          }
          html, body {
            color: #333;
          }
          ::selection {
            background: blue;
            color: white;
          }
          a {
            color: blue;
          }
          a:visited {
            color: blue;
          }
          a:focus {
            outline: 2px dashed blue;
          }
          pre, code {
            font-size: 0.9rem;
            background: whitesmoke;
          }
          pre {
            background: whitesmoke;
            padding: 16px;
            overflow: auto;
          }
          p {
            line-height: 1.5;
          }
        </style>`
      ],
    }
  })
}

