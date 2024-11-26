import DashboardTabs from "@/app/dashboard/components/DashboardTabs";

const ReviewsPage = ({ params }: { params: { projectId: string } }) => {
  const { projectId } = params;
  return <DashboardTabs projectId={projectId} tabIndex={2} />;
};

export default ReviewsPage;
