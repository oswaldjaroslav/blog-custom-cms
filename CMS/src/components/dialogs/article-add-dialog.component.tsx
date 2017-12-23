import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';
import { FlexParrent, FlexInputField } from '../../styled.components';
import { TextInput } from '../form-fields.component';
import { ArticleType } from '../../types/article.type';

interface ArticleAddDialogProps extends InjectedFormProps {
    open: boolean;
    closeDialog(): any;
}

interface ArticleAddState {

}

export class ArticleAddDialog extends React.Component<ArticleAddDialogProps, ArticleAddState> {

    constructor(props: ArticleAddDialogProps) {
        super(props);
    }

    handleSubmit = (data: ArticleType) => {
        if (this.props.valid) {

        } else {
            this.props.touch();
        }
    }

    render() {
        const { open, closeDialog, handleSubmit } = this.props;
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
              onClick={handleSubmit(this.handleSubmit)}
            />,
          ];
        return (
            <div className="article-add-dialog-component" >
                <Dialog 
                open={open}
                actions={actions} >
                    <form onSubmit={handleSubmit(this.handleSubmit)} >
                        <FlexParrent wrap="true" >
                            <FlexInputField>
                                <Field 
                                name="title"
                                component={TextInput}
                                label="Title" />
                            </FlexInputField>
                            <FlexInputField>
                                <Field 
                                name="author" 
                                component={TextInput} 
                                label="Author" />
                            </FlexInputField>
                        </FlexParrent>
                    </form>
                </Dialog>
            </div>
        )
    }
}

const validate = (values: ArticleType): any => {
    const errors: any = {};
    if (!values.title) {
        errors.title = 'Required!';
    }
    if (!values.author) {
        errors.author = "Required!";
    }
    return errors;
}

export default reduxForm<any, any>({
    form: 'add-article',
    validate
})(ArticleAddDialog)

