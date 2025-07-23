// Ensure all DOM content is loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {

    // --- Hamburger menu toggle ---
    const hamburger = document.getElementById('hamburger');
    const navUl = document.querySelector('nav ul');

    if (hamburger && navUl) {
        hamburger.addEventListener('click', function() {
            navUl.classList.toggle('active');
            hamburger.classList.toggle('active');
            // Update ARIA attribute for accessibility
            const isExpanded = navUl.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
        });
    }

    // --- Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const toggleImg = document.getElementById('toggle-img');

    if (themeToggle && toggleImg) {
        themeToggle.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                toggleImg.src = 'assets/kdjimage2.png'; // Dark mode icon
                toggleImg.alt = 'Light Mode'; // Update alt text for accessibility
            } else {
                toggleImg.src = 'assets/image1.jpg'; // Light mode icon
                toggleImg.alt = 'Dark Mode'; // Update alt text for accessibility
            }
        });
    }

    // --- Star Rating Functionality ---
    // Apply event listeners to all star spans within any .rating container
    document.querySelectorAll('.rating span').forEach(star => {
        star.addEventListener('click', function () {
            let ratingContainer = this.parentNode;
            // Remove 'selected' class from all stars in the current rating container
            ratingContainer.querySelectorAll('span').forEach(s => s.classList.remove('selected'));
            // Add 'selected' class to the clicked star and all preceding siblings
            for (let i = 0; i <= Array.from(ratingContainer.children).indexOf(this); i++) {
                ratingContainer.children[i].classList.add('selected');
            }
        });
    });

    // --- Feedback Buttons Functionality ---
    document.querySelectorAll('.feedback-btn').forEach(button => {
        button.addEventListener('click', function () {
            const feedbackInput = this.previousElementSibling; // Gets the input field right before the button
            const feedback = feedbackInput.value.trim(); // Get value and remove leading/trailing whitespace

            if (feedback) {
                // Encode the feedback to ensure it's safe for URL (e.g., handles spaces)
                window.location.href = `mailto:rahulrathore39769@gmail.com?subject=Portfolio Project Feedback&body=${encodeURIComponent(feedback)}`;
                feedbackInput.value = ''; // Clear the input field after sending
            } else {
                alert("Please enter your feedback before sending!");
            }
        });
    });

}); // End DOMContentLoaded