import { Box } from "@chakra-ui/react";
import React from "react";
import { StepInterface } from "../../interfaces";
import { checkStatus } from "../../utils/helper";
import StepTitle from "./StepTitle";
import TaskItem from "./TaskItem";

interface StepsProps {
  stepsData: StepInterface[];
  markAsComplete: (arg1: number, arg2: number) => void;
}

const Steps = ({ stepsData, markAsComplete }: StepsProps) => {
  return (
    <Box>
      {stepsData.map((stepItem, stepIdx) => {
        const { step, tasks } = stepItem;
        const completed = checkStatus(tasks);
        let prevStepCompleted = false;
        if (stepIdx === 0) {
          prevStepCompleted = true;
        } else {
          prevStepCompleted = checkStatus(stepsData[stepIdx - 1].tasks);
        }
        return (
          <Box key={step + stepIdx}>
            <StepTitle
              number={stepIdx + 1}
              title={step}
              completedStatus={completed}
            />
            {tasks.map((taskItem, taskIdx) => {
              const {task, completed} = taskItem;
              return (
                <TaskItem
                  key={task + taskIdx}
                  text={task}
                  completed={completed}
                  disabled={!prevStepCompleted}
                  onChange={() => markAsComplete(stepIdx, taskIdx)}
                />
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export default Steps;
