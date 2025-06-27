// document.getElementById('theme-toggle').addEventListener('click', function () {
//     document.body.classList.toggle('dark-mode');
// });

// document.querySelectorAll('.rating span').forEach(star => {
//     star.addEventListener('click', function() {
//         let rating = this.parentNode;
//         rating.querySelectorAll('span').forEach(s => s.classList.remove('selected'));
//         for (let i = 0; i <= Array.from(rating.children).indexOf(this); i++) {
//             rating.children[i].classList.add('selected');
//         }
//     });
// });
// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const toggleImg = document.getElementById('toggle-img');
    if (document.body.classList.contains('dark-mode')) {
        toggleImg.src = 'assets/kdjimage2.png'; // Dark mode icon
    } else {
        toggleImg.src = 'assets/ijbhdmage1.png'; // Light mode icon
    }
});

// Star Rating
document.querySelectorAll('.rating span').forEach(star => {
    star.addEventListener('click', function () {
        let rating = this.parentNode;
        rating.querySelectorAll('span').forEach(s => s.classList.remove('selected'));
        for (let i = 0; i <= Array.from(rating.children).indexOf(this); i++) {
            rating.children[i].classList.add('selected');
        }
    });
});

// Feedback Buttons
document.querySelectorAll('.feedback-btn').forEach(button => {
    button.addEventListener('click', function () {
        const feedbackInput = this.previousElementSibling;
        const feedback = feedbackInput.value;
        if (feedback) {
            window.location.href = `mailto:rahulrathore39769@gmail.com?subject=Project Feedback&body=${encodeURIComponent(feedback)}`;
        } else {
            alert("Please enter feedback before sending.");
        }
    });
});

// Hamburger Toggle for Mobile Nav
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');

        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !expanded);
    });
}
