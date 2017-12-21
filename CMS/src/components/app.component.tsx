import * as React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/root.reducer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { MenuBar } from './menu-bar.component';
import { DrawerComponent } from './draver.component';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export interface AppState {
    drawerOpened?: boolean;
}

export class App extends React.Component<{}, AppState> {

    constructor(props: any) {
        super(props)
        this.state = {
            drawerOpened: false
        }
    }

    handleMenuClick = () => {
        this.setState({
            drawerOpened: !this.state.drawerOpened
        })
    }

    render() {
        const { drawerOpened } = this.state;
        return (
            <Provider store={createStoreWithMiddleware(rootReducer)} >
                <MuiThemeProvider>
                    <div className="app-component" >
                        <MenuBar handleMenuClick={this.handleMenuClick} />
                        <DrawerComponent 
                        open={drawerOpened} 
                        onRequestChange={(open: boolean) => {this.setState({drawerOpened: open})}} />
                    </div>
                </MuiThemeProvider>
            </Provider>
        )
    }
}