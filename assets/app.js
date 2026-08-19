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

  box.innerHTML = `
    <span class="badge" style="background:${cat.color}">${cat.label}</span>
    <h1>${escapeHtml(p.title)}</h1>
    <div class="meta">🔥 ${p.views.toLocaleString()} 阅读 · 📅 ${p.date} · 🏷️ ${escapeHtml(p.tags)}</div>
    <div class="content">${p.content}</div>
    <a class="dl-btn" href="${p.download}" target="_blank" rel="noopener">前往官网 / 下载 ↓</a>
    <br><a class="back" href="index.html">← 返回首页</a>`;
}

/* 根据页面元素决定渲染哪个 */
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("grid")) renderHome();
  if (document.getElementById("article")) renderArticle();
});
