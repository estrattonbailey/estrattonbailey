import { h } from "hyposcript";
import { html } from "@presta/html";

import { createHeadObject } from "@/util/createHeadObject";

export function getStaticPaths() {
  return ["/"];
}

export async function handler(ev) {
  return {
    html: html({
      head: createHeadObject(),
      body: (
        <div className="outer f jcb fw">
          <div className="left-col">
            <h1 className="fs4 mb6">Eric Bailey</h1>
            <p className="mb6">eng @ <a href="https://blueskyweb.xyz/" target="_blank">Bluesky</a><br/></p>

            <a
              href="https://github.com/estrattonbailey"
              target="_blank"
              className="link db"
            >
              GitHub
            </a>
            <a
              href="https://bsky.app/profile/esb.lol"
              target="_blank"
              className="link db"
            >
              Bluesky
            </a>
          </div>
        </div>
      ),
      foot: {
        script: [],
      },
    }),
  };
}
