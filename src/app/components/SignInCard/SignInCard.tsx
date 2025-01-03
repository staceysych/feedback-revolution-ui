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
import { useEffect, useState } from "react";
import Logo from "@/app/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"

interface ISignInDetails {
  email: string;
  password: string;
}

const SignInCard = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISignInDetails>();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/dashboard");
    }
  }, [isLoggedIn]);

  const onLogin = async (data: ISignInDetails) => {
    try {
      setLoading(true);
      await credentialLogin(data);
    } catch (error: any) {
      setError("Check your credentials and try again");
    } finally {
      setLoading(false);
    }
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
              <Button type="submit" height={"54px"} isLoading={loading}>
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
          >
            <Link href="/sign-up">Don't have an account? Sign up</Link>
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default SignInCard;
