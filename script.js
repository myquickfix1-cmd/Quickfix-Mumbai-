/**
 * QuickFix Mumbai - Version 5.6 Intelligent Brain
 * Part 1: Core Systems, PWA Hook, & Weekend Countdown Timer
 */
// ==========================================================================
// PWA OFFICIAL SERVICE WORKER REGISTRATION BRIDGE
// ==========================================================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('QuickFix App Terminal: Service Worker Registered Successfully', reg.scope))
            .catch(err => console.error('QuickFix App Terminal: Service Worker Registration Failed', err));
    });
}


document.addEventListener("DOMContentLoaded", function() {
    console.log("QuickFix Mumbai Terminal: Core Engine Active");

    // ==========================================================================
    // 1. 3-HOUR DYNAMIC COUNTDOWN TIMER INITIALIZATION
    // ==========================================================================
    const timerDisplay = document.getElementById("countdownTimer");
    let totalSeconds = 3 * 60 * 60; // Absolute 3 Hours in seconds

    const countdownInterval = setInterval(() => {
        if (totalSeconds <= 0) {
            // Self-resetting loop to keep urgency alive continuously
            totalSeconds = 3 * 60 * 60; 
        }

        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;

        // String padding to ensure double digits formatting (e.g., 02h : 05m : 09s)
        let formattedTime = 
            String(hours).padStart(2, '0') + "h : " + 
            String(minutes).padStart(2, '0') + "m : " + 
            String(seconds).padStart(2, '0') + "s";

        if (timerDisplay) {
            timerDisplay.textContent = formattedTime;
        }

        totalSeconds--;
    }, 1000);

    // ==========================================================================
    // 2. NATIVE PWA 1-CLICK APP INSTALLATION ENGINE
    // ==========================================================================
    let deferredPrompt;
    const pwaBtn = document.getElementById("pwaInstallBtn");

    window.addEventListener('beforeinstallprompt', (e) => {
        // Intercept and hold browser's default automated popup
        e.preventDefault();
        deferredPrompt = e;
        // Light up the UI button to show app is ready for deployment
        if (pwaBtn) {
            pwaBtn.style.display = "block";
        }
    });

    if (pwaBtn) {
        pwaBtn.addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt(); // Fire native Android/iOS setup shell
                const { outcome } = await deferredPrompt.userChoice;
                console.log(`User installation preference: ${outcome}`);
                deferredPrompt = null; // Flush stream memory
            } else {
                alert("QuickFix App Terminal is already installed or ready in standalone execution context.");
            }
        });
     // ==========================================================================
    // 3. E-COMMERCE BRAND AND ERROR CODE CHAINING LOGIC
    // ==========================================================================
    const brandSelect = document.getElementById("brandSelect");
    const issueSelect = document.getElementById("issueSelect");
    const voiceNodeBlock = document.getElementById("voiceNodeBlock");

    // Corporate data matrix pairing elite brands with advanced technical issues
    const brandIssues = {
        "Samsung": [
            "Smart Refrigerator Inverter Compressor Error",
            "Triple-Cooling Cycle Sensor Blinking Fault",
            "Front-Load Digital Control Board Error Code 4E",
            "Advanced PCB Circuit Component Burnout"
        ],
        "LG": [
            "Linear Compressor Pressure Drop Fault",
            "Dual Inverter AC Error Code CH05 (Communication)",
            "AI Direct Drive Washer Rotor Hall Sensor Issue",
            "Advanced PCB & Main Inverter Relay Failure"
        ],
        "Bosch": [
            "Thermodynamic Cycle Calibration Failure",
            "EcoSilence Dishwasher E15 Water Leakage Protocol",
            "Front-Load Drum Overload Unbalance Sequence",
            "Elite Control Module Micro-Soldering Requirement"
        ],
        "Daikin": [
            "Variable Refrigerant Volume (VRV) Error Code U4",
            "Multi-Split Inverter Outdoor Loop Board Failure",
            "Cross-Flow Fan Motor Ground Isolation Fault",
            "Advanced PCB Inverter Circuit Thermal Protection"
        ],
        "Panasonic": [
            "Econavi Smart Sensor Matrix Disconnection",
            "Inverter Micro-Wave Magnetron Emission Recovery",
            "Twin-Cool AC Compressor Core Discharge Error",
            "Main Distribution Control PCB Micro-Short Circuit"
        ]
    };

    if (brandSelect && issueSelect) {
        brandSelect.addEventListener("change", function() {
            const selectedBrand = brandSelect.value;
            
            // Flush current dynamic options cache
            issueSelect.innerHTML = '<option value="" disabled selected>Choose Specific Problem</option>';
            
            if (selectedBrand === "Other") {
                // Trigger Option 4: Deploy voice node interface wrapper
                issueSelect.disabled = false;
                issueSelect.innerHTML = '<option value="Custom Voice Node Payload Locked">Custom Error Protocol Selected</option>';
                if (voiceNodeBlock) voiceNodeBlock.classList.remove("hidden");
            } else if (brandIssues[selectedBrand]) {
                // De-activate voice module if brand is fixed
                if (voiceNodeBlock) voiceNodeBlock.classList.add("hidden");
                issueSelect.disabled = false;
                
                // Construct branded dynamic options matrix loop
                brandIssues[selectedBrand].forEach(function(issue) {
                    const option = document.createElement("option");
                    option.value = issue;
                    option.textContent = issue;
                    issueSelect.appendChild(option);
                });
            } else {
                issueSelect.disabled = true;
                if (voiceNodeBlock) voiceNodeBlock.classList.add("hidden");
            }     // ==========================================================================
    // 4. LIVE ACTIVITY POPUP SIMULATION ENGINE (MUMBAI ELITE TOWERS)
    // ==========================================================================
    const popupEl = document.getElementById("liveSimulationPopup");
    const popupTitle = document.getElementById("popupTitle");
    const popupBody = document.getElementById("popupBody");

    // Luxury configurations targeting elite locations & premium brands
    const locations = [
        "Lodha World Towers, Lower Parel",
        "Raheja Artesia, Worli",
        "Taj Wellington Mews, Colaba",
        "Oberoi Exquisite, Goregaon",
        "Planet Godrej, Mahalaxmi",
        "Pali Hill, Bandra",
        "Juhu Scheme, Juhu"
    ];

    const alerts = [
        { title: "⚡ VIP Dispatch", body: "Senior Corporate Fleet Engineer deployed for Bosch Thermodynamic Cycle Calibration." },
        { title: "⚡ System Live", body: "Advanced PCB Circuit Micro-Soldering completed for Samsung Triple-Cooler." },
        { title: "⚡ Express Order", body: "Daikin VRV Inverter multi-split error loop resolved successfully." },
        { title: "⚡ Quality Control", body: "LG Linear Compressor pressure drop fault verified and warranty locked." }
    ];

    function triggerLivePopup() {
        if (!popupEl || !popupTitle || !popupBody) return;

        // Randomize elite parameters to keep presentation authentic
        const randomLoc = locations[Math.floor(Math.random() * locations.length)];
        const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];

        // Map strings into the active DOM components
        popupTitle.textContent = randomAlert.title;
        popupBody.innerHTML = `<strong>📍 ${randomLoc}</strong><br>${randomAlert.body}`;

        // Trigger CSS animation slide-in pipeline
        popupEl.classList.add("popup-active");

        // Maintain display configuration state for 5 absolute seconds
        setTimeout(() => {
            popupEl.classList.remove("popup-active");
        }, 5000);
    }

    // Initialize 20-second continuous activity daemon cycle
    if (popupEl) {
        setTimeout(triggerLivePopup, 3000); // First ignition delay
        setInterval(triggerLivePopup, 20000);
    }

        
                    // ==========================================================================
    // 5. DUAL WHATSAPP LEAD DISPATCH ENGINE (BOOM BOOK SYSTEM)
    // ==========================================================================
    const leadForm = document.getElementById("leadDispatchForm");

    if (leadForm) {
        leadForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Hold native submit cycle

            // Fetch core UI parameters
            const name = document.getElementById("custName").value.trim();
            const phone = document.getElementById("custPhone").value.trim();
            const brand = document.getElementById("brandSelect").value;
            const issue = document.getElementById("issueSelect").value;
            const instructions = document.getElementById("towerInstructions").value.trim() || "None";
            
            // Radio button priority handling safely
            const priorityEl = document.querySelector('input[name="dispatchTier"]:checked');
            const priority = priorityEl ? priorityEl.value : "Standard";

            // 📍 SMART LOCATION HANDLING: Check if user selected "Other"
            let finalLocation = document.getElementById("locationSelect").value;
            if (finalLocation === "Other") {
                finalLocation = document.getElementById("customLocationInput").value.trim();
            }

            // DATA SAFETY VALVE: Guard rails to check missing info
            if (!name) {
                alert("⚠️ Please enter your Name before booking!");
                return;
            }
            if (!phone || phone.length < 10) {
                alert("⚠️ Please enter a valid 10-digit Phone Number!");
                return;
            }
            if (!brand) {
                alert("⚠️ Please select your Appliance Brand!");
                return;
            }
            if (!issue) {
                alert("⚠️ Please specify the Diagnostic Issue!");
                return;
            }
            if (!finalLocation) {
                alert("⚠️ Please select or type your Location!");
                return;
            }

            // Construct corporate standardized payload layout
            const textPayload = 
                `🚀 *QUICKFIX MUMBAI ELITE LEAD DISPATCH* \n\n` +
                `👤 *Customer Name:* ${name}\n` +
                `📱 *Connection Line:* ${phone}\n` +
                `📍 *Service Location:* ${finalLocation}\n` +
                `⚙️ *Appliance Brand:* ${brand}\n` +
                `🔧 *Diagnostic Issue:* ${issue}\n` +
                `🏢 *Tower Protocol Box:* ${instructions}\n` +
                `⚡ *Deployment Priority:* ${priority}\n\n` +
                `⏳ *System Status:* Verification Protocol Initialized.`;

            const encodedMessage = encodeURIComponent(textPayload);

            // Execute Dual-Push Data Payload Routing Script
            const primaryURL = `https://wa.me{encodedMessage}`;
            const secondaryURL = `https://wa.me{encodedMessage}`;

            // Trigger parallel background process via dynamic multi-threading frames
            const hiddenFrame = document.createElement("iframe");
            hiddenFrame.src = secondaryURL;
            hiddenFrame.style.display = "none";
            document.body.appendChild(hiddenFrame);

            // Maintain slight memory cycle block before pushing the interactive UI stream
            setTimeout(() => {
                if (document.body.contains(hiddenFrame)) {
                    document.body.removeChild(hiddenFrame);
                }
                window.location.href = primaryURL; // Fire primary visible link data channel
            }, 800);
        });
    }

    // ==========================================================================
    // 6. CROWN JEWEL GATEWAY: "MUDE KI BAAT" HAPPY VS BAD CRM ENGINE
    // ==========================================================================
    const feedbackForm = document.getElementById("feedbackGatewayForm");
    const overlay = document.getElementById("crmModalOverlay");
    const modalContent = document.getElementById("crmModalContent");

    if (feedbackForm && overlay && modalContent) {
        feedbackForm.addEventListener("submit", function(e) {
            e.preventDefault();

            // Fetch post-work evaluation parameters
            const clientName = document.getElementById("feedName").value.trim();
            const clientTower = document.getElementById("feedTower").value.trim();
            const scoreStatus = document.getElementById("feedSatisfaction").value; // Yes or No check

            // Inject the dynamic visual layout stream
            overlay.classList.add("modal-open");

            if (scoreStatus === "Yes") {
                // CONDITION A: HAPPY CUSTOMER PIPELINE (5-STAR LIVE OVERRIDE)
                modalContent.className = "w-full max-w-sm rounded-2xl p-6 text-center shadow-2xl transition transform scale-100 warranty-gold-card text-white";
                modalContent.innerHTML = `
                    <div class="text-4xl mb-3">🛡️</div>
                    <h3 class="text-xl font-black text-amber-400 mb-2 uppercase tracking-wide">Clearance Confirmed</h3>
                    <p class="text-xs text-gray-300 leading-relaxed mb-4">
                        Thank you, <span class="font-extrabold text-white">${clientName}</span>! We are thrilled to hear you had a great experience at <span class="font-medium text-gray-200">${clientTower}</span>. 
                        <br><br>
                        <strong>Enjoy Your 6-Months Assured Warranty & Free Revisit Protection!</strong> Your premium priority profile status is officially locked.
                    </p>
                    <button id="closeCrmModal" class="bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold px-6 py-2 rounded-xl uppercase tracking-wider transition">Acknowledge</button>
                `;

                // INTERCEPT & AUTOMATIC OVERRIDE LOOP: Append the custom review live into the grid as 5-Star
                const reviewsGrid = document.getElementById("reviewsGrid");
                if (reviewsGrid) {
                    const newCard = document.createElement("div");
                    newCard.className = "bg-[#1E293B]/40 border border-gray-800 rounded-xl p-4";
                    newCard.innerHTML = `
                        <div class="flex justify-between items-center mb-1">
                            <span class="font-bold text-xs text-white">${clientName}</span>
                            <span class="text-amber-400 text-xs">⭐⭐⭐⭐⭐</span>
                        </div>
                        <p class="text-gray-500 font-mono text-[10px] uppercase mb-1">📍 ${clientTower}</p>
                        <p class="text-xs text-gray-300">"${document.getElementById("feedText").value.trim() || "Excellent premium appliance maintenance parameters deployed."}"</p>
                    `;
                    reviewsGrid.insertBefore(newCard, reviewsGrid.firstChild);
                }

            } else {
                // CONDITION B: BAD CUSTOMER SAFETY VALVE (BYPASS PUBLIC DISPLAY & TRIGGER RECOVERY)
                modalContent.className = "w-full max-w-sm rounded-2xl p-6 text-center shadow-2xl transition transform scale-100 apology-red-card text-white";
                modalContent.innerHTML = `
                    <div class="text-4xl mb-3">😞</div>
                    <h3 class="text-xl font-black text-red-400 mb-2 uppercase tracking-wide">Priority Escalation</h3>
                    <p class="text-xs text-gray-300 leading-relaxed mb-4">
                        Dear <span class="font-extrabold text-white">${clientName}</span>, we are extremely sorry that our service didn't meet your expectations. Your total satisfaction is our highest corporate priority.
                        <br><br>
                        Don't worry! We are scheduling a <strong>priority complementary re-visit with our Senior Corporate Fleet Lead</strong> to resolve your issue permanently at <strong>₹0 charge</strong>.
                    </p>
                    <button id="closeCrmModal" class="bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-6 py-2 rounded-xl uppercase tracking-wider transition">Connect Support</button>
                `;
            }
        });

        // Close Modal Script Logic
        document.addEventListener("click", function(e) {
            if (e.target && e.target.id === "closeCrmModal") {
                overlay.classList.remove("modal-open");
            }
        });
    }
}); // Main DOMContentLoaded Closing Bridge (Line 323 Fixed)

// ==========================================================================
// GLOBALLY ACCESSIBLE TOGGLE FUNCTION FOR CUSTOM LOCATION INPUT
// ==========================================================================
function toggleCustomLocation() {
    const locationSelect = document.getElementById("locationSelect");
    const customLocationBlock = document.getElementById("customLocationBlock");
    const customLocationInput = document.getElementById("customLocationInput");

    if (locationSelect && locationSelect.value === "Other") {
        customLocationBlock.style.display = "block";
        customLocationInput.required = true; // Makes typing location mandatory
    } else {
        if (customLocationBlock) customLocationBlock.style.display = "none";
        if (customLocationInput) {
            customLocationInput.required = false;
            customLocationInput.value = ""; // Reset value cache securely
        }
    }
}



    // ==========================================================================
    // 6. CROWN JEWEL GATEWAY: "MUDE KI BAAT" HAPPY VS BAD CRM ENGINE
    // ==========================================================================
    const feedbackForm = document.getElementById("feedbackGatewayForm");
    const overlay = document.getElementById("crmModalOverlay");
    const modalContent = document.getElementById("crmModalContent");

    if (feedbackForm && overlay && modalContent) {
        feedbackForm.addEventListener("submit", function(e) {
            e.preventDefault();

            // Fetch post-work evaluation parameters
            const clientName = document.getElementById("feedName").value.trim();
            const clientTower = document.getElementById("feedTower").value.trim();
            const scoreStatus = document.getElementById("feedSatisfaction").value; // Yes or No check

            // Inject the dynamic visual layout stream
            overlay.classList.add("modal-open");

            if (scoreStatus === "Yes") {
                // CONDITION A: HAPPY CUSTOMER PIPELINE (5-STAR LIVE OVERRIDE)
                modalContent.className = "w-full max-w-sm rounded-2xl p-6 text-center shadow-2xl transition transform scale-100 warranty-gold-card text-white";
                modalContent.innerHTML = `
                    <div class="text-4xl mb-3">🛡️</div>
                    <h3 class="text-xl font-black text-amber-400 mb-2 uppercase tracking-wide">Clearance Confirmed</h3>
                    <p class="text-xs text-gray-300 leading-relaxed mb-4">
                        Thank you, <span class="font-extrabold text-white">${clientName}</span>! We are thrilled to hear you had a great experience at <span class="font-medium text-gray-200">${clientTower}</span>. 
                        <br><br>
                        <strong>Enjoy Your 6-Months Assured Warranty & Free Revisit Protection!</strong> Your premium priority profile status is officially locked.
                    </p>
                    <button id="closeCrmModal" class="bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold px-6 py-2 rounded-xl uppercase tracking-wider transition">Acknowledge</button>
                `;

                // INTERCEPT & AUTOMATIC OVERRIDE LOOP: Append the custom review live into the grid as 5-Star
                const reviewsGrid = document.getElementById("reviewsGrid");
                if (reviewsGrid) {
                    const newCard = document.createElement("div");
                    newCard.className = "bg-[#1E293B]/40 border border-gray-800 rounded-xl p-4";
                    newCard.innerHTML = `
                        <div class="flex justify-between items-center mb-1">
                            <span class="font-bold text-xs text-white">${clientName}</span>
                            <span class="text-amber-400 text-xs">⭐⭐⭐⭐⭐</span>
                        </div>
                        <p class="text-gray-500 font-mono text-[10px] uppercase mb-1">📍 ${clientTower}</p>
                        <p class="text-xs text-gray-300">"${document.getElementById("feedText").value.trim() || "Excellent premium appliance maintenance parameters deployed."}"</p>
                    `;
                    reviewsGrid.insertBefore(newCard, reviewsGrid.firstChild);
                }

            } else {
                // CONDITION B: BAD CUSTOMER SAFETY VALVE (BYPASS PUBLIC DISPLAY & TRIGGER RECOVERY)
                modalContent.className = "w-full max-w-sm rounded-2xl p-6 text-center shadow-2xl transition transform scale-100 apology-red-card text-white";
                                                modalContent.innerHTML = `
                    <div class="text-4xl mb-3">😞</div>
                    <h3 class="text-xl font-black text-red-400 mb-2 uppercase tracking-wide">Priority Escalation</h3>
                    <p class="text-xs text-gray-300 leading-relaxed mb-4">
                        Dear <span class="font-extrabold text-white">${clientName}</span>, we are extremely sorry that our service didn't meet your expectations. Your total satisfaction is our highest corporate priority.
                        <br><br>
                        Don't worry! We are scheduling a <strong>priority complementary re-visit with our Senior Corporate Fleet Lead</strong> to resolve your issue permanently at <strong>₹0 charge</strong>.
                    </p>
                    <button id="closeCrmModal" class="bg-red-500 hover:bg-red-600 text-white text-xs font-bold px-6 py-2 rounded-xl uppercase tracking-wider transition">Connect Support</button>
                `;
            } // Yeh Condition B (else) ka closing bracket hai


            // Bind closure logic to flush modal instance memory
            document.getElementById("closeCrmModal").addEventListener("click", () => {
                overlay.classList.remove("modal-open");
                feedbackForm.reset();
            });
        });
    }

        }
                                                   }
});
