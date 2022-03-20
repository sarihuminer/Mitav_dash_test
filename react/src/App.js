import React from 'react';
import './App.css';

import { Route } from 'react-router-dom'
import Users from './components/users';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <switch>
     <Route path="/new" component={NewSong} exact/>
   </switch> */}
        {/*   */}
        <Users></Users>
      </header>
    </div>
  );
}

export default App;
