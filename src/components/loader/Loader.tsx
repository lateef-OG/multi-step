import { Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="green.500"
      size="xl"
    />
  );
};

export default Loader;
