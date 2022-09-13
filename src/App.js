import './App.css';

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
import NoticePage from './notice/NoticePage';
import NoticeWritePage from './notice/NoticeWritePage';
import Docs from './pages/Docs';
import DocsWritePage from './pages/DocsWritePage';
import AddressPage from './pages/AddressPage';
import Footer from './components/Footer';

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
        <Route path='/workspace/main/:id' element={<WorkSpaceDetail />} />
        <Route path='/workspace/main/:id/notice' element={<NoticePage />} />
        <Route
          path='/workspace/main/:id/notice/write'
          element={<NoticeWritePage />}
        />
        <Route path='/workspace/main/:id/docs' element={<Docs />} />
        <Route
          path='/workspace/main/:id/docs/write'
          element={<DocsWritePage />}
        />
        <Route path='/workspace/main/:id/address' element={<AddressPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
