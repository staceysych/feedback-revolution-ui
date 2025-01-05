import SignInCard from "@/app/components/SignInCard";
import { Box, Container } from "@chakra-ui/react";
import { auth } from "@/auth";

const SignIn = async () => {
  const session = await auth();
  const isLoggedIn = !!session?.user
  return (
    <Box bg={"brand.pink"}>
      <Container>
        <SignInCard isLoggedIn={isLoggedIn} />
      </Container>
    </Box>
  );
};

export default SignIn;
