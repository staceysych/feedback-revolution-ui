import SignInCard from "@/app/components/SignInCard";
import { Box, Container } from "@chakra-ui/react";

const SignIn = async () => {
  return (
    <Box bg={"brand.pink"}>
      <Container>
        <SignInCard />
      </Container>
    </Box>
  );
};

export default SignIn;
