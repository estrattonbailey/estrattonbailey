import { h } from 'hyposcript'
import { Box } from 'hypobox'

export function Gutter({ withVertical, children }) {
  return (
    <Box px={[5, 5, 6]} py={withVertical ? [5, 5, 6] : 0}>
      {children}
    </Box>
  )
}
