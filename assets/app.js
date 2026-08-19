/* ============================================================
 * 渲染逻辑：首页卡片 + 搜索/筛选 + 详情页
 * 无需后端，全部由 assets/data.js 的数据驱动
 * ============================================================ */

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}

/* ---------- SEO 辅助：动态注入 meta 与结构化数据 ---------- */
function upsertMeta(name, content) {
  const attr = name.indexOf("og:") === 0 ? "property" : "name";
  let m = document.querySelector(`meta[${attr}="${name}"]`);
  if (!m) {
    m = document.createElement("meta");
    m.setAttribute(attr, name);
    document.head.appendChild(m);
  }
  m.setAttribute("content", content);
}
function injectJsonLd(obj) {
  let s = document.getElementById("seo-ld");
  if (s) s.remove();
  s = document.createElement("script");
  s.type = "application/ld+json";
  s.id = "seo-ld";
  s.textContent = JSON.stringify(obj);
  document.head.appendChild(s);
}

/* ---------- 首页 ---------- */
function renderHome() {
  const grid = document.getElementById("grid");
  const filters = document.getElementById("filters");
  const searchInput = document.getElementById("search");
  if (!grid) return;

  // 站点名
  document.getElementById("siteName").textContent = SITE.name;
  document.getElementById("siteSlogan").textContent = SITE.slogan;
  document.title = SITE.name + " - " + SITE.slogan;

  renderAd();

  // 分类筛选按钮
  let chips = `<span class="chip active" data-cat="all">全部</span>`;
  for (const [key, c] of Object.entries(CATEGORIES)) {
    chips += `<span class="chip" data-cat="${key}">${c.label}</span>`;
  }
  filters.innerHTML = chips;

  let activeCat = "all";
  let keyword = "";

  function paint() {
    const list = POSTS.filter(p => {
      const okCat = activeCat === "all" || p.category === activeCat;
      const hay = (p.title + p.summary + p.tags).toLowerCase();
      const okKw = !keyword || hay.includes(keyword.toLowerCase());
      return okCat && okKw;
    });
    if (!list.length) {
      grid.innerHTML = `<div class="empty">没有找到相关内容，换个关键词试试～</div>`;
      return;
    }
    grid.innerHTML = list.map(p => {
      const cat = CATEGORIES[p.category] || { label: p.category, color: "#888" };
      return `
        <a class="card" href="article.html?id=${p.id}">
          <div class="thumb" style="background:${cat.color}">${p.icon || "💾"}</div>
          <div class="body">
            <span class="badge" style="background:${cat.color}">${cat.label}</span>
            <h3>${escapeHtml(p.title)}</h3>
            <div class="summary">${escapeHtml(p.summary)}</div>
            <div class="meta"><span>🔥 ${p.views.toLocaleString()}</span><span>📅 ${p.date}</span></div>
          </div>
        </a>`;
    }).join("");
  }

  filters.addEventListener("click", e => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    activeCat = chip.dataset.cat;
    paint();
  });
  searchInput.addEventListener("input", e => {
    keyword = e.target.value.trim();
    paint();
  });

  paint();
}

/* ---------- 详情页 ---------- */
function renderArticle() {
  const box = document.getElementById("article");
  if (!box) return;

  const id = new URLSearchParams(location.search).get("id");
  const p = POSTS.find(x => String(x.id) === String(id));
  if (!p) {
    box.innerHTML = `<div class="empty">未找到该内容。<a class="back" href="index.html">← 返回首页</a></div>`;
    return;
  }
  const cat = CATEGORIES[p.category] || { label: p.category, color: "#888" };
  document.title = p.title + " - " + SITE.name;

  // SEO：动态描述 + 结构化数据（利于百度和 AI 搜索引用）
  upsertMeta("description", p.summary);
  upsertMeta("og:title", p.title + " - " + SITE.name);
  upsertMeta("og:description", p.summary);
  injectJsonLd({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": p.title,
    "applicationCategory": cat.label,
    "operatingSystem": cat.label,
    "description": p.summary,
    "url": location.href,
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CNY" }
  });

  document.getElementById("siteName").textContent = SITE.name;
  document.getElementById("siteSlogan").textContent = SITE.slogan;

  renderAd();
  renderAffiliate(p);

  box.innerHTML = `
    <span class="badge" style="background:${cat.color}">${cat.label}</span>
    <h1>${escapeHtml(p.title)}</h1>
    <div class="meta">🔥 ${p.views.toLocaleString()} 阅读 · 📅 ${p.date} · 🏷️ ${escapeHtml(p.tags)}</div>
    <div class="content">${p.content}</div>
    <a class="dl-btn" href="${p.download}" target="_blank" rel="noopener">前往官网 / 下载 ↓</a>
    <br><a class="back" href="index.html">← 返回首页</a>`;
}

/* ---------- 变现骨架：广告位 + 联盟返利 ---------- */
function renderAd() {
  const el = document.getElementById("adBox");
  if (!el) return;
  if (AFFILIATE.adCode && AFFILIATE.adCode.trim()) {
    el.innerHTML = `<div class="ad-inner">${AFFILIATE.adCode}</div>`;
  } else {
    el.innerHTML = `<div class="ad-placeholder">📣 广告招商中 · 在 <code>data.js</code> 的 <code>AFFILIATE.adCode</code> 粘贴百度联盟 / Google AdSense 代码后，这里就会展示收益</div>`;
  }
}

function renderAffiliate(post) {
  const el = document.getElementById("affiliateBox");
  if (!el) return;
  let html = `<div class="aff-card"><h3>🛒 相关好物推荐</h3>`;
  if (AFFILIATE.enabled && (AFFILIATE.taobao || AFFILIATE.jd || AFFILIATE.pdd)) {
    if (AFFILIATE.taobao) html += `<a class="aff-btn" href="${AFFILIATE.taobao}" target="_blank" rel="nofollow">淘宝联盟</a>`;
    if (AFFILIATE.jd)     html += `<a class="aff-btn" href="${AFFILIATE.jd}" target="_blank" rel="nofollow">京东联盟</a>`;
    if (AFFILIATE.pdd)    html += `<a class="aff-btn" href="${AFFILIATE.pdd}" target="_blank" rel="nofollow">多多进宝</a>`;
    if (AFFILIATE.realCommission) {
      html += `<p class="aff-tip">✅ 已接入返利 · 通过你的链接下单，你即可获得平台佣金（零库存、零售后）。</p>`;
    } else {
      html += `<p class="aff-tip">⚠️ 当前为引流占位入口（不计佣）。在 <code>data.js</code> 的 <code>AFFILIATE</code> 用后台生成的「推广链接」替换 <code>jd</code> / <code>pdd</code>，并把 <code>realCommission</code> 改为 <code>true</code>，即可变身返利链接。</p>`;
    }
  } else {
    html += `<p class="aff-tip">站长推荐位 · 在 <code>data.js</code> 的 <code>AFFILIATE</code> 填入你的联盟 PID 后，这里会变成可点击的返利链接，用户下单你拿佣金。</p>`;
  }
  if (AFFILIATE.inviteCode) html += `<p class="aff-code">邀请码：<b>${AFFILIATE.inviteCode}</b></p>`;
  html += `</div>`;
  el.innerHTML = html;
}

/* 根据页面元素决定渲染哪个 */
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("grid")) renderHome();
  if (document.getElementById("article")) renderArticle();
});
