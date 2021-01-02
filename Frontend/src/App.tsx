import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Main from './Pages/Main/Main';
import History from './Pages/History/History';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/history" component={History} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
