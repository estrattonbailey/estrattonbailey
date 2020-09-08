import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import root from './root'
import note from './note'
import history from './history'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    root,
    note,
    history,
  ])
})
