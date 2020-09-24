import { h } from "hyposcript";
import { Box } from "hypobox";
import { load } from "presta/load";
import { head } from "presta/head";
import md from 'snarkdown';

import { client } from "@/src/lib/sanity";
import { Gutter } from "@/src/components/Gutter";
import { Crumbs } from "@/src/components/Crumbs";

export function getPaths() {
  return ["/history"];
}

export function Page() {
  const history = load(
    () =>
      client.fetch(`
      *[_type == 'history']{
        title,
        comment,
        url,
        _createdAt
      } | order(_createdAt desc)
    `),
    { key: "history" }
  );

  if (!history) return null;

  head({
    title: "history | estrattonbailey",
  });

  return (
    <Gutter withVertical>
      <Crumbs
        pages={[
          {
            title: "history",
          },
        ]}
      />

      <Box as="ul" pt={5} mx={-3}>
        {history.map((i) => (
          <Box as="li" px={3} py={4} mw="m">
            {i.title && (
              <Box as="a" mx="-4px" p={2} db href={i.url} target="_blank">
                ^{i.title}
              </Box>
            )}

            {i.comment && (
              <Box mt={2}>
                {md(i.comment)}
              </Box>
            )}

            <Box db fs={6} mt={3} c="#ccc">{i._createdAt}</Box>
          </Box>
        ))}
      </Box>
    </Gutter>
  );
}

