import React from 'react';
import {connect, MapDispatchToProps} from 'react-redux';

const initialState = {text: ''};

type State = Readonly<typeof initialState>;

export class AddTodo extends React.Component<null, State> {
  render() {
    return null;
  }
}

export const connectedAddTodo = connect()(AddTodo);
