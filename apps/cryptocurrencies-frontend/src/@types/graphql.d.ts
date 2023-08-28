// declare module '*.graphql'

declare module '*.graphql' {
  import { DocumentNode } from 'graphql'
  const Schema: DocumentNode
  export default Schema
}

// Or if you aren't using fragments:
// declare module '*.graphql' {
//   const Query: import('graphql').DocumentNode
//   export default Query
// }
