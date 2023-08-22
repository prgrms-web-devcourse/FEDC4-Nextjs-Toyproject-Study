import PostGuidButton from 'components/post/PostGuidButton';
import PostInput from 'components/post/PostInput';
import { useMediaQuery } from 'react-responsive';

const PostPage = () => {
  const isPc = useMediaQuery({
    query: '(min-width:1400px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width:1195px) and (max-width:1399px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:1194px)',
  });

  return (
    <>
      {isPc && (
        <div className={`flex flex-col`}>
          <PostGuidButton width='w-1/2' />
          <PostInput width='w-1/2' />
        </div>
      )}
      {isTablet && (
        <div className={`flex flex-col`}>
          <PostGuidButton width='w-7/12' />
          <PostInput width='w-7/12' />
        </div>
      )}
      {isMobile && (
        <div className={`flex flex-col`}>
          <PostGuidButton width='w-11/12' />
          <PostInput width='w-11/12' />
        </div>
      )}
    </>
  );
};

export default PostPage;
