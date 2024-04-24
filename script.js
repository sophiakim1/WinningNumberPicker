const pool = Array(49)
    .fill(null)
    .map((_, i) => i + 1)

const picks = []
const circles = document.querySelectorAll('.result');
const resultContainer = document.querySelector('.resultContainer');

function generateLotteryNumbers() {
    picks.length = 0; // Clear the picks array
    const newPool = [...pool]; // Copy of the orinial pool
    newPool.sort(() => Math.random() - 0.5); // Shuffle the pool

        for (let i = 0; i < 6; i++) {
            picks.push(newPool.shift()); // Remove the first element from the shuffled pool
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

    // Re-initialize the picks array and generate new lottery numbers
    picks.length = 0;
    generateLotteryNumbers();
});

// Generate lottery numbers on page load
generateLotteryNumbers();