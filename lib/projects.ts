export type KPI = {
  label: string;
  value: string;
  delta?: string;
  positive?: boolean;
};

export type ChartPoint = {
  month: string;
  value: number;
  secondary?: number;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  type: "ai" | "leadership" | "work";
  image?: string;
  sandboxUrl: string;
  document: {
    title: string;
    overview: string;
    kpis: KPI[];
    chartData: ChartPoint[];
    chartLabel: string;
  };
};

export const projects: Project[] = [
  {
    slug: "career-copilot",
    index: "PRJ_001",
    title: "Career Copilot",
    subtitle: "AI 커리어 의사결정 코파일럿",
    description:
      "이력서 문구 개선·구조 재설계부터 면접 준비까지. AI가 커리어 방향을 함께 설계하는 올인원 플랫폼.",
    tags: ["AI", "Next.js", "LLM", "Career"],
    year: "2025",
    type: "ai",
    image: "/career_copilot_screenshot.png",
    sandboxUrl: "https://ai-career-decision-copilot.vercel.app/",
    document: {
      title: "Career Copilot — 프로젝트 개요",
      overview:
        "취업 준비생과 커리어 전환자를 위한 AI 코파일럿. 이력서 한 장을 업로드하면 AI가 문구·구조·키워드를 분석하고 면접 예상 질문까지 제공.",
      kpis: [
        { label: "이력서 분석", value: "AI", delta: "자동화", positive: true },
        { label: "면접 준비", value: "올인원", delta: "원스톱", positive: true },
        { label: "커리어 방향", value: "AI 제안", delta: "맞춤형", positive: true },
        { label: "지원 트래킹", value: "실시간", delta: "대시보드", positive: true },
      ],
      chartData: [
        { month: "Jan", value: 120 },
        { month: "Feb", value: 280 },
        { month: "Mar", value: 450 },
        { month: "Apr", value: 680 },
        { month: "May", value: 920 },
        { month: "Jun", value: 1200 },
      ],
      chartLabel: "누적 사용자",
    },
  },
  {
    slug: "brand-campaign",
    index: "PRJ_002",
    title: "Brand Campaign",
    subtitle: "디지털 통합 마케팅 캠페인",
    description:
      "신제품 론칭을 위한 통합 디지털 마케팅 전략 수립 및 실행. SNS, 검색 광고, 콘텐츠 마케팅 병행.",
    tags: ["Strategy", "SNS", "SEO", "CRM"],
    year: "2024",
    type: "leadership",
    sandboxUrl: "https://example.com",
    document: {
      title: "Brand Campaign — 캠페인 성과 분석",
      overview:
        "신규 브랜드 인지도 구축 캠페인. 6개월 집행 기간 동안 SNS 및 퍼포먼스 광고 복합 운영.",
      kpis: [
        { label: "노출수", value: "2.4M", delta: "+340%", positive: true },
        { label: "클릭률 (CTR)", value: "5.2%", delta: "+2.1%p", positive: true },
        { label: "CPA", value: "₩3,200", delta: "-28%", positive: true },
        { label: "ROAS", value: "680%", delta: "+180%p", positive: true },
      ],
      chartData: [
        { month: "Jan", value: 120, secondary: 38 },
        { month: "Feb", value: 340, secondary: 95 },
        { month: "Mar", value: 580, secondary: 160 },
        { month: "Apr", value: 920, secondary: 240 },
        { month: "May", value: 1600, secondary: 390 },
        { month: "Jun", value: 2400, secondary: 580 },
      ],
      chartLabel: "노출 (천)",
    },
  },
  {
    slug: "ai-content-pipeline",
    index: "PRJ_004",
    title: "AI Content Pipeline",
    subtitle: "LLM 기반 콘텐츠 자동화 시스템",
    description:
      "LLM을 활용한 콘텐츠 기획·초안 생성 자동화 파이프라인. 에디터 리뷰 시간 60% 단축.",
    tags: ["LLM", "Python", "Prompt Eng.", "Automation"],
    year: "2025",
    type: "ai",
    sandboxUrl: "https://example.com",
    document: {
      title: "AI Content Pipeline — 성과 리포트",
      overview:
        "뉴스레터·SNS 콘텐츠 생산 효율화를 위한 LLM 파이프라인. 기획 → 초안 → 교정까지 자동화.",
      kpis: [
        { label: "생산 시간", value: "−60%", delta: "절감", positive: true },
        { label: "월간 발행량", value: "320건", delta: "+210%", positive: true },
        { label: "클릭률", value: "7.4%", delta: "+2.8%p", positive: true },
        { label: "비용 절감", value: "₩4.2M", delta: "/월", positive: true },
      ],
      chartData: [
        { month: "Jan", value: 40, secondary: 12 },
        { month: "Feb", value: 80, secondary: 28 },
        { month: "Mar", value: 140, secondary: 55 },
        { month: "Apr", value: 210, secondary: 90 },
        { month: "May", value: 270, secondary: 130 },
        { month: "Jun", value: 320, secondary: 180 },
      ],
      chartLabel: "월간 발행 건수",
    },
  },
  {
    slug: "matcha",
    index: "PRJ_005",
    title: "Matcha",
    subtitle: "장소 기반 오픈 네트워킹 앱",
    description:
      "지금 같은 장소에 있는 사람들과 실시간으로 연결되는 위치 기반 소셜 앱. 지도 체크인, 채팅 요청, 이벤트 기능으로 오프라인 첫 만남의 장벽을 낮춤.",
    tags: ["React", "Firebase", "Google Maps", "TypeScript"],
    year: "2025",
    type: "ai",
    sandboxUrl: "https://gen-lang-client-0751433140.web.app",
    document: {
      title: "Matcha — 프로젝트 개요",
      overview:
        "말차(Matcha)는 지도로 활성 장소를 탐색하고, 관심 있는 상대에게 채팅을 신청하거나 공개 이벤트에 참여해 새로운 연결을 만드는 장소 기반 오픈 네트워킹 앱. LinkedIn 같은 비동기 플랫폼이 채우지 못하는 '지금, 여기'라는 공간적 맥락을 활용한다.",
      kpis: [
        { label: "채팅 성사율", value: "≥30%", delta: "목표", positive: true },
        { label: "체크인→요청 전환율", value: "≥40%", delta: "목표", positive: true },
        { label: "이벤트 참여율", value: "≥25%", delta: "목표", positive: true },
        { label: "재방문율", value: "≥50%", delta: "목표", positive: true },
      ],
      chartData: [
        { month: "May", value: 11 },
        { month: "Jun", value: 9 },
      ],
      chartLabel: "월별 커밋 수",
    },
  },
  {
    slug: "mobile-app",
    index: "PRJ_003",
    title: "Habit Tracker App",
    subtitle: "습관 형성 모바일 애플리케이션",
    description:
      "일상 루틴 관리를 위한 크로스플랫폼 모바일 앱. React Native + Expo로 개발, App Store 출시.",
    tags: ["React Native", "Expo", "Supabase", "iOS/Android"],
    year: "2025",
    type: "work",
    sandboxUrl: "https://example.com",
    document: {
      title: "Habit Tracker — 출시 성과 리포트",
      overview:
        "개인 생산성 향상을 위한 습관 추적 앱. 베타 테스트 1,200명 거쳐 App Store 출시 후 4개월 성과.",
      kpis: [
        { label: "다운로드", value: "8,200", delta: "+62%", positive: true },
        { label: "D7 리텐션", value: "41%", delta: "+9%p", positive: true },
        { label: "평균 평점", value: "4.6 ★", delta: "+0.3", positive: true },
        { label: "MAU", value: "3,800", delta: "+55%", positive: true },
      ],
      chartData: [
        { month: "Jan", value: 800, secondary: 310 },
        { month: "Feb", value: 1400, secondary: 560 },
        { month: "Mar", value: 2200, secondary: 890 },
        { month: "Apr", value: 3600, secondary: 1400 },
        { month: "May", value: 5800, secondary: 2200 },
        { month: "Jun", value: 8200, secondary: 3800 },
      ],
      chartLabel: "누적 다운로드",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
