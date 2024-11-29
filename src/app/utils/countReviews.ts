import { Review } from "@/app/types/common";

export const countReviews = (reviews: Review[]) => {
  const totalReviews = reviews.length;
  const counts = [0, 0, 0, 0, 0];
  reviews.forEach(({ rating }) => {
    const roundedRating = Math.ceil(rating);
    if (roundedRating >= 1 && roundedRating <= 5) {
      counts[roundedRating - 1]++;
    }
  });

  return {
    counts,
    totalReviews,
  };
};
