document.addEventListener("DOMContentLoaded", function() {
    const leadForm = document.getElementById("leadDispatchForm");

    // --- 1. DYNAMIC INJECTION (UI Improvements) ---
    if (leadForm) {
        // Label for Location
        const label = document.createElement("label");
        label.innerText = "Location / City Area:";
        label.style.display = "block";
        label.style.fontWeight = "bold";
        label.style.marginTop = "15px"; // Gap for title
        label.style.marginBottom = "5px";

        // Location Input
        const locInput = document.createElement("input");
        locInput.id = "custLocation";
        locInput.type = "text";
        locInput.placeholder = "Enter your city/area";
        locInput.required = true;
        locInput.style.width = "100%";
        locInput.style.padding = "10px";
        locInput.style.marginBottom = "10px";
        locInput.style.boxSizing = "border-box";

        // Insert before Brand Select
        const brandSelect = document.getElementById("brandSelect");
        leadForm.insertBefore(label, brandSelect);
        leadForm.insertBefore(locInput, brandSelect);

        // Fallback Container
        const fallbackDiv = document.createElement("div");
        fallbackDiv.id = "fallback-container";
        fallbackDiv.style.display = "none";
        fallbackDiv.style.marginTop = "10px";
        fallbackDiv.innerHTML = 'Pop-up blocked? <a id="whatsappFallback" href="#" target="_blank">Click here to send manually</a>';
        leadForm.appendChild(fallbackDiv);
    }

    // --- 2. BOOKING DISPATCH ENGINE ---
    if (leadForm) {
        leadForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const name = document.getElementById("custName")?.value.trim();
            const phone = document.getElementById("custPhone")?.value.trim();
            const location = document.getElementById("custLocation")?.value.trim();
            const brand = document.getElementById("brandSelect")?.value;
            const dateInput = document.getElementById("booking-date")?.value;
            const isAdvance = document.getElementById("calendar-container")?.style.display === 'block';

            // Validation
            if (!/^\d{10}$/.test(phone)) {
                alert("⚠️ Please enter a valid 10-digit phone number!");
                return;
            }

            const submitBtn = leadForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.innerText = "Processing...";

            const dateStr = isAdvance && dateInput ? dateInput : 'Today';
            const textPayload = `🚀 *NEW BOOKING*%0A👤 *Name:* ${name}%0A📍 *Location:* ${location}%0A📱 *Phone:* ${phone}%0A📅 *Date:* ${dateStr}%0A⚙️ *Brand:* ${brand}`;
            const whatsappURL = `https://wa.me/919819832282?text=${textPayload}`;
            
            // --- SYNC TO YOUR SHEET ---
            const scriptURL = "PASTE_YOUR_WEB_APP_URL_HERE"; 
            fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                body: new URLSearchParams({ name, phone, location, brand, date: dateStr })
            }).catch(err => console.log("Sheet Sync Error:", err));

            // WhatsApp Trigger
            const newWindow = window.open(whatsappURL, '_blank');
            if (!newWindow) {
                document.getElementById("fallback-container").style.display = 'block';
                document.getElementById("whatsappFallback").href = whatsappURL;
            }

            // UI Reset
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerText = "Confirm Booking";
                alert("Booking recorded successfully!");
            }, 2000);
        });
    }

    // --- 3. OTHER LOGIC (Timer/Select) ---
    // (Aapke baaki functions yahan as-is rehenge)
});
