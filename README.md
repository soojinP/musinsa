<h1>무신사 Global 프론트직무 과제 by soojin_park</h1>
<h2>[실행 방법]</h2>

1. Clone the repository

    ```bash
    git clone https://github.com/soojinP/musinsa.git
    ```

2. Navigate to the project directory and install the dependencies

    ```bash
    cd ./musinsa && yarn
    ```

3. Build in production mode and start the application

    ```bash
    yarn build && yarn preview
    ```

4. Open your web browser and enter the following URL:

    ```
    <http://localhost:4173> or <http://http://127.0.0.1:4173/>
    ```

<h2>[프로젝트 설명]</h2>

### 1. 구현 내용

-   스크롤이 리스트 하단까지 내려오면 다음 리스트 항목이 노출되며 page 10까지 무한 스크롤링
-   /homework 페이지에 진입시 query params에 page값이 있는 경우 해당 page를 시작.
    -   /homework path가 아닌 경우에는 query param으로 page값이 있어도 1부터 시작하도록
-   리스트 아이템 데이터를 받아오는 동안에 로딩아이콘을 표시
-   아이템이 삭제되어 스크롤링으로 다음 리스트를 가져올 수 없는 경우 ‘다음 페이지 불러오기’ 버튼으로 다음 리스트 패치
-   화면에 보여지는 아이템 갯수가 0개이며 다음 페이지가 없는 경우 ‘마지막 페이지’문구 표시
-   필터 중복으로 선택 가능하며 화면에는 필터링이 적용된 리스트 출력
-   아이템의 삭제 버튼을 누르면 화면에서 보여지지 않음
-   초기화 버튼을 누르면 삭제되었던 아이템들이 다시 출력

### 2. 프로젝트 환경

-   React with TypeScript로 개발
    -   React는 Virtual DOM을 활용하여 수정된 부분만 실제 DOM에 적용하는 방식인 React.JS를 선택했으며 컴포넌트 단위로 구성하여 가독성도 높으며 UI와 로직을 재사용하기 좋음.
    -   컴파일 단계에서 오류를 파악하기 위해 typescript를 채택
-   Vite로 react-type template사용하여 프로젝트 생성
    -   CRA에서는 웹팩이 모든 js코드를 번들링한 뒤 로드하는데 vite는 ESbuild 기반으로 빌드되며 js 코드를 모두 번들할 필요없이 서버(브라우저)에서 인터프리트하여 웹페이지를 보여주기 때문에 훨씬 속도가 빠름.
-   yarn berry로 한 이유
    -   Yarn Berry는 node_modules를 생성하지 않고 의존성 정보를 저장해두어 디스크 I/O 없이 어떤 패키지가 어떤 라이브러리에 의존하는지, 각 라이브러리는 어디에 위치하는지를 바로 알 수 있어 import할 때에도 빠름.

### 3. 사용한 라이브러리

-   react-query
    -   같은 key값의 query는 중복 호출하지 않는 캐싱 기능을 제공하여 선택
    -   무한스크롤링에 useInfiniteQuery()을 활용하여 구현
-   전역 상태 관리 라이브러리 : Recoil JS
    -   내부에서 React 상태를 활용하며 react hook과 사용법이 동일해 선택
-   CSS-in-JS : emotion
    -   css 주입이 가능하며 styled-component와 동일한 사용법 지원하여 선택

### 4. 최적화

-   custom hook 활용
    -   리액트 상태주기를 사용하는 로직을 재사용하고 custom hook으로 분리함으로써 tsx파일 내부 로직을 간단하게 하여 가독성을 높임.
-   useCallback 사용
    -   함수 재사용을 위해 useCallback으로 감쌈. useCallback으로 감싸지 않을 경우 재생성됨.

### 5. 테스트

-   Storybook
    -   특정 데이터에서 어떤식으로 아이템이 그려지는지 바로 확인할 수 있도록 storybook을 활용
-   Jest
    -   스크린에 보여지는 데이터로는 선택된 필터값이 잘 적용되었는지 확인이 어려워 테스트 코드를 작성하여 확인
-   mock data 활용 (/public/data/database.json)
    -   api 호출이 하루에 호출 가능한 횟수가 제한되어 있어 mock data를 가지고 초기 단계에 활용
