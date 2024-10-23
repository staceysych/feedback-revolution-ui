import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { IIssueData } from "@/app/types/dashboard";
import { ISSUES_API } from "@/app/utils";

interface IUseSubmitIssue {
  projectId: string;
  issueData: IIssueData;
}

export const useSubmitIssue = (onCompleted: () => void) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ projectId, issueData }: IUseSubmitIssue) => {
    setLoading(true);

    const res = await fetch(`${ISSUES_API}/${projectId}`, {
      method: "POST",
      body: JSON.stringify({ issueData }),
    });

    setLoading(false);
    onCompleted();
  };

  return { onSubmit, loading };
};
