import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Workout from './pages/Workout';
import Detail from './pages/Detail';

import theme from './styles/theme/theme';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Switch>
            <Route exact path={['/', '/workout']}>
              <Workout />
            </Route>
            <Route exact path="/detail">
              <Detail />
            </Route>
          </Switch>
        </Layout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
