import { makeSchema } from 'nexus'
import { join } from 'path'
import * as types from './graphql'

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(__dirname, '.', 'nexus-typegen.ts'), // 2
    schema: join(__dirname, '.', 'schema.graphql'), // 3
  },
  contextType: {                                    // 1
    module: join(__dirname, "./context.ts"),        // 2
    export: "Context",                              // 3
  },
})
