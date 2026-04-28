// ============================================================
//  details.js — App Detail Page Logic
//  AppVault Play Store
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Get app ID from URL ─────────────────────────────────────
  const params = new URLSearchParams(window.location.search);
  const appId  = params.get('id');

  if (!appId) {
    showNotFound();
    return;
  }

  const app = ALL_APPS.find(a => a.id === appId);

  if (!app) {
    showNotFound();
    return;
  }

  // ── Populate page ───────────────────────────────────────────
  populatePage(app);

  // ── Set page title ──────────────────────────────────────────
  document.title = `${app.appName} — AppVault`;

  // ── Functions ───────────────────────────────────────────────

  function populatePage(app) {

    // Banner
    const bannerEl = document.getElementById('detail-banner-img');
    if (bannerEl) {
      bannerEl.src   = app.descriptionBanner || 'generalImages/default-banner.png';
      bannerEl.alt   = app.appName;
      bannerEl.onerror = () => { bannerEl.src = 'generalImages/default-banner.png'; };
    }

    // Icon
    const iconEl = document.getElementById('app-detail-icon');
    if (iconEl) {
      iconEl.src   = app.detailIcon || 'generalImages/default-app-icon.png';
      iconEl.alt   = app.appName;
      iconEl.onerror = () => { iconEl.src = 'generalImages/default-app-icon.png'; };
    }

    // Name & developer
    setText('app-detail-name',      app.appName);
    setText('app-detail-developer', app.developer || 'Unknown Developer');

    // Meta row (rating + tag)
    const metaEl = document.getElementById('app-detail-meta');
    if (metaEl) {
      metaEl.innerHTML = `
        ${starsHTML(app.rating || 5)}
        <span class="tag">${app.type || 'App'}</span>
        ${app.version ? `<span style="font-size:0.78rem;color:var(--text-muted);">v${app.version}</span>` : ''}
      `;
    }

    // Download button
    const dlBtn = document.getElementById('download-btn');
    if (dlBtn) {
      if (app.apkFile) {
        dlBtn.href     = app.apkFile;
        dlBtn.download = `${app.appName}.apk`;
      } else {
        dlBtn.style.opacity        = '0.5';
        dlBtn.style.pointerEvents  = 'none';
        dlBtn.querySelector('span').textContent = 'Not Available';
      }
    }

    // Share button
    const shareBtn = document.getElementById('share-btn');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => {
        if (navigator.share) {
          navigator.share({
            title: app.appName,
            text:  app.shortDescription || app.description || '',
            url:   window.location.href
          });
        } else {
          navigator.clipboard.writeText(window.location.href).then(() => {
            shareBtn.title = 'Link copied!';
            setTimeout(() => { shareBtn.title = 'Share'; }, 2000);
          });
        }
      });
    }

    // Description
    const descEl = document.getElementById('app-description');
    if (descEl && app.description) {
      descEl.innerHTML = app.description
        .split('\n')
        .filter(l => l.trim())
        .map(l => `<p>${l}</p>`)
        .join('');
    }

    // Screenshots
    const screenshotsEl = document.getElementById('screenshots-scroll');
    if (screenshotsEl) {
      if (app.screenshots && app.screenshots.length > 0) {
        screenshotsEl.innerHTML = '';
        app.screenshots.forEach((src, i) => {
          const item = document.createElement('div');
          item.className = 'screenshot-item';
          item.style.animationDelay = `${i * 80}ms`;
          item.innerHTML = `
            <img src="${src}"
                 alt="Screenshot ${i + 1}"
                 onerror="this.src='generalImages/placeholder-screenshot.png'">
          `;
          screenshotsEl.appendChild(item);
        });
      } else {
        // Show 3 placeholder screenshots
        screenshotsEl.innerHTML = [1, 2, 3].map(n => `
          <div class="screenshot-item">
            <img src="generalImages/placeholder-screenshot.png" alt="No screenshot ${n}">
          </div>
        `).join('');
      }
    }

    // Info panel
    setText('info-version',    app.version     || '—');
    setText('info-size',       app.size        || '—');
    setText('info-updated',    app.lastUpdated ? formatDate(app.lastUpdated) : '—');
    setText('info-android',    app.minAndroid  ? `Android ${app.minAndroid}+` : '—');
    setText('info-category',   app.type        || '—');
    setText('info-reviews',    app.reviews     ? app.reviews.toLocaleString() : '0');

    // Rating block
    const ratingNumEl = document.getElementById('rating-number');
    const ratingStarsEl = document.getElementById('rating-stars-big');
    if (ratingNumEl)  ratingNumEl.textContent  = Number(app.rating || 5).toFixed(1);
    if (ratingStarsEl) ratingStarsEl.innerHTML = starsHTML(app.rating || 5, true);
  }

  // ── Helper: set text content safely ────────────────────────
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  // ── Helper: generate star HTML ──────────────────────────────
  function starsHTML(rating, big = false) {
    const size  = big ? 'rating-stars-big' : 'stars';
    const imgSz = big ? 16 : 14;
    let html = `<div class="${size}" style="display:flex;align-items:center;gap:${big ? 3 : 2}px;">`;
    for (let i = 1; i <= 5; i++) {
      html += `<img src="generalImages/${i <= rating ? 'star-filled' : 'star-empty'}.svg"
                    alt="star"
                    width="${imgSz}" height="${imgSz}">`;
    }
    if (!big) html += `<span class="rating-text">${Number(rating).toFixed(1)}</span>`;
    html += '</div>';
    return html;
  }

  // ── Helper: format date ─────────────────────────────────────
  function formatDate(dateStr) {
    try {
      return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric'
      });
    } catch {
      return dateStr;
    }
  }

  // ── Not found state ─────────────────────────────────────────
  function showNotFound() {
    document.title = 'App Not Found — AppVault';
    const main = document.getElementById('detail-main-content');
    if (main) {
      main.innerHTML = `
        <div class="empty-state" style="padding: 8rem 2rem;">
          <img src="generalImages/no-apps-found.png" alt="Not found">
          <h3>App Not Found</h3>
          <p>This app doesn't exist or may have been removed.</p>
          <a href="index.html" style="
            margin-top: 1rem;
            padding: 0.6rem 1.5rem;
            background: var(--green-primary);
            color: white;
            border-radius: var(--radius-md);
            font-family: var(--font-display);
            font-weight: 700;
            font-size: 0.85rem;
          ">← Back to Home</a>
        </div>
      `;
    }
  }

});