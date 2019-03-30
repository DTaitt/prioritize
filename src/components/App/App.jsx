import Header from '../Header/Header';
import Main from '../Main/Main';
import Matrix from '../Matrix/Matrix';
import React from 'react';
import Todos from '../ToDos/ToDos';

const App = () => (
  <>
    <Header />
    <Main>
      <Todos />
      <Matrix />
    </Main>
  </>
)

export default App;
