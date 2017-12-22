import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

interface AddArticleFormProps extends InjectedFormProps {

}

class AddArticleForm extends React.Component<AddArticleFormProps> {
    render() {
        return (
            <form>

            </form>
        )
    }
}

export default reduxForm({
    form: 'add-article'
})(AddArticleForm)