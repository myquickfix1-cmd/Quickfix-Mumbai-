document.addEventListener("DOMContentLoaded", function() {
    const leadForm = document.getElementById("leadDispatchForm");
    
    // --- 1. DYNAMIC INJECTION ---
    if (leadForm) {
        // Location Input Inject
        const locInput = document.createElement("input");
        locInput.id = "custLocation";
        locInput.type = "text";
        locInput.placeholder = "Enter your city/area";
        locInput.required = true;
        locInput.style.marginBottom = "10px";
        locInput.style.display = "block";
        leadForm.insertBefore(locInput, leadForm.querySelector('select'));

        // Fallback Container
        const fallbackDiv = document.createElement("div");
        fallbackDiv.id = "fallback-container";
        fallbackDiv.style.display = "none";
        fallbackDiv.innerHTML = '<br>Pop-up blocked? <a id="whatsappFallback" href="#" target="_blank">Click here to continue</a>';
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
            
            // GOOGLE SHEETS API CALL (Replace with your Web App URL)
            const scriptURL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE"; 
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

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerText = "Confirm Booking";
                alert("Booking submitted successfully!");
            }, 2000);
        });
    }

    // Timer & Selection code as before...
});
