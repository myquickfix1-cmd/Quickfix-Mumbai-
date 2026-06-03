// Ye code apne script tag mein replace karein
const leadForm = document.getElementById("leadDispatchForm");

if (leadForm) {
    leadForm.addEventListener("submit", function(e) {
        e.preventDefault(); // <--- YE SABSE ZARURI HAI (Page reload rokne ke liye)
        
        // Data lein
        const name = document.getElementById("custName").value;
        const area = document.getElementById("custArea").value;
        const phone = document.getElementById("custPhone").value;
        const brand = document.getElementById("brandSelect").value;
        const issue = document.getElementById("issueSelect").value;
        
        // URL encode karein
        const textPayload = `🚀 *NEW BOOKING REQUEST*%0A%0A👤 Name: ${name}%0A📍 Area: ${area}%0A📱 Phone: ${phone}%0A⚙️ Brand: ${brand}%0A🔧 Issue: ${issue}`;
        
        // WhatsApp kholne ka command
        const url = `https://wa.me/919819832282?text=${textPayload}`;
        
        // Naye tab mein kholein
        window.open(url, '_blank');
        
        console.log("Booking processed successfully!");
    });
}

/**
 * QuickFix Mumbai - Version 5.6 Intelligent Brain
 * Optimized & Error-Free Implementation
 */

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .catch(err => console.error('Service Worker Registration Failed', err));
    });
}

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. 3-HOUR DYNAMIC COUNTDOWN TIMER
    const timerDisplay = document.getElementById("countdownTimer");
    let totalSeconds = 3 * 60 * 60;
    setInterval(() => {
        if (totalSeconds <= 0) totalSeconds = 3 * 60 * 60;
        let h = Math.floor(totalSeconds / 3600), m = Math.floor((totalSeconds % 3600) / 60), s = totalSeconds % 60;
        if (timerDisplay) timerDisplay.textContent = `${String(h).padStart(2,'0')}h : ${String(m).padStart(2,'0')}m : ${String(s).padStart(2,'0')}s`;
        totalSeconds--;
    }, 1000);

    // 2. LEAD DISPATCH ENGINE (Fixed URL Logic)
    const leadForm = document.getElementById("leadDispatchForm");
    if (leadForm) {
        leadForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const name = document.getElementById("custName").value.trim();
            const phone = document.getElementById("custPhone").value.trim();
            const brand = document.getElementById("brandSelect").value;
            const issue = document.getElementById("issueSelect").value;
            
            if (!name || !phone || !brand || !issue) {
                alert("⚠️ Please fill all required fields!");
                return;
            }

            const textPayload = `🚀 *QUICKFIX MUMBAI ELITE LEAD*\n👤 Name: ${name}\n📱 Phone: ${phone}\n⚙️ Brand: ${brand}\n🔧 Issue: ${issue}`;
            const encodedMessage = encodeURIComponent(textPayload);
            
            // Fixed Link Protocol
            const finalWhatsAppURL = `https://wa.me/919819832282?text=${encodedMessage}`;
            window.location.href = finalWhatsAppURL;
        });
    }

    // 3. HAPPY VS BAD CRM ENGINE
    const feedbackForm = document.getElementById("feedbackGatewayForm");
    const overlay = document.getElementById("crmModalOverlay");
    const modalContent = document.getElementById("crmModalContent");

    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const clientName = document.getElementById("feedName").value.trim();
            const scoreStatus = document.getElementById("feedSatisfaction").value;

            overlay.classList.add("modal-open");

            if (scoreStatus === "Yes") {
                modalContent.innerHTML = `
                    <div class="text-4xl mb-3">🛡️</div>
                    <h3 class="text-xl font-black text-amber-400 mb-2">Clearance Confirmed</h3>
                    <p class="text-xs text-gray-300 mb-4">Thank you ${clientName}! Your 6-Months Warranty is locked.</p>
                    <button id="closeCrmModal" class="bg-amber-500 text-slate-950 px-6 py-2 rounded-xl">Acknowledge</button>
                `;
            } else {
                modalContent.innerHTML = `
                    <div class="text-4xl mb-3">😞</div>
                    <h3 class="text-xl font-black text-red-400 mb-2">Priority Escalation</h3>
                    <p class="text-xs text-gray-300 mb-4">We're sorry ${clientName}. Senior Lead is scheduled for a free re-visit.</p>
                    <button id="closeCrmModal" class="bg-red-500 text-white px-6 py-2 rounded-xl">Connect Support</button>
                `;
            }
        });
    }
});

// Toggle Location Handler
function toggleCustomLocation() {
    const locSelect = document.getElementById("locationSelect");
    const customBlock = document.getElementById("customLocationBlock");
    customBlock.style.display = (locSelect.value === "Other") ? "block" : "none";
}
