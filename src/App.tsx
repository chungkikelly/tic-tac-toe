import * as React from 'react';
import { Provider } from 'react-redux';

import { GameContainer } from './containers/GameContainer';
import store from './store'

export default class App extends React.Component {
    public render = () => {
        return (
            <Provider store={store}>
                <GameContainer />
            </Provider>
        );
    }
}