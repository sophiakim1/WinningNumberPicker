const pool = Array(49)
    .fill(null)
    .map((_, i) => i + 1)

const picks = []
const circles = document.querySelectorAll('.result');

function generateLotteryNumbers() {
    picks.length = 0; // Clear the picks array
    pool.sort(() => Math.random() - 0.5); // Shuffle the pool

            for (let i = 0; i < 6; i++) {
                picks.push(pool.shift()); // Remove the first element from the pool
            }

            circles.forEach((circle, index) => {
                circle.innerHTML = picks[index];
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