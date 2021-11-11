import { h } from "hyposcript";
import { html } from "@presta/html";

import { createHeadObject } from "@/util/createHeadObject";

export async function getStaticPaths() {
  return ["/ass-ski"];
}

export async function handler(ev) {
  return {
    html: html({
      head: createHeadObject({
        title: "assy",
        link: [
          { href: '/ass-ski.css', rel: 'stylesheet' },
        ]
      }),
      body: <div id="root"></div>,
      foot: {
        script: [{ src: "/ass-ski.js" }],
      },
    }),
  };
}
