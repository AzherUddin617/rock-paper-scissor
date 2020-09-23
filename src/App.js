import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import LogoCard from './components/LogoCard/LogoCard';

function App() {
  return (
    <div className="App">
      <Header score={23} />

      <LogoCard />

    </div>
  );
}

export default App;
