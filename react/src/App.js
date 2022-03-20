import React from 'react';
import './App.css';
import Songs from './components/songs';
import NewSong from './components/newSong'
import  {Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="App-header">
   {/* <switch>
     <Route path="/new" component={NewSong} exact/>
   </switch> */}
     {/*   */}
     <Songs></Songs>
      </header>
    </div>
  );
}

export default App;
