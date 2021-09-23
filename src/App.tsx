import React from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { Globalstyle } from './styles/global';

function App() {
  return (
    <>
      <Header/>
      <Dashboard/>
      <Globalstyle/>
    </>
  );
}

export default App;
