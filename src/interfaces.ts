export interface TaskInterface {
  task: string;
  completed: boolean;
}

export interface StepInterface {
  step: string;
  tasks: TaskInterface[];
}