// Story Database - All content lives here
const stories = {
    ai_jobs: {
        emoji: "🤖💼📉",
        title: "Tech companies lay off workers, replace with AI",
        category: "Technology",
        readTime: "3 min",

        summary: `
            <p>Microsoft, Google, and several other tech companies announced 15,000 layoffs this week while simultaneously expanding their AI departments. Customer service, content moderation, and entry-level coding positions are being replaced by AI systems.</p>

            <p>The companies say AI improves efficiency and customer experience. Labor groups say it's eliminating middle-class jobs without retraining programs.</p>
        `,

        teachableMoment: `Notice we presented both what companies say AND what labor groups say. Showing multiple perspectives helps you form your own opinion.`,

        perspectives: [
            {
                label: "TECH INDUSTRY",
                source: "TechCrunch",
                headline: "AI automation drives record efficiency gains in customer service",
                color: "left"
            },
            {
                label: "CENTER",
                source: "Reuters",
                headline: "Tech firms cut 15,000 jobs while expanding AI divisions",
                color: "center"
            },
            {
                label: "LABOR VIEW",
                source: "The Guardian",
                headline: "Workers left behind as AI gold rush prioritizes profits over people",
                color: "right"
            }
        ],

        challenge: {
            type: "bias",
            question: "Which headline uses the most emotional language?",
            options: [
                { text: "TechCrunch's 'drives record efficiency gains'", value: "tc", correct: false },
                { text: "Reuters' 'cut jobs while expanding'", value: "reuters", correct: false },
                { text: "Guardian's 'left behind' and 'gold rush'", value: "guardian", correct: true }
            ],
            explanation: "The Guardian uses emotionally loaded phrases like 'left behind' and 'gold rush' to evoke sympathy for workers. TechCrunch frames it positively with 'efficiency gains.' Reuters sticks to neutral facts.",
            correctFeedback: "Exactly! Notice how word choice creates different emotional responses.",
            incorrectFeedback: "Not quite. 'Left behind' and 'gold rush' are emotionally charged phrases."
        },

        deepDive: {
            sources: [
                { label: "Tech Industry Analysis", url: "#" },
                { label: "Labor Economics Study", url: "#" },
                { label: "Worker Retraining Programs", url: "#" }
            ],
            modules: [
                { title: "Understanding Automation", time: "5 min", icon: "📖" },
                { title: "Economic Impact of AI", time: "7 min", icon: "📊" }
            ],
            related: [
                { emoji: "🎓💻🤖", title: "ChatGPT banned in schools" },
                { emoji: "🏭⚙️📉", title: "Factory automation debate" }
            ]
        }
    },

    student_loans: {
        emoji: "🎓💸😰",
        title: "Biden's student loan forgiveness blocked by courts",
        category: "Politics",
        readTime: "3 min",

        summary: `
            <p>A federal appeals court blocked President Biden's $400 billion student loan forgiveness plan, affecting 43 million borrowers. The plan would have canceled up to $20,000 in debt per borrower.</p>

            <p>The court ruled the administration exceeded its authority. The White House says it will appeal. Loan payments resume next month for the first time since the pandemic pause.</p>
        `,

        teachableMoment: `This story affects millions of young people directly. Notice how different news sources frame it based on their audience's political views.`,

        perspectives: [
            {
                label: "PROGRESSIVE",
                source: "MSNBC",
                headline: "Court blocks relief for struggling students, millions face financial crisis",
                color: "left"
            },
            {
                label: "CENTER",
                source: "AP News",
                headline: "Federal court halts Biden student loan forgiveness program",
                color: "center"
            },
            {
                label: "CONSERVATIVE",
                source: "Fox News",
                headline: "Court stops Biden's illegal student loan bailout, protecting taxpayers",
                color: "right"
            }
        ],

        challenge: {
            type: "loaded_language",
            question: "Identify the loaded (non-neutral) words in these headlines:",
            options: [
                { text: "MSNBC: 'struggling' and 'crisis'", value: "msnbc", correct: true },
                { text: "AP: 'halts' and 'program'", value: "ap", correct: false },
                { text: "Fox: 'illegal' and 'bailout'", value: "fox", correct: true },
                { text: "Both MSNBC and Fox", value: "both", correct: true }
            ],
            explanation: "MSNBC uses 'struggling' and 'crisis' to evoke sympathy. Fox uses 'illegal' and 'bailout' to suggest wrongdoing. AP uses neutral process language like 'halts' and 'program.'",
            correctFeedback: "Perfect! You're spotting loaded language like a pro.",
            incorrectFeedback: "Look again - 'struggling,' 'crisis,' 'illegal,' and 'bailout' all carry emotional weight."
        },

        deepDive: {
            sources: [
                { label: "Full Court Ruling", url: "#" },
                { label: "White House Statement", url: "#" },
                { label: "Student Debt Data", url: "#" }
            ],
            modules: [
                { title: "How Student Loans Work", time: "6 min", icon: "📚" },
                { title: "Executive vs Legislative Power", time: "8 min", icon: "⚖️" }
            ],
            related: [
                { emoji: "🏫💰📈", title: "College costs rising" },
                { emoji: "⚖️🏛️📜", title: "Supreme Court term preview" }
            ]
        }
    },

    climate_weather: {
        emoji: "🌍🔥🌊",
        title: "Record-breaking heat and floods hit multiple continents",
        category: "Climate",
        readTime: "3 min",

        summary: `
            <p>This week, Phoenix hit 120°F for 7 straight days, Vermont experienced historic flooding, and wildfires in Greece forced evacuations of tourist islands. Scientists say these events align with climate change models.</p>

            <p>The UN released a report calling for immediate action to reduce emissions. Some political leaders dispute the connection between these events and climate change.</p>
        `,

        teachableMoment: `Scientists use careful language: "align with models" means the pattern matches predictions, not that one event "proves" climate change. This precision matters.`,

        perspectives: [
            {
                label: "CLIMATE FOCUS",
                source: "NYT Climate",
                headline: "Extreme weather 'new normal' as climate crisis accelerates, scientists warn",
                color: "left"
            },
            {
                label: "CENTER",
                source: "BBC",
                headline: "Heat records broken across Northern Hemisphere amid extreme weather",
                color: "center"
            },
            {
                label: "SKEPTICAL",
                source: "WSJ Opinion",
                headline: "Hot summer weather prompts familiar climate alarmism",
                color: "right"
            }
        ],

        challenge: {
            type: "fact_opinion",
            question: "Which statements are facts vs opinions?",
            options: [
                { text: "Phoenix hit 120°F for 7 days - FACT", value: "temp_fact", correct: true },
                { text: "'New normal' - OPINION", value: "new_normal_opinion", correct: true },
                { text: "'Climate crisis accelerates' - OPINION", value: "crisis_opinion", correct: true },
                { text: "'Familiar alarmism' - OPINION", value: "alarmism_opinion", correct: true }
            ],
            explanation: "Temperature readings are verifiable facts. Phrases like 'new normal,' 'crisis,' and 'alarmism' are interpretations or opinions about what those facts mean.",
            correctFeedback: "Excellent! You're distinguishing facts from interpretations.",
            incorrectFeedback: "Temperature data = fact (measurable). Terms like 'crisis' or 'alarmism' = opinion (judgment)."
        },

        deepDive: {
            sources: [
                { label: "UN Climate Report", url: "#" },
                { label: "NOAA Temperature Data", url: "#" },
                { label: "Climate Models Explained", url: "#" }
            ],
            modules: [
                { title: "Weather vs Climate", time: "4 min", icon: "🌡️" },
                { title: "Reading Scientific Studies", time: "10 min", icon: "🔬" }
            ],
            related: [
                { emoji: "💨⚡🌀", title: "Hurricane season predictions" },
                { emoji: "🏭💨📉", title: "Carbon emissions milestone" }
            ]
        }
    },

    social_media_ban: {
        emoji: "📱⚖️🚫",
        title: "Montana bans TikTok statewide, other states may follow",
        category: "Technology",
        readTime: "2 min",

        summary: `
            <p>Montana became the first U.S. state to ban TikTok entirely. The law prohibits app stores from offering TikTok downloads and fines companies $10,000 per violation per day. It takes effect in January.</p>

            <p>The state cites data privacy and Chinese government concerns. TikTok says the ban is unconstitutional and violates free speech. Several other states are considering similar legislation.</p>
        `,

        teachableMoment: `When a source says something is "unconstitutional," that's a legal claim, not a fact - until courts decide. Be careful with legal language in headlines.`,

        perspectives: [
            {
                label: "SECURITY FOCUS",
                source: "CNN",
                headline: "Montana takes bold step to protect user data from China",
                color: "left"
            },
            {
                label: "CENTER",
                source: "Reuters",
                headline: "Montana bans TikTok, first U.S. state to do so",
                color: "center"
            },
            {
                label: "FREE SPEECH",
                source: "The Verge",
                headline: "Montana's TikTok ban raises serious First Amendment questions",
                color: "right"
            }
        },

        challenge: {
            type: "source_credibility",
            question: "Who would be the most credible source on whether this ban is constitutional?",
            options: [
                { text: "Montana Governor (politician, has agenda)", value: "governor", correct: false },
                { text: "TikTok spokesperson (company, has agenda)", value: "tiktok", correct: false },
                { text: "Constitutional law professor (expert, less bias)", value: "professor", correct: true },
                { text: "Random Twitter user (not expert)", value: "twitter", correct: false }
            ],
            explanation: "Constitutional law experts have relevant expertise and less direct stake in the outcome. Politicians and companies both have agendas. Random social media users usually lack expertise.",
            correctFeedback: "Yes! Subject matter experts with no direct stake are most credible.",
            incorrectFeedback: "Think about who has expertise AND no direct financial/political interest in the outcome."
        },

        deepDive: {
            sources: [
                { label: "Full Montana Law Text", url: "#" },
                { label: "TikTok's Legal Response", url: "#" },
                { label: "First Amendment Primer", url: "#" }
            ],
            modules: [
                { title: "Data Privacy Basics", time: "5 min", icon: "🔒" },
                { title: "Free Speech Law", time: "8 min", icon: "⚖️" }
            ],
            related: [
                { emoji: "🇨🇳🔍📱", title: "US-China tech tensions" },
                { emoji: "🔐💻📊", title: "Social media data practices" }
            ]
        }
    },

    housing_crisis: {
        emoji: "🏠💸😰",
        title: "Average rent hits $2,000/month as housing crisis deepens",
        category: "Economy",
        readTime: "3 min",

        summary: `
            <p>The median rent for a one-bedroom apartment in the U.S. reached $2,000 per month, a 30% increase since 2020. In major cities like San Francisco and New York, median rents exceed $3,500.</p>

            <p>Economists cite limited housing supply, high demand, and rising construction costs. Young adults are living with parents longer, and homelessness has increased 12% nationally.</p>
        `,

        teachableMoment: `Notice the difference: "median rent is $2,000" is a verifiable statistic. "Housing crisis" is a characterization - some might call it "market adjustment." Same data, different framing.`,

        perspectives: [
            {
                label: "TENANT ADVOCACY",
                source: "Mother Jones",
                headline: "Rent exploitation leaves millions on brink of homelessness",
                color: "left"
            },
            {
                label: "CENTER",
                source: "AP News",
                headline: "U.S. median rent reaches $2,000 as housing costs climb",
                color: "center"
            },
            {
                label: "MARKET VIEW",
                source: "WSJ",
                headline: "Housing market adjusts to supply constraints and demand surge",
                color: "right"
            }
        ],

        challenge: {
            type: "framing",
            question: "How does each headline frame the same situation differently?",
            options: [
                { text: "Mother Jones frames it as exploitation (villain: landlords)", value: "mj", correct: true },
                { text: "AP presents it as data (neutral observation)", value: "ap", correct: true },
                { text: "WSJ frames it as market forces (natural economics)", value: "wsj", correct: true },
                { text: "All use different framing", value: "all", correct: true }
            ],
            explanation: "Same rent data, three different stories: exploitation (moral problem), costs climbing (factual trend), or market adjustment (economic forces). This is how framing works.",
            correctFeedback: "Perfect! You're seeing how framing shapes interpretation.",
            incorrectFeedback: "Look at the word choices: 'exploitation,' 'climb,' 'adjustment' - same data, different narratives."
        },

        deepDive: {
            sources: [
                { label: "Rent Price Index Data", url: "#" },
                { label: "Housing Supply Analysis", url: "#" },
                { label: "Homelessness Statistics", url: "#" }
            ],
            modules: [
                { title: "Understanding Housing Economics", time: "7 min", icon: "📊" },
                { title: "Reading Economic Data", time: "6 min", icon: "📈" }
            ],
            related: [
                { emoji: "🏗️🏙️📉", title: "New construction hits low" },
                { emoji: "🏕️⛺😔", title: "Homelessness increasing" }
            ]
        }
    },

    ai_education: {
        emoji: "🤖📚🎓",
        title: "Schools ban ChatGPT amid cheating concerns, others embrace it",
        category: "Education",
        readTime: "2 min",

        summary: `
            <p>Some school districts banned ChatGPT and AI writing tools, citing academic integrity concerns. Students were caught using AI to write essays and complete assignments.</p>

            <p>Other schools are integrating AI into curriculum, teaching students to use it responsibly. Educators debate whether to resist or adapt to the technology.</p>
        `,

        teachableMoment: `When a story presents two opposing approaches without declaring one "right," that's balanced reporting. You get to decide which approach makes more sense to you.`,

        perspectives: [
            {
                label: "BAN ADVOCATES",
                source: "Education Week",
                headline: "ChatGPT threatens academic integrity, schools fight back",
                color: "left"
            },
            {
                label: "CENTER",
                source: "NPR",
                headline: "Schools split on ChatGPT: Ban it or teach it?",
                color: "center"
            },
            {
                label: "ADAPTATION VIEW",
                source: "EdTech Magazine",
                headline: "Forward-thinking schools embrace AI as teaching tool",
                color: "right"
            }
        ],

        challenge: {
            type: "perspective",
            question: "What perspective does each headline emphasize?",
            options: [
                { text: "Education Week: Focus on threats/problems", value: "ew", correct: true },
                { text: "NPR: Shows both sides as equally valid", value: "npr", correct: true },
                { text: "EdTech: Frames adapters as 'forward-thinking'", value: "edtech", correct: true }
            ],
            explanation: "'Threatens,' 'fight back,' and 'forward-thinking' all reveal the source's perspective. NPR's question format ('Ban it or teach it?') presents both as legitimate options.",
            correctFeedback: "Excellent! You're identifying how sources signal their viewpoint through word choice.",
            incorrectFeedback: "Notice: 'threatens' = negative, 'forward-thinking' = positive, question format = neutral."
        },

        deepDive: {
            sources: [
                { label: "School District Policies", url: "#" },
                { label: "Student Survey Results", url: "#" },
                { label: "Teacher Perspectives", url: "#" }
            ],
            modules: [
                { title: "AI Ethics in Education", time: "6 min", icon: "🤖" },
                { title: "Academic Integrity", time: "5 min", icon: "📖" }
            ],
            related: [
                { emoji: "✍️💻📝", title: "Essay writing in AI era" },
                { emoji: "🎓🤖🔮", title: "Future of education" }
            ]
        }
    }
};

// Initialize app
let currentState = {
    streak: 1,
    score: 0,
    currentStory: null,
    storiesRead: 0
};

document.addEventListener('DOMContentLoaded', () => {
    renderHomeFeed();
    attachHomeListeners();
    updateStats();
});

// Render home feed with all stories
function renderHomeFeed() {
    const feedContainer = document.querySelector('.stories-feed');
    feedContainer.innerHTML = '';

    Object.keys(stories).forEach(storyId => {
        const story = stories[storyId];
        const card = document.createElement('div');
        card.className = 'story-card';
        card.dataset.story = storyId;
        card.innerHTML = `
            <div class="emoji-headline">${story.emoji}</div>
            <div class="story-preview">${story.title}</div>
            <div class="story-meta">${story.readTime} read • ${story.category}</div>
        `;
        feedContainer.appendChild(card);
    });
}

function attachHomeListeners() {
    document.querySelectorAll('.story-card').forEach(card => {
        card.addEventListener('click', () => {
            openStory(card.dataset.story);
        });
    });
}

function openStory(storyId) {
    currentState.currentStory = storyId;
    const story = stories[storyId];

    // Populate story content
    document.getElementById('storyEmoji').textContent = story.emoji;
    document.getElementById('storyTitle').textContent = story.title;
    document.getElementById('summaryText').innerHTML = story.summary;
    document.getElementById('teachableMoment').innerHTML = `<strong>Notice:</strong> ${story.teachableMoment}`;

    // Populate perspectives
    renderPerspectives(story.perspectives);

    // Populate challenge
    renderChallenge(story.challenge);

    // Populate deep dive
    renderDeepDive(story.deepDive);

    // Show story screen
    showScreen('storyScreen');
    resetStoryLevels();
    updateProgressBar(10);

    // Hide tooltip if not first story
    if (currentState.storiesRead > 0) {
        document.querySelector('.first-time-tooltip').style.display = 'none';
    }
}

function renderPerspectives(perspectives) {
    const container = document.getElementById('perspectivesContainer');
    container.innerHTML = '<h2 class="section-title">📊 How Different Sources Covered This</h2>';

    perspectives.forEach(p => {
        const card = document.createElement('div');
        card.className = `perspective-card ${p.color}`;
        card.innerHTML = `
            <div class="perspective-label">${p.label}</div>
            <div class="perspective-content">
                <p class="source-name">${p.source}:</p>
                <p>"${p.headline}"</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderChallenge(challenge) {
    const questionText = document.getElementById('challengeQuestion');
    const optionsContainer = document.getElementById('challengeOptions');

    questionText.textContent = challenge.question;
    optionsContainer.innerHTML = '';

    challenge.options.forEach((option, idx) => {
        const label = document.createElement('label');
        label.className = 'challenge-option';
        const inputType = challenge.options.filter(o => o.correct).length > 1 ? 'checkbox' : 'radio';
        label.innerHTML = `
            <input type="${inputType}" name="challenge" value="${option.value}" data-correct="${option.correct}">
            <span>${option.text}</span>
        `;
        optionsContainer.appendChild(label);
    });

    // Store challenge data for grading
    document.getElementById('submitChallenge').onclick = () => submitChallenge(challenge);
}

function renderDeepDive(deepDive) {
    // Sources
    const sourcesDiv = document.getElementById('deepDiveSources');
    sourcesDiv.innerHTML = '<h2 class="section-title">📚 Read More</h2><div class="source-links"></div>';
    const sourcesContainer = sourcesDiv.querySelector('.source-links');

    deepDive.sources.forEach(s => {
        const link = document.createElement('a');
        link.className = 'source-link';
        link.href = s.url;
        link.textContent = s.label + ' →';
        sourcesContainer.appendChild(link);
    });

    // Modules
    const modulesDiv = document.getElementById('deepDiveModules');
    modulesDiv.innerHTML = '<h3>🎓 Learn More</h3>';

    deepDive.modules.forEach(m => {
        const card = document.createElement('div');
        card.className = 'module-card';
        card.innerHTML = `
            <div class="module-icon">${m.icon}</div>
            <div class="module-content">
                <h4>${m.title}</h4>
                <p class="module-time">${m.time}</p>
            </div>
        `;
        modulesDiv.appendChild(card);
    });

    // Related
    const relatedDiv = document.getElementById('deepDiveRelated');
    relatedDiv.innerHTML = '<h3>🔗 Related Stories</h3>';

    deepDive.related.forEach(r => {
        const card = document.createElement('div');
        card.className = 'related-card';
        card.innerHTML = `
            <span class="related-emoji">${r.emoji}</span>
            <span class="related-title">${r.title}</span>
        `;
        relatedDiv.appendChild(card);
    });
}

function submitChallenge(challenge) {
    const selected = Array.from(document.querySelectorAll('input[name="challenge"]:checked'));

    if (selected.length === 0) {
        alert('Please select at least one answer!');
        return;
    }

    const allCorrect = selected.every(input => input.dataset.correct === 'true');
    const correctCount = challenge.options.filter(o => o.correct).length;
    const isCorrect = allCorrect && selected.length === correctCount;

    showChallengeResult(isCorrect, challenge);
}

function showChallengeResult(isCorrect, challenge) {
    const resultDiv = document.getElementById('challengeResult');
    const feedback = isCorrect ? challenge.correctFeedback : challenge.incorrectFeedback;
    const points = isCorrect ? 15 : 5;

    resultDiv.className = `challenge-result ${isCorrect ? 'correct' : 'incorrect'}`;
    resultDiv.innerHTML = `
        <div class="result-title ${isCorrect ? 'correct' : 'incorrect'}">
            ${isCorrect ? '✅ Correct!' : '❌ Not quite'}
        </div>
        <div class="result-explanation">${feedback}</div>
        <div class="result-explanation" style="margin-top: 10px;">${challenge.explanation}</div>
        <div class="result-points">+${points} points 🎯</div>
    `;

    resultDiv.classList.remove('hidden');
    document.getElementById('teachableAfterChallenge').classList.remove('hidden');
    document.getElementById('continueToLevel4').classList.remove('hidden');
    document.getElementById('submitChallenge').disabled = true;

    currentState.score += points;
    updateStats();

    if (isCorrect) {
        setTimeout(() => showAchievement('Challenge Master', '🎯'), 500);
    }

    setTimeout(() => {
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function resetStoryLevels() {
    document.querySelectorAll('.story-level').forEach((level, idx) => {
        if (idx > 0) level.classList.add('hidden');
    });

    document.getElementById('challengeResult').classList.add('hidden');
    document.getElementById('teachableAfterChallenge').classList.add('hidden');
    document.getElementById('continueToLevel4').classList.add('hidden');
    document.querySelectorAll('input[name="challenge"]').forEach(cb => cb.checked = false);
    document.getElementById('submitChallenge').disabled = false;

    updateProgressBar(0);
}

function showNextLevel(levelId) {
    const level = document.getElementById(levelId);
    if (level) {
        level.classList.remove('hidden');
        level.scrollIntoView({ behavior: 'smooth', block: 'start' });

        if (levelId === 'level2') {
            updateProgressBar(30);
            currentState.score += 5;
            updateStats();
        } else if (levelId === 'level3') {
            updateProgressBar(50);
            currentState.score += 10;
            updateStats();
        } else if (levelId === 'level4') {
            updateProgressBar(80);
            currentState.score += 15;
            updateStats();
        }
    }
}

function completeStory() {
    updateProgressBar(100);
    currentState.storiesRead++;
    document.getElementById('finalScore').textContent = currentState.score;
    document.getElementById('storiesReadCount').textContent = currentState.storiesRead;

    setTimeout(() => showScreen('completionScreen'), 300);
}

function updateStats() {
    document.getElementById('streakCount').textContent = currentState.streak;
    document.getElementById('scoreCount').textContent = currentState.score;
}

function updateProgressBar(percentage) {
    document.getElementById('progressBar').style.width = percentage + '%';
}

function showAchievement(title, emoji) {
    const achievement = document.createElement('div');
    achievement.style.cssText = `
        position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        color: white; padding: 15px 25px; border-radius: 50px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.3); z-index: 10000;
        font-weight: 600; animation: slideDown 0.5s ease-out;
    `;
    achievement.textContent = `${emoji} Badge Unlocked: ${title}`;
    document.body.appendChild(achievement);
    setTimeout(() => achievement.remove(), 3000);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Continue buttons
    document.querySelectorAll('.continue-button').forEach(btn => {
        btn.addEventListener('click', () => {
            const nextLevel = btn.dataset.next;
            showNextLevel(nextLevel);
        });
    });

    // Back button
    document.querySelector('.back-button').addEventListener('click', () => {
        showScreen('homeScreen');
        resetStoryLevels();
    });

    // Finish story
    document.getElementById('finishStory').addEventListener('click', completeStory);

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
});

// CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from { transform: translateX(-50%) translateY(-100px); opacity: 0; }
        to { transform: translateX(-50%) translateY(0); opacity: 1; }
    }
`;
document.head.appendChild(style);

console.log('✨ NewMoji Enhanced Prototype Loaded!');
console.log('📊 6 complete stories available');
console.log('🎯 Multiple challenge types implemented');
