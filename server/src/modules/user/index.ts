import { GraphQLModule } from '@graphql-modules/core'
import { gql } from 'apollo-server-express'
import { loadSchemaFiles, loadResolversFiles } from 'graphql-toolkit';

export const UserModule = new GraphQLModule({
  typeDefs: loadSchemaFiles(__dirname + '/schema'),
  resolvers: loadResolversFiles(__dirname + '/resolvers')
})