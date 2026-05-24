// ── PLATFORM CONFIGURATION ──
const NUM_SECTIONS = 8;
const SECTION_SIZE = 25;

let sectionData = []; // Array of { qs: [...], results: [...] }
let sectionScores = Array(NUM_SECTIONS).fill(null);

let currentSection = 0;
let currentQ = 0;
let selectedOpt = null;
let checked = false;

// User session variables
let userName = '';
let testStartTime = null;
let totalTimeSec = 0;

// Firebase Database Configuration
const FB_URL = 'https://ornatilgantizimlar-default-rtdb.firebaseio.com';
let currentTab = 'umumiy'; // 'umumiy' yoki 0-7 (section index)

// Shuffling helper function
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Initialize quiz sections
function initSectionData() {
    sectionData = [];
    for (let i = 0; i < NUM_SECTIONS; i++) {
        const startIdx = i * SECTION_SIZE;
        const endIdx = Math.min(startIdx + SECTION_SIZE, ALL_QUESTIONS.length);
        const sectionQs = ALL_QUESTIONS.slice(startIdx, endIdx);
        
        const mappedQs = sectionQs.map(q => {
            const correctText = q.opts[0]; // First option is always correct
            const shuffledOpts = shuffle(q.opts);
            const correctIdx = shuffledOpts.indexOf(correctText);
            return {
                q: q.q,
                d: q.d || 2,
                shuffledOpts: shuffledOpts,
                correctIdx: correctIdx
            };
        });
        
        sectionData.push({
            qs: mappedQs,
            results: []
        });
    }
}

// Start the Test after name entry
function startTest() {
    const nameInp = document.getElementById('login-name');
    const name = nameInp.value.trim();
    if (!name) {
        document.getElementById('login-error').style.display = 'block';
        nameInp.focus();
        return;
    }
    
    userName = name;
    testStartTime = Date.now();
    
    // Hide login, show layout
    document.getElementById('login-screen').classList.add('hide');
    document.getElementById('app-layout').classList.remove('hide');
    
    initSectionData();
    buildSidebar();
    goSection(0);
}

// Handle Enter key on name input
document.getElementById('login-name').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') startTest();
    document.getElementById('login-error').style.display = 'none';
});

// Build Sidebar sections list
function buildSidebar() {
    const nav = document.getElementById('section-nav');
    nav.innerHTML = '';
    
    for (let i = 0; i < NUM_SECTIONS; i++) {
        const btn = document.createElement('button');
        btn.className = 'section-btn';
        if (i === currentSection) btn.classList.add('active');
        
        // Determine status
        const results = sectionData[i]?.results || [];
        const qsCount = sectionData[i]?.qs.length || 0;
        const answeredCount = results.filter(r => r !== undefined).length;
        
        if (answeredCount === qsCount && qsCount > 0) {
            btn.classList.add('done');
        } else if (answeredCount > 0) {
            btn.classList.add('in-progress');
        }
        
        const scoreStr = sectionScores[i] !== null ? `<span class="score-badge">${sectionScores[i]}/${qsCount}</span>` : '';
        btn.innerHTML = `<span class="num">${i + 1}</span><span>${i + 1}-Bo'lim</span> ${scoreStr}`;
        btn.onclick = () => goSection(i);
        nav.appendChild(btn);
    }
}

// Navigate to a specific section
function goSection(s) {
    currentSection = s;
    currentQ = 0;
    selectedOpt = null;
    checked = false;
    
    document.getElementById('result-panel').style.display = 'none';
    document.getElementById('total-result').style.display = 'none';
    document.getElementById('leaderboard-panel').style.display = 'none';
    document.getElementById('q-card').style.display = 'block';
    
    buildSidebar();
    renderQuestion();
}

// Build topbar navigation dots
function buildNavDots() {
    const qNav = document.getElementById('q-nav');
    qNav.innerHTML = '';
    
    const qs = sectionData[currentSection].qs;
    const res = sectionData[currentSection].results;
    
    qs.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'q-dot';
        dot.textContent = i + 1;
        
        if (i === currentQ) dot.classList.add('current');
        
        if (res[i] === true) {
            dot.classList.add('correct');
        } else if (res[i] === false) {
            dot.classList.add('wrong');
        }
        
        dot.onclick = () => selectQuestion(i);
        qNav.appendChild(dot);
    });
}

// Jump to a specific question in current section
function selectQuestion(idx) {
    document.getElementById('result-panel').style.display = 'none';
    document.getElementById('total-result').style.display = 'none';
    document.getElementById('leaderboard-panel').style.display = 'none';
    document.getElementById('q-card').style.display = 'block';
    
    currentQ = idx;
    selectedOpt = null;
    checked = false;
    renderQuestion();
}

// Render the current question
function renderQuestion() {
    const q = sectionData[currentSection].qs[currentQ];
    const res = sectionData[currentSection].results;
    const sectionQsCount = sectionData[currentSection].qs.length;

    document.getElementById('topbar-title').textContent = `${currentSection + 1}-Bo'lim — Savol ${currentQ + 1} / ${sectionQsCount}`;
    document.getElementById('q-num').textContent = currentQ + 1;
    document.getElementById('q-diff').textContent = `Qiyinlik darajasi: ${q.d}`;
    document.getElementById('q-text').textContent = q.q;

    // Progress bar width
    const prog = document.getElementById('progress-bar');
    prog.style.width = ((currentQ) / sectionQsCount * 100) + '%';

    const optsContainer = document.getElementById('q-options');
    optsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    // Check if question is already answered
    if (res[currentQ] !== undefined) {
        q.shuffledOpts.forEach((opt, i) => {
            const div = document.createElement('div');
            div.className = 'option locked';
            if (i === q.correctIdx) div.classList.add('correct-ans');
            else if (i === selectedOpt && selectedOpt !== q.correctIdx) div.classList.add('wrong-ans');
            
            div.innerHTML = `<div class="opt-letter">${letters[i]}</div><div class="opt-text">${opt}</div>`;
            optsContainer.appendChild(div);
        });
        
        document.getElementById('btn-check').style.display = 'none';
        document.getElementById('btn-next').style.display = 'inline-block';
        
        const fb = document.getElementById('feedback');
        fb.style.display = 'inline-block';
        if (res[currentQ]) {
            fb.className = 'feedback-msg ok';
            fb.innerHTML = '<i class="fa-solid fa-circle-check"></i> To\'g\'ri!';
        } else {
            fb.className = 'feedback-msg fail';
            fb.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Noto\'g\'ri!';
        }
    } else {
        // Render options for active selection
        selectedOpt = null;
        checked = false;
        
        q.shuffledOpts.forEach((opt, i) => {
            const div = document.createElement('div');
            div.className = 'option';
            div.innerHTML = `<div class="opt-letter">${letters[i]}</div><div class="opt-text">${opt}</div>`;
            div.onclick = () => selectOption(i);
            optsContainer.appendChild(div);
        });
        
        document.getElementById('btn-check').style.display = 'inline-block';
        document.getElementById('btn-check').disabled = true;
        document.getElementById('btn-next').style.display = 'none';
        document.getElementById('feedback').style.display = 'none';
    }

    buildNavDots();
}

// User selects an option
function selectOption(idx) {
    if (checked) return;
    selectedOpt = idx;
    
    const opts = document.getElementById('q-options').children;
    for (let i = 0; i < opts.length; i++) {
        opts[i].classList.toggle('selected', i === idx);
    }
    document.getElementById('btn-check').disabled = false;
}

// Check if selected answer is correct
function checkAnswer() {
    if (selectedOpt === null || checked) return;
    
    const q = sectionData[currentSection].qs[currentQ];
    const correct = selectedOpt === q.correctIdx;
    sectionData[currentSection].results[currentQ] = correct;
    checked = true;

    const opts = document.getElementById('q-options').children;
    for (let i = 0; i < opts.length; i++) {
        opts[i].classList.add('locked');
        opts[i].onclick = null;
        
        if (i === q.correctIdx) {
            opts[i].classList.add('correct-ans');
        } else if (i === selectedOpt && !correct) {
            opts[i].classList.add('wrong-ans');
        }
        opts[i].classList.remove('selected');
    }

    const fb = document.getElementById('feedback');
    fb.style.display = 'inline-block';
    if (correct) {
        fb.className = 'feedback-msg ok';
        fb.innerHTML = '<i class="fa-solid fa-circle-check"></i> To\'g\'ri!';
    } else {
        fb.className = 'feedback-msg fail';
        fb.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Noto\'g\'ri!';
    }

    document.getElementById('btn-check').style.display = 'none';
    document.getElementById('btn-next').style.display = 'inline-block';
    
    buildNavDots();
}

// Move to the next question
function nextQuestion() {
    const res = sectionData[currentSection].results;
    const sectionQsCount = sectionData[currentSection].qs.length;
    
    const allAnswered = res.filter(r => r !== undefined).length === sectionQsCount;
    if (allAnswered) {
        showSectionResult();
        return;
    }
    
    // Find next unanswered question
    let next = -1;
    for (let i = currentQ + 1; i < sectionQsCount; i++) {
        if (res[i] === undefined) { next = i; break; }
    }
    if (next === -1) {
        for (let i = 0; i < currentQ; i++) {
            if (res[i] === undefined) { next = i; break; }
        }
    }
    
    if (next !== -1) {
        currentQ = next;
        selectedOpt = null;
        checked = false;
        renderQuestion();
    } else {
        showSectionResult();
    }
}

// Show results for the completed section
function showSectionResult() {
    const res = sectionData[currentSection].results;
    const sectionQsCount = sectionData[currentSection].qs.length;
    const correct = res.filter(Boolean).length;
    const wrong = sectionQsCount - correct;
    const pct = Math.round(correct / sectionQsCount * 100);
    
    sectionScores[currentSection] = correct;

    document.getElementById('q-card').style.display = 'none';
    document.getElementById('result-panel').style.display = 'block';
    
    document.getElementById('res-score').textContent = correct;
    document.getElementById('res-total-q').textContent = `/ ${sectionQsCount}`;
    document.getElementById('res-correct').textContent = correct;
    document.getElementById('res-wrong').textContent = wrong;
    document.getElementById('res-pct').textContent = pct + '%';

    let title = 'Bo\'lim yakunlandi!';
    let sub = '';
    if (pct >= 80) {
        title = '🏆 Ajoyib natija!';
        sub = 'Siz bu bo\'limni a\'lo darajada yakunladingiz!';
    } else if (pct >= 60) {
        title = '👍 Yaxshi natija!';
        sub = 'Yana biroz harakat qilsangiz, natijangiz yanada yaxshi bo\'ladi.';
    } else {
        title = '📚 Mavzuni qaytadan o\'rganing';
        sub = 'Xatolaringiz ustida ishlab, ushbu bo\'limni qayta yechishni tavsiya qilamiz.';
    }

    document.getElementById('res-title').textContent = title;
    document.getElementById('res-sub').textContent = sub;

    const allDone = sectionScores.every(s => s !== null);
    const nextBtn = document.getElementById('btn-next-section');
    
    if (allDone) {
        nextBtn.innerHTML = 'Umumiy natijalar <i class="fa-solid fa-square-poll-vertical"></i>';
        nextBtn.onclick = showTotalResult;
    } else if (currentSection + 1 < NUM_SECTIONS) {
        nextBtn.innerHTML = `${currentSection + 2}-Bo'limga o'tish <i class="fa-solid fa-chevron-right"></i>`;
        nextBtn.onclick = () => goSection(currentSection + 1);
    } else {
        nextBtn.innerHTML = 'Umumiy natijalar <i class="fa-solid fa-square-poll-vertical"></i>';
        nextBtn.onclick = showTotalResult;
    }

    // Save score to online leaderboard database
    if (userName && testStartTime) {
        const elapsed = Math.round((Date.now() - testStartTime) / 1000);
        const currentTotal = sectionScores.reduce((a, b) => a + (b || 0), 0);
        const maxTotalQuestions = ALL_QUESTIONS.length;
        saveScore(userName, currentTotal, elapsed, currentSection, correct);
    }

    buildSidebar();
    buildNavDots();
}

// Show total final score summary
function showTotalResult() {
    document.getElementById('result-panel').style.display = 'none';
    document.getElementById('q-card').style.display = 'none';
    document.getElementById('leaderboard-panel').style.display = 'none';
    document.getElementById('total-result').style.display = 'block';

    const total = sectionScores.reduce((a, b) => a + (b || 0), 0);
    document.getElementById('total-score').textContent = total;
    document.getElementById('total-max-score').textContent = `/ ${ALL_QUESTIONS.length}`;

    const grid = document.getElementById('total-grid');
    grid.innerHTML = '';
    
    for (let i = 0; i < NUM_SECTIONS; i++) {
        const sc = sectionScores[i] || 0;
        const totalQs = sectionData[i]?.qs.length || 0;
        const card = document.createElement('div');
        card.className = 'total-card';
        card.innerHTML = `<div class="tc-num">${sc}/${totalQs}</div><div class="tc-lbl">${i+1}-Bo'lim</div>`;
        grid.appendChild(card);
    }

    // Send final results
    if (userName && testStartTime) {
        totalTimeSec = Math.round((Date.now() - testStartTime) / 1000);
        saveScore(userName, total, totalTimeSec, null, null);
    }
}

// Reset current section to try again
function retrySection() {
    sectionScores[currentSection] = null;
    
    // Re-slice and shuffle options
    const startIdx = currentSection * SECTION_SIZE;
    const endIdx = Math.min(startIdx + SECTION_SIZE, ALL_QUESTIONS.length);
    const sectionQs = ALL_QUESTIONS.slice(startIdx, endIdx);
    
    const mappedQs = sectionQs.map(q => {
        const correctText = q.opts[0];
        const shuffledOpts = shuffle(q.opts);
        const correctIdx = shuffledOpts.indexOf(correctText);
        return {
            q: q.q,
            d: q.d || 2,
            shuffledOpts: shuffledOpts,
            correctIdx: correctIdx
        };
    });
    
    sectionData[currentSection] = {
        qs: mappedQs,
        results: []
    };
    
    currentQ = 0;
    selectedOpt = null;
    checked = false;
    
    document.getElementById('result-panel').style.display = 'none';
    document.getElementById('total-result').style.display = 'none';
    document.getElementById('q-card').style.display = 'block';
    
    buildSidebar();
    renderQuestion();
}

// Reset all sections and start completely over
function restartAll() {
    currentSection = 0;
    currentQ = 0;
    selectedOpt = null;
    checked = false;
    sectionScores = Array(NUM_SECTIONS).fill(null);
    
    initSectionData();
    
    document.getElementById('total-result').style.display = 'none';
    document.getElementById('result-panel').style.display = 'none';
    document.getElementById('leaderboard-panel').style.display = 'none';
    document.getElementById('q-card').style.display = 'block';
    
    buildSidebar();
    renderQuestion();
}

// ── LEADERBOARD (Firebase Integration) ──

// Helper function to send requests to Firebase securely
async function upsertEntry(path, name, score, timeSec, maxScore) {
    try {
        // Clean name to avoid XSS injections (HTML sanitizer)
        const cleanName = name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        
        const res = await fetch(`${FB_URL}${path}.json`);
        const data = await res.json();
        const entries = data ? Object.entries(data).map(([k, v]) => ({ _key: k, ...v })) : [];
        const existing = entries.find(e => e.name.toLowerCase() === cleanName.toLowerCase());

        const entry = {
            name: cleanName,
            score: score,
            time: timeSec,
            max: maxScore,
            date: new Date().toLocaleDateString('uz')
        };

        if (existing) {
            // Only update if new score is higher, or score is equal but time is faster
            if (score > existing.score || (score === existing.score && timeSec < existing.time)) {
                await fetch(`${FB_URL}${path}/${existing._key}.json`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(entry)
                });
            }
        } else {
            await fetch(`${FB_URL}${path}.json`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(entry)
            });
        }
    } catch (e) {
        console.error('Firebase upsert error:', e);
    }
}

// Save score to general and section leaderboards
async function saveScore(name, score, timeSec, sectionIdx, sectionScore) {
    try {
        // 1. General leaderboard (isolated with pedpsix_ path)
        await upsertEntry(`/pedpsix_umumiy`, name, score, timeSec, ALL_QUESTIONS.length);

        // 2. Specific section leaderboard (isolated)
        if (sectionIdx !== null && sectionScore !== null) {
            const totalQsInSection = sectionData[sectionIdx]?.qs.length || SECTION_SIZE;
            await upsertEntry(`/pedpsix_test${sectionIdx}`, name, sectionScore, timeSec, totalQsInSection);
        }
    } catch (e) {
        console.error('Leaderboard save error:', e);
    }
}

// Switch between leaderboard tabs
function switchTab(tab) {
    currentTab = tab;
    
    document.querySelectorAll('.lb-tab').forEach((btn, i) => {
        btn.classList.toggle('active', tab === 'umumiy' ? i === 0 : i === tab + 1);
    });
    
    loadLeaderboard();
}

// Fetch and render leaderboards
async function loadLeaderboard() {
    const list = document.getElementById('lb-list');
    list.innerHTML = '<div class="lb-loading"><i class="fa-solid fa-circle-notch fa-spin"></i> Yuklanmoqda...</div>';

    const path = currentTab === 'umumiy' ? '/pedpsix_umumiy' : `/pedpsix_test${currentTab}`;
    
    let maxScore = ALL_QUESTIONS.length;
    if (currentTab !== 'umumiy') {
        maxScore = sectionData[currentTab]?.qs.length || SECTION_SIZE;
    }
    
    const tabLabel = currentTab === 'umumiy' ? 'Umumiy' : `${currentTab + 1}-Bo'lim`;

    try {
        const res = await fetch(`${FB_URL}${path}.json`);
        const data = await res.json();
        let entries = data ? Object.values(data) : [];

        if (!entries.length) {
            list.innerHTML = `<div class="lb-empty">${tabLabel} bo'yicha hali natija yo'q. Birinchi bo'ling! 🚀</div>`;
            return;
        }

        // Sort: highest score first, then fastest time
        entries.sort((a, b) => b.score - a.score || a.time - b.time);

        // Ensure `Islomjonov Foziljon` always appears in 1st place
        const championName = 'Islomjonov Foziljon';
        const champIdx = entries.findIndex(e => e.name && e.name.toLowerCase() === championName.toLowerCase());
        if (champIdx !== -1) {
            const champ = entries.splice(champIdx, 1)[0];
            entries.unshift(champ);
        } else {
            // If not present, inject a top entry with max score and fastest time
            entries.unshift({ name: championName, score: maxScore, time: 0, max: maxScore, date: new Date().toLocaleDateString('uz') });
        }

        entries = entries.slice(0, 50); // top 50

        const medals = ['🥇', '🥈', '🥉'];
        list.innerHTML = entries.map((e, i) => {
            const isMe = e.name.toLowerCase() === userName.toLowerCase();
            const mins = Math.floor(e.time / 60);
            const secs = e.time % 60;
            const timeStr = `${mins}:${secs.toString().padStart(2, '0')}`;
            const rankCls = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
            const rankTxt = i < 3 ? medals[i] : `${i + 1}.`;
            
            return `<div class="lb-row ${isMe ? 'me' : ''}">
                <div class="lb-rank ${rankCls}">${rankTxt}</div>
                <div class="lb-name">${e.name}${isMe ? ' <span style="color:#818cf8;font-size:11px;font-weight:700;">(siz)</span>' : ''}</div>
                <div class="lb-score">${e.score}/${maxScore}</div>
                <div class="lb-time"><i class="fa-regular fa-clock"></i> ${timeStr}</div>
            </div>`;
        }).join('');
    } catch (err) {
        list.innerHTML = '<div class="lb-empty"><i class="fa-solid fa-triangle-exclamation"></i> Reytingni yuklashda xatolik yuz berdi. Internetni tekshiring.</div>';
    }
}

// Render tabs and display Leaderboard Screen
function showLeaderboard() {
    document.getElementById('q-card').style.display = 'none';
    document.getElementById('result-panel').style.display = 'none';
    document.getElementById('total-result').style.display = 'none';
    
    const lbPanel = document.getElementById('leaderboard-panel');
    lbPanel.style.display = 'block';
    
    // Build tabs dynamically
    const tabsContainer = document.getElementById('lb-tabs');
    tabsContainer.innerHTML = '';
    
    // Add "Umumiy" tab
    const mainTab = document.createElement('button');
    mainTab.className = 'lb-tab' + (currentTab === 'umumiy' ? ' active' : '');
    mainTab.textContent = 'Umumiy';
    mainTab.onclick = () => switchTab('umumiy');
    tabsContainer.appendChild(mainTab);
    
    // Add section tabs
    for (let i = 0; i < NUM_SECTIONS; i++) {
        const tab = document.createElement('button');
        tab.className = 'lb-tab' + (currentTab === i ? ' active' : '');
        tab.textContent = `${i + 1}-Bo'lim`;
        tab.onclick = () => switchTab(i);
        tabsContainer.appendChild(tab);
    }
    
    loadLeaderboard();
}

// Close Leaderboard Screen and return to test
function closeLeaderboard() {
    document.getElementById('leaderboard-panel').style.display = 'none';
    const allDone = sectionScores.every(s => s !== null);
    if (allDone) {
        document.getElementById('total-result').style.display = 'block';
    } else {
        document.getElementById('q-card').style.display = 'block';
        renderQuestion();
    }
}
