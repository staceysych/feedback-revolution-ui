"use client";

import { logOut } from "@/app/server/actions";
import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

const Logout = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogOut = async () => {
    setIsLoading(true);
    try {
      await logOut();
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsLoading(false);
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
      isLoading={isLoading}
      loadingText="Logging out..."
    >
      Log out
    </Button>
  );
};

export default Logout;
