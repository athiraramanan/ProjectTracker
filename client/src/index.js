import React from 'react';
import ReactDom from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './components/App';
import reducers from './reducers';
import reduxThunk from 'redux-thunk'

// compose , applyMiddleware , composeEnhancers are used for redux dev extention tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(reduxThunk))
);
const root = ReactDom.createRoot(document.querySelector('#root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>
)