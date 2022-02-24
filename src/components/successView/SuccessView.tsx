import { CheckIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const SuccessView = ({quote}: {quote: string}) => {
  return (
    <Box>
      <Flex
        boxSize="36px"
        borderRadius="18px"
        bg="green.500"
        justifyContent="center"
        alignItems="center"
        margin="0 auto"
      >
        <CheckIcon boxSize="20px" color="white" />
      </Flex>
      <Text textAlign="center" fontWeight={500} mt="10px" mb="20px">
        Tasks Completed!
      </Text>
      <Text fontSize="18px" fontWeight={600} textAlign="center">
        <Text as="q">{quote}</Text>
      </Text>
    </Box>
  );
};

export default SuccessView;
