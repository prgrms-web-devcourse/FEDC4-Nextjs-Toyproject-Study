import Button from '../designSystems/Button';

const Header = () => {
  return (
    <>
      <header
        style={{
          display: 'flex',
          backgroundColor: '#FBFBFD',
          fontFamily: ' ',
          textAlign: 'center',
          padding: '10px',
          borderBottom: '1px solid #2D4053',
        }}
      >
        <div style={{ flex: '1' }} className='title'>
          고해성사
        </div>
        <div style={{ flex: '1' }} className='postButton'>
          <Button text={'반성문 쓰기'} />
        </div>
      </header>
    </>
  );
};

export default Header;
