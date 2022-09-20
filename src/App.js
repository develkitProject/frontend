import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Landing from './pages/Landing';
import MyPage from './pages/MyPage';
// import SignUp from './pages/SignUp';
import WorkSpace from './pages/WorkSpace';
import Kakao from './pages/KaKao';
import { Routes, Route } from 'react-router-dom';
import PostEditor from './components/PostEditor';
import MyPage2 from './pages/MyPage2';
import WorkSpaceDetail from './pages/WorkSpaceDetail';
import Docs from './document/Docs';
import DocsWritePage from './document/DocsWritePage';
import AddressPage from './pages/AddressPage';
import Footer from './components/Footer';
import ClaendarPage from './detail/workspaces/calendar/CalendarPage';
import DocDetail from './document/DocDetail';
import SideMenu from './components/SideMenu';
import useGetUser from './common/hooks/useGetUser';
import WorkspaceDetailPage from './detail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        {/* <Route path='/signup' element={<SignUp />} /> */}
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/mypage2' element={<MyPage2 />} />
        <Route path='/workspace' element={<WorkSpace />} />
        <Route path='/editor' element={<PostEditor />} />
        <Route path='/kakao' element={<Kakao />} />

        <Route path='/workspace/main/:id' element={<WorkspaceDetailPage />} />
        {/* <Route path='/workspace/main/:id' element={<WorkSpaceDetail />} /> */}
        <Route path='/workspace/main/:id/docs' element={<Docs />} />
        <Route
          path='/workspace/main/:id/docs/write'
          element={<DocsWritePage />}
        />
        <Route path='/workspace/main/:id/address' element={<AddressPage />} />
        <Route path='/workspace/main/:id/docs/:docid' element={<DocDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
