import { h } from "hyposcript";
import { Box } from "hypobox";

import { Info } from '@/src/icons/Info'

export function Alert({ children, ...rest }) {
  return (
    <Box {...rest}>
      <Box f aic bg="b" px={5} py={4} css={{ borderRadius: '6px' }} fs={6}>
        <Info />
        <Box ml={3}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}
