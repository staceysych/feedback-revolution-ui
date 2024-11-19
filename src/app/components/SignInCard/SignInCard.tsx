"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Text,
  Stack,
  FormControl,
  Input,
  FormLabel,
  Divider,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { socialLogin, credentialLogin } from "@/app/server/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "@/app/assets/logo.svg";
import Image from "next/image";

interface ISignInDetails {
  email: string;
  password: string;
}

const SignInCard = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISignInDetails>();

  const onLogin = async (data: ISignInDetails) => {
    try {
      const response = await credentialLogin(data);

      if (response) {
        router.push("/dashboard");
      } else {
        setError(response.error.message);
      }
    } catch (error: any) {
      console.log(error);
      setError("Check your credentials and try again");
    }
  };

  const handleNavigateToSignUp = () => {
    router.push("/sign-up");
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Card width={500} borderRadius={20}>
        <Stack gap={0}>
          <CardHeader
            color={"brand.text"}
            display={"flex"}
            justifyContent={"center"}
            flexDir={"column"}
            alignItems={"center"}
            p={{ base: 6, md: 12 }}
            pb={0}
          >
            <Stack gap={2} alignItems={"center"}>
              <Image src={Logo} alt="logo icon" priority={true} width={40} />
              <Text fontSize={"5xl"}>Sign In</Text>
            </Stack>
            <Text color={"gray.500"}>Welcome back</Text>
          </CardHeader>
        </Stack>

        <CardBody p={{ base: 6, md: 12 }}>
          <Text color={"red.500"} textAlign={"center"}>
            {error}
          </Text>
          <form onSubmit={handleSubmit(onLogin)}>
            <Stack gap={8}>
              <FormControl isInvalid={!!errors.email}>
                <FormLabel
                  htmlFor="email"
                  color={"brand.text"}
                  fontWeight={"bold"}
                >
                  Email
                </FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  borderColor={"brand.text"}
                  _hover={{ borderColor: "brand.textHover" }}
                  color={"brand.text"}
                  height="48px"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.password}>
                <FormLabel
                  htmlFor="password"
                  color={"brand.text"}
                  fontWeight={"bold"}
                >
                  Password
                </FormLabel>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  borderColor={"brand.text"}
                  _hover={{ borderColor: "brand.textHover" }}
                  color={"brand.text"}
                  height="48px"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
              <Button type="submit" height={"54px"}>
                Sign In
              </Button>
            </Stack>
          </form>
          <form action={socialLogin}>
            <Button
              type="submit"
              name="action"
              value="google"
              variant={"outline"}
              width={"full"}
              height={"54px"}
              mt={4}
            >
              Login with Google
            </Button>
          </form>
        </CardBody>

        <Divider my={4} />
        <CardFooter display={"flex"} justifyContent={"center"} pt={0}>
          <Button
            variant={"text"}
            color={"brand.text"}
            _hover={{
              textDecoration: "underline",
            }}
            onClick={handleNavigateToSignUp}
          >
            Don't have an account? Sign up
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default SignInCard;
