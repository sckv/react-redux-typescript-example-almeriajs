import {Reducer} from 'react';

import {TodosActions, TodosActionTypes} from '@src/store/actions';

export interface TodoType {
  id: number;
  title: string;
  description: string;
}
export type TodosReducerState = TodoType[];

const initialState: TodosReducerState = [
  {
    id: 1,
    title: 'Mi primer todo',
    description: 'Aprender Typescript & React & Redux & Webpack',
  },
];

export const todosReducer: Reducer<TodosReducerState, TodosActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case TodosActionTypes.add:
      const {payload} = action;
      return state.concat({
        id: Math.ceil(Math.random() * 10000),
        description: payload.description,
        title: payload.title,
      });
    case TodosActionTypes.remove:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};
