import { postWaitListEmail } from "@/app/api/waitList";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

interface IUseSubmitWaitListEmail {
  email: string;
}

export const useSubmitWaitListEmail = (onCompleted: () => void) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ email }: IUseSubmitWaitListEmail) => {
    setLoading(true);
    const { err } = await postWaitListEmail(email);
    setLoading(false);
    onCompleted();
    if (err && err === 11000) {
      toast({
        title: "You are already on the waitlist!",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }

    if (!err) {
      toast({
        title: "You have successfully joined the waitlist!",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return { onSubmit, loading };
};
