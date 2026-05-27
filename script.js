// ==========================================
// QUICKFIX MUMBAI - AUTOMATIC FESTIVAL BANNER
// ==========================================
(function() {
    const bannerHTML = `
    <div id="offer-banner" class="bg-gradient-to-r select-none from-red-600 to-orange-500 text-white text-center py-3 px-4 font-sans font-bold shadow-md w-full relative z-50">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
            
            <div class="flex items-center gap-2 justify-center">
                <span class="animate-pulse bg-white text-red-600 text-xs px-2 py-1 rounded-full uppercase tracking-wider font-extrabold shadow-sm">LIVE OFFER</span>
                <p class="text-sm sm:text-base">🌙 Eid Special: <span class="text-yellow-300 text-lg font-black">25% OFF</span> on All Repairs!</p>
            </div>

            <div class="text-xs sm:text-sm bg-black/20 px-3 py-1.5 rounded-lg border border-white/10 text-center flex items-center justify-center gap-1">
                Base 📆 <span class="text-white">Offer:</span> <span class="text-yellow-300">28 May</span> se <span class="text-yellow-300">03 June 2026</span> tak
            </div>

            <div class="flex items-center gap-2 bg-black/40 px-4 py-1.5 rounded-lg border border-yellow-400/30 shadow-inner justify-center">
                <span id="timer-label" class="text-xs tracking-wider text-orange-200 uppercase animate-pulse">⏳ ENDS IN:</span>
                <div class="flex gap-1 text-sm font-mono tracking-wider text-yellow-300">
                    <span id="timer-days" class="bg-red-700 px-1.5 py-0.5 rounded text-white font-bold">00</span>d :
                    <span id="timer-hours" class="bg-red-700 px-1.5 py-0.5 rounded text-white font-bold">00</span>h :
                    <span id="timer-mins" class="bg-red-700 px-1.5 py-0.5 rounded text-white font-bold">00</span>m :
                    <span id="timer-secs" class="bg-red-700 px-1.5 py-0.5 rounded text-white font-bold">00</span>s
                </div>
            </div>

        </div>
    </div>`;

    function injectBanner() {
        if (!document.getElementById("offer-banner")) {
            document.body.insertAdjacentHTML('afterbegin', bannerHTML);
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
