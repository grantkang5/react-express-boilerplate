import { User } from "../../../entity/User";


export default {
  Query: {
    me: async (_, __, { req }) => {

    },
  },

  Mutation: {
    addUser: async (_, { email, password }) => {
      return null
    },
  },
};