# THE ARCHIVE — Portfolio

Youngjoo Suh의 프로젝트 포트폴리오. Next.js App Router 기반으로 제작되었으며, AI / Leadership & Planning / Work 세 카테고리로 프로젝트를 정리해 보여줍니다.

- 배포: https://youngjoosuh.vercel.app
- 연락처: youngjoosuh23@gmail.com · [linkedin.com/in/youngjoosuh23](https://www.linkedin.com/in/youngjoosuh23)

## 구조

- `app/page.tsx` — 홈, 카테고리별 프로젝트 그리드(`ProjectGrid`)
- `app/projects/[slug]/page.tsx` — 프로젝트 상세 페이지
- `components/ProjectGrid.tsx` — 카테고리별 폴더 스택 카드 UI
- `components/ProjectDetail.tsx` — Sandbox(실시간 iframe 프리뷰) / Document(개요·KPI·차트) 탭
- `lib/projects.ts` — 프로젝트 데이터 정의 (`Project` 타입, `projects` 배열)

## 개발

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인합니다.

새 프로젝트를 추가하려면 `lib/projects.ts`의 `projects` 배열에 항목을 추가하면 됩니다.

## 배포

Vercel에 연결되어 있습니다.

```bash
npx vercel        # 프리뷰 배포
npx vercel --prod # 프로덕션 배포
```
