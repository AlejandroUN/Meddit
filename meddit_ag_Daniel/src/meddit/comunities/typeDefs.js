export const comunityTypeDef = `
  type Comunity {
      id: Int!
      name: String!
      description: String!
      creatorId: Int!
  }
  input ComunityInput {
      name: String!
      description: String!
      creatorId: Int!
  }`;

export const comunityQueries = `
      allComunities: [Comunity]!
      comunityById(id: Int!): Comunity!
  `;

export const comunityMutations = `
    createComunity(comunity: ComunityInput!): Comunity!
    updateComunity(id: Int!, comunity: ComunityInput!): Comunity!
    deleteComunity(id: Int!): Int
`;
