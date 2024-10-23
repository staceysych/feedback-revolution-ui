import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { WAITLIST_API } from "@/app/utils";

interface IUseSubmitWaitListEmail {
  email: string;
}

export const useSubmitWaitListEmail = (onCompleted: () => void) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ email }: IUseSubmitWaitListEmail) => {
    setLoading(true);

    const res = await fetch(WAITLIST_API, {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      toast({
        title: "You are already on the waitlist!",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "You have successfully joined the waitlist!",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }

    setLoading(false);
    onCompleted();
  };

  return { onSubmit, loading };
};
