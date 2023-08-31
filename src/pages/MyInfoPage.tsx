import React from 'react';
import HeadingText from '../components/common/HeadingText';
import Profile from '../components/my/Profile';
import PasswordForm from '../components/my/PasswordForm';
import DeleteAccountButton from '../components/my/DeleteAccountButton';

const MyInfoPage = () => {
  return (
    <div className='pt-24 text-center'>
      <HeadingText text='내 정보' />
      <Profile />
      <PasswordForm />
      <DeleteAccountButton />
    </div>
  );
};

export default MyInfoPage;
