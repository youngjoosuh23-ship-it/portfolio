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
  document: {
    title: string;
    overview: string;
    kpis: KPI[];
    chartData: ChartPoint[];
    chartLabel: string;
    attachments?: { label: string; url: string }[];
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
    slug: "matcha",
    index: "PRJ_002",
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
    slug: "itri-internship",
    title: "ITRI Lab Intern",
    subtitle: "산업기술연구원(ITRI) 전자광전시스템연구소(電光所) 실험 보조 인턴 — 미세유체 시스템 실험",
    description:
      "촉각 피드백 및 미세유체 시스템 실험을 직접 수행하고, 열가소성 미세유체 접합 기술을 비교 분석해 레이저 용접을 최적 방법으로 도출. 팀 의사결정을 지원하는 발표 수행.",
    tags: ["R&D", "Microfluidics", "Materials Eng.", "Internship"],
    year: "2025",
    type: "work",
    sandboxUrl: "https://www.itri.org.tw/english",
    document: {
      title: "ITRI Lab Intern — 업무 개요",
      overview:
        "대만 산업기술연구원(Industrial Technology Research Institute) 전자광전시스템연구소(電光所, EOSL)에서 2024년 10월부터 2025년 4월까지 실험 보조 인턴으로 근무. 실험실 일상 운영 지원과 환경 정리, 동료 실험 보조를 맡으며 촉각 피드백·미세유체 시스템 관련 실험을 직접 수행하고, 열가소성 미세유체 접합 기술 문헌을 검토·비교해 레이저 용접을 최적 방법으로 도출, 팀 의사결정을 지원하는 발표를 수행함.",
      kpis: [
        { label: "근무 기간", value: "7개월", delta: "2024.10–2025.04", positive: true },
        { label: "핵심 실험", value: "촉각 피드백·미세유체", delta: "직접 수행", positive: true },
        { label: "기술 비교", value: "레이저 용접", delta: "최적 방법 도출", positive: true },
      ],
      chartData: [
        { month: "Oct", value: 1 },
        { month: "Dec", value: 2 },
        { month: "Feb", value: 3 },
      ],
      chartLabel: "수행한 핵심 업무 누적 건수",
      attachments: [
        { label: "Microfluidic Bonding Review (PDF)", url: "/resume/microfluidic-bonding-review.pdf" },
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
