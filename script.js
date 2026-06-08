// --- Like & Trust Functionality ---
let liked = false;
function toggleLike(el) {
    let countEl = document.getElementById('likeCount');
    let btnEl = document.getElementById('likeBtn');
    if (!liked) {
        // Count update logic
        countEl.innerText = "258020+"; 
        btnEl.innerHTML = "Liked! ❤";
        btnEl.style.color = "#ff4757"; // Red color on like
        liked = true;
    }
}

// --- UI Selection Functionality ---
function handleSelect(el, selector) {
    document.querySelectorAll(selector).forEach(item => {
        item.classList.remove('active');
        item.style.borderColor = '#ddd';
        item.style.color = '#000';
        item.style.background = '#fff';
        item.style.fontWeight = "normal";
    });
    el.classList.add('active');
    el.style.borderColor = '#007bff';
    el.style.color = '#007bff';
    el.style.background = '#eef6ff';
    el.style.fontWeight = "bold";
}

// --- Date Field Toggle Logic ---
function toggleAdvanceFields(isAdvance) {
    const advanceFields = document.getElementById('advanceFields');
    if (isAdvance) {
        advanceFields.style.display = 'block';
    } else {
        advanceFields.style.display = 'none';
        document.getElementById('bookDate').value = ""; // Clear date if hidden
    }
}

// --- Form Submission Logic (WhatsApp Integration) ---
document.getElementById("leadDispatchForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Data Gathering
    const type = document.querySelector('.type-option.active').getAttribute('data-val');
    const level = document.querySelector('.people-option.active').getAttribute('data-val');
    const brand = document.getElementById("brandSelect").value;
    const name = document.getElementById("custName").value;
    const loc = document.getElementById("custLocation").value;
    const phone = document.getElementById("custPhone").value;
    
    // Date and Time Handling
    const dateInput = document.getElementById("bookDate").value;
    const date = dateInput ? dateInput : "Today";
    const time = document.getElementById("timeSlot").value;
    
    // Constructing the Message
    const msg = `*New Booking Request*\n\n` +
                `Type: ${type}\n` +
                `Date: ${date}\n` +
                `Time Slot: ${time}\n` +
                `Service Level: ${level}\n` +
                `Brand: ${brand}\n` +
                `Name: ${name}\n` +
                `Location: ${loc}\n` +
                `Phone: ${phone}`;

    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/919819832282?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
});
