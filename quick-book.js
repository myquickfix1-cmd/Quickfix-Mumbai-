(function(){
  var PHONE = '919819832282';
  var SLOTS = [
    { label: 'Morning', time: '9 AM - 12 PM' },
    { label: 'Midday', time: '12 PM - 3 PM' },
    { label: 'Afternoon', time: '3 PM - 6 PM' },
    { label: 'Evening', time: '6 PM - 9 PM' }
  ];

  function buildSlotUrl(slot, appliance, problem) {
    var applianceText = appliance ? (appliance + (problem ? ' - ' + problem : '') + ' has a problem') : 'My appliance has a problem';
    var msg = 'Hello, I want to book the ' + slot.label + ' slot (' + slot.time + '). ' + applianceText + '. I am from ';
    return 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(msg);
  }

  function buildEmergencyUrl(appliance, problem) {
    var applianceText = appliance ? (appliance + (problem ? ' - ' + problem : '') + ' has a problem') : 'My appliance has a problem';
    var msg = 'Hello, this is an EMERGENCY. ' + applianceText + ' and I need a technician urgently (priority visit). I am from ';
    return 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(msg);
  }

  var style = document.createElement('style');
  style.textContent = `
  .qf-quickbook { background: #EFF6FF; border: 1.5px solid #BFDBFE; border-radius: 14px; padding: 18px 20px; margin: 20px 0; }
  .qf-quickbook-title { font-weight: 700; color: #1E3A8A; font-size: 0.95rem; margin-bottom: 4px; }
  .qf-quickbook-sub { font-size: 0.8rem; color: #475569; margin-bottom: 12px; }
  .qf-slot-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 8px; }
  .qf-slot-btn { display: block; text-align: center; background: #fff; border: 1.5px solid #BFDBFE; border-radius: 8px; padding: 10px 8px; text-decoration: none; color: #1E3A8A; font-weight: 600; font-size: 0.8rem; }
  .qf-slot-btn:hover { background: #1E3A8A; color: #fff; }
  .qf-emergency-btn { display: block; text-align: center; margin-top: 10px; background: #FEE2E2; border: 1.5px solid #FCA5A5; border-radius: 8px; padding: 10px 8px; text-decoration: none; color: #991B1B; font-weight: 700; font-size: 0.8rem; }
  .qf-emergency-btn:hover { background: #DC2626; color: #fff; }
  `;
  document.head.appendChild(style);

  function renderWidget(el) {
    var appliance = el.getAttribute('data-appliance') || '';
    var problem = el.getAttribute('data-problem') || '';
    var html = '<div class="qf-quickbook-title">\uD83D\uDCF2 Book via WhatsApp \u2014 Pick Your Slot</div>' +
      '<div class="qf-quickbook-sub">Tap a slot, tell us your area, we\u2019ll confirm the exact time.</div>' +
      '<div class="qf-slot-grid">';
    SLOTS.forEach(function(slot){
      html += '<a class="qf-slot-btn" href="' + buildSlotUrl(slot, appliance, problem) + '" target="_blank">' + slot.label + '<br>' + slot.time + '</a>';
    });
    html += '</div>' +
      '<a class="qf-emergency-btn" href="' + buildEmergencyUrl(appliance, problem) + '" target="_blank">\uD83D\uDEA8 Emergency? Priority visit (extra charge)</a>';
    el.innerHTML = html;
    el.classList.add('qf-quickbook');
  }

  function init() {
    document.querySelectorAll('.qf-quickbook-slot').forEach(renderWidget);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
