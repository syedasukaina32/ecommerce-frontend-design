// ===== COUNTDOWN TIMER =====
function startCountdown() {
  const daysEl = document.getElementById('d-days');
  const hoursEl = document.getElementById('d-hours');
  const minsEl = document.getElementById('d-mins');
  const secsEl = document.getElementById('d-secs');
  if (!daysEl) return;

  let totalSeconds = 4 * 86400 + 13 * 3600 + 34 * 60 + 56;

  setInterval(function () {
    if (totalSeconds <= 0) return;
    totalSeconds--;
    const d = Math.floor(totalSeconds / 86400);
    const h = Math.floor((totalSeconds % 86400) / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    daysEl.textContent = String(d).padStart(2, '0');
    hoursEl.textContent = String(h).padStart(2, '0');
    minsEl.textContent = String(m).padStart(2, '0');
    secsEl.textContent = String(s).padStart(2, '0');
  }, 1000);
}

// ===== IMAGE GALLERY =====
function changeImage(thumb) {
  const mainImg = document.getElementById('mainImage');
  if (!mainImg) return;
  mainImg.src = thumb.src;
  document.querySelectorAll('.gallery-thumbs img').forEach(function (t) {
    t.classList.remove('active');
  });
  thumb.classList.add('active');
}

// ===== TAB SWITCHING =====
function initTabs() {
  const tabs = document.querySelectorAll('.tab-nav a');
  if (!tabs.length) return;
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      document.querySelectorAll('.tab-content').forEach(function (c) { c.classList.remove('active'); });
      var target = document.getElementById('tab-' + tab.getAttribute('data-tab'));
      if (target) target.classList.add('active');
    });
  });
}

// ===== FILTER TAG REMOVAL =====
function initFilterTags() {
  document.querySelectorAll('.filter-tag .close').forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.closest('.filter-tag').remove();
    });
  });
  var clearBtn = document.querySelector('.clear-all');
  if (clearBtn) {
    clearBtn.addEventListener('click', function () {
      document.querySelectorAll('.filter-tag').forEach(function (tag) { tag.remove(); });
    });
  }
}

// ===== VIEW TOGGLE =====
function initViewToggle() {
  document.querySelectorAll('.view-toggle a').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.view-toggle a').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
    });
  });
}

// ===== CART ACTIONS =====
function initCart() {
  document.querySelectorAll('.btn-remove').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.cart-item');
      if (item) {
        item.style.opacity = '0';
        item.style.transition = 'opacity 0.3s';
        setTimeout(function () { item.remove(); updateCartCount(); }, 300);
      }
    });
  });

  var removeAllBtn = document.querySelector('.btn-removeall');
  if (removeAllBtn) {
    removeAllBtn.addEventListener('click', function () {
      document.querySelectorAll('.cart-item').forEach(function (item) { item.remove(); });
      updateCartCount();
    });
  }
}

function updateCartCount() {
  var count = document.querySelectorAll('.cart-item').length;
  var h2 = document.querySelector('.cart-main h2');
  if (h2) h2.textContent = 'My cart (' + count + ')';
}

// ===== HERO SIDEBAR HOVER =====
function initSidebarHover() {
  document.querySelectorAll('.hero-sidebar a').forEach(function (link) {
    link.addEventListener('mouseenter', function () {
      document.querySelectorAll('.hero-sidebar a').forEach(function (l) { l.classList.remove('active'); });
      link.classList.add('active');
    });
  });
}

// ===== NEWSLETTER =====
function initNewsletter() {
  var form = document.querySelector('.newsletter-form');
  if (!form) return;
  var btn = form.querySelector('button');
  if (btn) {
    btn.addEventListener('click', function () {
      var input = form.querySelector('input');
      if (input && input.value.trim()) {
        btn.textContent = 'Subscribed!';
        btn.style.background = '#00B517';
        input.value = '';
        setTimeout(function () {
          btn.textContent = 'Subscribe';
          btn.style.background = '';
        }, 2000);
      }
    });
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function () {
  startCountdown();
  initTabs();
  initFilterTags();
  initViewToggle();
  initCart();
  initSidebarHover();
  initNewsletter();
  initSearchBar();
  initAddToCart();
});

// ===== SEARCH BAR (styled, non-functional as per task) =====
function initSearchBar() {
  var searchBtn = document.querySelector('.btn-search');
  var searchInput = document.querySelector('.search-bar input');
  if (!searchBtn || !searchInput) return;

  // Focus effect on search input
  searchInput.addEventListener('focus', function () {
    searchInput.parentElement.style.boxShadow = '0 0 0 3px rgba(13,110,253,0.25)';
  });
  searchInput.addEventListener('blur', function () {
    searchInput.parentElement.style.boxShadow = 'none';
  });

  // Search button click handler (styled only, no actual search)
  searchBtn.addEventListener('click', function () {
    if (searchInput.value.trim()) {
      searchBtn.textContent = 'Searching...';
      setTimeout(function () {
        searchBtn.textContent = 'Search';
      }, 1000);
    }
  });
}

// ===== ADD TO CART (product detail page) =====
function initAddToCart() {
  var btn = document.getElementById('addToCartBtn');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var sizeSelect = document.getElementById('sizeSelect');
    if (sizeSelect && sizeSelect.value === 'Select size') {
      sizeSelect.style.borderColor = '#FA3434';
      setTimeout(function () { sizeSelect.style.borderColor = ''; }, 2000);
      return;
    }
    btn.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Added!';
    btn.style.background = '#00B517';
    setTimeout(function () {
      btn.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg> Add to Cart';
      btn.style.background = '';
    }, 2000);
  });
}
