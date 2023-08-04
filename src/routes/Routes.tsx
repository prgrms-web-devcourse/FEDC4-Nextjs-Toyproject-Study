import { Navigate, Route, Routes as ReactRouters } from 'react-router-dom';
import Layout from '../components/common/Layout';
import MainPage from '../pages/mainpage/MainPage';
import PostPage from '../pages/PostPage';
import Modal from '../pages/Modal/Modal';

const Routes = () => {
  return (
    <ReactRouters>
      <Route element={<Layout />}>
        <Route path='/' element={<MainPage />} />
        <Route path='/post' element={<PostPage />} />
        <Route path='*' element={<Navigate replace to='/' />} />
      </Route>
    </ReactRouters>
  );
};

export default Routes;
