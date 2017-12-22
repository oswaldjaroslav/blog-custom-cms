import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu';

export interface MenuBarProps {
    handleMenuClick: Function;
}

export const MenuBar = (props: MenuBarProps) =>
    <div className="menu-bar" >
        <AppBar 
        title="Admin-Dashoboard" 
        iconElementLeft={
            <IconButton onClick={() => { props.handleMenuClick() }} >
                <NavigationMenuIcon/>
            </IconButton>
        } />
    </div>
