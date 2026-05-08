// ==========================================
// SHARED FUNCTIONS FOR BWS WBL ASSESSMENT
// ==========================================

// Calculate score for a specific item
function calculateScore(itemNum, weight) {
    const scoreValue = document.getElementById(`item${itemNum}`).value;
    if (scoreValue) {
        const calculatedScore = parseFloat(scoreValue) * weight;
        document.getElementById(`score${itemNum}`).textContent = calculatedScore.toFixed(1);
        calculateTotal();
    } else {
        document.getElementById(`score${itemNum}`).textContent = '—';
        calculateTotal();
    }
}

// Calculate total score (for logbook page)
function calculateTotal() {
    let total = 0;
    for (let i = 1; i <= 5; i++) {
        const scoreElement = document.getElementById(`score${i}`);
        if (scoreElement && scoreElement.textContent !== '—') {
            total += parseFloat(scoreElement.textContent);
        }
    }
    const totalElement = document.getElementById('totalScore');
    if (totalElement) {
        totalElement.textContent = total.toFixed(1);
    }
}

// Set today's date as default
function setDefaultDate() {
    const dateElement = document.getElementById('assessmentDate');
    if (dateElement) {
        dateElement.valueAsDate = new Date();
    }
}

// Initialize form on page load
document.addEventListener('DOMContentLoaded', function() {
    setDefaultDate();
});