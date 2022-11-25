# seb40_main_031




#Convention 관련

# 1. branch
<body>

## -branch는 main / dev / front-dev / back-dev / 개인 branch로 진행합니다.
```
main
⌙ dev
⌙ front-dev  ⌙ back-dev
⌙ 개인 branch
```

- 개인 branch에서 ➡️  **front-dev** / **back-dev** branch로 PR은 1명 이상의 리뷰 approve가 필요합니다
- front-dev / back-dev branch에서 ➡️ **dev** branch로 PR은 2명 이상의 리뷰 approve가 필요합니다
- dev branch에서 ➡️ **main** branch로 PR은 4명 이상의 리뷰 approve가 필요합니다
- PR을 한 사람이 approve 인원이 충족되면 Sqush Merge를 합니다
</body>
</br>

# 2. Commit

커밋 타입의 종류는 아래와 같습니다.
<!--StartFragment-->
타입 |설명
:--:|:--:
feat|새로운 기능 추가
fix|버그 수정
docs|문서 수정
style|코드 스타일 변경 (코드 포매팅, 세미콜론 누락 등)
design|사용자 UI 디자인 변경 (CSS 등)
test|테스트 코드, 리팩토링 (Test Code)
refactor|리팩토링 (Production Code)
build|빌드 파일 수정
ci|CI 설정 파일 수정
perf|성능 개선
chore|자잘한 수정이나 빌드 업데이트
rename|파일 혹은 폴더명을 수정만 한 경우
remove|파일을 삭제만 한 경우
add|코드나 문서가 추가된 경우
<!--EndFragment-->
</br>

<body>

## Commit Message Structure
> 제목 (Subject)
> (한줄 띄어 분리)
> 본문 (Body)
> (한줄 띄어 분리)
> 꼬리말 (Footer)

### Subject
- 제목은 50글자 이내로 작성한다.
- 첫글자는 대문자로 작성한다.
- 마침표 및 특수기호는 사용하지 않는다.
- 영문으로 작성하는 경우 동사(원형)을 가장 앞에 명령어로 작성한다.
- 과거시제는 사용하지 않는다.
- 간결하고 요점적으로 즉, 개조식 구문으로 작성한다.
```
ex) Fix, Add, Modify
```

### Body
- 72이내로 작성한다
- 본문은 영문 기준 72자마다 줄 바꾸기
- 본문은 어떻게보다 무엇을, 왜에 맞춰 작성하기

### Footer
- 선택사항

</body>


# Coworking

### - issue와 pull request는 템플릿을 사용합니다

### - 작업할 내용을 issue로 생성하고 공유합니다
