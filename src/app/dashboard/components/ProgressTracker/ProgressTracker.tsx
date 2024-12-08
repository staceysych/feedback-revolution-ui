import { IdeaStatus, ProgressSteps } from "@/app/types/common";
import {
  Box,
  Flex,
  Circle,
  Text,
  VStack,
  Button,
  Stack,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

interface ProgressTrackerProps {
  progress: ProgressSteps;
}

const ping = keyframes`
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const ProgressTracker = ({ progress }: ProgressTrackerProps) => {
  const progressValues = Object.values(ProgressSteps);
  const currentProgressIndex = progressValues.indexOf(progress);
  const [selectedProgress, setSelectedProgress] = useState<
    ProgressSteps | undefined
  >(undefined);

  return (
    <Stack alignItems={"center"} justifyContent={"center"} gap={2}>
      <Stack width={"fit-content"} alignItems={"center"}>
        <Text fontSize={"sm"} opacity={"0.4"} textAlign={"center"}>
          You can click on a circle to update the progress of the idea
        </Text>
        <Flex width={"fit-content"} justify="center">
          {progressValues.map((data, index) => {
            const isDisabled = index > currentProgressIndex;
            const isActive = index === currentProgressIndex;
            const isDone = isActive && progress === ProgressSteps.Done;
            const hasCompleted = (!isDisabled && !isActive) || isDone;
            const isSelected = selectedProgress === data;

            return (
              <Flex minW={"50px"} key={index} flexGrow={1} align="center">
                <VStack
                  flexGrow={1}
                  spacing={1}
                  color="blue.500"
                  opacity={isDisabled && !isSelected ? 0.5 : 1}
                  cursor={"pointer"}
                  onClick={() => setSelectedProgress(data)}
                >
                  {isActive && !isDone && (
                    <>
                      <Circle size="30px" border="2px" borderColor="blue.500">
                        <Box position="relative" h="8px" w="8px">
                          <Box
                            position="absolute"
                            animation={`${ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite`}
                            h="full"
                            w="full"
                            rounded="full"
                            bg="blue.500"
                            opacity={0.75}
                          />
                          <Box
                            position="relative"
                            rounded="full"
                            h="8px"
                            w="8px"
                            bg="blue.500"
                          />
                        </Box>
                      </Circle>
                      <Text
                        fontSize="xs"
                        fontWeight={isSelected ? "bold" : "normal"}
                      >
                        {data}
                      </Text>
                    </>
                  )}

                  {hasCompleted && (
                    <>
                      <Circle
                        size="30px"
                        bg={isDone ? "green.500" : "blue.500"}
                        color="white"
                      >
                        <AiOutlineCheck />
                      </Circle>
                      <Text
                        fontSize="xs"
                        fontWeight={isSelected ? "bold" : "normal"}
                      >
                        {data}
                      </Text>
                    </>
                  )}

                  {isDisabled && (
                    <>
                      <Circle size="30px" border="2px" borderColor="gray.300" />
                      <Text
                        fontSize="xs"
                        fontWeight={isSelected ? "bold" : "normal"}
                      >
                        {data}
                      </Text>
                    </>
                  )}
                </VStack>

                {index < progressValues.length - 1 && (
                  <Box w="30px" h="2px" bg="gray.300" flexGrow={1} mb="20px" />
                )}
              </Flex>
            );
          })}
        </Flex>
      </Stack>
      <Button size="sm" isDisabled={!selectedProgress}>
        Update Progress
      </Button>
    </Stack>
  );
};

export default ProgressTracker;
