// import styled from 'styled-components';
// import SideMenu from '../components/SideMenu';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import Chatting from '../components/Chatting';
// import { useGetMainWorkSpacesQuery } from '../redux/modules/workspaces';
// import { useEffect, useState } from 'react';
// import InvitationCodeModal from '../common/Modal/InvitationCodeModal';
// import BlackButton from '../common/elements/BlackButton';
// import useGetUser from '../common/hooks/useGetUser';

// function WorkSpaceDetail() {
//   const navigate = useNavigate();
//   const id = Number(useParams().id);
//   const { user } = useGetUser();
//   const [isOpen, setIsOpen] = useState(true);
//   const { data, error, isLoading, refetch } = useGetMainWorkSpacesQuery(id);
//   const title = data?.data?.workspaces?.title;
//   const content = data?.data.workspaces.content;
//   const document = data?.data.documents;
//   const [invitationCodeOpen, setInvitationCodeOpen] = useState(false);
//   const workspaceid = data?.data?.workspaces?.id;

//   useEffect(() => {
//     console.log(user);
//   }, []);

//   // ------------------------------------------------------------------------
//   const handleClose = () => {
//     setInvitationCodeOpen(false);
//   };
//   const handleClick = () => {
//     setInvitationCodeOpen(invitationCodeOpen === false ? true : false);
//   };

//   const clickHandler = () => {
//     setIsOpen(!isOpen);
//   };

//   // ------------------------------------------------------------------------

//   return (
//     <StWrapper>
//       {/* <SideMenu /> */}
//       <Projects>
//         <StIntroContainer>
//           <div>
//             <StTitle fc='#333333' fs='1.5rem'>
//               {title}
//             </StTitle>
//             <StContent>{content}</StContent>
//           </div>
//           <BlackButton text='초대코드 확인' onClick={handleClick}></BlackButton>
//         </StIntroContainer>
//         {invitationCodeOpen ? (
//           <InvitationCodeModal onClose={handleClose} />
//         ) : null}
//         <div>
//           <StNoticeWrapper>
//             <StTitle style={{ marginBottom: '15px' }} fc='#333333' fs='20px'>
//               필독
//             </StTitle>
//             <StNoticeContainer>
//               <StTitle style={{ marginBottom: '15px' }} fc='#00a99d' fs='20px'>
//                 공지사항
//               </StTitle>
//               <StNoticeBox>
//                 <StTitle
//                   style={{ marginBottom: '15px' }}
//                   fc='#333333'
//                   fs='20px'
//                 >
//                   {data?.data.notices && data?.data.notices.title}
//                 </StTitle>
//                 <StNoticeContent>
//                   <div
//                     dangerouslySetInnerHTML={{
//                       __html: data?.data.notices && data?.data.notices.content,
//                     }}
//                   />
//                 </StNoticeContent>
//                 <StInfoDiv>
//                   <p>
//                     {data?.data.notices && data?.data.notices.noticeNickname}
//                   </p>
//                   <p>
//                     {data?.data.notices &&
//                       data?.data.notices.createdAt.slice(0, -13)}{' '}
//                   </p>
//                 </StInfoDiv>
//               </StNoticeBox>
//             </StNoticeContainer>
//           </StNoticeWrapper>
//         </div>
//         <div>
//           <StScheduleWrapper>
//             <StScheduleTitle onClick={clickHandler} fc='#333333'>
//               문서 및 계획
//             </StScheduleTitle>

//             <StTableContainer>
//               <StThead>
//                 <StTable style={{ height: '50px', borderBottom: 'none' }}>
//                   <div>담당자</div>
//                   <div>문서제목</div>
//                   <div>작성자</div>
//                   <div>등록일</div>
//                   <div>수정일</div>
//                 </StTable>
//               </StThead>

//               <StTbody>
//                 {document?.map((data) => {
//                   return (
//                     <StTable
//                       key={data.id}
//                       onClick={() => {
//                         navigate(
//                           `/workspace/main/${workspaceid}/docs/${data.id}`
//                         );
//                       }}
//                     >
//                       <div>{data.user.nickname}</div>
//                       <div>{data.title}</div>
//                       <div>{data.user.nickname}</div>
//                       <div>{data.createdAt.split(' ')[0]}</div>
//                       <div>{data.modifiedAt.split(' ')[0]}</div>
//                     </StTable>
//                   );
//                 })}
//               </StTbody>
//             </StTableContainer>
//           </StScheduleWrapper>
//         </div>
//       </Projects>
//       {/* {isOpen && <Chatting id={id} title={title} user={user}></Chatting>} */}
//     </StWrapper>
//   );
// }

// export default WorkSpaceDetail;

// const StWrapper = styled.div`
//   width: 100%;
//   min-height: 100%;
//   background-color: #f2f2f2;
//   display: flex;
//   flex-direction: row;
// `;

// const Projects = styled.div`
//   width: 65%;
//   min-height: 90vh;
//   margin-left: 50px;
//   margin-top: 60px;
//   margin-bottom: 50px;
//   background-color: white;
//   display: flex;
//   flex-direction: column;
//   align-items: left;
// `;

// const StIntroContainer = styled.div`
//   margin-left: 20px;
//   margin-right: 20px;
//   min-height: 12vh;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   border-bottom: solid 1px #c6c6c6;
// `;

// const StTitle = styled.p`
//   color: ${(props) => props.fc};
//   text-align: left;
//   font-size: ${(props) => props.fs};
//   font-weight: bold;
//   letter-spacing: -1.5px;
// `;

// const StContent = styled.p`
//   margin-top: 10px;
//   color: #333333;
//   text-align: left;
//   font-size: 16px;
//   font-weight: normal;
//   letter-spacing: -1px;
// `;

// const StNoticeWrapper = styled.div`
//   width: 94%;
//   margin-left: 30px;
//   margin-top: 35px;
//   display: flex;
//   flex-direction: column;
//   align-items: left;
//   color: #333333;
//   font-size: 16px;
//   letter-spacing: -0.8px;
// `;

// const StNoticeContainer = styled.div`
//   padding: 5%;
//   max-width: 90%;
//   display: flex;
//   flex-direction: column;
//   align-items: left;
//   background-color: #eef8f8;
//   margin-top: 10px;
// `;

// const StNoticeBox = styled.div`
//   margin-top: 10px;
//   display: flex;
//   flex-direction: column;
//   align-items: left;
// `;

// const StNoticeContent = styled.div`
//   width: 100%;
//   min-height: 50px;
//   display: flex;
//   flex-direction: column;
//   align-items: left;
//   font-size: 18px;
//   line-height: 1.5rem;
//   font-weight: 500;
//   white-space: pre-wrap;
// `;

// const StInfoDiv = styled.div`
//   margin-top: 10px;
//   display: flex;
//   flex-direction: row;
//   align-items: left;
//   color: #999999;
//   font-size: 16px;
//   letter-spacing: -0.8px;
//   font-weight: 500;
//   font-size: 0.9rem;
//   margin-top: 15px;
// `;

// const StScheduleWrapper = styled.div`
//   width: 94%;
//   /* min-height: 100px; */
//   margin-left: 30px;
//   margin-top: 35px;
//   margin-bottom: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: left;
//   color: #333333;
//   font-size: 16px;
//   letter-spacing: -0.8px;
// `;

// const StScheduleTitle = styled.p`
//   color: ${(props) => props.fc};
//   text-align: left;
//   font-size: 20px;
//   font-weight: bold;
//   letter-spacing: -1.2px;
// `;

// const StTableContainer = styled.div`
//   margin-top: 30px;
//   width: 100%;
//   min-height: 50px;
//   align-items: left;
// `;

// const StTable = styled.div`
//   grid-template-columns: 1fr 4fr 1fr 2fr 2fr;
//   display: grid;
//   border-bottom: 1px solid #c6c6c6;
// `;

// const StThead = styled.div`
//   background-color: #00a99d;
//   border-radius: 8px;
//   color: white;
//   align-items: center;
//   line-height: 50px;
//   font-size: 16px;
//   font-weight: 500;
//   text-align: center;
// `;

// const StTbody = styled.div`
//   color: #333333;
//   align-items: center;
//   line-height: 50px;
//   font-size: 16px;
//   font-weight: normal;
//   cursor: pointer;
//   text-align: center;
//   margin-bottom: 10px;
// `;
