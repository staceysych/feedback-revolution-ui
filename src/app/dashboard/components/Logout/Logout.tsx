"use client";

import { logOut } from "@/app/server/actions";
import { Button } from "@chakra-ui/react";
import React from "react";

const Logout = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleLogOut = async () => {
    try {
      setLoading(true);
      await logOut();
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
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
        isLoading={loading}
      >
        Log out
      </Button>
    </form>
  );
};

export default Logout;
