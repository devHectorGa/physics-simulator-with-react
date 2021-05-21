import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './global.styles';

import Header from './components/header';
import Spinner from './components/spinner';

import { HOME, ESCENA, CATAPULTA } from './helpers/LINKS';

const HomePage = lazy(() => import('./pages/homePage'));
const ScenePage = lazy(() => import('./pages/scenePage'));
const CatapultPage = lazy(() => import('./pages/catapultPage'));

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={Spinner}>
          <Route exact path={HOME} component={HomePage} />
          <Route exact path={CATAPULTA} component={CatapultPage} />
          <Route exact path={ESCENA} component={ScenePage} />
        </Suspense>
      </Switch>
    </>
  );
}

export default App;
