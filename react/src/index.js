import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import rootReducer from './store/reducer'
import {Provider} from 'react-redux'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import NewSong from './components/newSong'

const store=createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
   <Router>
    <div>
      <Route path="/" component={App} exact/>
      <Route path="/new" component={NewSong} />
      <Link to="">Contact</Link>
    </div>
  </Router>
    
     </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
