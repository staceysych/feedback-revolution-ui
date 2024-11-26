import { Text } from "@chakra-ui/react";

import DashboardTabs from "@/app/dashboard/components/DashboardTabs";

const ReviewsPage = ({ params }: { params: { projectId: string } }) => {
  const { projectId } = params;
  return <DashboardTabs projectId={projectId} tabIndex={0} />;
};

export default ReviewsPage;
