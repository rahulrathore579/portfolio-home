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

document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const toggleImg = document.getElementById('toggle-img');
    if (document.body.classList.contains('dark-mode')) {
        toggleImg.src = 'assets/kdjimage2.png';
    } else {
        toggleImg.src = 'assets/ijbhdmage1.png';
    }
});

document.querySelectorAll('.rating span').forEach(star => {
    star.addEventListener('click', function() {
        let rating = this.parentNode;
        rating.querySelectorAll('span').forEach(s => s.classList.remove('selected'));
        for (let i = 0; i <= Array.from(rating.children).indexOf(this); i++) {
            rating.children[i].classList.add('selected');
        }
    });
});

document.querySelectorAll('.feedback-btn').forEach(button => {
    button.addEventListener('click', function() {
        const feedbackInput = this.previousElementSibling;
        const feedback = feedbackInput.value;
        if (feedback) {
            window.location.href = `mailto:rahulrathore39769@gmail.com?subject=Project Feedback&body=${encodeURIComponent(feedback)}`;
        }
    });
});