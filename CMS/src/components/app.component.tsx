import * as React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/root.reducer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';

import { DrawerComponent } from './drawer.component';
import { MenuBar } from './menu-bar.component';
import { HomePage } from './home-page.component';
import { ArticleList } from '../containers/articles-list.container';
import { LoginPage } from '../containers/login.container';

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
                        <BrowserRouter>
                            <div>
                                <DrawerComponent 
                                open={drawerOpened} 
                                onRequestChange={(open: boolean) => { this.setState({ drawerOpened: open }) }} />
                                <MenuBar handleMenuClick={this.handleMenuClick} />
                                <Switch>
                                    <Route exact path="/admin" component={HomePage} />
                                    <Route path="/admin/articles" component={ArticleList} />
                                    <Route path="/admin/login" component={LoginPage} />
                                </Switch>
                            </div>
                        </BrowserRouter>
                    </div>
                </MuiThemeProvider>
            </Provider>
        )
    }
}