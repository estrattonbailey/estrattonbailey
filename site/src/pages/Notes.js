import { h } from "hyposcript";
import { Box } from "hypobox";
import { load } from "presta/load";

import { client } from "@/src/lib/sanity";
import { Gutter } from "@/src/components/Gutter";
import { Crumbs } from "@/src/components/Crumbs";

export function getPaths() {
  return ["/notes"];
}

export function Page({ head }) {
  const notes = load(
    () =>
      client.fetch(`
      *[_type == 'note']{
        title,
        "slug": slug.current
      }
    `),
    { key: "notes", duration: "3m" }
  );

  if (!notes) return null;

  head({
    title: "notes | estrattonbailey",
  });

  return (
    <Gutter withVertical>
      <Crumbs
        pages={[
          {
            title: "notes",
          },
        ]}
      />

      <Box as="ul" pt={5} mx={-3}>
        {notes.map((n) => (
          <Box as="li">
            <Box as="a" db my={3} p={3} fs={3} mw="m" href={`/notes/${n.slug}`}>
              {n.title}
            </Box>
          </Box>
        ))}
      </Box>
    </Gutter>
  );
}
