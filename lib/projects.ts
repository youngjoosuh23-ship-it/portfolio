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
    slug: "medspec-translator",
    index: "PRJ_003",
    title: "MedSpec Translator",
    subtitle: "의료기기 스펙 번역기",
    description:
      "의료기기 기술 스펙을 의사가 바로 이해할 수 있는 언어로 번역해주는 도구. PDF 업로드 또는 직접 입력으로 스펙을 채우고 로컬 LLM(Ollama)으로 번역. 현재 개발 중인 초기 프로토타입.",
    tags: ["LLM", "Ollama", "HTML/JS", "Prototype"],
    year: "2026",
    type: "ai",
    sandboxUrl: "https://medspec.vercel.app",
    document: {
      title: "MedSpec Translator — 프로젝트 개요",
      overview:
        "기기 스펙을 의사의 언어로. 의료기기 기술 문서의 전문 스펙 항목을 임상 맥락의 설명으로 변환해주는 번역기. PDF 업로드 시 자동으로 입력칸을 채우고, 로컬에서 구동되는 Ollama LLM을 호출해 번역 결과를 생성한다.",
      kpis: [
        { label: "개발 단계", value: "프로토타입", delta: "진행 중", positive: true },
        { label: "입력 방식", value: "PDF / 직접입력", delta: "구현됨", positive: true },
        { label: "번역 엔진", value: "Ollama (로컬 LLM)", delta: "연동됨", positive: true },
      ],
      chartData: [{ month: "Jun", value: 664 }],
      chartLabel: "코드 라인 수 (초기 커밋 기준)",
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
        "대만 산업기술연구원(Industrial Technology Research Institute) 전자광전시스템연구소(電光所, EOSL)에서 2024년 10월부터 2025년 4월까지 실험인턴으로 근무. 실험실 운영 지원과 촉각 피드백 기술 개발 프로젝트에서 미세유체 시스템 관련 실험을 직접 수행하고, 열가소성 미세유체 접합 기술 문헌을 검토·비교해 레이저 용접을 최적 방법으로 제안",
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
