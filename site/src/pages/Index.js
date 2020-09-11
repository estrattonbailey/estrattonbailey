import { h } from "hyposcript";
import { Box } from "hypobox";
import { load } from "presta/load";
import { head } from "presta/head";
import md from "snarkdown";

import { client, image } from "@/src/lib/sanity";
import { Gutter } from "@/src/components/Gutter";

export function getPaths() {
  return ["/"];
}

export function Page() {
  const page = load(
    () =>
      client.fetch(`
      *[_type == 'index']{
        title,
        description,
        image,
        pageTitle,
        pageDescription,
        projects
      }[0]
    `),
    { key: "index" }
  );

  if (!page) return null;

  head({
    title: page.title,
    description: page.description,
    image: image(page.image).width(1200).url(),
  });

  return (
    <Gutter withVertical>
      <Box as="h1" fs={3} mt={3} bg="blue" c="white" dib>
        {page.pageTitle}
      </Box>
      <Box as="p" mt={2} mb="0" fs={4} mw={[1, 1, "m"]}>
        {md(page.pageDescription)}
      </Box>
      <Box f aic fw mx="-8px">
        {[
          // {
          //   title: "notes",
          //   url: "/notes",
          //   prefix: "/",
          // },
          {
            title: "history",
            url: "/history",
            prefix: "/",
          },
          {
            title: "github",
            url: "https://github.com/estrattonbailey",
            prefix: "^",
            external: true,
          },
          {
            title: "twitter",
            url: "https://twitter.com/estrattonbailey",
            prefix: "^",
            external: true,
          },
          {
            title: "spaghetti",
            url: "https://spaghetti.directory/",
            prefix: "^",
            external: true,
          },
        ].map((l) => (
          <Box
            as="a"
            href={l.url}
            my={3}
            p={2}
            mr={3}
            fs={5}
            target={l.external ? "_blank" : ""}
          >
            {l.prefix}
            {l.title}
          </Box>
        ))}
      </Box>

      <Box as="h2" mt={4} fs={4}>Projects</Box>

      <Box f aic fw mx="-16px" mw={[1, 1, "m"]}>
        {[
          {
            title: 'Startup Stock Photos',
            url: 'https://startupstockphotos.com',
            description: '100+ photos, 600M+ views',
          },
          {
            title: 'RIFF',
            url: 'https://riff.world',
            description: 'unmute your world',
          },
          {
            title: 'sure thing',
            url: 'https://sure-thing.net',
            description: 'you got it',
          },
        ].map((p) => (
          <Box fs={5} px={3} my={2} mr={3}>
            <Box as="a" href={p.url} target="_blank" p={2} ml="-8px">
              {p.title}
            </Box>
            <Box fs={6} mt={1}>{p.description}</Box>
          </Box>
        ))}
      </Box>

      <Box as="h2" mt={4} fs={4}>OSS</Box>

      <Box f aic fw mx="-8px" mw={[1, 1, "m"]}>
        {page.projects.map((p) => (
          <Box as="a" fs={5} p={2} my={2} mr={3} href={p.url} target="_blank">
            {p.title}
          </Box>
        ))}
        <Box as="a" fs={5} p={2} my={2} mr={3} href="https://github.com/estrattonbailey" target="_blank">
          •••
        </Box>
      </Box>
    </Gutter>
  );
}
