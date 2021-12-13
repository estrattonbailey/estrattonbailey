import { createPlugin as sourceFs } from '@presta/source-filesystem'

export const files = ["pages/*.jsx"];
export const plugins = [sourceFs()]
