import { h } from "hyposcript";
import { Box } from "hypobox";
import { load } from "presta/load";
import md from 'marked'

import { client, image } from "@/src/lib/sanity";

import { Gutter } from "@/src/components/Gutter";
import { Crumbs } from "@/src/components/Crumbs";
import { Alert } from "@/src/components/Alert";
import { Markdown } from "@/src/components/Markdown";

export function getPaths() {
  return ["/projects/presta"];
}

export function Page({ head }) {
  const page = load(
    () =>
      client.fetch(`
      *[_type == 'project' && slug.current == 'presta']{
        title,
        description,
        image,
        captions,
        body,
        "slug": slug.current
      }[0]
    `),
    { key: "presta", duration: '30s' }
  );

  if (!page) return null;

  head({
    title: page.title,
    description: page.description,
    image: image(page.image).width(1200).url(),
  });

  return (
    <Box className="project" bg="d" c="white" fe={3} css={{ overflow: 'hidden' }}>
      <Box mw="xl">
        <Gutter withVertical>
          <Crumbs
            pages={[
              {
                title: "projects",
              },
              {
                title: page.slug,
              },
            ]}
          />

          <Box pt={6}>
            <Box as="h1" c="b" mb={3}>{page.title}</Box>
            <Box as="p" fs={4} fe={4}>{page.description}</Box>
          </Box>

          <Box mt={6} h="4px" bg="t" />

          <Box f fw py={6} mx={-4}>
            {page.captions.map((c, i) => (
              <Box fs={6} w={[1, 1, 1/2]} px={4} mt={i > 0 ? [4, 4, 0] : 0}>
                {md(c.text)}
              </Box>
            ))}
          </Box>

          <Box css={{ borderRadius: '6px', overflow: 'hidden' }}>
            <Box as="video" src="/static/demo.mp4" db w={1} autoplay loop controls="false" />
          </Box>

          <Box mw="m">
            <Box as="h3" c="b" mt={96}>Getting Started</Box>

            <Alert mt={4}>
              Presta is in active beta. Questions, comments, ideas? Open an issue
              or PR!
            </Alert>

            <Box mt={5} className="wysiwyg">
              {md(page.body)}
            </Box>
          </Box>
        </Gutter>
      </Box>
    </Box>
  );
}
