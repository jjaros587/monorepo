import { rule, shield, allow, deny } from 'graphql-shield'

const isAuthenticated = rule({ cache: 'no_cache' })((parent, args, { user }) => {
  return user !== null && user !== undefined
})

const always = rule({ cache: 'no_cache' })(() => {
  return true
})

const permissions = shield({
  Query: {
    users: allow
  },
  Mutation: {
    login: always
  }
})

export default permissions
