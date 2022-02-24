import { CheckIcon } from "@chakra-ui/icons";
import { Flex, Heading, Text } from "@chakra-ui/react";

interface StepTitleProps {
  number: string | number;
  title: string;
  completedStatus: boolean;
}

const StepTitle = ({number, title, completedStatus}: StepTitleProps) => {
  return (
    <Flex alignItems="center" mb="15px" maxW="300px">
      <Flex
        boxSize="36px"
        borderRadius="18px"
        justifyContent="center"
        alignItems="center"
        bg={completedStatus ? "green.500" : "blue.900"}
        mr="15px"
      >
        <Text color="white" fontWeight={700}>
          {number}
        </Text>
      </Flex>
      <Heading fontSize="24px" mr="auto">{title}</Heading>
      {completedStatus && <CheckIcon boxSize="24px" color="green.500"/>}
    </Flex>
  );
};

export default StepTitle;
