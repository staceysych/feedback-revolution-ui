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
import { socialLogin } from "@/app/server/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  toggleRegister: () => void;
}

interface ISignUpDetails {
  email: string;
  password: string;
  userName: string;
}

const SignUpModal = ({ isOpen, onClose, toggleRegister }: SignUpModalProps) => {
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
    } catch (error: any) {
      setError("Something went wrong. Please try again");
    } finally {
      setLoading(false);
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
            Sign Up
          </ModalHeader>
          <Text textAlign={"center"} color={"gray.500"}>
            Create and account
          </Text>
        </Stack>

        <ModalCloseButton />
        <ModalBody>
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
              <Button type="submit" isLoading={loading}>
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
            >
              Register with Google
            </Button>
          </form>
        </ModalBody>

        <Divider my={4} />
        <ModalFooter display={"flex"} justifyContent={"center"} pt={0}>
          <Button
            variant={"text"}
            color={"brand.text"}
            _hover={{
              textDecoration: "underline",
            }}
            onClick={toggleRegister}
          >
            Already have an account? Sign in
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SignUpModal;
