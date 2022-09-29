import { makeSchema } from 'nexus'
import { join } from 'path'

export const schema = makeSchema({
  types: [], // 1
  outputs: {
    typegen: join(__dirname, '..', 'nexus-typegen.ts'), // 2
    schema: join(__dirname, '..', 'schema.graphql'), // 3
  },
})