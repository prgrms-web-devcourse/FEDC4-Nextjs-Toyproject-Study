
import { POST } from 'api';
// import { useGetPosts } from 'api/queries';
import { Post } from 'interface';
import {  useState } from 'react';
// useEffect,

const PostPage = () => {
  // const { data, isLoading } = useGetPosts();
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('submitted');
    const postData = {
      ...posts,
      title,
      content,
    };

    POST(postData)
      .then((res) => {
        console.log(res.data);
        const newPosts = res.data;
        setPosts(newPosts);
        setTitle('');
        setContent('');
      })
      .catch((e) => console.error(e));
  };

  // useEffect(() => {
  //   if (data) {
  //     setPosts(data.data);
  //   }
  // }, [data, posts]);

  return (
    <div>
      <h1>Posts</h1>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <input
          type='text'
          value={title}
          onChange={handleTitleChange}
          placeholder='Enter title'
        />
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder='Enter content'
        />
        <button type='submit'>Submit</button>
      </form>

      {posts.map((post) => (
        <div key={post.postId}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );

};

export default PostPage;
