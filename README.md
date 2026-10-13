# 윤찬하 개인 프로필 웹사이트

Node.js 20 이상에서 실행합니다. 외부 패키지 설치와 빌드는 필요하지 않습니다.

```sh
npm start
```

브라우저에서 http://localhost:3000 에 접속하세요. 종료는 터미널에서 `Ctrl+C`를 누릅니다. `npm run dev`도 같은 서버를 실행합니다. 파일을 수정한 뒤 브라우저를 새로고침하면 반영됩니다.

포트가 사용 중이면 다른 포트를 지정합니다(macOS/Linux):

```sh
PORT=3001 npm start
```

## 폴더 구조

```text
public/
  index.html       시작 페이지와 프로필 내용
  styles.css       디자인 및 반응형 레이아웃
  script.js        메뉴, 이메일 복사, 메일 작성 기능
scripts/
  server.mjs       Node.js 기본 모듈로 만든 로컬 정적 서버
stitch_modern_personal_portfolio_website/
                    Stitch 디자인 참고 자료
package.json        로컬 실행 명령 (외부 의존성 없음)
vercel.json         public 폴더의 정적 배포 설정
```

실제 웹사이트 수정은 `public/`의 파일에서 진행합니다. 로컬 서버는 `public/` 안의 파일만 제공합니다. 페이지 파일은 폴더 이동 전과 동일하며, 기존 디자인과 기능을 유지합니다.

## Vercel 배포

프로젝트를 Git 저장소에 올리고 Vercel에서 해당 저장소를 Import하세요. Root Directory는 이 프로젝트 루트로 지정합니다. `vercel.json`에 Framework Preset은 Other, 빌드 및 설치 명령은 비움, Output Directory는 `public`로 설정되어 있습니다. Vercel에서는 Node 로컬 서버를 실행하지 않고 정적 파일을 제공합니다.

공식 설정 문서: https://vercel.com/docs/project-configuration/vercel-json

## 콘텐츠 수정

프로젝트 카드의 `https://example.com/?project=...`를 실제 URL로 변경하세요. 이메일을 바꿀 때는 `public/index.html`의 표시 주소와 모든 `mailto:` 주소를 함께 수정하면 복사 기능과 메시지 폼도 새 주소를 사용합니다.

활동 이력·사진·프로젝트 상세 내용 및 소셜 링크는 예시입니다. 빠른 메시지 폼은 입력 내용을 담은 기본 메일 앱 작성창을 엽니다. 이미지는 `public/assets/images/`에 로컬 저장되어 있습니다. Google Fonts 표시는 인터넷 연결이 필요합니다.
