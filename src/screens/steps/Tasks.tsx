import { Box, Container, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { fetchRemoteData } from "../../api/api";
import Loader from "../../components/loader/Loader";
import ModalView from "../../components/modal/Modal";
import Steps from "../../components/steps/Steps";
import SuccessView from "../../components/successView/SuccessView";
import { checkStatus } from "../../utils/helper";
import { progressData } from "../../utils/progressData";

const Tasks = () => {
  const [steps, setSteps] = React.useState(progressData);
  const [loading, setLoading] = React.useState(false);
  const [quote, setQuote] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    const savedSteps = localStorage.getItem("step-progress");
    if (savedSteps) {
      setSteps(JSON.parse(savedSteps));
    }
  }, []);

  React.useEffect(() => {
    const lastStepTasks = steps[steps.length - 1].tasks;
    const lastStepComplete = checkStatus(lastStepTasks);
    if (lastStepComplete) {
      onOpen();
      getRandomQuote();
    }
  }, [steps, onOpen]);

  const getRandomQuote = async () => {
    setLoading(true);
    try {
      const qouteData = await fetchRemoteData(
        "https://uselessfacts.jsph.pl/random.json"
      );
      setQuote(qouteData.text);
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      console.log(e.message);
    }
  };

  const markAsComplete = (stepIndex: number, taskIndex: number) => {
    const newSteps = [...steps];
    newSteps[stepIndex].tasks[taskIndex].completed = true;
    setSteps(newSteps);
    localStorage.setItem("step-progress", JSON.stringify(newSteps));
  };

  return (
    <Container py="50px">
      <Heading mb="20px">My Progress</Heading>
      <Steps stepsData={steps} markAsComplete={markAsComplete} />
      <ModalView onClose={onClose} isOpen={isOpen}>
        <Box p="24px">
          {loading && (
            <Flex justifyContent="center">
              <Loader />
            </Flex>
          )}
          {quote && !loading && <SuccessView quote={quote} />}
        </Box>
      </ModalView>
    </Container>
  );
};

export default Tasks;
