export const comunityTypeDef = `
  type Channel_suscription {
      id: Int!
      id_user: Int!
      id_channel: Int!
  }

  type Community_suscription {
      id: Int!
      id_user: Int!
      id_community: Int!
  }

  type Record {
      id: Int!
      id_user: Int!
      id_video: Int!
      position_inside_record: Int!
  }
  
  input Channel_suscriptionInput {
      id_user: Int!
      id_channel: Int!
  }

  input Community_suscriptionInput {
      id_user: Int!
      id_community: Int!
  }

  input RecordInput {
      id_user: Int!
      id_video: Int!
      position_inside_record: Int!
  }`;

export const comunityQueries = `
    all_channel_suscriptions: [Channel_suscription]!
    channel_suscriptions_by_userId(userId: Int!): [Channel_suscription]!
    all_community_suscriptions: [Community_suscription]!
    community_suscriptions_by_userId(userId: Int!): [Community_suscription]!
    record_by_userId(userId: Int!): [Record]!
  `;

export const comunityMutations = `
    create_channel_suscription(channel_suscription: Channel_suscriptionInput!): Channel_suscription!
    delete_channel_suscription(id: Int!): Int
    create_community_suscription(community_suscription: Community_suscriptionInput!): Community_suscription!
    delete_community_suscription(id: Int!): Int
    insert_to_record(record: RecordInput!): Record!
    delete_from_record(id: Int!): Int
`;
