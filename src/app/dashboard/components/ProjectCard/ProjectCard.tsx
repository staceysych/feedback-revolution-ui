import { DASHBOARD } from "@/app/utils";
import { Button, Card, CardBody, CardFooter, Heading, IconButton, useToast, Flex } from "@chakra-ui/react";
import { AiOutlineCopy } from "react-icons/ai";
import Link from "next/link";
import React from "react";

const ProjectCard = ({
  name,
  projectId,
}: {
  name: string;
  projectId: string;
}) => {
  const toast = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(projectId);
    toast({
      title: "Project ID copied",
      status: "success",
      duration: 2000,
      position: "top",
    });
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <CardBody display={"flex"} alignItems={"center"}>
        <Flex alignItems="center" gap={2}>
          <Heading size="md">{name}</Heading>
          <IconButton
            aria-label="Copy project ID"
            icon={<AiOutlineCopy />}
            size="sm"
            onClick={handleCopy}
            variant="ghost"
          />
        </Flex>
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
