import { logOut } from "@/app/server/actions";
import { Button } from "@chakra-ui/react";
import React from "react";

const Logout = () => {
  return (
    <form action={logOut}>
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
