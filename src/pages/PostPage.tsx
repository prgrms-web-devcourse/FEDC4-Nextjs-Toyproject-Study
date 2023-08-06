import PostGuidButton from 'components/post/PostGuidButton';
import PostInput from 'components/post/PostInput';

const PostPage = () => {
  return (
    <div className={`flex flex-col`}>
      <PostGuidButton />
      <PostInput />
    </div>
  );
};

export default PostPage;
