(function () {
  try {
    var page = location.pathname.replace(/^\//, '') || 'index.html';
    var scriptUrl = "https://script.google.com/macros/s/AKfycbyO3lriVfgXtiJ2x51X4zI3hmCRy2V3dGwcUiYjuIe-8GhEyHbehjcnemWcvEzn02XT/exec";
    fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'log_pageview', page: page })
    }).catch(function () { /* fail silently — never block the page for this */ });
  } catch (e) { /* fail silently */ }
})();
