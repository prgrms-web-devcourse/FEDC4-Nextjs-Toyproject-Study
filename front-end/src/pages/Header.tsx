const Header = () => {
    return(
        <>
            <header style={{ display:'flex',backgroundColor:'#FBFBFD', fontFamily:' ',textAlign:'center',padding:'10px', borderBottom:'1px solid #2D4053'}}>
                <div style={{flex:'1'}} className="title">고해성사</div>
                <div style={{flex:'1'}} className="postButton">  
                    <button style={{backgroundColor:'#B2C0CC ', border:'1px solid black',borderRadius:'3px',padding:'1px 3px'}} className="postButton">반성문 쓰기</button>
                </div>
            </header>
        </>
    )
}

export default Header