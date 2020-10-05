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
      <Box as="h1" fs={2} mt={4} c="b" dib>
        {page.pageTitle}
      </Box>
      <Box as="p" mt={3} mb="0" fs={4} mw={[1, 1, "m"]}>
        {md(page.pageDescription)}
      </Box>
      <Box as="ul" f aic fw mx={-3} mt={4}>
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
          <Box as="li">
            <Box
              as="a"
              db
              href={l.url}
              my={2}
              p={3}
              mr={4}
              fs={5}
              target={l.external ? "_blank" : ""}
            >
              {l.title}
            </Box>
          </Box>
        ))}
      </Box>

      <Box as="h2" mt={5} fs={4}>
        Projects
      </Box>

      <Box f aic fw mx={-4} mw={[1, 1, "m"]}>
        {[
          {
            title: "Startup Stock Photos",
            url: "https://startupstockphotos.com",
            description: "100+ photos, 600M+ views",
            external: true,
          },
          {
            title: "/presta",
            url: "/projects/presta",
            description: "build the modern web",
          },
          {
            title: "sure thing",
            url: "https://sure-thing.net",
            description: "you got it",
            external: true,
          },
        ].map((p) => (
          <Box as="ul" fs={5} px={4} my={3} mr={4}>
            <Box as="li">
              <Box
                as="a"
                db
                href={p.url}
                p={3}
                ml="-8px"
                target={p.external ? "_blank" : ""}
              >
                {p.title}
              </Box>
              <Box fs={6}>{p.description}</Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Box as="h2" mt={5} fs={4}>
        OSS
      </Box>

      <Box as="ul" f aic fw mx={-3} mw={[1, 1, "m"]} mt={4}>
        {page.projects.map((p) => (
          <Box as="li" db>
            <Box
              as="a"
              db
              fs={5}
              p={3}
              my={2}
              mr={4}
              href={p.url}
              target="_blank"
            >
              {p.title}
            </Box>
          </Box>
        ))}
        <Box as="li">
          <Box
            as="a"
            fs={5}
            p={3}
            my={2}
            mr={4}
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
