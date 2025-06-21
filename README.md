# M0S-quito Shell

실제 터미널처럼 명령어를 입력하여 사이트를 탐색할 수 있는 웹 기반 셸 인터페이스입니다.  
HTML, CSS, JavaScript만으로 구현된 미니멀한 정적 웹사이트입니다.

> 🔗 **사이트 주소**: [https://m0s-quito.github.io](https://m0s-quito.github.io)

---

## ✨ 주요 기능

- `cd`, `ls`, `clear` 등 기본 명령어 지원
- 마크다운(.md) 파일을 자동으로 불러와 렌더링
- `cd /Blog/mypost`와 같이 블로그 콘텐츠를 터미널에서 바로 확인 가능
- 이스터에그 및 숨겨진 명령어 존재
- 한 페이지 내에서 동작하는 SPA (Single Page Application)
- 반응형 UI, 데스크탑과 모바일 모두 지원

---

## 📁 사이트 구조

- `index.html` : 메인 터미널 페이지
- `terminal.js` : 명령어 처리 및 콘텐츠 라우팅
- `commands/` : 경로에 대응하는 `.md` 파일 저장 폴더
- `assets/` : 스타일, 이미지 등 정적 리소스

---

## 🖥️ 사용 가능한 명령어 예시

```shell
cd /Blog/mypost       # 특정 블로그 글 불러오기
ls                    # 현재 경로의 파일/디렉토리 목록 확인
clear                 # 화면 지우기
help                  # 도움말 출력

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
