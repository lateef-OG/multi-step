import { Box, Checkbox } from "@chakra-ui/react";
import React, { ChangeEvent } from "react";

interface TaskItemProps {
  text: string;
  completed: boolean;
  disabled: boolean;
  onChange: () => void;
}

const TaskItem = ({ text, completed, disabled, onChange }: TaskItemProps) => {
  const handleChange = (e: ChangeEvent) => {
    e.preventDefault();
    onChange()
  }
  return (
    <Box pl="10px" mb="15px">
      <Checkbox
        isChecked={completed}
        disabled={disabled}
        onChange={handleChange}
        colorScheme='green'
      >
        {text}
      </Checkbox>
    </Box>
  );
};

export default TaskItem;
