import { ApolloClient, InMemoryCache, split } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { createHttpLink } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import dotenv from "dotenv";

dotenv.config();
// const GRAPHQL_URL = process.env.NEXT_APP_HASURA_GRAPHQL_ENDPOINT || "";
const GRAPHQL_URL = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT || "";
const GRAPHQL_SECRET = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET!;

const httpLink = createHttpLink({
  uri: GRAPHQL_URL,
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: GRAPHQL_URL.replace("https", "wss").replace("http", "ws"),
    connectionParams: {
      headers: {
        "x-hasura-admin-secret": GRAPHQL_SECRET,
      },
    },
  })
);

const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  // const token = localStorage.getItem("token");
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret": GRAPHQL_SECRET,
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
