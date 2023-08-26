import HeadingText from '../components/common/HeadingText';
import SignupForm from 'components/auth/SignupForm';

const SignupPage = () => {
  return (
    <div className='pt-24'>
      <HeadingText text='회원가입' />
      <SignupForm />
    </div>
  );
};

export default SignupPage;
