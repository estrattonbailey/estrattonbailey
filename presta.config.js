import sourceFs from '@presta/source-filesystem'

export const files = ["pages/*.jsx", "pages/*.tsx"];
export const plugins = [sourceFs()]
