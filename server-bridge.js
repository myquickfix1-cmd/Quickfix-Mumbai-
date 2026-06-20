// ==========================================
// ADDED: QuickFix Command Center Login Logic
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Login form ko target karna
    const loginForm = document.querySelector("form") || document.getElementById("login-form");
    
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Username aur Password inputs ki value nikalna
            const usernameInput = loginForm.querySelector('input[type="text"]').value.trim();
            const passwordInput = loginForm.querySelector('input[type="password"]').value.trim();
            
            // Error message display karne ke liye element dhoodhna
            let errorMessage = document.getElementById("error-message") || document.querySelector(".text-danger") || document.querySelector("p");

  <!-- Bridge to Service Pages -->
<section class="service-bridge">
    <h3>Our Expert Services</h3>
    <ul>
        <li><a href="2_refrigerator-repair.html">Refrigerator Repair</a></li>
        <li><a href="3_ac-repair.html">AC Repair</a></li>
        <li><a href="4_washing-machine-repair.html">Washing Machine Repair</a></li>
        <li><a href="c_1quickfixmumbai_home.html">QuickFix Mumbai Home</a></li>
        <!-- Service-to-Location Bridge Section -->
<section class="service-bridge-links">
    <h3>Expert Repair Services in this Location:</h3>
    <ul>
        <li><a href="1_index.html#advanced-appliances">Advanced Home Appliances</a></li>
        <li><a href="pcb-repair.html">Advanced PCBs & Smart Circuits</a></li>
        <li><a href="2_refrigerator-repair.html">Refrigerator Repair</a></li>
        <li><a href="5_microwave-repair.html">Microwave Magnetron Recovery</a></li>
        <li><a href="dishwasher-repair.html">Advanced Dishwashers</a></li>
        <li><a href="air-dresser-repair.html">Premium Air Dresser</a></li>
        <li><a href="dryer-repair.html">High Capacity Cloth Dryer</a></li>
        <li><a href="fridge-specialist.html">Fridge Specialists</a></li>
        <li><a href="4_washing-machine-repair.html">Washing Machine Repair</a></li>
        <li><a href="wiring-harness-repair.html">Wiring Harness & Critical Faults</a></li>
        <li><a href="3_ac-repair.html">Luxury Split AC System</a></li>
        <li><a href="motherboard-repair.html">Motherboard Repair (Chip-level)</a></li>
        <li><a href="amc-service.html">Annual Maintenance Contract (AMC)</a></li>
    </ul>
</section>
            
    </ul>
</section>
        
             // --- AAPKA LOGIN DETAILS ---
            const CORRECT_USERNAME = "admin";
            const CORRECT_PASSWORD = "AapkaNewPassword123"; // <-- Yahan apna password likhein

            if (usernameInput === CORRECT_USERNAME && passwordInput === CORRECT_PASSWORD) {
                // Login Success: Session set karke dashboard par bhejna
                localStorage.setItem("admin_logged_in", "true");
                
                if (errorMessage) {
                    errorMessage.style.color = "green";
                    errorMessage.innerText = "Access Granted! Loading Terminal...";
                }
                
                setTimeout(() => {
                    window.location.href = "/admin"; 
                }, 1000);
            } else {
                // Login Fail: Access Denied error dikhana
                if (errorMessage) {
                    errorMessage.style.color = "red";
                    errorMessage.innerText = "⚠️ Access Denied! Invalid Credentials.";
                    errorMessage.style.display = "block";
                } else {
                    alert("⚠️ Access Denied! Incorrect username or password.");
                }
            }
        });
    }
});
