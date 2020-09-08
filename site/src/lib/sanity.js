const sanityClient = require('@sanity/client')
import imageURL from '@sanity/image-url'

export const client = sanityClient({
  projectId: 'gzr25kqy',
  dataset: 'production',
  useCdn: true
})

const builder = imageURL(client)

export function image (image) {
  return builder.image(image)
}
