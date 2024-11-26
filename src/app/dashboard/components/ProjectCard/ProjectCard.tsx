import { DASHBOARD } from "@/app/utils";
import { Button, Card, CardBody, CardFooter, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const ProjectCard = ({
  name,
  projectId,
}: {
  name: string;
  projectId: string;
}) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <CardBody display={"flex"} alignItems={"center"}>
        <Heading size="md">{name}</Heading>
      </CardBody>

      <CardFooter>
        <Button>
          <Link href={`${DASHBOARD}/${projectId}/reviews`} passHref>
            View
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
