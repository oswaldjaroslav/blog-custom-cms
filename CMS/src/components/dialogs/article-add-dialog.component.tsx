import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

interface ArticleAddDialogProps {
    open: boolean;
    closeDialog(): any;
}

interface ArticleAddState {

}

export class ArticleAddDialog extends React.Component<ArticleAddDialogProps, ArticleAddState> {

    constructor(props: ArticleAddDialogProps) {
        super(props);
    }

    render() {
        const { open, closeDialog } = this.props;
        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={closeDialog}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              keyboardFocused={true}
            />,
          ];
        return (
            <div className="article-add-dialog-component" >
                <Dialog 
                open={open}
                actions={actions} >

                </Dialog>
            </div>
        )
    }
}