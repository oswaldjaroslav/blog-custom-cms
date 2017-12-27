import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';
import { FlexParrent, FlexInputField } from '../../styled.components';
import { TextInput, Selector } from '../form-fields.component';
import { ArticleType } from '../../types/article.type';
import { CategoryType } from '../../types/category.type';
import { MenuItem } from 'material-ui';
import { TextEditor } from '../text-editor-draft.component';
import { EditorState, convertToRaw } from 'draft-js';
const a: any = require('draftjs-to-html');

interface ArticleAddDialogProps extends InjectedFormProps {
    open: boolean;
    closeDialog(): any;
    submitArticle(article: ArticleType): void;
    categories: Array<CategoryType>;
}

interface ArticleAddState {
    textEditorValue: string;
}

class ArticleAddDialog extends React.Component<ArticleAddDialogProps, ArticleAddState> {

    constructor(props: ArticleAddDialogProps) {
        super(props);
        this.state = {
            textEditorValue: null
        }
    }

    handleSubmit = (data: ArticleType) => {
        if (this.props.valid) {
            const { textEditorValue } = this.state;
            const newArticle: ArticleType = {...data, message: textEditorValue};
            this.props.submitArticle(newArticle);
            this.props.closeDialog();
            this.props.reset();
        } else {
            this.props.touch();
        }
    }

    renderCategories = () =>
        this.props.categories.map(i => (
            <MenuItem key={i._id} value={i._id} primaryText={i.name} />
        ))

    onEditorStateChange = (editorState: EditorState) => {
        let html =  a.default(convertToRaw(editorState.getCurrentContent()))
        this.setState({ textEditorValue: html });
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
                actions={actions}
                autoDetectWindowHeight={false} >
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
                            <FlexInputField>
                                <Field 
                                name="category" 
                                component={Selector} 
                                label="Categorie" >
                                    {this.renderCategories()}
                                </Field>
                            </FlexInputField>
                        </FlexParrent>
                        <TextEditor 
                        editorStateChange={this.onEditorStateChange} />
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

