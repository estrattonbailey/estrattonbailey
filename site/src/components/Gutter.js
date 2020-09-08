import { h } from 'hyposcript'
import { Box } from 'hypobox'

export function Gutter({ withVertical, children }) {
  return (
    <Box px={[3, 3, 5]} py={withVertical ? [3, 3, 5] : 0}>
      {children}
    </Box>
  )
}
