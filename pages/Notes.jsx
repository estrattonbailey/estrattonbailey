import { promises as fs } from "fs";
import path from "path";
import { h } from "hyposcript";
import { html } from "@presta/html";
import { micromark as md } from "micromark";

import { createHeadObject } from "@/util/createHeadObject";

export async function getStaticPaths() {
  return (await fs.readdir(path.join(process.cwd(), "notes"))).map(
    (note) => "/" + path.join("notes", path.basename(note, ".md"))
  );
}

export async function handler(ev) {
  const note = await fs.readFile(
    path.format({ root: process.cwd(), name: ev.path, ext: ".md" })
  );
  const markup = md(note);
  return {
    html: html({
      head: createHeadObject(),
      body: (
        <div className="p12 markdown">
          <div style={{ maxWidth: "600px" }}>{markup}</div>
        </div>
      ),
    }),
  };
}
