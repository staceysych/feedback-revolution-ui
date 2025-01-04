import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'FeedbackWidget Component | Feedback Evolution',
  description: 'Documentation for the FeedbackWidget component - the core component of Feedback Evolution that enables users to submit feedback, feature requests, and bug reports.',
  keywords: ['feedback widget', 'react component', 'user feedback', 'feature requests', 'bug reports'],
};

export default function FeedbackWidgetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 