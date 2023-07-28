import icon_01 from 'assets/img/icon_01.svg';
import icon_02 from 'assets/img/icon_02.svg';
import icon_03 from 'assets/img/icon_03.svg';
import icon_04 from 'assets/img/icon_04.svg';
import icon_05 from 'assets/img/icon_05.svg';
import icon_06 from 'assets/img/icon_06.svg';
import icon_07 from 'assets/img/icon_07.svg';
import IconButton from '../../components/post/IconButton';
import ColorPicker from '../../components/post/ColorPicker';
import { useState } from 'react';
import { s } from 'msw/lib/glossary-de6278a9';

const PostInput = () => {
  const imgArr = [
    null,
    icon_01,
    icon_02,
    icon_03,
    icon_04,
    icon_05,
    icon_06,
    icon_07,
  ];
  const colorArr = [
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
  const initialState = {
    userId: '1',
    title: '',
    content: '',
    templateType: {
      color: '#FFFFFF',
      icon: '',
    },
    team: '',
  };

  const postApi = async () => {
    console.log(state);
  };
  const [state, setState] = useState(initialState);
  return (
    <div
      className={`flex flex-col justify-center pb-12 px-20 justify-center items-center w-full`}
    >
      <div
        className={`flex flex-col justify-center items-center w-1/2  border border-solid border-[#2D4053] shadow-custom`}
      >
        <div
          className={`text-left flex items-center justify-center w-11/12 h-10 my-5 border border-solid border-[#2D4053]`}
        >
          <input
            className={`w-full pl-1 focus:outline-none`}
            placeholder={'제목을 입력해 주세요.'}
            onChange={(e) => {
              setState((prevState) => ({
                ...prevState,
                title: e.target.value,
              }));
            }}
          />
        </div>
        <div
          className={`relative text-left flex items-center justify-center w-11/12 h-60 border border-solid border-[#2D4053] `}
        >
          <textarea
            className={`w-full h-full pl-1 pt-1 focus:outline-none resize-none`}
            placeholder={'반성문 제목을 입력해 주세요'}
            onChange={(e) => {
              setState((prevState) => ({
                ...prevState,
                content: e.target.value,
              }));
            }}
          />
        </div>
        <div className={`flex w-11/12 pt-5 justify-start items-center`}>
          <span>배경색</span>
          {colorArr.map((color, index) => {
            return (
              <ColorPicker
                key={color + index}
                id={color + index}
                color={color}
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
        <div className={`flex w-11/12 py-5 justify-start items-center`}>
          <span>아이콘</span>
          {imgArr.map((src, index) => {
            return (
              <IconButton
                key={'img' + index}
                id={'img' + index}
                src={src}
                alt={''}
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
      <div
        className={`flex items-center justify-center text-xl shadow-custom my-6 w-36 h-10 border border-solid border-[#202B3D] bg-[#D7E2EB]`}
      >
        <button onClick={postApi}>반성문 제출</button>
      </div>
    </div>
  );
};

export default PostInput;
