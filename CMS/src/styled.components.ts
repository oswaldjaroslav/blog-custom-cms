import styled, { css } from 'styled-components';
import Paper from 'material-ui/Paper';

export const BasicPaper = styled.div``

export const FlexParrent = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    width: 100%;

    ${(props: {wrap?: any}) => props.wrap && css`
        flex-wrap: wrap;
    `}
`

interface FlexInputFieldProps {
    width?: string;
    min?: string;
}

export const FlexInputField = styled.div`
    padding: 5px;
    width: ${(props: FlexInputFieldProps) => props.width ? props.width : '50%' };
    min-width: ${(props: FlexInputFieldProps) => props.min ? props.min : '350px'};
    box-sizing: border-box;
`