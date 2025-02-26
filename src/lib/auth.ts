import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import { restGraphqlFetch } from "./restGraphqlFetch";
import { gql } from "@apollo/client";
import { checkPassword } from "./passwordHash";

const getUserQuery = `
  query getUser($email: String) {
    users(where: {
      email: {
        _eq:  $email
      },
        isLocked:{
          _neq:true,
        }
    } ) {
      email
      id
      password
      role
    }
  }`;

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    // GitHub,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, request) {
        let user = null;
        // Verify Logic Here, for now, we will just return the user
        try {
          const data = await restGraphqlFetch(getUserQuery, {
            email: credentials.email,
          });
          const selectedUser = data.users[0];

          if (!selectedUser) {
            throw new Error("User not found.");
          }
          if (selectedUser.isLocked) {
            throw new Error("User is locked.");
          }
          const isPasswordValid =
            credentials.password === selectedUser.password;
          // const isPasswordValid = await checkPassword(
          //   credentials.password as string,
          //   selectedUser.password
          // );
          if (!isPasswordValid) {
            throw new Error("Invalid password.");
          }
          return selectedUser;
        } catch (error) {
          console.error("Error fetching data:", error);
          if (error instanceof Error) {
            throw new Error(
              error.message || "An error occurred during authorization."
            );
          } else {
            throw new Error("An error occurred during authorization.");
          }
        }
      },
    }),
  ],
});
