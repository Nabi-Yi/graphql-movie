import {ApolloServer, gql} from "apollo-server";
import fetch from "node-fetch";
const typeDefs = gql`
    type Query {
        allMovies : [Movie!]!
        movie(id:String!): Movie
    }
    type Movie {
        id: Int!
        url: String!
        imdb_code: String!
        title: String!
        title_english: String!
        title_long: String!
        slug: String!
        year: Int!
        rating: Float!
        runtime: Float!
        genres: [String]!
        summary: String
        description_full: String!
        synopsis: String
        yt_trailer_code: String!
        language: String!
        background_image: String!
        background_image_original: String!
        small_cover_image: String!
        medium_cover_image: String!
        large_cover_image: String!
    }
`;

const server = new ApolloServer({typeDefs, resolvers});
server.listen().then(({url}) => {
    console.log(`Running on ${url}`);
});
