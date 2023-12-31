import arrowDown from 'assets/img/arrow-down.svg';
import arrowUp from 'assets/img/arrow-up.svg';
import { useState } from 'react';
const PostGuidButton = () => {
  const [imgPath, setImgPath] = useState(arrowDown);
  const [guidFlag, setGuidFlag] = useState(false);
  const guidButtonClick = () => {
    if (!guidFlag) {
      setImgPath(arrowUp);
    } else {
      setImgPath(arrowDown);
    }
    setGuidFlag(!guidFlag);
  };

  return (
    <div
      id='postContainer'
      className={`flex flex-col justify-center align-middle py-12 px-20 justify-center items-center w-full`}
    >
      <button
        id={`postGuidButton`}
        className={`flex flex-row justify-between items-center border border-solid border-[#2D4053] bg-[#E9ECF3] w-1/2 h-12 cursor-pointer px-2`}
        onClick={guidButtonClick}
      >
        <h2 className={`font-dgm text-base`}>반성문 가이드</h2>
        <img src={imgPath} alt='' />
      </button>
      <div
        id='postGuidText'
        className={`flex flex-col justify-center w-1/2 pl-2 border-x border-b border-solid border-[#2D4053] bg-white pb-2 ${
          guidFlag ? '' : 'hidden'
        }`}
      >
        <span className={`text-2xl font-semibold pb-5 text-left pt-5`}>
          반성문을 올바르게 적는 방법
        </span>
        <span className={`text-xl text-primary pb-2`}>들어가야하는 것</span>
        <span>- 나는 누구인가</span>
        <span>- 본인이 언제 어디서 무슨 잘못을 어떻게 저질렀는가</span>
        <span>- 그래서 누구에게 피해를 끼쳤는가</span>
        <span>- 실제 상황과 다르게 알려진 사실이 있는가</span>
        <span>- 얼마나 반성하고 있는가</span>
        <span>- 앞으로 어떻게 이 일을 책임질 생각인가</span>
        <span className={`text-xl text-danger py-2`}>
          들어가지 말아야 하는 것
        </span>
        <span>- 본의 아니게</span>
        <span>- 오해</span>
        <span>- 그럴 뜻은 없었지만</span>
        <span>- 앞으로는 신중하게</span>
        <span>- 억울합니다.</span>
        <span>- 하지만 저만 잘못한 것은 아닙니다.</span>
        <span>- 그럴 의도는 아니었지만</span>
      </div>
    </div>
  );
};

export default PostGuidButton;
