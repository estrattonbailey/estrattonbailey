import { h } from "hyposcript";
import { Box } from "hypobox";

export function Crumbs({ pages }) {
  const crumbs = [
    {
      title: "#",
      url: "/",
    },
  ].concat(pages);
  return (
    <Box f aic mx="-2px" pt={3}>
      {crumbs.map((p, i) => (
        <>
          <Box as={p.url ? 'a' : 'div'} px={1} href={p.url}>
            {p.title}
          </Box>
          {i < crumbs.length - 1 && <Box px={1} as="span">/</Box>}
        </>
      ))}
    </Box>
  );
}
