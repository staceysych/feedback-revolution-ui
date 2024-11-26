import { Text } from "@chakra-ui/react";

import DashboardTabs from "@/app/dashboard/components/DashboardTabs";

const IdeasPage = ({ params }: { params: { projectId: string } }) => {
  const { projectId } = params;
  return <DashboardTabs projectId={projectId} tabIndex={1} />;
};

export default IdeasPage;
