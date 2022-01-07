import sourceFs from '@presta/source-filesystem'
import netlify from '@presta/adapter-netlify'

export const files = ["pages/*.jsx", "pages/*.tsx"];
export const plugins = [sourceFs(), netlify()]
