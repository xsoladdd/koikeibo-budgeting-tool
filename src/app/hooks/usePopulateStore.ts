import { useSession } from "next-auth/react";
import { useGlobalContext } from "../useGlobalContext";
import { useGetUserQuery } from "@/graphql/generated";

export const usePopulateStore = () => {
  const { data } = useSession();
  const { setUser, user } = useGlobalContext();
  useGetUserQuery({
    variables: { email: data?.user?.email },
    skip: !data || !user,
    onCompleted({ users }) {
      const user = users[0];
      setUser(user);
    },
  });
};
