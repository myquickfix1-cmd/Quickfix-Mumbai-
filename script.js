const oceanCatalog = {
    "Refrigerator": {
        images: ["https://images.unsplash.com/photo-1571175432267-efb922a1c3bb?w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1601054704854-1a2e79dea4d3?w=500&auto=format&fit=crop"],
        problems: ["Cooling Problem (Double Door/Single Door)", "Water leaking from bottom inside fridge", "Ice forming heavily in freezer (Over-freezing)", "Compressor turning on and off constantly", "Strange click-click sound / Loud vibration noise", "Gas charging & filter replacement needed"]
    },
    "WashingMachine": {
        images: ["https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1545173168-9f19472ef7f4?w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=500&auto=format&fit=crop"],
        problems: ["Drum not rotating / Only sound coming", "Water not draining out (Error code on screen)", "Machine making heavy jumping sound during spin", "Water leakage from bottom or soap tray", "Buttons or touch panel completely dead", "Front door locked / Not opening"]
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

function toggleCard(keyName) {
    const cardElement = document.getElementById(`card-${keyName}`);
    const contentBlock = document.getElementById(`content-${keyName}`);
    const slidebox = document.getElementById(`slidebox-${keyName}`);
    const problemBox = document.getElementById(`problems-${keyName}`);

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

    problemBox.innerHTML = "";
    oceanCatalog[keyName].problems.forEach((prob, idx) => {
        problemBox.innerHTML += `
            <label class="problem-row">
                <input type="radio" name="prob_radio_${keyName}" value="${prob}" ${idx === 0 ? 'checked' : ''}>
const oceanCatalog = {
    "Refrigerator": {
        images: ["https://images.unsplash.com/photo-1571175432267-efb922a1c3bb?w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1601054704854-1a2e79dea4d3?w=500&auto=format&fit=crop"],
        problems: ["Cooling Problem (Double Door/Single Door)", "Water leaking from bottom inside fridge", "Ice forming heavily in freezer (Over-freezing)", "Compressor turning on and off constantly", "Strange click-click sound / Loud vibration noise", "Gas charging & filter replacement needed"]
    },
    "WashingMachine": {
        images: ["https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1545173168-9f19472ef7f4?w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?w=500&auto=format&fit=crop"],
        problems: ["Drum not rotating / Only sound coming", "Water not draining out (Error code on screen)", "Machine making heavy jumping sound during spin", "Water leakage from bottom or soap tray", "Buttons or touch panel completely dead", "Front door locked / Not opening"]
    },
    // NEWLY ADDED: Air Conditioner (AC) Catalog Data
    "AirConditioner": {
        images: ["https://images.unsplash.com/photo-1621905252507-b354bc25edac?w=500&auto=format&fit=crop", "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500&auto=format&fit=crop"],
        problems: ["AC not blowing cold air / Less cooling", "Water dripping/leaking from Indoor Unit", "Loud noise from outdoor or indoor unit", "AC turning off automatically after few mins", "Remote control not responding / Display error code", "Gas leakage check & Gas top-up required"]
    },
    // NEWLY ADDED: Advanced PCB Repairing Catalog Data
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

// INTEGRATED WITH ₹149 SMART PAYMENT CHECKOUT GATEWAY
function bookDirect(keyName) {
    const checkedOption = document.querySelector(`input[name="prob_radio_${keyName}"]:checked`);
    if(!checkedOption) { alert("Please click on your issue!"); return; }
    const chosenProblem = checkedOption.value;
    const itemFullTitle = `${keyName} - (Issue: ${chosenProblem})`;

    // Core Payment Interception Setup
    if (typeof openPaymentGateway === "function") {
        openPaymentGateway(itemFullTitle);
    } else {
        // Fallback Mechanism
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

// ROUTED ADVANCE FORM BUTTON THROUGH PAYMENT SECURITY
function sendWA() {
    if (typeof openPaymentGatewayFromForm === "function") {
        openPaymentGatewayFromForm();
    } else {
        const date = document.getElementById('date').value;
        const item = document.getElementById('item').value;
        const desc = document.getElementById('desc').value;
        if(!date) { alert("Please select a date!"); return; }
