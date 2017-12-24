import * as React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
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

export const Selector = (props: FormFieldProps | any) =>
    <SelectField 
    style={{ width: '100%' }}
    floatingLabelText={props.label} 
    errorText={props.meta.touched && props.meta.error} 
    {...props.input}
    onChange={(event, index, value) => { props.input.onChange(value) }} 
    children={props.children} 
    {...props.custom} />
