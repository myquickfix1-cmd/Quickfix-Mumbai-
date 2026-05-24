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
                <span>${prob}</span>
            </label>
        `;
    });
}

function bookDirect(keyName) {
    const checkedOption = document.querySelector(`input[name="prob_radio_${keyName}"]:checked`);
    if(!checkedOption) { alert("Please click on your issue!"); return; }
    const chosenProblem = checkedOption.value;
    const finalText = `Hello Quickfix! I want to book an expert technician visit for my *${keyName}*. Problem type identified: *${chosenProblem}*. Please share available slot.`;
    window.open(`https://wa.me/919930249182?text=${encodeURIComponent(finalText)}`);
}

window.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    document.getElementById('cal-m').innerText = months[today.getMonth()];
    document.getElementById('cal-d').innerText = today.getDate();
});

function sendWA() {
    const date = document.getElementById('date').value;
    const item = document.getElementById('item').value;
    const desc = document.getElementById('desc').value;
    if(!date) { alert("Please select a date!"); return; }
    window.open(`https://wa.me/919930249182?text=Advance%20Booking%20for%20${encodeURIComponent(item)}%20on%20${encodeURIComponent(date)}.%20Problem:%20${encodeURIComponent(desc)}`);
}

function sendFeedback() {
    const name = document.getElementById('cust-name').value;
    const recommend = document.getElementById('recommend').value;
    const message = document.getElementById('feed-msg').value;
    if(!name || !message) { alert("Please fill Name and Experience!"); return; }
    const whatsappText = `📝 *NEW CUSTOMER FEEDBACK* \n\n👤 *Name:* ${name}\n📢 *Will Recommend:* ${recommend}\n💬 *Experience:* ${message}`;
    window.open(`https://wa.me/919930249182?text=${encodeURIComponent(whatsappText)}`);
}

function giveRating(stars) { alert("Thank you for your " + stars + " star rating!"); }

let currentStage = 1;
setInterval(() => {
    const discText = document.getElementById('dynamic-disc-text');
    const slotText = document.getElementById('slots-left-text');
    const topBarText = document.getElementById('live-slots-top');
    if (currentStage === 1) {
        discText.innerText = "Flat 50% OFF";
        slotText.innerHTML = "🔥 MEGA OFFER! Only 2 early-bird slots left for tomorrow!";
        topBarText.innerText = "Today's Availability: Only 3 urgent slots left for South Mumbai";
        currentStage = 2;
    } else if (currentStage === 2) {
        discText.innerText = "Flat 25% OFF";
        slotText.innerHTML = "⚡ 50% OFF Slots Full! Only 4 slots left at 25% OFF.";
        topBarText.innerText = "🚨 Rush Alert: 6 Bookings completed in the last 2 hours!";
        currentStage = 3;
    } else {
        discText.innerText = "Flat 10% OFF";
        slotText.innerHTML = "⚠️ HURRY! Last 2 booking slots remaining for tomorrow.";
        topBarText.innerText = "Emergency Update: Almost Full! Only 1 slot left for today.";
        currentStage = 1;
    }
}, 20000);

const names = ["Amit", "Rahul", "Vikram", "Sneha", "Priyanka", "Rajesh", "Deepak"];
const locations = ["Andheri", "Borivali", "Dadar", "Bandra", "Thane", "Ghatkopar", "Colaba"];
const services = ["Washing Machine repair", "Refrigerator service", "Microwave repair", "Cloth Dryer service"];

function showFomoPopup() {
    const fomoEl = document.getElementById('live-fomo');
    const txtEl = document.getElementById('fomo-text');
    const rName = names[Math.floor(Math.random() * names.length)];
    const rLoc = locations[Math.floor(Math.random() * locations.length)];
    const rServ = services[Math.floor(Math.random() * services.length)];
    const rTime = Math.floor(Math.random() * 15) + 2;
    txtEl.innerHTML = `<b>${rName}</b> from ${rLoc} booked a <b>${rServ}</b> ${rTime} mins ago!`;
    fomoEl.classList.add('show');
    setTimeout(() => { fomoEl.classList.remove('show'); }, 4000);
}
setInterval(showFomoPopup, 12000);
setTimeout(showFomoPopup, 3000);

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); deferredPrompt = e;
    document.getElementById('pwa-prompt').style.display = 'flex';
});
document.getElementById('pwa-btn').addEventListener('click', async () => {
    if (deferredPrompt) { deferredPrompt.prompt(); deferredPrompt = null; document.getElementById('pwa-prompt').style.display = 'none'; }
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then((reg) => {
        reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing;
            newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) { window.location.reload(); }
            });
        });
    }).catch(err => console.log(err));
}
