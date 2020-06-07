/**
 * Tasks avaiable states.
 */
export enum TasksState {
  TO_DO = 'todo',
  DONE = 'done',
}

/**
 * Request dto params to manage tasks.
 * @author Daniel Mejia
 */
export class TasksRequestParams {
  /**
   * The task description.
   */
  description: string;

  /**
   * The state of tasks.
   */
  state: TasksState;

  /**
   * The identifier of owner of tasks.
   */
  userId: number;
}