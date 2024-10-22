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

    const res = await fetch("/api", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    console.log({ data });

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

    const err = 0;
    setLoading(false);
    onCompleted();
  };

  return { onSubmit, loading };
};
