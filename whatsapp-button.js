(function() {
    // 1. WhatsApp Button create karein
    const waButton = document.createElement('a');
    
    // 2. Pre-filled Message (Catchy & Professional)
    waButton.href = "https://wa.me/919819832282?text=Hello QuickFix Mumbai, I need help with my home appliance repair. I am looking for genuine service in Mumbai.";
    waButton.target = "_blank";
    
    // 3. Button ka design
    waButton.innerHTML = "💬 QuickFix Mumbai"; // Catchy text
    waButton.style.position = "fixed";
    waButton.style.bottom = "20px";
    waButton.style.right = "20px";
    waButton.style.backgroundColor = "#25D366";
    waButton.style.color = "#ffffff";
    waButton.style.padding = "15px 20px";
    waButton.style.borderRadius = "50px";
    waButton.style.fontWeight = "bold";
    waButton.style.fontSize = "16px";
    waButton.style.textDecoration = "none";
    waButton.style.boxShadow = "0px 4px 12px rgba(0,0,0,0.3)";
    waButton.style.zIndex = "9999";
    waButton.style.transition = "transform 0.3s ease";

    // 4. Hover effect (optional animation)
    waButton.onmouseover = () => { waButton.style.transform = "scale(1.1)"; };
    waButton.onmouseout = () => { waButton.style.transform = "scale(1)"; };

    // 5. Body mein add karein
    document.body.appendChild(waButton);
})();
