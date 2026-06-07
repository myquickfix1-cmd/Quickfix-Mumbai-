document.addEventListener("DOMContentLoaded", function() {
    
    // 1. DYNAMIC COUNTDOWN TIMER
    const timerDisplay = document.getElementById("countdownTimer");
    if (timerDisplay) {
        let totalSeconds = 3 * 60 * 60;
        setInterval(() => {
            if (totalSeconds <= 0) totalSeconds = 3 * 60 * 60;
            let h = Math.floor(totalSeconds / 3600), m = Math.floor((totalSeconds % 3600) / 60), s = totalSeconds % 60;
            timerDisplay.textContent = `${String(h).padStart(2,'0')}h : ${String(m).padStart(2,'0')}m : ${String(s).padStart(2,'0')}s`;
            totalSeconds--;
        }, 1000);
    }

    // 2. BOOKING DISPATCH ENGINE (Calendar + Notification + WhatsApp)
    const leadForm = document.getElementById("leadDispatchForm");
    if (leadForm) {
        leadForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const name = document.getElementById("custName").value.trim();
            const phone = document.getElementById("custPhone").value.trim();
            const brand = document.getElementById("brandSelect").value;
            const calendar = document.getElementById("calendar-container");
            const dateInput = document.getElementById("booking-date");
            
            const isAdvance = calendar && calendar.style.display === 'block';
            const selectedDate = dateInput ? dateInput.value : 'Today';

            if (isAdvance && !selectedDate) {
                alert("⚠️ Please select a date for advance booking!");
                return;
            }

            // Notification Update
            const note = document.getElementById("notification");
            if (note) {
                note.innerText = `Thanks ${name}! Your booking is confirmed for ${isAdvance ? selectedDate : 'Today'}.`;
                note.style.display = 'block';
            }

            // WhatsApp Payload
            const textPayload = `🚀 *BOOKING CONFIRMED*%0A%0A👤 *Name:* ${name}%0A📅 *Date:* ${isAdvance ? selectedDate : 'Today'}%0A📱 *Phone:* ${phone}%0A⚙️ *Brand:* ${brand}`;
            const whatsappURL = `https://wa.me/919819832282?text=${textPayload}`;
            
            setTimeout(() => { window.open(whatsappURL, '_blank'); }, 1500);
        });
    }

    // 3. ADMIN SYNC ENGINE
    function syncDashboard() {
        if (window.location.pathname.includes("admin")) {
            console.log("Syncing Admin Data...");
            // Yahan future mein API call dalenge
        }
    }
    setInterval(syncDashboard, 5000);

    // 4. SELECTION HANDLER
    window.handleSelect = function(el, selector) {
        document.querySelectorAll(selector).forEach(item => {
            item.classList.remove('active');
            item.style.borderColor = '#ddd';
            item.style.color = '#000';
            item.style.background = '#fff';
        });
        el.classList.add('active');
        el.style.borderColor = '#007bff';
        el.style.color = '#007bff';
        el.style.background = '#eef6ff';

        const calendar = document.getElementById("calendar-container");
        if (calendar) {
            calendar.style.display = (el.getAttribute('data-val') === "Advance") ? "block" : "none";
        }
    };
});

// SERVICE WORKER
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(err => console.log('SW Registration failed'));
}
