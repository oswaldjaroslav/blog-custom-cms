import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu';
import { withRouter, RouteComponentProps } from 'react-router-dom';

export interface MenuBarProps extends RouteComponentProps<any> {
    handleMenuClick(): any
}

const MenuBarBase = (props: MenuBarProps) =>
    <div className="menu-bar" >
        <AppBar 
        title={
            <span 
            style={{
                cursor: 'pointer'
            }}
            onClick={() => { props.history.push('/admin') }} >
                Admin-Dashboard
            </span>
        }
        iconElementLeft={
            <IconButton onClick={ props.handleMenuClick } >
                <NavigationMenuIcon/>
            </IconButton>
        } />
    </div>

export const MenuBar = withRouter(MenuBarBase);
