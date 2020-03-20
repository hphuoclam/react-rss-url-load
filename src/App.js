import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import './App.css';
// import { init as firebaseInit } from './firebase';
import Routes from './routes';
import configureStore from './config/configureStore';
import themes from './config/materialConfig';
import { createBrowserHistory } from 'history';
import Layout from "./pages/layout";

const customHistory = createBrowserHistory();

class App extends React.Component {

  constructor(props) {
    super(props);
    // firebaseInit();
    this.store = configureStore();
  }

  componentDidMount() {
  }


  render() {
    return (
      <Provider store={this.store}>
        <ThemeProvider theme={themes}>
          <Router history={customHistory}>
            <Layout>
              <Routes />
            </Layout>
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}


export default App;
