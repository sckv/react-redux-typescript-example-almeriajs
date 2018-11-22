import invoke from 'lodash/invoke';
import React from 'react';
import {connect, MapDispatchToProps, MapStateToProps} from 'react-redux';
import styled from 'styled-components';

import {ConnectedAddTodo} from '@src/app/AddTodo';
import {ThemedTodo} from '@src/app/Todo';
import {AppStoreState} from '@src/store';
import {RemoveTodoAction} from '@src/store/actions';
import {TodoType} from '@src/store/reducer';

const initialState = {text: ''};

type State = Readonly<typeof initialState>;

type SProps = {
  todos: TodoType[];
};
type DProps = {
  removeTodo: (id: number) => void;
};

export class Home extends React.Component<SProps & DProps, State> {
  handleDelete = (id: number) => () => {
    this.props.removeTodo(id);
  };

  render() {
    const {todos} = this.props;

    return (
      <>
        <ConnectedAddTodo />
        <ExpandWrapper>
          {invoke(todos, 'map', (todo: TodoType) => (
            <ThemedTodo
              key={todo.id}
              {...todo}
              handleDelete={this.handleDelete(todo.id)}
            />
          ))}
        </ExpandWrapper>
      </>
    );
  }
}

const mapStateToProps: MapStateToProps<SProps, any, AppStoreState> = state => ({
  todos: state.todos,
});

const mapDispatchToProps: MapDispatchToProps<DProps, any> = dispatch => ({
  removeTodo: (id: number) => dispatch(RemoveTodoAction(id)),
});
export const ConnectedHome = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

const ExpandWrapper = styled.div`
  width: 100%;
`;
