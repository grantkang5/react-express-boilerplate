import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axiosConfig from './config/axios'
import client from './config/apollo-client'
import history from './config/history'
import { ApolloProvider } from 'react-apollo-hooks'; 
import { Router } from 'react-router-dom'

const Root = () => {
  useEffect(() => {
    axiosConfig()
  }, [])

  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <App />
      </Router>
    </ApolloProvider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
