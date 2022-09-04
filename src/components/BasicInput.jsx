import { useCallback } from 'react';

import styled from 'styled-components';
import Icon from './Icon';

export default function BasicInput({
    placeholder,
    type,
    marginTop,
    marginBottom,
    onChange,
    name,
    label,
    isSuccess,
    subText,
    errorText,
}) {

    const setBorderStyle = useCallback(() => {
        if(isSuccess) return '1px solid #00A99D'
        if(errorText) return '1px solid #E75E5E'
        return '1px solid #999999'
    }, [errorText, isSuccess])
    
    return (
        <Spacer
            marginTop={marginTop}
            marginBottom={marginBottom}
        >
            {label && (
                <LabelText>{label}</LabelText>
            )}
            <InputWrapper
                borderStyle={setBorderStyle()}
            >
                <StInput 
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    borderStyle={setBorderStyle()}
                />
                {isSuccess && (
                    <Icon.CheckSuccess />
                )}
            </InputWrapper>
            {errorText && (
                <div>
                    <ErrorText>{errorText}</ErrorText>
                </div>
            )}
        </Spacer>
    )

}

const Spacer = styled.div`
    margin-top: ${(props) => props.marginTop};
    margin-bottom: ${(props) => props.marginBottom};
`

const LabelText = styled.span`
  font-weight: 500;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  margin-top: 20px;
  text-align: left;
`;

const InputWrapper = styled.div`
    border: ${(props) => props.borderStyle};
    line-height: 60px;
    border-radius: 10px;
    padding-left: 20px;
    margin-top: 8px;
    width: 360px;
    height: 60px;
    font-size: 15px;
`

const StInput = styled.input`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  margin: auto 0;
  width: 310px;
  border:none;
    outline: none;
`;

const ErrorText = styled.span`
  color: #E75E5E;
  font-size: 14px;
  font-family: 'Noto Sans KR', sans-serif;
  padding-left: 20px;
`