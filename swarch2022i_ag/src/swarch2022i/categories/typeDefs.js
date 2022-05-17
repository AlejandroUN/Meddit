export const categoryTypeDef = `
  type User {
	  id: Int!
	  username: String!
	  userpassword: String!
	  privacy: String!
	  history: [String]!
	  notifications: [String]!
  }
  input RegisterInput {
	email: String!
	password: String!
	username: String!
  }
  input LoginInput {
	email: String!
	password: String!
  }
  input EmailInput {
	email: String!
  }`;

export const categoryQueries = `
	userByemail(email: EmailInput!): User!
  `;

export const categoryMutations = `
    createUser(user: RegisterInput!): String!
    loginUser(user: LoginInput!): User!
    history(email: String!): String!
    notifications(email: String!): String!
`;
