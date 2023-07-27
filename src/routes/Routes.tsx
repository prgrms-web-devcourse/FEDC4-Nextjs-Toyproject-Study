import { Navigate, Route, Routes as ReactRouters } from 'react-router-dom';
import Layout from '../components/common/Layout';
import MainPage from '../pages/MainPage';
import PostPage from '../pages/PostPage';

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
