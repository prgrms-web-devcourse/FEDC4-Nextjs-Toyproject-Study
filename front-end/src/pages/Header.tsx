const Header = () => {
    return(
        <>
            <header style={{ display:'flex',backgroundColor:'#FBFBFD', fontFamily:' ',textAlign:'center',padding:'10px', borderBottom:'1px solid #2D4053'}}>
                <div style={{ userSelect: 'none', flex:'1'}} className="title">고해성사</div>
                <div style={{flex:'1'}} className="postButton">  
                    <button style={{backgroundColor:'#D7E2EB', border:'1px solid black',borderRadius:'3px',padding:'1px 3px'}} className="postButton">반성문 쓰기</button>
                </div>
                    <div style = {{display: 'flex', }} className="login-enroll">
                        <div style = {{display: 'flex', marginRight: '20px' }} className="login"><a href="">로그인</a></div>
                        <div style = {{display: 'flex', marginRight: '8px'}} className="enroll"><a href="">회원가입</a></div>
                    </div>
                
            </header>
        </>
    )
}

export default Header