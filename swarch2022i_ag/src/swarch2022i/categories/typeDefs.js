export const categoryTypeDef = `
  type User {
	  username: String!
	  userpassword: String!
  }
  input UserInput {
	  username: String!
	  userpassword: String!
  }`;

export const categoryQueries = `
	allUsers: [User]!
	categoryById(id: Int!): User!
  `;

export const categoryMutations = `
    createUser(user: UserInput!): Boolean!
    loginUser(user: UserInput!): Boolean!
`;
