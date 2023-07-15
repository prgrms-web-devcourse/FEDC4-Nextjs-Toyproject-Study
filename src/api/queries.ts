import { GET_POSTS, GET_POST } from 'api';
import { useQuery } from 'react-query';

export const useGetPosts = () => {
  return useQuery('posts', () => GET_POSTS(), {
    refetchOnWindowFocus: false,
    retry: 0,
    staleTime: Infinity,
    onSuccess: (data) => console.log('useGetPosts: ', data),
    onError: (e: Error) => console.log(e.message),
  });
};

export const useGetPost = (id) => {
  return useQuery(['post', id], () => GET_POST(id), {
    refetchOnWindowFocus: false,
    retry: 0,
    staleTime: Infinity,
    onSuccess: (data) => console.log('useGetPost: ', data),
    onError: (e: Error) => console.log(e.message),
  });
};
