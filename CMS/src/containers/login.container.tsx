import * as React from 'react';
import { connect } from 'react-redux';
import { MiddleAlignedDiv } from '../styled.components';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';
import { TextInput } from '../components/form-fields.component';
import { login } from '../actions/auth.actions';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  paper: {
    padding: '10px'
  }
}

interface LoginPageProps extends InjectedFormProps, DispatchProps {}

const LoginPageBase = (props: LoginPageProps) => {

  const handleSubmit = (data: {email: string, password: string}) => {
    props.login(data);
  }

  return (
    <MiddleAlignedDiv width="400px" >
      <Paper 
      width='100%' 
      style={style.paper} >
        <form onSubmit={props.handleSubmit(handleSubmit)} >
          <div>
            <Field 
            name="email" 
            component={TextInput} 
            label="Email" 
            type="email" />
          </div>
          <div>
            <Field 
            name="password" 
            component={TextInput} 
            label="password" 
            type="password" />
          </div>
          <RaisedButton fullWidth={true} label='Login' primary 
          onClick={props.handleSubmit(handleSubmit)} 
          keyboardFocused={true} />
        </form>
      </Paper>
    </MiddleAlignedDiv>
  )
}

  const validate = (values: {email: string, password: string}) => {
    const valEmail = (email: string) => {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    const errors: any = {};
    if (!values.email) {
      errors.email = 'Required!';
    } else if (!valEmail(values.email)) {
      errors.email = 'Enter valid email format!';
    }
    if (!values.password) {
      errors.password = 'Required!';
    }
    return errors;
  }

  const FormLoginPage = reduxForm<any, any>({
    form: 'login',
    validate
  })(LoginPageBase)

  interface DispatchProps {
    login(user: {email: string, password: string}): any;
  }

  export const LoginPage = connect<any, DispatchProps, any>(null, {login})(FormLoginPage);