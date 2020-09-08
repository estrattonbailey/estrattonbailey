import { h } from "hyposcript";
import { Box } from "hypobox";
import { load } from "presta/load";
import { head } from "presta/head";

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
        url,
        _createdAt
      }
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

      <Box as="ul" pt={4} mx="-8px">
        {history.map((i) => (
          <Box as="li">
            <Box f aic my={1} mw="m">
              <Box as="a" p={2} href={i.url} target="_blank">
                {i.title}
              </Box>
              <Box as="span" fs={6} ml={2} mt="3px" c="#ccc">{i._createdAt}</Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Gutter>
  );
}

