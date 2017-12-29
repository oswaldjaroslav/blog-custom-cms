import styled, { css } from 'styled-components';

interface MiddleAlignedDivProps {
    width?: string;
    top?: string;
}

export const MiddleAlignedDiv = styled.div`
    width: ${(props: MiddleAlignedDivProps) => props.width? props.width : '30%'};
    margin: ${(props: MiddleAlignedDivProps) => props.top? props.top : '150px'} auto;
`

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