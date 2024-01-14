import { CardWrapper } from "@/components/auth/card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

type Props = {};

const ErrorCard = (props: Props) => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to Login">
      <div className="w-full items-center flex justify-center">
        <ExclamationTriangleIcon className="w-6 h-6 text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
