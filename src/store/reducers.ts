import {ReducersMapObject} from 'redux';

import {todosReducer} from '@src/store/reducer';

export const reducers: ReducersMapObject = {
  todos: todosReducer as any,
};
