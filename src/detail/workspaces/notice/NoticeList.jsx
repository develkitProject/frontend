import styled from 'styled-components';
import React, { useRef, useState, useEffect } from 'react';
import {
  useDeleteNoticeMutation,
  useGetNextNoticeMutation,
} from '../../../redux/modules/notices';
import { SweetAlertHook } from '../../../common/elements/SweetAlert';
import { SweetAlertConfirmHook } from '../../../common/elements/SweetAlertConfirm';

function NoticeList({
  user,
  onNoticeHandle,
  id,
  notice,
  data,
  error,
  isLoading,
}) {
  const target = useRef(null);
  const userInfo = user?.username;

  const [prevNotices, setPrevNotices] = useState(notice);
  const [deleteNotices] = useDeleteNoticeMutation();
  const [getNextNotice] = useGetNextNoticeMutation();

  const deleteFunction = (dataId) => {
    const data = {
      id,
      dataId,
    };
    deleteNotices(data);
    SweetAlertHook(2000, 'success', '공지사항이 삭제되었습니다!');
  };

  const deleteNotice = (dataId) => {
    // eslint-disable-next-line no-empty
    if (SweetAlertConfirmHook('정말 지우시겠습니까?', deleteFunction, dataId)) {
    }
  };

  useEffect(() => {
    setPrevNotices(notice);
  }, [data]);

  useEffect(() => {
    let observer;
    if (target.current && !isLoading) {
      observer = new IntersectionObserver(onIntersect);
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [prevNotices]);

  const onIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          onFetchNotices();
        }, 300);
      }
    });
  };

  const onFetchNotices = async () => {
    const last = prevNotices[prevNotices.length - 1];
    const obj = {
      cursorId: last.id,
      id,
    };
    await getNextNotice(obj).then((res) => {
      if (res.data.data.length !== 0) {
        setPrevNotices((prevNotices) => [...prevNotices, ...res.data.data]);
      }
    });
  };

  return (
    <>
      <StWrapper>
        {error ? (
          <>에러가 발생하였습니다. 관리자에게 문의해주세요</>
        ) : isLoading ? (
          <>데이터를 불러오는 중입니다</>
        ) : data ? (
          <>
            {prevNotices?.map((data, i) => {
              const writerInfo = data.username;
              return (
                <StNoticeContainer key={data.id}>
                  <StNoticeBox>
                    <StInfoDiv>
                      <StProfileImg src={data.profileImage} />
                      <StNameDate>
                        <span style={{ fontWeight: '600' }}>
                          {data.nickname}
                        </span>
                        <span>
                          {data.createdAt.slice(0, -13)}{' '}
                          <span style={{ fontSize: '15px' }}>｜</span>{' '}
                          {data.createdAt.slice(10, -4)}{' '}
                        </span>
                      </StNameDate>
                    </StInfoDiv>
                    <StContentBox>
                      <StTitle fontColor="#333333">{data.title}</StTitle>
                      <StContent
                        style={{ marginTop: '16px' }}
                        className="imgWrapper"
                      >
                        <div
                          dangerouslySetInnerHTML={{ __html: data.content }}
                        />
                      </StContent>
                    </StContentBox>
                    {userInfo === writerInfo ? (
                      <StEditDelete>
                        <div
                          onClick={() => onNoticeHandle('edit', data.id)}
                          style={{ color: '#00A99D' }}
                        >
                          수정
                        </div>
                        <StVerticalBar>｜</StVerticalBar>
                        <div
                          onClick={() => {
                            deleteNotice(data.id);
                          }}
                        >
                          삭제
                        </div>
                      </StEditDelete>
                    ) : null}
                  </StNoticeBox>
                </StNoticeContainer>
              );
            })}
          </>
        ) : null}
        <div ref={target} style={{ marginTop: '5%' }} />
      </StWrapper>
    </>
  );
}

export default NoticeList;

const StWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #333333;
  letter-spacing: -0.8px;
`;

const StNoticeContainer = styled.div`
  padding: 5px 35px 20px 35px;
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: #eef8f8;
  margin-top: 10px;
  margin-bottom: 15px;
  width: 90%;
  box-shadow: 0 4px 60px 0 rgba(0, 0, 0, 0.1), 0 4px 20px 0 rgba(0, 0, 0, 0.1);
`;

const StNoticeBox = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const StInfoDiv = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: row;
  align-items: left;
  color: #999999;
  font-weight: 500;
  font-size: 16px;
`;

const StProfileImg = styled.img`
  width: 41px;
  height: 40px;
  border-radius: 70%;
  margin-top: 3px;
`;

const StNameDate = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  color: #999999;
  font-size: 18px;
  letter-spacing: -0.5px;
  font-weight: 500;
  line-height: 22px;
`;

const StContentBox = styled.div`
  margin-top: 26px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const StTitle = styled.p`
  color: ${(props) => props.fontColor};
  text-align: left;
  font-size: 20px;
  font-weight: bold;
`;

const StContent = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 18px;
  line-height: 28px;
  font-weight: 500;
  white-space: pre-wrap;
  overflow: hidden;
`;

const StEditDelete = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  color: #999999;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`;

const StVerticalBar = styled.div`
  margin: 0 2px 0 2px;
  font-size: 15px;
  color: #999999;
  letter-spacing: -0.05em;
  font-weight: 200;
  cursor: none;
`;
