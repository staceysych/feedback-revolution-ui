"use client";

import { logOut } from "@/app/server/actions";
import { Button } from "@chakra-ui/react";
import React from "react";

const Logout = () => {
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error: any) {
      console.error(error);
    }
  };
  return (
    <Button
      variant={"text"}
      color="brand.text"
      type="submit"
      _hover={{
        textDecoration: "underline",
      }}
      p={0}
      onClick={handleLogOut}
    >
      Log out
    </Button>
  );
};

export default Logout;
