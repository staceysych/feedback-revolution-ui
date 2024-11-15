import SignUpCard from "@/app/components/SignUpCard";
import { Box, Container } from "@chakra-ui/react";

const SignIn = async () => {
  return (
    <Box bg={"brand.pink"}>
      <Container>
        <SignUpCard />
      </Container>
    </Box>
  );
};

export default SignIn;
