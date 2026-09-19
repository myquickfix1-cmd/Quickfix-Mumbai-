// Shared area-coordinates table + geolocation + cross-sell ticker widget for Quickfix Mumbai
var QF_AREAS = [
  {"name":"Andheri","url":"andheri-appliance-repair.html","lat":19.1197,"lng":72.8468},
  {"name":"Bandra West","url":"bandra-west-appliance-repair.html","lat":19.0596,"lng":72.8295},
  {"name":"Bhandup","url":"bhandup-appliance-repair.html","lat":19.1436,"lng":72.9345},
  {"name":"BKC","url":"bkc-appliance-repair.html","lat":19.0669,"lng":72.8679},
  {"name":"Borivali","url":"borivali-appliance-repair.html","lat":19.2307,"lng":72.8567},
  {"name":"Breach Candy","url":"breach-candy-appliance-repair.html","lat":18.9678,"lng":72.8081},
  {"name":"Byculla & Mazgaon","url":"byculla-mazgaon-appliance-repair.html","lat":18.9750,"lng":72.8330},
  {"name":"Charni Road","url":"charni-road-appliance-repair.html","lat":18.9515,"lng":72.8192},
  {"name":"Chembur","url":"chembur-appliance-repair.html","lat":19.0522,"lng":72.9005},
  {"name":"Chuna Bhatti","url":"chuna-bhatti-appliance-repair.html","lat":19.0678,"lng":72.8961},
  {"name":"Churchgate","url":"churchgate-appliance-repair.html","lat":18.9322,"lng":72.8264},
  {"name":"Colaba","url":"colaba-appliance-repair.html","lat":18.9067,"lng":72.8147},
  {"name":"Cuffe Parade","url":"cuffe-parade-appliance-repair.html","lat":18.9040,"lng":72.8181},
  {"name":"Dahisar","url":"dahisar-appliance-repair.html","lat":19.2544,"lng":72.8594},
  {"name":"Fort & Ballard Estate","url":"fort-ballard-estate-appliance-repair.html","lat":18.9345,"lng":72.8358},
  {"name":"Ghatkopar West","url":"ghatkopar-appliance-repair.html","lat":19.0864,"lng":72.9081},
  {"name":"Goregaon","url":"goregaon-appliance-repair.html","lat":19.1663,"lng":72.8526},
  {"name":"Hiranandani Gardens","url":"hiranandani-appliance-repair.html","lat":19.1197,"lng":72.9051},
  {"name":"JB Nagar","url":"jb-nagar-appliance-repair.html","lat":19.1063,"lng":72.8697},
  {"name":"Jogeshwari","url":"jogeshwari-appliance-repair.html","lat":19.1350,"lng":72.8479},
  {"name":"Juhu","url":"juhu-appliance-repair.html","lat":19.1075,"lng":72.8263},
  {"name":"Kalina","url":"kalina-appliance-repair.html","lat":19.0728,"lng":72.8615},
  {"name":"Kandivali","url":"kandivali-appliance-repair.html","lat":19.2095,"lng":72.8526},
  {"name":"Khar","url":"khar-appliance-repair.html","lat":19.0728,"lng":72.8370},
  {"name":"Kurla","url":"kurla-appliance-repair.html","lat":19.0726,"lng":72.8845},
  {"name":"Lower Parel","url":"lower-parel-appliance-repair.html","lat":18.9967,"lng":72.8300},
  {"name":"Mahalaxmi","url":"mahalaxmi-appliance-repair.html","lat":18.9827,"lng":72.8199},
  {"name":"Mahim","url":"mahim-appliance-repair.html","lat":19.0410,"lng":72.8397},
  {"name":"Malabar Hill","url":"malabar-hill-appliance-repair.html","lat":18.9548,"lng":72.7986},
  {"name":"Malad","url":"malad-appliance-repair.html","lat":19.1864,"lng":72.8493},
  {"name":"Marine Lines","url":"marine-lines-appliance-repair.html","lat":18.9457,"lng":72.8236},
  {"name":"Matunga","url":"matunga-appliance-repair.html","lat":19.0272,"lng":72.8552},
  {"name":"Mulund","url":"mulund-appliance-repair.html","lat":19.1726,"lng":72.9425},
  {"name":"Mumbai Central","url":"mumbai-central-appliance-repair.html","lat":18.9696,"lng":72.8193},
  {"name":"Nahur","url":"nahur-appliance-repair.html","lat":19.1560,"lng":72.9339},
  {"name":"Powai","url":"powai-appliance-repair.html","lat":19.1176,"lng":72.9060},
  {"name":"Prabhadevi","url":"prabhadevi-appliance-repair.html","lat":19.0176,"lng":72.8302},
  {"name":"Sakinaka","url":"sakinaka-appliance-repair.html","lat":19.1073,"lng":72.8879},
  {"name":"Santacruz","url":"santacruz-appliance-repair.html","lat":19.0821,"lng":72.8416},
  {"name":"Sewri","url":"sewri-appliance-repair.html","lat":19.0089,"lng":72.8593},
  {"name":"Shivaji Nagar","url":"shivaji-nagar-appliance-repair.html","lat":19.0553,"lng":72.9280},
  {"name":"Sion","url":"sion-appliance-repair.html","lat":19.0433,"lng":72.8619},
  {"name":"Tardeo & Grant Road","url":"tardeo-grant-road-appliance-repair.html","lat":18.9647,"lng":72.8138},
  {"name":"Thane","url":"thane-appliance-repair.html","lat":19.2183,"lng":72.9781},
  {"name":"Tilak Nagar","url":"tilak-nagar-appliance-repair.html","lat":19.0728,"lng":72.8925},
  {"name":"Versova","url":"versova-appliance-repair.html","lat":19.1317,"lng":72.8142},
  {"name":"Vidyavihar","url":"vidyavihar-appliance-repair.html","lat":19.0787,"lng":72.8968},
  {"name":"Vikhroli","url":"vikhroli-appliance-repair.html","lat":19.1097,"lng":72.9285},
  {"name":"Vile Parle","url":"vile-parle-appliance-repair.html","lat":19.1003,"lng":72.8433},
  {"name":"Wadala Road","url":"wadala-road-appliance-repair.html","lat":19.0166,"lng":72.8570},
  {"name":"Worli","url":"worli-appliance-repair.html","lat":19.0176,"lng":72.8155},
  {"name":"Altamount Road","url":"altamount-road-appliance-repair.html","lat":18.9647,"lng":72.8098}
];

function qfDist(lat1, lng1, lat2, lng2) {
  var R = 6371, dLat = (lat2-lat1)*Math.PI/180, dLng = (lng2-lng1)*Math.PI/180;
  var a = Math.sin(dLat/2)*Math.sin(dLat/2) + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)*Math.sin(dLng/2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function qfFindMyArea() {
  var btn = document.getElementById('qfGeoBtn');
  var result = document.getElementById('qfGeoResult');
  if (!navigator.geolocation) {
    result.textContent = "Location not supported on this browser — please pick your area from the menu.";
    return;
  }
  if (btn) btn.textContent = "📍 Locating...";
  navigator.geolocation.getCurrentPosition(function(pos) {
    var lat = pos.coords.latitude, lng = pos.coords.longitude;
    var currentFile = window.location.pathname.split('/').pop();
    var best = null, bestDist = Infinity;
    QF_AREAS.forEach(function(a) {
      if (a.url === currentFile) return;
      var d = qfDist(lat, lng, a.lat, a.lng);
      if (d < bestDist) { bestDist = d; best = a; }
    });
    if (best) {
      result.innerHTML = "📍 You're closest to <strong>" + best.name + "</strong> (" + bestDist.toFixed(1) + " km away) — <a href='" + best.url + "' style='color:#25D366; font-weight:700; text-decoration:underline;'>See local pricing & technicians →</a>";
    }
    if (btn) btn.style.display = 'none';
  }, function(err) {
    result.textContent = "Couldn't get your location — please pick your area from the menu instead.";
    if (btn) btn.textContent = "📍 Find My Nearest Area";
  }, {timeout: 8000});
}

// Rotating cross-sell ticker
var QF_TICKER_ITEMS = [
  {icon:"🧊", text:"Samsung Fridge Not Cooling?", url:"samsung-fridge-pcb-board-fault.html"},
  {icon:"🌀", text:"LG Washing Machine OE Error?", url:"lg-washing-machine-oe-error.html"},
  {icon:"🍽️", text:"Bosch Dishwasher Not Cleaning?", url:"bosch-dishwasher-not-cleaning.html"},
  {icon:"🔥", text:"Samsung Microwave Not Heating?", url:"samsung-microwave-not-heating.html"},
  {icon:"👕", text:"Whirlpool Dryer Drum Not Spinning?", url:"whirlpool-dryer-drum-not-spinning.html"},
  {icon:"🌀", text:"IFB Washing Machine Not Spinning?", url:"ifb-washing-machine-not-spinning.html"},
  {icon:"🧊", text:"Godrej Refrigerator Not Cooling?", url:"godrej-refrigerator-not-cooling.html"},
  {icon:"💧", text:"Whirlpool Refrigerator Water Leaking?", url:"whirlpool-refrigerator-water-leaking.html"},
  {icon:"📋", text:"Want Yearly AMC Peace of Mind?", url:"amc-service.html"}
];

function qfInitTicker() {
  var el = document.getElementById('qfTicker');
  if (!el) return;
  var i = 0;
  var currentFile = window.location.pathname.split('/').pop();
  var items = QF_TICKER_ITEMS.filter(function(it){ return it.url !== currentFile; });
  function render() {
    var it = items[i % items.length];
    el.style.opacity = 0;
    setTimeout(function() {
      el.innerHTML = '<a href="' + it.url + '" style="color:#fff; text-decoration:none; font-size:0.78rem; font-weight:600; display:block; padding:0 12px; line-height:1.4;">' + it.icon + ' ' + it.text + ' <span style="text-decoration:underline; white-space:nowrap;">We Fix It →</span></a>';
      el.style.opacity = 1;
    }, 300);
    i++;
  }
  render();
  setInterval(render, 4000);
}

document.addEventListener('DOMContentLoaded', function(){ qfInitTicker(); });
