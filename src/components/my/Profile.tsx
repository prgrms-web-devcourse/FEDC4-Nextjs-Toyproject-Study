import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';

const Profile = () => {
  const auth = useSelector((state: RootState) => state.auth);
  return (
    <div className='max-w-md mx-auto mb-8 p-5 text-subtitle-1 border border-blue-gray-880 bg-white text-left'>
      <div>
        <span className='inline-block w-[60px]'>이름</span>
        <span>{auth.user.name}</span>
      </div>
      <div>
        <span className='inline-block w-[60px]'>아이디</span>
        <span>{auth.user.loginId}</span>
      </div>
    </div>
  );
};

export default Profile;
