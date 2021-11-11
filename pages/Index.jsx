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
        <div className="p12 f jcb fw">
          <div className="pr10">
            <h1 className="fs4 mb6">Eric Bailey</h1>
            <p>internet person, books, etymology-curious, barfly</p>
            <p className="mb6">Tell me if I ever did a thing.</p>

            <a
              href="https://github.com/estrattonbailey"
              target="_blank"
              className="link db"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/estrattonbailey"
              target="_blank"
              className="link db"
            >
              Twitter
            </a>

            <h1 className="fs4 mb6 mt10">Projects</h1>

            <a href="https://presta.run" target="_blank" className="link db">
              Presta
            </a>
            <a
              href="https://github.com/sure-thing"
              target="_blank"
              className="link db"
            >
              Sure Thing
            </a>
            <p className="db">Picostack (soon)</p>
          </div>

          <div className="history mt10 w gray">
            <h1 className="history__title fs4 mb6">
              <a
                className="db"
                href="https://www.are.na/eric-bailey/every-thing"
                target="_blank"
              >
                History
              </a>
            </h1>

            <div id="history">
              <p class="light">Loading</p>
            </div>
          </div>
        </div>
      ),
      foot: {
        script: [{ src: "/history.js" }],
      },
    }),
  };
}
