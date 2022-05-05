export const commentTypeDef = `
  type Comment {
    id: String!
    userId: Int!
    videoId: Int!
    date: String!
    description: String!
    likes: Int!
    dislikes: Int!
  }
  input CommentInput {
    UserId: Int!
    VideoId: Int!
    Date: String!
    Description: String!
    Likes: Int!
    Dislikes: Int!
  }`;

export const commentQueries = `
      GetAllComments: [Comment]!
      GetCommentDetails(id: String!): Comment!
  `;

export const commentMutations = `
    CreateComment(comment: CommentInput!): Comment!
    UpdateComment(id: String!, comment: CommentInput!): Comment!
    DeleteComment(id: String!): String
`;