import type { CodegenConfig } from "@graphql-codegen/cli";

require("dotenv").config();

const graphqlSecret = process.env
  .NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET as string;
const graphqlUrl = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT as string;

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [graphqlUrl]: {
      headers: {
        "x-hasura-admin-secret": graphqlSecret,
      },
    },
  },
  documents: ["src/graphql/**/*.graphql"],
  generates: {
    "src/graphql/generated.ts": {
      // preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withMutationFn: true,
        withRefetchFn: false,
        withResultType: true,
        withMutationOptionsType: true,
        addDocBlocks: true,
        optimizeDocumentNode: true,
        pureMagicComment: true,
      },
    },
  },
};

export default config;
