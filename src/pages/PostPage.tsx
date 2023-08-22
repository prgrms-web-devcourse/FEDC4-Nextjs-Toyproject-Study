import PostGuidButton from 'components/post/PostGuidButton';
import PostInput from 'components/post/PostInput';
import { useMediaQuery } from 'react-responsive';

const PostPage = () => {
  const isPcOrTablet = useMediaQuery({
    query: '(min-width:1550px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:1549px)',
  });

  return (
    <>
      {isPcOrTablet && (
        <div className={`flex flex-col`}>
          <PostGuidButton width='w-1/2' />
          <PostInput width='w-1/2' />
        </div>
      )}
      {isMobile && (
        <div className={`flex flex-col`}>
          From now on, this is mobile version.
          <PostGuidButton width='w-11/12' />
          <PostInput width='w-11/12' />
        </div>
      )}
    </>
  );
};

export default PostPage;
