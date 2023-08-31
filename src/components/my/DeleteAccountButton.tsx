import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { deleteUser } from '../../api/auth';
import { logout } from '../../store/auth';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';

const DeleteAccountButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const deleteAccountMutation = useMutation(deleteUser, {
    onError: (error: AxiosError) => {
      const errorData = error?.response?.data;
      alert(`계정 탈퇴에 실패했습니다. ${errorData && errorData['message']}`);
    },
    onSuccess: () => {
      dispatch(logout());
      alert('탈퇴되었습니다.');
      navigate('/');
    },
  });

  const handleButtonClick = () => {
    const isDeleteAccount = confirm('정말 탈퇴하시겠습니까?');
    if (isDeleteAccount) {
      deleteAccountMutation.mutate();
    }
  };

  return (
    <button
      onClick={handleButtonClick}
      className='mt-20 text-body-2 text-black/50 underline'
    >
      계정 탈퇴
    </button>
  );
};

export default DeleteAccountButton;
