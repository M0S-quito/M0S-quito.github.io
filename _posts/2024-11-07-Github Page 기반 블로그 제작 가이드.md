---
title: 깃허브를 통한 블로그 생성
author: M0S-quito
date: 2024-11-07 14:10:00 +0800
categories: [Blogging, Tutorial]
tags: [writing]
render_with_liquid: false
---

## Step 0. 사전 준비사항

- Windows 64bit
- Git 설치
- VS Code 설치
- Github 가입

--- 
## Step 1. Github Page 생성

### Step 1-1. Repository 생성

- **github username**이 `karina`인 경우, **repository name**을 `karina.github.io`로 설정
- **Public** 체크
- **Add a README file** 체크

### Step 1-2. Github Page 설정

- 생성한 리포지토리로 이동, 상단 **Settings** 클릭
- 좌측 **Pages** 클릭
- **Source**를 `Deploy from a branch`로 설정
- 사이트 접속 확인 (예시: `https://karina.github.io`)

### Step 1-3. VS Code 활용

#### 리포지토리 클론
- VS Code 열기 >> F1 키 입력 >> git clone 검색 >> Git: Clone 선택
- 리포지토리 주소 입력 >> 클론할 위치 선택

#### 로컬 변경사항 적용
- 클론한 리포지토리 열기 (`README.md` 파일 확인)
- `index.html` 파일 생성

```html
<html>
	<body>
		Hello! This is the first page!
	</body>
</html>
```

- 좌측 **Source Control** 메뉴 선택
- `+` 버튼을 클릭하여 변경사항 추가
- 커밋 메시지 입력, 커밋 & 푸시
- 사이트 반영 확인 (예시: `https://karina.github.io`)

---
## Step 2. 로컬 개발 환경 구축

### Step 2-1. Ruby 설치

- [공식 홈페이지](https://rubyinstaller.org/downloads/)에서 최신버전 다운로드 (Ruby+Devkit x.y.z-1 (x64)) 및 설치
- 시작(윈도우 키)메뉴에서 `Start Command Prompt with Ruby` 실행
- cd 명령어로 리포지토리가 있는 위치로 이동
```shell
cd C:\Users\karina\Documents\karina.github.io
```
- jekyll, bundler, webrick 설치
```shell
gem install jekyll bundler
gem install webrick
```
- 설치 확인
```shell
ruby -v
jekyll -v
bundler -v
```

### Step 2-2. Jekyll 서버 구축

- jekyll 생성
```shell
jekyll new ./
# 또는
jekyll new ./ --force
```
- bundle install
```shell
bundle install
```
- jekyll 서버 실행
```shell
bundle exec jekyll serve
```
- http://127.0.0.1:4000/ 또는 http://localhost:4000/ 접속 확인

---
## Step 3. Jekyll 테마 적용

### Step 3-0. 테마 선택
- http://jekyllthemes.org
- https://jekyllthemes.io/free
- https://themes.jekyllrc.org
- https://github.com/topics/jekyll-theme

### Step 3-1. chirpy 테마 적용
- [공식 홈페이지](https://github.com/cotes2020/jekyll-theme-chirpy)에서 압축파일 다운로드
- 압축을 해제한 뒤, 모든 파일과 폴더를 로컬 리포지토리로 복사
- bundle install
```shell
bundle install
```
- jekyll 서버 실행
```shell
bundle exec jekyll serve
```
- http://127.0.0.1:4000/ 또는 http://localhost:4000/ 접속 확인
- 모든 변경사항 커밋 및 푸시


### Step 3-2. Github Action 적용
- 원격 리포지토리의 상단 **Settings** 클릭
- 좌측 **Pages** 클릭
- **Source**를 `Github Actions`로 설정
- `Configure` 클릭
- `Commit changes...` 클릭
- 로컬 리포지토리에서 pull

### Step 3-3. Node.js 설치
[공식 홈페이지](https://nodejs.org/en/)에서 최신버전 다운로드 및 설치
- Ruby 프롬프트에서 아래 명령어 실행
```shell
npm install && npm run build
```
- `#파일경로에 한글 있으면 오류남`
- `#json파일 구문 오류 있을 때 아래 코드 삽입`
```js
{ "name": "my-github-blog", "version": "1.0.0", "scripts": { "build": "jekyll build", "serve": "jekyll serve" } }
```


### Step 3-4. 테마 상세 설정
- `.gitignore` 파일 하단 수정
```shell
# Misc
# _sass/dist
# assets/js/dist
```
- `_config.yml` 파일 수정

```shell
timezone: Asia/Seoul

url: "https://karina.github.io"

github:
  username: karina
```
- 모든 변경사항 커밋 및 푸시
- 커밋 메시지 주의
-> **Conventional Commits**방식을 사용 해야 함

```
git commit -m "<type><subject>"
```

**type** 종류
- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 수정 (코드 수정은 없음)
- style: 코드 스타일 수정 (띄어쓰기, 세미콜론 추가 등 동작에는 영향 없음)
- refactor: 코드 리팩토링 (기능 변화 없이 코드 구조만 수정)
- test: 테스트 코드 추가나 수정
- chore: 빌드 관련 작업이나 패키지 매니저 설정 등, 기타 잡일


- 사이트 반영 확인 (예시: `https://karina.github.io`)