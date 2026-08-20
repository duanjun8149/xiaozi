/* ============================================================
 * 追加资源文件（data-more.js）
 * 本文件在 assets/data.js 之后、assets/app.js 之前加载，
 * 向全局 POSTS 数组追加新条目，避免改动庞大的 data.js。
 * 新增纯净热门软件时，可继续在此文件里 POSTS.push(...) 追加。
 * 注意：id 段位 194–215 已占用，新增请顺延（如 216、217…）。
 * ============================================================ */
if (typeof POSTS !== "undefined") {
  POSTS.push(
  {
    id: 194,
    title: "[Windows] 干净轻量杀软 火绒安全",
    category: "windows",
    date: "2026-08-20",
    views: 18932,
    icon: "🛡️",
    summary: "国内口碑杀软，无广告、不弹窗、不绑架首页，自带弹窗拦截与启动项管理。",
    tags: "杀毒,安全防护,无广告,国产",
    download: "https://www.huorong.cn",
    content: `
      <p>火绒安全是国产杀毒软件里少有的「干净派」：默认不弹广告、不捆绑、不篡改浏览器主页，安静地在后台干活。</p>
      <p>除了病毒查杀，它还内置<strong>弹窗拦截</strong>、<strong>启动项管理</strong>、<strong>文件粉碎</strong>等实用工具，对国内流氓软件克制力很强。</p>
      <h3>亮点</h3>
      <ul>
        <li>零广告零捆绑，体验清爽</li>
        <li>弹窗拦截精准，告别烦人推广</li>
        <li>占用低，老机器也能流畅跑</li>
      </ul>`,
  },
  {
    id: 195,
    title: "[Windows] 清爽 BT 下载 qBittorrent",
    category: "windows",
    date: "2026-08-20",
    views: 21540,
    icon: "🧲",
    summary: "开源无广告的 BT/磁力下载工具，界面干净、功能完整，μTorrent 的最佳替代品。",
    tags: "BT下载,磁力,开源,无广告",
    download: "https://www.qbittorrent.org",
    content: `
      <p>还在用满是广告的迅雷或 μTorrent？qBittorrent 是开源免费的 BT 客户端，没有广告、没有捆绑、没有限速套路。</p>
      <p>支持磁力链接、做种、 Tracker 管理、搜索插件，资源占用低，是下载圈公认的「纯净首选」。</p>
      <h3>亮点</h3>
      <ul>
        <li>完全开源免费，无任何广告</li>
        <li>磁力/BT 全支持，功能专业</li>
        <li>内置搜索引擎，找资源更方便</li>
      </ul>`,
  },
  {
    id: 196,
    title: "[开发] 神级代码编辑器 Visual Studio Code",
    category: "dev",
    date: "2026-08-20",
    views: 26418,
    icon: "💻",
    summary: "微软出品的开源编辑器，插件生态无敌，写代码、改配置、记笔记通吃。",
    tags: "编辑器,开发,开源,插件",
    download: "https://code.visualstudio.com",
    content: `
      <p>VS Code 是目前最流行的代码编辑器，免费、开源、跨平台，靠海量插件几乎能做任何事：写前后端、改 Markdown、跑终端、连远程服务器。</p>
      <p>轻量启动快，对中文支持友好，是程序员和折腾党的标配。</p>
      <h3>亮点</h3>
      <ul>
        <li>插件市场丰富，可玩性极高</li>
        <li>内置终端与 Git，开箱即用</li>
        <li>免费开源，全平台通用</li>
      </ul>`,
  },
  {
    id: 197,
    title: "[开发] 版本控制基石 Git",
    category: "dev",
    date: "2026-08-20",
    views: 19877,
    icon: "🌿",
    summary: "全球程序员都在用的分布式版本控制系统，备份代码、协作开发离不开它。",
    tags: "版本控制,开发,Git,开源",
    download: "https://git-scm.com",
    content: `
      <p>Git 是现代软件开发的事实标准，用来记录文件的每次改动、随时回退、多人协作不打架。</p>
      <p>搭配 GitHub / Gitee 使用，既能托管自己的项目，也能参与开源。装好 Git 还能在终端里直接用 Linux 命令。</p>
      <h3>亮点</h3>
      <ul>
        <li>分布式设计，本地即可完整历史</li>
        <li>协作与分支管理无比灵活</li>
        <li>开源免费，生态成熟</li>
      </ul>`,
  },
  {
    id: 198,
    title: "[Windows] 去中心化文件同步 Syncthing",
    category: "windows",
    date: "2026-08-20",
    views: 16205,
    icon: "🔄",
    summary: "不依赖任何云盘，设备间直连同步文件，隐私安全，开源免费。",
    tags: "文件同步,备份,开源,隐私",
    download: "https://syncthing.net",
    content: `
      <p>Syncthing 让你在多台电脑/手机之间直接同步文件夹，数据不经过任何第三方服务器，彻底告别某度网盘的限速与隐私焦虑。</p>
      <p>配置一次即可自动后台同步，适合做个人多机备份。</p>
      <h3>亮点</h3>
      <ul>
        <li>点对点直连，数据不出本地网络</li>
        <li>开源免费，无容量限制</li>
        <li>跨平台，手机电脑都能用</li>
      </ul>`,
  },
  {
    id: 199,
    title: "[Windows] 本地优先笔记 Obsidian",
    category: "windows",
    date: "2026-08-20",
    views: 23160,
    icon: "📓",
    summary: "把笔记存成本地 Markdown 文件，双向链接构建知识网络，个人使用完全免费。",
    tags: "笔记,知识管理,Markdown,免费",
    download: "https://obsidian.md",
    content: `
      <p>Obsidian 是一款「本地优先」的笔记软件，所有笔记都是纯文本 Markdown 文件，存在你自己的硬盘上，永不过期、不被绑架。</p>
      <p>通过双向链接可以把零散笔记连成知识图谱，配合插件还能做任务管理、日记、发布博客。</p>
      <h3>亮点</h3>
      <ul>
        <li>笔记即本地文件，数据完全自主</li>
        <li>双向链接，知识越攒越值钱</li>
        <li>个人免费，插件生态强大</li>
      </ul>`,
  },
  {
    id: 200,
    title: "[Windows] 隐私友好浏览器 Firefox",
    category: "windows",
    date: "2026-08-20",
    views: 20733,
    icon: "🦊",
    summary: "老牌开源浏览器，强化反追踪与隐私保护，不被巨头一家垄断。",
    tags: "浏览器,隐私,开源,无追踪",
    download: "https://www.mozilla.org/firefox/",
    content: `
      <p>Firefox 是唯一能与 Chrome 抗衡的非盈利开源浏览器，默认开启<strong>增强跟踪保护</strong>，拦截广告追踪器，保护上网隐私。</p>
      <p>扩展生态成熟，可高度自定义，是注重隐私用户的首选。</p>
      <h3>亮点</h3>
      <ul>
        <li>反追踪，隐私保护到位</li>
        <li>开源非盈利，不为广告商打工</li>
        <li>扩展丰富，高度可定制</li>
      </ul>`,
  },
  {
    id: 201,
    title: "[设计] 开源矢量绘图 Inkscape",
    category: "design",
    date: "2026-08-20",
    views: 14388,
    icon: "✒️",
    summary: "免费开源的矢量图形软件，SVG 标准，做 Logo、图标、插画不输商业软件。",
    tags: "矢量,插画,Logo,开源",
    download: "https://inkscape.org",
    content: `
      <p>Inkscape 是开源界的矢量绘图标杆，基于 SVG 格式，放大不糊，适合做 Logo、图标、海报、技术插画。</p>
      <p>完全免费，教程资源丰富，新手也能上手。</p>
      <h3>亮点</h3>
      <ul>
        <li>真矢量，无损缩放</li>
        <li>开源免费，跨平台</li>
        <li>社区插件与教程充足</li>
      </ul>`,
  },
  {
    id: 202,
    title: "[设计] 全能 3D 创作 Blender",
    category: "design",
    date: "2026-08-20",
    views: 17620,
    icon: "🧊",
    summary: "免费开源的 3D 建模/动画/渲染全家桶，影视游戏圈都在用。",
    tags: "3D,建模,动画,开源",
    download: "https://www.blender.org",
    content: `
      <p>Blender 是功能完整的开源 3D 软件，建模、雕刻、动画、渲染、视频剪辑一条龙，且完全免费。</p>
      <p>从独立动画到游戏资产，从产品可视化到 3D 打印，都能胜任，社区作品惊艳。</p>
      <h3>亮点</h3>
      <ul>
        <li>建模到渲染全流程免费</li>
        <li>开源社区活跃，插件海量</li>
        <li>跨平台，门槛友好</li>
      </ul>`,
  },
  {
    id: 203,
    title: "[设计] 专业数字绘画 Krita",
    category: "design",
    date: "2026-08-20",
    views: 13890,
    icon: "🖌️",
    summary: "免费开源的绘画软件，笔刷引擎强悍，插画师与动画分镜的好帮手。",
    tags: "绘画,插画,笔刷,开源",
    download: "https://krita.org",
    content: `
      <p>Krita 专注数字绘画，提供丰富的笔刷、图层与防抖功能，画风从日系插画到概念设定都能驾驭。</p>
      <p>完全免费开源，对初学者和专业画师都很友好，还能做动画分镜。</p>
      <h3>亮点</h3>
      <ul>
        <li>专业级笔刷与防抖</li>
        <li>开源免费，无订阅</li>
        <li>支持动画与分镜</li>
      </ul>`,
  },
  {
    id: 204,
    title: "[网络] 极简现代 VPN WireGuard",
    category: "network",
    date: "2026-08-20",
    views: 15422,
    icon: "🔐",
    summary: "代码极简、速度快、安全性高的开源 VPN 协议，已并入 Linux 内核。",
    tags: "VPN,加密,隐私,开源",
    download: "https://www.wireguard.com",
    content: `
      <p>WireGuard 是新一代开源 VPN 协议，代码量极小、审计容易、连接飞快，已被并入 Linux 内核。</p>
      <p>适合自建节点实现安全上网与远程访问，比传统 OpenVPN 轻盈太多。</p>
      <h3>亮点</h3>
      <ul>
        <li>极简代码，安全可审计</li>
        <li>握手快、延迟低</li>
        <li>开源免费，多平台</li>
      </ul>`,
  },
  {
    id: 205,
    title: "[网络] 零配置内网组网 Tailscale",
    category: "network",
    date: "2026-08-20",
    views: 16945,
    icon: "🕸️",
    summary: "基于 WireGuard 的 mesh VPN，设备一键互联，异地组网像在同一局域网。",
    tags: "内网穿透,组网,VPN,免费",
    download: "https://tailscale.com",
    content: `
      <p>Tailscale 把 WireGuard 包装成「开箱即用」的私有网络：登录账号，设备自动加入同一内网，无需公网 IP、无需复杂配置。</p>
      <p>免费版支持多台设备，远程访问家里电脑、NAS、服务器超方便。</p>
      <h3>亮点</h3>
      <ul>
        <li>零配置，登录即用</li>
        <li>异地组网，如同局域网</li>
        <li>个人免费，基于 WireGuard</li>
      </ul>`,
  },
  {
    id: 206,
    title: "[系统] 开源系统清理 BleachBit",
    category: "system",
    date: "2026-08-20",
    views: 13760,
    icon: "🧹",
    summary: "开源免费的电脑清理工具，删缓存、清隐私痕迹，无广告不捆绑。",
    tags: "系统清理,隐私,开源,免费",
    download: "https://www.bleachbit.org",
    content: `
      <p>BleachBit 是开源的系统清理利器，能清理浏览器缓存、系统临时文件、软件残留，并擦除隐私痕迹。</p>
      <p>没有广告、没有「一键加速」套路，干净利落。</p>
      <h3>亮点</h3>
      <ul>
        <li>开源免费，无广告</li>
        <li>清理+隐私擦除一体</li>
        <li>支持上百种应用规则</li>
      </ul>`,
  },
  {
    id: 207,
    title: "[系统] 进程管理神器 System Informer",
    category: "system",
    date: "2026-08-20",
    views: 14288,
    icon: "🔧",
    summary: "原 Process Hacker，开源任务管理器，揪出流氓进程、查 DLL、看资源占用。",
    tags: "进程管理,任务管理器,开源,排查",
    download: "https://systeminformer.com",
    content: `
      <p>System Informer（前身 Process Hacker）是 Windows 自带任务管理器的开源加强版，能看清每个进程的来龙去脉。</p>
      <p>查杀顽固进程、定位流氓软件、分析 DLL 与网络连接，排查电脑卡顿必备。</p>
      <h3>亮点</h3>
      <ul>
        <li>进程信息详尽，排查利器</li>
        <li>开源免费，轻量便携</li>
        <li>网络/DLL/句柄一目了然</li>
      </ul>`,
  },
  {
    id: 208,
    title: "[网络] 命令行视频下载 yt-dlp",
    category: "network",
    date: "2026-08-20",
    views: 17833,
    icon: "⬇️",
    summary: "开源强大的视频下载工具，支持上千站点，选清晰度、下字幕、批处理。",
    tags: "视频下载,开源,命令行,批量",
    download: "https://github.com/yt-dlp/yt-dlp",
    content: `
      <p>yt-dlp 是活跃维护的开源下载命令行，支持 YouTube 及上千个视频站点，可指定分辨率、下载字幕、批量抓取。</p>
      <p>技术党搭配脚本能自动归档喜欢的视频，干净无广告。</p>
      <h3>亮点</h3>
      <ul>
        <li>支持站点极多，更新勤快</li>
        <li>可选清晰度/字幕/格式</li>
        <li>开源免费，可脚本化</li>
      </ul>`,
  },
  {
    id: 209,
    title: "[办公] 在线协作办公 OnlyOffice",
    category: "office",
    date: "2026-08-20",
    views: 15044,
    icon: "📄",
    summary: "高度兼容 Office 的免费套件，强项是多人实时协作与私有部署。",
    tags: "办公,文档,协作,免费",
    download: "https://www.onlyoffice.com",
    content: `
      <p>OnlyOffice 是兼容性出色的免费办公套件，Word/Excel/PPT 文档打开几乎不串版，还支持多人实时协同编辑。</p>
      <p>可私有部署在自己的服务器，资料完全自控，是团队与个人的清爽选择。</p>
      <h3>亮点</h3>
      <ul>
        <li>兼容微软格式，排版稳</li>
        <li>实时协作，团队友好</li>
        <li>可私有部署，数据安全</li>
      </ul>`,
  },
  {
    id: 210,
    title: "[办公] 开源邮件客户端 Thunderbird",
    category: "office",
    date: "2026-08-20",
    views: 12655,
    icon: "✉️",
    summary: "Mozilla 出品的开源邮件客户端，多账户管理、无广告、隐私友好。",
    tags: "邮件,客户端,开源,无广告",
    download: "https://www.thunderbird.net",
    content: `
      <p>Thunderbird 是老牌开源邮件客户端，把多个邮箱、日历、通讯录统一管理，清爽无广告。</p>
      <p>内置垃圾邮件过滤与隐私保护，适合不想被网页邮箱绑架的用户。</p>
      <h3>亮点</h3>
      <ul>
        <li>多账户统一，效率拉满</li>
        <li>开源免费，无追踪</li>
        <li>日历与通讯录整合</li>
      </ul>`,
  },
  {
    id: 211,
    title: "[Windows] 音乐聚合播放 Listen1",
    category: "windows",
    date: "2026-08-20",
    views: 19427,
    icon: "🎵",
    summary: "开源免费听歌神器，聚合网易云/QQ/酷狗等平台，一站搜全、无广告。",
    tags: "音乐,听歌,聚合,开源",
    download: "https://listen1.github.io/listen1/",
    content: `
      <p>Listen1 是开源的音乐聚合播放器，把网易云、QQ 音乐、酷狗、酷我、咪咕等平台曲库打通，一个搜索框就能听遍全网。</p>
      <p>界面干净无广告，还能建歌单、收藏，是「找歌难」用户的救星。</p>
      <h3>亮点</h3>
      <ul>
        <li>多平台曲库一站聚合</li>
        <li>开源免费，零广告</li>
        <li>歌单收藏，随心听</li>
      </ul>`,
  },
  {
    id: 212,
    title: "[macOS] 必备包管理 Homebrew",
    category: "macos",
    date: "2026-08-20",
    views: 18210,
    icon: "🍺",
    summary: "Mac 上的「软件管家」，一行命令装/卸/更新开源软件，干净无残留。",
    tags: "包管理,macOS,开源,命令行",
    download: "https://brew.sh",
    content: `
      <p>Homebrew 是 macOS 最受欢迎的包管理器，用一行命令就能安装开发工具、命令行程序甚至图形应用。</p>
      <p>统一管理、干净卸载、告别手动拖拽，是 Mac 折腾党的第一件事。</p>
      <h3>亮点</h3>
      <ul>
        <li>一行命令装软件</li>
        <li>开源免费，社区庞大</li>
        <li>卸载干净，无残留</li>
      </ul>`,
  },
  {
    id: 213,
    title: "[macOS] 效率启动器 Raycast",
    category: "macos",
    date: "2026-08-20",
    views: 16730,
    icon: "⚡",
    summary: "Mac 上的效率中枢，快捷键唤起一切：开应用、查词典、算汇率、控设备。",
    tags: "效率,启动器,macOS,快捷键",
    download: "https://www.raycast.com",
    content: `
      <p>Raycast 是 macOS 上的效率启动器，按快捷键弹出一个命令框，搜索应用、文件、剪贴板历史，还能扩展做翻译、汇率、待办。</p>
      <p>免费版已足够强大，让双手几乎不用离开键盘。</p>
      <h3>亮点</h3>
      <ul>
        <li>快捷键直达，效率翻倍</li>
        <li>扩展生态丰富</li>
        <li>免费可用，体验丝滑</li>
      </ul>`,
  },
  {
    id: 214,
    title: "[Android] 跨平台密码管理 Bitwarden",
    category: "android",
    date: "2026-08-20",
    views: 17365,
    icon: "🔑",
    summary: "开源免费密码管理器，全平台同步，端到端加密，告别弱密码和乱密码。",
    tags: "密码管理,开源,加密,同步",
    download: "https://bitwarden.com",
    content: `
      <p>Bitwarden 是开源的密码管理器，把你所有账号密码加密后跨设备同步，手机电脑自动填充。</p>
      <p>端到端加密、源码公开可审计，免费版就够个人使用，是管理密码最省心的方式。</p>
      <h3>亮点</h3>
      <ul>
        <li>开源可审计，安全透明</li>
        <li>全平台同步自动填充</li>
        <li>免费个人版功能完整</li>
      </ul>`,
  },
  {
    id: 215,
    title: "[iOS] 免费安全 VPN Proton VPN",
    category: "ios",
    date: "2026-08-20",
    views: 15880,
    icon: "🛡️",
    summary: "来自瑞士的开源友好 VPN，免费档不限流量，隐私政策严格、无日志。",
    tags: "VPN,隐私,免费,iOS",
    download: "https://protonvpn.com",
    content: `
      <p>Proton VPN 由瑞士团队打造，以隐私著称，免费档<strong>不限流量</strong>且无广告，承诺严格无日志。</p>
      <p>支持 iOS/Android/桌面全平台，适合想安全上网又不想花钱的用户。</p>
      <h3>亮点</h3>
      <ul>
        <li>免费档不限流量</li>
        <li>瑞士隐私法保护，无日志</li>
        <li>全平台客户端</li>
      </ul>`,
  }
  );
}
