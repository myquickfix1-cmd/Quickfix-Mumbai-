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
