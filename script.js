// =========================================================================
// QUICKFIX MUMBAI - PREMIUM BANNER WITH COMPATIBLE INLINE STYLES (NO DEPS)
// =========================================================================
(function() {
    const bannerHTML = `
    <div id="offer-banner" style="background: linear-gradient(to right, #dc2626, #f97316); color: white; padding: 15px; font-family: sans-serif; font-weight: bold; text-align: center; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); width: 100%; position: relative; z-index: 99999; border-bottom: 3px solid #facc15; box-sizing: border-box;">
        <div style="max-w: 1100px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 12px;">
            
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px;">
                <span style="background-color: white; color: #dc2626; font-size: 11px; padding: 3px 10px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">LIVE OFFER</span>
                <p style="margin: 0; font-size: 16px; letter-spacing: 0.5px;">🌙 Eid Special: <span style="color: #facc15; font-size: 18px; font-weight: 900;">25% OFF</span> on All Home Appliance Repairs!</p>
            </div>

            <div style="display: flex; align-items: center; gap: 8px; background-color: rgba(0, 0, 0, 0.35); padding: 6px 16px; border-radius: 10px; border: 1px solid rgba(254, 240, 138, 0.2); box-shadow: inset 0 2px 4px rgba(0,0,0,0.2); justify-content: center; min-width: 260px;">
                <span id="timer-label" style="font-size: 11px; letter-spacing: 1px; color: #fed7aa; text-transform: uppercase;">⏳ ENDS IN:</span>
                <div style="display: flex; gap: 4px; font-family: monospace; font-size: 15px; color: #facc15; letter-spacing: 0.5px;">
                    <span id="timer-days" style="background-color: #b91c1c; padding: 2px 6px; border-radius: 4px; color: white; font-weight: bold;">00</span>d :
                    <span id="timer-hours" style="background-color: #b91c1c; padding: 2px 6px; border-radius: 4px; color: white; font-weight: bold;">00</span>h :
                    <span id="timer-mins" style="background-color: #b91c1c; padding: 2px 6px; border-radius: 4px; color: white; font-weight: bold;">00</span>m :
                    <span id="timer-secs" style="background-color: #b91c1c; padding: 2px 6px; border-radius: 4px; color: white; font-weight: bold;">00</span>s
                </div>
            </div>

            <div style="width: 100%; max-width: 450px; background-color: rgba(255, 255, 255, 0.15); padding: 12px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.15); display: flex; flex-direction: column; gap: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); box-sizing: border-box;">
                <div style="font-size: 13px; color: #fef08a; font-weight: 500; text-align: center;">
                    📅 Apni Service Ka Din Aur Time Chunein:
                </div>
                
                <input type="date" id="banner-booking-date" style="width: 100%; background-color: white; color: #1f2937; font-size: 14px; border-radius: 8px; padding: 8px; font-weight: bold; border: none; outline: none; text-align: center; box-sizing: border-box; cursor: pointer;">
                
                <select id="banner-booking-time" style="width: 100%; background-color: white; color: #1f2937; font-size: 14px; border-radius: 8px; padding: 8px; font-weight: bold; border: none; outline: none; text-align: center; box-sizing: border-box; cursor: pointer;">
                    <option value="" disabled selected>⏰ Select Time Slot</option>
                    <option value="09:00 AM to 01:00 PM">09:00 AM to 01:00 PM (Morning)</option>
                    <option value="01:00 PM to 05:00 PM">01:00 PM to 05:00 PM (Afternoon)</option>
                    <option value="05:00 PM to 09:00 PM">05:00 PM to 09:00 PM (Evening)</option>
                    <option value="09:00 PM to 12:00 AM">09:00 PM to 12:00 AM (Midnight Rush)</option>
                </select>

                <button onclick="bookFromBanner()" style="width: 100%; background-color: #facc15; color: #b91c1c; font-size: 14px; padding: 10px; border-radius: 8px; font-weight: 900; border: none; text-transform: uppercase; letter-spacing: 1px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.15); transition: background-color 0.2s;">
                    Book Now ⚡
                </button>
            </div>

        </div>
    </div>`;

    function injectBanner() {
        if (!document.getElementById("offer-banner")) {
            document.body.insertAdjacentHTML('afterbegin', bannerHTML);
            
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            const dateInput = document.getElementById("banner-booking-date");
            if(dateInput) {
                dateInput.value = tomorrow.toISOString().split('T')[0];
                dateInput.min = new Date().toISOString().split('T')[0];
            }
            
            startEidCountdown();
        }
    }

    function startEidCountdown() {
        const startDate = new Date("May 28, 2026 00:00:00").getTime();
        const targetDate = new Date("June 3, 2026 23:59:59").getTime();

        const timerInterval = setInterval(function() {
            const now = new Date().getTime();
            const banner = document.getElementById("offer-banner");
            if (!banner) return;

            if (now < startDate) {
                const label = document.getElementById("timer-label");
                if(label) label.innerText = "⏳ STARTS IN:";
                updateDisplay(startDate - now);
                return;
            }

            const label = document.getElementById("timer-label");
            if(label) label.innerText = "⏳ ENDS IN:";
            const difference = targetDate - now;

            if (difference < 0) {
                clearInterval(timerInterval);
                banner.remove(); 
                return;
            }
            updateDisplay(difference);
        }, 1000);
    }

    function updateDisplay(timeDiff) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        const d = document.getElementById("timer-days");
        const h = document.getElementById("timer-hours");
        const m = document.getElementById("timer-mins");
        const s = document.getElementById("timer-secs");

        if(d && h && m && s) {
            d.innerText = String(days).padStart(2, '0');
            h.innerText = String(hours).padStart(2, '0');
            m.innerText = String(minutes).padStart(2, '0');
            s.innerText = String(seconds).padStart(2, '0');
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", injectBanner);
    } else {
        injectBanner();
    }
})();

// BANNER DIRECT BOOKING ROUTING FUNCTION
function bookFromBanner() {
    const selectedDate = document.getElementById("banner-booking-date").value;
    const selectedTime = document.getElementById("banner-booking-time").value;

    if(!selectedDate) { alert("Please select a service Date! "); return; }
    if(!selectedTime) { alert("Please select a Time Slot! ⏰"); return; }

    const dateObj = new Date(selectedDate);
    const formattedDate = dateObj.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

    const finalText = `Hello Quickfix Mumbai! 🌙 I want to claim the Eid 25% OFF Offer.\n\n📆 Scheduled Date: *${formattedDate}*\n⏰ Preferred Time Slot: *${selectedTime}*\n\nPlease confirm my expert technician visit!`;
    window.open(`https://wa.me/919930249182?text=${encodeURIComponent(finalText)}`);
}

// ==========================================
// QUICKFIX MUMBAI - APPLIANCE CATALOG DATA
// ==========================================
const oceanCatalog = {
    "Refrigerator": {
        images: ["https://images.unsplash.com/photo-1571175432267-efb922a1c3bb?w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1601054704854-1a2e79dea4d3?w=500&auto=format&fit=crop"],
        problems: ["Cooling Problem (Double Door/Single Door)", "Water leaking from bottom inside fridge", "Ice forming heavily in freezer (Over-freezing)", "Compressor turning on and off constantly", "Strange click-click sound / Loud vibration noise", "Gas charging & filter replacement needed"]
    },
    "WashingMachine": {
        images: ["https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1545173168-9f19472ef7f4?w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=500&auto=format&fit=crop"],
        problems: ["Drum not rotating / Only sound coming", "Water not draining out (Error code on screen)", "Machine making heavy jumping sound during spin", "Water leakage from bottom or soap tray", "Buttons or touch panel completely dead", "Front door locked / Not opening"]
    },
    "AirConditioner": {
        images: ["https://images.unsplash.com/photo-1621905252507-b354bc25edac?w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500&auto=format&fit=crop"],
        problems: ["AC not blowing cold air / Less cooling", "Water dripping/leaking from Indoor Unit", "Loud noise from outdoor or indoor unit", "AC turning off automatically after few mins", "Remote control not responding / Display error code", "Gas leakage check & Gas top-up required"]
    },
    "PCB": {
        images: ["https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=500&auto=format&fit=crop"],
        problems: ["Dead Motherboard / Appliance not turning ON", "Blinking lights / Constant error beeping noise", "IC burnout / Burnt smell from circuit board", "Relay clicking constantly but compressor doesn't start", "Inverter AC board repair / Communication error"]
    },
    "Microwave": {
        images: ["https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1585659722982-79614c0a96ef?w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1614594805323-e5a9854fea59?w=500&auto=format&fit=crop"],
        problems: ["Microwave running but not heating food", "Sparking / Burning smell inside cabinet", "Glass turntable tray not rotating", "Display is blank or buttons not working", "Door switch loose / Microwave doesn't start"]
    },
    "Dishwasher": {
        images: ["https://images.unsplash.com/photo-1581622558663-b2933377df12?w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&auto=format&fit=crop"],
        problems: ["Dishes coming out dirty", "Water pooling at the bottom / No drainage", "Leaking water during wash cycle", "Dishwasher stops midway with alarm beeps"]
    },
    "ClothDryer": {
        images: ["https://images.unsplash.com/photo-1610557892470-55d9e80e0b9b?w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1604335399105-a0c5e5ad90d1?w=500&auto=format&fit=crop"],
        problems: ["Clothes remain wet / No heat inside dryer", "Tumbling action stopped completely", "Squeaking or grinding metal sounds", "Overheating / Burning lint smell"]
    },
    "AirDresser": {
        images: ["https://images.unsplash.com/photo-1567113463300-1025f5d37ed8?w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&auto=format&fit=crop"],
        problems: ["JetSteam not creating vapor inside tank", "Bad smell / Musty odor on garments", "System showing water tank full error", "Touch screen locked / Panel frozen"]
    }
};

let loopsManager = {};

// ==========================================
// QUICKFIX MUMBAI - INTERACTIVE CARD FUNCTIONS
// ==========================================
function toggleCard(keyName) {
    const cardElement = document.getElementById(`card-${keyName}`);
    const contentBlock = document.getElementById(`content-${keyName}`);
    const slidebox = document.getElementById(`slidebox-${keyName}`);
    const problemBox = document.getElementById(`problems-${keyName}`);

    if(!cardElement || !contentBlock) return;

    if(cardElement.classList.contains('expanded')) {
        contentBlock.style.display = 'none';
        cardElement.classList.remove('expanded');
        if(loopsManager[keyName]) { clearInterval(loopsManager[keyName]); }
        return;
    }

    document.querySelectorAll('.card').forEach(c => c.classList.remove('expanded'));
    document.querySelectorAll('.inner-content').forEach(b => b.style.display = 'none');
    Object.keys(loopsManager).forEach(k => clearInterval(loopsManager[k]));

    cardElement.classList.add('expanded');
    contentBlock.style.display = 'block';

    if(slidebox && oceanCatalog[keyName]) {
        slidebox.innerHTML = "";
        oceanCatalog[keyName].images.forEach((url, i) => {
            const img = document.createElement('img');
            img.src = url;
            img.className = `slide-img ${i === 0 ? 'active' : ''}`;
            slidebox.appendChild(img);
        });

        let currentImgIdx = 0;
        const liveImages = slidebox.getElementsByClassName('slide-img');
        loopsManager[keyName] = setInterval(() => {
            if(liveImages.length > 0) {
                liveImages[currentImgIdx].classList.remove('active');
                currentImgIdx = (currentImgIdx + 1) % liveImages.length;
                liveImages[currentImgIdx].classList.add('active');
            }
        }, 2500);
    }

    if(problemBox && oceanCatalog[keyName]) {
        problemBox.innerHTML = "";
        oceanCatalog[keyName].problems.forEach((prob, idx) => {
            problemBox.innerHTML += `
                <label class="problem-row" style="display: block; margin: 8px 0; cursor: pointer;">
                    <input type="radio" name="prob_radio_${keyName}" value="${prob}" ${idx === 0 ? 'checked' : ''}>
                    <span style="margin-left: 5px;">${prob}</span>
                </label>
            `;
        });
    }
}

// ==========================================
// QUICKFIX MUMBAI - BOOKING & FORM ROUTING
// ==========================================
function bookDirect(keyName) {
    const checkedOption = document.querySelector(`input[name="prob_radio_${keyName}"]:checked`);
    if(!checkedOption) { alert("Please click on your issue!"); return; }
    const chosenProblem = checkedOption.value;
    const itemFullTitle = `${keyName} - (Issue: ${chosenProblem})`;

    if (typeof openPaymentGateway === "function") {
        openPaymentGateway(itemFullTitle);
    } else {
        const finalText = `Hello Quickfix! I want to book an expert technician visit for my *${keyName}*. Problem: *${chosenProblem}*. Please share available slot.`;
        window.open(`https://wa.me/919930249182?text=${encodeURIComponent(finalText)}`);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const calM = document.getElementById('cal-m');
    const calD = document.getElementById('cal-d');
    if(calM) calM.innerText = months[today.getMonth()];
    if(calD) calD.innerText = today.getDate();
});

function sendWA() {
    if (typeof openPaymentGatewayFromForm === "function") {
        openPaymentGatewayFromForm();
    } else {
        const date = document.getElementById('date').value;
        const item = document.getElementById('item').value;
        const desc = document.getElementById('desc').value;
        if(!date) { alert("Please select a date!"); return; }
        
        const finalText = `Hello Quickfix! I'd like to schedule a repair on *${date}* for my *${item}*.\nDescription: ${desc}`;
        window.open(`https://wa.me/919930249182?text=${encodeURIComponent(finalText)}`);
    }
}
