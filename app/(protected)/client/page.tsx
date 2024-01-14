"use client"
import UserInfo from "@/components/user-info";
import { useCurrectUser } from "@/hooks/use-current-user";

//* For server components
// import { currentUser } from "@/lib/auth";

type Props = {};

const ClientPage = (props: Props) => {
  const user = useCurrectUser();
  return <UserInfo label="◇ Client component" user={user} />;
};

export default ClientPage;
