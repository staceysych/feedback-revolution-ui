import { Text } from "@chakra-ui/react";

export const highlightText = ({
  text,
  color,
  fontWeight,
}: {
  text: string;
  color: string;
  fontWeight?: number;
}) => {
  const parts = text.split("*");

  return parts.map((part, index) => {
    if (index % 2 !== 0) {
      return (
        <Text
          as={"span"}
          background={color}
          key={index}
          fontWeight={fontWeight}
          p={1}
        >
          {part}
        </Text>
      );
    }
    return part;
  });
};
