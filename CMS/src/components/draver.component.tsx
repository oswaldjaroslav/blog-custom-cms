import * as React from 'react';
import Drawer from 'material-ui/Drawer';

export interface DrawerComponentProps {
    open: boolean;
    onRequestChange: Function;
}

export const DrawerComponent = (props: DrawerComponentProps) =>
    <Drawer 
    open={props.open}
    docked={false}
    onRequestChange={(open: boolean) => { props.onRequestChange(open) }} >

    </Drawer>