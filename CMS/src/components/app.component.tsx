import * as React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/root.reducer';

import { ArticlesList } from '../containers/articles-list.container';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export class App extends React.Component {
    render() {
        return (
            <Provider store={createStoreWithMiddleware(rootReducer)} >
                <div>
                    <h1>This Is My React App</h1>
                    <ArticlesList/>
                </div>
            </Provider>
        )
    }
}