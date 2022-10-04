# D.velkit <br/>

![Github_리드미_프론트](https://user-images.githubusercontent.com/94691794/193735269-3a120723-3085-4ab3-89f1-09c3cd2aade1.png) <br/>

### ⭐프로젝트 소개
---------------------------------------------
<b>🚀성장하는 사람들을 위한 프로젝트 협업 서비스 디벨킷🚀</b><br/>
디벨킷에서 파일공유, 일정관리, 채팅 등 다양한 기능을 사용해보세요! <br/>
프로젝트를 생성한 후 초대코드를 전달하면 하나의 워크스페이스에서 공동 프로젝트 진행이 가능합니다. <br/>

🟨[디벨킷 바로가기](https://d-velkit.com/)<br/>
🖥[시연영상보기]<br/>
<br/><br/>

### 👨개발기간
---------------------------------------------
개발: 2022.08.26 ~ 2022.10.07<br/>
런칭: 2022.09.27<br/>
<br/><br/>

### 👨‍🚀디벨킷 개발자들
---------------------------------------------

|이름|깃헙주소|담당|
|:---:|:---:|:---:|
|한호성L|[https://github.com/hosunghan-0821](https://github.com/hosunghan-0821)|BE/Spring|
|황인권|[https://github.com/ingwon97](https://github.com/ingwon97)|BE/Spring|
|이재헌|[https://github.com/romeo92s](https://github.com/romeo92s)|BE/Spring|
|임준철|[https://github.com/cheoljun0422](https://github.com/cheoljun0422)|BE/Spring|
|류현VL|[https://github.com/LuisKlopp](https://github.com/LuisKlopp)|FE/React|
|이지혜|[https://github.com/G-Hae](https://github.com/G-Hae)|FE/React|
|원동환|[https://github.com/endol007](https://github.com/endol007)|FE/Supporter|
|김소정|[https://github.com/kimsojeong01](https://github.com/kimsojeong01)|Designer|

<br/><br/>

### 🚀FrontEnd 기술 스택
-------------------------------------------
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/RTK Query-764ABC?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=flat-square&logo=Amazon EC2&logoColor=white"/> <img src="https://img.shields.io/badge/Amazon S3-569A31?style=flat-square&logo=Amazon S3&logoColor=white"/> <img src="https://img.shields.io/badge/Stomp-000000?style=flat-square&logo=Stomp&logoColor=white"/> <img src="https://img.shields.io/badge/Sock.JS-000000?style=flat-square&logo=Sock.JS&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=flat-square&logo=GitHub Actions&logoColor=white"/><img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=GitHub Actions&logoColor=white"/>
<br/><br/>

### 🔧FrontEnd 사용 툴
-------------------------------------------
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white"/> <img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white"/> <img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=Slack&logoColor=white"/> <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/> 
<br/><br/>

### 🗼서비스 아키텍쳐
-------------------------------------------
<img width="895" alt="디벨킷아키텍처" src="https://user-images.githubusercontent.com/70882917/193648270-6f9f85d4-dc2c-41be-ad19-386deafd5012.png">
<br/><br/>

### 📜 API
-------------------------------------------
[🗒 API 설계](https://www.notion.so/379722be5a5f4ff4a4a61a0b5e72d244?v=7ebf5e46885447629e6cd31fab990a9d)
<br/><br/>

### 💻 기술적 의사 결정
-------------------------------------------
|기술명|이유|
|:---|:---|
|React|본 서비스가 컴포넌트 단위로 변동되는 것이 UX적으로 좋은 것을 고려하여 컴포넌트를 통하여 웹 페이지를 효율적으로 개발 및 관리할 수 있는 React를 선택|
|CloudFront|사용자에게 제공되는 정적 컨텐츠의 전송 속도를 높이고 HTTPS를 적용시키기 위해 선택|
|RTK Query| 상태관리에서 더 나은 캐싱 자동화, 데이터 패칭 로직 단순화를 구현<br> RTK의 연장선으로 쓸 수 있어서 추가 라이브러리가 필요 없고, REST API가 기본적으로 내장되어 있어서 구현이 편리한 점을 고려하여 선택<br> 하나의 모듈(createAPI)을 중심으로 관련 코드를 모두 작성할 수 있어서 유지 보수가 편한 것을 고려하여 선택<br>|
|Stomp,Sock.Js|stomp는 단순 (또는 스트리밍) 텍스트 지향 메시징 프로토콜 spring에 종속적<br> 구독방식으로 사용 중|

<br/><br/>

### 👨‍🚀주요 기능
-------------------------------------------------------
[게스트로그인] 회원가입하지 않은 사용자가 서비스를 체험해 볼 수 있는 기능<br/>
특징: 메인화면에서 “임시계정으로 체험하기” 버튼을 클릭하면 자동으로 아이디가 생성되어<br/>
회원가입 및 로그인이 완료됩니다.

[워크스페이스] 자유로운 워크스페이스 생성<br/>
특징: 워크스페이스 내에서 다양한 기능 사용 가능 <br/>
초대코드를 전달하면 하나의 워크스페이스에서 공동 프로젝트 진행이 가능 <br/><br/>

[문서작성] 문서, 이미지, 파일을 쉽게 공유하고 수정<br/>
특징: 자유로운 파일공유: 전체 30MB내에서 파일 공유를 가능<br/>
문서 읽은 사람 명단 표시<br/><br/>

[실시간채팅] 각 프로젝트에서 자유로운 채팅가능<br/>
추후에 프로젝트에 합류하는 사람들도 전체적인 프로젝트 진행상황을 알 수 있도록<br/>
기존 채팅 내역 불러오기 기능을 무한스크롤로 구현<br/><br/>

[캘린더] 프로젝트내 모든 사람들이 일정을 확인하고 공유<br/>
캘린더를 사용하여 일정추가/일정확인/삭제 기능 구현<br/>

<br/><br/>


### ⛑트러블 슈팅
----------------------------------------------------

<details>
<summary>페이지 이동시의 잦은 렌더링: 컴포넌트화</summary>
<div markdown="1">
  
```
  (1) 문제상황
  a. 특정 워크스페이스(프로젝트) 내부로 들어갔을 경우, 사이드에 있는 메뉴는 같은 내용임에도
  기능(공지사항, 문서 등)별로 페이지를 나누면 사이드 메뉴가 다시 처음부터 랜더링이 되면서
  불필요하게 잦은 랜더링이 발생하는 현상이 있어 이를 해결하고자 함.
  채팅 기능은 끊기지 않고 진행되어야 하는 목적이 있는데
  워크스페이스 내부에서 페이지가 전환되는 경우 자꾸 채팅창을 불러오게 되므로 불필요한 랜더링이 생김.
  
  b. 채팅 창 위치가 드래그가 가능하다 보니 리 렌더링이 반복적으로 발생하게 됨
  리 렌더링이 발생함에 따라 네트워크 탭의 웹소켓 다중 연결
  - 채팅 창 위치를 움직일 때
  - Input태그가 onChange 될 때
  - 메시지 전송할 때
  - 사이드 메뉴를 클릭할 때
  각각 웹 소켓이 무한정 연결됨
  
  (2) 해결방안
  a. 워크스페이스 내부에서 사이드바는고정으로 두고 변화가 필요한 부분만 컴포넌트화시켜서 
  교체하는 방식으로 리팩토링
  b. stompclient생성 및 소켓 연결 코드를 함수형컴포넌트 밖으로 빼낸 후 최초에 웹소켓이 
  하나만 연결 되고 그 다음부터는 더이상 연결되지 않음
  ```
</div>
</details>

<br/> 
  
<details>
<summary>Editor 사용에서 HTML태그가 그대로 보이는 문제</summary>
<div markdown="1">
  
```
  (1) 문제상황
  에디터를 사용하여 작성한 글을 화면에 불러올 때, 서버로 전송된 html태그가 변환되지 않고 
  그대로 노출되는 문제가 발생. 이를 해결하기 위해서 html 태그를 변환하는 dangerouslySetInnerHTML을 사용하였는데,
  이 태그는 이름에서도 알다시피 크로스 사이드 스크립트 이슈가 발생할 위험을 가지고 있는 코드.
  
  (2) 해결방안
  이미 에디터 내부에서 XSS공격을 막고 있다면, 굳이 dompurify를 추가로 설치하여 과잉방어를 할 필요는 없다고 생각하여
  주요 XSS 공격 패턴을 알아본 후 alert창, console창 등 자바스크립트 명령이 사이트내부에서 돌아가게 되는지를 확인.
  확인을 하여보니 자바스크립트 함수 뿐만 아니라 단순한 CSS마저도, 사용자가 강제로 입력한 것은 실제로 변환되지 않고
  오로지 에디터 내부에서 만들어진 CSS만이 변환되는 것을 확인함.
  
```
</div>
</details>
   
<br/><br/>
