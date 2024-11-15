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
import { socialLogin } from "@/app/server/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Logo from "@/app/assets/logo.svg";
import Image from "next/image";

interface ISignUpDetails {
  email: string;
  password: string;
  userName: string;
}

const SignUpCard = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISignUpDetails>();

  const onRegister = async (data: ISignUpDetails) => {
    try {
      setLoading(true);
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        router.push("/dashboard");
      }

      if (response.status === 409) {
        setError("User already exists");
      }
    } catch (error: any) {
      setError("Something went wrong. Please try again");
    } finally {
      setLoading(false);
    }
  };

  const handleNavigateToSignIn = () => {
    router.push("/sign-in");
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
            p={12}
            pb={0}
          >
            <Stack gap={2} alignItems={"center"}>
              <Image src={Logo} alt="logo icon" priority={true} width={40} />
              <Text fontSize={"5xl"}>Sign Up</Text>
            </Stack>
            <Text color={"gray.500"}>Create an account</Text>
          </CardHeader>
        </Stack>

        <CardBody p={12}>
          <Text color={"red.500"} textAlign={"center"}>
            {error}
          </Text>
          <form onSubmit={handleSubmit(onRegister)}>
            <Stack gap={4}>
              <FormControl isInvalid={!!errors.userName}>
                <FormLabel
                  htmlFor="userName"
                  color={"brand.text"}
                  fontWeight={"bold"}
                >
                  User Name
                </FormLabel>
                <Input
                  placeholder="Enter your user name"
                  borderColor={"brand.text"}
                  _hover={{ borderColor: "brand.textHover" }}
                  color={"brand.text"}
                  height="48px"
                  {...register("userName", {
                    required: "User Name is required",
                  })}
                />
                <FormErrorMessage>{errors.userName?.message}</FormErrorMessage>
              </FormControl>
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
              <Button type="submit" isLoading={loading} height={"54px"}>
                Register
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
              mt={4}
              height={"54px"}
            >
              Register with Google
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
            onClick={handleNavigateToSignIn}
          >
            Already have an account? Sign in
          </Button>
        </CardFooter>
      </Card>
    </Box>
  );
};

export default SignUpCard;
