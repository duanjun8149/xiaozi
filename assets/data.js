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
  slogan: "软件清澈源泉",
  // 想换站名就改上面两行，比如改成你自己的名字
};

/* 联盟返利 / 广告配置 —— 填好下方字段并把下面的 enabled 改为 true 即可生效 */
const AFFILIATE = {
  enabled: true,
  // 京东联盟：已填真实推广链接（u.jd.com 短链，计佣）
  jd: "https://u.jd.com/kg8O7Xg",
  jdReal: true,
  // 多多进宝：当前为引流占位（公开搜券页，不计佣）；拿到后台推广链接后替换 pdd 并设 pddReal:true
  pdd: "https://jinbao.pinduoduo.com/",
  pddReal: false,
  // 淘宝联盟：暂未接入
  taobao: "",
  taobaoReal: false,
  // 你的联盟账号（已记录备用）
  jdId: "2038488626",        // 京东联盟 ID
  pddId: "44699964",         // 多多客 ID
  adCode: "",                // 粘贴百度联盟 / Google AdSense 广告代码到此，广告位即生效
  inviteCode: "666666",      // 邀请码（黑域宝盒式拉新）
  vipUrl: "",                // 会员/资源包开通链接（留空则显示占位）
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
  {
    id: 30,
    title: "[Windows] 秒搜全盘文件 Everything",
    category: "windows",
    date: "2026-08-02",
    views: 9110,
    icon: "🔍",
    summary: "输入即出结果，秒级定位本地任何文件。",
    tags: "文件搜索,全盘,效率,免费",
    download: "https://www.voidtools.com",
    content: `
      <p>Everything 是一款极轻量的本地文件搜索引擎，建立索引后几乎瞬间返回结果，比系统自带搜索快几个数量级。</p>
      <h3>亮点</h3>
      <ul>
        <li>建立索引后搜索零延迟</li>
        <li>占用内存极小，常驻无感</li>
        <li>支持正则与高级筛选</li>
      </ul>`,
  },
  {
    id: 31,
    title: "[Windows] 截图录屏一体 ShareX",
    category: "windows",
    date: "2026-08-09",
    views: 9147,
    icon: "📸",
    summary: "开源截图+录屏+上传一条龙，效率党必备。",
    tags: "截图,录屏,开源,GIF",
    download: "https://getsharex.com",
    content: `
      <p>ShareX 是功能极强的开源截图工具，支持区域、滚动、全屏截图，可录屏生成 GIF/视频，并自动上传图床。</p>
      <h3>亮点</h3>
      <ul>
        <li>截图录屏全免费开源</li>
        <li>丰富后期标注与特效</li>
        <li>支持数十种图床自动上传</li>
      </ul>`,
  },
  {
    id: 32,
    title: "[Windows] 贴图式截图 Snipaste",
    category: "windows",
    date: "2026-08-16",
    views: 9184,
    icon: "📌",
    summary: "截图后悬浮贴回桌面，对照神器。",
    tags: "截图,贴图,效率,免费",
    download: "https://www.snipaste.com",
    content: `
      <p>Snipaste 把截图变成可悬浮、可半透明的贴图钉在屏幕上，写代码、做设计对照时极其方便。</p>
      <h3>亮点</h3>
      <ul>
        <li>截图即贴图，桌面对照</li>
        <li>取色与标尺实用</li>
        <li>轻量无广告</li>
      </ul>`,
  },
  {
    id: 33,
    title: "[Windows] 开源远程桌面 RustDesk",
    category: "windows",
    date: "2026-08-04",
    views: 9221,
    icon: "🖥️",
    summary: "自建中继的免费远程控制，TeamViewer 平替。",
    tags: "远程,控制,开源,免费",
    download: "https://rustdesk.com",
    content: `
      <p>RustDesk 是开源远程桌面工具，可直连也可自建中继服务器，无需账号即可远程协助。</p>
      <h3>亮点</h3>
      <ul>
        <li>开源可自建，数据自主</li>
        <li>跨平台支持</li>
        <li>无需复杂配置</li>
      </ul>`,
  },
  {
    id: 34,
    title: "[Windows] 彻底卸载 Geek Uninstaller",
    category: "windows",
    date: "2026-08-11",
    views: 9258,
    icon: "🧨",
    summary: "强制卸载+残留清扫，比系统卸载干净。",
    tags: "卸载,清理,免费,小巧",
    download: "https://geekuninstaller.com",
    content: `
      <p>Geek Uninstaller 免费版即可彻底卸载软件并扫描残留注册表与文件，绿色单文件运行。</p>
      <h3>亮点</h3>
      <ul>
        <li>卸载同时清残留</li>
        <li>单文件免安装</li>
        <li>速度快界面清爽</li>
      </ul>`,
  },
  {
    id: 35,
    title: "[Windows] 系统精简优化 Dism++",
    category: "windows",
    date: "2026-08-18",
    views: 9295,
    icon: "🛠️",
    summary: "国人开源的系统清理与映像管理工具。",
    tags: "系统,清理,优化,开源",
    download: "https://github.com/Chuyu-Team/DismPlusPlus",
    content: `
      <p>Dism++ 是基于 CBS 的 Windows 系统管理与清理工具，可优化更新、清理组件、管理启动项。</p>
      <h3>亮点</h3>
      <ul>
        <li>国人开发，中文友好</li>
        <li>支持系统映像处理</li>
        <li>清理彻底且可控</li>
      </ul>`,
  },
  {
    id: 36,
    title: "[Windows] 代码级文本编辑器 Notepad++",
    category: "windows",
    date: "2026-08-06",
    views: 9332,
    icon: "📝",
    summary: "轻快的多语言代码编辑器，替代记事本。",
    tags: "文本,编辑器,代码,开源",
    download: "https://notepad-plus-plus.org",
    content: `
      <p>Notepad++ 是 Windows 上经典的开源文本编辑器，支持语法高亮、正则、宏与多标签。</p>
      <h3>亮点</h3>
      <ul>
        <li>启动极快</li>
        <li>支持数十种语言</li>
        <li>插件生态成熟</li>
      </ul>`,
  },
  {
    id: 37,
    title: "[Windows] 极简影音播放器 MPV",
    category: "windows",
    date: "2026-08-13",
    views: 9369,
    icon: "▶️",
    summary: "命令行驱动的硬核播放器，解码强劲。",
    tags: "播放器,开源,解码,轻量",
    download: "https://mpv.io",
    content: `
      <p>mpv 是开源媒体播放器内核，解码能力一流，常被用作其他播放器的基础。</p>
      <h3>亮点</h3>
      <ul>
        <li>解码能力顶级</li>
        <li>资源占用低</li>
        <li>可脚本化高度定制</li>
      </ul>`,
  },
  {
    id: 38,
    title: "[Windows] 经典播放器 MPC-HC",
    category: "windows",
    date: "2026-08-01",
    views: 9406,
    icon: "🎬",
    summary: "轻量无广告的本地视频播放器。",
    tags: "播放器,视频,开源,轻量",
    download: "https://mpc-hc.org",
    content: `
      <p>Media Player Classic - HC 是延续经典的轻量开源播放器，界面复古、播放稳定。</p>
      <h3>亮点</h3>
      <ul>
        <li>极轻量无广告</li>
        <li>兼容老硬件</li>
        <li>操作简单</li>
      </ul>`,
  },
  {
    id: 39,
    title: "[Windows] 视频转码 HandBrake",
    category: "windows",
    date: "2026-08-08",
    views: 9443,
    icon: "🔄",
    summary: "开源视频压缩与格式转换工具。",
    tags: "转码,视频,压缩,开源",
    download: "https://handbrake.fr",
    content: `
      <p>HandBrake 可将视频压缩、转码、裁切并添加字幕，是开源视频处理入门首选。</p>
      <h3>亮点</h3>
      <ul>
        <li>批量转码高效</li>
        <li>预设丰富</li>
        <li>跨平台免费</li>
      </ul>`,
  },
  {
    id: 40,
    title: "[Windows] 加密虚拟磁盘 VeraCrypt",
    category: "windows",
    date: "2026-08-15",
    views: 9480,
    icon: "🔒",
    summary: "TrueCrypt 继任者，磁盘级加密。",
    tags: "加密,安全,隐私,开源",
    download: "https://www.veracrypt.fr",
    content: `
      <p>VeraCrypt 可创建加密虚拟磁盘或加密整块分区，保护敏感数据不被读取。</p>
      <h3>亮点</h3>
      <ul>
        <li>高强度加密算法</li>
        <li>支持隐藏卷</li>
        <li>跨平台开源</li>
      </ul>`,
  },
  {
    id: 41,
    title: "[Windows] 屏幕护眼 f.lux",
    category: "windows",
    date: "2026-08-03",
    views: 9517,
    icon: "💡",
    summary: "随昼夜调节色温，缓解眼疲劳。",
    tags: "护眼,色温,免费,健康",
    download: "https://justgetflux.com",
    content: `
      <p>f.lux 根据时间与地理位置自动调节屏幕色温，夜晚偏暖，减少蓝光伤害。</p>
      <h3>亮点</h3>
      <ul>
        <li>自动调节色温</li>
        <li>保护夜间视力</li>
        <li>轻量后台运行</li>
      </ul>`,
  },
  {
    id: 42,
    title: "[Windows] 截图标注 Greenshot",
    category: "windows",
    date: "2026-08-10",
    views: 9554,
    icon: "✂️",
    summary: "轻量开源截图+快速标注。",
    tags: "截图,标注,开源,免费",
    download: "https://getgreenshot.org",
    content: `
      <p>Greenshot 是开源截图工具，截图后可快速箭头、框选、马赛克并保存或发送。</p>
      <h3>亮点</h3>
      <ul>
        <li>截图即标注</li>
        <li>支持 Office 导出</li>
        <li>体积小巧</li>
      </ul>`,
  },
  {
    id: 43,
    title: "[Windows] PDF 分割合并 PDFsam",
    category: "windows",
    date: "2026-08-17",
    views: 9591,
    icon: "🗂️",
    summary: "免费 PDF 拆分/合并/旋转工具。",
    tags: "PDF,分割,合并,开源",
    download: "https://pdfsam.org",
    content: `
      <p>PDFsam 提供免费的 PDF 拆分、合并、旋转与抽取页面功能，基础版已够日常。</p>
      <h3>亮点</h3>
      <ul>
        <li>拆分合并直观</li>
        <li>支持批量</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 44,
    title: "[Windows] 电子书管理 Calibre",
    category: "windows",
    date: "2026-08-05",
    views: 9628,
    icon: "📚",
    summary: "全能电子书整理与格式转换。",
    tags: "电子书,管理,转换,开源",
    download: "https://calibre-ebook.com",
    content: `
      <p>Calibre 是开源电子书管理神器，可整理书库、转换格式、推送设备并内置阅读器。</p>
      <h3>亮点</h3>
      <ul>
        <li>书库管理强大</li>
        <li>格式转换全面</li>
        <li>内置阅读器</li>
      </ul>`,
  },
  {
    id: 45,
    title: "[Windows] 下载加速 Free Download Manager",
    category: "windows",
    date: "2026-08-12",
    views: 9665,
    icon: "⬇️",
    summary: "开源下载器，支持断点续传与 torrent。",
    tags: "下载,断点,开源,免费",
    download: "https://www.freedownloadmanager.org",
    content: `
      <p>FDM 是开源下载工具，支持多线程加速、断点续传、计划下载与 BT。</p>
      <h3>亮点</h3>
      <ul>
        <li>多线程加速</li>
        <li>断点续传</li>
        <li>界面友好</li>
      </ul>`,
  },
  {
    id: 46,
    title: "[Windows] 全能下载 JDownloader",
    category: "windows",
    date: "2026-08-19",
    views: 9702,
    icon: "⬇️",
    summary: "支持网盘与批量链接的开源下载器。",
    tags: "下载,网盘,批量,开源",
    download: "https://jdownloader.org",
    content: `
      <p>JDownloader 可解析大量网盘与批量链接，自动填充验证码并限速管理。</p>
      <h3>亮点</h3>
      <ul>
        <li>支持众多网盘</li>
        <li>批量链接解析</li>
        <li>开源跨平台</li>
      </ul>`,
  },
  {
    id: 47,
    title: "[Windows] BT 客户端 Transmission",
    category: "windows",
    date: "2026-08-07",
    views: 9739,
    icon: "🧲",
    summary: "极简开源 BT 下载，资源占用低。",
    tags: "BT,下载,开源,轻量",
    download: "https://transmissionbt.com",
    content: `
      <p>Transmission 以极简著称，界面干净、后台占用低，适合常驻做种。</p>
      <h3>亮点</h3>
      <ul>
        <li>极简无广告</li>
        <li>低资源占用</li>
        <li>支持远程管理</li>
      </ul>`,
  },
  {
    id: 48,
    title: "[Windows] BT 客户端 Deluge",
    category: "windows",
    date: "2026-08-14",
    views: 9776,
    icon: "🧲",
    summary: "模块化开源 BT 客户端。",
    tags: "BT,下载,开源,模块",
    download: "https://deluge-torrent.org",
    content: `
      <p>Deluge 是模块化设计的开源 BT 客户端，可通过插件扩展，支持守护进程模式。</p>
      <h3>亮点</h3>
      <ul>
        <li>插件可扩展</li>
        <li>守护进程模式</li>
        <li>轻量灵活</li>
      </ul>`,
  },
  {
    id: 49,
    title: "[Windows] FTP 客户端 FileZilla",
    category: "windows",
    date: "2026-08-02",
    views: 9813,
    icon: "📤",
    summary: "老牌开源 FTP/SFTP 客户端。",
    tags: "FTP,SFTP,传输,开源",
    download: "https://filezilla-project.org",
    content: `
      <p>FileZilla 支持 FTP、SFTP、FTPS 传输，站点管理强大，是运维常用工具。</p>
      <h3>亮点</h3>
      <ul>
        <li>多协议支持</li>
        <li>站点管理器</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 50,
    title: "[Windows] SFTP 客户端 WinSCP",
    category: "windows",
    date: "2026-08-09",
    views: 9850,
    icon: "📤",
    summary: "Windows 上的 SFTP/SC 图形客户端。",
    tags: "SFTP,SSH,传输,免费",
    download: "https://winscp.net",
    content: `
      <p>WinSCP 提供图形化 SFTP 与 SCP 文件传输，支持同步、脚本与编辑器集成。</p>
      <h3>亮点</h3>
      <ul>
        <li>图形化操作</li>
        <li>支持同步目录</li>
        <li>脚本自动化</li>
      </ul>`,
  },
  {
    id: 51,
    title: "[Windows] SSH 终端 PuTTY",
    category: "windows",
    date: "2026-08-16",
    views: 9887,
    icon: "🖧",
    summary: "经典开源 SSH/Telnet 客户端。",
    tags: "SSH,终端,远程,开源",
    download: "https://www.putty.org",
    content: `
      <p>PuTTY 是久经考验的开源远程终端，体积小、连接稳，是管理服务器的标配。</p>
      <h3>亮点</h3>
      <ul>
        <li>连接稳定</li>
        <li>轻量单文件</li>
        <li>Telnet/SSH 支持</li>
      </ul>`,
  },
  {
    id: 52,
    title: "[Windows] 远程控制 TightVNC",
    category: "windows",
    date: "2026-08-04",
    views: 9924,
    icon: "🖥️",
    summary: "开源 VNC 远程控制方案。",
    tags: "VNC,远程,开源,免费",
    download: "https://www.tightvnc.com",
    content: `
      <p>TightVNC 提供 VNC 服务端与客户端的开源实现，适合内网远程协助。</p>
      <h3>亮点</h3>
      <ul>
        <li>开源跨平台</li>
        <li>内网远程</li>
        <li>部署简单</li>
      </ul>`,
  },
  {
    id: 53,
    title: "[Windows] 虚拟机 VirtualBox",
    category: "windows",
    date: "2026-08-11",
    views: 9961,
    icon: "💿",
    summary: "甲骨文开源的桌面虚拟化软件。",
    tags: "虚拟机,虚拟化,开源,免费",
    download: "https://www.virtualbox.org",
    content: `
      <p>VirtualBox 可在一台电脑上运行多个操作系统，适合测试、隔离与学习。</p>
      <h3>亮点</h3>
      <ul>
        <li>免费功能完整</li>
        <li>快照与克隆</li>
        <li>跨平台</li>
      </ul>`,
  },
  {
    id: 54,
    title: "[Windows] 虚拟机 QEMU",
    category: "windows",
    date: "2026-08-18",
    views: 9998,
    icon: "💿",
    summary: "高性能开源机器模拟器。",
    tags: "模拟器,虚拟化,开源,性能",
    download: "https://www.qemu.org",
    content: `
      <p>QEMU 是开源的机器模拟与虚拟化工具，配合 KVM 性能接近原生。</p>
      <h3>亮点</h3>
      <ul>
        <li>模拟能力强</li>
        <li>配合 KVM 高性能</li>
        <li>支持多架构</li>
      </ul>`,
  },
  {
    id: 55,
    title: "[Windows] 网络抓包 Wireshark",
    category: "windows",
    date: "2026-08-06",
    views: 10035,
    icon: "🔬",
    summary: "业界标准开源网络协议分析器。",
    tags: "抓包,网络,分析,开源",
    download: "https://www.wireshark.org",
    content: `
      <p>Wireshark 可捕获并深度解析网络数据包，是网络排障与安全分析的利器。</p>
      <h3>亮点</h3>
      <ul>
        <li>协议解析全面</li>
        <li>实时抓包</li>
        <li>过滤器强大</li>
      </ul>`,
  },
  {
    id: 56,
    title: "[Windows] 端口扫描 Nmap",
    category: "windows",
    date: "2026-08-13",
    views: 10072,
    icon: "🌐",
    summary: "开源网络探测与安全审计工具。",
    tags: "扫描,端口,安全,开源",
    download: "https://nmap.org",
    content: `
      <p>Nmap 用于网络发现与端口扫描，是安全与运维人员的基础工具。</p>
      <h3>亮点</h3>
      <ul>
        <li>扫描灵活强大</li>
        <li>脚本引擎扩展</li>
        <li>开源跨平台</li>
      </ul>`,
  },
  {
    id: 57,
    title: "[Windows] 局域网扫描 Angry IP Scanner",
    category: "windows",
    date: "2026-08-01",
    views: 10109,
    icon: "📡",
    summary: "开源局域网 IP/端口快速扫描。",
    tags: "扫描,局域网,开源,免费",
    download: "https://angryip.org",
    content: `
      <p>Angry IP Scanner 可快速扫描网段内在线设备与开放端口，排查网络一目了然。</p>
      <h3>亮点</h3>
      <ul>
        <li>扫描速度快</li>
        <li>导出方便</li>
        <li>轻量开源</li>
      </ul>`,
  },
  {
    id: 58,
    title: "[Windows] 硬件信息 CPU-Z",
    category: "windows",
    date: "2026-08-08",
    views: 10146,
    icon: "🧠",
    summary: "查看 CPU/内存/主板详细参数。",
    tags: "硬件,检测,免费,信息",
    download: "https://www.cpuid.com",
    content: `
      <p>CPU-Z 是查看处理器、主板、内存时序等硬件信息的经典免费工具。</p>
      <h3>亮点</h3>
      <ul>
        <li>信息详尽</li>
        <li>体积小免安装</li>
        <li>更新及时</li>
      </ul>`,
  },
  {
    id: 59,
    title: "[Windows] 硬盘健康 CrystalDiskInfo",
    category: "windows",
    date: "2026-08-15",
    views: 10183,
    icon: "💾",
    summary: "读取 S.M.A.R.T 监控硬盘健康。",
    tags: "硬盘,健康,检测,免费",
    download: "https://crystalmark.info",
    content: `
      <p>CrystalDiskInfo 通过 S.M.A.R.T 数据评估硬盘状态，提前预警坏道风险。</p>
      <h3>亮点</h3>
      <ul>
        <li>预警硬盘故障</li>
        <li>温度与寿命监测</li>
        <li>界面直观</li>
      </ul>`,
  },
  {
    id: 60,
    title: "[Windows] 硬盘测速 CrystalDiskMark",
    category: "windows",
    date: "2026-08-03",
    views: 10220,
    icon: "💽",
    summary: "简单直观的硬盘读写速度测试。",
    tags: "硬盘,测速,免费,性能",
    download: "https://crystalmark.info",
    content: `
      <p>CrystalDiskMark 可快速测试顺序与随机读写速度，对比硬盘性能很方便。</p>
      <h3>亮点</h3>
      <ul>
        <li>测试快速</li>
        <li>结果直观</li>
        <li>免费小巧</li>
      </ul>`,
  },
  {
    id: 61,
    title: "[Windows] 硬件检测 HWiNFO",
    category: "windows",
    date: "2026-08-10",
    views: 10257,
    icon: "🧰",
    summary: "专业级硬件信息与传感器监控。",
    tags: "硬件,监控,传感器,免费",
    download: "https://www.hwinfo.com",
    content: `
      <p>HWiNFO 提供近乎全量的硬件信息与实时传感器数据，适合超频与排障。</p>
      <h3>亮点</h3>
      <ul>
        <li>信息最全面</li>
        <li>实时传感器</li>
        <li>免费专业</li>
      </ul>`,
  },
  {
    id: 62,
    title: "[Windows] 多系统启动盘 Ventoy",
    category: "windows",
    date: "2026-08-17",
    views: 10294,
    icon: "💾",
    summary: "一个 U 盘放多个系统镜像直接启动。",
    tags: "启动盘,多系统,开源,装机",
    download: "https://www.ventoy.net",
    content: `
      <p>Ventoy 让你把多个 ISO 放进同一个 U 盘，开机选择即可启动，装机效率翻倍。</p>
      <h3>亮点</h3>
      <ul>
        <li>多镜像共存</li>
        <li>免反复写盘</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 63,
    title: "[Windows] 启动盘制作 Rufus",
    category: "windows",
    date: "2026-08-05",
    views: 10331,
    icon: "🔧",
    summary: "小巧开源的 U 盘启动盘制作工具。",
    tags: "启动盘,装机,开源,轻量",
    download: "https://rufus.ie",
    content: `
      <p>Rufus 可快速把 ISO 写入 U 盘制作启动盘，支持各种分区与引导模式。</p>
      <h3>亮点</h3>
      <ul>
        <li>写入极快</li>
        <li>选项专业</li>
        <li>单文件免安装</li>
      </ul>`,
  },
  {
    id: 64,
    title: "[Windows] 启动盘制作 Etcher",
    category: "windows",
    date: "2026-08-12",
    views: 10368,
    icon: "🔥",
    summary: "图形化开源镜像烧录工具。",
    tags: "烧录,启动盘,开源,易用",
    download: "https://www.balena.io/etcher/",
    content: `
      <p>Etcher 以简洁图形界面把镜像安全写入 U 盘/SD 卡，降低误操作风险。</p>
      <h3>亮点</h3>
      <ul>
        <li>防误选磁盘</li>
        <li>界面友好</li>
        <li>跨平台</li>
      </ul>`,
  },
  {
    id: 65,
    title: "[Windows] 系统克隆 Clonezilla",
    category: "windows",
    date: "2026-08-19",
    views: 10405,
    icon: "🧬",
    summary: "开源磁盘与分区镜像备份还原。",
    tags: "克隆,备份,开源,装机",
    download: "https://clonezilla.org",
    content: `
      <p>Clonezilla 可对整个磁盘或分区做镜像备份与还原，适合批量装机与迁移。</p>
      <h3>亮点</h3>
      <ul>
        <li>镜像备份高效</li>
        <li>支持多种文件系统</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 66,
    title: "[Windows] 分区管理 GParted",
    category: "windows",
    date: "2026-08-07",
    views: 10442,
    icon: "🗄️",
    summary: "开源图形化磁盘分区工具。",
    tags: "分区,磁盘,开源,管理",
    download: "https://gparted.org",
    content: `
      <p>GParted 以图形化方式调整、移动、复制分区，常配合 Live 系统使用。</p>
      <h3>亮点</h3>
      <ul>
        <li>操作直观</li>
        <li>支持多文件系统</li>
        <li>开源可靠</li>
      </ul>`,
  },
  {
    id: 67,
    title: "[Windows] 磁盘分析 TreeSize Free",
    category: "windows",
    date: "2026-08-14",
    views: 10479,
    icon: "📊",
    summary: "快速找出 C 盘空间都被谁吃了。",
    tags: "磁盘,分析,清理,免费",
    download: "https://www.jam-software.com/treesize_free",
    content: `
      <p>TreeSize Free 以树状图展示文件夹占用，定位大文件与垃圾一目了然。</p>
      <h3>亮点</h3>
      <ul>
        <li>可视化占用</li>
        <li>扫描迅速</li>
        <li>免费版够用</li>
      </ul>`,
  },
  {
    id: 68,
    title: "[Windows] 磁盘分析 WinDirStat",
    category: "windows",
    date: "2026-08-02",
    views: 10516,
    icon: "📊",
    summary: "彩色方块直观呈现磁盘占用。",
    tags: "磁盘,分析,开源,清理",
    download: "https://windirstat.net",
    content: `
      <p>WinDirStat 用彩色区块图展示文件分布，找出占用大户非常直观。</p>
      <h3>亮点</h3>
      <ul>
        <li>区块图直观</li>
        <li>开源免费</li>
        <li>定位大文件</li>
      </ul>`,
  },
  {
    id: 69,
    title: "[Windows] 磁盘可视化 SpaceSniffer",
    category: "windows",
    date: "2026-08-09",
    views: 10553,
    icon: "🟦",
    summary: "块状可视化磁盘空间分析。",
    tags: "磁盘,可视化,免费,分析",
    download: "https://www.uderzo.it/main_products.htm",
    content: `
      <p>SpaceSniffer 以动态方块图呈现磁盘内容，缩放即可钻取目录。</p>
      <h3>亮点</h3>
      <ul>
        <li>交互式方块图</li>
        <li>实时刷新</li>
        <li>免费小巧</li>
      </ul>`,
  },
  {
    id: 70,
    title: "[Windows] 卸载清理 Revo Uninstaller",
    category: "windows",
    date: "2026-08-16",
    views: 10590,
    icon: "🧨",
    summary: "强制卸载并深度清理残留。",
    tags: "卸载,清理,免费,残留",
    download: "https://www.revouninstaller.com",
    content: `
      <p>Revo 免费版可强制卸载顽固软件并扫描残留注册表与文件。</p>
      <h3>亮点</h3>
      <ul>
        <li>深度清理残留</li>
        <li>强制卸载</li>
        <li>免费可用</li>
      </ul>`,
  },
  {
    id: 71,
    title: "[Windows] 隐私优化 O&O ShutUp10",
    category: "windows",
    date: "2026-08-04",
    views: 10627,
    icon: "🔇",
    summary: "一键关闭 Win10/11 多余数据上报。",
    tags: "隐私,优化,免费,Windows",
    download: "https://www.oo-software.com/en/shutup10",
    content: `
      <p>ShutUp10 集中管理 Windows 的 telemetry 与隐私开关，关掉不必要的上报。</p>
      <h3>亮点</h3>
      <ul>
        <li>隐私开关集中</li>
        <li>一键应用</li>
        <li>免费无广告</li>
      </ul>`,
  },
  {
    id: 72,
    title: "[Windows] 自动化脚本 AutoHotkey",
    category: "windows",
    date: "2026-08-11",
    views: 10664,
    icon: "⌨️",
    summary: "用脚本自定义快捷键与自动化。",
    tags: "自动化,脚本,开源,效率",
    download: "https://www.autohotkey.com",
    content: `
      <p>AutoHotkey 通过脚本实现热键、宏与窗口操作，重复劳动一键搞定。</p>
      <h3>亮点</h3>
      <ul>
        <li>热键高度自定义</li>
        <li>可写复杂脚本</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 73,
    title: "[Windows] 系统增强 PowerToys",
    category: "windows",
    date: "2026-08-18",
    views: 10701,
    icon: "🛠️",
    summary: "微软官方开源的 Windows 工具箱。",
    tags: "效率,系统,开源,微软",
    download: "https://github.com/microsoft/PowerToys",
    content: `
      <p>PowerToys 集合了窗口排布、批量重命名、颜色拾取等十余种实用小工具。</p>
      <h3>亮点</h3>
      <ul>
        <li>微软官方维护</li>
        <li>工具持续增加</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 74,
    title: "[Windows] 文件快速定位 Listary",
    category: "windows",
    date: "2026-08-06",
    views: 10738,
    icon: "🔎",
    summary: "双击 Ctrl 全局搜文件与快捷操作。",
    tags: "文件,搜索,效率,免费",
    download: "https://www.listary.com",
    content: `
      <p>Listary 让你在任意文件对话框里快速定位，并支持全局搜索与命令。</p>
      <h3>亮点</h3>
      <ul>
        <li>全局即时搜索</li>
        <li>对话框增强</li>
        <li>免费版够用</li>
      </ul>`,
  },
  {
    id: 75,
    title: "[Windows] 资源管理器标签页 Clover",
    category: "windows",
    date: "2026-08-13",
    views: 10775,
    icon: "🍀",
    summary: "给资源管理器加上浏览器式标签页。",
    tags: "资源管理器,标签页,免费,效率",
    download: "https://ejie.me",
    content: `
      <p>Clover 为 Windows 资源管理器带来多标签页与书签，像浏览器一样管理文件夹。</p>
      <h3>亮点</h3>
      <ul>
        <li>多标签浏览</li>
        <li>书签收藏</li>
        <li>免费轻量</li>
      </ul>`,
  },
  {
    id: 76,
    title: "[Windows] 资源管理器增强 QTTabBar",
    category: "windows",
    date: "2026-08-01",
    views: 10812,
    icon: "🗂️",
    summary: "开源的资源管理器标签与增强。",
    tags: "资源管理器,增强,开源,标签",
    download: "https://qttabbar.net",
    content: `
      <p>QTTabBar 为资源管理器添加标签页、预览与多种右键增强功能。</p>
      <h3>亮点</h3>
      <ul>
        <li>功能丰富</li>
        <li>高度可配置</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 77,
    title: "[Windows] 剪贴板管理 Ditto",
    category: "windows",
    date: "2026-08-08",
    views: 10849,
    icon: "📋",
    summary: "保存历史剪贴，随时回贴。",
    tags: "剪贴板,历史,开源,效率",
    download: "https://ditto-cp.sourceforge.io",
    content: `
      <p>Ditto 记录剪贴板历史，可搜索并一键粘贴之前复制过的内容。</p>
      <h3>亮点</h3>
      <ul>
        <li>历史可追溯</li>
        <li>搜索快速</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 78,
    title: "[Windows] 剪贴板管理 CopyQ",
    category: "windows",
    date: "2026-08-15",
    views: 10886,
    icon: "📋",
    summary: "带脚本能力的开源剪贴板管理器。",
    tags: "剪贴板,开源,脚本,效率",
    download: "https://hluk.github.io/CopyQ/",
    content: `
      <p>CopyQ 支持剪贴板历史、编辑与脚本触发，适合高级用户定制流程。</p>
      <h3>亮点</h3>
      <ul>
        <li>脚本化强大</li>
        <li>跨平台</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 79,
    title: "[Windows] 快速复制 TeraCopy",
    category: "windows",
    date: "2026-08-03",
    views: 10923,
    icon: "📑",
    summary: "更稳更快的文件复制与校验。",
    tags: "复制,文件,免费,校验",
    download: "https://www.codesector.com/teracopy",
    content: `
      <p>TeraCopy 在复制大文件时更稳，并可在结束后校验完整性。</p>
      <h3>亮点</h3>
      <ul>
        <li>断点续传</li>
        <li>错误可恢复</li>
        <li>免费版可用</li>
      </ul>`,
  },
  {
    id: 80,
    title: "[Windows] 文件夹同步 FreeFileSync",
    category: "windows",
    date: "2026-08-10",
    views: 10960,
    icon: "🔁",
    summary: "开源双向文件夹同步备份。",
    tags: "同步,备份,开源,免费",
    download: "https://freefilesync.org",
    content: `
      <p>FreeFileSync 可对比并双向同步两个文件夹，适合定期备份与镜像。</p>
      <h3>亮点</h3>
      <ul>
        <li>双向同步</li>
        <li>批量任务</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 81,
    title: "[Windows] 加密备份 Duplicati",
    category: "windows",
    date: "2026-08-17",
    views: 10997,
    icon: "💾",
    summary: "开源加密增量备份到网盘。",
    tags: "备份,加密,开源,网盘",
    download: "https://www.duplicati.com",
    content: `
      <p>Duplicati 将加密增量备份推送到多种云存储，保护数据安全。</p>
      <h3>亮点</h3>
      <ul>
        <li>端到端加密</li>
        <li>增量省流量</li>
        <li>支持多云端</li>
      </ul>`,
  },
  {
    id: 82,
    title: "[Windows] 数据恢复 Recuva",
    category: "windows",
    date: "2026-08-05",
    views: 11034,
    icon: "♻️",
    summary: "免费恢复误删文件。",
    tags: "恢复,数据,免费,误删",
    download: "https://www.ccleaner.com/recuva",
    content: `
      <p>Recuva 可扫描磁盘找回误删的文件，简单好用。</p>
      <h3>亮点</h3>
      <ul>
        <li>向导式操作</li>
        <li>免费可用</li>
        <li>恢复率高</li>
      </ul>`,
  },
  {
    id: 83,
    title: "[Windows] 数据恢复 TestDisk/PhotoRec",
    category: "windows",
    date: "2026-08-12",
    views: 11071,
    icon: "♻️",
    summary: "开源分区修复与文件恢复。",
    tags: "恢复,分区,开源,数据",
    download: "https://www.cgsecurity.org",
    content: `
      <p>TestDisk 修复分区表，PhotoRec 从损坏介质中抢救文件，是开源恢复利器。</p>
      <h3>亮点</h3>
      <ul>
        <li>分区修复</li>
        <li>深层恢复</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 84,
    title: "[Windows] 看图利器 IrfanView",
    category: "windows",
    date: "2026-08-19",
    views: 11108,
    icon: "🖼️",
    summary: "极快的开源看图与前处理。",
    tags: "看图,轻量,免费,批量",
    download: "https://www.irfanview.com",
    content: `
      <p>IrfanView 启动飞快，支持批量转换、截图与简单编辑，老牌经典。</p>
      <h3>亮点</h3>
      <ul>
        <li>打开极快</li>
        <li>批量处理</li>
        <li>免费小巧</li>
      </ul>`,
  },
  {
    id: 85,
    title: "[Windows] 看图 XnView",
    category: "windows",
    date: "2026-08-07",
    views: 11145,
    icon: "🖼️",
    summary: "看图+批量转换一体。",
    tags: "看图,转换,免费,批量",
    download: "https://www.xnview.com",
    content: `
      <p>XnView 支持海量图像格式浏览与批量转换，适合图库整理。</p>
      <h3>亮点</h3>
      <ul>
        <li>格式全面</li>
        <li>批量转换</li>
        <li>免费可用</li>
      </ul>`,
  },
  {
    id: 86,
    title: "[Windows] 极速看图 Honeyview",
    category: "windows",
    date: "2026-08-14",
    views: 11182,
    icon: "🖼️",
    summary: "漫画与图片秒开查看器。",
    tags: "看图,漫画,免费,轻量",
    download: "https://bandisoft.com/honeyview/",
    content: `
      <p>Honeyview 以极快速度打开图片与漫画压缩包，无需解压。</p>
      <h3>亮点</h3>
      <ul>
        <li>漫画直读</li>
        <li>速度极快</li>
        <li>免费无广告</li>
      </ul>`,
  },
  {
    id: 87,
    title: "[Windows] 开源看图 nomacs",
    category: "windows",
    date: "2026-08-02",
    views: 11219,
    icon: "🖼️",
    summary: "轻量开源图像查看器。",
    tags: "看图,开源,轻量,免费",
    download: "https://nomacs.org",
    content: `
      <p>nomacs 支持查看、对比与简单编辑图像，跨平台且界面现代。</p>
      <h3>亮点</h3>
      <ul>
        <li>对比视图</li>
        <li>插件扩展</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 88,
    title: "[Windows] 图像编辑 Paint.NET",
    category: "windows",
    date: "2026-08-09",
    views: 11256,
    icon: "🎨",
    summary: "易上手的免费图像编辑软件。",
    tags: "图像,编辑,免费,入门",
    download: "https://www.getpaint.net",
    content: `
      <p>Paint.NET 比画图强大、比 PS 易学，适合日常修图与图层处理。</p>
      <h3>亮点</h3>
      <ul>
        <li>图层支持</li>
        <li>操作简单</li>
        <li>免费易用</li>
      </ul>`,
  },
  {
    id: 89,
    title: "[Windows] 二维 CAD LibreCAD",
    category: "windows",
    date: "2026-08-16",
    views: 11293,
    icon: "📐",
    summary: "开源 2D CAD 绘图工具。",
    tags: "CAD,绘图,开源,工程",
    download: "https://librecad.org",
    content: `
      <p>LibreCAD 是开源二维 CAD，适合机械与建筑草图绘制。</p>
      <h3>亮点</h3>
      <ul>
        <li>二维绘图</li>
        <li>跨平台</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 90,
    title: "[Windows] 三维 CAD FreeCAD",
    category: "windows",
    date: "2026-08-04",
    views: 11330,
    icon: "🏗️",
    summary: "参数化开源 3D 建模。",
    tags: "CAD,3D,建模,开源",
    download: "https://www.freecad.org",
    content: `
      <p>FreeCAD 是以参数化驱动的 3D 建模工具，适合设计与工程原型。</p>
      <h3>亮点</h3>
      <ul>
        <li>参数化建模</li>
        <li>模块化工作台</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 91,
    title: "[Windows] 参数化建模 OpenSCAD",
    category: "windows",
    date: "2026-08-11",
    views: 11367,
    icon: "📐",
    summary: "用代码生成 3D 模型。",
    tags: "建模,3D,代码,开源",
    download: "https://openscad.org",
    content: `
      <p>OpenSCAD 通过脚本定义几何体，适合程序化、可复现的建模。</p>
      <h3>亮点</h3>
      <ul>
        <li>代码即模型</li>
        <li>精确可控</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 92,
    title: "[Windows] 室内设计 Sweet Home 3D",
    category: "windows",
    date: "2026-08-18",
    views: 11404,
    icon: "🏠",
    summary: "拖拽式开源房屋平面设计。",
    tags: "设计,家居,3D,开源",
    download: "https://www.sweethome3d.com",
    content: `
      <p>Sweet Home 3D 让你拖拽家具布置房间并生成 3D 预览，装修改造好帮手。</p>
      <h3>亮点</h3>
      <ul>
        <li>拖拽布置</li>
        <li>3D 预览</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 93,
    title: "[Windows] 音频编辑 Audacity",
    category: "windows",
    date: "2026-08-06",
    views: 11441,
    icon: "🎙️",
    summary: "老牌开源音频录制与编辑。",
    tags: "音频,录音,编辑,开源",
    download: "https://www.audacityteam.org",
    content: `
      <p>Audacity 可多轨录音、降噪、剪辑，是播客与音频处理的入门首选。</p>
      <h3>亮点</h3>
      <ul>
        <li>多轨编辑</li>
        <li>降噪插件</li>
        <li>开源跨平台</li>
      </ul>`,
  },
  {
    id: 94,
    title: "[Windows] 音乐播放 Clementine",
    category: "windows",
    date: "2026-08-13",
    views: 11478,
    icon: "🎵",
    summary: "跨平台开源音乐播放器。",
    tags: "音乐,播放,开源,免费",
    download: "https://www.clementine-player.org",
    content: `
      <p>Clementine 支持本地曲库、网络电台与云存储播放，界面清爽。</p>
      <h3>亮点</h3>
      <ul>
        <li>曲库管理</li>
        <li>网络电台</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 95,
    title: "[Windows] 音乐播放 Strawberry",
    category: "windows",
    date: "2026-08-01",
    views: 11515,
    icon: "🍓",
    summary: "面向音乐收藏者的开源播放器。",
    tags: "音乐,播放,开源,收藏",
    download: "https://www.strawberrymusicplayer.org",
    content: `
      <p>Strawberry 聚焦本地高保真音乐播放，注重音频质量与标签管理。</p>
      <h3>亮点</h3>
      <ul>
        <li>高保真播放</li>
        <li>标签完善</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 96,
    title: "[Windows] 音乐管理 MusicBee",
    category: "windows",
    date: "2026-08-08",
    views: 11552,
    icon: "🎶",
    summary: "功能强大的免费音乐管理。",
    tags: "音乐,管理,免费,同步",
    download: "https://musicbee.fm",
    content: `
      <p>MusicBee 整理、转码并同步音乐到设备，是本地音乐库的好管家。</p>
      <h3>亮点</h3>
      <ul>
        <li>设备管理</li>
        <li>自动转码</li>
        <li>免费强大</li>
      </ul>`,
  },
  {
    id: 97,
    title: "[Windows] 媒体中心 Kodi",
    category: "windows",
    date: "2026-08-15",
    views: 11589,
    icon: "📺",
    summary: "开源家庭影院媒体中心。",
    tags: "媒体中心,影音,开源,家庭",
    download: "https://kodi.tv",
    content: `
      <p>Kodi 把电脑变成客厅媒体中心，统一管理电影、音乐与照片并支持插件。</p>
      <h3>亮点</h3>
      <ul>
        <li>插件生态丰富</li>
        <li>统一管理媒体</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 98,
    title: "[Windows] 影音服务器 Jellyfin",
    category: "windows",
    date: "2026-08-03",
    views: 11626,
    icon: "🎞️",
    summary: "开源自建影音库与串流。",
    tags: "影音,服务器,开源,串流",
    download: "https://jellyfin.org",
    content: `
      <p>Jellyfin 让你自建私人 Netflix，管理影片并多端串流播放。</p>
      <h3>亮点</h3>
      <ul>
        <li>多端串流</li>
        <li>无订阅费</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 99,
    title: "[Windows] 影音服务器 Plex",
    category: "windows",
    date: "2026-08-10",
    views: 11663,
    icon: "🎞️",
    summary: "易用的个人媒体库服务。",
    tags: "影音,媒体,免费,串流",
    download: "https://www.plex.tv",
    content: `
      <p>Plex 整理你的电影音乐并提供漂亮的跨设备播放界面。</p>
      <h3>亮点</h3>
      <ul>
        <li>界面美观</li>
        <li>客户端丰富</li>
        <li>免费版可用</li>
      </ul>`,
  },
  {
    id: 100,
    title: "[Windows] 专业剪辑 DaVinci Resolve",
    category: "windows",
    date: "2026-08-17",
    views: 11700,
    icon: "🎬",
    summary: "好莱坞级免费视频调色剪辑。",
    tags: "剪辑,调色,免费,专业",
    download: "https://www.blackmagicdesign.com/products/davinciresolve",
    content: `
      <p>DaVinci Resolve 免费版已含专业剪辑与调色，是进阶视频制作的零成本方案。</p>
      <h3>亮点</h3>
      <ul>
        <li>调色顶级</li>
        <li>剪辑完整</li>
        <li>免费够强</li>
      </ul>`,
  },
  {
    id: 101,
    title: "[Windows] 剪辑 Kdenlive",
    category: "windows",
    date: "2026-08-05",
    views: 11737,
    icon: "🎬",
    summary: "开源多轨视频编辑器。",
    tags: "剪辑,视频,开源,多轨",
    download: "https://kdenlive.org",
    content: `
      <p>Kdenlive 是功能完整的开源非线性剪辑软件，适合进阶创作。</p>
      <h3>亮点</h3>
      <ul>
        <li>多轨时间线</li>
        <li>特效丰富</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 102,
    title: "[Windows] 剪辑 Shotcut",
    category: "windows",
    date: "2026-08-12",
    views: 11774,
    icon: "🎬",
    summary: "易上手的开源视频剪辑。",
    tags: "剪辑,视频,开源,免费",
    download: "https://shotcut.org",
    content: `
      <p>Shotcut 界面直观，支持多种格式与滤镜，是入门剪辑的好选择。</p>
      <h3>亮点</h3>
      <ul>
        <li>格式支持广</li>
        <li>滤镜齐全</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 103,
    title: "[Windows] 照片后期 Darktable",
    category: "windows",
    date: "2026-08-19",
    views: 11811,
    icon: "🌑",
    summary: "开源 RAW 照片处理暗房。",
    tags: "摄影,后期,开源,RAW",
    download: "https://www.darktable.org",
    content: `
      <p>Darktable 是非破坏性 RAW 处理软件，对标 Lightroom 且完全免费。</p>
      <h3>亮点</h3>
      <ul>
        <li>非破坏性编辑</li>
        <li>色彩管理</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 104,
    title: "[Windows] 照片后期 RawTherapee",
    category: "windows",
    date: "2026-08-07",
    views: 11848,
    icon: "🌤️",
    summary: "开源 RAW 图像开发工具。",
    tags: "摄影,后期,开源,RAW",
    download: "https://www.rawtherapee.com",
    content: `
      <p>RawTherapee 提供强大的 RAW 调整与降噪，适合摄影爱好者。</p>
      <h3>亮点</h3>
      <ul>
        <li>细节还原强</li>
        <li>降噪出色</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 105,
    title: "[Windows] 照片管理 digiKam",
    category: "windows",
    date: "2026-08-14",
    views: 11885,
    icon: "📷",
    summary: "开源专业照片管理与修整。",
    tags: "摄影,管理,开源,照片",
    download: "https://www.digikam.org",
    content: `
      <p>digiKam 可管理海量照片库、批量处理与人脸识别。</p>
      <h3>亮点</h3>
      <ul>
        <li>海量图库</li>
        <li>批量处理</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 106,
    title: "[Windows] 排版 Scribus",
    category: "windows",
    date: "2026-08-02",
    views: 11922,
    icon: "📰",
    summary: "开源桌面出版与排版。",
    tags: "排版,出版,开源,设计",
    download: "https://www.scribus.net",
    content: `
      <p>Scribus 是开源 DTP 软件，适合做海报、画册与杂志排版。</p>
      <h3>亮点</h3>
      <ul>
        <li>出版级排版</li>
        <li>PDF 输出</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 107,
    title: "[设计] 在线图表 diagrams.net",
    category: "design",
    date: "2026-08-09",
    views: 11959,
    icon: "🔷",
    summary: "免费开源的流程图与架构图工具。",
    tags: "图表,流程图,开源,免费",
    download: "https://app.diagrams.net",
    content: `
      <p>diagrams.net（原 draw.io）可在浏览器绘制流程图、UML 与架构图，支持本地保存。</p>
      <h3>亮点</h3>
      <ul>
        <li>无需登录</li>
        <li>多种图形库</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 108,
    title: "[Windows] 笔记 Standard Notes",
    category: "windows",
    date: "2026-08-16",
    views: 11996,
    icon: "🔒",
    summary: "端到端加密开源笔记。",
    tags: "笔记,加密,开源,隐私",
    download: "https://standardnotes.org",
    content: `
      <p>Standard Notes 以端到端加密保护你的笔记，跨平台同步且开源。</p>
      <h3>亮点</h3>
      <ul>
        <li>加密同步</li>
        <li>跨平台</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 109,
    title: "[Windows] 笔记 Logseq",
    category: "windows",
    date: "2026-08-04",
    views: 12033,
    icon: "📓",
    summary: "开源大纲式知识管理。",
    tags: "笔记,知识,开源,大纲",
    download: "https://logseq.com",
    content: `
      <p>Logseq 以大纲与双向链接组织知识，适合构建个人 wiki。</p>
      <h3>亮点</h3>
      <ul>
        <li>双向链接</li>
        <li>本地优先</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 110,
    title: "[Windows] 文献管理 Zotero",
    category: "windows",
    date: "2026-08-11",
    views: 12070,
    icon: "📚",
    summary: "开源文献与引用管理。",
    tags: "文献,引用,开源,学术",
    download: "https://www.zotero.org",
    content: `
      <p>Zotero 帮研究者收集、整理文献并自动生成引用格式。</p>
      <h3>亮点</h3>
      <ul>
        <li>一键抓取文献</li>
        <li>引用格式全</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 111,
    title: "[Windows] Markdown 编辑器 Mark Text",
    category: "windows",
    date: "2026-08-18",
    views: 12107,
    icon: "📝",
    summary: "清爽开源的实时 Markdown 编辑器。",
    tags: "Markdown,写作,开源,免费",
    download: "https://marktext.app",
    content: `
      <p>Mark Text 提供所见即所得的 Markdown 写作体验，专注内容本身。</p>
      <h3>亮点</h3>
      <ul>
        <li>实时预览</li>
        <li>界面清爽</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 112,
    title: "[Windows] 编辑器 Vim",
    category: "windows",
    date: "2026-08-06",
    views: 12144,
    icon: "🅰️",
    summary: "键盘流经典开源文本编辑器。",
    tags: "编辑器,键盘,开源,高效",
    download: "https://www.vim.org",
    content: `
      <p>Vim 以模态编辑著称，熟练后编辑效率极高，几乎无处不在。</p>
      <h3>亮点</h3>
      <ul>
        <li>键盘流高效</li>
        <li>可深度配置</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 113,
    title: "[Windows] 编辑器 Emacs",
    category: "windows",
    date: "2026-08-13",
    views: 12181,
    icon: "🐃",
    summary: "可扩展的开源神级编辑器。",
    tags: "编辑器,扩展,开源,神器",
    download: "https://www.gnu.org/software/emacs/",
    content: `
      <p>Emacs 不止编辑器，配合插件可成为邮件、日历与开发环境。</p>
      <h3>亮点</h3>
      <ul>
        <li>高度可扩展</li>
        <li>生态庞大</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 114,
    title: "[Windows] 编辑器 Neovim",
    category: "windows",
    date: "2026-08-01",
    views: 12218,
    icon: "📰",
    summary: "现代化重构的 Vim。",
    tags: "编辑器,现代,开源,Vim",
    download: "https://neovim.io",
    content: `
      <p>Neovim 在兼容 Vim 的同时引入异步与插件架构，更现代。</p>
      <h3>亮点</h3>
      <ul>
        <li>异步架构</li>
        <li>Lua 配置</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 115,
    title: "[Windows] 编辑器 Geany",
    category: "windows",
    date: "2026-08-08",
    views: 12255,
    icon: "🐜",
    summary: "轻量开源 IDE。",
    tags: "IDE,编辑器,开源,轻量",
    download: "https://www.geany.org",
    content: `
      <p>Geany 介于编辑器与 IDE 之间，启动快、够用，适合轻量开发。</p>
      <h3>亮点</h3>
      <ul>
        <li>启动快</li>
        <li>基础 IDE 功能</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 116,
    title: "[Windows] IDE Eclipse",
    category: "windows",
    date: "2026-08-15",
    views: 12292,
    icon: "🌑",
    summary: "老牌开源集成开发环境。",
    tags: "IDE,开发,开源,Java",
    download: "https://www.eclipse.org",
    content: `
      <p>Eclipse 是成熟的开源 IDE，广泛用于 Java 与企业开发。</p>
      <h3>亮点</h3>
      <ul>
        <li>插件丰富</li>
        <li>多语言</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 117,
    title: "[Windows] IDE IntelliJ IDEA 社区版",
    category: "windows",
    date: "2026-08-03",
    views: 12329,
    icon: "💡",
    summary: "JetBrains 免费社区版 Java IDE。",
    tags: "IDE,Java,免费,开发",
    download: "https://www.jetbrains.com/idea/",
    content: `
      <p>IntelliJ IDEA 社区版免费且智能，是 Java/Kotlin 开发的利器。</p>
      <h3>亮点</h3>
      <ul>
        <li>智能补全强</li>
        <li>免费可用</li>
        <li>JetBrains 出品</li>
      </ul>`,
  },
  {
    id: 118,
    title: "[Windows] IDE Android Studio",
    category: "windows",
    date: "2026-08-10",
    views: 12366,
    icon: "🤖",
    summary: "谷歌官方安卓开发环境。",
    tags: "安卓,开发,免费,IDE",
    download: "https://developer.android.com/studio",
    content: `
      <p>Android Studio 是官方安卓开发 IDE，内含模拟器与完整工具链。</p>
      <h3>亮点</h3>
      <ul>
        <li>官方支持</li>
        <li>模拟器内置</li>
        <li>免费</li>
      </ul>`,
  },
  {
    id: 119,
    title: "[Windows] IDE PyCharm 社区版",
    category: "windows",
    date: "2026-08-17",
    views: 12403,
    icon: "🐍",
    summary: "JetBrains 免费 Python IDE。",
    tags: "Python,IDE,免费,开发",
    download: "https://www.jetbrains.com/pycharm/",
    content: `
      <p>PyCharm 社区版免费且对 Python 友好，适合学习与开发。</p>
      <h3>亮点</h3>
      <ul>
        <li>智能提示</li>
        <li>免费够用</li>
        <li>JetBrains 出品</li>
      </ul>`,
  },
  {
    id: 120,
    title: "[Windows] 运行环境 Node.js",
    category: "windows",
    date: "2026-08-05",
    views: 12440,
    icon: "🟢",
    summary: "开源 JavaScript 服务端运行时。",
    tags: "Node,JS,运行时,开源",
    download: "https://nodejs.org",
    content: `
      <p>Node.js 让 JavaScript 跑在服务端，是现代 Web 开发的基石。</p>
      <h3>亮点</h3>
      <ul>
        <li>生态庞大</li>
        <li>跨平台</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 121,
    title: "[Windows] 语言 Python",
    category: "windows",
    date: "2026-08-12",
    views: 12477,
    icon: "🐍",
    summary: "最受欢迎的开源编程语言。",
    tags: "Python,语言,开源,编程",
    download: "https://www.python.org",
    content: `
      <p>Python 语法简洁、库丰富，从脚本到 AI 几乎无所不能。</p>
      <h3>亮点</h3>
      <ul>
        <li>上手容易</li>
        <li>库极丰富</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 122,
    title: "[Windows] 容器 Docker",
    category: "windows",
    date: "2026-08-19",
    views: 12514,
    icon: "🐳",
    summary: "事实标准的容器化平台。",
    tags: "容器,Docker,开发,免费",
    download: "https://www.docker.com",
    content: `
      <p>Docker 以容器封装应用及依赖，实现一次构建到处运行。</p>
      <h3>亮点</h3>
      <ul>
        <li>环境一致</li>
        <li>部署高效</li>
        <li>免费版可用</li>
      </ul>`,
  },
  {
    id: 123,
    title: "[Windows] 数据库 PostgreSQL",
    category: "windows",
    date: "2026-08-07",
    views: 12551,
    icon: "🐘",
    summary: "强大的开源关系型数据库。",
    tags: "数据库,SQL,开源,关系型",
    download: "https://www.postgresql.org",
    content: `
      <p>PostgreSQL 功能完备、扩展性强，是许多大厂的首选开源数据库。</p>
      <h3>亮点</h3>
      <ul>
        <li>标准兼容</li>
        <li>扩展丰富</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 124,
    title: "[Windows] 数据库 MariaDB",
    category: "windows",
    date: "2026-08-14",
    views: 12588,
    icon: "🐬",
    summary: "MySQL 发起者维护的开源分支。",
    tags: "数据库,MySQL,开源,免费",
    download: "https://mariadb.org",
    content: `
      <p>MariaDB 由 MySQL 原班团队维护，兼容且更开放。</p>
      <h3>亮点</h3>
      <ul>
        <li>兼容 MySQL</li>
        <li>性能优秀</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 125,
    title: "[Windows] 数据库 SQLite",
    category: "windows",
    date: "2026-08-02",
    views: 12625,
    icon: "🗃️",
    summary: "嵌入式开源数据库引擎。",
    tags: "数据库,嵌入式,开源,轻量",
    download: "https://www.sqlite.org",
    content: `
      <p>SQLite 单文件嵌入，是移动端与桌面应用最流行的数据库。</p>
      <h3>亮点</h3>
      <ul>
        <li>零配置</li>
        <li>单文件</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 126,
    title: "[Windows] 数据库工具 DBeaver",
    category: "windows",
    date: "2026-08-09",
    views: 12662,
    icon: "🗄️",
    summary: "开源通用数据库管理客户端。",
    tags: "数据库,管理,开源,SQL",
    download: "https://dbeaver.io",
    content: `
      <p>DBeaver 支持几乎所有数据库，图形化管理与 SQL 编辑一体。</p>
      <h3>亮点</h3>
      <ul>
        <li>多库支持</li>
        <li>SQL 编辑器</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 127,
    title: "[Windows] 数据库工具 HeidiSQL",
    category: "windows",
    date: "2026-08-16",
    views: 12699,
    icon: "🐬",
    summary: "轻量开源 MySQL/MSSQL 客户端。",
    tags: "数据库,MySQL,开源,轻量",
    download: "https://www.heidisql.com",
    content: `
      <p>HeidiSQL 小巧高效，适合日常 MySQL/MariaDB 管理。</p>
      <h3>亮点</h3>
      <ul>
        <li>轻量快速</li>
        <li>操作直观</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 128,
    title: "[Windows] API 测试 Postman",
    category: "windows",
    date: "2026-08-04",
    views: 12736,
    icon: "📮",
    summary: "流行的 API 开发与测试工具。",
    tags: "API,测试,开发,免费",
    download: "https://www.postman.com",
    content: `
      <p>Postman 提供图形化接口调试、集合与环境管理，是后端必备。</p>
      <h3>亮点</h3>
      <ul>
        <li>接口调试方便</li>
        <li>集合管理</li>
        <li>免费版够用</li>
      </ul>`,
  },
  {
    id: 129,
    title: "[Windows] API 测试 Insomnia",
    category: "windows",
    date: "2026-08-11",
    views: 12773,
    icon: "💤",
    summary: "开源简洁的 API 客户端。",
    tags: "API,测试,开源,REST",
    download: "https://insomnia.rest",
    content: `
      <p>Insomnia 是开源的 REST/GraphQL 客户端，界面现代、使用顺手。</p>
      <h3>亮点</h3>
      <ul>
        <li>界面清爽</li>
        <li>开源免费</li>
        <li>支持 GraphQL</li>
      </ul>`,
  },
  {
    id: 130,
    title: "[Windows] Web 服务器 Apache",
    category: "windows",
    date: "2026-08-18",
    views: 12810,
    icon: "🌐",
    summary: "最经典的开源 Web 服务器。",
    tags: "服务器,Web,开源,Apache",
    download: "https://httpd.apache.org",
    content: `
      <p>Apache HTTP Server 久经考验，是互联网早期的基石。</p>
      <h3>亮点</h3>
      <ul>
        <li>稳定成熟</li>
        <li>模块丰富</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 131,
    title: "[Windows] Web 服务器 Nginx",
    category: "windows",
    date: "2026-08-06",
    views: 12847,
    icon: "🌐",
    summary: "高性能开源 Web/反向代理。",
    tags: "服务器,Nginx,开源,代理",
    download: "https://nginx.org",
    content: `
      <p>Nginx 以高并发著称，常作 Web 服务器与反向代理。</p>
      <h3>亮点</h3>
      <ul>
        <li>高并发</li>
        <li>资源占用低</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 132,
    title: "[Windows] 集成环境 XAMPP",
    category: "windows",
    date: "2026-08-13",
    views: 12884,
    icon: "📦",
    summary: "一键搭建 PHP/MySQL 本地环境。",
    tags: "环境,集成,开源,PHP",
    download: "https://www.apachefriends.org",
    content: `
      <p>XAMPP 打包 Apache、MySQL、PHP，一键启动本地建站环境。</p>
      <h3>亮点</h3>
      <ul>
        <li>一键启动</li>
        <li>跨平台</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 133,
    title: "[Windows] 集成环境 Laragon",
    category: "windows",
    date: "2026-08-01",
    views: 12921,
    icon: "🪟",
    summary: "Windows 上的轻量开发环境。",
    tags: "环境,开发,免费,Windows",
    download: "https://laragon.org",
    content: `
      <p>Laragon 为 Windows 提供清爽的本地开发栈，自动配置虚拟主机。</p>
      <h3>亮点</h3>
      <ul>
        <li>自动虚拟主机</li>
        <li>速度快</li>
        <li>免费好用</li>
      </ul>`,
  },
  {
    id: 134,
    title: "[网络] 智能家居 Home Assistant",
    category: "network",
    date: "2026-08-08",
    views: 12958,
    icon: "🏠",
    summary: "开源本地智能家居中枢。",
    tags: "智能家居,物联网,开源,本地",
    download: "https://www.home-assistant.io",
    content: `
      <p>Home Assistant 在本地聚合各种智能设备，不依赖厂商云。</p>
      <h3>亮点</h3>
      <ul>
        <li>本地优先</li>
        <li>设备广泛</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 135,
    title: "[网络] 路由器系统 OpenWrt",
    category: "network",
    date: "2026-08-15",
    views: 12995,
    icon: "📡",
    summary: "开源可定制的路由器固件。",
    tags: "路由器,固件,开源,网络",
    download: "https://openwrt.org",
    content: `
      <p>OpenWrt 把路由器变成可编程设备，安装插件扩展网络能力。</p>
      <h3>亮点</h3>
      <ul>
        <li>高度可定制</li>
        <li>插件丰富</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 136,
    title: "[网络] 防火墙 pfSense",
    category: "network",
    date: "2026-08-03",
    views: 13032,
    icon: "🔥",
    summary: "开源企业级防火墙系统。",
    tags: "防火墙,路由,开源,网络",
    download: "https://www.pfsense.org",
    content: `
      <p>pfSense 基于 FreeBSD，提供专业级路由与防火墙功能。</p>
      <h3>亮点</h3>
      <ul>
        <li>功能专业</li>
        <li>免费开源</li>
        <li>适合软路由</li>
      </ul>`,
  },
  {
    id: 137,
    title: "[网络] VPN 客户端 ProtonVPN",
    category: "network",
    date: "2026-08-10",
    views: 13069,
    icon: "🛡️",
    summary: "注重隐私的免费 VPN 服务。",
    tags: "VPN,隐私,免费,安全",
    download: "https://protonvpn.com",
    content: `
      <p>ProtonVPN 来自瑞士，提供免费节点与严格的无日志策略。</p>
      <h3>亮点</h3>
      <ul>
        <li>无日志</li>
        <li>免费可用</li>
        <li>隐私友好</li>
      </ul>`,
  },
  {
    id: 138,
    title: "[网络] 零信任组网 Tailscale",
    category: "network",
    date: "2026-08-17",
    views: 13106,
    icon: "🔗",
    summary: "基于 WireGuard 的开源易用组网。",
    tags: "组网,VPN,开源,内网",
    download: "https://tailscale.com",
    content: `
      <p>Tailscale 让你跨网络把设备组进同一私有网络，无需公网 IP。</p>
      <h3>亮点</h3>
      <ul>
        <li>配置极简</li>
        <li>基于 WireGuard</li>
        <li>免费版够用</li>
      </ul>`,
  },
  {
    id: 139,
    title: "[网络] 点对点组网 ZeroTier",
    category: "network",
    date: "2026-08-05",
    views: 13143,
    icon: "🔗",
    summary: "开源虚拟局域网组网工具。",
    tags: "组网,虚拟局域网,开源,网络",
    download: "https://www.zerotier.com",
    content: `
      <p>ZeroTier 把异地设备连成一张虚拟局域网，适合远程访问。</p>
      <h3>亮点</h3>
      <ul>
        <li>跨地点组网</li>
        <li>开源免费</li>
        <li>配置简单</li>
      </ul>`,
  },
  {
    id: 140,
    title: "[网络] VPN 方案 OpenVPN",
    category: "network",
    date: "2026-08-12",
    views: 13180,
    icon: "🔐",
    summary: "成熟开源的 VPN 实现。",
    tags: "VPN,开源,安全,网络",
    download: "https://openvpn.net",
    content: `
      <p>OpenVPN 是应用最广的开源 VPN 方案，兼容性强、部署灵活。</p>
      <h3>亮点</h3>
      <ul>
        <li>兼容性强</li>
        <li>部署灵活</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 141,
    title: "[网络] 广告拦截 uBlock Origin",
    category: "network",
    date: "2026-08-19",
    views: 13217,
    icon: "🚫",
    summary: "高效开源的浏览器广告拦截。",
    tags: "广告拦截,隐私,开源,浏览器",
    download: "https://github.com/gorhill/uBlock",
    content: `
      <p>uBlock Origin 以极低资源占用拦截广告与跟踪器，是必备浏览器扩展。</p>
      <h3>亮点</h3>
      <ul>
        <li>资源占用低</li>
        <li>拦截精准</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 142,
    title: "[网络] 加密通讯 Signal",
    category: "network",
    date: "2026-08-07",
    views: 13254,
    icon: "📱",
    summary: "端到端加密的开源即时通讯。",
    tags: "通讯,加密,开源,隐私",
    download: "https://signal.org",
    content: `
      <p>Signal 默认端到端加密，是注重隐私用户的首选通讯工具。</p>
      <h3>亮点</h3>
      <ul>
        <li>端到端加密</li>
        <li>开源审计</li>
        <li>隐私最佳</li>
      </ul>`,
  },
  {
    id: 143,
    title: "[网络] 矩阵通讯 Element",
    category: "network",
    date: "2026-08-14",
    views: 13291,
    icon: "💬",
    summary: "基于 Matrix 的开源通讯客户端。",
    tags: "通讯,Matrix,开源,去中心",
    download: "https://element.io",
    content: `
      <p>Element 连接 Matrix 去中心化网络，支持加密群聊与桥接。</p>
      <h3>亮点</h3>
      <ul>
        <li>去中心化</li>
        <li>端到端加密</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 144,
    title: "[网络] 私有云 Nextcloud",
    category: "network",
    date: "2026-08-02",
    views: 13328,
    icon: "☁️",
    summary: "开源自建网盘与协作平台。",
    tags: "私有云,网盘,开源,协作",
    download: "https://nextcloud.com",
    content: `
      <p>Nextcloud 让你拥有自己的云盘、日历、通讯录与在线协作。</p>
      <h3>亮点</h3>
      <ul>
        <li>数据自主</li>
        <li>功能全面</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 145,
    title: "[网络] 私有云 Seafile",
    category: "network",
    date: "2026-08-09",
    views: 13365,
    icon: "🗂️",
    summary: "高性能开源文件同步与协作。",
    tags: "私有云,同步,开源,网盘",
    download: "https://www.seafile.com",
    content: `
      <p>Seafile 以高效的文件同步见长，适合团队自建云盘。</p>
      <h3>亮点</h3>
      <ul>
        <li>同步高效</li>
        <li>团队协作</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 146,
    title: "[网络] 视频会议 Jitsi",
    category: "network",
    date: "2026-08-16",
    views: 13402,
    icon: "🎥",
    summary: "开源加密视频会议。",
    tags: "会议,视频,开源,加密",
    download: "https://jitsi.org",
    content: `
      <p>Jitsi 提供免费开源的视频会议，可自建且默认加密。</p>
      <h3>亮点</h3>
      <ul>
        <li>可自建</li>
        <li>默认加密</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 147,
    title: "[网络] 语音通讯 Mumble",
    category: "network",
    date: "2026-08-04",
    views: 13439,
    icon: "🎙️",
    summary: "低延迟开源语音聊天。",
    tags: "语音,通讯,开源,游戏",
    download: "https://www.mumble.info",
    content: `
      <p>Mumble 以低延迟著称，是游戏开黑的轻量语音方案。</p>
      <h3>亮点</h3>
      <ul>
        <li>延迟极低</li>
        <li>开源免费</li>
        <li>权限管理</li>
      </ul>`,
  },
  {
    id: 148,
    title: "[游戏] 模拟器前端 RetroArch",
    category: "game",
    date: "2026-08-11",
    views: 13476,
    icon: "🕹️",
    summary: "整合多种主机的开源模拟器前端。",
    tags: "模拟器,游戏,开源,复古",
    download: "https://www.retroarch.com",
    content: `
      <p>RetroArch 统一运行数十种游戏核心，是复古游戏玩家的中枢。</p>
      <h3>亮点</h3>
      <ul>
        <li>核心众多</li>
        <li>跨平台</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 149,
    title: "[游戏] Wii/GC 模拟器 Dolphin",
    category: "game",
    date: "2026-08-18",
    views: 13513,
    icon: "🐬",
    summary: "开源 GameCube/Wii 模拟器。",
    tags: "模拟器,游戏,开源,Wii",
    download: "https://dolphin-emu.org",
    content: `
      <p>Dolphin 以高兼容与高清渲染运行 NGC/Wii 游戏，口碑极佳。</p>
      <h3>亮点</h3>
      <ul>
        <li>兼容性强</li>
        <li>支持高清</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 150,
    title: "[游戏] PS2 模拟器 PCSX2",
    category: "game",
    date: "2026-08-06",
    views: 13550,
    icon: "🎮",
    summary: "开源 PlayStation 2 模拟器。",
    tags: "模拟器,游戏,开源,PS2",
    download: "https://pcsx2.net",
    content: `
      <p>PCSX2 让你在电脑上重温 PS2 经典游戏，支持提升分辨率。</p>
      <h3>亮点</h3>
      <ul>
        <li>画质增强</li>
        <li>兼容较广</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 151,
    title: "[游戏] PSP 模拟器 PPSSPP",
    category: "game",
    date: "2026-08-13",
    views: 13587,
    icon: "🎮",
    summary: "开源 PlayStation Portable 模拟器。",
    tags: "模拟器,游戏,开源,PSP",
    download: "https://www.ppsspp.org",
    content: `
      <p>PPSSPP 在手机与电脑上流畅运行 PSP 游戏，支持高清。</p>
      <h3>亮点</h3>
      <ul>
        <li>流畅运行</li>
        <li>跨平台</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 152,
    title: "[游戏] GBA 模拟器 mGBA",
    category: "game",
    date: "2026-08-01",
    views: 13624,
    icon: "🎮",
    summary: "开源 Game Boy Advance 模拟器。",
    tags: "模拟器,游戏,开源,GBA",
    download: "https://mgba.io",
    content: `
      <p>mGBA 是准确且好用的 GBA 模拟器，支持存档与连线。</p>
      <h3>亮点</h3>
      <ul>
        <li>准确度高</li>
        <li>功能完善</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 153,
    title: "[游戏] PS3 模拟器 RPCS3",
    category: "game",
    date: "2026-08-08",
    views: 13661,
    icon: "🎮",
    summary: "开源 PlayStation 3 模拟器。",
    tags: "模拟器,游戏,开源,PS3",
    download: "https://rpcs3.net",
    content: `
      <p>RPCS3 在 PC 上运行 PS3 游戏，兼容度持续提升。</p>
      <h3>亮点</h3>
      <ul>
        <li>画质提升</li>
        <li>持续进步</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 154,
    title: "[游戏] DOS 模拟器 DOSBox",
    category: "game",
    date: "2026-08-15",
    views: 13698,
    icon: "💾",
    summary: "重温 DOS 经典游戏与软件。",
    tags: "模拟器,游戏,开源,DOS",
    download: "https://www.dosbox.com",
    content: `
      <p>DOSBox 模拟老 DOS 环境，让经典游戏在现代系统运行。</p>
      <h3>亮点</h3>
      <ul>
        <li>兼容老游戏</li>
        <li>开源免费</li>
        <li>配置简单</li>
      </ul>`,
  },
  {
    id: 155,
    title: "[游戏] 老游戏引擎 ScummVM",
    category: "game",
    date: "2026-08-03",
    views: 13735,
    icon: "🎮",
    summary: "重燃经典冒险游戏引擎。",
    tags: "模拟器,游戏,开源,冒险",
    download: "https://www.scummvm.org",
    content: `
      <p>ScummVM 运行大量经典点击式冒险游戏，跨平台重温。</p>
      <h3>亮点</h3>
      <ul>
        <li>游戏众多</li>
        <li>开源免费</li>
        <li>跨平台</li>
      </ul>`,
  },
  {
    id: 156,
    title: "[游戏] 游戏平台 Lutris",
    category: "game",
    date: "2026-08-10",
    views: 13772,
    icon: "🎮",
    summary: "开源 Linux 游戏管理启动器。",
    tags: "游戏,平台,开源,Linux",
    download: "https://lutris.net",
    content: `
      <p>Lutris 统一管理来自各平台（含 Wine/模拟器）的游戏，一键启动。</p>
      <h3>亮点</h3>
      <ul>
        <li>统一管理</li>
        <li>脚本安装</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 157,
    title: "[游戏] 游戏启动器 Heroic",
    category: "game",
    date: "2026-08-17",
    views: 13809,
    icon: "🎮",
    summary: "开源 Epic/GOG 游戏启动器。",
    tags: "游戏,启动器,开源,Epic",
    download: "https://heroicgameslauncher.com",
    content: `
      <p>Heroic 让你在 Linux/Mac 上管理 Epic 与 GOG 游戏库。</p>
      <h3>亮点</h3>
      <ul>
        <li>多平台库</li>
        <li>开源免费</li>
        <li>界面现代</li>
      </ul>`,
  },
  {
    id: 158,
    title: "[游戏] 回合战略 FreeCiv",
    category: "game",
    date: "2026-08-05",
    views: 13846,
    icon: "🌍",
    summary: "开源版《文明》风格战略游戏。",
    tags: "游戏,战略,开源,回合",
    download: "https://www.freeciv.org",
    content: `
      <p>FreeCiv 是类《文明》的开源回合制战略游戏，可单机也可联机。</p>
      <h3>亮点</h3>
      <ul>
        <li>耐玩耐肝</li>
        <li>联机对战</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 159,
    title: "[游戏] 战棋 Battle for Wesnoth",
    category: "game",
    date: "2026-08-12",
    views: 13883,
    icon: "⚔️",
    summary: "开源奇幻回合战棋。",
    tags: "游戏,战棋,开源,奇幻",
    download: "https://www.wesnoth.org",
    content: `
      <p>Battle for Wesnoth 是高质量开源战棋，自带剧情战役。</p>
      <h3>亮点</h3>
      <ul>
        <li>战役丰富</li>
        <li>社区活跃</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 160,
    title: "[游戏] 赛车 SuperTuxKart",
    category: "game",
    date: "2026-08-19",
    views: 13920,
    icon: "🏎️",
    summary: "开源卡通卡丁车竞速。",
    tags: "游戏,赛车,开源,休闲",
    download: "https://supertuxkart.net",
    content: `
      <p>SuperTuxKart 是全家欢的卡通竞速游戏，角色可爱、操作轻松。</p>
      <h3>亮点</h3>
      <ul>
        <li>轻松欢乐</li>
        <li>多人同屏</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 161,
    title: "[游戏] 沙盒 Minetest",
    category: "game",
    date: "2026-08-07",
    views: 13957,
    icon: "⛏️",
    summary: "开源沙盒建造游戏。",
    tags: "游戏,沙盒,开源,建造",
    download: "https://www.minetest.net",
    content: `
      <p>Minetest 是轻量开源沙盒世界，支持模组与多人服务器。</p>
      <h3>亮点</h3>
      <ul>
        <li>模组丰富</li>
        <li>轻量流畅</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 162,
    title: "[游戏] 即时战略 OpenRA",
    category: "game",
    date: "2026-08-14",
    views: 13994,
    icon: "🎖️",
    summary: "重制经典即时战略开源。",
    tags: "游戏,战略,开源,RTS",
    download: "https://www.openra.net",
    content: `
      <p>OpenRA 重制《红警》等经典 RTS，画面现代化且免费。</p>
      <h3>亮点</h3>
      <ul>
        <li>现代化重制</li>
        <li>联机对战</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 163,
    title: "[游戏] 战略 Warzone 2100",
    category: "game",
    date: "2026-08-02",
    views: 14031,
    icon: "🤖",
    summary: "开源科幻即时战略。",
    tags: "游戏,战略,开源,科幻",
    download: "https://wz2100.net",
    content: `
      <p>Warzone 2100 以可自定义单位与科技树著称的开源 RTS。</p>
      <h3>亮点</h3>
      <ul>
        <li>科技自由</li>
        <li>开源免费</li>
        <li>剧情战役</li>
      </ul>`,
  },
  {
    id: 164,
    title: "[游戏] 射击 Xonotic",
    category: "game",
    date: "2026-08-09",
    views: 14068,
    icon: "🔫",
    summary: "开源快节奏 FPS。",
    tags: "游戏,FPS,开源,射击",
    download: "https://xonotic.org",
    content: `
      <p>Xonotic 是画质与手感俱佳的开源竞技射击游戏。</p>
      <h3>亮点</h3>
      <ul>
        <li>竞技平衡</li>
        <li>画质优秀</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 165,
    title: "[游戏] RPG Veloren",
    category: "game",
    date: "2026-08-16",
    views: 14105,
    icon: "🗡️",
    summary: "开源 voxel 多人 RPG。",
    tags: "游戏,RPG,开源,冒险",
    download: "https://veloren.net",
    content: `
      <p>Veloren 是类似《泰拉瑞亚》风格的开源多人冒险 RPG，持续更新。</p>
      <h3>亮点</h3>
      <ul>
        <li>多人冒险</li>
        <li>世界生成</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 166,
    title: "[游戏] 太空 Endless Sky",
    category: "game",
    date: "2026-08-04",
    views: 14142,
    icon: "🚀",
    summary: "开源太空贸易与战斗。",
    tags: "游戏,太空,开源,冒险",
    download: "https://endless-sky.github.io",
    content: `
      <p>Endless Sky 是复古像素风的太空探索与贸易游戏，剧情丰富。</p>
      <h3>亮点</h3>
      <ul>
        <li>剧情驱动</li>
        <li>自由探索</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 167,
    title: "[游戏] 多人 Teeworlds",
    category: "game",
    date: "2026-08-11",
    views: 14179,
    icon: "🎯",
    summary: "开源 2D 多人射击。",
    tags: "游戏,多人,开源,射击",
    download: "https://www.teeworlds.com",
    content: `
      <p>Teeworlds 是轻快的开源 2D 多人射击，物理钩绳玩法独特。</p>
      <h3>亮点</h3>
      <ul>
        <li>物理钩绳</li>
        <li>轻量快节奏</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 168,
    title: "[macOS] 数据库客户端 Sequel Ace",
    category: "macos",
    date: "2026-08-18",
    views: 14216,
    icon: "🗄️",
    summary: "Mac 上轻量的开源 MySQL 客户端。",
    tags: "macOS,数据库,开源,MySQL",
    download: "https://sequel-ace.com",
    content: `
      <p>Sequel Ace 是 Sequel Pro 的继任者，专注 MySQL/MariaDB 图形管理。</p>
      <h3>亮点</h3>
      <ul>
        <li>Mac 原生体验</li>
        <li>操作顺手</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 169,
    title: "[macOS] 压缩工具 Keka",
    category: "macos",
    date: "2026-08-06",
    views: 14253,
    icon: "🗜️",
    summary: "Mac 上强大的开源压缩解压。",
    tags: "macOS,压缩,开源,解压",
    download: "https://keka.io",
    content: `
      <p>Keka 支持 7z、Zip、RAR 等格式，是 Mac 压缩首选。</p>
      <h3>亮点</h3>
      <ul>
        <li>格式全面</li>
        <li>右键集成</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 170,
    title: "[macOS] 系统维护 OnyX",
    category: "macos",
    date: "2026-08-13",
    views: 14290,
    icon: "🧰",
    summary: "Mac 官方风格的系统维护工具。",
    tags: "macOS,维护,免费,系统",
    download: "https://www.titanium-software.fr/en/onyx.html",
    content: `
      <p>OnyX 由 Titanium 出品，可清理缓存、修复权限与整理系统。</p>
      <h3>亮点</h3>
      <ul>
        <li>系统维护全面</li>
        <li>免费无广告</li>
        <li>官方风格</li>
      </ul>`,
  },
  {
    id: 171,
    title: "[macOS] 卸载清理 AppCleaner",
    category: "macos",
    date: "2026-08-01",
    views: 14327,
    icon: "🧹",
    summary: "Mac 彻底卸载应用的小工具。",
    tags: "macOS,卸载,免费,清理",
    download: "https://freemacsoft.net",
    content: `
      <p>AppCleaner 卸载 App 时一并删除关联文件，保持系统干净。</p>
      <h3>亮点</h3>
      <ul>
        <li>关联清理</li>
        <li>拖拽即用</li>
        <li>免费小巧</li>
      </ul>`,
  },
  {
    id: 172,
    title: "[macOS] 风扇控制 Macs Fan Control",
    category: "macos",
    date: "2026-08-08",
    views: 14364,
    icon: "🌡️",
    summary: "自定义 Mac 风扇转速降温。",
    tags: "macOS,散热,免费,温度",
    download: "https://crystalidea.com/macs-fan-control",
    content: `
      <p>Macs Fan Control 让你手动或按温度调节风扇，缓解过热降频。</p>
      <h3>亮点</h3>
      <ul>
        <li>降温有效</li>
        <li>免费可用</li>
        <li>界面直观</li>
      </ul>`,
  },
  {
    id: 173,
    title: "[办公] 办公套件 OnlyOffice",
    category: "office",
    date: "2026-08-15",
    views: 14401,
    icon: "📄",
    summary: "开源兼容 MS 格式的协作办公。",
    tags: "办公,文档,开源,协作",
    download: "https://www.onlyoffice.com",
    content: `
      <p>OnlyOffice 高度兼容 Office 格式，并内置文档协作与私有部署。</p>
      <h3>亮点</h3>
      <ul>
        <li>兼容性强</li>
        <li>支持协作</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 174,
    title: "[Android] 开源应用商店 F-Droid",
    category: "android",
    date: "2026-08-03",
    views: 14438,
    icon: "🤖",
    summary: "只收录开源安卓应用的商店。",
    tags: "安卓,应用商店,开源,无广告",
    download: "https://f-droid.org",
    content: `
      <p>F-Droid 只提供经过审核的开源安卓应用，无广告无追踪。</p>
      <h3>亮点</h3>
      <ul>
        <li>纯开源</li>
        <li>无广告</li>
        <li>隐私友好</li>
      </ul>`,
  },
  {
    id: 175,
    title: "[Android] 匿名商店 Aurora Store",
    category: "android",
    date: "2026-08-10",
    views: 14475,
    icon: "🛒",
    summary: "无需谷歌账号的开源应用商店。",
    tags: "安卓,应用商店,开源,隐私",
    download: "https://auroraoss.com",
    content: `
      <p>Aurora Store 让你在不登录谷歌账号的情况下下载 Play 商店应用。</p>
      <h3>亮点</h3>
      <ul>
        <li>免谷歌账号</li>
        <li>匿名下载</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 176,
    title: "[Android] 去广告 YouTube NewPipe",
    category: "android",
    date: "2026-08-17",
    views: 14512,
    icon: "📺",
    summary: "开源无广告的 YouTube 客户端。",
    tags: "安卓,YouTube,开源,无广告",
    download: "https://newpipe.net",
    content: `
      <p>NewPipe 不依赖谷歌服务，可后台播放、下载与去广告。</p>
      <h3>亮点</h3>
      <ul>
        <li>后台播放</li>
        <li>视频下载</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 177,
    title: "[Android] 开源输入法 FlorisBoard",
    category: "android",
    date: "2026-08-05",
    views: 14549,
    icon: "⌨️",
    summary: "注重隐私的开源安卓输入法。",
    tags: "安卓,输入法,开源,隐私",
    download: "https://florisboard.org",
    content: `
      <p>FlorisBoard 是可定制、不收集数据的开源输入法。</p>
      <h3>亮点</h3>
      <ul>
        <li>隐私优先</li>
        <li>高度可定制</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 178,
    title: "[Android] 开源相机 Open Camera",
    category: "android",
    date: "2026-08-12",
    views: 14586,
    icon: "📷",
    summary: "功能丰富的开源安卓相机。",
    tags: "安卓,相机,开源,免费",
    download: "https://opencamera.org.uk",
    content: `
      <p>Open Camera 提供手动曝光、定时与远程拍摄等丰富功能。</p>
      <h3>亮点</h3>
      <ul>
        <li>手动控制</li>
        <li>功能全面</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 179,
    title: "[Android] 工具集 Simple Mobile Tools",
    category: "android",
    date: "2026-08-19",
    views: 14623,
    icon: "📱",
    summary: "一整套开源无广告安卓工具。",
    tags: "安卓,工具,开源,无广告",
    download: "https://www.simplemobiletools.com",
    content: `
      <p>Simple Mobile Tools 提供相册、计算器、文件管理等无广告开源套件。</p>
      <h3>亮点</h3>
      <ul>
        <li>全家桶</li>
        <li>无广告</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 180,
    title: "[Android] 终端 Termux",
    category: "android",
    date: "2026-08-07",
    views: 14660,
    icon: "🐧",
    summary: "安卓上的开源 Linux 终端。",
    tags: "安卓,终端,开源,Linux",
    download: "https://termux.com",
    content: `
      <p>Termux 在手机运行 Linux 环境，可装包、写脚本甚至跑服务。</p>
      <h3>亮点</h3>
      <ul>
        <li>移动 Linux</li>
        <li>包管理</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 181,
    title: "[Android] 邮件 K-9 Mail",
    category: "android",
    date: "2026-08-14",
    views: 14697,
    icon: "📧",
    summary: "开源安卓邮件客户端。",
    tags: "安卓,邮件,开源,免费",
    download: "https://k9mail.app",
    content: `
      <p>K-9 Mail 是注重隐私的开源安卓邮件客户端，支持多账户。</p>
      <h3>亮点</h3>
      <ul>
        <li>多账户</li>
        <li>隐私友好</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 182,
    title: "[Android] 播客 AntennaPod",
    category: "android",
    date: "2026-08-02",
    views: 14734,
    icon: "🎧",
    summary: "开源无广告播客客户端。",
    tags: "安卓,播客,开源,免费",
    download: "https://antennapod.org",
    content: `
      <p>AntennaPod 让你订阅、下载与收听播客，完全无广告。</p>
      <h3>亮点</h3>
      <ul>
        <li>无广告</li>
        <li>订阅管理</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 183,
    title: "[Android] 离线地图 OsmAnd",
    category: "android",
    date: "2026-08-09",
    views: 14771,
    icon: "🗺️",
    summary: "开源离线导航地图。",
    tags: "安卓,地图,开源,离线",
    download: "https://osmand.net",
    content: `
      <p>OsmAnd 基于 OpenStreetMap，支持离线导航与徒步路线。</p>
      <h3>亮点</h3>
      <ul>
        <li>完全离线</li>
        <li>路线丰富</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 184,
    title: "[Android] 双重验证 Aegis",
    category: "android",
    date: "2026-08-16",
    views: 14808,
    icon: "🔐",
    summary: "开源 TOTP 两步验证器。",
    tags: "安卓,2FA,开源,安全",
    download: "https://getaegis.app",
    content: `
      <p>Aegis 生成两步验证码，支持加密备份与导出，不依赖云。</p>
      <h3>亮点</h3>
      <ul>
        <li>加密备份</li>
        <li>导出自由</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 185,
    title: "[Android] RSS 阅读 Feeder",
    category: "android",
    date: "2026-08-04",
    views: 14845,
    icon: "📰",
    summary: "开源无广告 RSS 订阅。",
    tags: "安卓,RSS,开源,阅读",
    download: "https://github.com/spacecowboy/Feeder",
    content: `
      <p>Feeder 是轻量开源 RSS 阅读器，支持订阅与离线阅读。</p>
      <h3>亮点</h3>
      <ul>
        <li>无广告</li>
        <li>离线阅读</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 186,
    title: "[Android] 本地笔记 Markor",
    category: "android",
    date: "2026-08-11",
    views: 14882,
    icon: "📝",
    summary: "安卓本地 Markdown 笔记。",
    tags: "安卓,笔记,开源,Markdown",
    download: "https://github.com/gsantner/Markor",
    content: `
      <p>Markor 是纯本地、无云的 Markdown 编辑与待办工具。</p>
      <h3>亮点</h3>
      <ul>
        <li>纯本地</li>
        <li>无云依赖</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 187,
    title: "[免费] 隐私浏览器 Brave",
    category: "free",
    date: "2026-08-18",
    views: 14919,
    icon: "🦁",
    summary: "内置广告拦截、快速隐私的开源浏览器。",
    tags: "浏览器,隐私,开源,免费",
    download: "https://brave.com",
    content: `
      <p>Brave 基于 Chromium，默认拦截广告与跟踪，速度更快、更省电。</p>
      <h3>亮点</h3>
      <ul>
        <li>默认拦截广告</li>
        <li>速度更快</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 188,
    title: "[免费] 隐私搜索引擎 DuckDuckGo",
    category: "free",
    date: "2026-08-06",
    views: 14956,
    icon: "🦆",
    summary: "不追踪你的免费搜索引擎与浏览器。",
    tags: "搜索,隐私,免费,浏览器",
    download: "https://duckduckgo.com",
    content: `
      <p>DuckDuckGo 不记录搜索历史、不建用户画像，保护搜索隐私。</p>
      <h3>亮点</h3>
      <ul>
        <li>不追踪</li>
        <li>结果干净</li>
        <li>免费可用</li>
      </ul>`,
  },
  {
    id: 189,
    title: "[免费] 开源压缩 PeaZip",
    category: "free",
    date: "2026-08-13",
    views: 14993,
    icon: "🗜️",
    summary: "跨平台开源压缩解压工具。",
    tags: "压缩,解压,开源,免费",
    download: "https://peazip.github.io",
    content: `
      <p>PeaZip 支持 200+ 格式，开源免费，界面直观。</p>
      <h3>亮点</h3>
      <ul>
        <li>格式极多</li>
        <li>开源免费</li>
        <li>跨平台</li>
      </ul>`,
  },
  {
    id: 190,
    title: "[TV] 电视端 YouTube SmartTube",
    category: "tv",
    date: "2026-08-01",
    views: 15030,
    icon: "📺",
    summary: "开源无广告的电视端 YouTube。",
    tags: "电视,YouTube,开源,无广告",
    download: "https://github.com/yuliskov/SmartTube",
    content: `
      <p>SmartTube 为 Android TV 提供无广告、可后台的 YouTube 体验。</p>
      <h3>亮点</h3>
      <ul>
        <li>无广告</li>
        <li>4K 支持</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 191,
    title: "[TV] 电视播放器 Nova Video Player",
    category: "tv",
    date: "2026-08-08",
    views: 15067,
    icon: "🎬",
    summary: "开源电视本地媒体播放器。",
    tags: "电视,播放器,开源,本地",
    download: "https://nova-video-player.github.io",
    content: `
      <p>Nova Video Player 聚合并播放本地与网络媒体，界面适配大屏。</p>
      <h3>亮点</h3>
      <ul>
        <li>大屏适配</li>
        <li>媒体库</li>
        <li>开源免费</li>
      </ul>`,
  },
  {
    id: 192,
    title: "[TV] 影音服务器 Emby",
    category: "tv",
    date: "2026-08-15",
    views: 15104,
    icon: "🎞️",
    summary: "家庭媒体管理与串流服务。",
    tags: "电视,影音,免费,串流",
    download: "https://emby.media",
    content: `
      <p>Emby 整理家庭媒体并在电视等多端播放，免费版功能已足。</p>
      <h3>亮点</h3>
      <ul>
        <li>媒体整理</li>
        <li>多端播放</li>
        <li>免费可用</li>
      </ul>`,
  },
  {
    id: 193,
    title: "[iOS] 代码版本控制 Working Copy",
    category: "ios",
    date: "2026-08-03",
    views: 15141,
    icon: "🔀",
    summary: "iOS 上的 Git 客户端。",
    tags: "iOS,Git,免费,开发",
    download: "https://workingcopyapp.com",
    content: `
      <p>Working Copy 让你在 iPhone/iPad 上克隆、提交与推送 Git 仓库。</p>
      <h3>亮点</h3>
      <ul>
        <li>移动 Git</li>
        <li>配合编辑器</li>
        <li>免费可用</li>
      </ul>`,
  },
];
