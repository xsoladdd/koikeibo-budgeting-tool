"use client";
import { client } from "@/graphql/client";
import { ApolloProvider } from "@apollo/client";
import React from "react";
import { config } from "dotenv";
config();

interface IApolloGraphqlProviderProps {
  children: React.ReactNode;
}

const ApolloGraphqlProvider: React.FC<IApolloGraphqlProviderProps> = ({
  children,
}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default ApolloGraphqlProvider;
