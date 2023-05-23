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
              href="https://bsky.app/profile/estrattonbailey.bsky.social"
              target="_blank"
              className="link db"
            >
              Bluesky
            </a>
            <a
              href="https://twitter.com/estrattonbailey"
              target="_blank"
              className="link db"
            >
              Twitter
            </a>
            <a
              href="/notes"
              className="link db"
            >
              Notes
            </a>

            <h1 className="fs4 mb6 mt10">Projects</h1>

            <p className='f'>
              <a href="https://sideby.space/" target="_blank" className="link db">
                Side By Side
              </a>
              &nbsp;— IRL coworking space in Chicago
            </p>

            <p className='f'>
              <a href="https://hypercast.dev/" target="_blank" className="link db">
                Hypercast
              </a>
              &nbsp;— real-time data transport
            </p>

            <p className='f'>
              <a href="https://front-of-house.gitbook.io/svbstrate/" target="_blank" className="link db">
                Svbstrate
              </a>
              &nbsp;— WIP,&nbsp;<a href='https://github.com/front-of-house/hypobox' target='_blank' className='link'>hypobox</a>&nbsp;for React and RN
            </p>

            <p className='f'>
              <a href="https://github.com/front-of-house/presta" target="_blank" className="link db">
                Presta
              </a>
              &nbsp;— minimalist web framework
            </p>

            <p className='f'>
              <a href="https://grdn.site" target="_blank" className="link db">
                grdn
              </a>
              &nbsp;— decentralized blog
            </p>

            <p className='f'>
              <a href="https://tweeet.link" target="_blank" className="link db">
                tweeet.link
              </a>
              &nbsp;— &nbsp;<s>Elon</s>&nbsp;broke it, haven't fixed
            </p>

            <p className='f'>
              <a href="https://github.com/front-of-house" target="_blank" className="link db">
                Front of House
              </a>
              &nbsp;— everything else
            </p>
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
