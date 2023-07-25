import Header from 'pages/mainpage/Header';
import PostGuidButton from './PostGuidButton';

const PostPage = () => {
  return (
    <div className={`flex flex-col`}>
      <Header />
      <PostGuidButton />
      <div>작성</div>
    </div>
  );
};

export default PostPage;
