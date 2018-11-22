export enum TodosActionTypes {
  add = '[TODO] Add',
  remove = '[TODO] Remove',
}

export type Action<T, P> = {
  type: T;
  payload: P;
};
export type AddTodoPayload = {title: string; description: string};
export type AddTodo = Action<typeof TodosActionTypes.add, AddTodoPayload>;

export const AddTodoAction = (payload: AddTodoPayload): AddTodo => ({
  type: TodosActionTypes.add,
  payload,
});

export type RemoveTodo = Action<typeof TodosActionTypes.remove, number>;

export const RemoveTodoAction = (payload: number): RemoveTodo => ({
  type: TodosActionTypes.remove,
  payload,
});

export type TodosActions = AddTodo | RemoveTodo;
