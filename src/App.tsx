import * as React from 'react';
import {hot} from 'react-hot-loader';
import {Provider} from 'react-redux';

import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {ConnectedHome} from '@src/app/Home';
import {store} from '@src/store';

import {AppWrapper, InjectGlobal} from './styled';

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
          <Provider store={store}>
            <AppWrapper>
              <ConnectedHome />
            </AppWrapper>
          </Provider>
        </MuiThemeProvider>
        <InjectGlobal />
      </>
    );
  }
}

const Application = hot(module)(App);

export {Application};
