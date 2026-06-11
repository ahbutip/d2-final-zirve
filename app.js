// DOM Elements
const elements = {
    landingPage: document.getElementById('landing-page'),
    examsGrid: document.getElementById('exams-grid'),
    quizApp: document.getElementById('quiz-app'),
    backToMenuBtn: document.getElementById('back-to-menu-btn'),

    totalQuestions: document.getElementById('total-questions'),
    solvedQuestions: document.getElementById('solved-questions'),
    correctAnswers: document.getElementById('correct-answers'),
    wrongAnswers: document.getElementById('wrong-answers'),
    successRate: document.getElementById('success-rate'),
    subjectList: document.getElementById('subject-list'),
    
    currentQuestionIndicator: document.getElementById('current-question-indicator'),
    currentSubjectBadge: document.getElementById('current-subject-badge'),
    progressBar: document.getElementById('progress-bar'),
    progressText: document.getElementById('progress-text'),
    progressPercentage: document.getElementById('progress-percentage'),
    
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    
    hintContainer: document.getElementById('hint-container'),
    hintText: document.getElementById('hint-text'),
    
    explanationContainer: document.getElementById('explanation-container'),
    explanationText: document.getElementById('explanation-text'),
    
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    
    themeToggle: document.getElementById('theme-toggle'),
    
    quizContainer: document.querySelector('.question-card'),
    actionButtons: document.querySelector('.action-buttons'),
    resultsContainer: document.getElementById('results-container'),
    finalScoreText: document.getElementById('final-score-text'),
    finalMessage: document.getElementById('final-message'),
    restartBtn: document.getElementById('restart-btn'),
    
    questionList: document.getElementById('question-list'),
    flagBtn: document.getElementById('flag-btn'),
    
    // Jokers
    jokersContainer: document.getElementById('jokers-container'),
    joker5050: document.getElementById('joker-5050'),
    jokerDouble: document.getElementById('joker-double'),
    jokerStats: document.getElementById('joker-stats'),
    jokerHint: document.getElementById('joker-hint'),
    jokerExpert: document.getElementById('joker-expert'),
    
    // Hint and Expert UI
    hintContainer: document.getElementById('hint-container'),
    hintText: document.getElementById('hint-text'),
    expertContainer: document.getElementById('expert-container'),
    expertText: document.getElementById('expert-text')
};

// Global State
let activeKurul = null;
let activeExamId = null;
let activeExamData = null;

let state = {
    currentIndex: 0,
    answers: [],
    flagged: [],
    correctCount: 0,
    wrongCount: 0,
    isDarkMode: false
};

// Initialize Application
function initApp() {
    elements.quizApp.style.display = 'none';
    document.getElementById('dashboard-page').style.display = 'none';
    
    // Skip to exams view
    activeKurul = 0;
    renderLandingPage();
    
    // Check system theme preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        if (!state.isDarkMode) toggleTheme();
    }
    
    // Setup Joker Listeners
    setupJokers();
}

function getSavedState(examId) {
    const saved = localStorage.getItem(`d2_exam_state_${examId}`);
    if (saved) {
        return JSON.parse(saved);
    }
    return null;
}

function saveState() {
    if (activeExamId) {
        localStorage.setItem(`d2_exam_state_${activeExamId}`, JSON.stringify(state));
    }
}

function renderLandingPage() {
    document.getElementById('dashboard-page').style.display = 'none';
    elements.quizApp.style.display = 'none';
    elements.landingPage.style.display = 'block';
    elements.examsGrid.innerHTML = '';
    
    // Set Kurul Title
    const titleEl = document.getElementById('kurul-title');
    if (titleEl) {
        if (activeKurul === 0) {
            titleEl.textContent = `Genel Karma Deneme Sınavları`;
        } else {
            titleEl.textContent = `Kurul ${activeKurul} Sınavları`;
        }
    }
    
    // Only use predefined exams
    let allExams = { ...window.examsData };
    window.allExamsMerged = allExams;
    
    for (let key in allExams) {
        allExams[key].id = key;
    }
    
    // Filter by activeKurul
    let filteredExams = [];
    if (activeKurul === 0) {
        filteredExams = Object.values(allExams).filter(ex => ex.kurul === undefined || ex.kurul === 0);
    } else {
        filteredExams = Object.values(allExams).filter(ex => ex.kurul === activeKurul);
    }
    
    // Eğer o kurulda sınav yoksa kullanıcıya bilgi ver
    if (filteredExams.length === 0) {
        const noExamMsg = document.createElement('p');
        noExamMsg.style.textAlign = 'center';
        noExamMsg.style.gridColumn = '1 / -1';
        noExamMsg.style.color = 'var(--text-secondary)';
        noExamMsg.innerHTML = `<em>Bu kurul için henüz bir sınav üretilmemiş. Hemen yukarıdaki <strong>✨ Yeni Rastgele Sınav Oluştur</strong> butonuna tıklayarak ilk sınavı oluşturabilirsin.</em>`;
        elements.examsGrid.appendChild(noExamMsg);
    }
    
    filteredExams.forEach(exam => {
        const savedState = getSavedState(exam.id);
        let solved = 0;
        let correct = 0;
        let hasStarted = false;
        
        if (savedState) {
            hasStarted = true;
            solved = savedState.correctCount + savedState.wrongCount;
            correct = savedState.correctCount;
        }

        const card = document.createElement('div');
        card.className = 'exam-card';
        
        const rate = solved > 0 ? Math.round((correct / solved) * 100) : 0;

        card.innerHTML = `
            <h3>${exam.title}</h3>
            <p>${exam.description || 'Klinik odaklı, TUS formatında deneme sınavı.'}</p>
            <div class="exam-stats">
                <span>Çözülen: ${solved} / ${exam.questions.length}</span>
                <span>Başarı: %${rate}</span>
            </div>
            <div class="exam-card-actions">
                ${hasStarted ? 
                    `<button class="btn btn-primary" onclick="startExam('${exam.id}', true)">Devam Et</button>
                     <button class="btn btn-secondary" onclick="resetExam('${exam.id}')">Sıfırla</button>`
                    : 
                    `<button class="btn btn-primary" onclick="startExam('${exam.id}', false)">Sınava Başla</button>`
                }
            </div>
        `;
        
        elements.examsGrid.appendChild(card);
    });
}

window.resetExam = function(examId) {
    if (confirm("Tüm sınav ilerlemeniz silinecek. Emin misiniz?")) {
        localStorage.removeItem('d2_exam_state_' + examId);
        renderLandingPage();
    }
}

window.startExam = function(examId, resume) {
    activeExamId = examId;
    activeExamData = window.allExamsMerged[examId];
    
    if (resume) {
        const savedState = getSavedState(examId);
        if (savedState) {
            state = savedState;
            // Eski state'lerde joker yoksa veya dizi değilse ekle
            if (!state.jokers || !Array.isArray(state.jokers)) {
                state.jokers = Array.from({length: activeExamData.questions.length}, () => ({
                    fiftyFifty: { used: false },
                    doubleDip: { used: false, active: false },
                    stats: { used: false },
                    hint: { used: false },
                    expert: { used: false },
                    removedIndices: null,
                    statsPercents: null
                }));
            } else {
                // Retrofit hint into existing jokers
                state.jokers.forEach(j => {
                    if (!j.hint) j.hint = { used: false };
                });
            }
        }
    } else {
        state = {
            currentIndex: 0,
            answers: new Array(activeExamData.questions.length).fill(null),
            flagged: new Array(activeExamData.questions.length).fill(false),
            correctCount: 0,
            wrongCount: 0,
            isDarkMode: state.isDarkMode,
            jokers: Array.from({length: activeExamData.questions.length}, () => ({
                fiftyFifty: { used: false },
                doubleDip: { used: false, active: false },
                stats: { used: false },
                hint: { used: false },
                expert: { used: false },
                removedIndices: null,
                statsPercents: null
            }))
        };
        saveState();
    }
    
    elements.landingPage.style.display = 'none';
    elements.quizApp.style.display = 'flex';
    
    // Reset UI visibility
    elements.quizContainer.style.display = 'block';
    elements.actionButtons.style.display = 'flex';
    elements.resultsContainer.style.display = 'none';
    
    elements.totalQuestions.textContent = activeExamData.questions.length;
    renderSubjectStats();
    renderPalette();
    updateStats();
    loadQuestion(state.currentIndex);
}

// Kurul Dashboard navigation
window.selectKurul = function(kurulId) {
    activeKurul = kurulId;
    renderLandingPage();
}

window.backToDashboard = function() {
    // Back to dashboard functionality disabled for zirve
}

// Event Listeners
elements.backToMenuBtn.addEventListener('click', () => {
    saveState();
    renderLandingPage();
});

elements.nextBtn.addEventListener('click', () => {
    if (state.currentIndex < activeExamData.questions.length - 1) {
        loadQuestion(state.currentIndex + 1);
    } else {
        showResults();
    }
});

elements.prevBtn.addEventListener('click', () => {
    if (state.currentIndex > 0) {
        loadQuestion(state.currentIndex - 1);
    }
});

elements.themeToggle.addEventListener('click', toggleTheme);

elements.restartBtn.addEventListener('click', () => {
    saveState();
    renderLandingPage();
});

elements.flagBtn.addEventListener('click', () => {
    state.flagged[state.currentIndex] = !state.flagged[state.currentIndex];
    
    // Update flag button visual
    if (state.flagged[state.currentIndex]) {
        elements.flagBtn.classList.add('is-flagged');
        elements.flagBtn.style.opacity = '1';
    } else {
        elements.flagBtn.classList.remove('is-flagged');
        elements.flagBtn.style.opacity = '0.5';
    }
    
    updatePalette();
    saveState();
});

function renderPalette() {
    elements.questionList.innerHTML = '';
    activeExamData.questions.forEach((q, index) => {
        const item = document.createElement('div');
        item.className = 'question-list-item';
        
        // Soru metninin ilk 2 cümlesini (veya 100 karakterini) al
        let previewText = q.question || q.text || "";
        const sentences = previewText.split('.');
        if (sentences.length > 2) {
            previewText = sentences[0] + '.' + sentences[1] + '...';
        } else if (previewText.length > 80) {
            previewText = previewText.substring(0, 80) + '...';
        }
        
        item.innerHTML = `
            <div class="q-header">
                <span class="q-num">Soru ${index + 1}</span>
                <div>
                    <span class="q-subject">${q.subject || q.course || "Genel"}</span>
                    <span class="q-flag-icon" style="display: none;">🚩</span>
                </div>
            </div>
            <div class="q-preview">${previewText}</div>
        `;
        
        item.addEventListener('click', () => {
            loadQuestion(index);
        });
        
        elements.questionList.appendChild(item);
    });
}

function updatePalette() {
    const items = elements.questionList.querySelectorAll('.question-list-item');
    items.forEach((item, index) => {
        item.className = 'question-list-item';
        const flagIcon = item.querySelector('.q-flag-icon');
        flagIcon.style.display = 'none';
        
        if (index === state.currentIndex) {
            item.classList.add('current');
            item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        
        if (state.answers[index] !== null) {
            if (state.answers[index] === activeExamData.questions[index].correctAnswer) {
                item.classList.add('correct');
            } else {
                item.classList.add('wrong');
            }
        }
        
        if (state.flagged[index]) {
            item.classList.add('flagged');
            flagIcon.style.display = 'inline-block';
        }
    });
}

function getSmartHint(index) {
    const q = activeExamData.questions[index];
    
    // Eğer önceden yaratılmış spesifik ipucumuz varsa kullan (eski sistem geri dönük uyumluluk)
    let existingHint = (activeExamData.hints && activeExamData.hints[index]) ? activeExamData.hints[index] : "";
    if (existingHint && !existingHint.includes("notlarınızda") && !existingHint.includes("spot bilgilere")) {
        return existingHint;
    }
    
    // Maskeleme mantığıyla dinamik ipucu
    let ans = q.options[q.correctAnswer];
    let masked = ans.split('').map((char, idx) => {
        if (char.match(/[^a-zA-ZğüşıöçĞÜŞİÖÇ0-9]/)) return char;
        if (idx < 2) return char;
        return (idx % 3 === 0 || idx % 4 === 0) ? char : '•';
    }).join('');
    
    return `Doğru cevabın harf dizilimi ipucu olarak verilmiştir: <br><strong style="letter-spacing: 2px; font-size: 1.1em; color: var(--primary-color);">${masked}</strong>`;
}

function getExpertExplanation(index) {
    // Uzman açıklaması aktif sınav verisinde varsa döndür
    if (activeExamData.explanations && activeExamData.explanations[index]) {
        return activeExamData.explanations[index];
    }
    return "Bu sorunun tıbbi detay açıklaması yapay zeka ajanları tarafından arka planda henüz işlenmedi veya bu soruya özel açıklama bulunmuyor. Yine de doğru cevabın rasyonelini temel anatomi/fizyoloji notlarınızdan doğrulayabilirsiniz.";
}

function loadQuestion(index) {
    state.currentIndex = index;
    const q = activeExamData.questions[index];
    saveState(); // Save last viewed question
    
    // Update flag button state for the current question
    if (state.flagged[index]) {
        elements.flagBtn.classList.add('is-flagged');
        elements.flagBtn.style.opacity = '1';
    } else {
        elements.flagBtn.classList.remove('is-flagged');
        elements.flagBtn.style.opacity = '0.5';
    }
    
    // Update UI headers
    elements.currentQuestionIndicator.textContent = `Soru ${index + 1} / ${activeExamData.questions.length}`;
    elements.currentSubjectBadge.textContent = q.subject || q.course || "Genel";
    
    const percentage = Math.round(((index + 1) / activeExamData.questions.length) * 100);
    elements.progressBar.style.width = `${percentage}%`;
    if (elements.progressText) elements.progressText.textContent = `Soru ${index + 1} / ${activeExamData.questions.length}`;
    if (elements.progressPercentage) elements.progressPercentage.textContent = `${percentage}%`;
    
    elements.questionText.textContent = q.question || q.text || "";
    
    // Clear previous options
    elements.optionsContainer.innerHTML = '';
    
    // Reset ve hint populate
    elements.hintContainer.removeAttribute('open');
    const hintsArray = activeExamData.hints || [];
    elements.hintText.textContent = q.hint || hintsArray[index] || "Lütfen soru metnindeki kilit klinik bulgulara odaklanın.";
    
    const hasAnswered = state.answers[index] !== null;
    const currentJokers = state.jokers[index];
    
    // Set explanation container state
    if (hasAnswered) {
        const selectedIndex = state.answers[index];
        elements.explanationContainer.style.display = 'block';
        const explanationsArray = activeExamData.explanations || [];
        elements.explanationText.textContent = q.explanation || explanationsArray[index] || "Açıklama bulunamadı.";
        if (selectedIndex === q.correctAnswer) {
            elements.explanationContainer.style.borderLeftColor = "var(--success-color)";
            elements.explanationContainer.querySelector('.explanation-title').style.color = "var(--success-color)";
        } else {
            elements.explanationContainer.style.borderLeftColor = "var(--danger-color)";
            elements.explanationContainer.querySelector('.explanation-title').style.color = "var(--danger-color)";
        }
    } else {
        elements.explanationContainer.style.display = 'none';
    }
    
    const prefixes = ['A', 'B', 'C', 'D', 'E'];
    
    q.options.forEach((option, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        
        // If already answered, apply styling
        if (hasAnswered) {
            btn.disabled = true;
            if (i === q.correctAnswer) {
                btn.classList.add('correct');
            } else if (i === state.answers[index]) {
                btn.classList.add('wrong');
            }
        }
        
        btn.innerHTML = `<span class="option-prefix">${prefixes[i]})</span> <span class="option-text">${option}</span>`;
        
        // Restore Joker states if applied
        if (currentJokers.removedIndices && currentJokers.removedIndices.includes(i)) {
            btn.disabled = true;
            btn.style.opacity = '0.3';
            btn.innerHTML = `<span class="option-prefix" style="text-decoration: line-through;">${prefixes[i]})</span> <span style="text-decoration: line-through;">(Elendi)</span>`;
        }
        
        if (currentJokers.statsPercents) {
            const percent = currentJokers.statsPercents[i];
            const statHTML = `
                <div style="margin-top: 5px; width: 100%;">
                    <div class="stat-bar" style="width: ${percent}%;"></div>
                    <span class="stat-text">%${percent}</span>
                </div>
            `;
            btn.innerHTML += statHTML;
        }
        
        if (!hasAnswered && (!currentJokers.removedIndices || !currentJokers.removedIndices.includes(i))) {
            btn.addEventListener('click', () => selectOption(i, btn));
        }
        
        elements.optionsContainer.appendChild(btn);
    });
    
    // Restore Hint and Expert
    elements.hintContainer.removeAttribute('open');
    elements.expertContainer.removeAttribute('open');
    
    if (currentJokers.hint && currentJokers.hint.used) {
        elements.hintContainer.setAttribute('open', '');
        elements.hintText.innerHTML = `<strong>💡 İpucu:</strong> <span style="color: var(--primary-color);">${getSmartHint(state.currentIndex)}</span>`;
    }
    
    if (currentJokers.expert.used) {
        elements.expertContainer.setAttribute('open', '');
        elements.expertText.innerHTML = `<strong>👨‍⚕️ Uzman Açıklaması:</strong> <span style="color: var(--primary-color);">${getExpertExplanation(state.currentIndex)}</span>`;
    }
    
    updateJokerUI(hasAnswered);
    updatePalette();
    
    // Navigation Buttons State
    elements.prevBtn.disabled = index === 0;
    
    if (index === activeExamData.questions.length - 1) {
        elements.nextBtn.textContent = 'Sınavı Bitir';
        elements.nextBtn.classList.remove('btn-secondary');
        elements.nextBtn.classList.add('btn-primary');
    } else {
        elements.nextBtn.textContent = 'Sonraki Soru';
    }
}

function selectOption(selectedIndex, btnElement) {
    const q = activeExamData.questions[state.currentIndex];
    const currentJokers = state.jokers[state.currentIndex];
    
    // Double dip kontrolü
    if (currentJokers.doubleDip.active && selectedIndex !== q.correctAnswer) {
        // Çift cevap hakkı devrede ve yanlış bildi. İkinci hakkı kaldı.
        btnElement.classList.add('wrong');
        btnElement.disabled = true;
        currentJokers.doubleDip.active = false; // Hakkını kullandı
        alert("❌ Yanlış cevap! Çift cevap hakkı sayesinde 1 şansın daha var. Tekrar seç!");
        saveState();
        return; // İşlemi durdur, tekrar seçmesine izin ver
    }
    
    // Normal akış veya double dip'te doğru bildiyse/2. hakkı kullandıysa
    currentJokers.doubleDip.active = false; // Ne olursa olsun joker inaktif olur
    state.answers[state.currentIndex] = selectedIndex;
    
    const allOptions = elements.optionsContainer.querySelectorAll('.option-btn');
    
    allOptions.forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.correctAnswer) {
            btn.classList.add('correct');
        } else if (i === selectedIndex) {
            btn.classList.add('wrong');
        }
    });
    
    if (selectedIndex === q.correctAnswer) {
        state.correctCount++;
        elements.explanationContainer.style.borderLeftColor = "var(--success-color)";
        elements.explanationContainer.querySelector('.explanation-title').style.color = "var(--success-color)";
    } else {
        state.wrongCount++;
        elements.explanationContainer.style.borderLeftColor = "var(--danger-color)";
        elements.explanationContainer.querySelector('.explanation-title').style.color = "var(--danger-color)";
    }
    
    // Show explanation
    const explanationsArray = activeExamData.explanations || [];
    elements.explanationText.textContent = q.explanation || explanationsArray[state.currentIndex] || "Açıklama bulunamadı.";
    elements.explanationContainer.style.display = 'block';
    
    updateJokerUI(true);
    updatePalette();
    updateStats();
    saveState();
}

function setupJokers() {
    elements.joker5050.addEventListener('click', () => {
        const currentJokers = state.jokers[state.currentIndex];
        if (!currentJokers.fiftyFifty.used) {
            currentJokers.fiftyFifty.used = true;
            elements.joker5050.disabled = true;
            
            const q = activeExamData.questions[state.currentIndex];
            const allOptions = elements.optionsContainer.querySelectorAll('.option-btn');
            
            let wrongIndices = [];
            for (let i = 0; i < q.options.length; i++) {
                if (i !== q.correctAnswer) wrongIndices.push(i);
            }
            
            // İki tane yanlış şıkkı rastgele seç
            wrongIndices.sort(() => 0.5 - Math.random());
            const toRemove = wrongIndices.slice(0, 2);
            currentJokers.removedIndices = toRemove;
            
            toRemove.forEach(idx => {
                const btn = allOptions[idx];
                btn.disabled = true;
                btn.style.opacity = '0.3';
                btn.innerHTML = `<span class="option-prefix" style="text-decoration: line-through;">${btn.querySelector('.option-prefix').innerText}</span> <span style="text-decoration: line-through;">(Elendi)</span>`;
            });
            saveState();
        }
    });

    elements.jokerDouble.addEventListener('click', () => {
        const currentJokers = state.jokers[state.currentIndex];
        if (!currentJokers.doubleDip.used) {
            currentJokers.doubleDip.used = true;
            currentJokers.doubleDip.active = true;
            elements.jokerDouble.disabled = true;
            elements.jokerDouble.classList.add('joker-active');
            saveState();
        }
    });

    elements.jokerStats.addEventListener('click', () => {
        const currentJokers = state.jokers[state.currentIndex];
        if (!currentJokers.stats.used) {
            currentJokers.stats.used = true;
            elements.jokerStats.disabled = true;
            
            const q = activeExamData.questions[state.currentIndex];
            const allOptions = elements.optionsContainer.querySelectorAll('.option-btn');
            
            // Sahte istatistik üret (doğru cevap genelde %40-75 arası alır)
            let totalRemaining = 100;
            const correctPercent = Math.floor(Math.random() * 35) + 40; // 40-75
            totalRemaining -= correctPercent;
            
            let percents = new Array(q.options.length).fill(0);
            percents[q.correctAnswer] = correctPercent;
            
            let wrongIndices = [];
            for (let i = 0; i < q.options.length; i++) {
                if (i !== q.correctAnswer) wrongIndices.push(i);
            }
            
            wrongIndices.forEach((idx, i) => {
                if (i === wrongIndices.length - 1) {
                    percents[idx] = totalRemaining;
                } else {
                    let share = Math.floor(Math.random() * (totalRemaining / 1.5));
                    percents[idx] = share;
                    totalRemaining -= share;
                }
            });
            
            currentJokers.statsPercents = percents;
            
            allOptions.forEach((btn, i) => {
                const statHTML = `
                    <div style="margin-top: 5px; width: 100%;">
                        <div class="stat-bar" style="width: ${percents[i]}%;"></div>
                        <span class="stat-text">%${percents[i]}</span>
                    </div>
                `;
                btn.innerHTML += statHTML;
            });
            saveState();
        }
    });

    elements.jokerHint.addEventListener('click', () => {
        const currentJokers = state.jokers[state.currentIndex];
        if (!currentJokers.hint || !currentJokers.hint.used) {
            if(!currentJokers.hint) currentJokers.hint = {used: false};
            currentJokers.hint.used = true;
            elements.jokerHint.disabled = true;
            
            elements.hintContainer.setAttribute('open', '');
            elements.hintText.innerHTML = `<strong>💡 İpucu:</strong> <span style="color: var(--primary-color);">${getSmartHint(state.currentIndex)}</span>`;
            saveState();
        }
    });

    elements.jokerExpert.addEventListener('click', () => {
        const currentJokers = state.jokers[state.currentIndex];
        if (!currentJokers.expert.used) {
            currentJokers.expert.used = true;
            elements.jokerExpert.disabled = true;
            
            elements.expertContainer.setAttribute('open', '');
            elements.expertText.innerHTML = `<strong>👨‍⚕️ Uzman Açıklaması:</strong> <span style="color: var(--primary-color);">${getExpertExplanation(state.currentIndex)}</span>`;
            saveState();
        }
    });
}

function updateJokerUI(hasAnswered) {
    if (!state.jokers) return;
    
    const currentJokers = state.jokers[state.currentIndex];
    
    // Reset active class
    elements.jokerDouble.classList.remove('joker-active');
    
    if (hasAnswered) {
        elements.joker5050.disabled = true;
        elements.jokerDouble.disabled = true;
        elements.jokerStats.disabled = true;
        elements.jokerHint.disabled = true;
        elements.jokerExpert.disabled = true;
    } else {
        elements.joker5050.disabled = currentJokers.fiftyFifty.used;
        elements.jokerDouble.disabled = currentJokers.doubleDip.used;
        elements.jokerStats.disabled = currentJokers.stats.used;
        elements.jokerHint.disabled = currentJokers.hint ? currentJokers.hint.used : false;
        elements.jokerExpert.disabled = currentJokers.expert.used;
        
        if (currentJokers.doubleDip.active) {
            elements.jokerDouble.classList.add('joker-active');
            elements.jokerDouble.disabled = false; // Leave it enabled visually though it's active
        }
    }
}

function updateStats() {
    const solved = state.correctCount + state.wrongCount;
    elements.solvedQuestions.textContent = solved;
    elements.correctAnswers.textContent = state.correctCount;
    elements.wrongAnswers.textContent = state.wrongCount;
    
    const rate = solved === 0 ? 0 : Math.round((state.correctCount / solved) * 100);
    elements.successRate.textContent = `${rate}%`;
}

function renderSubjectStats() {
    const subjectCounts = {};
    activeExamData.questions.forEach(q => {
        const subj = q.subject || q.course || "Genel";
        subjectCounts[subj] = (subjectCounts[subj] || 0) + 1;
    });
    
    elements.subjectList.innerHTML = '';
    for (const [subject, count] of Object.entries(subjectCounts)) {
        const li = document.createElement('li');
        li.innerHTML = `<span>${subject}</span> <span style="font-weight:600">${count}</span>`;
        elements.subjectList.appendChild(li);
    }
}

function showResults() {
    elements.quizContainer.style.display = 'none';
    elements.actionButtons.style.display = 'none';
    elements.resultsContainer.style.display = 'block';
    
    // Ders bazlı istatistikleri topla
    const subjectStats = {};
    activeExamData.questions.forEach((q, i) => {
        const subj = q.subject || q.course || "Genel";
        if (!subjectStats[subj]) {
            subjectStats[subj] = { total: 0, correct: 0, wrong: 0, empty: 0 };
        }
        
        subjectStats[subj].total += 1;
        
        if (state.answers[i] === null) {
            subjectStats[subj].empty += 1;
        } else if (state.answers[i] === q.correctAnswer) {
            subjectStats[subj].correct += 1;
        } else {
            subjectStats[subj].wrong += 1;
        }
    });

    let totalCalculatedScore = 0;
    let totalMaxScore = 0;
    let sumTotalQuestions = 0;
    let sumCorrect = 0;
    let sumWrong = 0;
    let sumEmpty = 0;
    let sumPenalty = 0;
    let sumNet = 0;

    const tbody = document.getElementById('results-table-body');
    if(tbody) tbody.innerHTML = '';

    for (const [subj, stats] of Object.entries(subjectStats)) {
        // Baraj hesaplaması: %50 hedef
        let target50 = stats.total / 2;
        let penalty = 0;
        
        if (stats.correct < target50) {
            penalty = target50 - stats.correct;
        }
        
        let calculatedSubjectScore = stats.correct - penalty;
        
        totalCalculatedScore += calculatedSubjectScore;
        totalMaxScore += stats.total;
        
        sumTotalQuestions += stats.total;
        sumCorrect += stats.correct;
        sumWrong += stats.wrong;
        sumEmpty += stats.empty;
        sumPenalty += penalty;
        sumNet += calculatedSubjectScore;
        
        // Tabloya ekle
        if (tbody) {
            const tr = document.createElement('tr');
            tr.style.borderBottom = "1px solid var(--border-color)";
            
            tr.innerHTML = `
                <td style="padding: 0.75rem 1rem; font-weight: 500;">${subj}</td>
                <td style="padding: 0.75rem 1rem;">${stats.total}</td>
                <td style="padding: 0.75rem 1rem; color: var(--success-color); font-weight: bold;">${stats.correct}</td>
                <td style="padding: 0.75rem 1rem; color: var(--danger-color);">${stats.wrong}</td>
                <td style="padding: 0.75rem 1rem; color: var(--warning-color);">${stats.empty}</td>
                <td style="padding: 0.75rem 1rem; color: var(--danger-color); font-weight: bold;">${penalty > 0 ? '-' + penalty : '0'}</td>
                <td style="padding: 0.75rem 1rem; color: var(--primary-color); font-weight: bold;">${calculatedSubjectScore}</td>
            `;
            tbody.appendChild(tr);
        }
    }
    
    // Toplam satırını güncelle
    if (document.getElementById('rt-total-q')) document.getElementById('rt-total-q').textContent = sumTotalQuestions;
    if (document.getElementById('rt-total-c')) document.getElementById('rt-total-c').textContent = sumCorrect;
    if (document.getElementById('rt-total-w')) document.getElementById('rt-total-w').textContent = sumWrong;
    if (document.getElementById('rt-total-e')) document.getElementById('rt-total-e').textContent = sumEmpty;
    if (document.getElementById('rt-total-p')) document.getElementById('rt-total-p').textContent = sumPenalty > 0 ? '-' + sumPenalty : '0';
    if (document.getElementById('rt-total-net')) document.getElementById('rt-total-net').textContent = sumNet;

    // 100 üzerinden puanı hesapla
    let finalScoreOver100 = (totalCalculatedScore / totalMaxScore) * 100;
    if (finalScoreOver100 < 0) finalScoreOver100 = 0; // Negatif not olmaz
    
    elements.finalScoreText.textContent = finalScoreOver100.toFixed(2);
    
    let message = "";
    if (finalScoreOver100 >= 80) message = "Tebrikler, mükemmel bir sonuç! 🥇";
    else if (finalScoreOver100 >= 60) message = "İyi iş çıkardın, ama biraz daha çalışabilirsin. 🥈";
    else if (finalScoreOver100 >= 40) message = "Baraj sistemi nedeniyle puanın düşük. Notları tekrar gözden geçirmen gerekebilir. 📚";
    else message = "Maalesef baraja çok takıldın. Ciddi bir tekrar gerekiyor. 🚨";
    
    elements.finalMessage.textContent = message;
    
    // Add review button if not present
    let reviewBtn = document.getElementById('review-exam-btn');
    if (!reviewBtn) {
        reviewBtn = document.createElement('button');
        reviewBtn.id = 'review-exam-btn';
        reviewBtn.className = 'btn btn-primary';
        reviewBtn.style.marginTop = '1rem';
        reviewBtn.style.marginRight = '1rem';
        reviewBtn.textContent = 'Cevapları İncele';
        reviewBtn.onclick = function() {
            elements.resultsContainer.style.display = 'none';
            elements.quizContainer.style.display = 'block';
            elements.actionButtons.style.display = 'flex';
        };
        elements.resultsContainer.querySelector('.results-summary').appendChild(reviewBtn);
    }
}

function toggleTheme() {
    state.isDarkMode = !state.isDarkMode;
    if (state.isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        elements.themeToggle.textContent = '☀️';
    } else {
        document.documentElement.removeAttribute('data-theme');
        elements.themeToggle.textContent = '🌙';
    }
    // Theme preference doesn't necessarily need to be tied to a specific exam state,
    // but we can save it globally or inside the exam state.
    saveState();
}

// Start the app when loaded
window.addEventListener('DOMContentLoaded', initApp);

// --- Syllabus Viewer Logic ---
let activeProf = null;

function openSyllabusModal() {
    const modal = document.getElementById('syllabus-modal');
    modal.style.display = 'flex';
    document.getElementById('prof-search').value = '';
    renderProfList();
}

function closeSyllabusModal() {
    document.getElementById('syllabus-modal').style.display = 'none';
}

function renderProfList(filterText = '') {
    const listContainer = document.getElementById('prof-list');
    listContainer.innerHTML = '';
    
    if (!window.syllabusData) return;
    
    const profs = Object.keys(window.syllabusData).sort();
    
    profs.forEach(prof => {
        if (filterText && !prof.toLowerCase().includes(filterText.toLowerCase())) {
            return;
        }
        
        const btn = document.createElement('button');
        btn.className = 'btn btn-secondary';
        btn.style.textAlign = 'left';
        btn.style.padding = '0.75rem';
        btn.style.border = '1px solid var(--border-color)';
        btn.style.backgroundColor = activeProf === prof ? 'var(--primary-color)' : 'transparent';
        btn.style.color = activeProf === prof ? '#fff' : 'var(--text-color)';
        btn.innerText = prof;
        
        btn.onclick = () => {
            activeProf = prof;
            renderProfList(document.getElementById('prof-search').value);
            renderProfTopics(prof);
        };
        
        listContainer.appendChild(btn);
    });
}

function filterProfs() {
    const text = document.getElementById('prof-search').value;
    renderProfList(text);
}

function renderProfTopics(prof) {
    const container = document.getElementById('topics-container');
    container.innerHTML = '';
    
    const profData = window.syllabusData[prof];
    if (!profData) return;
    
    const header = document.createElement('h3');
    header.style.color = 'var(--primary-color)';
    header.style.marginBottom = '1.5rem';
    header.style.borderBottom = '2px solid var(--border-color)';
    header.style.paddingBottom = '0.5rem';
    header.innerText = prof;
    container.appendChild(header);
    
    // Sort kuruls (e.g. Kurul 1, Kurul 2)
    const kuruls = Object.keys(profData).sort();
    
    kuruls.forEach(kurul => {
        const section = document.createElement('div');
        section.style.marginBottom = '1.5rem';
        section.style.backgroundColor = 'var(--card-bg)';
        section.style.padding = '1rem';
        section.style.borderRadius = 'var(--radius-md)';
        section.style.boxShadow = 'var(--shadow-sm)';
        
        const kurulTitle = document.createElement('h4');
        kurulTitle.style.marginTop = '0';
        kurulTitle.style.marginBottom = '0.75rem';
        kurulTitle.style.color = 'var(--text-color)';
        kurulTitle.innerText = '📘 ' + kurul;
        section.appendChild(kurulTitle);
        
        const ul = document.createElement('ul');
        ul.style.listStyleType = 'none';
        ul.style.paddingLeft = '0';
        ul.style.margin = '0';
        
        profData[kurul].forEach(topic => {
            const li = document.createElement('li');
            li.style.padding = '0.5rem 0';
            li.style.borderBottom = '1px dashed var(--border-color)';
            li.style.color = 'var(--text-secondary)';
            li.innerHTML = '• ' + topic;
            ul.appendChild(li);
        });
        
        // Remove last border
        if(ul.lastChild) {
            ul.lastChild.style.borderBottom = 'none';
        }
        
        section.appendChild(ul);
        container.appendChild(section);
    });
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('syllabus-modal');
    if (e.target === modal) {
        closeSyllabusModal();
    }
});

// Export Progress
window.exportProgress = function() {
    const backup = {};
    let hasData = false;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('d2_exam_state_')) {
            backup[key] = localStorage.getItem(key);
            hasData = true;
        }
    }
    
    if (!hasData) {
        alert("Henüz kaydedilmiş bir sınav ilerlemesi bulunmuyor!");
        return;
    }
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backup));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    const dateStr = new Date().toISOString().split('T')[0];
    downloadAnchorNode.setAttribute("download", `d2_zirve_yedek_${dateStr}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
};

// Import Progress
window.importProgress = function(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const backup = JSON.parse(e.target.result);
            let importedCount = 0;
            
            for (const key in backup) {
                if (key.startsWith('d2_exam_state_')) {
                    localStorage.setItem(key, backup[key]);
                    importedCount++;
                }
            }
            
            if (importedCount > 0) {
                alert(`Başarılı! ${importedCount} adet sınav ilerlemesi yüklendi. Sayfa yenileniyor...`);
                event.target.value = ''; // Reset input
                if (typeof renderLandingPage === 'function') {
                    renderLandingPage();
                } else {
                    location.reload();
                }
            } else {
                alert("Geçersiz veya boş yedek dosyası!");
            }
        } catch (err) {
            alert("Dosya okuma hatası! Lütfen geçerli bir JSON yedek dosyası seçtiğinizden emin olun.");
            console.error(err);
        }
    };
    reader.readAsText(file);
};
