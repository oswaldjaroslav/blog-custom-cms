import * as React from 'react';
import TextField from 'material-ui/TextField';
import { FieldsProps } from 'redux-form';

interface FormFieldProps  {
    input?: any;
    custom?: any;
    label?: string;
    meta?: {touched: boolean, error: any};
}

export const TextInput = (props: FormFieldProps | any) =>
    <TextField 
    style={{ width: '100%' }}
    floatingLabelText={props.label}
    errorText={props.meta.touched && props.meta.error}
    {...props.input} 
    {...props.custom} />
