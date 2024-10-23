import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { IIdeaData } from "@/app/types/dashboard";
import { IDEAS_API } from "@/app/utils";

interface IUseSubmitIdea {
  projectId: string;
  ideaData: IIdeaData;
}

export const useSubmitIdea = (onCompleted: () => void) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ projectId, ideaData }: IUseSubmitIdea) => {
    setLoading(true);

    const res = await fetch(`${IDEAS_API}/${projectId}`, {
      method: "POST",
      body: JSON.stringify({ ideaData }),
    });

    setLoading(false);
    onCompleted();
  };

  return { onSubmit, loading };
};
