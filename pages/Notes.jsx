import path from "path";
import { h } from "hyposcript";
import { html } from "@presta/html";
import { source } from '@presta/source-filesystem'
import { micromark as md } from "micromark";

import { createHeadObject } from "@/util/createHeadObject";

const notes = source('../notes/*.md', __filename)
const routes = notes.reduce((routes, note) => {
  const filename = path.basename(note[0], '.md')
  return {
    ...routes,
    [`/notes/${filename}`]: note[1],
  }
}, {})

export async function getStaticPaths() {
  return Object.keys(routes)
}

export async function handler(ev) {
  const note = routes[ev.path.split('?')[0]]
  const markup = md(note);

  return {
    html: html({
      head: createHeadObject(),
      body: (
        <div className="p12 markdown">
          <a href='/' className='pb12 caps h6'>
            <strong>
              &lt; Back
            </strong>
          </a>
          <div style={{ maxWidth: "600px" }}>{markup}</div>
        </div>
      ),
    }),
  };
}
