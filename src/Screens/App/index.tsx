/* istanbul ignore file */
import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { certicicateRoute } from '../../Utils/routesConstants';
import { appSelector } from '../../Redux/App/App.selectors';
import { WholePage } from '../../Styles/GlobalStyles';
import { theme } from '../../Theme/index.theme';
import HomeScreen from '../Home';
import CertificateScreen from '../Certificate';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path={`/${certicicateRoute}/:id`} element={<CertificateScreen />} />
      </Routes>
    </Router>
  );
}

function App() {
  const { mode } = useSelector(appSelector);

  return (
    <ThemeProvider theme={theme[mode]}>
      <WholePage>
        <AppRouter />
      </WholePage>
    </ThemeProvider>
  );
}

export default App;
