import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/root.reducer';

const createStoreWithMiddleware = applyMiddleware()(createStore);

export class App extends React.Component {
    render() {
        return (
            <Provider store={createStoreWithMiddleware(rootReducer)} >
                <div>
                    <h1>This Is My React App</h1>
                </div>
            </Provider>
        )
    }
}