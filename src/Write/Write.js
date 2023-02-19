// import NavBar from "../Navbar/Navbar.js";
import "../Write/Write.css";
import bookCoverW from "../assets/gabriel-1765126.jpg";

const Write = () => {
  return (
    // <div>
    //   <input type="text" className="custom_input"></input>
    // </div>

    <body>
      <nav className="navbar">
        <div>내 소설을 완성시켜줘!</div>
        <div>
          <input type="text" className="custom_input"></input>
          <button type="submit">검색</button>
        </div>

        <div>
          <button>다크모드</button>
        </div>
      </nav>
      <div>
        <div className="section1_left">
          <div className="section1">
            <div>책표지</div>
            <div class="img_wrap">
              <img src={bookCoverW} alt="bookCoverW" className="bookCoverW"></img>
            </div> 
            <div>
              <p>400x600</p>
              <p>사이즈의 이미지만 업로드 가능합니다</p>
            </div>
            <button>파일 선택</button>

          </div>
        </div>
        <div className="section1_right"></div>
      </div>
    </body>
  );
};

export default Write;
