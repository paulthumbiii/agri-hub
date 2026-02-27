/* =========================================
   AgriHub Logic Script
   ========================================= */

   document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. HANDLE LOGIN REDIRECTS ---
    const loginForm = document.querySelector('form');
    const emailInput = document.querySelector('input[type="email"]');
    const loginButton = document.querySelector('.btn-submit');

    // Only run this if we are on the login page
    if (loginForm && window.location.pathname.includes('login.html')) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop the form from reloading
            
            const email = emailInput.value.toLowerCase();

            // Simple "Mock" Logic for the Demo
            if (email.includes('admin')) {
                // If email has 'admin', go to Admin Panel
                alert("Login Successful! Redirecting to Admin Panel...");
                window.location.href = 'admin panel.html';
            } else if (email.includes('farmer')) {
                // If email has 'farmer', go to Dashboard
                alert("Welcome back, Farmer! Redirecting to Dashboard...");
                window.location.href = 'dashboard.html';
            } else {
                // Everyone else goes to Marketplace
                alert("Login Successful! Redirecting to Marketplace...");
                window.location.href = 'product.html';
            }
        });
    }

    // --- 2. HANDLE REGISTRATION ---
    if (window.location.pathname.includes('register.html')) {
        const registerForm = document.querySelector('form');
        if(registerForm) {
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert("Account created successfully! Please login.");
                window.location.href = 'login.html';
            });
        }
    }

    // --- 3. HANDLE M-PESA PAYMENT SIMULATION ---
    // Only run on checkout page
    if (window.location.pathname.includes('checkout.html')) {
        const payBtn = document.querySelector('.btn-submit');
        
        if (payBtn) {
            payBtn.onclick = null; // Remove the inline onclick from HTML
            payBtn.addEventListener('click', () => {
                const phoneInput = document.querySelector('input[placeholder="07XX XXX XXX"]');
                
                if (phoneInput.value.length < 10) {
                    alert("Please enter a valid M-Pesa phone number.");
                    return;
                }

                // Simulate "Processing"
                payBtn.textContent = "Processing STK Push...";
                payBtn.style.backgroundColor = "#999";
                payBtn.disabled = true;

                setTimeout(() => {
                    // Simulate Success after 3 seconds
                    alert("✅ Payment Successful! \n\nAmount: KSh 1,100\nRef: QKH45Z890");
                    window.location.href = 'index.html'; // Go back home
                }, 3000);
            });
        }
    }

    // --- 4. HANDLE "ADD PRODUCT" (Dashboard) ---
    if (window.location.pathname.includes('dashboard.html')) {
        const publishBtn = document.querySelector('.btn-submit');
        if(publishBtn) {
            publishBtn.addEventListener('click', () => {
                alert("Product Published Successfully!\n\nNote: Admin must approve pricing before it appears in the store.");
                // In a real app, this would send data to a database
            });
        }
    }
});