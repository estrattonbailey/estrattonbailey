import { h } from "hyposcript";
import { Box } from "hypobox";
import { load } from "presta/load";
import md from "snarkdown";

import { client, image } from "@/src/lib/sanity";
import { Gutter } from "@/src/components/Gutter";

export function getPaths() {
  return ["/"];
}

export function Page({ head }) {
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
      <Box as="h1" fs={2} mt={6} c="white" bg="blue" dib>
        {page.pageTitle}
      </Box>
      <Box as="p" mt={5} mb="0" fs={4} mw={[1, 1, "m"]}>
        {md(page.pageDescription)}
      </Box>

      <Box as="ul" f aic fw mx={-6} mt={6}>
        {[
          // {
          //   title: "notes",
          //   url: "/notes",
          //   prefix: "/",
          // },
          {
            title: "/history",
            url: "/history",
          },
          {
            title: "github",
            url: "https://github.com/estrattonbailey",
            external: true,
          },
          {
            title: "twitter",
            url: "https://twitter.com/estrattonbailey",
            external: true,
          },
          {
            title: "spaghetti",
            url: "https://spaghetti.directory/",
            external: true,
          },
        ].map((l) => (
          <Box as="li" px={6} my={3}>
            <Box
              as="a"
              db
              href={l.url}
              fs={5}
              target={l.external ? "_blank" : ""}
            >
              {l.title}
            </Box>
          </Box>
        ))}
      </Box>

      <Box as="h2" mt={12} mb={4} fs={4}>
        Projects
      </Box>

      <Box as="ul" f aic fw mx={-6} mw={[1, 1, "m"]}>
        {[
          {
            title: "Startup Stock Photos",
            url: "https://startupstockphotos.com",
            description: "100+ photos, 600M+ views",
            external: true,
          },
          {
            title: "Presta",
            url: "https://sure-thing.net/presta",
            description: "build the modern web",
            external: true,
          },
          {
            title: "sure thing",
            url: "https://sure-thing.net",
            description: "you got it",
            external: true,
          },
        ].map((p) => (
          <Box as="li" px={6} my={3}>
            <Box
              as="a"
              db
              fs={5}
              mb={3}
              href={p.url}
              target={p.external ? "_blank" : ""}
            >
              {p.title}
            </Box>
            <Box fs={6}>{p.description}</Box>
          </Box>
        ))}
      </Box>

      <Box as="h2" mt={10} fs={4}>
        OSS
      </Box>

      <Box as="ul" f aic fw mx={-6} mw={[1, 1, "m"]} mt={4}>
        {page.projects.map((p) => (
          <Box as="li" db px={6} my={3}>
            <Box
              as="a"
              db
              fs={5}
              href={p.url}
              target="_blank"
            >
              {p.title}
            </Box>
          </Box>
        ))}

        <Box as="li" db px={6} my={3}>
          <Box
            as="a"
            fs={5}
            href="https://github.com/estrattonbailey"
            target="_blank"
          >
            •••
          </Box>
        </Box>
      </Box>
    </Gutter>
  );
}
