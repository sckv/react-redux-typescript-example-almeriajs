import * as React from 'react';
import {hot} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {Link, Router} from '@reach/router';
import {store, AppStoreState} from '@src/store';

import {InjectGlobal} from './styled';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

class App extends React.Component {
  render() {
    return (
      <>
        <MuiThemeProvider theme={theme}>
          {/* <Provider store={store}> */}
          <Router>asdasdasd</Router>
          {/* </Provider> */}
        </MuiThemeProvider>
        <InjectGlobal />
      </>
    );
  }
}

const Application = hot(module)(App);

export {Application};
