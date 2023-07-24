import { PostType } from '../model/post';
import Post from './Post';

const DUMMY_DATA: PostType[] = [
  {
    id: 1,
    user: '김주하',
    title: 'First Post',
    content: 'This is the first post by Juha.',
    date: '2023.07.13',
  },
  {
    id: 2,
    user: '남궁호수',
    title: '반성문',
    content:
      '오늘 과제 제출 레포지토리에 main 브랜치에다 merge를 해버렸습니다... 죄송합니다 삐엔',
    date: '2023.08.12',
  },
  {
    id: 3,
    user: '고해성사',
    title: '회고문',
    content:
      '왜 나는 잠에 들어버렸을까... 왜 저녁에 과식을 했지. 과거의 나야 반성해라.',
    date: '2023.06.01',
  },
  {
    id: 4,
    user: '소피아',
    title: '반성문',
    content:
      '본인은 너무 열정적으로 4기 교육생을 생각하는 나머지 본인의 건강에 소홀히 한 죄.',
    date: '2023.07.31',
  },
  {
    id: 6,
    user: '김주하',
    title: 'First Post',
    content: 'This is the first post by Juha.',
    date: '2023.07.13',
  },
  {
    id: 5,
    user: '남궁호수',
    title: '반성문',
    content:
      '오늘 과제 제출 레포지토리에 main 브랜치에다 merge를 해버렸습니다... 죄송합니다 삐엔',
    date: '2023.08.12',
  },
  {
    id: 9,
    user: '고해성사',
    title: '회고문',
    content:
      '왜 나는 잠에 들어버렸을까... 왜 저녁에 과식을 했지. 과거의 나야 반성해라.',
    date: '2023.06.01',
  },
  {
    id: 7,
    user: '소피아',
    title: '반성문',
    content:
      '본인은 너무 열정적으로 4기 교육생을 생각하는 나머지 본인의 건강에 소홀히 한 죄.',
    date: '2023.07.31',
  },
  {
    id: 13,
    user: '남궁호수',
    title: '반성문',
    content:
      '오늘 과제 제출 레포지토리에 main 브랜치에다 merge를 해버렸습니다... 죄송합니다 삐엔',
    date: '2023.08.12',
  },
  {
    id: 19,
    user: '고해성사',
    title: '회고문',
    content:
      '왜 나는 잠에 들어버렸을까... 왜 저녁에 과식을 했지. 과거의 나야 반성해라.',
    date: '2023.06.01',
  },
  {
    id: 17,
    user: '고해성사',
    title: '회고문',
    content:
      '왜 나는 잠에 들어버렸을까... 왜 저녁에 과식을 했지. 과거의 나야 반성해라.',
    date: '2023.06.01',
  },
];

const PostContainer: React.FC = () => {
  return (
    <div className='container mx-auto p-4 flex flex-wrap'>
      {DUMMY_DATA.map((post) => (
        <div className='p-2 m-3' key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostContainer;
