import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	comunityMutations,
	comunityQueries,
	comunityTypeDef
} from './meddit/comunities/typeDefs';

import comunityResolvers from './meddit/comunities/resolvers';

import {
	commentMutations,
	commentQueries,
	commentTypeDef
} from './meddit/comments/typeDefs';

import commentResolvers from './meddit/comments/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		commentTypeDef,
		comunityTypeDef
	],
	[
		commentQueries,
		comunityQueries
	],
	[
		commentMutations,
		comunityMutations
	]	
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON		
		commentResolvers,
		comunityResolvers
	)
});
