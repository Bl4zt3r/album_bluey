import {useState} from 'react';

import ButtonsView from './ButtonsView';
const inicio = () => {
    return (
      
        <div className="App">
          <h2> hola </h2>
          <header className="App-header">
            <h1>Laminas</h1>
          </header>
          <main>
            <ButtonsView />
          </main>
        </div>
      );
}
export default inicio;