import { Grid, GridItem, Text } from "@chakra-ui/react";

type ColumnType = string | React.ReactNode;

const ListHeaders = ({
  columns,
  templateColumns,
}: {
  columns: ColumnType[];
  templateColumns: string;
}) => {
  return (
    <Grid templateColumns={templateColumns} gap={4} px={3} pb={1}>
      {columns.map((column, index) => (
        <GridItem key={index}>
          {typeof column === "string" ? (
            <Text color="gray.500" fontSize="sm">
              {column}
            </Text>
          ) : (
            column
          )}
        </GridItem>
      ))}
    </Grid>
  );
};

export default ListHeaders;
