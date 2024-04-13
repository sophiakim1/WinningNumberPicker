const pool = Array(49)
    .fill(null)
    .map((_, i) => i + 1)

const picks = []
const circles = document.querySelectorAll('.result');
const resultContainer = document.querySelector('.resultContainer');

function generateLotteryNumbers() {
    picks.length = 0; // Clear the picks array
    pool.sort(() => Math.random() - 0.5); // Shuffle the pool

        for (let i = 0; i < 6; i++) {
            picks.push(pool.shift()); // Remove the first element from the pool
        }

        circles.forEach((circle, index) => {
        circle.style.animation = 'none'; // Reset animation
        circle.innerHTML = ''; // Clear previous content
        circle.style.left = '100%'; // Move to the right initially
        circle.offsetHeight; // Trigger reflow
        setTimeout(() => {
            circle.style.animation = 'rolling 0.5s ease-out forwards'; // Apply animation
            circle.style.left = '0'; // Move to the left
            circle.innerHTML = picks[index];
        }, index * 200); // Delay each number reveal by 200ms
    });
}

document.getElementById('generateBtn').addEventListener('click', function() {
    generateLotteryNumbers();

    // Clear the pool after generating numbers
    pool.length = 0;

    // Re-initialize the pool array with the numbers 1 to 49
    pool.push(...Array(49).keys().map(i => i + 1));
});

// Generate lottery numbers on page load
generateLotteryNumbers();