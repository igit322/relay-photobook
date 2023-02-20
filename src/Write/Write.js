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
        <div className="title">내 소설을 완성시켜줘!</div>
        <div>
          <input type="text" className="custom_input"></input>
          <button type="submit">검색</button>
        </div>

        <div>
          <button>다크모드</button>
        </div>
      </nav>
      <div>


      <div className="section1">
        <div className="section1_left">
          
            <div><p>책표지</p></div>
            <div class="img_wrap">
              <img src={bookCoverW} alt="bookCoverW" className="bookCoverW"></img>
            </div> 
            <div class="txt_wrap">
              <p>400x600</p>
              <p>사이즈의 이미지만 업로드 가능합니다</p>
            </div>
            <div class="button_wrap">
              <button class="button1">파일 선택</button>
            </div>
        </div>
      
        <div className="section1_right">
          <p>작품명</p>
          <input type="text" className="input_write" value="&nbsp;&nbsp;어느날 갑자기 손에서 장풍이 나가기 시작했다"></input>
          <p>장르</p>
          <input type="text" className="input_write" value="&nbsp;&nbsp;무협"></input>
        </div>
        <div className="section1_right2">
          <p>연령</p>
          <input type="text" className="input_write2" value="&nbsp;&nbsp;전 연령"></input>

        </div>
        <div className="section1_right3">

          <p>릴레이 참여자 수 설정</p>
          <div className="box">
            <div className="circle circle1"></div>
            <input type="text" className="num"></input>
            명
            <div className="circle circle2"></div>
          </div>

        </div>

        

        <div className="section1_left2">
          <p>키워드 (최소 2개이상의 키워드를 선택해 주세요. 최대 6개 제한)</p>
          {/* <input type="text" className="input_write" value="&nbsp;&nbsp;천하제일 무림의 서"></input> */}
          <div className="keyword">
            <div className="hash">로맨스</div>
            <div className="hash">판타지</div>
            <div className="hash">SF</div>
            <div className="hash">전생</div>
            <div className="hash">일상</div>
            <div className="hash">후회</div>
            <div className="hash">무협</div>
            <div className="hash">회귀</div>
            <div className="hash">중세</div>
            <div className="hash">현대</div>
            <div className="hash">고어</div>
            <div className="hash">얀데레</div>
            <div className="hash">하렘</div>
            <div className="hash">GL</div>
            <div className="hash">BL</div>
            <div className="hash">NTR</div>
            <div className="hash">피폐</div>
            <div className="hash">집착</div>
            <div className="hash">아카데미</div>
            <div className="hash">순애</div>
          </div>
        </div>

        <div className="section1_left3">
          <p>줄거리</p>
          <input type="text" className="input_write3" value="&nbsp;&nbsp;내용을 입력해주세요."></input>
        </div>
      </div>

      <div>
        <button className="cancel"></button>
        <button className="next"></button>
      </div>


      </div>
    </body>
  );
};

export default Write;
