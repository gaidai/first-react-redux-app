import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dropdown from './Dropdown';
import {Provider} from 'react-redux'
import reducer from './reducers';
import './index.css';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

const history = createHistory();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter  history={history}>  
			<div>
				<Route exact path="/" component={App} />   
				<Route path="/dropdown" component={Dropdown} />  
			</div>
				  
		</ConnectedRouter >
	</Provider>   
	, 
	document.getElementById('root'));



// const addTrackBtn = document.getElementsByClassName("addTrack")[0];
// const trackInput = document.getElementsByClassName("trackInput")[0]; 
// const list = document.querySelectorAll("ul.list")[0];

// store.subscribe(() => {  
//  console.log("subscribe", store.getState());
//  list.innerHTML = '';
//  trackInput.value = '';
//  store.getState().forEach( track => {
//      const li = document.createElement('li');
//      li.textContent = track;
//      list.appendChild(li);
//  });
// });


// addTrackBtn.addEventListener('click', (e) => {
//     store.dispatch({ type: 'ADD_TRACK', payload: trackInput.value });
// });







// ReactDOM.render(
//  <HashRouter history={Route.hashHistory}>  
//      <div>
//          <Route exact path="/" component={App} />   
//          <Route path="/dropdown" component={Dropdown} />  
//      </div>
		  
//  </HashRouter>, 
//  document.getElementById('root'));

// change HashRouter /Browser - static/dynamic