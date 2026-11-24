@AGENTS.md

# 브리핑 글 작성 규칙 (Daily Briefing)

자동 작업이 매일 브리핑 글을 쓸 때 이 규칙을 따른다.

## 파일
- 경로/파일명: `content/blog/briefing-YYYY-MM-DD.mdx` (예: `briefing-2026-11-23.mdx`)
- 하루에 한 파일. 파일명의 날짜와 metadata의 `date`가 같아야 한다.
- 영어 번역 파일(`.en.mdx`)은 선택. 없으면 EN 모드에서도 한국어 글이 보인다.
- 다른 파일은 건드리지 않는다.

## metadata (파일 맨 위, 반드시 이 형식)
```js
export const metadata = {
  title: "Daily Briefing — 2026-11-23",
  date: "2026-11-23",
  summary: "오늘의 핵심 한 줄 요약",
  category: "briefing",
};
```
- `title`, `date`, `summary`, `category`는 모두 필수. 값은 큰따옴표 문자열.
- `date`는 `YYYY-MM-DD` 형식 (정렬에 사용).
- `category: "briefing"`이 있어야 `/briefing`에만 나오고 `/blog`·홈 목록에서는 빠진다.
- 문자열 안에 큰따옴표 `"`를 쓰지 않는다 (필요하면 `'` 또는 「」 사용).

## 본문
- 일반 마크다운: `##` 제목, `-` 목록, `[텍스트](URL)` 링크, `>` 인용.
- 표 사용 가능 (GFM 표, remark-gfm 적용됨):
  ```
  | 분야 | 헤드라인 | 출처 |
  | --- | --- | --- |
  | 의료기기 RA | ... | [링크](https://...) |
  ```
- 출처 링크는 원문 URL을 그대로 쓴다.

## MDX에서 피해야 할 문자 (빌드 에러 원인)
- `{` `}`: JS 코드로 해석된다. 본문에 쓰지 말 것. 꼭 필요하면 `` `{}` ``처럼 백틱 코드로 감싼다.
- `<`: JSX 태그로 해석된다. "<5%" 같은 표현은 "5% 미만"으로 쓰거나 백틱으로 감싼다. `>`는 줄 맨 앞이면 인용이 되므로 주의.
- HTML 태그(`<br>`, `<div>` 등)와 HTML 주석(`<!-- -->`)을 쓰지 않는다.
- `import` / `export` 로 시작하는 줄은 metadata 외에는 쓰지 않는다.
- 표 셀 안에서 `|`를 쓰지 않는다.

## 확인
- 커밋 전 `npm run build`가 성공해야 한다.
