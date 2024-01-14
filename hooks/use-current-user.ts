import { useSession } from "next-auth/react";

export const useCurrectUser = () => {
  const session = useSession();

  return session.data?.user;
};
