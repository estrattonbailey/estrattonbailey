import { h } from "hyposcript";
import { Box } from "hypobox";
import { load, cache } from "presta/load";
import { head } from "presta/head";
import md from "marked";

import { client } from "@/src/lib/sanity";
import { Gutter } from "@/src/components/Gutter";
import { Crumbs } from "@/src/components/Crumbs";

export async function getPaths() {
  const notes = await cache(
    () =>
      client.fetch(`
    *[_type == 'note']{
      title,
      "slug": slug.current
    }
  `),
    { key: "notes", duration: "3m" }
  );

  return notes.map((n) => `/notes/${n.slug}`);
}

export function Page({ pathname }) {
  const [_, slug] = pathname.match(/notes\/(.+)$/) || [];

  const note = load(
    () =>
      client.fetch(
        `
      *[_type == 'note' && slug.current == $slug]{
        title,
        "slug": slug.current,
        body
      }[0]
    `,
        { slug }
      ),
    { key: slug, duration: "1m" }
  );

  if (!note) return null;

  head({
    title: `${note.title} | estrattonbailey`,
  });

  return (
    <Gutter withVertical>
      <Crumbs
        pages={[
          {
            title: "notes",
            url: "/notes",
          },
          {
            title: note.slug,
          }
        ]}
      />

      <Box as="h1" pt={4}>
        {note.title}
      </Box>

      <Box mw="m">
        {md(note.body)}
      </Box>
    </Gutter>
  );
}
