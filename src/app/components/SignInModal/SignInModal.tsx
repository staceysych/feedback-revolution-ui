"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Stack,
  FormControl,
  Input,
  FormLabel,
  Divider,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { socialLogin, credentialLogin } from "@/app/server/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ISignInDetails {
  email: string;
  password: string;
}

const SignInModal = ({ isOpen, onClose }: SignInModalProps) => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISignInDetails>();

  const handleSubmitCredentials = async (data: ISignInDetails) => {
    try {
      const response = await credentialLogin(data);
      console.log({ response });

      if (response) {
        router.push("/dashboard");
      } else {
        setError(response.error.message);
      }
    } catch (error: any) {
      console.log("error", error);
      setError("Check your credentials and try again");
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Stack gap={0}>
          <ModalHeader
            fontSize={"2xl"}
            color={"brand.text"}
            display={"flex"}
            justifyContent={"center"}
            pb={0}
          >
            Sign In
          </ModalHeader>
          <Text textAlign={"center"} color={"gray.500"}>
            Welcome back
          </Text>
        </Stack>

        <ModalCloseButton />
        <ModalBody>
          <Text color={"red.500"} textAlign={"center"}>
            {error}
          </Text>
          <form onSubmit={handleSubmit(handleSubmitCredentials)}>
            <Stack gap={4}>
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
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
              <Button type="submit">Login</Button>
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
            >
              Login with Google
            </Button>
          </form>
        </ModalBody>

        <Divider my={4} />
        <ModalFooter display={"flex"} justifyContent={"center"} pt={0}>
          <Button variant={"text"} color={"brand.text"}>
            Don't have an account? Sign up
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SignInModal;
