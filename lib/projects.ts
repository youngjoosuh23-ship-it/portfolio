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
  index?: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  type: "ai" | "leadership" | "work";
  image?: string;
  sandboxUrl: string;
  hasLiveDemo?: boolean;
  document: {
    title: string;
    overview: string;
    kpis: KPI[];
    chartData?: ChartPoint[];
    chartLabel?: string;
    attachments?: { label: string; url: string; thumbnail?: string }[];
    keywords?: string[];
    learnings?: string;
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
    year: "2026",
    type: "ai",
    image: "/career_copilot_screenshot.png",
    sandboxUrl: "https://ai-career-decision-copilot.vercel.app/",
    document: {
      title: "Career Copilot — 프로젝트 개요",
      overview:
        "Problem: 구직자는 자신의 경험이 특정 공고(JD)에 얼마나 부합하는지 객관적으로 판단하기 어렵고, 공고마다 이력서를 다시 손보는 데 많은 시간이 든다. 초기에는 \"이력서 작성 도구\"로 기획했지만, 시장에 이미 비슷한 도구가 많아 차별성이 부족하다고 판단해 방향을 다시 잡음.\n\n" +
        "Solution: 포지셔닝을 \"지원 전략까지 판단해주는 AI\"로 재정의. JD와 이력서를 비교해 Fit Score를 근거·리스크와 함께 제시하고, 지원/보류/비추천까지 결정해주는 Decision Engine을 핵심 기능으로 두었음. 사용자 흐름도 JD 입력 → 이력서 업로드 → 결과 확인 3단계로 단순화하고, 경험을 기업이 쓰는 언어로 번역한 맞춤 이력서 문구를 함께 생성하도록 MVP 범위를 좁힘.\n\n" +
        "Result: Next.js 기반으로 실제 배포해 누구나 써볼 수 있는 상태로 완성. 이력서 분석부터 면접 예상 질문까지 한 흐름에서 제공하는 올인원 코파일럿으로 구현.",
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
    slug: "matcha",
    index: "PRJ_002",
    title: "Matcha",
    subtitle: "장소 기반 오픈 네트워킹 앱",
    description:
      "지금 같은 장소에 있는 사람들과 실시간으로 연결되는 위치 기반 소셜 앱. 지도 체크인, 채팅 요청, 이벤트 기능으로 오프라인 첫 만남의 장벽을 낮춤.",
    tags: ["React", "Firebase", "Google Maps", "TypeScript"],
    year: "2026",
    type: "ai",
    image: "/matcha_screenshot.png",
    sandboxUrl: "https://gen-lang-client-0751433140.web.app",
    document: {
      title: "Matcha — 프로젝트 개요",
      overview:
        "Problem: 같은 장소에 있어도 낯선 사람과 연결될 방법이 없다. LinkedIn 같은 비동기 플랫폼은 '지금, 여기'라는 공간적 맥락을 채워주지 못해 오프라인 첫 만남의 장벽이 그대로 남아있고, 카페·식당 사장님 입장에서도 방문객을 모을 효과적인 채널이 부족함.\n\n" +
        "Solution: 네트워킹 지향형, 언어교환형, 캐주얼 연결형, 가게 사장님 네 유형의 핵심 사용자를 정의하고, 지도 체크인(1시간 TTL로 '지금'이라는 맥락 유지) → 채팅 요청/수락 → 공개 이벤트 참여로 이어지는 흐름을 Must-have 기능부터 단계적으로 구현(v0.1~v0.4). 콘텐츠 빈약함은 한국관광공사·문화정보원 공공 API를 지도에 통합해 보완.\n\n" +
        "Result: Firebase Hosting에 실제 배포해 지도·체크인·채팅·이벤트 기능을 모두 갖춘 상태로 완성. 채팅 성사율 ≥30%, 재방문율 ≥50% 등 핵심 KPI를 설정해 다음 단계(필터, 푸시 알림) 운영을 준비 중.",
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
    slug: "medilink",
    index: "PRJ_004",
    title: "Medilink",
    subtitle: "HCP 데이터 관리 플랫폼",
    description:
      "의료기기 회사 영업·마케팅 담당자를 위한 HCP(Healthcare Professional) 데이터 관리 플랫폼. 영업사원용 CRM(/sales)과 고객용 제품 카탈로그(/store)를 분리해 제공.",
    tags: ["Next.js", "Supabase", "Ollama", "CRM"],
    year: "2026",
    type: "ai",
    sandboxUrl: "https://hcp-platform-lime.vercel.app",
    document: {
      title: "Medilink — 프로젝트 개요",
      overview:
        "Problem: 직접 겪은 업무는 아니지만, 의료기기 영업·마케팅 업무를 조사하던 중 비대면 세일즈로의 전환이 업계에서 활발히 이루어지고 있다는 소식을 접함. 대면 미팅이 줄고 전화·메신저·화상회의 등 디지털 채널로 HCP와의 인터랙션이 옮겨가는데, 이 변화는 서로 다른 두 사용자에게 다른 문제를 만든다고 봄 — 영업사원은 분산된 개인 도구(엑셀·메모앱 등)로 인터랙션을 관리하느라 컴플라이언스(공정거래 자율준수) 위반 리스크를 안게 되고, HCP(고객) 입장에서는 비대면 환경에서 제품 정보를 확인할 채널이 마땅치 않음.\n\n" +
        "Solution: 두 사용자의 화면을 처음부터 분리해서 설계 — 영업사원용 CRM(HCP 등록·검색·상세, 인터랙션 이력, 컴플라이언스 자동 누계+공시 플래그)은 `/sales` 영역으로, HCP가 제품을 직접 조회하고 견적/입찰을 문의하는 고객용 카탈로그는 `/store` 영역으로 분리. 로그인 시점에도 '영업사원'과 '병원·구매처' 역할을 먼저 선택하게 해 온보딩부터 두 사용자가 섞이지 않도록 함.\n\n" +
        "Result: Next.js + Supabase로 영업사원용 CRM과 고객용 카탈로그를 실제로 분리 배포. 각 영역에 다른 색상 테마를 적용해 같은 제품 안에서도 다른 화면임을 시각적으로 구분되게 만들고, 회사 소속을 잘못 불러오던 버그도 함께 수정.",
      kpis: [
        { label: "화면 분리", value: "/sales · /store", delta: "역할별 분리", positive: true },
        { label: "컴플라이언스", value: "지출 자동 누계", delta: "공시 플래그", positive: true },
        { label: "백엔드", value: "Supabase", delta: "PostgreSQL", positive: true },
        { label: "온보딩", value: "역할 선택 로그인", delta: "버그 수정", positive: true },
      ],
      chartLabel: "DB 테이블: hcps · interactions · compliance_records",
      keywords: ["HCP 관리", "컴플라이언스", "Next.js", "Supabase"],
    },
  },
  {
    slug: "wearable-diagnostics-asia-market",
    title: "Wearable Diagnostics — Asia Market Analysis",
    subtitle: "촉각 피드백 기반 웨어러블 진단 센서 — 아시아 시장 분석",
    description:
      "ITRI에서 다룬 촉각 피드백·미세유체 기술이 웨어러블 진단 디바이스로 상업화될 때의 아시아(한국·대만·일본·중국) 시장 기회를 분석하는 개인 프로젝트. 현재 조사 진행 중.",
    tags: ["Market Research", "Medical Devices", "Wearables", "Asia"],
    year: "2026",
    type: "leadership",
    sandboxUrl: "",
    hasLiveDemo: false,
    document: {
      title: "Wearable Diagnostics — Asia Market Analysis — 프로젝트 개요",
      overview:
        "ITRI 인턴 경험에서 다룬 촉각 피드백 및 미세유체 접합 기술이 실제 웨어러블 진단 디바이스(피부 부착형 진단 패치, 압력/촉각 기반 바이오센서 등)로 상업화될 때 아시아 시장에서 어떤 기회와 장벽이 있는지 분석하는 개인 프로젝트.\n\n" +
        "방법론: 공개 시장 리포트와 관련 기업·기술이전 사례(대만 ITRI, 한국 스타트업 등)를 조사해 경쟁사 포지셔닝을 매핑하고, ITRI 실험에서 확인한 재료·접합 기술의 한계를 상업화 장벽 관점으로 재해석. 시장 기회 슬라이드와 기술-시장 갭 분석을 결과물로 정리할 계획.\n\n" +
        "현재 진행 중 — 조사 결과가 나오는 대로 시장 규모, 경쟁 구도, 진입 전략 데이터로 업데이트할 예정.",
      kpis: [
        { label: "진행 상태", value: "조사 중", delta: "TBD", positive: true },
        { label: "분석 범위", value: "한국·대만\n일본·중국", delta: "웨어러블 진단센서", positive: true },
        { label: "방법론", value: "경쟁사 매핑\n기술-시장 갭 분석", delta: "TBD", positive: true },
      ],
    },
  },
  {
    slug: "itri-internship",
    title: "ITRI Lab Intern",
    subtitle: "산업기술연구원(ITRI) 전자광전시스템연구소(電光所) 실험 인턴 | 미세유체 시스템 관련 실험 수행",
    description:
      "촉각 피드백 및 미세유체 시스템 실험을 직접 수행하고, 열가소성 미세유체 접합 기술을 비교 분석해 레이저 용접을 최적 방법으로 제안.",
    tags: ["R&D", "Microfluidics", "Optoelectronics", "Internship"],
    year: "2024.10–2025.04",
    type: "work",
    sandboxUrl: "https://www.itri.org.tw/english",
    hasLiveDemo: false,
    document: {
      title: "ITRI Lab Intern — 업무 개요",
      overview:
        "Problem: 촉각 피드백 디바이스용 미세유체 칩을 만들 때, 열가소성 소재를 어떤 방식으로 접합해야 누설 없이 안정적인 채널을 만들 수 있는지 팀 내 표준 방법이 정해져 있지 않았음.\n\n" +
        "Solution: 대만 산업기술연구원(ITRI) 전자광전시스템연구소(電光所, EOSL)에서 2024년 10월부터 2025년 4월까지 실험인턴으로 근무하며, 여러 열가소성 미세유체 접합 기술(초음파, 열압착, 레이저 용접 등) 문헌을 직접 검토·비교하고 재료를 달리해 실험을 수행해 결과를 대조함.\n\n" +
        "Result: 비교 분석을 토대로 레이저 용접을 최적 접합 방법으로 도출, 팀 의사결정을 지지하는 발표를 수행. 실험실 운영 지원과 촉각 피드백 기술 개발 프로젝트의 미세유체 시스템 실험도 함께 수행.",
      kpis: [
        { label: "근무 기간", value: "7개월", delta: "2024.10–2025.04", positive: true },
        { label: "핵심 업무", value: "촉각피드백\n미세유체시스템", delta: "실험수행\n실험실 운영 및 지원", positive: true },
        { label: "논문 리뷰", value: "열가소성 미세유체접합", delta: "최적방법 제안", positive: true },
      ],
      attachments: [
        {
          label: "Microfluidic Bonding Review (PDF)",
          url: "/resume/microfluidic-bonding-review.pdf",
          thumbnail: "/resume/microfluidic-bonding-review-thumb.png",
        },
      ],
      keywords: ["실험 설계", "문헌 비교 분석", "데이터 기반 의사결정", "발표/보고"],
      learnings:
        "여러 재료·공정 옵션을 직접 실험하고 문헌을 비교 분석해 최적안을 도출하는 과정을 통해, 데이터를 근거로 의사결정을 지지하고 팀에 설득력 있게 전달하는 역량을 길렀음.",
    },
  },
  {
    slug: "korean-tutoring",
    title: "Korean Tutoring",
    subtitle: "프리랜서 한국어 과외 | 3년간 장기 수강생 관리",
    description:
      "수강생 니즈를 파악해 4단계 학습 프레임워크(복습→문법 입력→실전 응용→쓰기)를 설계하고, 3년간 꾸준한 과외로 TOPIK 2급에서 4급까지 성장을 도움.",
    tags: ["Tutoring", "Korean", "Education", "Freelance"],
    year: "2022.09–2025.12",
    type: "work",
    sandboxUrl: "https://www.topik.go.kr",
    hasLiveDemo: false,
    document: {
      title: "Korean Tutoring — 업무 개요",
      overview:
        "2022년 9월부터 2025년 12월까지 프리랜서로 한국어 과외를 진행하며 수강생의 니즈를 파악하고 장기적인 관계를 관리·유지함.\n\n" +
        "Problem: 문법 위주의 수업은 수강생이 진짜 원하는 '원활한 회화 능력'을 충족시키지 못함. 한국어 특유의 계속 변하는 문장 구조, 다양한 문법, 반복되는 조사 사용 오류, 그리고 수강생의 관심사(한국 예능)를 고려한 학습이 필요했음.\n\n" +
        "Solution: 복습 → 문법 → 회화 적용 → 쓰기의 4단계 수업 방식을 설계. 회화 단계에서는 수강생이 실제로 하고 싶은 말, 실생활에서 쓰는 표현을 한국어로 표현하는 법을 가르치고, 그 안에서 사용된 문법과 진도에 맞는 문법을 함께 적용해 학습시킴. 이를 다시 회화로 재구성해 온전한 대화 단락(paragraph)을 완성하고, 쓰기 단계를 통해 완전한 학습으로 마무리함.\n\n" +
        "Result: 수강생의 목표였던 회화 능력 향상을 달성, TOPIK 2급에서 4급으로 성장.",
      kpis: [
        { label: "활동 기간", value: "3년 3개월", delta: "2022.09–2025.12", positive: true },
        { label: "수강생 수", value: "1~2명", delta: "동시 진행", positive: true },
        { label: "핵심 업무", value: "1:1 과외\n학습 설계", delta: "장기 관계 관리\n4단계 프레임워크", positive: true },
        { label: "성과", value: "TOPIK 2급 → 4급", delta: "수강생 실력 향상", positive: true },
      ],
      keywords: ["니즈 파악", "커리큘럼 설계", "장기 관계 관리", "맞춤형 코칭"],
      learnings:
        "정해진 문법 진도가 아니라 수강생이 실제로 원하는 목표(회화 능력)를 먼저 파악하고 학습 방식을 거꾸로 설계하는 법을 배움. 3년간 같은 수강생을 가르치며 꾸준한 피드백 루프로 관계를 유지하고 성장시키는 역량을 길렀음.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
