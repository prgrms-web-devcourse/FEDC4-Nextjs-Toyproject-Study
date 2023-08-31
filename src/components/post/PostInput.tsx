import icon_01 from '../../assets/img/icon_01.png';
import icon_02 from '../../assets/img/icon_02.png';
import icon_03 from '../../assets/img/icon_03.png';
import icon_04 from '../../assets/img/icon_04.png';
import icon_05 from '../../assets/img/icon_05.png';
import icon_06 from '../../assets/img/icon_06.png';
import icon_07 from '../../assets/img/icon_07.png';
import IconButton from '../../components/post/IconButton';
import ColorPicker from '../../components/post/ColorPicker';
import { useCallback, useState } from 'react';
import { Input } from 'components/common/Input';
import { LargeButton } from 'components/common/Button';
import { useMutation } from 'react-query';
import { createPost } from 'api/postApi';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

type PostInputProps = {
  width?: string;
};

const PostInput = ({ width }: PostInputProps) => {
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth);
  const IMG_ARR = [
    null,
    icon_01,
    icon_02,
    icon_03,
    icon_04,
    icon_05,
    icon_06,
    icon_07,
  ];
  const COLOR_ARR = [
    '#FFFFFF',
    '#FFCAC8',
    '#FBD0F5',
    '#B8B5FF',
    '#94DAFF',
    '#C7F5FE',
    '#A3F7BF',
    '#DEFF8B',
    '#F3F798',
  ];
  const bg = {
    '#FFFFFF': 'bg-white',
    '#FFCAC8': 'bg-template-red',
    '#FBD0F5': 'bg-template-pink',
    '#B8B5FF': 'bg-template-purple',
    '#94DAFF': 'bg-template-blue',
    '#C7F5FE': 'bg-template-sky',
    '#A3F7BF': 'bg-template-green',
    '#DEFF8B': 'bg-template-lime',
    '#F3F798': 'bg-template-yellow',
  };

  const initialState = {
    userId: '1',
    title: '',
    content: '',
    templateType: {
      color: '#FFFFFF',
      icon: null,
    },
    team: '',
  };
  const date = new Date();
  const formattedDate = `${date.getFullYear()}.${String(
    date.getMonth() + 1,
  ).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;

  const mutation = useMutation(createPost, {
    onSuccess: (data) => {
      navigate('/');
    },
    onError: () => {
      console.log('error~~');
    },
  });

  const postApi = async () => {
    const { title, content } = state;
    if (title.length === 0) {
      alert('타이틀은 필수 값입니다.');
      return;
    }
    if (content.length === 0) {
      alert('본문 입력은 필수 값입니다.');
      return;
    }
    const newState = {
      ...state,
      templateType: JSON.stringify(state.templateType),
    };

    mutation.mutate(newState);
  };
  const [state, setState] = useState(initialState);
  const handleContentChange = useCallback((value: string) => {
    if (value.length > 365) {
      alert('텍스트는 최대 365자 입력 가능합니다.');
    } else {
      setState((prevState) => ({
        ...prevState,
        content: value,
      }));
    }
  }, []);
  const handleTitleChange = useCallback((value: string) => {
    if (value.length > 15) {
      alert('텍스트는 최대 15자 입력 가능합니다.');
    } else {
      setState((prevState) => ({
        ...prevState,
        title: value,
      }));
    }
  }, []);

  return (
    <div
      className={`flex flex-col justify-center self-center pb-12 ${width} justify-center items-center `}
    >
      <div
        className='flex flex-col justify-start items-center w-full py-10 px-10 border border-solid border-blue-gray-880 shadow-card-1'
        style={{ backgroundColor: state.templateType.color }}
      >
        <Input
          id='postTitle'
          value={state.title}
          placeHolder='제목을 입력해 주세요'
          disabled={false}
          onChange={(e) => handleTitleChange(e.target.value)}
          styleOption={`mb-6 focus:outline-none border border-solid border-blue-gray-200 hover:border-blue-gray-400 focus:border-blue-gray-999 text-body-2 placeholder:text-blue-gray-200 px-5 py-2.5 text-left flex items-center justify-center w-full ${
            bg[state.templateType.color]
          }`}
        />
        <textarea
          className={`w-full  h-3/4 relative text-left flex items-center justify-center border border-solid border-blue-gray-200 hover:border-blue-gray-400 focus:border-blue-gray-999 pl-1 pt-1 focus:outline-none resize-none ${
            bg[state.templateType.color]
          }`}
          placeholder='반성문 내용을 입력해주세요.'
          value={state.content}
          onChange={(e) => handleContentChange(e.target.value)}
        />
        <div className={`w-full flex flex-row justify-start pt-5`}>
          {state.templateType.icon ? (
            <img
              src={state.templateType.icon}
              className={`w-[80px] h-[80px]`}
            />
          ) : (
            <div className={`w-[80px] h-[80px]`} />
          )}
          <div className={`flex flex-col items-end justify-end w-full`}>
            <span className={`text-right font-dgm`}>{formattedDate}</span>
            <span className={`text-right font-dgm text-heading-3`}>
              {auth.user.name}
            </span>
          </div>
        </div>
        <div
          className={`flex flex-wrap w-full py-5 justify-start items-center`}
        >
          <div className={`flex flex-wrap items-center`}>
            <div>
              <span
                className={`w-10 h10 mr-2 font-dgm whitespace-nowrap self-center`}
              >
                배경색
              </span>
            </div>
            {COLOR_ARR.map((color, index) => {
              const id = color;
              const selected = state.templateType.color;

              return (
                <ColorPicker
                  key={color}
                  id={color}
                  color={color}
                  isSelected={selected === id}
                  onColorSelect={(color) => {
                    setState((prevState) => ({
                      ...prevState,
                      templateType: {
                        ...prevState.templateType,
                        color,
                      },
                    }));
                  }}
                />
              );
            })}
          </div>
          <div
            className={`flex flex-wrap w-11/12 py-5 justify-start items-center`}
          >
            <div>
              <span className={`mr-5 w-10 h10 mr-2 font-dgm whitespace-nowrap`}>
                아이콘
              </span>
            </div>

            {IMG_ARR.map((src, index) => {
              const selected = state.templateType.icon;
              return (
                <IconButton
                  key={src}
                  src={src}
                  alt={''}
                  isSelected={selected === src}
                  onIconSelect={(src) => {
                    setState((prevState) => ({
                      ...prevState,
                      templateType: {
                        ...prevState.templateType,
                        icon: src,
                      },
                    }));
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className={`flex items-center justify-center my-6`}>
        <LargeButton text={`반성문 제출`} onClick={postApi}></LargeButton>
      </div>
    </div>
  );
};

export default PostInput;
