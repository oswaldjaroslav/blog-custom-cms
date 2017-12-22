import * as React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

interface DrawerProps extends RouteComponentProps<any> {
    open: boolean;
    onRequestChange(open: boolean): any;
}

class DrawerBase extends React.Component<DrawerProps> {

    menuItemClick = (url: string) => {
        const { onRequestChange, history } = this.props;
        onRequestChange(false);
        history.push(url);
    }

    render() {
        const { open, onRequestChange } = this.props;
        return (
            <Drawer 
            docked={false} 
            open={open} 
            onRequestChange={onRequestChange}>
                <MenuItem 
                onClick={() => { this.menuItemClick('/admin/articles') }} >
                    Articles
                </MenuItem>
            </Drawer>
        )
    }
}

export const DrawerComponent = withRouter(DrawerBase)