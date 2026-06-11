// Language codes and names
export const languages = {
  en: { code: 'en', name: 'English', flag: '🇺🇸' },
  vi: { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  zh: { code: 'zh', name: '中文', flag: '🇨🇳' },
  ja: { code: 'ja', name: '日本語', flag: '🇯🇵' },
} as const;

export type LanguageCode = keyof typeof languages;

// Translation keys
export const translations = {
  // Common
  openToInternships: {
    en: 'Open to internships — Summer 2026',
    vi: 'Sẵn sàng thực tập — Hè 2026',
    zh: '寻找实习机会 — 2026年夏季',
    ja: 'インターンシップ募集中 — 2026年夏',
  },
  
  // Hero
  heroGreeting: {
    en: "Hi, I'm",
    vi: 'Xin chào, tôi là',
    zh: '你好，我是',
    ja: 'こんにちは、私は',
  },
  heroName: {
    en: 'Tamus',
    vi: 'Tamus',
    zh: 'Tamus',
    ja: 'Tamus',
  },
  heroBuild: {
    en: 'I build',
    vi: 'Tôi xây dựng',
    zh: '我构建',
    ja: '私は構築する',
  },
  heroMLSystems: {
    en: 'ML systems',
    vi: 'hệ thống ML',
    zh: '机器学习系统',
    ja: 'MLシステム',
  },
  heroThatLearn: {
    en: 'that learn from data.',
    vi: 'học từ dữ liệu.',
    zh: '从数据中学习。',
    ja: 'データから学ぶ。',
  },
  heroDescription: {
    en: 'Computer science student focused on machine learning and applied AI. I love turning research papers into shipping code — from sentiment models to small reinforcement learning agents.',
    vi: 'Sinh viên khoa học máy tính tập trung vào machine learning và AI ứng dụng. Tôi thích chuyển đổi các bài báo nghiên cứu thành code thực tế — từ mô hình phân tích cảm xúc đến các tác nhân học tăng cường nhỏ.',
    zh: '计算机科学学生，专注于机器学习和应用AI。我喜欢将研究论文转化为实际代码——从情感分析模型到小型强化学习代理。',
    ja: 'コンピュータサイエンスの学生で、機械学習と応用AIに焦点を当てています。研究論文を実際のコードに変換するのが好きです—感情分析モデルから小さな強化学習エージェントまで。',
  },
  
  // Buttons
  viewProjects: {
    en: 'View projects',
    vi: 'Xem dự án',
    zh: '查看项目',
    ja: 'プロジェクトを見る',
  },
  getInTouch: {
    en: 'Get in touch',
    vi: 'Liên hệ',
    zh: '联系我',
    ja: 'お問い合わせ',
  },
  viewCV: {
    en: 'View CV',
    vi: 'Xem CV',
    zh: '查看简历',
    ja: '履歴書を見る',
  },
  
  // Stats
  focus: {
    en: 'Focus',
    vi: 'Trọng tâm',
    zh: '专注',
    ja: 'フォーカス',
  },
  mlAI: {
    en: 'ML / AI',
    vi: 'ML / AI',
    zh: 'ML / AI',
    ja: 'ML / AI',
  },
  stack: {
    en: 'Stack',
    vi: 'Công nghệ',
    zh: '技术栈',
    ja: '技術スタック',
  },
  pythonPyTorch: {
    en: 'Python · PyTorch',
    vi: 'Python · PyTorch',
    zh: 'Python · PyTorch',
    ja: 'Python · PyTorch',
  },
  projects: {
    en: 'Projects',
    vi: 'Dự án',
    zh: '项目',
    ja: 'プロジェクト',
  },
  shipped: {
    en: '4+ shipped',
    vi: '4+ đã hoàn thành',
    zh: '4+ 已发布',
    ja: '4+ 公開済み',
  },
  status: {
    en: 'Status',
    vi: 'Trạng thái',
    zh: '状态',
    ja: 'ステータス',
  },
  seekingIntern: {
    en: 'Seeking intern',
    vi: 'Tìm thực tập',
    zh: '寻找实习',
    ja: 'インターン募集中',
  },
  
  // Scroll
  scroll: {
    en: 'scroll',
    vi: 'cuộn xuống',
    zh: '向下滚动',
    ja: 'スクロール',
  },
  
  // About
  about: {
    en: 'about',
    vi: 'giới thiệu',
    zh: '关于',
    ja: '自己紹介',
  },
  curiousByDefault: {
    en: 'Curious by default.',
    vi: 'Tò mò là bản năng.',
    zh: '天生好奇。',
    ja: '生まれながらの好奇心。',
  },
  aboutDescription: {
    en: 'Third-year CS student who got hooked on ML after my first neural network actually learned something. Now I spend my time reading papers, breaking models, and building small things that try to understand the world.',
    vi: 'Sinh viên năm 3 ngành KHMT, đam mê ML sau khi mạng neural đầu tiên thực sự học được gì đó. Giờ tôi dành thời gian đọc paper, phá mô hình, và xây dựng những thứ nhỏ cố gắng hiểu thế giới.',
    zh: '计算机科学三年级学生，在第一个神经网络真正学到东西后就迷上了ML。现在我花时间阅读论文、调试模型，并构建试图理解世界的小项目。',
    ja: 'コンピュータサイエンス3年生で、最初のニューラルネットワークが実際に何かを学習した後、MLに夢中になりました。今は論文を読み、モデルをデバッグし、世界を理解しようとする小さなものを構築しています。',
  },
  
  // Facts
  basedIn: {
    en: 'Based in San Francisco',
    vi: 'Đang ở San Francisco',
    zh: '现居旧金山',
    ja: 'サンフランシスコ在住',
  },
  classOf: {
    en: 'Class of 2027',
    vi: 'Khóa 2027',
    zh: '2027届',
    ja: '2027年卒業予定',
  },
  poweredBy: {
    en: 'Powered by espresso',
    vi: 'Nạp năng lượng bằng espresso',
    zh: '靠浓缩咖啡驱动',
    ja: 'エスプレッソで稼働中',
  },
  mlAIFocus: {
    en: 'ML/AI focus',
    vi: 'Tập trung ML/AI',
    zh: 'ML/AI 方向',
    ja: 'ML/AI 専門',
  },
  
  // Bio
  bio1: {
    en: 'My interests sit at the intersection of',
    vi: 'Sở thích của tôi nằm ở giao điểm của',
    zh: '我的兴趣在于',
    ja: '私の興味は',
  },
  machineLearning: {
    en: 'machine learning',
    vi: 'machine learning',
    zh: '机器学习',
    ja: '機械学習',
  },
  bio1b: {
    en: 'and good developer experience. I care about shipping things that work end-to-end, not just notebooks that run once.',
    vi: 'và trải nghiệm developer tốt. Tôi quan tâm đến việc đưa sản phẩm hoạt động end-to-end, không chỉ notebook chạy một lần.',
    zh: '和良好的开发者体验的交汇处。我关心的是交付端到端可用的产品，而不仅仅是运行一次的notebook。',
    ja: 'と優れた開発者体験の交差点にあります。一度だけ実行されるノートブックではなく、エンドツーエンドで動作するものを提供することを重視しています。',
  },
  bio2: {
    en: "Outside of class I'm usually tinkering with model fine-tuning, contributing to small open-source projects, or writing about what I learn. I'm especially excited about retrieval-augmented systems and efficient training on a budget.",
    vi: 'Ngoài giờ học, tôi thường thử nghiệm fine-tuning mô hình, đóng góp cho các dự án open-source nhỏ, hoặc viết về những gì tôi học được. Tôi đặc biệt hào hứng với hệ thống retrieval-augmented và training hiệu quả với ngân sách hạn chế.',
    zh: '课余时间，我通常在尝试模型微调，为小型开源项目做贡献，或者写下所学。我对检索增强系统和低成本高效训练特别感兴趣。',
    ja: '授業以外では、モデルのファインチューニングをいじったり、小さなオープンソースプロジェクトに貢献したり、学んだことを書いたりしています。特に検索拡張システムと予算内の効率的なトレーニングに興味があります。',
  },
  
  // Timeline
  timeline: {
    en: 'timeline',
    vi: 'dòng thời gian',
    zh: '时间线',
    ja: 'タイムライン',
  },
  
  // Projects
  projectsSection: {
    en: 'projects',
    vi: 'dự án',
    zh: '项目',
    ja: 'プロジェクト',
  },
  thingsIBuilt: {
    en: "Things I've built.",
    vi: 'Những thứ tôi đã xây dựng.',
    zh: '我构建的东西。',
    ja: '構築したもの。',
  },
  projectsDescription: {
    en: "A small, honest selection of projects. Each one taught me something I didn't know going in.",
    vi: 'Một vài dự án tiêu biểu. Mỗi dự án đều dạy tôi điều gì đó tôi chưa biết trước khi bắt đầu.',
    zh: '精选的几个项目。每一个都教会了我一些开始之前不知道的东西。',
    ja: '厳選されたプロジェクト。それぞれが、始める前に知らなかったことを教えてくれました。',
  },
  project: {
    en: 'Project',
    vi: 'Dự án',
    zh: '项目',
    ja: 'プロジェクト',
  },
  code: {
    en: 'code',
    vi: 'code',
    zh: '代码',
    ja: 'コード',
  },
  demo: {
    en: 'demo',
    vi: 'demo',
    zh: '演示',
    ja: 'デモ',
  },
  viewCode: {
    en: 'View code',
    vi: 'Xem code',
    zh: '查看代码',
    ja: 'コードを見る',
  },
  liveDemo: {
    en: 'Live demo',
    vi: 'Demo trực tuyến',
    zh: '在线演示',
    ja: 'ライブデモ',
  },
  keyLearnings: {
    en: 'key learnings',
    vi: 'bài học chính',
    zh: '主要收获',
    ja: '主な学び',
  },
  
  // Skills
  skills: {
    en: 'skills',
    vi: 'kỹ năng',
    zh: '技能',
    ja: 'スキル',
  },
  toolsOfTheTrade: {
    en: 'Tools of the trade.',
    vi: 'Công cụ chuyên môn.',
    zh: '专业工具。',
    ja: '専門ツール。',
  },
  skillsDescription: {
    en: 'Languages, frameworks, and tooling I reach for. I care more about understanding fundamentals than collecting buzzwords.',
    vi: 'Ngôn ngữ, framework và công cụ tôi thường dùng. Tôi quan tâm đến việc hiểu nền tảng hơn là thu thập từ buzzword.',
    zh: '我使用的语言、框架和工具。我更关心理解基础，而不是收集流行词。',
    ja: '使用する言語、フレームワーク、ツール。バズワードを集めるよりも、基礎を理解することを重視しています。',
  },
  languages: {
    en: 'Languages',
    vi: 'Ngôn ngữ',
    zh: '编程语言',
    ja: '言語',
  },
  toolsAndCloud: {
    en: 'Tools & Cloud',
    vi: 'Công cụ & Cloud',
    zh: '工具与云',
    ja: 'ツールとクラウド',
  },
  currentlyLearning: {
    en: 'Currently learning',
    vi: 'Đang học',
    zh: '正在学习',
    ja: '学習中',
  },
  
  // Contact
  contact: {
    en: 'contact',
    vi: 'liên hệ',
    zh: '联系方式',
    ja: 'お問い合わせ',
  },
  letsBuildSomething: {
    en: "Let's build something.",
    vi: 'Hãy cùng xây dựng gì đó.',
    zh: '让我们一起创造。',
    ja: '一緒に作りましょう。',
  },
  contactDescription: {
    en: "I'm actively looking for a summer 2026 ML/AI internship. If you think there's a fit — or just want to chat about a paper — I'd love to hear from you.",
    vi: 'Tôi đang tích cực tìm kiếm thực tập ML/AI hè 2026. Nếu bạn nghĩ có cơ hội phù hợp — hoặc chỉ muốn trò chuyện về một bài báo — tôi rất muốn nghe từ bạn.',
    zh: '我正在积极寻找2026年夏季ML/AI实习机会。如果您认为有合适的机会——或者只是想聊聊论文——我很乐意听取您的意见。',
    ja: '2026年夏のML/AIインターンシップを積極的に探しています。適切な機会があれば、または論文について話したいだけでも、ご連絡をお待ちしています。',
  },
  email: {
    en: 'email',
    vi: 'email',
    zh: '邮箱',
    ja: 'メール',
  },
  sendEmail: {
    en: 'Send email',
    vi: 'Gửi email',
    zh: '发送邮件',
    ja: 'メールを送る',
  },
  copy: {
    en: 'Copy',
    vi: 'Sao chép',
    zh: '复制',
    ja: 'コピー',
  },
  copied: {
    en: 'Copied!',
    vi: 'Đã sao chép!',
    zh: '已复制！',
    ja: 'コピーしました！',
  },
  
  // Side cards
  responseTime: {
    en: 'Response time',
    vi: 'Thời gian phản hồi',
    zh: '回复时间',
    ja: '応答時間',
  },
  within24Hours: {
    en: 'Within 24 hours',
    vi: 'Trong vòng 24 giờ',
    zh: '24小时内',
    ja: '24時間以内',
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
    en: 'Navigate',
    vi: 'Điều hướng',
    zh: '导航',
    ja: 'ナビゲーション',
  },
  aboutLabel: {
    en: 'About',
    vi: 'Giới thiệu',
    zh: '关于',
    ja: '自己紹介',
  },
  projectsLabel: {
    en: 'Projects',
    vi: 'Dự án',
    zh: '项目',
    ja: 'プロジェクト',
  },
  skillsLabel: {
    en: 'Skills',
    vi: 'Kỹ năng',
    zh: '技能',
    ja: 'スキル',
  },
  contactLabel: {
    en: 'Contact',
    vi: 'Liên hệ',
    zh: '联系',
    ja: 'お問い合わせ',
  },
  connectLabel: {
    en: 'Connect',
    vi: 'Kết nối',
    zh: '连接',
    ja: 'つながる',
  },
  footerDescription: {
    en: 'ML/AI engineer in training. Building intelligent systems that solve real problems.',
    vi: 'Kỹ sư ML/AI đang đào tạo. Xây dựng hệ thống thông minh giải quyết vấn đề thực tế.',
    zh: 'ML/AI工程师培训中。构建解决实际问题智能系统。',
    ja: 'ML/AIエンジニア研修中。実世界の問題を解決するインテリジェントシステムを構築。',
  },
  builtWithCare: {
    en: 'built with care.',
    vi: 'được xây dựng cẩn thận.',
    zh: '用心构建。',
    ja: '心を込めて構築。',
  },
  backToTop: {
    en: 'Back to top',
    vi: 'Về đầu trang',
    zh: '返回顶部',
    ja: 'トップへ戻る',
  },
  
  // Header
  resume: {
    en: 'Resume',
    vi: 'Sơ yếu lý lịch',
    zh: '简历',
    ja: '履歴書',
  },
} as const;

export type TranslationKey = keyof typeof translations;
