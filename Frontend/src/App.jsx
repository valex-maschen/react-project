import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import Navbar from './Components/Navbar/Navbar';
import Main from './Pages/Main/Main';
import History from './Pages/History/History';
import ApiReducer from './Store/reducer/Reducer';

const store = createStore(ApiReducer, applyMiddleware(thunk));

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/history" component={History} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
