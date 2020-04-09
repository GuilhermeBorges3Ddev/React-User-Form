import React from 'react';
import { Container, Row} from 'reactstrap';

import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';

import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
  Inspired by:
  https://www.moneyman.es/client-area/#/registration
*/

function App() {
  return (
      <Container className="App bg-dark w-100 h-100 p-0">
      <Row className="d-flex w-100 justify-content-center align-items-center pt-4">
        <AppHeader />
      </Row>
      <Row className="d-flex w-100 justify-content-center align-items-center pt-4">
        <AppBody />
      </Row>
    </Container>
  );
}

export default App;

