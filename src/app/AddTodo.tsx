import React from 'react';
import {connect, MapDispatchToProps} from 'react-redux';

import {CardActions, CardContent} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import {AddTodoAction, AddTodoPayload} from '@src/store/actions';

type StateKeys = 'title' | 'description';
type State = Readonly<{[K in StateKeys]: string}>;
const initialState: State = {title: '', description: ''};

type DProps = {
  addTodo: (data: AddTodoPayload) => void;
};

export class AddTodo extends React.Component<DProps, State> {
  readonly state = initialState;

  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    if (name === 'title' || name === 'description')
      this.setState({[name]: value} as State);
  };

  handleAddTodo = () => {
    const {title, description} = this.state;
    if (title) this.props.addTodo({title, description});
  };
  render() {
    const {title, description} = this.state;
    return (
      <React.Fragment>
        <Card style={{width: '100%', minHeight: 200, marginBottom: 20}}>
          <CardContent>
            <TextField
              label="Título"
              name="title"
              value={title}
              onChange={this.handleInput}
              style={{width: '100%'}}
              margin="normal"
            />
            <TextField
              label="Descripción"
              name="description"
              value={description}
              onChange={this.handleInput}
              style={{width: '100%'}}
              margin="normal"
              multiline={true}
            />
            <CardActions>
              <Button
                style={{display: 'flex', marginLeft: 'auto'}}
                onClick={this.handleAddTodo}>
                Añadir Todo
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

const mapDispatchToProp: MapDispatchToProps<DProps, void> = dispatch => ({
  addTodo: (data: AddTodoPayload) => dispatch(AddTodoAction(data)),
});
export const ConnectedAddTodo = connect(
  null,
  mapDispatchToProp,
)(AddTodo);
