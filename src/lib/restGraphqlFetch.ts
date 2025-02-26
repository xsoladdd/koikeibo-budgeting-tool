export const restGraphqlFetch = async (
  query: string,
  variables: Record<string, any> = {}
) => {
  const url = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT!;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret":
        process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET!,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  return result.data;
};
