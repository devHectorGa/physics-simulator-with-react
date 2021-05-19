import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './global.styles';

import Header from './components/header';

const HomePage = lazy(() => import('./pages/homePage'));
const ScenePage = lazy(() => import('./pages/scenePage'));

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={'Cargando...'}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/scene" component={ScenePage} />
        </Suspense>
      </Switch>
    </>
  );
}

export default App;
