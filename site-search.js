(function(){
  var style = document.createElement('style');
  style.textContent = `
  .qf-search-wrap { position: relative; }
  .qf-search-btn { background: rgba(30,58,138,0.08); border: 1px solid rgba(30,58,138,0.18); border-radius: 8px; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1.05rem; }
  .qf-search-panel { display: none; position: absolute; top: 48px; right: 0; width: min(340px, 90vw); background: #fff; border: 1px solid #E5E7EB; border-radius: 12px; box-shadow: 0 16px 36px rgba(0,0,0,0.18); padding: 10px; z-index: 999; }
  .qf-search-panel.open { display: block; }
  .qf-search-input { width: 100%; padding: 10px 12px; border: 1.5px solid #E5E7EB; border-radius: 8px; font-size: 0.9rem; font-family: inherit; }
  .qf-search-results { max-height: 320px; overflow-y: auto; margin-top: 8px; }
  .qf-search-results a { display: block; padding: 9px 10px; border-radius: 8px; text-decoration: none; color: #1F2937; font-size: 0.85rem; }
  .qf-search-results a:hover { background: #F3F4F6; }
  .qf-search-cat { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; color: #3B82F6; margin-right: 6px; }
  .qf-search-empty { padding: 10px; font-size: 0.82rem; color: #6B7280; text-align: center; }
  @media (max-width: 480px) { .qf-search-panel { position: fixed; top: 64px; left: 12px; right: 12px; width: auto; } }
  `;
  document.head.appendChild(style);

  function buildWidget() {
    var headerBtns = document.querySelector('.header-btns');
    if (!headerBtns || typeof SITE_SEARCH_INDEX === 'undefined') return;

    var wrap = document.createElement('div');
    wrap.className = 'qf-search-wrap';
    wrap.innerHTML =
      '<button type="button" class="qf-search-btn" id="qfSearchBtn" aria-label="Search">🔎</button>' +
      '<div class="qf-search-panel" id="qfSearchPanel">' +
        '<input type="text" class="qf-search-input" id="qfSearchInput" placeholder="Search fridge, area, brand...">' +
        '<div class="qf-search-results" id="qfSearchResults"></div>' +
      '</div>';
    headerBtns.parentNode.insertBefore(wrap, headerBtns);

    var btn = document.getElementById('qfSearchBtn');
    var panel = document.getElementById('qfSearchPanel');
    var input = document.getElementById('qfSearchInput');
    var results = document.getElementById('qfSearchResults');

    function render(list) {
      if (list.length === 0) {
        results.innerHTML = '<div class="qf-search-empty">No matching page found — try Call/WhatsApp instead.</div>';
        return;
      }
      results.innerHTML = list.slice(0, 8).map(function(item){
        return '<a href="' + item.url + '"><span class="qf-search-cat">' + item.category + '</span>' + item.title + '</a>';
      }).join('');
    }

    function search(q) {
      q = q.trim().toLowerCase();
      if (!q) { render([]); return; }
      var matches = SITE_SEARCH_INDEX.filter(function(item){
        return item.title.toLowerCase().indexOf(q) !== -1;
      });
      render(matches);
    }

    btn.addEventListener('click', function(e){
      e.stopPropagation();
      panel.classList.toggle('open');
      if (panel.classList.contains('open')) { input.focus(); }
    });
    input.addEventListener('input', function(){ search(input.value); });
    document.addEventListener('click', function(e){
      if (!wrap.contains(e.target)) panel.classList.remove('open');
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') panel.classList.remove('open');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildWidget);
  } else {
    buildWidget();
  }
})();
