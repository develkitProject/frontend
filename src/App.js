import './App.css';
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Landing from './pages/landing';
import MyPage from './pages/mypage';
import WorkSpace from './pages/WorkSpace';
import Kakao from './account/KaKao';
import Footer from './components/Footer';
import FAQPage from './pages/faq';
import WorkspaceDetailPage from './detail';
import EventPage from './pages/Event';

function App() {
  const [path, setPath] = useState(1);
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/' ? (
        <Header setPath={setPath} path={path} />
      ) : null}
      <Routes>
        <Route path="/" element={<Landing setPath={setPath} path={path} />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/workspace" element={<WorkSpace />} />
        <Route path="/kakao" element={<Kakao />} />
        <Route path="/workspace/main/:id" element={<WorkspaceDetailPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
      {location.pathname === '/' ? null : <Footer />}
    </>
  );
}

export default App;
