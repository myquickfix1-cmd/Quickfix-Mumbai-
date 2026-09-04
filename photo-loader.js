/* ============================================================
   PHOTO LOADER — manage page photos from a Google Sheet
   ============================================================
   How it works:
   - Every page's <img> already has a static fallback photo, so
     the page always looks right even if this script fails.
   - On load, this script asks your Google Sheet ("Photos" tab)
     "is there a photo assigned to THIS page?" If yes, it swaps
     the image + caption. If no, or if anything goes wrong, it
     quietly does nothing — the existing photo stays as-is.
   - Team workflow: open the Photos sheet, add a row with the
     page's file name (e.g. "refrigerator-repair.html"), paste a
     Google Drive share link for the photo, save. Photo updates
     on the live site within a few hours (cached) or instantly
     if you edit the URL below with a cache-busting query.
   ============================================================ */

(function () {
  var PHOTO_API_URL = "https://script.google.com/macros/s/AKfycbw1gTmX67ucMFe3oFmHecTTeSsffXvJ78ToGC51VXcgJyqQisAuIFpt30UxepI3swXH/exec";

  function getPageSlug() {
    var path = window.location.pathname.split("/").pop();
    if (!path || path === "") path = "index.html";
    return path;
  }

  function applyPhoto(entry) {
    var container = document.querySelector(".container[style*='padding: 20px 24px 0']");
    if (!container) return;
    var img = container.querySelector("img");
    var caption = container.querySelector("p");
    if (img && entry.imageUrl) {
      img.src = entry.imageUrl;
      if (entry.alt) img.alt = entry.alt;
    }
    if (caption && entry.caption) {
      caption.textContent = entry.caption;
    }
  }

  function init() {
    var slug = getPageSlug();
    var url = PHOTO_API_URL + "?action=get_photos&slug=" + encodeURIComponent(slug);
    fetch(url)
      .then(function (res) { return res.ok ? res.json() : null; })
      .then(function (data) {
        if (data && data.status === "success" && data.entry) {
          applyPhoto(data.entry);
        }
        // no entry found or request failed -> keep the static fallback photo, do nothing
      })
      .catch(function () {
        // network/CORS/anything failed -> keep the static fallback photo, do nothing
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
