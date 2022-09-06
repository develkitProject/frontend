import styled from 'styled-components';


export default function PasswordInfo({isOpen}) {
    return (
        <>
            {isOpen && (
                <InfoWrap>
                    <Text>비밀번호 8자 이상</Text>
                    <Text>영문, 숫자, 특수문자 모두 포함 해주세요!</Text>
                </InfoWrap>
            )
            }
        </> 
    )
}

const InfoWrap = styled.div`
    width: 246px;
    margin: 5px 24px 24px 3px;
    padding: 13px 15px 15px 12px;
    border-radius: 10px;
    box-shadow: 6px 8px 30px 0 #c3c3c3;
    background-color: #fff;
    position: absolute;
    top: 380px;
    left: 105px;
`;

const Text = styled.pre`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
    letter-spacing: -0.7px;
    text-align: left;
    color: #606060;
    line-height: normal;
`;