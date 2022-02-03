import path from "path";
import { h } from "hyposcript";
import { html } from "@presta/html";
import { source } from '@presta/source-filesystem'
import fm from 'front-matter'

import { createHeadObject } from "@/util/createHeadObject";

const raw = source('../notes/*.md', __filename)
const routes = raw.reduce((routes, note) => {
  const filename = path.basename(note[0], '.md')
  return {
    ...routes,
    [`/notes/${filename}`]: note[1],
  }
}, {})
const notes = Object
  .keys(routes)
  .map(url => [url, fm(routes[url])])
  .map(([route, note]) => {
    if (!note.attributes.date) {
      throw new Error(`note didn't have a date`)
    }

    return {
      route,
      date: new Date(note.attributes.date),
      ...note,
    }
  })
  .sort((a, b) => b.date - a.date)

export async function getStaticPaths() {
  return ['/notes']
}

export async function handler(ev) {
  return {
    html: html({
      head: {
        ...createHeadObject(),
        title: 'notes | estrattonbailey',
        description: 'smooth brain',
      },
      body: (
        <div className="outer markdown">
          <a href='/' className='pb12 caps h6 db'>
            <strong>
              &lt; Back
            </strong>
          </a>
          <ul style={{ maxWidth: "600px", listStyle: 'none', padding: 0, margin: 0 }}>
            {notes.map(note => {
              return (
                <li>
                  <a href={note.route}>{note.attributes.title}</a>
                </li>
              )
            })}
          </ul>
        </div>
      ),
    }),
  };
}
