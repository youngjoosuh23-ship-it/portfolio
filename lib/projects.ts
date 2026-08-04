import fs from "fs";
import path from "path";

export type Lang = "ko" | "en";

export type L = { ko: string; en: string };

export type KPI = {
  label: L;
  value: L;
  delta?: L;
  positive?: boolean;
};

export type ChartPoint = {
  month: string;
  value: number;
  secondary?: number;
};

export type DecisionEntry = {
  problem: L;
  decision: L;
  outcome: L;
};

export type Project = {
  slug: string;
  index?: string;
  title: string;
  subtitle: L;
  description: L;
  tags: string[];
  year: string;
  type: "ai" | "leadership" | "work";
  image?: string;
  sandboxUrl: string;
  hasLiveDemo?: boolean;
  document: {
    title: L;
    overview: L;
    kpis: KPI[];
    decisionLog?: DecisionEntry[];
    attachments?: { label: string; url: string; thumbnail?: string }[];
    keywords?: L[];
    learnings?: L;
  };
};

export const projects: Project[] = [
  {
    slug: "career-copilot",
    index: "PRJ_001",
    title: "Career Copilot",
    subtitle: { ko: "AI 커리어 의사결정 코파일럿", en: "AI career decision copilot" },
    description: {
      ko: "이력서 문구 개선·구조 재설계부터 면접 준비까지. AI가 커리어 방향을 함께 설계하는 올인원 플랫폼.",
      en: "From rewriting resume bullet points to redesigning structure to interview prep — an all-in-one platform where AI co-designs your career direction.",
    },
    tags: ["AI", "Next.js", "LLM", "Career"],
    year: "2026",
    type: "ai",
    image: "/career_copilot_screenshot.png",
    sandboxUrl: "https://ai-career-decision-copilot.vercel.app/",
    document: {
      title: { ko: "Career Copilot — 프로젝트 개요", en: "Career Copilot — Project Overview" },
      overview: {
        ko:
          "Problem: 구직자는 자신의 경험이 특정 공고(JD)에 얼마나 부합하는지 객관적으로 판단하기 어렵고, 공고마다 이력서를 다시 손보는 데 많은 시간이 든다. 초기에는 \"이력서 작성 도구\"로 기획했지만, 시장에 이미 비슷한 도구가 많아 차별성이 부족하다고 판단해 방향을 다시 잡음.\n\n" +
          "Solution: 포지셔닝을 \"지원 전략까지 판단해주는 AI\"로 재정의. JD와 이력서를 비교해 Fit Score를 근거·리스크와 함께 제시하고, 지원/보류/비추천까지 결정해주는 Decision Engine을 핵심 기능으로 두었음. 사용자 흐름도 JD 입력 → 이력서 업로드 → 결과 확인 3단계로 단순화하고, 경험을 기업이 쓰는 언어로 번역한 맞춤 이력서 문구를 함께 생성하도록 MVP 범위를 좁힘.\n\n" +
          "이후 '지원 시뮬레이션' 탭을 추가 — Hugging Face의 NVIDIA Nemotron-Personas-Korea 데이터셋에서 산업·아키타입 필터링된 한국인 페르소나와 사용자 프로필을 비교하고, 국민연금(NPS) 실제 고용 데이터로 타겟 기업의 채용 신호를 함께 제시함. NPS 데이터 특성상 계열사·하청이 중복될 수 있어 후보 기업 목록을 UI에 노출해 사용자가 직접 선택하도록 설계.\n\n" +
          "Result: Next.js 기반으로 실제 배포해 누구나 써볼 수 있는 상태로 완성. 이력서 분석부터 면접 예상 질문, 실제 데이터 기반 지원 시뮬레이션까지 한 흐름에서 제공하는 올인원 코파일럿으로 구현.",
        en:
          "Problem: Job seekers struggle to objectively judge how well their experience matches a given job description, and rewriting a resume for every posting eats up huge amounts of time. Originally scoped as a plain \"resume writing tool,\" but the market was already crowded with similar tools, so the positioning had to change.\n\n" +
          "Solution: Repositioned it as \"AI that decides your application strategy, not just your wording.\" The core feature became a Decision Engine that compares the JD against the resume, surfaces a Fit Score with supporting evidence and risks, and recommends apply / hold / skip. Simplified the user flow to three steps — paste JD → upload resume → see results — and narrowed the MVP to also generate resume bullets translated into the language employers actually use.\n\n" +
          "Later added an Application Simulation tab — compares the user's profile against Korean persona archetypes sourced from Hugging Face's NVIDIA Nemotron-Personas-Korea dataset (filtered by industry and archetype), and cross-references real National Pension Service (NPS) enrollment data to surface actual hiring signals for the target company. Because NPS data can be ambiguous across subsidiaries, the UI surfaces the full candidate company list for the user to select rather than guessing silently.\n\n" +
          "Result: Shipped on Next.js as a real, usable deployment. Built as an all-in-one copilot covering resume analysis, likely interview questions, and data-driven application simulation in a single flow.",
      },
      kpis: [
        {
          label: { ko: "이력서 분석", en: "Resume analysis" },
          value: { ko: "AI", en: "AI" },
          delta: { ko: "자동화", en: "Automated" },
          positive: true,
        },
        {
          label: { ko: "면접 준비", en: "Interview prep" },
          value: { ko: "올인원", en: "All-in-one" },
          delta: { ko: "원스톱", en: "One-stop" },
          positive: true,
        },
        {
          label: { ko: "커리어 방향", en: "Career direction" },
          value: { ko: "AI 제안", en: "AI-suggested" },
          delta: { ko: "맞춤형", en: "Personalized" },
          positive: true,
        },
        {
          label: { ko: "지원 트래킹", en: "Application tracking" },
          value: { ko: "실시간", en: "Real-time" },
          delta: { ko: "대시보드", en: "Dashboard" },
          positive: true,
        },
      ],
      decisionLog: [
        {
          problem: {
            ko: "이력서 작성 도구로 기획했지만 시장에 비슷한 툴이 이미 넘쳤다.",
            en: "Originally scoped as a resume writing tool, but the market was already flooded with similar products.",
          },
          decision: {
            ko: "\"지원 여부까지 판단해주는 AI\"로 포지셔닝 재정의. 단순 문구 개선이 아닌 Fit Score + 지원/보류/비추천 Decision Engine을 핵심으로.",
            en: "Repositioned as \"AI that decides your application strategy.\" Made the Fit Score + apply/hold/skip Decision Engine the core, not just rewriting bullets.",
          },
          outcome: {
            ko: "차별점이 생겼고 사용자 흐름도 JD 입력 → 이력서 업로드 → 결과 확인 3단계로 단순해졌다.",
            en: "Created a clear differentiator and simplified the user flow to three steps: paste JD → upload resume → see results.",
          },
        },
        {
          problem: {
            ko: "지원 시뮬레이션에 쓸 한국인 구직자 페르소나 데이터가 없었다.",
            en: "No Korean job-seeker persona data was available for the application simulation feature.",
          },
          decision: {
            ko: "Hugging Face의 NVIDIA Nemotron-Personas-Korea 데이터셋을 산업·아키타입 필터로 가져와 사용자 프로필과 비교하도록 설계.",
            en: "Used the NVIDIA Nemotron-Personas-Korea dataset from Hugging Face, filtered by industry and archetype, to compare against the user's profile.",
          },
          outcome: {
            ko: "실제 데이터 기반 시뮬레이션이 가능해졌고, 샘플이 부족한 산업은 솔직하게 fallback 메시지를 노출하도록 처리했다.",
            en: "Enabled real-data-backed simulation. For industries with sparse samples, the UI surfaces an honest fallback message instead of guessing.",
          },
        },
        {
          problem: {
            ko: "국민연금(NPS) 데이터로 기업 채용 신호를 보여주려 했는데, 계열사·하청이 같은 이름 substring을 공유해 어떤 법인인지 특정이 불가능했다.",
            en: "NPS enrollment data was ambiguous — subsidiaries and subcontractors share name substrings, making it impossible to identify the exact legal entity.",
          },
          decision: {
            ko: "백엔드나 LLM이 임의로 선택하지 않고, 후보 기업 목록을 UI에 그대로 노출해 사용자가 직접 선택하도록 설계.",
            en: "Instead of having the backend or LLM guess silently, surfaced the full candidate company list in the UI and let the user pick.",
          },
          outcome: {
            ko: "잘못된 기업 데이터를 보여주는 오류를 원천 차단했고, 애매함 자체를 투명하게 드러내는 UX가 됐다.",
            en: "Eliminated the risk of showing wrong company data, and turned the ambiguity into a transparent UX choice rather than a hidden bug.",
          },
        },
      ],
    },
  },
  {
    slug: "matcha",
    index: "PRJ_002",
    title: "Matcha",
    subtitle: { ko: "장소 기반 오픈 네트워킹 앱", en: "Location-based open networking app" },
    description: {
      ko: "지금 같은 장소에 있는 사람들과 실시간으로 연결되는 위치 기반 소셜 앱. 지도 체크인, 채팅 요청, 이벤트 기능으로 오프라인 첫 만남의 장벽을 낮춤.",
      en: "A location-based social app that connects people who are at the same place right now. Map check-ins, chat requests, and events lower the barrier to a first offline meeting.",
    },
    tags: ["React", "Firebase", "Google Maps", "TypeScript"],
    year: "2026",
    type: "ai",
    image: "/matcha_screenshot.png",
    sandboxUrl: "https://gen-lang-client-0751433140.web.app",
    document: {
      title: { ko: "Matcha — 프로젝트 개요", en: "Matcha — Project Overview" },
      overview: {
        ko:
          "Problem: 같은 장소에 있어도 낯선 사람과 연결될 방법이 없다. LinkedIn 같은 비동기 플랫폼은 '지금, 여기'라는 공간적 맥락을 채워주지 못해 오프라인 첫 만남의 장벽이 그대로 남아있고, 카페·식당 사장님 입장에서도 방문객을 모을 효과적인 채널이 부족함.\n\n" +
          "Solution: 네트워킹 지향형, 언어교환형, 캐주얼 연결형, 가게 사장님 네 유형의 핵심 사용자를 정의하고, 지도 체크인(1시간 TTL로 '지금'이라는 맥락 유지) → 채팅 요청/수락 → 공개 이벤트 참여로 이어지는 흐름을 Must-have 기능부터 단계적으로 구현(v0.1~v0.4). 콘텐츠 빈약함은 한국관광공사·문화정보원 공공 API를 지도에 통합해 보완.\n\n" +
          "Result: Firebase Hosting에 실제 배포해 지도·체크인·채팅·이벤트 기능을 모두 갖춘 상태로 완성. 채팅 성사율 ≥30%, 재방문율 ≥50% 등 핵심 KPI를 설정해 다음 단계(필터, 푸시 알림) 운영을 준비 중.",
        en:
          "Problem: Even when people share the same physical space, there's no way to connect with strangers nearby. Asynchronous platforms like LinkedIn can't fill the \"here, now\" spatial context, so the barrier to a first offline meeting stays just as high — and cafe/restaurant owners lack an effective channel to draw in visitors.\n\n" +
          "Solution: Defined four core user types — networkers, language exchangers, casual connectors, and shop owners — and built the flow (map check-in with a 1-hour TTL to preserve the \"right now\" context → chat request/accept → join public events) in stages, starting from must-have features (v0.1–v0.4). Thin content was supplemented by integrating Korea Tourism Organization and Korea Culture Information Service public APIs into the map.\n\n" +
          "Result: Shipped to Firebase Hosting with map, check-in, chat, and events all working. Set core KPIs — chat success rate ≥30%, return-visit rate ≥50% — and is preparing the next phase (filters, push notifications).",
      },
      kpis: [
        {
          label: { ko: "채팅 성사율", en: "Chat success rate" },
          value: { ko: "≥30%", en: "≥30%" },
          delta: { ko: "목표", en: "Target" },
          positive: true,
        },
        {
          label: { ko: "체크인→요청 전환율", en: "Check-in → request rate" },
          value: { ko: "≥40%", en: "≥40%" },
          delta: { ko: "목표", en: "Target" },
          positive: true,
        },
        {
          label: { ko: "이벤트 참여율", en: "Event participation rate" },
          value: { ko: "≥25%", en: "≥25%" },
          delta: { ko: "목표", en: "Target" },
          positive: true,
        },
        {
          label: { ko: "재방문율", en: "Return-visit rate" },
          value: { ko: "≥50%", en: "≥50%" },
          delta: { ko: "목표", en: "Target" },
          positive: true,
        },
      ],
      decisionLog: [
        {
          problem: {
            ko: "지도에 체크인한 사용자를 보여줄 때 '지금 여기 있는 사람'이라는 맥락이 사라지면 앱의 핵심 가치가 없어진다.",
            en: "If the 'here right now' context disappears from check-ins, the core value of the app disappears with it.",
          },
          decision: {
            ko: "체크인 TTL을 1시간으로 설정. 영구 표시나 수동 삭제가 아닌, 시간이 지나면 자동으로 사라지는 구조로 설계.",
            en: "Set check-in TTL to 1 hour. Designed it to expire automatically rather than persist permanently or require manual removal.",
          },
          outcome: {
            ko: "'지금 이 장소에 있다'는 신뢰도가 유지됐고, 오래된 체크인이 쌓여 지도가 오염되는 문제를 원천 방지했다.",
            en: "Preserved the credibility of 'here right now,' and prevented the map from getting polluted with stale check-ins.",
          },
        },
        {
          problem: {
            ko: "초기 서비스라 지도에 보여줄 콘텐츠(장소, 이벤트)가 없었다. 사용자가 없으니 콘텐츠도 없고, 콘텐츠가 없으니 사용자도 안 오는 cold start 문제.",
            en: "As an early product, there was no content to show on the map. No users meant no content, and no content meant no users — classic cold start.",
          },
          decision: {
            ko: "한국관광공사·문화정보원 공공 API를 연동해 지도에 장소·이벤트 데이터를 채움. 사용자 생성 콘텐츠가 생기기 전까지의 공백을 공공 데이터로 메움.",
            en: "Integrated Korea Tourism Organization and Korea Culture Information Service public APIs to populate the map with places and events, bridging the gap before user-generated content could accumulate.",
          },
          outcome: {
            ko: "첫 방문자가 빈 지도를 보는 상황을 피할 수 있었고, 앱의 초기 유용성을 확보했다.",
            en: "Avoided showing first-time visitors an empty map, and established baseline usefulness for the app before organic content existed.",
          },
        },
      ],
    },
  },
  {
    slug: "medilink",
    index: "PRJ_004",
    title: "Medilink",
    subtitle: { ko: "HCP 데이터 관리 플랫폼", en: "HCP data management platform" },
    description: {
      ko: "의료기기 회사 영업·마케팅 담당자를 위한 HCP(Healthcare Professional) 데이터 관리 플랫폼. 영업사원용 CRM(/sales)과 고객용 제품 카탈로그(/store)를 분리해 제공.",
      en: "An HCP (Healthcare Professional) data management platform for medical device sales and marketing teams. Ships a sales-rep CRM (/sales) and a customer-facing product catalog (/store) as separate experiences.",
    },
    tags: ["Next.js", "Supabase", "Ollama", "CRM"],
    year: "2026",
    type: "ai",
    sandboxUrl: "https://hcp-platform-lime.vercel.app",
    document: {
      title: { ko: "Medilink — 프로젝트 개요", en: "Medilink — Project Overview" },
      overview: {
        ko:
          "Problem: 직접 겪은 업무는 아니지만, 의료기기 영업·마케팅 업무를 조사하던 중 비대면 세일즈로의 전환이 업계에서 활발히 이루어지고 있다는 소식을 접함. 대면 미팅이 줄고 전화·메신저·화상회의 등 디지털 채널로 HCP와의 인터랙션이 옮겨가는데, 이 변화는 서로 다른 두 사용자에게 다른 문제를 만든다고 봄 — 영업사원은 분산된 개인 도구(엑셀·메모앱 등)로 인터랙션을 관리하느라 컴플라이언스(공정거래 자율준수) 위반 리스크를 안게 되고, HCP(고객) 입장에서는 비대면 환경에서 제품 정보를 확인할 채널이 마땅치 않음.\n\n" +
          "Solution: 두 사용자의 화면을 처음부터 분리해서 설계 — 영업사원용 CRM(HCP 등록·검색·상세, 인터랙션 이력, 컴플라이언스 자동 누계+공시 플래그)은 `/sales` 영역으로, HCP가 제품을 직접 조회하고 견적/입찰을 문의하는 고객용 카탈로그는 `/store` 영역으로 분리. 로그인 시점에도 '영업사원'과 '병원·구매처' 역할을 먼저 선택하게 해 온보딩부터 두 사용자가 섞이지 않도록 함.\n\n" +
          "Result: Next.js + Supabase로 영업사원용 CRM과 고객용 카탈로그를 실제로 분리 배포. 각 영역에 다른 색상 테마를 적용해 같은 제품 안에서도 다른 화면임을 시각적으로 구분되게 만들고, 회사 소속을 잘못 불러오던 버그도 함께 수정.",
        en:
          "Problem: Not something I've worked in directly, but while researching medical device sales and marketing, I came across reports that the industry is actively shifting toward remote-first sales. As face-to-face meetings shrink and HCP interactions move to phone/messenger/video calls, this shift creates a different problem for each side — reps end up managing interactions in scattered personal tools (spreadsheets, notes apps) and risk compliance violations, while HCPs (customers) have no good channel to check product information remotely.\n\n" +
          "Solution: Designed two separate screens from the start — the rep-facing CRM (HCP register/search/detail, interaction history, auto-accumulated compliance spend + disclosure flags) lives under `/sales`, while the customer-facing catalog where HCPs browse products and request quotes/tenders lives under `/store`. Even at login, users first choose a \"sales rep\" or \"hospital/buyer\" role so the two never get mixed starting from onboarding.\n\n" +
          "Result: Actually shipped the rep CRM and the customer catalog as separate deployments on Next.js + Supabase. Applied a different color theme to each area so the two screens read as visually distinct within the same product, and fixed a bug that was loading the wrong company's data.",
      },
      kpis: [
        {
          label: { ko: "화면 분리", en: "Screen separation" },
          value: { ko: "/sales · /store", en: "/sales · /store" },
          delta: { ko: "역할별 분리", en: "Split by role" },
          positive: true,
        },
        {
          label: { ko: "컴플라이언스", en: "Compliance" },
          value: { ko: "지출 자동 누계", en: "Auto-accumulated spend" },
          delta: { ko: "공시 플래그", en: "Disclosure flag" },
          positive: true,
        },
        {
          label: { ko: "백엔드", en: "Backend" },
          value: { ko: "Supabase", en: "Supabase" },
          delta: { ko: "PostgreSQL", en: "PostgreSQL" },
          positive: true,
        },
        {
          label: { ko: "온보딩", en: "Onboarding" },
          value: { ko: "역할 선택 로그인", en: "Role-select login" },
          delta: { ko: "버그 수정", en: "Bug fixed" },
          positive: true,
        },
      ],
      keywords: [
        { ko: "HCP 관리", en: "HCP management" },
        { ko: "컴플라이언스", en: "Compliance" },
        { ko: "Next.js", en: "Next.js" },
        { ko: "Supabase", en: "Supabase" },
      ],
    },
  },
  {
    slug: "isa-leadership",
    title: "ISA International Student Association",
    subtitle: {
      ko: "국제학생회(ISA) 부회장 | 이벤트 기획 팀장 및 마케팅팀",
      en: "ISA Vice President | Event Planning Lead & Marketing Team",
    },
    description: {
      ko: "4년간 일반 회원에서 부회장으로 성장. 다문화 세미나·러닝크루·교류강좌를 기획·운영하며 캠퍼스 내 다문화 교류 활동을 확대.",
      en: "Grew from general member to Vice President over four years. Planned and ran multicultural seminars, a running crew, and exchange courses to expand multicultural engagement on campus.",
    },
    tags: ["Leadership", "Event Planning", "Marketing", "ISA"],
    year: "2021–2025",
    type: "leadership",
    sandboxUrl: "",
    hasLiveDemo: false,
    document: {
      title: { ko: "ISA International Student Association — 활동 개요", en: "ISA International Student Association — Activity Overview" },
      overview: {
        ko:
          "Problem: 캠퍼스 내의 교류 기회가 제한적이었고, 네트워킹의 장이 부족하다고 느낌. 특히 국제 학생들의 니즈를 충족시키기 위한 활동이 제한적이라고 판단함.\n\n" +
          "Solution: 4년간 일반 회원 → 이벤트 기획 팀장 → 부회장으로 성장하며, 스웨덴 샬메르스 공과대학 대만 사무소(CITO)와 협업해 50명 이상이 참여하는 다문화 세미나를 기획·운영. 러닝크루 활동 일정과 운영을 현장에서 조정해 참여자를 10명에서 30명으로 확대했고, '다문화 교류 강좌'를 신설해 월간 정기 프로그램으로 발전시킴. 부회장으로서 부서 간 일정 조율·업무 배분을 맡고, Canva로 홍보 콘텐츠를 제작해 참여도를 끌어올림.\n\n" +
          "Result: 4년 만에 일반 회원에서 부회장으로 성장. 다문화 세미나 100명 이상 참여, 러닝크루 참여자 3배 확대(10명→30명), 신설 강좌의 월간 정기 프로그램화까지 이끌어냄.",
        en:
          "Problem: Opportunities for engagement on campus were limited, and I felt there wasn't enough of a networking venue — especially activities aimed at meeting international students' actual needs.\n\n" +
          "Solution: Grew over four years from general member → event planning lead → Vice President. Partnered with Chalmers University of Technology's Taiwan office (CITO) to plan and run a multicultural seminar with 100+ attendees. Adjusted the running crew's schedule and on-site operations to grow participants from 10 to 30, and launched a new \"multicultural exchange course\" that became a monthly recurring program. As VP, coordinated cross-department scheduling and task allocation, and produced promotional content in Canva to drive participation.\n\n" +
          "Result: Grew from general member to Vice President in four years. Drove 100+ attendees at the multicultural seminar, tripled running crew participation (10 → 30), and turned the new course into a monthly recurring program.",
      },
      kpis: [
        {
          label: { ko: "활동 기간", en: "Duration" },
          value: { ko: "4년", en: "4 years" },
          delta: { ko: "2021–2025", en: "2021–2025" },
          positive: true,
        },
        {
          label: { ko: "직책", en: "Role" },
          value: { ko: "부회장", en: "Vice President" },
          delta: { ko: "일반회원 → 팀장 → 부회장", en: "Member → Lead → VP" },
          positive: true,
        },
        {
          label: { ko: "러닝크루 확대", en: "Running crew growth" },
          value: { ko: "10명 → 30명", en: "10 → 30 members" },
          delta: { ko: "3배 성장", en: "3x growth" },
          positive: true,
        },
        {
          label: { ko: "세미나 참여", en: "Seminar turnout" },
          value: { ko: "50명+", en: "50+" },
          delta: { ko: "CITO 콜라보", en: "CITO collab" },
          positive: true,
        },
      ],
      keywords: [
        { ko: "이벤트 기획", en: "Event planning" },
        { ko: "부서 간 일정 조율", en: "Cross-team scheduling" },
        { ko: "홍보 콘텐츠 제작", en: "Promotional content" },
        { ko: "다문화 커뮤니케이션", en: "Cross-cultural communication" },
      ],
      learnings: {
        ko: "한정된 리소스와 일정 안에서 여러 부서의 업무를 조율하고, 참여자 수 변화 같은 데이터를 보며 활동을 지속적으로 개선하는 법을 배움.",
        en: "Learned to coordinate work across departments under limited resources and timelines, and to keep improving activities by watching data like participation trends.",
      },
      attachments: [
        {
          label: "ISA Running Crew 기획안 (PDF)",
          url: "/resume/isa-running-crew-v6.pdf",
          thumbnail: "/resume/isa-running-crew-thumb.png",
        },
      ],
    },
  },
  {
    slug: "itri-internship",
    title: "ITRI Lab Intern",
    subtitle: {
      ko: "산업기술연구원(ITRI) 전자광전시스템연구소(電光所) 실험 인턴 | 미세유체 시스템 관련 실험 수행",
      en: "Research Intern, Electronic & Optoelectronic System Research Labs (EOSL), ITRI | Microfluidic system experiments",
    },
    description: {
      ko: "촉각 피드백 및 미세유체 시스템 실험을 직접 수행하고, 열가소성 미세유체 접합 기술을 비교 분석해 레이저 용접을 최적 방법으로 제안.",
      en: "Ran tactile-feedback and microfluidic system experiments first-hand, and compared thermoplastic microfluidic bonding techniques to propose laser welding as the optimal method.",
    },
    tags: ["R&D", "Microfluidics", "Optoelectronics", "Internship"],
    year: "2024.10–2025.04",
    type: "work",
    sandboxUrl: "https://www.itri.org.tw/english",
    hasLiveDemo: false,
    document: {
      title: { ko: "ITRI Lab Intern — 업무 개요", en: "ITRI Lab Intern — Role Overview" },
      overview: {
        ko:
          "Problem: 촉각 피드백 디바이스용 미세유체 칩을 만들 때, 열가소성 소재를 어떤 방식으로 접합해야 누설 없이 안정적인 채널을 만들 수 있는지 팀 내 표준 방법이 정해져 있지 않았음.\n\n" +
          "Solution: 대만 산업기술연구원(ITRI) 전자광전시스템연구소(電光所, EOSL)에서 2024년 10월부터 2025년 4월까지 실험인턴으로 근무하며, 여러 열가소성 미세유체 접합 기술(초음파, 열압착, 레이저 용접 등) 문헌을 직접 검토·비교하고 재료를 달리해 실험을 수행해 결과를 대조함.\n\n" +
          "Result: 비교 분석을 토대로 레이저 용접을 최적 접합 방법으로 도출, 팀 의사결정을 지지하는 발표를 수행. 실험실 운영 지원과 촉각 피드백 기술 개발 프로젝트의 미세유체 시스템 실험도 함께 수행.",
        en:
          "Problem: When fabricating microfluidic chips for a tactile-feedback device, the team had no standard method for bonding thermoplastic materials in a way that produced stable, leak-free channels.\n\n" +
          "Solution: Worked as a research intern at Taiwan's Industrial Technology Research Institute (ITRI), Electronic & Optoelectronic System Research Labs (EOSL), from October 2024 to April 2025. Reviewed and compared literature on several thermoplastic microfluidic bonding techniques (ultrasonic, thermal compression, laser welding, etc.), ran experiments with different materials, and contrasted the results.\n\n" +
          "Result: Identified laser welding as the optimal bonding method based on the comparative analysis and presented findings to support the team's decision. Also supported day-to-day lab operations and ran microfluidic system experiments for the tactile-feedback technology project.",
      },
      kpis: [
        {
          label: { ko: "근무 기간", en: "Duration" },
          value: { ko: "7개월", en: "7 months" },
          delta: { ko: "2024.10–2025.04", en: "Oct 2024–Apr 2025" },
          positive: true,
        },
        {
          label: { ko: "핵심 업무", en: "Core work" },
          value: { ko: "촉각피드백\n미세유체시스템", en: "Tactile feedback\nMicrofluidic systems" },
          delta: { ko: "실험수행\n실험실 운영 및 지원", en: "Ran experiments\nLab ops support" },
          positive: true,
        },
        {
          label: { ko: "논문 리뷰", en: "Literature review" },
          value: { ko: "열가소성 미세유체접합", en: "Thermoplastic microfluidic bonding" },
          delta: { ko: "최적방법 제안", en: "Proposed optimal method" },
          positive: true,
        },
      ],
      attachments: [
        {
          label: "Microfluidic Bonding Review (PDF)",
          url: "/resume/microfluidic-bonding-review.pdf",
          thumbnail: "/resume/microfluidic-bonding-review-thumb.png",
        },
      ],
      keywords: [
        { ko: "실험 설계", en: "Experiment design" },
        { ko: "문헌 비교 분석", en: "Comparative literature review" },
        { ko: "데이터 기반 의사결정", en: "Data-driven decisions" },
        { ko: "발표/보고", en: "Presenting/reporting" },
      ],
      learnings: {
        ko: "여러 재료·공정 옵션을 직접 실험하고 문헌을 비교 분석해 최적안을 도출하는 과정을 통해, 데이터를 근거로 의사결정을 지지하고 팀에 설득력 있게 전달하는 역량을 길렀음.",
        en: "Testing multiple material/process options first-hand and comparing them against the literature to land on the best option built the ability to back decisions with data and present them persuasively to a team.",
      },
    },
  },
  {
    slug: "korean-tutoring",
    title: "Korean Tutoring",
    subtitle: {
      ko: "프리랜서 한국어 과외 | 3년간 장기 수강생 관리",
      en: "Freelance Korean tutor | Managed long-term students for 3 years",
    },
    description: {
      ko: "수강생 니즈를 파악해 4단계 학습 프레임워크(복습→문법 입력→실전 응용→쓰기)를 설계하고, 3년간 꾸준한 과외로 TOPIK 2급에서 4급까지 성장을 도움.",
      en: "Identified student needs and designed a 4-stage learning framework (review → grammar input → conversational application → writing), helping a student progress from TOPIK level 2 to 4 over three years of consistent tutoring.",
    },
    tags: ["Tutoring", "Korean", "Education", "Freelance"],
    year: "2022.09–2025.12",
    type: "work",
    sandboxUrl: "https://www.topik.go.kr",
    hasLiveDemo: false,
    document: {
      title: { ko: "Korean Tutoring — 업무 개요", en: "Korean Tutoring — Role Overview" },
      overview: {
        ko:
          "2022년 9월부터 2025년 12월까지 프리랜서로 한국어 과외를 진행하며 수강생의 니즈를 파악하고 장기적인 관계를 관리·유지함.\n\n" +
          "Problem: 문법 위주의 수업은 수강생이 진짜 원하는 '원활한 회화 능력'을 충족시키지 못함. 한국어 특유의 계속 변하는 문장 구조, 다양한 문법, 반복되는 조사 사용 오류, 그리고 수강생의 관심사(한국 예능)를 고려한 학습이 필요했음.\n\n" +
          "Solution: 복습 → 문법 → 회화 적용 → 쓰기의 4단계 수업 방식을 설계. 회화 단계에서는 수강생이 실제로 하고 싶은 말, 실생활에서 쓰는 표현을 한국어로 표현하는 법을 가르치고, 그 안에서 사용된 문법과 진도에 맞는 문법을 함께 적용해 학습시킴. 이를 다시 회화로 재구성해 온전한 대화 단락(paragraph)을 완성하고, 쓰기 단계를 통해 완전한 학습으로 마무리함.\n\n" +
          "Result: 수강생의 목표였던 회화 능력 향상을 달성, TOPIK 2급에서 4급으로 성장.",
        en:
          "Ran freelance Korean tutoring from September 2022 to December 2025, identifying student needs and managing a long-term relationship throughout.\n\n" +
          "Problem: Grammar-first lessons didn't deliver what the student actually wanted — fluent conversation. Korean's constantly shifting sentence structure, wide range of grammar patterns, recurring particle mistakes, and the student's own interest (Korean variety shows) all needed to be factored into the lesson design.\n\n" +
          "Solution: Designed a 4-stage lesson format — review → grammar → conversational application → writing. In the conversation stage, taught the student how to say things they actually wanted to say in real life, layering in the grammar that came up plus whatever matched the current syllabus. Rebuilt that into full conversational paragraphs, then locked in the learning with a writing stage.\n\n" +
          "Result: Achieved the student's actual goal — improved conversational ability — and progressed from TOPIK level 2 to level 4.",
      },
      kpis: [
        {
          label: { ko: "활동 기간", en: "Duration" },
          value: { ko: "3년 3개월", en: "3 years 3 months" },
          delta: { ko: "2022.09–2025.12", en: "Sep 2022–Dec 2025" },
          positive: true,
        },
        {
          label: { ko: "수강생 수", en: "Students" },
          value: { ko: "1~2명", en: "1–2" },
          delta: { ko: "동시 진행", en: "Concurrent" },
          positive: true,
        },
        {
          label: { ko: "핵심 업무", en: "Core work" },
          value: { ko: "1:1 과외\n학습 설계", en: "1:1 tutoring\nCurriculum design" },
          delta: { ko: "장기 관계 관리\n4단계 프레임워크", en: "Long-term relationship\n4-stage framework" },
          positive: true,
        },
        {
          label: { ko: "성과", en: "Outcome" },
          value: { ko: "TOPIK 2급 → 4급", en: "TOPIK level 2 → 4" },
          delta: { ko: "수강생 실력 향상", en: "Student improvement" },
          positive: true,
        },
      ],
      keywords: [
        { ko: "니즈 파악", en: "Needs assessment" },
        { ko: "커리큘럼 설계", en: "Curriculum design" },
        { ko: "장기 관계 관리", en: "Long-term relationship management" },
        { ko: "맞춤형 코칭", en: "Personalized coaching" },
      ],
      learnings: {
        ko: "정해진 문법 진도가 아니라 수강생이 실제로 원하는 목표(회화 능력)를 먼저 파악하고 학습 방식을 거꾸로 설계하는 법을 배움. 3년간 같은 수강생을 가르치며 꾸준한 피드백 루프로 관계를 유지하고 성장시키는 역량을 길렀음.",
        en: "Learned to identify what a student actually wants (conversational ability) before a fixed grammar syllabus, and design the lesson backward from that goal. Teaching the same student for three years built the ability to sustain a relationship and keep them growing through a steady feedback loop.",
      },
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function hasReport(slug: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "content/reports", `${slug}.mdx`));
}
