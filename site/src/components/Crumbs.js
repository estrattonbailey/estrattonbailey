import { h } from "hyposcript";
import { Box } from "hypobox";

export function Crumbs({ pages }) {
  const crumbs = [
    {
      title: "home",
      url: "/",
    },
  ].concat(pages);
  return (
    <Box f aic mx={-2} pt={4} fs={6}>
      {crumbs.map((p, i) => (
        <>
          <Box as={p.url ? 'a' : 'div'} px={2} href={p.url}>
            {p.title}
          </Box>
          {i < crumbs.length - 1 && <Box px={2} as="span">/</Box>}
        </>
      ))}
    </Box>
  );
}
