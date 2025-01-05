import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Total Reviews Rating Component | Feedback Evolution',
  description: 'Learn how to implement the TotalReviewsRating component to display overall ratings and review counts for your project using Feedback Evolution.',
  keywords: ['total reviews', 'rating', 'review count', 'user feedback', 'react component']
};

export default function TotalReviewsRatingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 