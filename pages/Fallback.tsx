import { h } from "hyposcript";
import { html } from "@presta/html";

import { createHeadObject } from "@/util/createHeadObject";

export const route = '*'

export async function handler() {
  return {
    statusCode: 404,
    html: html({
      head: createHeadObject(),
      body: (
        <div className="p12 f jcb fw">
          <div className="pr10">
            <h1 className="fs4 mb6">404</h1>

            <a
              href="/"
              target="_blank"
              className="link db"
            >
              Home
            </a>
          </div>
        </div>
      ),
    }),
  };
}
