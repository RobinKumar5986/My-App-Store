// ============================================================
//  index.js — Home Page Logic
//  AppVault Play Store
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── State ──────────────────────────────────────────────────
  let activeFilter = 'All';
  let searchQuery  = '';

  // ── DOM Refs ───────────────────────────────────────────────
  const appsGrid     = document.getElementById('apps-grid');
  const filterBar    = document.getElementById('filter-bar');
  const searchInput  = document.getElementById('search-input');
  const totalAppsEl  = document.getElementById('stat-total-apps');
  const totalCatsEl  = document.getElementById('stat-categories');

  // ── Build category list ────────────────────────────────────
  function getCategories() {
    const cats = ['All', ...new Set(ALL_APPS.map(a => a.type).filter(Boolean))];
    return cats;
  }

  // ── Render filter buttons ───────────────────────────────────
  function renderFilters() {
    const cats = getCategories();
    filterBar.innerHTML = `
      <span class="filter-label">
        <img src="generalImages/filter.png" alt="filter">
        Filter
      </span>
    `;
    cats.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn' + (cat === activeFilter ? ' active' : '');
      btn.textContent = cat;
      btn.addEventListener('click', () => {
        activeFilter = cat;
        renderFilters();
        renderApps();
      });
      filterBar.appendChild(btn);
    });
  }

  // ── Generate star HTML ──────────────────────────────────────
  function starsHTML(rating) {
    let html = '<div class="stars">';
    for (let i = 1; i <= 5; i++) {
      html += `<img src="generalImages/${i <= rating ? 'star-filled' : 'star-empty'}.png" alt="${i <= rating ? 'filled' : 'empty'} star">`;
    }
    html += `<span class="rating-text">${Number(rating).toFixed(1)}</span></div>`;
    return html;
  }

  // ── Render app cards ────────────────────────────────────────
  function renderApps() {
    let filtered = ALL_APPS;

    if (activeFilter !== 'All') {
      filtered = filtered.filter(a => a.type === activeFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(a =>
        a.appName.toLowerCase().includes(q) ||
        (a.developer || '').toLowerCase().includes(q) ||
        (a.type || '').toLowerCase().includes(q)
      );
    }

    appsGrid.innerHTML = '';

    if (filtered.length === 0) {
      appsGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1/-1;">
          <img src="generalImages/no-apps-found.png" alt="No apps found">
          <h3>No Apps Found</h3>
          <p>${searchQuery ? `No results for "${searchQuery}". Try a different search.` : 'No apps in this category yet. Check back soon!'}</p>
        </div>
      `;
      return;
    }

    filtered.forEach((app, i) => {
      const card = document.createElement('div');
      card.className = 'app-card';
      card.style.animationDelay = `${i * 60}ms`;

      const homeImg  = app.homePageImage || 'generalImages/default-banner.png';
      const iconImg  = app.detailIcon    || 'generalImages/default-app-icon.png';

      card.innerHTML = `
        ${app.featured ? '<span class="card-featured-badge">Featured</span>' : ''}
        <div class="card-image-wrap">
          <img src="${homeImg}"
               alt="${app.appName}"
               onerror="this.src='generalImages/default-banner.png'">
        </div>
        <div class="card-body">
          <div class="card-top">
            <img class="card-icon"
                 src="${iconImg}"
                 alt="${app.appName} icon"
                 onerror="this.src='generalImages/default-app-icon.png'">
            <div class="card-info">
              <div class="card-name">${app.appName}</div>
              <div class="card-developer">${app.developer || 'Unknown Developer'}</div>
            </div>
          </div>
          ${app.shortDescription ? `<p class="card-desc">${app.shortDescription}</p>` : ''}
          <div class="card-footer">
            <div>
              ${starsHTML(app.rating || 5)}
              <span class="tag" style="margin-top:6px;">${app.type || 'App'}</span>
            </div>
            <button class="card-download-btn"
                    title="Download ${app.appName}"
                    onclick="event.stopPropagation(); downloadApp('${app.apkFile}', '${app.appName}')">
              <img src="generalImages/download.png" alt="Download">
            </button>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        window.location.href = `app-details.html?id=${encodeURIComponent(app.id)}`;
      });

      appsGrid.appendChild(card);
    });
  }

  // ── Update stats bar ────────────────────────────────────────
  function updateStats() {
    const cats = new Set(ALL_APPS.map(a => a.type).filter(Boolean));
    if (totalAppsEl)  totalAppsEl.textContent  = ALL_APPS.length;
    if (totalCatsEl)  totalCatsEl.textContent  = cats.size;
  }

  // ── Download helper ─────────────────────────────────────────
  window.downloadApp = function(apkPath, appName) {
    if (!apkPath) return;
    const a = document.createElement('a');
    a.href     = apkPath;
    a.download = appName ? `${appName}.apk` : 'app.apk';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // ── Search input ────────────────────────────────────────────
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderApps();
    });
  }

  // ── Init ────────────────────────────────────────────────────
  renderFilters();
  renderApps();
  updateStats();
});