import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import 'antd/dist/antd.css'
import useGlobalState from './Global/useGlobalState'
import Context from './Global/context'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';


Amplify.configure(config)
// EC2 Instance: 18.190.119.49
const client = new ApolloClient({
    uri: 'http://18.190.119.49:4000',
});

const Index = () => {
    const store = useGlobalState()
    return (
        <Context.Provider value={store}>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </Context.Provider>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
