"use client";

import { logOut } from "@/app/server/actions";
import { Button } from "@chakra-ui/react";
import React from "react";

import { useLoader } from "@/app/providers/LoaderProvider";

const Logout = () => {
  const { setIsPageLoading } = useLoader();

  const handleLogOut = async () => {
    try {
      setIsPageLoading(true);
      await logOut();
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsPageLoading(false);
    }
  };
  return (
    <form action={handleLogOut}>
      <Button
        variant={"text"}
        color="brand.text"
        type="submit"
        _hover={{
          textDecoration: "underline",
        }}
        p={0}
      >
        Log out
      </Button>
    </form>
  );
};

export default Logout;
