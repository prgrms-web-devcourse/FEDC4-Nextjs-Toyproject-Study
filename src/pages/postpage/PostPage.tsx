import Header from 'pages/mainpage/Header';
import PostGuidButton from './PostGuidButton';
import PostInput from './PostInput';

const PostPage = () => {
  return (
    <div className={`flex flex-col`}>
      <Header />
      <PostGuidButton />
      <PostInput />
    </div>
  );
};

export default PostPage;
