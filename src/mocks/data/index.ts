export const DUMMY_POSTS = [
  {
    postId: 1,
    user: {
      name: '머쓱이',
    },
    title: '테스트 반성문',
    content: '테스트 반성문 입니다.',
    templateType: '1',
    isAnonymous: false,
    createAt: '2023-07-08T15:28:48.000Z',
    updateAt: '2023-07-08T06:29:27.068Z',
  },
  {
    postId: 2,
    user: {
      name: '프롱이',
    },
    title: '테스트 반성문',
    content: '공부 열심히 하자.',
    templateType: '2',
    isAnonymous: false,
    createAt: '2023-08-08T15:28:48.000Z',
    updateAt: '2023-08-08T06:29:27.068Z',
  },
];
export const DUMMY_POST = {
  postId: 1,
  title: '테스트 반성문',
  content: '테스트 반성문 입니다.',
  templateType: '1',
  isAnonymous: false,
  user: {
    name: '머쓱이',
  },
  createAt: '2023-07-08T15:28:48.000Z',
  updateAt: '2023-07-08T06:29:27.068Z',
  comment: [
    {
      commentId: 1,
      comment: 'ㅋㅋㅋㅋㅋㅋ',
      createAt: '2023-07-08T15:50:00.000Z',
      updateAt: '2023-07-08T15:50:01.000Z',
      user: {
        nickName: '익명의머쓱이',
      },
    },
  ],
  like: 0,
};
export const DUMMY_USER = {
  loginId: 'heeseok',
  password: 'qwer1234!',
  nickName: '익명의머쓱이',
  userName: '김희석',
};
