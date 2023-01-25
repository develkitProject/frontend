import { ChangeEvent, FormEventHandler, ReactNode, useCallback } from 'react';

import styled from 'styled-components';
import Icon from './Icon';

interface IProps {
  placeholder: string;
  type?: string;
  marginTop: string;
  marginBottom: string;
  onChange: FormEventHandler<HTMLInputElement>;
  // eslint-disable-next-line no-restricted-globals
  name: string | undefined;
  label: string | ReactNode;
  isError: boolean;
  isSuccess: boolean;
  errorText: string;
  value?: string;
  maxLength?: number;
}

export default function BasicInput({
  placeholder,
  type,
  marginTop,
  marginBottom,
  onChange,
  name,
  label,
  isError,
  isSuccess,
  errorText,
  value,
  maxLength,
}: IProps) {
  const setBorderStyle = useCallback((): string => {
    if (isSuccess) return '1px solid #00A99D';
    if (isError) return '1px solid #E75E5E';
    return '1px solid #999999';
  }, [isError, isSuccess]);

  return (
    <Spacer marginTop={marginTop} marginBottom={marginBottom}>
      {label && <LabelText>{label}</LabelText>}
      <InputWrapper borderStyle={setBorderStyle()}>
        <StInput
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          maxLength={maxLength}
        />
        {isSuccess && <Icon.CheckSuccess />}
      </InputWrapper>
      {isError && (
        <div>
          <ErrorText>{errorText}</ErrorText>
        </div>
      )}
    </Spacer>
  );
}

const Spacer = styled.div<{ marginTop: string; marginBottom: string }>`
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
`;

const LabelText = styled.span`
  font-weight: 500;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 18px;
  margin-top: 20px;
  text-align: left;
`;

const InputWrapper = styled.div<{ borderStyle: string }>`
  border: ${(props) => props.borderStyle};
  line-height: 60px;
  border-radius: 10px;
  padding-left: 20px;
  margin-top: 8px;
  width: 360px;
  height: 60px;
  font-size: 15px;
`;

const StInput = styled.input`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  margin: auto 0;
  width: 310px;
  border: none;
  outline: none;
`;

const ErrorText = styled.span`
  color: #e75e5e;
  font-size: 14px;
  font-family: 'Noto Sans KR', sans-serif;
  padding-left: 20px;
`;
