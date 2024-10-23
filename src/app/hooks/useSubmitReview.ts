import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { ReviewData } from "@/app/types/dashboard";
import { REVIEWS_API } from "@/app/utils";

interface IUseSubmitReview {
  projectId: string;
  reviewData: ReviewData;
}

export const useSubmitReview = (onCompleted: () => void) => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({ projectId, reviewData }: IUseSubmitReview) => {
    setLoading(true);

    const res = await fetch(`${REVIEWS_API}/${projectId}`, {
      method: "POST",
      body: JSON.stringify({ reviewData }),
    });

    setLoading(false);
    onCompleted();
  };

  return { onSubmit, loading };
};
