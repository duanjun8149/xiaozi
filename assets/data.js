/* ============================================================
 * 内容数据 —— 你只需要改这个文件就能维护整个网站
 * 每加一个软件，就往 POSTS 数组里加一个 {...} 即可。
 * 字段说明：
 *   id          唯一编号（不要重复）
 *   title       标题
 *   category    分类 key（见下方 CATEGORIES）
 *   date        发布日期
 *   views       阅读量（随便填个数字）
 *   icon        卡片上显示的 emoji 图标
 *   summary     列表页显示的简介
 *   tags        关键词（用于搜索，逗号分隔）
 *   content     详情页正文（HTML 字符串，可换行/加段落）
 *   download    下载/官网链接（留 "#" 表示占位）
 * ============================================================ */

const CATEGORIES = {
  windows: { label: "Windows 软件", color: "#2b7de9" },
  macos:   { label: "macOS 软件",   color: "#455a8f" },
  android: { label: "Android 软件", color: "#21a675" },
  ios:     { label: "iOS 软件",     color: "#0aa3c2" },
  tv:      { label: "TV 应用",      color: "#8b5cf6" },
  free:    { label: "限时免费",     color: "#e8543f" },
  system:  { label: "系统工具",     color: "#0ea5a4" },
  os:      { label: "操作系统",     color: "#d97706" },
  office:  { label: "办公软件",     color: "#6366f1" },
  design:  { label: "设计美化",     color: "#ec4899" },
  network: { label: "网络工具",     color: "#3b82f6" },
  dev:     { label: "开发工具",     color: "#059669" },
  game:    { label: "游戏资源",     color: "#f59e0b" },
};

const SITE = {
  name: "软件资源库",
  slogan: "良心软件的栖息之地",
  // 想换站名就改上面两行，比如改成你自己的名字
};

const POSTS = [
  {
    id: 1,
    title: "[Windows] 局域网文件互传神器 LocalSend",
    category: "windows",
    date: "2026-08-18",
    views: 24127,
    icon: "📡",
    summary: "无需数据线、无需联网，手机电脑平板之间秒传文件，开源免费无广告。",
    tags: "文件传输,局域网,开源,无广告",
    download: "https://localsend.org",
    content: `
      <p>每天在手机、电脑、平板之间来回传文件，用微信/QQ 传小文件还行，传大文件就力不从心了。LocalSend 是一款<strong>开源、免费、无广告</strong>的局域网互传工具，设备连同一个 Wi-Fi 即可互传，不经过任何服务器，安全又快速。</p>
      <p>支持 Windows、macOS、Linux、Android、iOS 全平台，界面清爽，选中文件一点就发，是大文件互传的绝佳替代品。</p>
      <h3>亮点</h3>
      <ul>
        <li>纯局域网传输，不经过云端，保护隐私</li>
        <li>全平台支持，手机电脑无缝互传</li>
        <li>开源免费，无任何广告与内购</li>
      </ul>`,
  },
  {
    id: 2,
    title: "[Windows] 全能媒体播放器 VLC Media Player",
    category: "windows",
    date: "2026-08-17",
    views: 33820,
    icon: "🎬",
    summary: "几乎能播放任何格式的音视频，开源免费，无广告无间谍。",
    tags: "播放器,视频,音频,开源",
    download: "https://www.videolan.org/vlc/",
    content: `
      <p>VLC 是老牌开源播放器，几乎通吃所有音视频格式（MP4、MKV、AVI、FLAC……），无需额外装解码器，打开就能放。</p>
      <p>它还能做简单的格式转换、串流播放、网络电台收听，是每台电脑都该备一个的万能播放器。</p>
      <h3>亮点</h3>
      <ul>
        <li>支持几乎所有音视频格式，免解码器</li>
        <li>完全开源免费，无广告无追踪</li>
        <li>跨平台，Windows / macOS / Linux / 手机通用</li>
      </ul>`,
  },
  {
    id: 3,
    title: "[Windows] 开源办公套件 LibreOffice",
    category: "office",
    date: "2026-08-16",
    views: 29844,
    icon: "📝",
    summary: "Word、Excel、PPT 的免费替代品，完全兼容主流文档格式。",
    tags: "办公,文档,表格,演示,开源,免费",
    download: "https://www.libreoffice.org",
    content: `
      <p>不想为 Office 付费？LibreOffice 是功能完整的开源办公套件，包含文字处理、电子表格、演示文稿、绘图、数据库等组件，能打开和保存 .docx / .xlsx / .pptx 等格式。</p>
      <p>适合学生、家庭和个人日常办公，完全免费且持续更新。</p>`,
  },
  {
    id: 4,
    title: "[Windows] 专业图像编辑 GIMP",
    category: "windows",
    date: "2026-08-15",
    views: 17653,
    icon: "🎨",
    summary: "免费的开源图像编辑器，Photoshop 的强力平替。",
    tags: "图像,修图,设计,开源,免费",
    download: "https://www.gimp.org",
    content: `
      <p>GIMP 是一款跨平台的开源图像编辑软件，支持图层、蒙版、滤镜、批量处理等，能满足绝大多数修图与设计需求。</p>
      <p>虽然上手比美图秀秀略复杂，但它是真正专业且永久免费的方案。</p>`,
  },
  {
    id: 5,
    title: "[Windows] 免费压缩解压 7-Zip",
    category: "windows",
    date: "2026-08-14",
    views: 22190,
    icon: "🗜️",
    summary: "体积小、压缩率高、完全免费的开源压缩工具。",
    tags: "压缩,解压,开源,小巧",
    download: "https://www.7-zip.org",
    content: `
      <p>7-Zip 是一款老牌开源压缩软件，支持 7z / ZIP / RAR 等格式，压缩率通常优于普通 ZIP。</p>
      <p>界面朴素但极其实用，右键即可快速压缩/解压，是个人电脑的必备小工具。</p>`,
  },
  {
    id: 6,
    title: "[Windows] 轻量 PDF 阅读器 SumatraPDF",
    category: "windows",
    date: "2026-08-13",
    views: 14502,
    icon: "📄",
    summary: "秒开 PDF / ePub / 漫画，极简无广告。",
    tags: "PDF,阅读器,轻量,开源",
    download: "https://www.sumatrapdfreader.org",
    content: `
      <p>SumatraPDF 是一款极简的开源文档阅读器，启动飞快，支持 PDF、ePub、MOBI、漫画（CBZ/CBR）等多种格式。</p>
      <p>整个软件只有几 MB，没有任何广告和多余功能，专注把"看文档"这件事做好。</p>`,
  },
  {
    id: 7,
    title: "[Windows] 开源密码管理器 KeePass",
    category: "system",
    date: "2026-08-12",
    views: 19877,
    icon: "🔐",
    summary: "把你的所有密码锁进一个加密数据库，记住一个主密码就行。",
    tags: "密码,安全,加密,开源",
    download: "https://keepass.info",
    content: `
      <p>密码太多记不住？KeePass 把你的账号密码统一加密保存在一个本地数据库里，你只需记住一个主密码。</p>
      <p>数据库完全保存在你自己的设备上，不上传云端，安全性极高，是注重隐私用户的理想选择。</p>`,
  },
  {
    id: 8,
    title: "[Windows] 录屏直播利器 OBS Studio",
    category: "windows",
    date: "2026-08-11",
    views: 31208,
    icon: "🎥",
    summary: "免费开源的录屏与直播推流软件，主播都在用。",
    tags: "录屏,直播,推流,开源,免费",
    download: "https://obsproject.com",
    content: `
      <p>OBS Studio 是业界标杆级的开源录屏与直播软件，支持多场景切换、画面捕捉、麦克风/系统声音混音，可一键推流到各大直播平台。</p>
      <p>无论是做教程录屏、游戏直播还是线上会议录制，它都是免费且强大的选择。</p>`,
  },
  {
    id: 9,
    title: "[Android] 开源文件管理器 Material Files",
    category: "android",
    date: "2026-08-18",
    views: 16433,
    icon: "📁",
    summary: "Material Design 风格的开源文件管理器，清爽好用。",
    tags: "安卓,文件管理,开源,无广告",
    download: "https://github.com/zhanghai/MaterialFiles",
    content: `
      <p>Material Files 是一款遵循 Material Design 规范的开源 Android 文件管理器，支持双栏浏览、根目录访问（需授权）、局域网/SMB 访问。</p>
      <p>无广告、无多余权限，是手机上整理文件的干净之选。</p>`,
  },
  {
    id: 10,
    title: "[Android] 免费笔记工具 Joplin",
    category: "android",
    date: "2026-08-17",
    views: 20891,
    icon: "📒",
    summary: "开源 Markdown 笔记，支持端到端加密同步。",
    tags: "安卓,笔记,Markdown,开源",
    download: "https://joplinapp.org",
    content: `
      <p>Joplin 是开源的 Markdown 笔记应用，支持笔记本分组、待办清单、标签，并可通过多种云服务（含自托管）实现端到端加密同步。</p>
      <p>数据掌握在自己手里，是印象笔记、Notion 的免费平替。</p>`,
  },
  {
    id: 11,
    title: "[TV] 开源视频播放器 VLC for Android TV",
    category: "tv",
    date: "2026-08-16",
    views: 12744,
    icon: "📺",
    summary: "大屏也能用的万能播放器，直接播放局域网共享影片。",
    tags: "电视,播放器,开源,大屏",
    download: "https://www.videolan.org/vlc/",
    content: `
      <p>VLC 的 Android TV 版本让你在电视/电视盒子上直接播放本地硬盘或局域网共享里的影片，支持字幕与多种格式。</p>
      <p>开源免费，没有开机广告，是客厅观影的好帮手。</p>`,
  },
  {
    id: 12,
    title: "[免费] 开源浏览器 Firefox",
    category: "free",
    date: "2026-08-15",
    views: 27655,
    icon: "🦊",
    summary: "注重隐私、不跟踪你的免费开源浏览器。",
    tags: "浏览器,隐私,开源,免费",
    download: "https://www.mozilla.org/firefox/new/",
    content: `
      <p>Firefox 是老牌开源浏览器，由非盈利组织 Mozilla 维护，默认阻挡跨站跟踪，重视用户隐私。</p>
      <p>丰富的扩展生态与高度可定制性，是 Chrome 之外最值得用的免费浏览器。</p>`,
  },
  {
    id: 13,
    title: "[系统] 系统清理工具 BleachBit",
    category: "system",
    date: "2026-08-14",
    views: 15320,
    icon: "🧹",
    summary: "开源系统清理，释放磁盘空间、擦除隐私痕迹。",
    tags: "清理,系统,隐私,开源",
    download: "https://www.bleachbit.org",
    content: `
      <p>BleachBit 是开源的系统清理工具，可删除缓存、临时文件、日志，并安全擦除隐私痕迹，帮你腾出 C 盘空间。</p>
      <p>支持 Windows 与 Linux，操作透明，每步清理都可预览。</p>`,
  },
  {
    id: 14,
    title: "[办公] 邮件客户端 Thunderbird",
    category: "office",
    date: "2026-08-13",
    views: 13980,
    icon: "📧",
    summary: "免费开源的邮件客户端，多账号统一管理。",
    tags: "邮件,办公,开源,免费",
    download: "https://www.thunderbird.net",
    content: `
      <p>Thunderbird 是 Mozilla 出品的免费开源邮件客户端，支持多邮箱账号、日历、通讯录与强大过滤规则。</p>
      <p>界面熟悉、插件丰富，是 Outlook 之外可靠的免费方案。</p>`,
  },

  /* ---------- 以下为扩充分类的示例内容 ---------- */
  {
    id: 15,
    title: "[macOS] 现代视频播放器 IINA",
    category: "macos",
    date: "2026-08-18",
    views: 18233,
    icon: "🍎",
    summary: "为 macOS 量身打造的开源播放器，颜值性能都在线。",
    tags: "macOS,播放器,开源,现代",
    download: "https://iina.io",
    content: `
      <p>IINA 是基于 mpv、专为 macOS 设计的开源视频播放器，原生支持 Touch Bar、深色模式与手势操作。</p>
      <p>界面简洁、解码强劲，是 Mac 上看片的首选免费播放器。</p>`,
  },
  {
    id: 16,
    title: "[macOS] 窗口管理神器 Rectangle",
    category: "macos",
    date: "2026-08-17",
    views: 12640,
    icon: "⬜",
    summary: "快捷键把窗口甩到左半屏、右半屏、四分屏，效率翻倍。",
    tags: "macOS,窗口,效率,开源",
    download: "https://rectangleapp.com",
    content: `
      <p>Rectangle 是一款开源的 macOS 窗口管理工具，用快捷键即可将窗口吸附到屏幕各区域，类似 Windows 的窗口排布。</p>
      <p>免费、轻量，多屏工作党的效率利器。</p>`,
  },
  {
    id: 17,
    title: "[iOS] 免费密码管理 Bitwarden",
    category: "ios",
    date: "2026-08-18",
    views: 21044,
    icon: "🔑",
    summary: "跨平台开源密码库，iOS 上也能安全存密码。",
    tags: "iOS,密码,安全,开源",
    download: "https://bitwarden.com",
    content: `
      <p>Bitwarden 是开源的跨平台密码管理器，iOS / Android / 桌面 / 浏览器全平台同步，支持端到端加密。</p>
      <p>免费版已足够个人使用，是移动端保管账号密码的安心之选。</p>`,
  },
  {
    id: 18,
    title: "[iOS] 加密邮箱 Proton Mail",
    category: "ios",
    date: "2026-08-16",
    views: 15877,
    icon: "✉️",
    summary: "端到端加密的免费邮箱，重视隐私的用户首选。",
    tags: "iOS,邮箱,隐私,加密",
    download: "https://proton.me/mail",
    content: `
      <p>Proton Mail 来自瑞士，提供端到端加密的免费邮箱服务，默认保护你的邮件隐私。</p>
      <p>有 iOS / Android / 网页版，是注重安全用户的理想邮箱。</p>`,
  },
  {
    id: 19,
    title: "[OS] 免费 Linux 发行版 Linux Mint",
    category: "os",
    date: "2026-08-15",
    views: 19880,
    icon: "🐧",
    summary: "对新手友好的免费操作系统，老电脑也能流畅跑。",
    tags: "操作系统,Linux,免费,新手",
    download: "https://linuxmint.com",
    content: `
      <p>Linux Mint 是基于 Ubuntu 的免费开源操作系统，界面接近 Windows，上手门槛低，对老旧硬件非常友好。</p>
      <p>自带常用软件，无需激活、没有捆绑，是尝试 Linux 的稳妥起点。</p>`,
  },
  {
    id: 20,
    title: "[OS] 旧机焕新 ChromeOS Flex",
    category: "os",
    date: "2026-08-14",
    views: 14265,
    icon: "🌐",
    summary: "把旧电脑/旧 Mac 变成一台飞快的轻量系统。",
    tags: "操作系统,ChromeOS,轻量,旧机",
    download: "https://www.google.com/chromeos-flex/",
    content: `
      <p>ChromeOS Flex 是 Google 推出的免费轻量系统，可安装到旧 PC / Mac 上，开机飞快、专注于网页与云应用。</p>
      <p>非常适合给家里吃灰的老机器续命，做上网本使用。</p>`,
  },
  {
    id: 21,
    title: "[设计] 免费 3D 创作套件 Blender",
    category: "design",
    date: "2026-08-18",
    views: 26410,
    icon: "🧊",
    summary: "开源全能 3D 软件，建模/动画/渲染一把抓。",
    tags: "设计,3D,建模,开源",
    download: "https://www.blender.org",
    content: `
      <p>Blender 是功能全面的开源 3D 创作套件，涵盖建模、雕刻、动画、特效、渲染与视频剪辑。</p>
      <p>免费且由社区驱动，从爱好者到工作室都在用，是 3D 入门与进阶的零成本方案。</p>`,
  },
  {
    id: 22,
    title: "[设计] 开源矢量绘图 Inkscape",
    category: "design",
    date: "2026-08-17",
    views: 13902,
    icon: "✒️",
    summary: "免费 SVG 矢量图工具，AI 的经济平替。",
    tags: "设计,矢量,绘图,开源",
    download: "https://inkscape.org",
    content: `
      <p>Inkscape 是开源的矢量图形编辑器，基于 SVG 格式，适合做 Logo、图标、插画与排版。</p>
      <p>功能对标商业矢量软件，完全免费，是设计师的轻量利器。</p>`,
  },
  {
    id: 23,
    title: "[设计] 免费绘画软件 Krita",
    category: "design",
    date: "2026-08-16",
    views: 17633,
    icon: "🖌️",
    summary: "开源数字绘画工具，板绘爱好者的免费首选。",
    tags: "设计,绘画,板绘,开源",
    download: "https://krita.org",
    content: `
      <p>Krita 是面向插画与概念设计的开源绘画软件，笔刷引擎强大，支持数位板压感。</p>
      <p>免费、跨平台，是数字绘画入门与日常创作的优质选择。</p>`,
  },
  {
    id: 24,
    title: "[网络] 开源下载工具 qBittorrent",
    category: "network",
    date: "2026-08-18",
    views: 22318,
    icon: "🧲",
    summary: "无广告的开源 BT 下载工具，干净好用。",
    tags: "网络,下载,BT,开源",
    download: "https://www.qbittorrent.org",
    content: `
      <p>qBittorrent 是一款开源的 BitTorrent 客户端，界面清爽、无广告、无捆绑。</p>
      <p>支持做种、限速、搜索引擎插件，是开源社区里最成熟的下载工具之一。</p>`,
  },
  {
    id: 25,
    title: "[网络] 开源 VPN 协议 WireGuard",
    category: "network",
    date: "2026-08-15",
    views: 15099,
    icon: "🛡️",
    summary: "现代、轻量、高速的开源 VPN 方案。",
    tags: "网络,VPN,安全,开源",
    download: "https://www.wireguard.com",
    content: `
      <p>WireGuard 是一种现代开源 VPN 协议，代码极简、连接迅速、性能出色，已被纳入 Linux 内核。</p>
      <p>适合自建安全隧道，是个人组网与远程访问的优选方案。</p>`,
  },
  {
    id: 26,
    title: "[开发] 免费代码编辑器 VS Code",
    category: "dev",
    date: "2026-08-18",
    views: 29871,
    icon: "💻",
    summary: "微软出品的免费编辑器，插件生态无敌。",
    tags: "开发,编辑器,代码,免费",
    download: "https://code.visualstudio.com",
    content: `
      <p>Visual Studio Code 是微软推出的免费开源代码编辑器，启动快、智能补全强，插件市场极其丰富。</p>
      <p>几乎支持所有编程语言，是开发者装机必备的轻量 IDE。</p>`,
  },
  {
    id: 27,
    title: "[开发] 版本控制工具 Git",
    category: "dev",
    date: "2026-08-14",
    views: 18740,
    icon: "🔀",
    summary: "事实标准的分布式版本控制，写代码必装。",
    tags: "开发,版本控制,Git,开源",
    download: "https://git-scm.com",
    content: `
      <p>Git 是当今最流行的分布式版本控制系统，用于管理代码历史、协作开发与分支合并。</p>
      <p>免费开源，是程序员的底层基础设施，也是本站得以部署到 GitHub 的关键工具。</p>`,
  },
  {
    id: 28,
    title: "[游戏] 免费开源战略游戏 0 A.D.",
    category: "game",
    date: "2026-08-17",
    views: 16452,
    icon: "🎮",
    summary: "类《帝国时代》的免费开源历史战略游戏。",
    tags: "游戏,战略,开源,免费",
    download: "https://play0ad.com",
    content: `
      <p>0 A.D. 是一款免费开源的实时战略游戏，玩法类似《帝国时代》，重现古代文明的战争与建设。</p>
      <p>由志愿者社区持续开发，完全免费、无内购，是开源游戏里的精品之作。</p>`,
  },
  {
    id: 29,
    title: "[游戏] 免费开源平台跳跃 SuperTux",
    category: "game",
    date: "2026-08-13",
    views: 11208,
    icon: "🐧",
    summary: "Linux 吉祥物主角的免费横版冒险，老少皆宜。",
    tags: "游戏,横版,休闲,开源",
    download: "https://supertux.org",
    content: `
      <p>SuperTux 是一款免费开源的横版过关游戏，主角是一只戴着帽子的企鹅 Tux，玩法类似经典超级马里奥。</p>
      <p>轻松休闲、全平台可玩，是开源游戏里适合全家共乐的小品。</p>`,
  },
];
