// State Management
const state = {
    currentScreen: 'homeScreen',
    streak: 1,
    score: 0,
    currentStory: null,
    challengeCompleted: false,
    progressPercentage: 0
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    attachEventListeners();
});

function initializeApp() {
    updateStats();
    showScreen('homeScreen');
}

function attachEventListeners() {
    // Story cards click handlers
    document.querySelectorAll('.story-card').forEach(card => {
        card.addEventListener('click', () => {
            const storyId = card.dataset.story;
            openStory(storyId);
        });
    });

    // Continue buttons
    document.querySelectorAll('.continue-button').forEach(button => {
        button.addEventListener('click', () => {
            const nextLevel = button.dataset.next;
            showNextLevel(nextLevel);
        });
    });

    // Back button
    document.querySelector('.back-button').addEventListener('click', () => {
        showScreen('homeScreen');
        resetStoryLevels();
    });

    // Challenge submit button
    document.getElementById('submitChallenge').addEventListener('click', submitChallenge);

    // Finish story button
    document.getElementById('finishStory').addEventListener('click', () => {
        completeStory();
    });

    // Completion screen buttons
    document.getElementById('readAnotherButton').addEventListener('click', () => {
        showScreen('homeScreen');
        resetStoryLevels();
    });

    document.getElementById('enableNotifs').addEventListener('click', () => {
        alert('Notifications would be enabled here! 🔔\n\n(This is just a prototype)');
        showScreen('homeScreen');
        resetStoryLevels();
    });
}

// Navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    state.currentScreen = screenId;
}

// Story Functions
function openStory(storyId) {
    state.currentStory = storyId;
    showScreen('storyScreen');
    resetStoryLevels();
    updateProgressBar(10);

    // Show tooltip only on first story
    if (state.score === 0) {
        document.querySelector('.first-time-tooltip').style.display = 'block';
    } else {
        document.querySelector('.first-time-tooltip').style.display = 'none';
    }
}

function showNextLevel(levelId) {
    const level = document.getElementById(levelId);

    if (level) {
        level.classList.remove('hidden');
        level.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Update progress based on level
        if (levelId === 'level2') {
            updateProgressBar(30);
            // Award points for reading to level 2
            state.score += 5;
            updateStats();
        } else if (levelId === 'level3') {
            updateProgressBar(50);
            // Award points for reading multiple perspectives
            state.score += 10;
            updateStats();
        } else if (levelId === 'level4') {
            updateProgressBar(80);
            // Award points for deep dive
            state.score += 15;
            updateStats();
        }
    }
}

function resetStoryLevels() {
    // Hide all levels except level 1
    document.querySelectorAll('.story-level').forEach((level, index) => {
        if (index > 0) {
            level.classList.add('hidden');
        }
    });

    // Reset challenge
    state.challengeCompleted = false;
    document.getElementById('challengeResult').classList.add('hidden');
    document.getElementById('teachableAfterChallenge').classList.add('hidden');
    document.getElementById('continueToLevel4').classList.add('hidden');
    document.querySelectorAll('input[name="challenge"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Reset progress
    updateProgressBar(0);
}

// Challenge Functions
function submitChallenge() {
    const selected = Array.from(document.querySelectorAll('input[name="challenge"]:checked'))
        .map(checkbox => checkbox.value);

    if (selected.length === 0) {
        alert('Please select at least one answer!');
        return;
    }

    const correctAnswers = ['cnn', 'fox'];
    const isCorrect = correctAnswers.every(answer => selected.includes(answer)) &&
                     selected.length === correctAnswers.length;

    showChallengeResult(isCorrect);
    state.challengeCompleted = true;
    updateProgressBar(65);
}

function showChallengeResult(isCorrect) {
    const resultDiv = document.getElementById('challengeResult');
    const teachableDiv = document.getElementById('teachableAfterChallenge');
    const continueButton = document.getElementById('continueToLevel4');

    if (isCorrect) {
        resultDiv.className = 'challenge-result correct';
        resultDiv.innerHTML = `
            <div class="result-title correct">✅ Correct!</div>
            <div class="result-explanation">
                Both CNN's "hard-won" and "victory" and Fox's "despite concerns"
                are loaded words that signal bias. The AP headline uses neutral,
                process-focused language.
            </div>
            <div class="result-points">+15 points 🎯</div>
        `;

        // Award points
        state.score += 15;
        updateStats();

        // Show achievement notification
        setTimeout(() => {
            showAchievement('Bias Detective', '🎯');
        }, 500);

    } else {
        resultDiv.className = 'challenge-result incorrect';
        resultDiv.innerHTML = `
            <div class="result-title incorrect">Not quite</div>
            <div class="result-explanation">
                CNN's "hard-won" and "victory" suggest positive bias, while
                Fox's "despite concerns" suggests negative framing. The AP
                headline is the most neutral, using factual language.
            </div>
            <div class="result-points">+5 points for trying 🎯</div>
        `;

        // Award participation points
        state.score += 5;
        updateStats();
    }

    resultDiv.classList.remove('hidden');
    teachableDiv.classList.remove('hidden');
    continueButton.classList.remove('hidden');

    // Scroll to result
    setTimeout(() => {
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);

    // Disable submit button
    document.getElementById('submitChallenge').disabled = true;
}

function showAchievement(title, emoji) {
    const achievement = document.createElement('div');
    achievement.className = 'achievement-toast';
    achievement.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            padding: 15px 25px;
            border-radius: 50px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.3);
            z-index: 10000;
            font-weight: 600;
            animation: slideDown 0.5s ease-out;
        ">
            ${emoji} Badge Unlocked: ${title}
        </div>
    `;

    document.body.appendChild(achievement);

    setTimeout(() => {
        achievement.remove();
    }, 3000);
}

// Completion Functions
function completeStory() {
    updateProgressBar(100);

    // Update final score display
    document.getElementById('finalScore').textContent = state.score;

    // Show completion screen
    setTimeout(() => {
        showScreen('completionScreen');
    }, 300);
}

// UI Updates
function updateStats() {
    document.getElementById('streakCount').textContent = state.streak;
    document.getElementById('scoreCount').textContent = state.score;
}

function updateProgressBar(percentage) {
    state.progressPercentage = percentage;
    document.getElementById('progressBar').style.width = percentage + '%';
}

// Add CSS animation for achievement
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            transform: translateX(-50%) translateY(-100px);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Testing mode - log state changes (remove in production)
window.addEventListener('keydown', (e) => {
    if (e.key === 'd' && e.ctrlKey) {
        console.log('Current State:', state);
    }
});

console.log('✨ NewMoji Prototype Loaded!');
console.log('📊 Press Ctrl+D to view current state');
