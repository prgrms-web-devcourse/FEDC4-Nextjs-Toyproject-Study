interface ModalProps {
  isVisible: boolean;
  hideModal: () => void;
}

export default function BaseModal({ isVisible, hideModal }: ModalProps) {
  if (!isVisible) {
    return null;
  }

  return (
    <div>
      <div>
        <button onClick={hideModal}>닫기</button>
        <div>
          {/*타이틀영역*/}
          <span>늦어서 죄송합니다.</span>
          {/*본문 영역*/}
          <span>저는 어쩌구 저쩌구~~~~~~</span>
          {/*아이콘 영역*/}
          <div>아이콘 자리입니다!</div>
        </div>
        <div>
          <div>
            <span>지각왕이시라니 저도 지각왕인데 어쩌구 저쩌구~~~</span>
          </div>
          {/*버튼 영역*/}
          <div>
            <input placeholder='댓글을 입력해 주세요!' />
            <button>게시</button>
          </div>
        </div>
      </div>
    </div>
  );
}
