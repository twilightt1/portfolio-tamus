// Language codes and names
export const languages = {
  en: { code: "en", name: "English", flag: "🇺🇸" },
  vi: { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  zh: { code: "zh", name: "中文", flag: "🇨🇳" },
  ja: { code: "ja", name: "日本語", flag: "🇯🇵" },
} as const;

export type LanguageCode = keyof typeof languages;

// Translation keys
export const translations = {
  // Common
  openToInternships: {
    en: "Open to AI/ML internships & fresher roles — 2026",
    vi: "Sẵn sàng cho vị trí thực tập AI/ML & Fresher — 2026",
    zh: "寻找 AI/ML 实习与初级岗位 — 2026",
    ja: "AI/MLインターン・初級職を募集中 — 2026",
  },

  // Hero
  heroGreeting: {
    en: "Hi, I'm",
    vi: "Xin chào, tôi là",
    zh: "你好，我是",
    ja: "こんにちは、私は",
  },
  heroName: {
    en: "Tamus",
    vi: "Tamus",
    zh: "Tamus",
    ja: "Tamus",
  },
  heroBuild: {
    en: "I build",
    vi: "Tôi xây dựng",
    zh: "我构建",
    ja: "私は構築する",
  },
  heroMLSystems: {
    en: "LLM & ML systems",
    vi: "hệ thống LLM & ML",
    zh: "LLM 与机器学习系统",
    ja: "LLM・MLシステム",
  },
  heroThatLearn: {
    en: "that retrieve, reason, and scale.",
    vi: "có khả năng truy xuất, suy luận và mở rộng.",
    zh: "能够检索、推理并扩展。",
    ja: "検索し、推論し、スケールする。",
  },
  heroDescription: {
    en: "Computer Science student focused on machine learning, deep learning, and applied NLP. I build LLM-based and retrieval-augmented systems across data processing, model evaluation, APIs, and deployment.",
    vi: "Sinh viên Khoa học Máy tính tập trung vào machine learning, deep learning và NLP ứng dụng. Tôi xây dựng hệ thống LLM/RAG từ xử lý dữ liệu, đánh giá mô hình đến API và triển khai.",
    zh: "计算机科学学生，专注于机器学习、深度学习和应用 NLP。我构建基于 LLM 与 RAG 的系统，覆盖数据处理、模型评估、API 与部署。",
    ja: "機械学習、深層学習、応用NLPに注力するコンピュータサイエンス学生です。データ処理、モデル評価、API、デプロイまで含むLLM/RAGシステムを構築しています。",
  },

  // Buttons
  viewProjects: {
    en: "View projects",
    vi: "Xem dự án",
    zh: "查看项目",
    ja: "プロジェクトを見る",
  },
  getInTouch: {
    en: "Get in touch",
    vi: "Liên hệ",
    zh: "联系我",
    ja: "お問い合わせ",
  },
  downloadCV: {
    en: "Download CV",
    vi: "Tải CV",
    zh: "下载简历",
    ja: "履歴書をダウンロード",
  },

  // Stats
  focus: {
    en: "Focus",
    vi: "Trọng tâm",
    zh: "专注",
    ja: "フォーカス",
  },
  mlAI: {
    en: "ML / AI",
    vi: "ML / AI",
    zh: "ML / AI",
    ja: "ML / AI",
  },
  stack: {
    en: "Stack",
    vi: "Công nghệ",
    zh: "技术栈",
    ja: "技術スタック",
  },
  pythonPyTorch: {
    en: "Python · FastAPI · PyTorch",
    vi: "Python · FastAPI · PyTorch",
    zh: "Python · FastAPI · PyTorch",
    ja: "Python · FastAPI · PyTorch",
  },
  projects: {
    en: "Projects",
    vi: "Dự án",
    zh: "项目",
    ja: "プロジェクト",
  },
  shipped: {
    en: '2+ shipped',
    vi: '2+ đã hoàn thành',
    zh: '2+ 已发布',
    ja: '2+ 公開済み',
  },
  status: {
    en: "Status",
    vi: "Trạng thái",
    zh: "状态",
    ja: "ステータス",
  },
  seekingIntern: {
    en: "AI/ML intern or fresher",
    vi: "Thực tập AI/ML hoặc Fresher",
    zh: "AI/ML 实习或初级岗位",
    ja: "AI/ML インターン・初級職",
  },

  // Scroll
  scroll: {
    en: "scroll",
    vi: "cuộn xuống",
    zh: "向下滚动",
    ja: "スクロール",
  },

  // About
  about: {
    en: "about",
    vi: "giới thiệu",
    zh: "关于",
    ja: "自己紹介",
  },
  curiousByDefault: {
    en: "Systems-oriented AI/ML builder.",
    vi: "Xây dựng AI/ML theo tư duy hệ thống.",
    zh: "面向系统的 AI/ML 构建者。",
    ja: "システム志向の AI/ML ビルダー。",
  },
  aboutDescription: {
    en: "I am a Computer Science student with hands-on experience building LLM-based, retrieval-augmented, and applied NLP systems that move from data processing to evaluation and deployment.",
    vi: "Tôi là sinh viên Khoa học Máy tính, có kinh nghiệm xây dựng hệ thống LLM, RAG và NLP ứng dụng từ xử lý dữ liệu đến đánh giá và triển khai.",
    zh: "我是计算机科学学生，具备构建 LLM、RAG 与应用 NLP 系统的实践经验，覆盖数据处理、评估与部署。",
    ja: "コンピュータサイエンス学生として、データ処理から評価・デプロイまで含む LLM、RAG、応用 NLP システムを構築しています。",
  },
  aboutWhoIAm: {
    en: "Who I Am",
    vi: "Tôi là ai",
    zh: "我是谁",
    ja: "私について",
  },
  aboutBioIntro: {
    en: "I'm a CS student building applied AI systems around",
    vi: "Tôi là sinh viên Khoa học Máy tính, xây dựng các hệ thống AI ứng dụng xoay quanh",
    zh: "我是计算机科学学生，正在构建围绕以下方向的应用 AI 系统",
    ja: "コンピュータサイエンス学生として、次の領域を軸に応用 AI システムを構築しています",
  },
  aboutBioHighlight: {
    en: "LLMs and retrieval",
    vi: "LLM và truy xuất thông tin",
    zh: "LLM 与检索",
    ja: "LLM と検索",
  },
  aboutBioAfterHighlight: {
    en: ". My work focuses on turning messy resumes, job descriptions, notes, and knowledge graphs into reliable ML products with evidence, evaluation, and guardrails.",
    vi: ". Công việc của tôi tập trung biến CV, JD, ghi chú và knowledge graph còn lộn xộn thành sản phẩm ML đáng tin cậy, có bằng chứng, đánh giá và guardrail.",
    zh: "。我的工作聚焦于将非结构化简历、职位描述、笔记和知识图谱转化为具备证据、评估与防护机制的可靠 ML 产品。",
    ja: "。履歴書、求人票、ノート、ナレッジグラフといった雑多な情報を、根拠・評価・ガードレールを備えた信頼できる ML プロダクトへ変換することに注力しています。",
  },
  aboutBioSecond: {
    en: "I am comfortable across the ML lifecycle: data processing, model development, semantic retrieval, API design, evaluation, and deployment. I am especially interested in MLOps and LLM serving infrastructure for real-world AI/ML engineering.",
    vi: "Tôi có thể làm việc xuyên suốt vòng đời ML: xử lý dữ liệu, phát triển mô hình, truy xuất ngữ nghĩa, thiết kế API, đánh giá và triển khai. Tôi đặc biệt quan tâm đến MLOps và hạ tầng phục vụ LLM cho kỹ thuật AI/ML thực tế.",
    zh: "我能够覆盖 ML 生命周期：数据处理、模型开发、语义检索、API 设计、评估与部署。我尤其关注面向真实 AI/ML 工程的 MLOps 与 LLM 服务基础设施。",
    ja: "データ処理、モデル開発、セマンティック検索、API設計、評価、デプロイまで、MLライフサイクル全体に取り組めます。特に実世界のAI/MLエンジニアリングに向けたMLOpsとLLMサービング基盤に関心があります。",
  },
  aboutBasedInLabel: {
    en: "Based in",
    vi: "Địa điểm",
    zh: "所在地",
    ja: "拠点",
  },
  aboutLocationValue: {
    en: "Hanoi, Vietnam",
    vi: "Hà Nội, Việt Nam",
    zh: "越南河内",
    ja: "ベトナム・ハノイ",
  },
  aboutEducationLabel: {
    en: "Education",
    vi: "Học vấn",
    zh: "教育",
    ja: "学歴",
  },
  aboutEducationValue: {
    en: "B.Eng. CS · Class of 2027",
    vi: "Kỹ sư Khoa học Máy tính",
    zh: "计算机科学工程",
    ja: "コンピュータサイエンス工学",
  },
  aboutFocusLabel: {
    en: "Focus",
    vi: "Trọng tâm",
    zh: "方向",
    ja: "専門",
  },
  aboutFocusValue: {
    en: "AI/ML · NLP · RAG",
    vi: "AI/ML · NLP · RAG",
    zh: "AI/ML · NLP · RAG",
    ja: "AI/ML · NLP · RAG",
  },
  aboutStatusValue: {
    en: "Open to AI/ML internships & fresher roles",
    vi: "Sẵn sàng cho thực tập AI/ML & Fresher",
    zh: "寻找 AI/ML 实习与初级岗位",
    ja: "AI/MLインターン・初級職を募集中",
  },

  // Facts
  basedIn: {
    en: "Based in Hanoi, Vietnam",
    vi: "Đang ở Hà Nội, Việt Nam",
    zh: "现居越南河内",
    ja: "ベトナム・ハノイ在住",
  },
  classOf: {
    en: "Computer Science Engineering · Sep 2024–Present",
    vi: "Kỹ sư Khoa học Máy tính · 09/2024–Hiện tại",
    zh: "计算机科学工程 · 2024年9月–至今",
    ja: "コンピュータサイエンス工学 · 2024年9月–現在",
  },
  poweredBy: {
    en: "Driven by MLOps & LLM infrastructure",
    vi: "Quan tâm MLOps & hạ tầng phục vụ LLM",
    zh: "关注 MLOps 与 LLM 服务基础设施",
    ja: "MLOpsとLLMサービング基盤に関心",
  },
  mlAIFocus: {
    en: "AI/ML focus",
    vi: "Tập trung AI/ML",
    zh: "AI/ML 方向",
    ja: "AI/ML 専門",
  },

  // Bio
  bio1: {
    en: "My interests sit at the intersection of",
    vi: "Sở thích của tôi nằm ở giao điểm của",
    zh: "我的兴趣在于",
    ja: "私の興味は",
  },
  machineLearning: {
    en: "machine learning",
    vi: "machine learning",
    zh: "机器学习",
    ja: "機械学習",
  },
  bio1b: {
    en: "applied NLP, retrieval-augmented generation, and reliable ML engineering. I care about shipping systems that are evaluated, tested, and deployment-ready.",
    vi: "NLP ứng dụng, retrieval-augmented generation và kỹ thuật ML đáng tin cậy. Tôi quan tâm đến hệ thống được đánh giá, kiểm thử và sẵn sàng triển khai.",
    zh: "应用 NLP、检索增强生成和可靠的 ML 工程。我关注经过评估、测试并可部署的系统。",
    ja: "応用NLP、検索拡張生成、信頼性の高いMLエンジニアリングの交差点にあります。評価・テストされ、デプロイ可能なシステムを重視しています。",
  },
  bio2: {
    en: "I am especially interested in MLOps and LLM serving infrastructure, with a systems-oriented approach to real-world AI/ML engineering.",
    vi: "Tôi đặc biệt quan tâm đến MLOps và hạ tầng phục vụ LLM, với cách tiếp cận theo tư duy hệ thống cho kỹ thuật AI/ML thực tế.",
    zh: "我尤其关注 MLOps 和 LLM 服务基础设施，并以系统化思维处理真实场景中的 AI/ML 工程。",
    ja: "特にMLOpsとLLMサービング基盤に関心があり、実世界のAI/MLエンジニアリングにシステム志向で取り組んでいます。",
  },

  // Timeline
  timeline: {
    en: "timeline",
    vi: "dòng thời gian",
    zh: "时间线",
    ja: "タイムライン",
  },

  // Projects
  projectsSection: {
    en: "projects",
    vi: "dự án",
    zh: "项目",
    ja: "プロジェクト",
  },
  thingsIBuilt: {
    en: "AI systems from my CV.",
    vi: "Các hệ thống AI trong CV của tôi.",
    zh: "简历中的 AI 系统。",
    ja: "CVに掲載したAIシステム。",
  },
  projectsDescription: {
    en: "Two production-oriented projects focused on resume/job matching, truth-guarded LLM suggestions, hybrid RAG, agentic self-correction, and evaluation workflows.",
    vi: "Hai dự án định hướng production về matching CV/JD, gợi ý LLM có guardrail, hybrid RAG, agent tự hiệu chỉnh và workflow đánh giá.",
    zh: "两个面向生产的项目，聚焦简历/职位匹配、带验证的 LLM 建议、混合 RAG、智能体自校正与评估流程。",
    ja: "履歴書/求人マッチング、検証付きLLM提案、ハイブリッドRAG、エージェントの自己修正、評価ワークフローに注力した2つの実践的プロジェクトです。",
  },
  project: {
    en: "Project",
    vi: "Dự án",
    zh: "项目",
    ja: "プロジェクト",
  },
  code: {
    en: "code",
    vi: "code",
    zh: "代码",
    ja: "コード",
  },
  demo: {
    en: "demo",
    vi: "demo",
    zh: "演示",
    ja: "デモ",
  },
  viewCode: {
    en: "View code",
    vi: "Xem code",
    zh: "查看代码",
    ja: "コードを見る",
  },
  liveDemo: {
    en: "Live demo",
    vi: "Demo trực tuyến",
    zh: "在线演示",
    ja: "ライブデモ",
  },
  keyLearnings: {
    en: "implementation highlights",
    vi: "điểm nổi bật triển khai",
    zh: "实现亮点",
    ja: "実装ハイライト",
  },

  // Skills
  skills: {
    en: "skills",
    vi: "kỹ năng",
    zh: "技能",
    ja: "スキル",
  },
  toolsOfTheTrade: {
    en: "Tools of the trade.",
    vi: "Công cụ chuyên môn.",
    zh: "专业工具。",
    ja: "専門ツール。",
  },
  skillsDescription: {
    en: "Technical skills reflected in my CV: programming languages, ML/DL fundamentals, NLP and LLM tooling, APIs, databases, vector stores, and deployment tools.",
    vi: "Các kỹ năng kỹ thuật trong CV: ngôn ngữ lập trình, nền tảng ML/DL, công cụ NLP/LLM, API, cơ sở dữ liệu, vector store và công cụ triển khai.",
    zh: "简历中的技术能力：编程语言、ML/DL 基础、NLP 与 LLM 工具、API、数据库、向量存储和部署工具。",
    ja: "CVに基づく技術スキル：プログラミング言語、ML/DL基礎、NLP/LLMツール、API、データベース、ベクトルストア、デプロイツール。",
  },
  languages: {
    en: "Languages",
    vi: "Ngôn ngữ",
    zh: "编程语言",
    ja: "言語",
  },
  machineLearningCore: {
    en: "Machine Learning",
    vi: "Machine Learning",
    zh: "机器学习",
    ja: "機械学習",
  },
  deepLearning: {
    en: "Deep Learning",
    vi: "Deep Learning",
    zh: "深度学习",
    ja: "深層学習",
  },
  librariesFrameworks: {
    en: "Libraries & Frameworks",
    vi: "Thư viện & Framework",
    zh: "库与框架",
    ja: "ライブラリ・フレームワーク",
  },
  toolsAndCloud: {
    en: "Tools, APIs & Databases",
    vi: "Công cụ, API & CSDL",
    zh: "工具、API 与数据库",
    ja: "ツール・API・DB",
  },
  certifications: {
    en: "Certifications",
    vi: "Chứng chỉ",
    zh: "证书",
    ja: "認定資格",
  },
  currentlyLearning: {
    en: "Currently learning",
    vi: "Đang học",
    zh: "正在学习",
    ja: "学習中",
  },

  // Contact
  contact: {
    en: "contact",
    vi: "liên hệ",
    zh: "联系方式",
    ja: "お問い合わせ",
  },
  letsBuildSomething: {
    en: "Let's build something.",
    vi: "Hãy cùng xây dựng gì đó.",
    zh: "让我们一起创造。",
    ja: "一緒に作りましょう。",
  },
  contactDescription: {
    en: "I'm looking for AI/ML internship or fresher opportunities where I can work on ML pipelines, applied NLP, RAG systems, evaluation, and LLM serving infrastructure.",
    vi: "Tôi đang tìm cơ hội thực tập hoặc Fresher AI/ML để làm việc với ML pipeline, NLP ứng dụng, hệ thống RAG, đánh giá mô hình và hạ tầng phục vụ LLM.",
    zh: "我正在寻找 AI/ML 实习或初级岗位，希望参与 ML 流水线、应用 NLP、RAG 系统、评估与 LLM 服务基础设施。",
    ja: "MLパイプライン、応用NLP、RAGシステム、評価、LLMサービング基盤に取り組めるAI/MLインターンまたは初級職を探しています。",
  },
  email: {
    en: "email",
    vi: "email",
    zh: "邮箱",
    ja: "メール",
  },
  sendEmail: {
    en: "Send email",
    vi: "Gửi email",
    zh: "发送邮件",
    ja: "メールを送る",
  },
  copy: {
    en: "Copy",
    vi: "Sao chép",
    zh: "复制",
    ja: "コピー",
  },
  copied: {
    en: "Copied!",
    vi: "Đã sao chép!",
    zh: "已复制！",
    ja: "コピーしました！",
  },

  // Side cards
  responseTime: {
    en: "Response time",
    vi: "Thời gian phản hồi",
    zh: "回复时间",
    ja: "応答時間",
  },
  within24Hours: {
    en: "Within 24 hours",
    vi: "Trong vòng 24 giờ",
    zh: "24小时内",
    ja: "24時間以内",
  },
  openSource: {
    en: 'Open source',
    vi: 'Open source',
    zh: '开源',
    ja: 'オープンソース',
  },
  activeContributor: {
    en: 'Active contributor',
    vi: 'Đóng góp tích cực',
    zh: '积极贡献者',
    ja: 'アクティブな貢献者',
  },
  connect: {
    en: 'Connect',
    vi: 'Kết nối',
    zh: '连接',
    ja: 'つながる',
  },
  letsNetwork: {
    en: "Let's network",
    vi: 'Hãy kết nối',
    zh: '让我们建立联系',
    ja: 'ネットワークを作りましょう',
  },

  // Footer
  navigate: {
    en: "Navigate",
    vi: "Điều hướng",
    zh: "导航",
    ja: "ナビゲーション",
  },
  aboutLabel: {
    en: "About",
    vi: "Giới thiệu",
    zh: "关于",
    ja: "自己紹介",
  },
  projectsLabel: {
    en: "Projects",
    vi: "Dự án",
    zh: "项目",
    ja: "プロジェクト",
  },
  skillsLabel: {
    en: "Skills",
    vi: "Kỹ năng",
    zh: "技能",
    ja: "スキル",
  },
  contactLabel: {
    en: "Contact",
    vi: "Liên hệ",
    zh: "联系",
    ja: "お問い合わせ",
  },
  connectLabel: {
    en: "Connect",
    vi: "Kết nối",
    zh: "连接",
    ja: "つながる",
  },
  footerDescription: {
    en: "Computer Science student building reliable AI/ML, NLP, and retrieval-augmented systems.",
    vi: "Sinh viên Khoa học Máy tính xây dựng hệ thống AI/ML, NLP và RAG đáng tin cậy.",
    zh: "计算机科学学生，构建可靠的 AI/ML、NLP 与 RAG 系统。",
    ja: "信頼性の高いAI/ML、NLP、RAGシステムを構築するコンピュータサイエンス学生。",
  },
  builtWithCare: {
    en: "built with care.",
    vi: "được xây dựng cẩn thận.",
    zh: "用心构建。",
    ja: "心を込めて構築。",
  },
  backToTop: {
    en: "Back to top",
    vi: "Về đầu trang",
    zh: "返回顶部",
    ja: "トップへ戻る",
  },

  // Header
  resume: {
    en: "Resume",
    vi: "Sơ yếu lý lịch",
    zh: "简历",
    ja: "履歴書",
  },
} as const;

export type TranslationKey = keyof typeof translations;
