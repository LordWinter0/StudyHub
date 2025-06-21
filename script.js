document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Element References ---
    const appContainer = document.getElementById('app-container');
    const themeButtons = document.querySelectorAll('.theme-btn');
    const navLinks = document.querySelectorAll('.nav-item');
    const mobileMenuButton = document.getElementById('menu-button');
    const closeMenuButton = document.getElementById('close-menu-button');
    const mobileSidebarContainer = document.getElementById('mobile-sidebar-container');
    const mobileSidebar = document.getElementById('mobile-sidebar');
    const views = {
        dashboard: document.getElementById('view-dashboard'),
        calendar: document.getElementById('view-calendar'),
        library: document.getElementById('view-library'),
        'ai-learning': document.getElementById('view-ai-learning'),
        'mind-map': document.getElementById('view-mind-map'),
        glossary: document.getElementById('view-glossary'),
        analytics: document.getElementById('view-analytics'),
        achievements: document.getElementById('view-achievements'),
        study: document.getElementById('view-study'),
        focus: document.getElementById('view-focus'),
        'learning-hub': document.getElementById('view-learning-hub'),
        settings: document.getElementById('view-settings'),
        tutorial: document.getElementById('view-tutorial')
    };
    const startReviewBtn = document.getElementById('start-review-btn');
    const studyWeakFlashcardsBtn = document.getElementById('study-weak-atoms-btn'); // Renamed
    const showAnswerBtn = document.getElementById('show-answer-btn');
    const flashcardContainer = document.getElementById('flashcard-container');
    const recallButtons = document.querySelectorAll('.recall-btn');
    const dashboardUsername = document.getElementById('dashboard-username');
    const dailyQueueCount = document.getElementById('daily-queue-count');
    const currentStreak = document.getElementById('current-streak');
    const totalMasteredFlashcards = document.getElementById('total-mastered-atoms'); // Renamed
    const upcomingEventsCount = document.getElementById('upcoming-events-count');
    const recommendedFlashcardsList = document.getElementById('recommended-atoms-list'); // Renamed
    const dailyChallengeText = document.getElementById('daily-challenge-text');
    const dailyChallengeProgress = document.getElementById('daily-challenge-progress');
    const dailyChallengeStatus = document.getElementById('daily-challenge-status');
    const claimChallengeBtn = document.getElementById('claim-challenge-btn');
    const onboardingModal = document.getElementById('onboarding-modal');
    const onboardingNextBtn = document.getElementById('onboarding-next-btn');
    const onboardingSkipBtn = document.getElementById('onboarding-skip-btn');
    const onboardingText = document.getElementById('onboarding-text');
    const onboardingSteps = {
        'step-1': document.getElementById('step-1'),
        'step-2': document.getElementById('step-2'),
        'step-3': document.getElementById('step-3')
    };

    // AI Learning Section elements
    const aiInputContent = document.getElementById('ai-input-content');
    const aiInputContentLabel = document.getElementById('ai-input-content-label');
    const aiInputModeToggle = document.getElementById('ai-input-mode-toggle');
    const aiContentSubjectSelect = document.getElementById('ai-content-subject-select');
    const aiContentNewSubjectInput = document.getElementById('ai-content-new-subject-input');
    const toggleAIContentNewSubjectInput = document.getElementById('toggle-ai-content-new-subject-input');
    const generateAiNotesBtn = document.getElementById('generate-ai-notes-btn');
    const generateNotesFlashcardsBtn = document.getElementById('generate-notes-flashcards-btn');
    const generateQuizBtn = document.getElementById('generate-quiz-btn');
    const extractKeywordsBtn = document.getElementById('extract-keywords-btn');
    const predictExamQuestionsBtn = document.getElementById('predict-exam-questions-btn');
    const summarizeContentBtn = document.getElementById('summarize-content-btn');
    const aiGenerationStatus = document.getElementById('ai-generation-status');
    const aiGeneratedOutput = document.getElementById('ai-generated-output');
    const aiOutputTitle = document.getElementById('ai-output-title');
    const aiOutputContentDisplay = document.getElementById('ai-output-content-display');

    // New Quiz Controls for AI Learning
    const quizQuestionCountInput = document.getElementById('quiz-question-count-input'); // Assuming this exists or will be added to HTML
    const quizDifficultySelect = document.getElementById('quiz-difficulty-select'); // Assuming this exists or will be added to HTML

    // Mind Map elements
    const mindMapCanvas = document.getElementById('mind-map-canvas');
    const mindMapCtx = mindMapCanvas.getContext('2d');
    const mindMapAddNodeBtn = document.getElementById('mind-map-add-node-btn');
    const mindMapClearAllBtn = document.getElementById('mind-map-clear-all-btn');
    const mindMapNodeTextInput = document.getElementById('mind-map-node-text-input');
    const mindMapSaveBtn = document.getElementById('mind-map-save-btn');
    const mindMapLoadSelect = document.getElementById('mind-map-load-select');

    // Glossary elements
    const glossarySearchInput = document.getElementById('glossary-search-input');
    const glossaryList = document.getElementById('glossary-list');
    const emptyGlossaryMessage = document.getElementById('empty-glossary-message');

    // Achievements elements
    const achievementsList = document.getElementById('achievements-list');
    const emptyAchievementsMessage = document.getElementById('empty-achievements-message');

    // Calendar elements
    const currentMonthYearDisplay = document.getElementById('current-month-year');
    const prevMonthBtn = document.getElementById('prev-month-btn');
    const nextMonthBtn = document.getElementById('next-month-btn');
    const calendarGrid = document.getElementById('calendar-grid');
    const addEventBtn = document.getElementById('add-event-btn');
    const selectedDayDisplay = document.getElementById('selected-day-display');
    const eventsListForDay = document.getElementById('events-list-for-day');

    // Add/Edit Event Modal
    const addEditEventModal = document.getElementById('add-edit-event-modal');
    const eventModalTitle = document.getElementById('event-modal-title');
    const closeEventModalBtn = document.getElementById('close-event-modal');
    const eventTitleInput = document.getElementById('event-title-input');
    const eventDateInput = document.getElementById('event-date-input');
    const eventTimeInput = document.getElementById('event-time-input');
    const eventNotesInput = document.getElementById('event-notes-input');
    const eventTypeSelect = document.getElementById('event-type-select');
    const deleteEventBtn = document.getElementById('delete-event-btn');
    const saveEventBtn = document.getElementById('save-event-btn');

    // Notification Toast (Global)
    const notificationToast = document.getElementById('notification-toast');
    const backupReminder = document.getElementById('backup-reminder');

    const emptyLibraryMessage = document.getElementById('empty-library-message');
    const quickAddFlashcardBtnDashboard = document.getElementById('quick-add-atom-btn-dashboard'); // Renamed
    const quickAddFlashcardBtnLibrary = document.getElementById('quick-add-atom-btn-library'); // Renamed
    const quickAddFlashcardModal = document.getElementById('quick-add-atom-modal'); // Renamed
    const closeQuickAddModalBtn = document.getElementById('close-quick-add-modal');
    const quickAddSubjectSelect = document.getElementById('quick-add-subject');
    const newSubjectInput = document.getElementById('new-subject-input');
    const toggleNewSubjectInputBtn = document.getElementById('toggle-new-subject-input');
    const quickAddQuestionInput = document.getElementById('quick-add-question');
    const quickAddAnswerInput = document.getElementById('quick-add-answer');
    const addFlashcardBtn = document.getElementById('add-atom-btn'); // Renamed
    const addGoalBtn = document.getElementById('add-goal-btn');
    const addGoalModal = document.getElementById('add-goal-modal');
    const closeAddGoalModalBtn = document.getElementById('close-add-goal-modal');
    const goalNameInput = document.getElementById('goal-name-input');
    const goalTargetTypeSelect = document.getElementById('goal-target-type');
    const goalTargetValueInput = document.getElementById('goal-target-value');
    const goalEndDateInput = document.getElementById('goal-end-date');
    const createGoalBtn = document.getElementById('create-goal-btn');
    const goalsList = document.getElementById('goals-list');
    const emptyGoalsMessage = document.getElementById('empty-goals-message');
    const detailModal = document.getElementById('detail-modal');
    const closeDetailModalBtn = document.getElementById('close-detail-modal');
    const detailTitle = document.getElementById('detail-title');
    const detailContentText = document.getElementById('detail-content-text');
    const detailLoading = document.getElementById('detail-loading');
    const subjectDetailModal = document.getElementById('subject-detail-modal');
    const closeSubjectDetailModalBtn = document.getElementById('close-subject-detail-modal');
    const subjectDetailTitle = document.getElementById('subject-detail-title');
    const subjectFlashcardsList = document.getElementById('subject-atoms-list'); // Renamed
    const reflectionModal = document.getElementById('reflection-modal');
    const closeReflectionModalBtn = document.getElementById('close-reflection-modal');
    const reflectionTextarea = document.getElementById('reflection-text');
    const saveReflectionBtn = document.getElementById('save-reflection-btn');
    const usernameInput = document.getElementById('username-input');
    const saveUsernameBtn = document.getElementById('save-username-btn');
    const sidebarUsername = document.getElementById('sidebar-username');
    const sidebarUsernameMobile = document.getElementById('sidebar-username-mobile');
    const globalSearchInput = document.getElementById('global-search-input');
    const searchResultsModal = document.getElementById('search-results-modal');
    const closeSearchResultsModalBtn = document.getElementById('close-search-results-modal');
    const searchResultsContent = document.getElementById('search-results-content');

    // Settings Spaced Repetition Intervals
    const intervalPerfectInput = document.getElementById('interval-perfect');
    const intervalGoodInput = document.getElementById('interval-good');
    const intervalStruggledInput = document.getElementById('interval-struggled');
    const intervalForgotInput = document.getElementById('interval-forgot');
    const saveIntervalsBtn = document.getElementById('save-intervals-btn');
    const subjectGrid = document.getElementById('subject-grid');
    const aiMaterialsList = document.getElementById('ai-materials-list');
    const emptyAiMaterialsMessage = document.getElementById('empty-ai-materials-message');

    // Data Export/Import
    const exportDataBtn = document.getElementById('export-data-btn');
    const importDataInput = document.getElementById('import-data-input');
    const importDataBtn = document.getElementById('import-data-btn');

    // Quiz Modal Elements
    const quizModal = document.getElementById('quiz-modal');
    const closeQuizModalBtn = document.getElementById('close-quiz-modal');
    const quizTitle = document.getElementById('quiz-title');
    const quizQuestionContainer = document.getElementById('quiz-question-container');
    const quizQuestionText = document.getElementById('quiz-question-text');
    const quizOptions = document.getElementById('quiz-options');
    const quizSubmitAnswerBtn = document.getElementById('quiz-submit-answer-btn'); // Corrected assignment
    const quizFeedback = document.getElementById('quiz-feedback');
    const quizResultsContainer = document.getElementById('quiz-results-container');
    const quizScoreDisplay = document.getElementById('quiz-score-display');
    const quizRetakeBtn = document.getElementById('quiz-retake-btn');
    const quizReviewAnswersBtn = document.getElementById('quiz-review-answers-btn');
    const quizReviewDetailContainer = document.getElementById('quiz-review-detail-container');
    const quizReviewList = document.getElementById('quiz-review-list');
    const quizBackToResultsBtn = document.getElementById('quiz-back-to-results-btn');

    // Tutorial Elements
    const tutorialTourButtons = document.querySelectorAll('.tutorial-tour-btn');
    const tutorialDetailedGuideItems = document.querySelectorAll('[data-guide]');
    const tutorialStepModal = document.getElementById('tutorial-step-modal');
    const closeTutorialStepModalBtn = document.getElementById('close-tutorial-step-modal');
    const tutorialStepTitle = document.getElementById('tutorial-step-title');
    const tutorialStepContent = document.getElementById('tutorial-step-content');
    const tutorialPrevBtn = document.getElementById('tutorial-prev-btn');
    const tutorialNextBtn = document.getElementById('tutorial-next-btn');
    const tutorialFinishBtn = document.getElementById('tutorial-finish-btn');

    // Reference to quiz settings container (needed for showing/hiding)
    const quizSettingsContainer = document.getElementById('quiz-settings-container');


    // --- Global State & Data ---
    // Initial user data and mock data structure
    let initialUserData = {
        name: "Learner",
        streak: 0,
        totalMastered: 0,
        learningGoals: [],
        weeklyStudyTime: 0,
        focusedSubjects: [],
        dailyChallengeProgress: 0,
        lastChallengeDate: null,
        srsIntervals: { perfect: 7, good: 3, struggled: 1, forgot: 0.25 }, // 0.25 days = 6 hours
        srsFactors: { perfect: 2.5, good: 2.0, struggled: 1.5, forgot: 1.3 },
        achievements: [],
        lastExportDate: null,
        dailyChallengeCount: 0,
        lastChallengeClaimDate: null,
        onboardingCompleted: false, // Ensure this is explicitly false for new users
        dailyStudyLogs: [], // Initialize as empty array
        monthlyMasteryLogs: [] // Initialize as empty array to prevent TypeError
    };

    // Default subjects for quick add and AI learning, in addition to user-added ones
    const defaultSubjects = [
        { id: 'mathematics', name: 'Mathematics', color: 'bg-indigo-100', textColor: 'text-indigo-800' },
        { id: 'science', name: 'Science', color: 'bg-emerald-100', textColor: 'text-emerald-800' },
        { id: 'history', name: 'History', color: 'bg-rose-100', textColor: 'text-rose-800' },
        { id: 'literature', name: 'Literature', color: 'bg-amber-100', textColor: 'text-amber-800' },
        { id: 'computer-science', name: 'Computer Science', color: 'bg-purple-100', textColor: 'text-purple-800' },
        { id: 'arts', name: 'Arts', color: 'bg-pink-100', textColor: 'text-pink-800' },
        { id: 'languages', name: 'Languages', color: 'bg-cyan-100', textColor: 'text-cyan-800' }
    ];

    let mockData = {
        user: JSON.parse(localStorage.getItem('auralearn_user')),
        subjects: JSON.parse(localStorage.getItem('auralearn_subjects')),
        flashcards: (JSON.parse(localStorage.getItem('auralearn_flashcards')) || []).map(f => ({ // Renamed from learningAtoms
            ...f,
            lastReviewed: f.lastReviewed ? new Date(f.lastReviewed) : new Date(),
            nextReview: f.nextReview ? new Date(f.nextReview) : new Date(),
            easeFactor: f.easeFactor || 2.5,
            interval: f.interval || 0,
            repetitions: f.repetitions || 0
        })),
        aiMaterials: JSON.parse(localStorage.getItem('auralearn_ai_materials')),
        glossary: JSON.parse(localStorage.getItem('auralearn_glossary')),
        mindMaps: JSON.parse(localStorage.getItem('auralearn_mind_maps')),
        calendarEvents: (JSON.parse(localStorage.getItem('auralearn_calendar_events')) || []).map(event => ({
            ...event,
            date: new Date(event.date)
        })),
        soundscapes: [
            { name: 'Rain', icon: '🌧️', file: 'rain.mp3' },
            { name: 'Forest', icon: '🌲', file: 'forest.mp3' },
            { name: 'Cafe', icon: '☕', file: 'cafe.mp3' },
            { name: 'Waves', icon: '🌊', file: 'waves.mp3' } // Changed '?' to '🌊'
        ],
        // New Themes data (you'll need to update style.css and index.html to fully support these)
        themes: [
            { id: 'light', name: 'Light' },
            { id: 'dark', name: 'Dark' },
            { id: 'vibrant', name: 'Vibrant' },
            { id: 'forest-green', name: 'Forest Green' },
            { id: 'ocean-blue', name: 'Ocean Blue' },
            { id: 'warm-sunset', name: 'Warm Sunset' },
            { id: 'cool-breeze', name: 'Cool Breeze' },
            { id: 'mono-contrast', name: 'Mono Contrast' }
        ],
        learningHubContent: { /* ... (same as before) ... */
             auralearnBasics: [
                { title: "What are Flashcards?", summary: "The building blocks of your knowledge in AuraLearn.", details: "In AuraLearn, a 'Flashcard' is the smallest, most fundamental piece of information or concept you want to master, presented as a question-answer pair. Breaking down knowledge into these atomic units allows AuraLearn's intelligent Spaced Repetition System (SRS) to precisely track your mastery of each individual piece and schedule it for optimal review, ensuring you don't waste time on what you already know while reinforcing challenging concepts." }, // Updated 'Learning Atom'
                { title: "How Spaced Repetition Works", summary: "A science-backed method for long-term memory.", details: "AuraLearn's core is its Spaced Repetition System (SRS). After you review a 'Flashcard', you rate how well you recalled it. Based on your rating, AuraLearn's algorithm calculates the optimal time to show you that card again - just before you're likely to forget it. Easy concepts are reviewed less often, difficult ones more frequently. This adaptive scheduling is scientifically proven to move information from short-term to long-term memory much more efficiently than traditional cramming." }, // Updated 'Learning Atom'
                { title: "Your Mastery Score", summary: "Understanding your progress.", details: "Your 'Mastery Score' in AuraLearn reflects how deeply ingrained a 'Flashcard' is in your long-term memory. It's dynamically updated based on your recall performance during study sessions. The higher your mastery, the less frequently a card needs to be reviewed. This metric provides a clear, objective view of your knowledge retention over time across all your subjects." } // Updated 'Learning Atom'
            ],
            techniques: [
                { title: "Spaced Repetition", summary: "Reviewing material at increasing intervals to optimize retention.", details: "" },
                { title: "Active Recall", summary: "Testing yourself rather than passively re-reading.", details: "" },
                { title: "Feynman Technique", summary: "Learn by teaching; simplify complex ideas.", details: "" },
                { title: "Interleaving", summary: "Mixing different topics/problems during study.", details: "" },
                { title: "Elaboration", summary: "Connecting new info to existing knowledge.", details: "" },
                { title: "Retrieval Practice", summary: "Actively pulling information out of your brain.", details: "" },
                { title: "Reading & Understanding Fast", summary: "Strategies to accelerate comprehension without losing depth.", details: "" },
                { title: "Study Effectively", summary: "Optimizing your study time for maximum impact.", details: "" }
            ],
            memorization: [
                { title: "Mnemonic Devices", summary: "Using memory aids like acronyms or rhymes.", details: "" },
                { title: "Method of Loci (Memory Palace)", summary: "Associating items with locations in a familiar place.", details: "" },
                { title: "Chunking", summary: "Grouping information into smaller, manageable units.", details: "" },
                { title: "Visual Imagery", summary: "Creating vivid mental pictures to aid recall.", details: "" },
                { title: "Story Method", summary: "Weaving items into a narrative.", details: "" },
                { title: "Remember What You Read", summary: "Strategies to retain information from texts.", details: "" },
                { title: "Memorize Fast", summary: "Accelerated memorization techniques.", details: "" }
            ],
            biases: [
                { title: "Confirmation Bias", summary: "Seeking info that confirms existing beliefs.", details: "" },
                { title: "Availability Heuristic", summary: "Overestimating based on ease of recall.", details: "" },
                { title: "Dunning-Kruger Effect", summary: "Mistakenly overestimating one's knowledge/ability.", details: "" },
                { title: "Anchoring Bias", summary: "Over-relying on the first piece of info encountered.", details: "" },
                { title: "Hindsight Bias", summary: "'I knew it all along' phenomenon.", details: "" }
            ],
            productivity: [
                { title: "The 1-Hour Study Method", summary: "Structured, efficient study blocks.", details: "" },
                { title: "Love Disciplining Yourself", summary: "Strategies for building self-discipline.", details: "" },
                { title: "Stop Phone Addiction", summary: "Practical steps to reduce digital distractions.", details: "" },
                { title: "6-Step Method for Catching Up", summary: "A structured approach to recover lost study time.", details: "" },
                { title: "Use Second Brain", summary: "Organizing your knowledge outside your head.", details: "" },
                { title: "5 Productivity Tips Teachers Never Teach", summary: "Unconventional but effective study habits.", details: "" },
                { title: "Manage Your Study Schedule", summary: "Creating and sticking to an effective learning routine.", details: "" },
                { title: "Best Study Schedules for YOU!", summary: "Tailoring study plans to individual needs.", details: "" },
                { title: "Combat ADHD (Study Tips)", "summary": "Strategies for studying with attention challenges.", details: "" },
                { title: "5 Most Effective Note-Taking Methods", summary: "Optimizing your notes for better retention and recall.", details: "" },
                { title: "5 Effective Study Methods to Boost Motivation", summary: "Techniques to stay engaged and energized.", details: "" },
                { title: "Understand Better and Faster", summary: "Deepening comprehension with efficient techniques.", details: "" },
                { title: "Focus When Feeling Tired", summary: "Tips for maintaining concentration when fatigued.", details: "" },
                { title: "5 Scientifically-Backed Study Methods to Build Discipline", summary: "Practical strategies for fostering self-control in learning.", details: "" }
            ],
            examPrep: [
                { title: "How to Predict Exam Questions", summary: "Strategies to anticipate potential test content.", details: "" },
                { title: "A+ Study Tips Students Won't Tell", summary: "Insider tips for achieving top grades.", details: "" },
                { title: "Ace Your Science Exams", summary: "Specific strategies for excelling in science subjects.", details: "" },
                { title: "Study Less and Get Higher Grades", summary: "Efficiency strategies for academic success.", details: "" },
                { title: "Ace Exams in Just 3 Days", summary: "High-intensity, focused exam preparation.", details: "" },
                { title: "Decode Exam Questions Like a Pro", summary: "Understanding what questions are truly asking.", details: "" }
            ],
            advanced: [
                { title: "Metacognition & Self-Regulation", summary: "Understanding and managing your own learning.", details: "" },
                { title: "Dual Coding Theory", summary: "Combining verbal and visual representations.", details: "" },
                { title: "Desirable Difficulties", summary: "Strategies that slow learning but aid long-term retention.", details: "" },
                { title: "Growth Mindset", summary: "Believing intelligence can be developed.", details: "" },
                { title: "Pomodoro Technique", summary: "Structured time management for focus.", details: "" }
            ]
        },
        tutorialContent: { /* ... (same as before) ... */
            dashboard: {
                title: "Dashboard Overview",
                steps: [
                    {
                        heading: "Your Learning Hub",
                        content: "The Dashboard is your personalized home for AuraLearn. It gives you a quick snapshot of your daily flashcard queue, current streak, and overall progress.", // Updated 'flashcard'
                        highlightElementId: "view-dashboard"
                    },
                    {
                        heading: "Daily Review Queue",
                        content: "This section shows you the 'Flashcards' that are due for review today based on our intelligent Spaced Repetition algorithm. Click 'Start Daily Review' to begin!", // Updated 'Flashcards'
                        highlightElementId: "daily-queue-list"
                    },
                    {
                        heading: "Progress at a Glance",
                        content: "Track your current study streak and total mastered flashcards to see your consistency and knowledge growth.", // Updated 'flashcards'
                        highlightElementId: "current-streak"
                    },
                    {
                        heading: "Upcoming Events",
                        content: "See how many assignments, exams, or study sessions are coming up in the next 7 days from your calendar.",
                        highlightElementId: "upcoming-events-count"
                    },
                    {
                        heading: "Recommended for You",
                        content: "AuraLearn intelligently suggests flashcards you might want to review next, helping you prioritize your learning.", // Updated 'flashcards'
                        highlightElementId: "recommended-atoms-list"
                    },
                    {
                        heading: "Study Weak Flashcards", // Renamed
                        content: "Target your most challenging concepts with a dedicated study session for 'Weak Flashcards'. These are cards you've struggled with.", // Updated 'Flashcards'
                        highlightElementId: "study-weak-atoms-btn"
                    },
                    {
                        heading: "Backup Reminder",
                        content: "AuraLearn stores your data locally. Remember to export your data regularly as a backup!",
                        highlightElementId: "backup-reminder"
                    }
                ]
            },
            library: {
                title: "Library & Flashcards",
                steps: [
                    {
                        heading: "Your Knowledge Repository",
                        content: "The Library is where all your 'Flashcards' and AI-generated materials are stored and organized by subject.", // Updated 'Flashcards'
                        highlightElementId: "view-library"
                    },
                    {
                        heading: "Subjects and Flashcards", // Renamed
                        content: "Your flashcards are grouped into subjects. Click on a subject to see all the flashcards within it.", // Updated 'flashcards'
                        highlightElementId: "subject-grid"
                    },
                    {
                        heading: "Quick Add Flashcards", // Renamed
                        content: "Easily add new flashcards (questions and answers) directly to your library via the 'Quick Add Flashcard' button.", // Updated 'flashcards'
                        highlightElementId: "quick-add-atom-btn-library"
                    },
                    {
                        heading: "AI Materials",
                        content: "View all the notes, quizzes, keywords, and summaries generated by the AI Learning Studio.",
                        highlightElementId: "ai-materials-section"
                    }
                ]
            },
            'ai-learning': {
                title: "AI Learning Studio",
                steps: [
                    {
                        heading: "Generate Content with AI",
                        content: "The AI Learning Studio is where you can leverage powerful AI to create study materials. Enter text or a topic here.",
                        highlightElementId: "ai-input-content"
                    },
                    {
                        heading: "Input Modes",
                        content: "Toggle between entering raw text or simply a topic name to guide the AI's generation.",
                        highlightElementId: "ai-input-mode-toggle"
                    },
                    {
                        heading: "Choose Your Output",
                        content: "Select from various AI functions: generate notes, flashcards, quizzes, extract keywords, predict exam questions, or summarize content.",
                        highlightElementId: "generate-ai-notes-btn" // Point to the first AI button
                    },
                    {
                        heading: "Assign to Subjects",
                        content: "Always assign generated content to a relevant subject for better organization, especially for flashcards.",
                        highlightElementId: "ai-content-subject-select"
                    }
                ]
            },
            'focus-tools': {
                title: "Focus Tools",
                steps: [
                    {
                        heading: "Boost Your Concentration",
                        content: "The Focus Tools help you create an optimal environment for deep work and effective study sessions.",
                        highlightElementId: "view-focus"
                    },
                    {
                        heading: "Smart Focus Timer (Pomodoro)",
                        content: "Utilize the Pomodoro Technique to break your study time into focused intervals with short breaks to prevent burnout.",
                        highlightElementId: "pomodoro-timer"
                    },
                    {
                        heading: "Ambient Soundscapes",
                        content: "Enhance your focus by playing soothing background sounds. Click on a soundscape to start/stop.",
                        highlightElementId: "soundscapes"
                    }
                ]
            },
            'srs-deep-dive': {
                title: "Deep Dive: Spaced Repetition System (SRS)",
                isDetailedGuide: true,
                content: `
                    <h3>Main Info</h3>
                    <ul>
                        <li>Spaced Repetition is a learning technique where you review material at increasing intervals over time. The goal is to revisit information just as you're about to forget it, which dramatically improves long-term retention compared to cramming.</li>
                    </ul>
                    <h3>How AuraLearn's SRS Works</h3>
                    <ul>
                        <li><strong>Recall Rating:</strong> After reviewing a flashcard, you rate your recall: Forgot (0), Struggled (1), Good (2), Perfect (3).</li>
                        <li><strong>Ease Factor:</strong> This factor (initially 2.5) adjusts based on your rating. Perfect recall increases it, while poor recall decreases it.</li>
                        <li><strong>Interval Calculation:</strong> The next review interval is calculated using your last interval, ease factor, and the number of repetitions. For example:
                            <ul>
                                <li><strong>Forgot (0):</strong> Review in a few hours.</li>
                                <li><strong>Struggled (1):</strong> Review in 1 day.</li>
                                <li><strong>Good (2):</strong> Next interval = Previous Interval * Ease Factor.</li>
                                <li><strong>Perfect (3):</strong> Next interval = Previous Interval * Ease Factor.</li>
                            </ul>
                        </li>
                    </ul>
                    <h3>Conclusion</h3>
                    <ul>
                        <li>This adaptive system ensures that concepts you find easy are reviewed less often, freeing up time for more challenging material.</li>
                    </ul>
                `
            },
            'customizing-ai': {
                title: "Customizing AI Generation",
                isDetailedGuide: true,
                content: `
                    <h3>Main Info</h3>
                    <ul>
                        <li>The AI Learning Studio is powerful, but good input leads to great output.</li>
                    </ul>
                    <h3>Tips for Getting the Best Results from AI Learning Studio</h3>
                    <ul>
                        <li><strong>Be Specific::</strong> The more precise your prompt or input text, the better the AI can understand your needs.</li>
                        <li><strong>Topic Mode vs. Text Mode:</b>
                            <ul>
                                <li><strong>Topic Mode:</strong> Use for broad subjects (e.g., "Quantum Physics", "History of Ancient Rome"). The AI will generate general knowledge.</li>
                                <li><strong>Text Mode:</strong> Use when you have specific content (e.g., lecture notes, an article snippet) you want the AI to process directly.</li>
                            </ul>
                        </li>
                        <li><strong>Assign Subjects:</strong> Always assign generated content to a relevant subject. This is crucial for flashcards to appear in your Library under the correct category.</li>
                        <li><strong>Iterate:</strong> If the first output isn't perfect, try rephrasing your input or generating a different type of material.</li>
                        <li><strong>Edit Output:</strong> Don't treat AI output as final. It's a starting point! Use it as a draft and refine it to perfectly suit your learning style and needs.</li>
                    </ul>
                    <h3>Conclusion</h3>
                    <ul>
                        <li>By providing clear instructions and refining outputs, you can maximize the AI's effectiveness as a study aid.</li>
                    </ul>
                `
            },
            'goal-setting': {
                title: "Effective Goal Setting",
                isDetailedGuide: true,
                content: `
                    <h3>Main Info</h3>
                    <ul>
                        <li>Goals help you stay motivated and track progress in your learning journey.</li>
                    </ul>
                    <h3>Using the SMART Framework for Learning Goals</h3>
                    <ul>
                        <li><strong>Specific:</strong> Clearly define what you want to achieve. (e.g., "Master 50 new JavaScript flashcards" instead of "Learn JavaScript").</li>
                        <li><strong>Measurable:</strong> Ensure your goal can be tracked. AuraLearn helps with this by tracking mastered flashcards and study time.</li>
                        <li><strong>Achievable:</strong> Set realistic goals that challenge you but are not impossible.</li>
                        <li><strong>Relevant:</strong> Your goals should align with your broader academic or personal development objectives.</li>
                        <li><strong>Time-bound:</strong> Give your goal a clear end date. This creates urgency.</li>
                    </ul>
                    <h3>How to Set Goals in AuraLearn</h3>
                    <ul>
                        <li>Go to the <strong>Analytics</strong> view and click "<strong>+ Add Goal</strong>" to set your objectives.</li>
                    </ul>
                    <h3>Conclusion</h3>
                    <ul>
                        <li>Setting SMART goals will provide clear direction and motivate consistent effort.</li>
                    </ul>
                `
            },
            'data-management': {
                title: "Data Backup & Import",
                isDetailedGuide: true,
                content: `
                    <h3>Main Info</h3>
                    <ul>
                        <li>AuraLearn stores all your data locally in your browser's storage. While convenient, it's a good practice to back up your data regularly.</li>
                    </ul>
                    <h3>How to Export Your Data</h3>
                    <ul>
                        <li>In the <strong>Settings</strong> view, click the "<strong>Export Data</strong>" button. This will download a JSON file containing all your user profile, flashcards, subjects, AI materials, glossary, and mind maps.</li>
                        <li><em>Recommendation: Store this file in a safe place, like cloud storage (Google Drive, Dropbox) or an external hard drive.</em></li>
                    </ul>
                    <h3>How to Import Your Data</h3>
                    <ul>
                        <li>To restore your data, go to <strong>Settings</strong> and click "<strong>Import Data</strong>". Select the JSON file you previously exported.</li>
                        <li><strong>Warning:</strong> Importing data will replace your current AuraLearn data. Only import data you trust and intend to use.</li>
                        <li><em>This method does not merge data; it overwrites.</em></li>
                    </ul>
                    <h3>Conclusion</h3>
                    <ul>
                        <li>Regular backups ensure your hard work and learning progress are never lost!</li>
                    </ul>
                `
            }
        }
    };

    // Initialize mockData with fallback values if localStorage is empty or partial
    let storedUser = JSON.parse(localStorage.getItem('auralearn_user'));
    mockData.user = storedUser || JSON.parse(JSON.stringify(initialUserData)); // Use initialUserData if no stored data

    // Contingency: Ensure all properties from initialUserData exist on mockData.user
    // This handles cases where old user data from localStorage might be missing new properties
    for (const key in initialUserData) {
        if (mockData.user[key] === undefined) {
            // For nested objects/arrays, ensure a deep copy if initialUserData[key] is not primitive
            if (typeof initialUserData[key] === 'object' && initialUserData[key] !== null) {
                mockData.user[key] = JSON.parse(JSON.stringify(initialUserData[key]));
            } else {
                mockData.user[key] = initialUserData[key];
            }
        }
    }

    mockData.subjects = mockData.subjects || []; // Ensure subjects array exists
    mockData.aiMaterials = mockData.aiMaterials || [];
    mockData.glossary = mockData.glossary || [];
    mockData.mindMaps = mockData.mindMaps || [];
    // flashcards and calendarEvents are already handled with a default empty array and map over


    let appState = {
        currentView: localStorage.getItem('auralearn_currentView') || 'dashboard',
        studySession: { isActive: false, queue: [], currentIndex: 0, flashcardsReviewedInSession: 0 }, // Renamed
        pomodoro: { timerId: null, timeLeft: 25 * 60, isRunning: false, mode: 'work', audio: null },
        onboardingCompleted: localStorage.getItem('auralearn_onboardingCompleted') === 'true', // Correctly read bool
        currentTheme: localStorage.getItem('auralearn_theme') || 'light',
        learningHubCategory: 'auralearnBasics',
        aiInputMode: 'text',
        currentQuiz: null,
        quizSession: { isActive: false, questions: [], currentIndex: 0, score: 0, selectedAnswer: null, answers: [] },
        currentTutorial: null,
        currentTutorialStep: 0,
        activeSoundscapeAudio: null,
        mindMap: {
            nodes: [],
            connections: [],
            selectedNode: null,
            connectingNode: null,
            isDragging: false,
            dragOffsetX: 0,
            dragOffsetY: 0,
            scale: 1,
            offsetX: 0,
            offsetY: 0
        },
        calendar: {
            currentDate: new Date(),
            selectedDay: null,
            editingEvent: null
        }
    };

    // Gemini API configuration (placeholder - Canvas will provide this at runtime)
    const apiKey = "AIzaSyAy9O8ICJ7kcWTAyPkc1qfHeGWX95wjUxc";

    // --- Helper Functions ---

    /**
     * Shows a notification toast with a message.
     * @param {string} message - The message to display.
     * @param {boolean} isError - If true, displays an error style.
     */
    function showNotification(message, isError = false) {
        if (!notificationToast) {
            console.error('Notification toast element not found.');
            return;
        }
        notificationToast.textContent = message;
        notificationToast.classList.remove('hidden', 'notification-success', 'notification-error');
        if (isError) {
            notificationToast.classList.add('notification-error');
        } else {
            notificationToast.classList.add('notification-success');
        }
        notificationToast.classList.add('show');

        setTimeout(() => {
            notificationToast.classList.remove('show');
            notificationToast.classList.add('hidden');
        }, 3000); // Hide after 3 seconds
    }

    /**
     * Helper to format a Date object into 'YYYY-MM-DD' for input[type="date"]
     * using local date components.
     * @param {Date} date - The date object.
     * @returns {string} Formatted date string or empty string if date is null/invalid.
     */
    function formatDateForInput(date) {
        if (!date) return '';
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }


    /**
     * Saves all mockData to localStorage.
     */
    function saveUserData() {
        try {
            // Ensure data structures are clean before saving (e.g., no recursive references)
            // Dates should be converted to ISO strings for JSON serialization
            const dataToSave = {
                user: mockData.user,
                subjects: mockData.subjects,
                flashcards: mockData.flashcards.map(f => ({
                    ...f,
                    lastReviewed: f.lastReviewed instanceof Date ? f.lastReviewed.toISOString() : f.lastReviewed,
                    nextReview: f.nextReview instanceof Date ? f.nextReview.toISOString() : f.nextReview
                })),
                aiMaterials: mockData.aiMaterials,
                glossary: mockData.glossary,
                mindMaps: mockData.mindMaps,
                calendarEvents: mockData.calendarEvents.map(event => ({
                    ...event,
                    // Store date as ISO string (UTC) but ensure it was correctly created as local date.
                    // The crucial part is that `event.date` itself holds the correct local date values.
                    date: event.date instanceof Date ? event.date.toISOString() : event.date
                }))
            };

            localStorage.setItem('auralearn_user', JSON.stringify(dataToSave.user));
            localStorage.setItem('auralearn_subjects', JSON.stringify(dataToSave.subjects));
            localStorage.setItem('auralearn_flashcards', JSON.stringify(dataToSave.flashcards));
            localStorage.setItem('auralearn_ai_materials', JSON.stringify(dataToSave.aiMaterials));
            localStorage.setItem('auralearn_glossary', JSON.stringify(dataToSave.glossary));
            localStorage.setItem('auralearn_mind_maps', JSON.stringify(dataToSave.mindMaps));
            localStorage.setItem('auralearn_calendar_events', JSON.stringify(dataToSave.calendarEvents));
            localStorage.setItem('auralearn_onboardingCompleted', appState.onboardingCompleted);
            localStorage.setItem('auralearn_currentView', appState.currentView);
            localStorage.setItem('auralearn_theme', appState.currentTheme);
            // console.log("User data saved successfully!");
        } catch (error) {
            console.error("Error saving user data:", error);
            showNotification("Error saving data. Please try again or export manually.", true);
        }
    }

    /**
     * Loads the specified view and updates active navigation link.
     * @param {string} viewName
     */
    function loadView(viewName) {
        // Hide all views
        Object.values(views).forEach(view => view.classList.add('hidden'));

        // Show the requested view
        const targetView = views[viewName];
        if (targetView) {
            targetView.classList.remove('hidden');
            appState.currentView = viewName;
            saveUserData(); // Save current view state

            // Update active nav link
            navLinks.forEach(link => {
                if (link.dataset.view === viewName) {
                    link.classList.add('nav-item-active');
                } else {
                    link.classList.remove('nav-item-active');
                }
            });

            // Close mobile sidebar if open
            mobileSidebarContainer.classList.add('hidden');
            mobileSidebar.classList.remove('translate-x-0');

            // Perform view-specific updates
            if (viewName === 'dashboard') {
                updateDashboard();
            } else if (viewName === 'library') {
                renderSubjects();
                renderAiMaterials();
            } else if (viewName === 'calendar') {
                renderCalendar(appState.calendar.currentDate);
                renderEventsForSelectedDay(appState.calendar.selectedDay || new Date());
            } else if (viewName === 'analytics') {
                renderAnalyticsCharts();
                renderLearningGoals();
            } else if (viewName === 'glossary') {
                renderGlossary();
            } else if (viewName === 'achievements') {
                renderAchievements();
            } else if (viewName === 'focus') {
                updatePomodoroDisplay();
            } else if (viewName === 'learning-hub') {
                renderLearningHubContent(appState.learningHubCategory);
            } else if (viewName === 'settings') {
                loadSettings();
            }
        } else {
            console.error('View not found:', viewName);
        }
    }

    /**
     * Renders the list of recommended flashcards on the dashboard.
     */
    function renderRecommendedFlashcards() {
        if (!recommendedFlashcardsList) return;

        recommendedFlashcardsList.innerHTML = '';
        const now = new Date();

        // Filter flashcards that are due for review AND sort by nextReview date
        const dueFlashcards = mockData.flashcards
            .filter(flashcard => flashcard.nextReview <= now)
            .sort((a, b) => a.nextReview.getTime() - b.nextReview.getTime());

        if (dueFlashcards.length === 0) {
            recommendedFlashcardsList.innerHTML = `
                <li class="list-item-themed p-3 rounded-lg border text-secondary text-center">
                    No flashcards due soon! Keep up the great work!
                </li>
            `;
            startReviewBtn.disabled = true;
            dailyQueueCount.textContent = `0 Flashcards`;
        } else {
            dueFlashcards.slice(0, 5).forEach(flashcard => {
                const li = document.createElement('li');
                li.className = 'list-item-themed p-3 rounded-lg border flex justify-between items-center';
                const subject = mockData.subjects.find(s => s.id === flashcard.subjectId);
                const subjectName = subject ? subject.name : 'Uncategorized';
                li.innerHTML = `
                    <span class="font-medium text-primary truncate mr-2">${flashcard.question}</span>
                    <span class="text-sm ${subject ? subject.textColor : 'text-gray-600'} ${subject ? subject.color : 'bg-gray-200'} px-2 py-1 rounded-full">${subjectName}</span>
                `;
                recommendedFlashcardsList.appendChild(li);
            });
            startReviewBtn.disabled = false;
            dailyQueueCount.textContent = `${dueFlashcards.length} Flashcard${dueFlashcards.length !== 1 ? 's' : ''}`;
        }
        updateDailyChallengeProgress(); // Update challenge after rendering recommended flashcards
        updateStudyWeakFlashcardsButton(); // Update study weak button count
    }


    /**
     * Initializes the daily challenge if not already set for today.
     * Increments progress and checks for completion.
     */
    function updateDailyChallengeProgress() {
        if (!dailyChallengeText || !dailyChallengeProgress || !dailyChallengeStatus || !claimChallengeBtn) return;

        const today = new Date().toDateString();
        const lastChallengeDate = mockData.user.lastChallengeDate;
        const masteredToday = mockData.flashcards.filter(f =>
            f.lastReviewed && new Date(f.lastReviewed).toDateString() === today && f.repetitions >= 3 && f.easeFactor >= 2.0
        ).length;

        // Reset challenge if new day
        if (lastChallengeDate !== today) {
            mockData.user.dailyChallengeProgress = 0;
            mockData.user.lastChallengeDate = today;
            mockData.user.dailyChallengeCount = 0; // Reset daily count for the new day
            claimChallengeBtn.classList.add('hidden');
            saveUserData();
        }

        mockData.user.dailyChallengeProgress = masteredToday;
        const target = 5; // Example: Master 5 flashcards

        const progressPercent = (mockData.user.dailyChallengeProgress / target) * 100;
        dailyChallengeProgress.style.width = `${Math.min(100, progressPercent)}%`;
        dailyChallengeStatus.textContent = `${mockData.user.dailyChallengeProgress}/${target} Flashcards Mastered Today`;

        if (mockData.user.dailyChallengeProgress >= target) {
            dailyChallengeText.textContent = "Daily Challenge Completed!";
            claimChallengeBtn.classList.remove('hidden');
            // Check if reward has already been claimed today
            if (mockData.user.lastChallengeClaimDate === today) {
                claimChallengeBtn.disabled = true;
                claimChallengeBtn.textContent = "Reward Claimed!";
                claimChallengeBtn.classList.remove('button-primary');
                claimChallengeBtn.classList.add('bg-gray-400', 'text-white');
            } else {
                claimChallengeBtn.disabled = false;
                claimChallengeBtn.textContent = "Claim Reward";
                claimChallengeBtn.classList.add('button-primary');
                claimChallengeBtn.classList.remove('bg-gray-400', 'text-white');
            }
        } else {
            dailyChallengeText.textContent = `Master ${target} flashcards to complete today's challenge!`;
            claimChallengeBtn.classList.add('hidden');
        }
        saveUserData();
    }

    /**
     * Updates the count on the "Study Weak Flashcards" button.
     */
    function updateStudyWeakFlashcardsButton() {
        const weakFlashcards = mockData.flashcards.filter(f => f.repetitions < 3 || f.easeFactor < 2.0); // Simple definition for "weak"
        studyWeakFlashcardsBtn.textContent = `Study Weak Flashcards (${weakFlashcards.length})`;
        studyWeakFlashcardsBtn.disabled = weakFlashcards.length === 0;
    }


    /**
     * Updates the dashboard view with current user data.
     */
    function updateDashboard() {
        if (dashboardUsername) dashboardUsername.textContent = mockData.user.name;
        if (sidebarUsername) sidebarUsername.textContent = mockData.user.name;
        if (sidebarUsernameMobile) sidebarUsernameMobile.textContent = mockData.user.name;
        if (currentStreak) currentStreak.textContent = `🔥 ${mockData.user.streak} Day${mockData.user.streak !== 1 ? 's' : ''}`;
        if (totalMasteredFlashcards) totalMasteredFlashcards.textContent = `${mockData.user.totalMastered} Flashcard${mockData.user.totalMastered !== 1 ? 's' : ''}`;
        if (upcomingEventsCount) {
            const today = new Date();
            today.setHours(0,0,0,0); // Normalize today to start of day
            const sevenDaysLater = new Date();
            sevenDaysLater.setDate(today.getDate() + 7);
            sevenDaysLater.setHours(23,59,59,999); // Normalize to end of day

            const upcomingEvents = mockData.calendarEvents.filter(event =>
                event.date >= today && event.date <= sevenDaysLater
            ).length;
            upcomingEventsCount.textContent = upcomingEvents;
        }
        renderRecommendedFlashcards();
        updateDailyChallengeProgress();
        checkBackupReminder();
    }

    /**
     * Checks if the backup reminder should be shown.
     */
    function checkBackupReminder() {
        if (!backupReminder) return;
        const now = new Date();
        const lastExport = mockData.user.lastExportDate ? new Date(mockData.user.lastExportDate) : null;
        if (!lastExport || (now.getTime() - lastExport.getTime()) > (7 * 24 * 60 * 60 * 1000)) { // 7 days
            backupReminder.classList.remove('hidden');
        } else {
            backupReminder.classList.add('hidden');
        }
    }

    /**
     * Initializes a study session with due flashcards or all flashcards if none are due.
     * @param {boolean} onlyWeak - If true, only include weak flashcards.
     */
    function startStudySession(onlyWeak = false) {
        const now = new Date();
        let queue = [];

        if (onlyWeak) {
            queue = mockData.flashcards.filter(f => f.repetitions < 3 || f.easeFactor < 2.0);
            if (queue.length === 0) {
                showNotification("No weak flashcards to review!", true);
                return;
            }
        } else {
            // Include flashcards due for review and any that haven't been reviewed yet (new)
            const dueFlashcards = mockData.flashcards.filter(f => f.nextReview <= now);
            const newFlashcards = mockData.flashcards.filter(f => f.repetitions === 0 && f.nextReview > now); // Flashcards never reviewed
            queue = [...dueFlashcards, ...newFlashcards];

            if (queue.length === 0) {
                showNotification("No flashcards due for review. You're all caught up!", false);
                // Optionally, could start a session with all cards or recommend adding new ones
                return;
            }
        }

        // Shuffle the queue to randomize review order
        appState.studySession.queue = shuffleArray(queue);
        appState.studySession.currentIndex = 0;
        appState.studySession.isActive = true;
        appState.studySession.flashcardsReviewedInSession = 0; // Reset count for the new session

        loadView('study');
        loadCurrentFlashcard();
        updateStudyProgressBar();
    }

    /**
     * Loads the current flashcard into the study view.
     */
    function loadCurrentFlashcard() {
        if (appState.studySession.currentIndex < appState.studySession.queue.length) {
            const currentFlashcard = appState.studySession.queue[appState.studySession.currentIndex];
            const subject = mockData.subjects.find(s => s.id === currentFlashcard.subjectId);

            document.getElementById('card-question').textContent = currentFlashcard.question;
            document.getElementById('card-answer').textContent = currentFlashcard.answer;
            document.getElementById('card-subject-front').textContent = subject ? subject.name : 'Uncategorized';
            document.getElementById('card-subject-back').textContent = subject ? subject.name : 'Uncategorized';

            // Reset flashcard to front side
            flashcardContainer.classList.remove('flipped');
            showAnswerBtn.classList.remove('hidden');
            recallButtons.forEach(btn => btn.classList.add('hidden')); // Hide recall buttons until answer is shown
        } else {
            endStudySession();
        }
    }

    /**
     * Shows the answer of the current flashcard and reveals recall buttons.
     */
    function showAnswer() {
        flashcardContainer.classList.add('flipped');
        showAnswerBtn.classList.add('hidden');
        recallButtons.forEach(btn => btn.classList.remove('hidden'));
    }

    /**
     * Handles recall rating for a flashcard and schedules the next review.
     * @param {number} rating - The recall rating (0-3).
     */
    function handleRecall(rating) {
        const currentFlashcard = appState.studySession.queue[appState.studySession.currentIndex];

        // Spaced Repetition Logic (SM-2 algorithm simplified)
        const srsIntervals = mockData.user.srsIntervals;
        const srsFactors = mockData.user.srsFactors;

        if (rating === 0) { // Forgot
            currentFlashcard.repetitions = 0;
            currentFlashcard.interval = srsIntervals.forgot; // Very short interval (e.g., a few hours)
            currentFlashcard.easeFactor = Math.max(1.3, currentFlashcard.easeFactor - 0.20); // Decrease ease factor
        } else if (rating === 1) { // Struggled
            currentFlashcard.repetitions = 0; // Reset repetitions as it wasn't easy
            currentFlashcard.interval = srsIntervals.struggled; // Short interval (e.g., 1 day)
            currentFlashcard.easeFactor = Math.max(1.3, currentFlashcard.easeFactor - 0.10); // Slightly decrease ease factor
        } else { // Good (2) or Perfect (3)
            currentFlashcard.repetitions++;
            if (currentFlashcard.repetitions === 1) {
                currentFlashcard.interval = srsIntervals.good; // First successful recall after initial interval
            } else if (currentFlashcard.repetitions === 2) {
                currentFlashcard.interval = srsIntervals.perfect; // Second successful recall, longer interval
            } else {
                // Subsequent recalls, use ease factor for exponential growth
                currentFlashcard.interval = currentFlashcard.interval * currentFlashcard.easeFactor;
            }
            // Adjust ease factor based on performance
            if (rating === 3) { // Perfect
                currentFlashcard.easeFactor += 0.10;
            } else if (rating === 2) { // Good
                // No change or slight decrease for 'good' if not consistently perfect
                currentFlashcard.easeFactor = currentFlashcard.easeFactor; // Maintain current ease
            }
        }

        // Ensure easeFactor doesn't drop below minimum
        currentFlashcard.easeFactor = Math.max(1.3, currentFlashcard.easeFactor);

        // Calculate next review date
        const nextReviewDate = new Date();
        nextReviewDate.setDate(nextReviewDate.getDate() + currentFlashcard.interval);
        currentFlashcard.nextReview = nextReviewDate;
        currentFlashcard.lastReviewed = new Date(); // Update last reviewed date

        // Update total mastered flashcards if it's the first time mastering this one
        if (rating === 3 && currentFlashcard.repetitions === 3 && currentFlashcard.easeFactor >= 2.0) { // Define "mastered"
            const alreadyMastered = mockData.flashcards.some(f => f.id === currentFlashcard.id && f.wasMastered === true);
            if (!alreadyMastered) {
                mockData.user.totalMastered++;
                currentFlashcard.wasMastered = true; // Mark as mastered
                showNotification("Flashcard mastered!", false);
                checkAchievements();
            }
        }

        appState.studySession.flashcardsReviewedInSession++;
        updateDailyStudyLog(); // Update daily study log with reviewed flashcards
        saveUserData(); // Save the updated flashcard data immediately

        appState.studySession.currentIndex++;
        updateStudyProgressBar();
        loadCurrentFlashcard(); // Load next flashcard
    }

    /**
     * Updates the study progress bar and text.
     */
    function updateStudyProgressBar() {
        const progressBar = document.getElementById('study-progress-bar');
        const progressText = document.getElementById('study-progress-text');
        if (!progressBar || !progressText) return;

        const total = appState.studySession.queue.length;
        const current = appState.studySession.currentIndex;

        if (total === 0) {
            progressBar.style.width = '0%';
            progressText.textContent = 'Flashcard 0 of 0';
        } else {
            const progressPercent = (current / total) * 100;
            progressBar.style.width = `${progressPercent}%`;
            progressText.textContent = `Flashcard ${current} of ${total}`;
        }
    }


    /**
     * Ends the study session and prompts for reflection.
     */
    function endStudySession() {
        appState.studySession.isActive = false;
        showNotification(`Study session complete! Reviewed ${appState.studySession.flashcardsReviewedInSession} flashcards.`, false);
        updateDailyChallengeProgress(); // Final update after session
        // Only show reflection if actual flashcards were reviewed
        if (appState.studySession.flashcardsReviewedInSession > 0) {
            showModal(reflectionModal);
        } else {
            loadView('dashboard'); // Go back to dashboard if no cards were reviewed
        }
        appState.studySession.flashcardsReviewedInSession = 0; // Reset for next session
        updateMonthlyMasteryLog(); // Update monthly log at end of session
    }

    /**
     * Populates the subject select dropdowns (for quick add and AI learning).
     * @param {HTMLElement} selectElement - The select element to populate.
     * @param {string} currentSubjectId - The ID of the currently selected subject, if any.
     */
    function populateSubjectSelect(selectElement, currentSubjectId = '') {
        selectElement.innerHTML = '<option value="">Select a Subject</option>'; // Default empty option
        const allSubjects = [...defaultSubjects]; // Start with default subjects

        // Add user-defined subjects, ensuring no duplicates
        mockData.subjects.forEach(userSubject => {
            if (!allSubjects.some(s => s.id === userSubject.id)) {
                allSubjects.push(userSubject);
            }
        });

        allSubjects.sort((a, b) => a.name.localeCompare(b.name));

        allSubjects.forEach(subject => {
            const option = document.createElement('option');
            option.value = subject.id;
            option.textContent = subject.name;
            if (subject.id === currentSubjectId) {
                option.selected = true;
            }
            selectElement.appendChild(option);
        });
    }


    /**
     * Adds a new flashcard to the mockData.
     */
    function addFlashcard() {
        const question = quickAddQuestionInput.value.trim();
        const answer = quickAddAnswerInput.value.trim();
        let subjectId = quickAddSubjectSelect.value;
        const newSubjectName = newSubjectInput.value.trim();

        if (!question || !answer) {
            showNotification('Please enter both a question and an answer.', true);
            return;
        }

        if (toggleNewSubjectInputBtn.classList.contains('hidden') && newSubjectName) {
            // User typed a new subject name directly
            subjectId = newSubjectName.toLowerCase().replace(/\s+/g, '-');
            if (!mockData.subjects.some(s => s.id === subjectId)) {
                mockData.subjects.push({
                    id: subjectId,
                    name: newSubjectName,
                    color: 'bg-gray-200', // Default color for new subjects
                    textColor: 'text-gray-800'
                });
            }
        } else if (!subjectId && !newSubjectName) {
            showNotification('Please select or add a subject.', true);
            return;
        } else if (newSubjectName && subjectId === '') {
            subjectId = newSubjectName.toLowerCase().replace(/\s+/g, '-');
            if (!mockData.subjects.some(s => s.id === subjectId)) {
                mockData.subjects.push({
                    id: subjectId,
                    name: newSubjectName,
                    color: 'bg-gray-200', // Default color for new subjects
                    textColor: 'text-gray-800'
                });
            }
        }


        const newFlashcard = {
            id: crypto.randomUUID(), // Unique ID for the flashcard
            question: question,
            answer: answer,
            subjectId: subjectId,
            lastReviewed: new Date(),
            nextReview: new Date(), // Initially due immediately
            easeFactor: 2.5, // Standard initial ease factor
            interval: 0,
            repetitions: 0,
            wasMastered: false
        };

        mockData.flashcards.push(newFlashcard);
        saveUserData();
        showNotification('Flashcard added successfully!');
        quickAddQuestionInput.value = '';
        quickAddAnswerInput.value = '';
        newSubjectInput.value = '';
        newSubjectInput.classList.add('hidden');
        toggleNewSubjectInputBtn.textContent = 'Add New Subject';
        populateSubjectSelect(quickAddSubjectSelect); // Re-populate to show new subject
        hideModal(quickAddFlashcardModal);
        renderSubjects(); // Re-render library subjects if currently in library view
        updateDashboard(); // Update dashboard counts
    }


    /**
     * Renders subjects in the library view.
     */
    function renderSubjects() {
        if (!subjectGrid) return;

        subjectGrid.innerHTML = '';
        if (mockData.subjects.length === 0 && mockData.flashcards.length === 0) {
            emptyLibraryMessage.classList.remove('hidden');
            return;
        } else {
            emptyLibraryMessage.classList.add('hidden');
        }

        // Group flashcards by subject
        const flashcardsBySubject = mockData.flashcards.reduce((acc, flashcard) => {
            const subject = mockData.subjects.find(s => s.id === flashcard.subjectId) ||
                            defaultSubjects.find(s => s.id === flashcard.subjectId);
            const subjectName = subject ? subject.name : 'Uncategorized';
            const subjectId = subject ? subject.id : 'uncategorized'; // Use 'uncategorized' for grouping
            const subjectColor = subject ? subject.color : 'bg-gray-200';
            const subjectTextColor = subject ? subject.textColor : 'text-gray-800';

            if (!acc[subjectId]) {
                acc[subjectId] = {
                    name: subjectName,
                    id: subjectId,
                    color: subjectColor,
                    textColor: subjectTextColor,
                    flashcards: []
                };
            }
            acc[subjectId].flashcards.push(flashcard);
            return acc;
        }, {});

        // Render each subject card
        Object.values(flashcardsBySubject).forEach(subject => {
            const card = document.createElement('div');
            card.className = `${subject.color} ${subject.textColor} p-6 rounded-xl shadow-sm border border-border-color cursor-pointer hover:shadow-md transition-shadow`;
            card.dataset.subjectId = subject.id; // Store subject ID for detail view
            card.innerHTML = `
                <h4 class="font-bold text-lg mb-2">${subject.name}</h4>
                <p class="text-sm">${subject.flashcards.length} Flashcard${subject.flashcards.length !== 1 ? 's' : ''}</p>
            `;
            card.addEventListener('click', () => showSubjectDetail(subject.id));
            subjectGrid.appendChild(card);
        });
    }

    /**
     * Shows a modal with details for a specific subject (its flashcards).
     * @param {string} subjectId - The ID of the subject to show.
     */
    function showSubjectDetail(subjectId) {
        const subject = mockData.subjects.find(s => s.id === subjectId) || defaultSubjects.find(s => s.id === subjectId);
        if (!subject) return;

        subjectDetailTitle.textContent = `${subject.name} Flashcards`;
        subjectFlashcardsList.innerHTML = '';

        const flashcardsInSubject = mockData.flashcards.filter(f => f.subjectId === subjectId);

        if (flashcardsInSubject.length === 0) {
            subjectFlashcardsList.innerHTML = `<p class="text-secondary text-center p-4">No flashcards in this subject yet.</p>`;
        } else {
            flashcardsInSubject.forEach(flashcard => {
                const item = document.createElement('div');
                item.className = 'list-item-themed p-3 rounded-lg border flex flex-col sm:flex-row justify-between items-start sm:items-center';
                item.innerHTML = `
                    <div class="flex-1">
                        <p class="font-semibold text-primary">${flashcard.question}</p>
                        <p class="text-sm text-secondary">${flashcard.answer}</p>
                    </div>
                    <div class="flex items-center gap-2 mt-2 sm:mt-0">
                        <span class="text-xs ${flashcard.wasMastered ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'} px-2 py-1 rounded-full">
                            ${flashcard.wasMastered ? 'Mastered' : 'Learning'}
                        </span>
                        <button class="text-red-500 hover:text-red-700 delete-flashcard-btn" data-id="${flashcard.id}" title="Delete Flashcard">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;
                subjectFlashcardsList.appendChild(item);
            });
            // Add event listeners for delete buttons within the modal
            subjectFlashcardsList.querySelectorAll('.delete-flashcard-btn').forEach(button => {
                button.addEventListener('click', (event) => {
                    const flashcardIdToDelete = event.currentTarget.dataset.id;
                    if (window.confirm("Are you sure you want to delete this flashcard?")) {
                        deleteFlashcard(flashcardIdToDelete);
                        showSubjectDetail(subjectId); // Re-render the modal content
                        updateDashboard(); // Update dashboard counts
                    }
                });
            });
        }
        showModal(subjectDetailModal);
    }

    /**
     * Deletes a flashcard by its ID.
     * @param {string} idToDelete - The ID of the flashcard to delete.
     */
    function deleteFlashcard(idToDelete) {
        const initialLength = mockData.flashcards.length;
        mockData.flashcards = mockData.flashcards.filter(f => f.id !== idToDelete);
        if (mockData.flashcards.length < initialLength) {
            saveUserData();
            showNotification("Flashcard deleted successfully.");
        } else {
            showNotification("Flashcard not found.", true);
        }
    }


    /**
     * Renders AI-generated materials in the library.
     */
    function renderAiMaterials() {
        if (!aiMaterialsList) return;

        aiMaterialsList.innerHTML = '';
        if (mockData.aiMaterials.length === 0) {
            emptyAiMaterialsMessage.classList.remove('hidden');
            return;
        } else {
            emptyAiMaterialsMessage.classList.add('hidden');
        }

        mockData.aiMaterials.sort((a, b) => new Date(b.generatedDate) - new Date(a.generatedDate)); // Sort by newest first

        mockData.aiMaterials.forEach(material => {
            const item = document.createElement('div');
            item.className = 'list-item-themed p-3 rounded-lg border flex flex-col sm:flex-row justify-between items-start sm:items-center';

            const subject = mockData.subjects.find(s => s.id === material.subjectId) || defaultSubjects.find(s => s.id === material.subjectId);
            const subjectName = subject ? subject.name : 'Uncategorized';
            const subjectColor = subject ? subject.color : 'bg-gray-200';
            const subjectTextColor = subject ? subject.textColor : 'text-gray-800';

            const materialDate = new Date(material.generatedDate).toLocaleDateString();

            item.innerHTML = `
                <div class="flex-1">
                    <p class="font-semibold text-primary">${material.title}</p>
                    <p class="text-sm text-secondary mb-1">${material.type} - ${materialDate}</p>
                    <span class="text-xs ${subjectColor} ${subjectTextColor} px-2 py-1 rounded-full">${subjectName}</span>
                </div>
                <div class="flex items-center gap-2 mt-2 sm:mt-0">
                    <button class="text-accent-blue hover:text-accent-blue-hover view-ai-material-btn" data-id="${material.id}" title="View Details">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="text-red-500 hover:text-red-700 delete-ai-material-btn" data-id="${material.id}" title="Delete Material">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            aiMaterialsList.appendChild(item);
        });

        aiMaterialsList.querySelectorAll('.view-ai-material-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const materialId = event.currentTarget.dataset.id;
                viewAiMaterial(materialId);
            });
        });

        aiMaterialsList.querySelectorAll('.delete-ai-material-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const materialId = event.currentTarget.dataset.id;
                if (window.confirm("Are you sure you want to delete this AI-generated material?")) {
                    deleteAiMaterial(materialId);
                }
            });
        });
    }

    /**
     * Displays the content of an AI-generated material in the detail modal.
     * @param {string} materialId - The ID of the material to display.
     */
    function viewAiMaterial(materialId) {
        const material = mockData.aiMaterials.find(m => m.id === materialId);
        if (!material) {
            showNotification("AI material not found.", true);
            return;
        }

        detailTitle.textContent = material.title;
        detailContentText.innerHTML = material.content;
        detailContentText.classList.remove('hidden');
        detailLoading.classList.add('hidden');
        showModal(detailModal);
    }

    /**
     * Deletes an AI-generated material by its ID.
     * @param {string} idToDelete - The ID of the material to delete.
     */
    function deleteAiMaterial(idToDelete) {
        const initialLength = mockData.aiMaterials.length;
        mockData.aiMaterials = mockData.aiMaterials.filter(m => m.id !== idToDelete);
        if (mockData.aiMaterials.length < initialLength) {
            saveUserData();
            showNotification("AI material deleted successfully.");
            renderAiMaterials(); // Re-render the list
        } else {
            showNotification("AI material not found.", true);
        }
    }


    /**
     * Renders the calendar grid for the given month.
     * @param {Date} date - The date object representing the month to render.
     */
    function renderCalendar(date) {
        if (!calendarGrid || !currentMonthYearDisplay) return;

        appState.calendar.currentDate = new Date(date.getFullYear(), date.getMonth(), 1); // Set to 1st of the month
        currentMonthYearDisplay.textContent = appState.calendar.currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
        calendarGrid.innerHTML = '';

        const year = appState.calendar.currentDate.getFullYear();
        const month = appState.calendar.currentDate.getMonth();
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);
        const daysInMonth = lastDayOfMonth.getDate();

        const firstDayOfWeek = firstDayOfMonth.getDay(); // 0 for Sunday, 6 for Saturday

        // Add blank cells for days before the 1st of the month
        for (let i = 0; i < firstDayOfWeek; i++) {
            const cell = document.createElement('div');
            cell.className = 'calendar-day-cell inactive';
            calendarGrid.appendChild(cell);
        }

        // Add cells for each day of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const cell = document.createElement('div');
            const currentDayDate = new Date(year, month, day);
            currentDayDate.setHours(0,0,0,0); // Normalize to start of local day for consistent comparison
            cell.className = 'calendar-day-cell relative'; // Added relative for absolute positioning of number

            const today = new Date();
            today.setHours(0, 0, 0, 0); // Normalize today's date

            // Add 'today' class
            if (currentDayDate.toDateString() === today.toDateString()) {
                cell.classList.add('today');
            }

            // Add 'selected-day' class if it matches the current selected day state
            if (appState.calendar.selectedDay && currentDayDate.toDateString() === appState.calendar.selectedDay.toDateString()) {
                cell.classList.add('selected-day');
            }

            cell.dataset.date = currentDayDate.toISOString(); // Store full date string

            // Day number element
            const dayNumberSpan = document.createElement('span');
            dayNumberSpan.className = 'calendar-day-number';
            dayNumberSpan.textContent = day;
            cell.appendChild(dayNumberSpan);

            // Container for event indicators (dots and text)
            const eventIndicatorsContainer = document.createElement('div');
            eventIndicatorsContainer.className = 'event-indicators-container'; // New container

            const eventsOnThisDay = mockData.calendarEvents.filter(event =>
                event.date.toDateString() === currentDayDate.toDateString()
            );

            // Sort events by time to display them in order
            eventsOnThisDay.sort((a, b) => {
                const timeA = a.time ? a.time.split(':').map(Number) : [0, 0];
                const timeB = b.time ? b.time.split(':').map(Number) : [0, 0];
                if (timeA[0] !== timeB[0]) return timeA[0] - timeB[0];
                return timeA[1] - timeB[1];
            });

            eventsOnThisDay.forEach(event => {
                // Event text element
                const eventTextItem = document.createElement('div');
                eventTextItem.className = `calendar-event-text-item event-type-${event.type}`;
                eventTextItem.textContent = event.title; // Display event title

                // Add an event listener to the event text item to open the event modal
                eventTextItem.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent the day cell click listener from firing
                    openEventModal(event.id);
                });
                eventIndicatorsContainer.appendChild(eventTextItem);

                // Optionally, if you still want a small dot, you can add it here as well
                // const eventDot = document.createElement('div');
                // eventDot.className = `calendar-event-dot event-type-${event.type}`;
                // eventIndicatorsContainer.appendChild(eventDot);
            });
            cell.appendChild(eventIndicatorsContainer); // Append the new container

            cell.addEventListener('click', () => {
                // When a cell is clicked, set selectedDay to the LOCAL start of that day
                const clickedDate = new Date(year, month, day);
                clickedDate.setHours(0,0,0,0); // Ensure local midnight
                appState.calendar.selectedDay = clickedDate;
                renderCalendar(appState.calendar.currentDate); // Re-render to update selected day highlight
                renderEventsForSelectedDay(clickedDate);
            });

            calendarGrid.appendChild(cell);
        }
    }


    /**
     * Renders the events for the currently selected day.
     * @param {Date} date - The selected date.
     */
    function renderEventsForSelectedDay(date) {
        if (!selectedDayDisplay || !eventsListForDay) return;

        selectedDayDisplay.textContent = date.toLocaleDateString('default', { weekday: 'long', month: 'long', day: 'numeric' });
        eventsListForDay.innerHTML = '';

        const events = mockData.calendarEvents.filter(event =>
            event.date.toDateString() === date.toDateString()
        ).sort((a, b) => {
            // Sort by time, if available
            const timeA = a.time ? a.time.split(':').map(Number) : [0, 0];
            const timeB = b.time ? b.time.split(':').map(Number) : [0, 0];
            if (timeA[0] !== timeB[0]) return timeA[0] - timeB[0];
            return timeA[1] - timeB[1];
        });

        if (events.length === 0) {
            eventsListForDay.innerHTML = `
                <li class="list-item-themed p-3 rounded-lg border text-secondary text-center">No events for this day.</li>
            `;
        } else {
            events.forEach(event => {
                const li = document.createElement('li');
                li.className = `list-item-themed p-3 rounded-lg border flex justify-between items-center event-type-${event.type}`;
                const displayTime = event.time ? `(${event.time})` : '';
                li.innerHTML = `
                    <div>
                        <p class="font-semibold text-primary">${event.title} ${displayTime}</p>
                        <p class="text-sm text-secondary">${event.notes}</p>
                    </div>
                    <button class="text-accent-blue hover:text-accent-blue-hover edit-event-btn" data-id="${event.id}" title="Edit Event">
                        <i class="fas fa-edit"></i>
                    </button>
                `;
                eventsListForDay.appendChild(li);
            });

            eventsListForDay.querySelectorAll('.edit-event-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const eventId = e.currentTarget.dataset.id;
                    openEventModal(eventId); // Changed to openEventModal
                });
            });
        }
    }

    /**
     * Opens the add/edit event modal, populating it if editing an existing event.
     * @param {string} eventId - The ID of the event to edit, or null for new.
     */
    function openEventModal(eventId = null) {
        appState.calendar.editingEvent = null; // Clear previous editing state
        eventModalTitle.textContent = "Add New Event";
        eventTitleInput.value = '';
        // Use formatDateForInput to ensure local date is displayed
        eventDateInput.value = appState.calendar.selectedDay ? formatDateForInput(appState.calendar.selectedDay) : '';
        eventTimeInput.value = '';
        eventNotesInput.value = '';
        eventTypeSelect.value = 'assignment';
        deleteEventBtn.classList.add('hidden'); // Hide delete button for new events

        if (eventId) {
            const eventToEdit = mockData.calendarEvents.find(e => e.id === eventId);
            if (eventToEdit) {
                appState.calendar.editingEvent = eventToEdit;
                eventModalTitle.textContent = "Edit Event";
                eventTitleInput.value = eventToEdit.title;
                // Use formatDateForInput for existing event's date
                eventDateInput.value = eventToEdit.date ? formatDateForInput(eventToEdit.date) : '';
                eventTimeInput.value = eventToEdit.time || '';
                eventNotesInput.value = eventToEdit.notes || '';
                eventTypeSelect.value = eventToEdit.type;
                deleteEventBtn.classList.remove('hidden');
            }
        }
        showModal(addEditEventModal);
    }

    /**
     * Saves a new or edited event.
     */
    function saveEvent() {
        const title = eventTitleInput.value.trim();
        const dateString = eventDateInput.value; // YYYY-MM-DD from input
        const time = eventTimeInput.value;
        const notes = eventNotesInput.value.trim();
        const type = eventTypeSelect.value;

        if (!title || !dateString) {
            showNotification("Please enter event title and date.", true);
            return;
        }

        // Construct Date object using local date components to avoid timezone issues
        const [year, month, day] = dateString.split('-').map(Number);
        const eventDate = new Date(year, month - 1, day); // month is 0-indexed

        // If time is provided, set it. Otherwise, event is all-day (local midnight)
        if (time) {
            const [hours, minutes] = time.split(':').map(Number);
            eventDate.setHours(hours, minutes);
        } else {
            eventDate.setHours(0, 0, 0, 0); // Ensure it's at local midnight if no time specified
        }


        if (appState.calendar.editingEvent) {
            // Update existing event
            const eventIndex = mockData.calendarEvents.findIndex(e => e.id === appState.calendar.editingEvent.id);
            if (eventIndex !== -1) {
                mockData.calendarEvents[eventIndex] = {
                    ...mockData.calendarEvents[eventIndex],
                    title, date: eventDate, time, notes, type
                };
                showNotification("Event updated successfully!");
            }
        } else {
            // Add new event
            const newEvent = {
                id: crypto.randomUUID(),
                title, date: eventDate, time, notes, type
            };
            mockData.calendarEvents.push(newEvent);
            showNotification("Event added successfully!");
        }
        saveUserData();
        renderCalendar(appState.calendar.currentDate); // Re-render calendar to show changes
        renderEventsForSelectedDay(eventDate); // Re-render events list for the specific day
        hideModal(addEditEventModal);
        updateDashboard(); // Update upcoming events count
    }

    /**
     * Deletes an event.
     */
    function deleteEvent() {
        if (appState.calendar.editingEvent) {
            mockData.calendarEvents = mockData.calendarEvents.filter(e => e.id !== appState.calendar.editingEvent.id);
            saveUserData();
            showNotification("Event deleted successfully!");
            hideModal(addEditEventModal);
            renderCalendar(appState.calendar.currentDate);
            renderEventsForSelectedDay(appState.calendar.selectedDay || new Date());
            updateDashboard(); // Update upcoming events count
        }
    }

    /**
     * Loads settings from mockData into the UI.
     */
    function loadSettings() {
        usernameInput.value = mockData.user.name;
        intervalPerfectInput.value = mockData.user.srsIntervals.perfect;
        intervalGoodInput.value = mockData.user.srsIntervals.good;
        intervalStruggledInput.value = mockData.user.srsIntervals.struggled;
        intervalForgotInput.value = mockData.user.srsIntervals.forgot;
        renderThemeButtons();
    }

    /**
     * Saves settings from the UI to mockData.
     */
    function saveSettings() {
        mockData.user.name = usernameInput.value.trim();
        mockData.user.srsIntervals.perfect = parseFloat(intervalPerfectInput.value);
        mockData.user.srsIntervals.good = parseFloat(intervalGoodInput.value);
        mockData.user.srsIntervals.struggled = parseFloat(intervalStruggledInput.value);
        mockData.user.srsIntervals.forgot = parseFloat(intervalForgotInput.value);
        saveUserData();
        updateDashboard(); // Update username in dashboard
        showNotification("Settings saved successfully!");
    }

    /**
     * Renders theme selection buttons.
     */
    function renderThemeButtons() {
        const themeButtonContainer = document.querySelector('#view-settings .flex.flex-wrap.gap-4');
        if (!themeButtonContainer) return;

        themeButtonContainer.innerHTML = ''; // Clear existing buttons

        mockData.themes.forEach(theme => {
            const button = document.createElement('button');
            button.className = `theme-btn px-4 py-2 rounded-lg font-semibold border border-border-color ${appState.currentTheme === theme.id ? 'ring-2 ring-accent-blue-hover' : ''}`;
            button.dataset.theme = theme.id;
            button.textContent = theme.name;
            button.addEventListener('click', () => {
                setTheme(theme.id);
            });
            themeButtonContainer.appendChild(button);
        });
    }

    /**
     * Sets the active theme.
     * @param {string} themeName - The name of the theme to apply.
     */
    function setTheme(themeName) {
        document.body.classList.remove(...mockData.themes.map(t => `theme-${t.id}`));
        document.body.classList.add(`theme-${themeName}`);
        appState.currentTheme = themeName;
        saveUserData();
        renderThemeButtons(); // Re-render buttons to update active state
    }


    // --- AI Learning Studio Functions ---

    /**
     * Handles the toggle between 'text' and 'topic' input modes for AI generation.
     */
    function toggleAiInputMode() {
        if (appState.aiInputMode === 'text') {
            appState.aiInputMode = 'topic';
            aiInputContentLabel.textContent = "Enter a topic for the AI to process:";
            aiInputContent.placeholder = "e.g., 'Quantum Physics', 'History of Ancient Rome'";
            quizSettingsContainer.classList.add('hidden'); // Hide quiz settings when in topic mode
        } else {
            appState.aiInputMode = 'text';
            aiInputContentLabel.textContent = "Provide text, a topic, or questions for the AI to process:";
            aiInputContent.placeholder = "Enter text, a topic, or specific questions here... e.g., 'Explain blockchain technology', 'Summarize World War 2 causes', or 'Quiz me on React hooks'.";
            // Quiz settings visibility will be managed by generateQuizBtn handler
        }
        aiInputContent.value = ''; // Clear content when switching modes
    }

    /**
     * Generates AI content based on the user's input and selected action.
     * @param {string} action - The AI generation action (e.g., 'notes', 'flashcards', 'quiz').
     */
    async function generateAiContent(action) {
        const inputContent = aiInputContent.value.trim();
        let subjectId = aiContentSubjectSelect.value;
        const newSubjectName = aiContentNewSubjectInput.value.trim();
        const quizQuestionCount = quizQuestionCountInput ? parseInt(quizQuestionCountInput.value) : 5;
        const quizDifficulty = quizDifficultySelect ? quizDifficultySelect.value : 'medium';

        if (!inputContent) {
            showNotification('Please provide content or a topic for AI generation.', true);
            return;
        }

        if (newSubjectName && subjectId === '') {
            subjectId = newSubjectName.toLowerCase().replace(/\s+/g, '-');
            if (!mockData.subjects.some(s => s.id === subjectId)) {
                mockData.subjects.push({
                    id: subjectId,
                    name: newSubjectName,
                    color: 'bg-gray-200',
                    textColor: 'text-gray-800'
                });
                populateSubjectSelect(aiContentSubjectSelect, subjectId); // Update select with new subject
                showNotification(`New subject "${newSubjectName}" added!`);
            }
        }

        aiGenerationStatus.classList.remove('hidden');
        aiGeneratedOutput.classList.add('hidden');
        aiOutputContentDisplay.innerHTML = ''; // Clear previous output
        aiOutputTitle.textContent = 'Generated Output'; // Default title

        let prompt = '';
        let generatedContent = '';
        let aiMaterialType = '';

        try {
            if (action === 'notes') {
                aiMaterialType = 'Notes';
                if (appState.aiInputMode === 'text') {
                    prompt = `Generate comprehensive study notes from the following text, focusing on key concepts and explanations:\n\n${inputContent}`;
                } else {
                    prompt = `Generate comprehensive study notes on the topic of "${inputContent}", focusing on key concepts and explanations.`;
                }
            } else if (action === 'flashcards') {
                aiMaterialType = 'Flashcards';
                if (appState.aiInputMode === 'text') {
                    prompt = `Generate a set of 5-10 flashcards (question::answer format, one per line) from the following text, suitable for spaced repetition:\n\n${inputContent}\n\nExample: What is photosynthesis?::The process by which green plants and some other organisms convert light energy into chemical energy.`;
                } else {
                    prompt = `Generate a set of 5-10 flashcards (question::answer format, one per line) about "${inputContent}", suitable for spaced repetition:\n\nExample: What is photosynthesis?::The process by which green plants and some other organisms convert light energy into chemical energy.`;
                }
            } else if (action === 'quiz') {
                aiMaterialType = 'Quiz';
                // For quiz, structure the response for easy parsing
                prompt = `Generate a ${quizQuestionCount} question multiple-choice quiz with 4 options per question on the topic of "${inputContent}" with difficulty "${quizDifficulty}". Provide the output in a JSON array format. Each object in the array should have 'question', 'options' (an array of strings), and 'correct_answer' (string, matching one of the options). Ensure there's a correct answer in options.`;
            } else if (action === 'keywords') {
                aiMaterialType = 'Keywords';
                if (appState.aiInputMode === 'text') {
                    prompt = `Extract a list of 10-15 key terms and their concise definitions from the following text. Format as 'term: definition' one per line:\n\n${inputContent}`;
                } else {
                    prompt = `List 10-15 essential keywords and their concise definitions related to "${inputContent}". Format as 'term: definition' one per line.`;
                }
            } else if (action === 'exam-questions') {
                aiMaterialType = 'Exam Questions';
                if (appState.aiInputMode === 'text') {
                    prompt = `Predict 5-7 potential exam questions based on the following study material. Provide open-ended questions:\n\n${inputContent}`;
                } else {
                    prompt = `Predict 5-7 potential exam questions for a course covering "${inputContent}". Provide open-ended questions.`;
                }
            } else if (action === 'summary') {
                aiMaterialType = 'Summary';
                if (appState.aiInputMode === 'text') {
                    prompt = `Provide a concise summary (max 200 words) of the following text:\n\n${inputContent}`;
                } else {
                    prompt = `Provide a concise summary (max 200 words) on the topic of "${inputContent}".`;
                }
            } else {
                showNotification("Invalid AI action.", true);
                aiGenerationStatus.classList.add('hidden');
                return;
            }

            // Call to Gemini API
            const chatHistory = [];
            chatHistory.push({ role: "user", parts: [{ text: prompt }] });
            const payload = { contents: chatHistory };

            if (action === 'quiz') {
                payload.generationConfig = {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: "ARRAY",
                        items: {
                            type: "OBJECT",
                            properties: {
                                "question": { "type": "STRING" },
                                "options": {
                                    "type": "ARRAY",
                                    "items": { "type": "STRING" }
                                },
                                "correct_answer": { "type": "STRING" }
                            },
                            "propertyOrdering": ["question", "options", "correct_answer"]
                        }
                    }
                };
            }

            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorData.error.message}`);
            }

            const result = await response.json();

            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {

                generatedContent = result.candidates[0].content.parts[0].text;

                if (action === 'quiz') {
                    try {
                        const quizData = JSON.parse(generatedContent);
                        if (Array.isArray(quizData) && quizData.every(q => q.question && Array.isArray(q.options) && q.correct_answer)) {
                            appState.currentQuiz = {
                                title: `AI Quiz on ${inputContent}`,
                                questions: quizData.map(q => ({
                                    question: q.question,
                                    options: q.options,
                                    correctAnswer: q.correct_answer // Ensure this matches the key in the JSON
                                }))
                            };
                            startQuizSession(appState.currentQuiz);
                            // No need to hide quiz modal here, startQuizSession will show it
                            aiGeneratedOutput.classList.add('hidden'); // Ensure AI output section is hidden
                            aiGenerationStatus.classList.add('hidden'); // Hide loading status
                            return; // Exit as quiz handled separately
                        } else {
                            console.error("Generated quiz data is not in expected format:", quizData);
                            generatedContent = "Error: Failed to parse quiz data. Please try again with a clearer prompt.";
                            aiMaterialType = "Error"; // Mark as error for display
                        }
                    } catch (parseError) {
                        console.error("Failed to parse quiz JSON:", parseError);
                        generatedContent = "Error: Failed to parse quiz data. Please try again with a clearer prompt.";
                        aiMaterialType = "Error"; // Mark as error for display
                    }
                } else if (action === 'flashcards') {
                    const flashcardLines = generatedContent.split('\n').filter(line => line.includes('::')).map(line => line.trim());
                    const newFlashcards = flashcardLines.map(line => {
                        const [question, answer] = line.split('::').map(s => s.trim());
                        return {
                            id: crypto.randomUUID(),
                            question: question,
                            answer: answer,
                            subjectId: subjectId,
                            lastReviewed: new Date(),
                            nextReview: new Date(),
                            easeFactor: 2.5,
                            interval: 0,
                            repetitions: 0,
                            wasMastered: false
                        };
                    }).filter(f => f.question && f.answer); // Filter out incomplete flashcards

                    if (newFlashcards.length > 0) {
                        mockData.flashcards.push(...newFlashcards);
                        showNotification(`${newFlashcards.length} flashcards generated and added to your library!`);
                        generatedContent = newFlashcards.map(f => `<strong>Q:</strong> ${f.question}<br><strong>A:</strong> ${f.answer}`).join('<br><br>');
                        aiOutputTitle.textContent = `Generated Flashcards (${newFlashcards.length})`;
                        updateDashboard(); // Update dashboard counts
                        renderSubjects(); // Re-render subjects in library
                    } else {
                        showNotification("AI did not generate any valid flashcards. Try refining your input.", true);
                        generatedContent = "No valid flashcards generated. Please try again with a clearer input.";
                        aiMaterialType = "Error";
                    }
                }
                // For other actions, just display the content
                aiOutputContentDisplay.innerHTML = marked.parse(generatedContent); // Use marked.js for Markdown
                aiGeneratedOutput.classList.remove('hidden');

                // Save non-quiz, non-flashcard generated content as AI Material
                if (action !== 'quiz' && action !== 'flashcards') {
                    const newMaterial = {
                        id: crypto.randomUUID(),
                        title: `${aiMaterialType} for "${inputContent.substring(0, 50)}..."`,
                        type: aiMaterialType,
                        content: generatedContent,
                        subjectId: subjectId,
                        generatedDate: new Date().toISOString()
                    };
                    mockData.aiMaterials.push(newMaterial);
                    showNotification(`${aiMaterialType} generated and saved!`);
                }
            } else {
                throw new Error("API response format unexpected.");
            }
        } catch (error) {
            console.error("Error generating AI content:", error);
            showNotification(`Failed to generate content: ${error.message}`, true);
            aiOutputContentDisplay.innerHTML = `<p class="text-red-600">Error: Failed to generate content. Please try again. Details: ${error.message}</p>`;
            aiGeneratedOutput.classList.remove('hidden');
        } finally {
            aiGenerationStatus.classList.add('hidden');
            saveUserData();
            renderAiMaterials(); // Re-render the AI materials list
        }
    }

    /**
     * Initializes and starts a quiz session.
     * @param {object} quizData - The quiz data object.
     */
    function startQuizSession(quizData) {
        if (!quizData || !quizData.questions || quizData.questions.length === 0) {
            showNotification("No quiz questions available.", true);
            return;
        }
        appState.quizSession = {
            isActive: true,
            questions: quizData.questions,
            currentIndex: 0,
            score: 0,
            selectedAnswer: null,
            answers: [] // Stores user's answer, correct answer, and question for review
        };
        quizModal.classList.remove('hidden'); // Ensure quiz modal is shown
        quizResultsContainer.classList.add('hidden');
        quizReviewDetailContainer.classList.add('hidden');
        quizQuestionContainer.classList.remove('hidden');
        loadQuizQuestion();
    }

    /**
     * Loads the current quiz question into the modal.
     */
    function loadQuizQuestion() {
        const currentQuestion = appState.quizSession.questions[appState.quizSession.currentIndex];
        if (!currentQuestion) {
            endQuizSession();
            return;
        }

        quizQuestionText.textContent = currentQuestion.question;
        quizOptions.innerHTML = '';
        quizFeedback.classList.add('hidden');
        quizSubmitAnswerBtn.classList.remove('hidden');
        quizSubmitAnswerBtn.disabled = false;
        appState.quizSession.selectedAnswer = null;

        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'quiz-option-btn w-full p-3 text-left hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-accent-blue';
            button.textContent = option;
            button.dataset.option = option;
            button.addEventListener('click', () => selectQuizOption(button, option));
            quizOptions.appendChild(button);
        });
    }

    /**
     * Handles selection of a quiz option.
     * @param {HTMLElement} button - The button element that was clicked.
     * @param {string} option - The text of the selected option.
     */
    function selectQuizOption(button, option) {
        // Remove 'selected' class from all options
        quizOptions.querySelectorAll('.quiz-option-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        // Add 'selected' class to the clicked button
        button.classList.add('selected');
        appState.quizSession.selectedAnswer = option;
    }

    /**
     * Submits the answer for the current quiz question.
     */
    function submitQuizAnswer() {
        if (appState.quizSession.selectedAnswer === null) {
            showNotification("Please select an answer.", true);
            return;
        }

        const currentQuestion = appState.quizSession.questions[appState.quizSession.currentIndex];
        const isCorrect = appState.quizSession.selectedAnswer === currentQuestion.correctAnswer;

        if (isCorrect) {
            appState.quizSession.score++;
            quizFeedback.textContent = "Correct!";
            quizFeedback.classList.remove('text-red-600');
            quizFeedback.classList.add('text-green-600');
        } else {
            quizFeedback.textContent = `Incorrect. The correct answer was: ${currentQuestion.correctAnswer}`;
            quizFeedback.classList.remove('text-green-600');
            quizFeedback.classList.add('text-red-600');
        }
        quizFeedback.classList.remove('hidden');
        quizSubmitAnswerBtn.disabled = true; // Disable submit button after answering

        // Visually indicate correct/incorrect options
        quizOptions.querySelectorAll('.quiz-option-btn').forEach(btn => {
            btn.disabled = true; // Disable all options
            if (btn.dataset.option === currentQuestion.correctAnswer) {
                btn.classList.add('correct');
            } else if (btn.dataset.option === appState.quizSession.selectedAnswer) {
                btn.classList.add('incorrect');
            }
        });

        // Store result for review
        appState.quizSession.answers.push({
            question: currentQuestion.question,
            userAnswer: appState.quizSession.selectedAnswer,
            correctAnswer: currentQuestion.correctAnswer,
            isCorrect: isCorrect,
            options: currentQuestion.options // Store options for context in review
        });


        // Move to next question after a short delay
        setTimeout(() => {
            appState.quizSession.currentIndex++;
            loadQuizQuestion();
        }, 2000);
    }

    /**
     * Ends the quiz session and displays results.
     */
    function endQuizSession() {
        appState.quizSession.isActive = false;
        quizQuestionContainer.classList.add('hidden');
        quizResultsContainer.classList.remove('hidden');
        quizScoreDisplay.textContent = `You scored: ${appState.quizSession.score}/${appState.quizSession.questions.length}`;
    }

    /**
     * Displays the quiz review screen.
     */
    function reviewQuizAnswers() {
        quizResultsContainer.classList.add('hidden');
        quizReviewDetailContainer.classList.remove('hidden');
        quizReviewList.innerHTML = '';

        appState.quizSession.answers.forEach((item, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'list-item-themed p-4 rounded-lg border mb-3';
            reviewItem.innerHTML = `
                <p class="font-semibold text-primary mb-2">Q${index + 1}: ${item.question}</p>
                <p class="text-sm text-secondary">Your Answer: <span class="${item.isCorrect ? 'text-green-600' : 'text-red-600'} font-bold">${item.userAnswer}</span></p>
                <p class="text-sm text-secondary">Correct Answer: <span class="text-green-600 font-bold">${item.correctAnswer}</span></p>
                <div class="mt-2 text-xs text-gray-500">
                    <p>Options: ${item.options.join(' | ')}</p>
                </div>
            `;
            quizReviewList.appendChild(reviewItem);
        });
    }

    /**
     * Goes back from quiz review to quiz results.
     */
    function backToQuizResults() {
        quizReviewDetailContainer.classList.add('hidden');
        quizResultsContainer.classList.remove('hidden');
    }

    /**
     * Retakes the current quiz.
     */
    function retakeQuiz() {
        if (appState.currentQuiz) {
            startQuizSession(appState.currentQuiz);
        } else {
            showNotification("No quiz to retake.", true);
        }
    }


    /**
     * Shows a modal.
     * @param {HTMLElement} modalElement - The modal element to show.
     */
    function showModal(modalElement) {
        modalElement.classList.remove('hidden');
        setTimeout(() => modalElement.classList.add('modal-active'), 10); // Trigger transition
    }

    /**
     * Hides a modal.
     * @param {HTMLElement} modalElement - The modal element to hide.
     */
    function hideModal(modalElement) {
        modalElement.classList.remove('modal-active');
        setTimeout(() => modalElement.classList.add('hidden'), 300); // Allow transition to finish
    }

    /**
     * Shuffle array in place.
     * @param {Array} array - The array to shuffle.
     * @returns {Array} The shuffled array.
     */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    /**
     * Renders learning goals in the analytics view.
     */
    function renderLearningGoals() {
        if (!goalsList) return;

        goalsList.innerHTML = '';
        if (mockData.user.learningGoals.length === 0) {
            emptyGoalsMessage.classList.remove('hidden');
            return;
        } else {
            emptyGoalsMessage.classList.add('hidden');
        }

        mockData.user.learningGoals.forEach(goal => {
            const li = document.createElement('li');
            li.className = 'list-item-themed p-3 rounded-lg border flex flex-col sm:flex-row justify-between items-start sm:items-center';

            const now = new Date();
            now.setHours(0,0,0,0); // Normalize 'now' to local midnight
            const endDate = new Date(goal.endDate);
            endDate.setHours(0,0,0,0); // Normalize goal end date to local midnight

            const timeLeft = Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)); // Days left

            let progressText = '';
            let progressRatio = 0;
            let statusBadge = '';

            if (goal.targetType === 'flashcards') {
                const masteredCount = mockData.flashcards.filter(f => f.wasMastered).length;
                progressText = `Mastered: ${masteredCount}/${goal.targetValue} Flashcards`;
                progressRatio = masteredCount / goal.targetValue;
            } else if (goal.targetType === 'time') {
                const totalStudyTime = mockData.user.weeklyStudyTime; // Assuming this is kept updated elsewhere
                progressText = `Time: ${totalStudyTime}/${goal.targetValue} Hours (last 7 days)`;
                progressRatio = totalStudyTime / goal.targetValue;
            }

            if (progressRatio >= 1) {
                statusBadge = `<span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">Completed!</span>`;
            } else if (timeLeft <= 0) {
                statusBadge = `<span class="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">Overdue</span>`;
            } else {
                statusBadge = `<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">${timeLeft} days left</span>`;
            }


            li.innerHTML = `
                <div class="flex-1">
                    <p class="font-semibold text-primary text-lg">${goal.name}</p>
                    <p class="text-sm text-secondary">${progressText}</p>
                    <p class="text-xs text-secondary">End Date: ${new Date(goal.endDate).toLocaleDateString()}</p>
                </div>
                <div class="flex items-center gap-2 mt-2 sm:mt-0">
                    ${statusBadge}
                    <button class="text-red-500 hover:text-red-700 delete-goal-btn" data-id="${goal.id}" title="Delete Goal">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            goalsList.appendChild(li);
        });

        goalsList.querySelectorAll('.delete-goal-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const goalIdToDelete = event.currentTarget.dataset.id;
                if (window.confirm("Are you sure you want to delete this learning goal?")) {
                    deleteGoal(goalIdToDelete);
                }
            });
        });
    }

    /**
     * Creates a new learning goal.
     */
    function createLearningGoal() {
        const name = goalNameInput.value.trim();
        const targetType = goalTargetTypeSelect.value;
        const targetValue = parseFloat(goalTargetValueInput.value);
        const endDate = goalEndDateInput.value;

        if (!name || !targetValue || !endDate) {
            showNotification("Please fill in all goal fields.", true);
            return;
        }
        if (targetValue <= 0) {
            showNotification("Target value must be positive.", true);
            return;
        }

        const newGoal = {
            id: crypto.randomUUID(),
            name,
            targetType,
            targetValue,
            endDate
        };

        mockData.user.learningGoals.push(newGoal);
        saveUserData();
        showNotification("Learning goal created successfully!");
        hideModal(addGoalModal);
        goalNameInput.value = '';
        goalTargetValueInput.value = '';
        goalEndDateInput.value = '';
        renderLearningGoals(); // Re-render goals list
    }

    /**
     * Deletes a learning goal by ID.
     * @param {string} idToDelete - The ID of the goal to delete.
     */
    function deleteGoal(idToDelete) {
        const initialLength = mockData.user.learningGoals.length;
        mockData.user.learningGoals = mockData.user.learningGoals.filter(goal => goal.id !== idToDelete);
        if (mockData.user.learningGoals.length < initialLength) {
            saveUserData();
            showNotification("Learning goal deleted.");
            renderLearningGoals(); // Re-render the list
        } else {
            showNotification("Learning goal not found.", true);
        }
    }


    /**
     * Renders soundscape buttons dynamically.
     */
    function renderSoundscapes() {
        const soundscapesContainer = document.getElementById('soundscapes');
        if (!soundscapesContainer) return;

        soundscapesContainer.innerHTML = '';
        mockData.soundscapes.forEach(s => {
            const button = document.createElement('button');
            button.className = 'soundscape-btn flex flex-col items-center p-4 rounded-lg transition-colors hover:bg-nav-active-bg';
            button.innerHTML = `<span class="text-4xl mb-2">${s.icon}</span><span>${s.name}</span>`;
            button.dataset.file = s.file;
            button.addEventListener('click', () => toggleSoundscape(s.file, button));
            soundscapesContainer.appendChild(button);
        });
    }

    /**
     * Toggles a soundscape on/off.
     * @param {string} filePath - The path to the sound file.
     * @param {HTMLElement} button - The button element associated with the soundscape.
     */
    function toggleSoundscape(filePath, button) {
        if (appState.activeSoundscapeAudio && appState.activeSoundscapeAudio.src.includes(filePath)) {
            // If the same soundscape is already playing, stop it
            appState.activeSoundscapeAudio.pause();
            appState.activeSoundscapeAudio.currentTime = 0; // Rewind
            appState.activeSoundscapeAudio = null;
            button.classList.remove('bg-accent-blue', 'text-white');
            button.classList.add('bg-secondary', 'text-primary');
        } else {
            // Stop any currently playing soundscape
            if (appState.activeSoundscapeAudio) {
                appState.activeSoundscapeAudio.pause();
                const prevButton = document.querySelector(`.soundscape-btn[data-file="${appState.activeSoundscapeAudio.src.split('/').pop()}"]`);
                if (prevButton) {
                    prevButton.classList.remove('bg-accent-blue', 'text-white');
                    prevButton.classList.add('bg-secondary', 'text-primary');
                }
            }

            // Start the new soundscape
            const audio = new Audio(filePath);
            audio.loop = true; // Loop the audio
            audio.volume = 0.6; // Set a default volume
            audio.play().catch(e => console.error("Error playing audio:", e));
            appState.activeSoundscapeAudio = audio;
            button.classList.add('bg-accent-blue', 'text-white');
            button.classList.remove('bg-secondary', 'text-primary');
        }
    }


    /**
     * Updates the Pomodoro timer display.
     */
    function updatePomodoroDisplay() {
        const minutes = Math.floor(appState.pomodoro.timeLeft / 60);
        const seconds = appState.pomodoro.timeLeft % 60;
        document.getElementById('pomodoro-timer').textContent =
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        let statusText = '';
        if (appState.pomodoro.mode === 'work') {
            statusText = appState.pomodoro.isRunning ? 'Focus Time!' : 'Time to focus!';
            document.getElementById('pomodoro-timer').classList.remove('text-green-600', 'text-red-600');
            document.getElementById('pomodoro-timer').classList.add('accent-blue');
        } else { // break mode
            statusText = appState.pomodoro.isRunning ? 'Break Time!' : 'Take a break!';
            document.getElementById('pomodoro-timer').classList.remove('accent-blue');
            document.getElementById('pomodoro-timer').classList.add('text-green-600');
        }
        document.getElementById('pomodoro-status').textContent = statusText;
    }

    /**
     * Starts or resumes the Pomodoro timer.
     */
    function startPomodoro() {
        if (appState.pomodoro.isRunning) return;

        appState.pomodoro.isRunning = true;
        appState.pomodoro.timerId = setInterval(() => {
            appState.pomodoro.timeLeft--;
            updatePomodoroDisplay();

            if (appState.pomodoro.timeLeft <= 0) {
                clearInterval(appState.pomodoro.timerId);
                playPomodoroChime(); // Play sound when timer ends
                if (appState.pomodoro.mode === 'work') {
                    showNotification("Work session complete! Time for a break.", false);
                    appState.pomodoro.mode = 'break';
                    appState.pomodoro.timeLeft = 5 * 60; // 5 min break
                } else {
                    showNotification("Break over! Time to focus.", false);
                    appState.pomodoro.mode = 'work';
                    appState.pomodoro.timeLeft = 25 * 60; // 25 min work
                }
                appState.pomodoro.isRunning = false;
                updatePomodoroDisplay(); // Update display for new mode/time
                startPomodoro(); // Automatically start the next phase
            }
        }, 1000);
    }

    /**
     * Pauses the Pomodoro timer.
     */
    function pausePomodoro() {
        if (!appState.pomodoro.isRunning) return;
        clearInterval(appState.pomodoro.timerId);
        appState.pomodoro.isRunning = false;
        document.getElementById('pomodoro-status').textContent = "Paused.";
    }

    /**
     * Resets the Pomodoro timer to its initial state based on current mode.
     */
    function resetPomodoro() {
        clearInterval(appState.pomodoro.timerId);
        appState.pomodoro.isRunning = false;
        appState.pomodoro.mode = 'work'; // Always reset to work mode first
        appState.pomodoro.timeLeft = 25 * 60;
        updatePomodoroDisplay();
        document.getElementById('pomodoro-status').textContent = "Ready to focus!";
    }

    /**
     * Plays a chime sound when Pomodoro timer completes a session.
     */
    function playPomodoroChime() {
        // Use Tone.js for sound generation instead of external files
        try {
            // Tone.js context needs to be started by a user gesture.
            // A common pattern is to start it on the first user interaction.
            // For example, in a button click handler for playing sound, or a general document click.
            // Since this function is called inside pomodoro, it likely won't have direct user gesture.
            // If Tone.js isn't already started, the rawContext might be null.
            if (!Tone.context || Tone.context.state !== 'running') {
                // Attempt to start context if not running.
                // This might not work in all environments without a direct user gesture.
                Tone.start().then(() => {
                    const synth = new Tone.Synth().toDestination();
                    synth.triggerAttackRelease("C4", "8n");
                }).catch(e => console.warn("Tone.js start failed on chime:", e));
            } else {
                const synth = new Tone.Synth().toDestination();
                synth.triggerAttackRelease("C4", "8n");
            }
        } catch (error) {
            console.error("Error playing sound with Tone.js:", error);
        }
    }


    /**
     * Renders content in the Learning Hub based on category.
     * @param {string} category - The category to display.
     */
    function renderLearningHubContent(category) {
        const contentContainer = document.getElementById('learning-hub-content');
        if (!contentContainer || !mockData.learningHubContent[category]) return;

        // Update active tab button
        document.querySelectorAll('.tab-button').forEach(btn => {
            if (btn.dataset.category === category) {
                btn.classList.add('bg-accent-blue', 'text-white');
                btn.classList.remove('text-primary', 'hover:bg-border-color');
            } else {
                btn.classList.remove('bg-accent-blue', 'text-white');
                btn.classList.add('text-primary', 'hover:bg-border-color');
            }
        });


        contentContainer.innerHTML = '';
        mockData.learningHubContent[category].forEach(item => {
            const card = document.createElement('div');
            card.className = 'bg-primary p-4 rounded-xl shadow-sm border border-border-color cursor-pointer hover:shadow-md transition-shadow';
            card.innerHTML = `
                <h4 class="font-semibold text-lg text-primary mb-1">${item.title}</h4>
                <p class="text-sm text-secondary">${item.summary}</p>
            `;
            card.addEventListener('click', () => showLearningHubDetail(item));
            contentContainer.appendChild(card);
        });
        appState.learningHubCategory = category; // Update state
        saveUserData(); // Save the current category
    }

    /**
     * Displays detailed content from the Learning Hub in a modal.
     * If details are empty, calls AI to generate.
     * @param {object} item - The learning hub item object.
     */
    async function showLearningHubDetail(item) {
        detailTitle.textContent = item.title;
        detailContentText.classList.add('hidden');
        detailLoading.classList.remove('hidden');
        showModal(detailModal);

        if (item.details) {
            detailContentText.innerHTML = marked.parse(item.details);
            detailContentText.classList.remove('hidden');
            detailLoading.classList.add('hidden');
        } else {
            try {
                // Call AI to generate detailed content
                const prompt = `Provide a detailed explanation and practical insights for the learning concept "${item.title}". Aim for about 300-500 words, using clear headings and bullet points where appropriate.`;
                const chatHistory = [];
                chatHistory.push({ role: "user", parts: [{ text: prompt }] });
                const payload = { contents: chatHistory };

                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorData.error.message}`);
                }

                const result = await response.json();
                if (result.candidates && result.candidates.length > 0 &&
                    result.candidates[0].content && result.candidates[0].content.parts &&
                    result.candidates[0].content.parts.length > 0) {
                    item.details = result.candidates[0].content.parts[0].text; // Update item details
                    detailContentText.innerHTML = marked.parse(item.details);
                    saveUserData(); // Save updated mockData with new details
                    detailContentText.classList.remove('hidden');
                    detailLoading.classList.add('hidden');
                } else {
                    throw new Error("AI did not return content.");
                }
            } catch (error) {
                console.error("Error generating learning hub detail:", error);
                detailContentText.innerHTML = `<p class="text-red-600">Failed to load details. AI generation error: ${error.message}</p>`;
                detailContentText.classList.remove('hidden');
                detailLoading.classList.add('hidden');
            }
        }
    }


    /**
     * Renders glossary terms.
     */
    function renderGlossary() {
        if (!glossaryList) return;

        glossaryList.innerHTML = '';
        const searchTerm = glossarySearchInput.value.toLowerCase();

        const filteredGlossary = mockData.glossary.filter(term =>
            term.term.toLowerCase().includes(searchTerm) ||
            term.definition.toLowerCase().includes(searchTerm)
        ).sort((a, b) => a.term.localeCompare(b.term)); // Sort alphabetically

        if (filteredGlossary.length === 0) {
            emptyGlossaryMessage.classList.remove('hidden');
            return;
        } else {
            emptyGlossaryMessage.classList.add('hidden');
        }

        filteredGlossary.forEach(item => {
            const div = document.createElement('div');
            div.className = 'list-item-themed p-3 rounded-lg border flex justify-between items-start';
            div.innerHTML = `
                <div class="flex-1">
                    <p class="font-semibold text-primary">${item.term}</p>
                    <p class="text-sm text-secondary">${item.definition}</p>
                </div>
                <button class="text-red-500 hover:text-red-700 delete-glossary-btn" data-id="${item.id}" title="Delete Term">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            glossaryList.appendChild(div);
        });

        glossaryList.querySelectorAll('.delete-glossary-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const termIdToDelete = event.currentTarget.dataset.id;
                if (window.confirm("Are you sure you want to delete this glossary term?")) {
                    deleteGlossaryTerm(termIdToDelete);
                }
            });
        });
    }

    /**
     * Deletes a glossary term by ID.
     * @param {string} idToDelete - The ID of the term to delete.
     */
    function deleteGlossaryTerm(idToDelete) {
        const initialLength = mockData.glossary.length;
        mockData.glossary = mockData.glossary.filter(term => term.id !== idToDelete);
        if (mockData.glossary.length < initialLength) {
            saveUserData();
            showNotification("Glossary term deleted.");
            renderGlossary(); // Re-render the list
        } else {
            showNotification("Glossary term not found.", true);
        }
    }


    // --- Mind Map Functions ---

    // Constants for mind map drawing
    const NODE_RADIUS = 50;
    const NODE_COLOR = 'var(--node-bg)';
    const NODE_BORDER_COLOR = 'var(--node-border)';
    const NODE_SELECTED_COLOR = 'var(--node-selected-border)';
    const NODE_TEXT_COLOR = 'var(--node-text)';
    const CONNECTION_COLOR = 'var(--connection-color)';
    const CONNECTION_WIDTH = 2;
    const ARROW_SIZE = 10;

    /**
     * Draws the mind map on the canvas.
     */
    function drawMindMap() {
        if (!mindMapCanvas || !mindMapCtx) return;

        // Clear canvas
        mindMapCtx.clearRect(0, 0, mindMapCanvas.width, mindMapCanvas.height);

        mindMapCtx.save(); // Save context state
        mindMapCtx.translate(appState.mindMap.offsetX, appState.mindMap.offsetY);
        mindMapCtx.scale(appState.mindMap.scale, appState.mindMap.scale);

        // Draw connections first
        mindData.connections.forEach(conn => {
            const startNode = mindData.nodes.find(n => n.id === conn.startNodeId);
            const endNode = mindData.nodes.find(n => n.id === conn.endNodeId);

            if (startNode && endNode) {
                mindMapCtx.beginPath();
                mindMapCtx.moveTo(startNode.x, startNode.y);
                mindMapCtx.lineTo(endNode.x, endNode.y);
                mindMapCtx.strokeStyle = CONNECTION_COLOR;
                mindMapCtx.lineWidth = CONNECTION_WIDTH;
                mindMapCtx.stroke();

                // Draw arrow head on the end node
                drawArrowhead(mindMapCtx, startNode, endNode, CONNECTION_COLOR);
            }
        });

        // Draw nodes
        mindData.nodes.forEach(node => {
            mindMapCtx.beginPath();
            mindMapCtx.arc(node.x, node.y, NODE_RADIUS, 0, Math.PI * 2);
            mindMapCtx.fillStyle = NODE_COLOR;
            mindMapCtx.fill();
            mindMapCtx.strokeStyle = (appState.mindMap.selectedNode && appState.mindMap.selectedNode.id === node.id) ? NODE_SELECTED_COLOR : NODE_BORDER_COLOR;
            mindMapCtx.lineWidth = 2;
            mindMapCtx.stroke();

            // Draw text
            mindMapCtx.fillStyle = NODE_TEXT_COLOR;
            mindMapCtx.font = '14px Inter';
            mindMapCtx.textAlign = 'center';
            mindMapCtx.textBaseline = 'middle';

            // Wrap text if too long
            const words = node.text.split(' ');
            let line = '';
            const lines = [];
            const MAX_WIDTH = (NODE_RADIUS * 2) * 0.8; // 80% of diameter

            for (let n = 0; n < words.length; n++) {
                const testLine = line + words[n] + ' ';
                const metrics = mindMapCtx.measureText(testLine);
                const testWidth = metrics.width;
                if (testWidth > MAX_WIDTH && n > 0) {
                    lines.push(line);
                    line = words[n] + ' ';
                } else {
                    line = testLine;
                }
            }
            lines.push(line);

            let yOffset = node.y - ((lines.length - 1) * 10 / 2); // Adjust for vertical centering
            lines.forEach((lineText, i) => {
                mindMapCtx.fillText(lineText.trim(), node.x, yOffset + (i * 15)); // 15px line height
            });
        });

        mindMapCtx.restore(); // Restore context state
    }

    /**
     * Draws an arrowhead at the end of a line.
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context.
     * @param {object} startNode - The starting node object {x, y}.
     * @param {object} endNode - The ending node object {x, y}.
     * @param {string} color - The color of the arrow.
     */
    function drawArrowhead(ctx, startNode, endNode, color) {
        const angle = Math.atan2(endNode.y - startNode.y, endNode.x - startNode.x);

        // Calculate position slightly before the edge of the end node
        const tipX = endNode.x - NODE_RADIUS * Math.cos(angle);
        const tipY = endNode.y - NODE_RADIUS * Math.sin(angle);

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(tipX, tipY);
        ctx.lineTo(tipX - ARROW_SIZE * Math.cos(angle - Math.PI / 6), tipY - ARROW_SIZE * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(tipX - ARROW_SIZE * Math.cos(angle + Math.PI / 6), tipY - ARROW_SIZE * Math.sin(angle + Math.PI / 6));
        ctx.closePath();
        ctx.fill();
    }


    // Mind Map Interaction state (local to mind map functions)
    let mindData = {
        nodes: [],
        connections: []
    };

    /**
     * Converts canvas coordinates to actual map coordinates, accounting for zoom and pan.
     * @param {number} canvasX
     * @param {number} canvasY
     * @returns {object} {x, y} in map coordinates.
     */
    function getMapCoordinates(canvasX, canvasY) {
        const rect = mindMapCanvas.getBoundingClientRect();
        const clientX = canvasX - rect.left;
        const clientY = canvasY - rect.top;

        const x = (clientX - appState.mindMap.offsetX) / appState.mindMap.scale;
        const y = (clientY - appState.mindMap.offsetY) / appState.mindMap.scale;
        return { x, y };
    }

    /**
     * Adds a new node to the mind map.
     */
    function addNode() {
        const text = mindMapNodeTextInput.value.trim();
        if (!text) {
            showNotification('Please enter text for the node.', true);
            return;
        }

        // Calculate a random position on the visible canvas area
        const canvasRect = mindMapCanvas.getBoundingClientRect();
        const randomX = Math.random() * canvasRect.width;
        const randomY = Math.random() * canvasRect.height;

        // Convert random canvas position to map coordinates
        const { x, y } = getMapCoordinates(randomX + canvasRect.left, randomY + canvasRect.top);


        const newNode = {
            id: crypto.randomUUID(),
            text: text,
            x: x,
            y: y
        };
        mindData.nodes.push(newNode);
        mindMapNodeTextInput.value = '';
        saveMindMap(); // Save immediately
        drawMindMap();
    }

    /**
     * Clears all nodes and connections from the mind map.
     */
    function clearMindMap() {
        if (window.confirm("Are you sure you want to clear the entire mind map? This action cannot be undone.")) {
            mindData.nodes = [];
            mindData.connections = [];
            appState.mindMap.selectedNode = null;
            appState.mindMap.connectingNode = null;
            appState.mindMap.scale = 1;
            appState.mindMap.offsetX = 0;
            appState.mindMap.offsetY = 0;
            saveMindMap();
            drawMindMap();
            showNotification('Mind map cleared!');
        }
    }

    /**
     * Saves the current mind map state to localStorage.
     */
    function saveMindMap() {
        const mapName = prompt("Enter a name for this mind map:");
        if (mapName) {
            const existingMapIndex = mockData.mindMaps.findIndex(m => m.name === mapName);
            const currentMapState = {
                nodes: mindData.nodes,
                connections: mindData.connections,
                scale: appState.mindMap.scale,
                offsetX: appState.mindMap.offsetX,
                offsetY: appState.mindMap.offsetY
            };
            if (existingMapIndex !== -1) {
                mockData.mindMaps[existingMapIndex].data = currentMapState;
                showNotification(`Mind map "${mapName}" updated!`);
            } else {
                mockData.mindMaps.push({ id: crypto.randomUUID(), name: mapName, data: currentMapState });
                showNotification(`Mind map "${mapName}" saved!`);
            }
            saveUserData();
            populateMindMapLoadSelect(); // Update the load dropdown
        } else {
            showNotification("Mind map not saved. A name is required.", true);
        }
    }

    /**
     * Loads a selected mind map from localStorage.
     */
    function loadMindMap() {
        const selectedMapId = mindMapLoadSelect.value;
        if (!selectedMapId) return;

        const mapToLoad = mockData.mindMaps.find(m => m.id === selectedMapId);
        if (mapToLoad && mapToLoad.data) {
            mindData.nodes = mapToLoad.data.nodes || [];
            mindData.connections = mapToLoad.data.connections || [];
            appState.mindMap.scale = mapToLoad.data.scale || 1;
            appState.mindMap.offsetX = mapToLoad.data.offsetX || 0;
            appState.mindMap.offsetY = mapToLoad.data.offsetY || 0;
            appState.mindMap.selectedNode = null;
            appState.mindMap.connectingNode = null;
            drawMindMap();
            showNotification(`Mind map "${mapToLoad.name}" loaded!`);
        } else {
            showNotification("Selected mind map not found or corrupted.", true);
        }
    }

    /**
     * Populates the dropdown with saved mind maps.
     */
    function populateMindMapLoadSelect() {
        if (!mindMapLoadSelect) return;

        mindMapLoadSelect.innerHTML = '<option value="">Load Map</option>';
        mockData.mindMaps.forEach(map => {
            const option = document.createElement('option');
            option.value = map.id;
            option.textContent = map.name;
            mindMapLoadSelect.appendChild(option);
        });
    }

    // Mind Map Canvas Event Handlers
    let lastX, lastY; // For panning
    let dragMode = null; // 'pan' or 'node'

    function handleMouseDown(e) {
        if (e.button === 0) { // Left click
            const { x, y } = getMapCoordinates(e.clientX, e.clientY);
            const clickedNode = mindData.nodes.find(node => {
                const dist = Math.sqrt(Math.pow(x - node.x, 2) + Math.pow(y - node.y, 2));
                return dist < NODE_RADIUS;
            });

            if (clickedNode) {
                appState.mindMap.selectedNode = clickedNode;
                dragMode = 'node';
                appState.mindMap.isDragging = true;
                appState.mindMap.dragOffsetX = x - clickedNode.x;
                appState.mindMap.dragOffsetY = y - clickedNode.y;
            } else {
                appState.mindMap.selectedNode = null;
                dragMode = 'pan';
                appState.mindMap.isDragging = true;
                lastX = e.clientX;
                lastY = e.clientY;
            }
        }
        drawMindMap(); // Redraw to update selection highlight
    }

    function handleMouseMove(e) {
        if (!appState.mindMap.isDragging) return;

        if (dragMode === 'node' && appState.mindMap.selectedNode) {
            const { x, y } = getMapCoordinates(e.clientX, e.clientY);
            appState.mindMap.selectedNode.x = x - appState.mindMap.dragOffsetX;
            appState.mindMap.selectedNode.y = y - appState.mindMap.dragOffsetY;
            drawMindMap();
        } else if (dragMode === 'pan') {
            const deltaX = e.clientX - lastX;
            const deltaY = e.clientY - lastY;
            appState.mindMap.offsetX += deltaX;
            appState.mindMap.offsetY += deltaY;
            lastX = e.clientX;
            lastY = e.clientY;
            drawMindMap();
        }
    }

    function handleMouseUp(e) {
        appState.mindMap.isDragging = false;
        dragMode = null;
        saveMindMap(); // Auto-save after drag/pan
    }

    function handleDblClick(e) {
        const { x, y } = getMapCoordinates(e.clientX, e.clientY);
        const clickedNode = mindData.nodes.find(node => {
            const dist = Math.sqrt(Math.pow(x - node.x, 2) + Math.pow(y - node.y, 2));
            return dist < NODE_RADIUS;
        });

        if (clickedNode) {
            if (!appState.mindMap.connectingNode) {
                appState.mindMap.connectingNode = clickedNode;
                showNotification(`Selected "${clickedNode.text}" to connect. Double-click another node to link.`, false);
            } else if (appState.mindMap.connectingNode.id !== clickedNode.id) {
                // Check if connection already exists
                const connectionExists = mindData.connections.some(conn =>
                    (conn.startNodeId === appState.mindMap.connectingNode.id && conn.endNodeId === clickedNode.id) ||
                    (conn.startNodeId === clickedNode.id && conn.endNodeId === appState.mindMap.connectingNode.id)
                );
                if (!connectionExists) {
                    mindData.connections.push({
                        id: crypto.randomUUID(),
                        startNodeId: appState.mindMap.connectingNode.id,
                        endNodeId: clickedNode.id
                    });
                    showNotification(`Connected "${appState.mindMap.connectingNode.text}" and "${clickedNode.text}"`);
                } else {
                    showNotification("Connection already exists.", true);
                }
                appState.mindMap.connectingNode = null; // Reset
            }
        } else {
            appState.mindMap.connectingNode = null; // Clear if double-clicked empty space
        }
        drawMindMap();
        saveMindMap(); // Auto-save after connection
    }

    function handleMouseWheel(e) {
        e.preventDefault(); // Prevent page scrolling
        const scaleAmount = 1.1;
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const oldScale = appState.mindMap.scale;
        let newScale;

        if (e.deltaY < 0) { // Zoom in
            newScale = oldScale * scaleAmount;
        } else { // Zoom out
            newScale = oldScale / scaleAmount;
        }

        // Calculate new offset to zoom towards mouse cursor
        const mousePointToClientX = mouseX - mindMapCanvas.getBoundingClientRect().left;
        const mousePointToClientY = mouseY - mindMapCanvas.getBoundingClientRect().top;

        appState.mindMap.offsetX = mousePointToClientX - ((mousePointToClientX - appState.mindMap.offsetX) / oldScale) * newScale;
        appState.mindMap.offsetY = mousePointToClientY - ((mousePointToClientY - appState.mindMap.offsetY) / oldScale) * newScale;

        appState.mindMap.scale = newScale;
        drawMindMap();
    }

    // Touch event handlers for mobile Mind Map interaction
    let initialPinchDistance = null;
    let lastTouch = null; // For single touch drag

    function handleTouchStart(e) {
        e.preventDefault(); // Prevent scrolling and other default touch behaviors

        if (e.touches.length === 1) {
            // Single touch for dragging/selecting
            const touch = e.touches[0];
            lastTouch = { x: touch.clientX, y: touch.clientY };
            handleMouseDown({ clientX: touch.clientX, clientY: touch.clientY, button: 0 }); // Simulate left click
        } else if (e.touches.length === 2) {
            // Two touches for pinch-to-zoom
            initialPinchDistance = getPinchDistance(e.touches);
            appState.mindMap.isDragging = false; // Disable node/pan drag during pinch
        }
    }

    function handleTouchMove(e) {
        e.preventDefault(); // Prevent scrolling

        if (e.touches.length === 1 && appState.mindMap.isDragging) {
            // Single touch drag (pan or node drag)
            const touch = e.touches[0];
            handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY });
            lastTouch = { x: touch.clientX, y: touch.clientY };
        } else if (e.touches.length === 2 && initialPinchDistance) {
            // Pinch-to-zoom
            const currentPinchDistance = getPinchDistance(e.touches);
            const scaleFactor = currentPinchDistance / initialPinchDistance;
            initialPinchDistance = currentPinchDistance; // Update for next move

            const oldScale = appState.mindMap.scale;
            let newScale = oldScale * scaleFactor;

            // Zoom towards the centroid of the two touches
            const centroidX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
            const centroidY = (e.touches[0].clientY + e.touches[1].clientY) / 2;

            const mousePointToClientX = centroidX - mindMapCanvas.getBoundingClientRect().left;
            const mousePointToClientY = centroidY - mindMapCanvas.getBoundingClientRect().top;

            appState.mindMap.offsetX = mousePointToClientX - ((mousePointToClientX - appState.mindMap.offsetX) / oldScale) * newScale;
            appState.mindMap.offsetY = mousePointToClientY - ((mousePointToClientY - appState.mindMap.offsetY) / oldScale) * newScale;

            appState.mindMap.scale = newScale;
            drawMindMap();
        }
    }

    function handleTouchEnd(e) {
        // Only trigger mouseup logic if it was a drag, not just a tap
        if (appState.mindMap.isDragging) {
            handleMouseUp(e);
        }
        appState.mindMap.isDragging = false;
        initialPinchDistance = null; // Reset pinch state
        lastTouch = null; // Reset single touch state
    }

    /**
     * Calculates the distance between two touches for pinch gestures.
     * @param {TouchList} touches - The list of active touches.
     * @returns {number} The distance.
     */
    function getPinchDistance(touches) {
        const touch1 = touches[0];
        const touch2 = touches[1];
        return Math.sqrt(
            Math.pow(touch2.clientX - touch1.clientX, 2) +
            Math.pow(touch2.clientY - touch1.clientY, 2)
        );
    }

    // Make mind map canvas responsive
    function resizeMindMapCanvas() {
        if (mindMapCanvas) {
            const container = mindMapCanvas.parentElement;
            mindMapCanvas.width = container.clientWidth;
            mindMapCanvas.height = Math.min(container.clientWidth * 0.7, 600); // Maintain aspect ratio or max height
            drawMindMap();
        }
    }


    /**
     * Renders achievements on the achievements view.
     */
    function renderAchievements() {
        if (!achievementsList) return;

        achievementsList.innerHTML = '';

        const allAchievements = [
            { id: 'first-mastery', name: 'First Mastery', description: 'Master your first flashcard.', icon: '🌟', threshold: 1, type: 'totalMastered' },
            { id: 'streak-7', name: '7-Day Streak', description: 'Achieve a 7-day study streak.', icon: '🔥', threshold: 7, type: 'streak' },
            { id: 'streak-30', name: '30-Day Streak', description: 'Achieve a 30-day study streak.', icon: '🏆', threshold: 30, type: 'streak' },
            { id: 'mastery-10', name: 'Knowledge Seeker', description: 'Master 10 flashcards.', icon: '🧠', threshold: 10, type: 'totalMastered' },
            { id: 'mastery-50', name: 'Knowledge Expert', description: 'Master 50 flashcards.', icon: '💡', threshold: 50, type: 'totalMastered' },
            { id: 'challenge-5', name: 'Daily Challenger', description: 'Complete 5 daily challenges.', icon: '🏅', threshold: 5, type: 'dailyChallengeCount' },
            { id: 'challenge-20', name: 'Challenge Master', description: 'Complete 20 daily challenges.', icon: '🥇', threshold: 20, type: 'dailyChallengeCount' },
            { id: 'first-quiz', name: 'Quiz Whiz', description: 'Complete your first AI-generated quiz.', icon: '📊', type: 'boolean', flag: 'completedFirstQuiz' },
            { id: 'first-notes', name: 'Note Taker', description: 'Generate your first AI-generated notes.', icon: '📝', type: 'boolean', flag: 'generatedFirstNotes' },
            { id: 'first-mindmap', name: 'Mind Mapper', description: 'Save your first mind map.', icon: '🗺️', type: 'boolean', flag: 'savedFirstMindMap' }
        ];

        if (allAchievements.length === 0) {
            emptyAchievementsMessage.classList.remove('hidden');
            return;
        } else {
            emptyAchievementsMessage.classList.add('hidden');
        }

        allAchievements.forEach(ach => {
            const isUnlocked = mockData.user.achievements.includes(ach.id);
            let meetsCriteria = false;

            if (ach.type === 'totalMastered') {
                meetsCriteria = mockData.user.totalMastered >= ach.threshold;
            } else if (ach.type === 'streak') {
                meetsCriteria = mockData.user.streak >= ach.threshold;
            } else if (ach.type === 'dailyChallengeCount') {
                meetsCriteria = mockData.user.dailyChallengeCount >= ach.threshold;
            } else if (ach.type === 'boolean' && ach.flag) {
                // For boolean flags, check if the flag is set to true in user data
                meetsCriteria = mockData.user[ach.flag] === true;
            }

            // Unlock achievement if criteria met and not already unlocked
            if (meetsCriteria && !isUnlocked) {
                mockData.user.achievements.push(ach.id);
                showNotification(`Achievement Unlocked: ${ach.name}!`, false);
                saveUserData();
            }

            const card = document.createElement('div');
            card.className = `achievement-card ${isUnlocked || meetsCriteria ? 'bg-secondary' : 'locked'} p-6 rounded-xl shadow-sm border border-border-color`;
            card.innerHTML = `
                <span class="icon mb-2">${ach.icon}</span>
                <h4 class="font-bold text-primary mb-1">${ach.name}</h4>
                <p class="text-sm text-secondary">${ach.description}</p>
                <p class="text-xs text-gray-500 mt-2">${isUnlocked || meetsCriteria ? 'Unlocked!' : 'Locked'}</p>
            `;
            achievementsList.appendChild(card);
        });
    }

    /**
     * Checks achievements and unlocks them if criteria are met.
     */
    function checkAchievements() {
        renderAchievements(); // Simply re-render and let the rendering logic handle unlocking
    }

    // Function to handle global search
    function performGlobalSearch() {
        const query = globalSearchInput.value.toLowerCase().trim();
        const results = [];

        if (!query) {
            searchResultsContent.innerHTML = '<p class="text-secondary text-center">Please enter a search term.</p>';
            showModal(searchResultsModal);
            return;
        }

        // Search Flashcards
        mockData.flashcards.forEach(f => {
            if (f.question.toLowerCase().includes(query) || f.answer.toLowerCase().includes(query)) {
                results.push({
                    type: 'Flashcard',
                    title: f.question.substring(0, 50) + (f.question.length > 50 ? '...' : ''),
                    content: f.answer,
                    subject: mockData.subjects.find(s => s.id === f.subjectId)?.name || 'Uncategorized',
                    link: `javascript:loadView('library'); showSubjectDetail('${f.subjectId}');`
                });
            }
        });

        // Search AI Materials
        mockData.aiMaterials.forEach(m => {
            if (m.title.toLowerCase().includes(query) || m.content.toLowerCase().includes(query)) {
                results.push({
                    type: `AI ${m.type}`,
                    title: m.title,
                    content: m.content.substring(0, 100) + (m.content.length > 100 ? '...' : ''),
                    subject: mockData.subjects.find(s => s.id === m.subjectId)?.name || 'Uncategorized',
                    link: `javascript:loadView('library'); viewAiMaterial('${m.id}');`
                });
            }
        });

        // Search Glossary
        mockData.glossary.forEach(g => {
            if (g.term.toLowerCase().includes(query) || g.definition.toLowerCase().includes(query)) {
                results.push({
                    type: 'Glossary Term',
                    title: g.term,
                    content: g.definition,
                    link: `javascript:loadView('glossary');` // Just go to glossary view, highlight will be handled by search input
                });
            }
        });

        // Render results
        searchResultsContent.innerHTML = '';
        if (results.length === 0) {
            searchResultsContent.innerHTML = '<p class="text-secondary text-center">No results found.</p>';
        } else {
            results.forEach(result => {
                const item = document.createElement('div');
                item.className = 'list-item-themed p-3 rounded-lg border mb-2';
                item.innerHTML = `
                    <p class="text-xs font-semibold text-accent-blue mb-1">${result.type}</p>
                    <h4 class="font-bold text-primary mb-1">${result.title}</h4>
                    <p class="text-sm text-secondary truncate">${result.content}</p>
                    ${result.link ? `<a href="${result.link}" class="text-sm text-accent-blue hover:underline mt-1 inline-block">View Details</a>` : ''}
                `;
                searchResultsContent.appendChild(item);
            });
        }
        showModal(searchResultsModal);
    }

    // --- Onboarding Functions ---
    let currentOnboardingStep = 0;
    const onboardingSequence = ['step-1', 'step-2', 'step-3'];

    function showOnboarding() {
        showModal(onboardingModal);
        updateOnboardingStep();
    }

    function updateOnboardingStep() {
        onboardingNextBtn.textContent = (currentOnboardingStep === onboardingSequence.length - 1) ? 'Finish Setup' : 'Next';
        onboardingSkipBtn.classList.toggle('hidden', currentOnboardingStep === onboardingSequence.length - 1);

        Object.values(onboardingSteps).forEach(step => step.classList.add('hidden'));
        onboardingSteps[onboardingSequence[currentOnboardingStep]].classList.remove('hidden');

        // Update onboarding text based on current step
        if (currentOnboardingStep === 0) {
            onboardingText.textContent = "Let's set up your personalized learning journey. Tell us about your primary learning goals.";
        } else if (currentOnboardingStep === 1) {
            onboardingText.textContent = "Great! How many hours can you realistically dedicate to learning each week?";
        } else if (currentOnboardingStep === 2) {
            onboardingText.textContent = "Almost there! What subjects or areas are you currently focusing on? (e.g., Biology, History, Programming)";
        }
    }

    function goToNextOnboardingStep() {
        if (currentOnboardingStep === 0) {
            const goal = document.getElementById('goal-input').value.trim();
            if (goal) mockData.user.learningGoals.push({ id: crypto.randomUUID(), name: goal, targetType: 'general', targetValue: 0, endDate: '' });
            else { showNotification("Please enter a learning goal.", true); return; }
        } else if (currentOnboardingStep === 1) {
            const time = parseFloat(document.getElementById('time-input').value);
            if (!isNaN(time) && time >= 0) mockData.user.weeklyStudyTime = time;
            else { showNotification("Please enter a valid weekly study time.", true); return; }
        } else if (currentOnboardingStep === 2) {
            const subjectsInput = document.getElementById('subjects-input').value.trim();
            if (subjectsInput) {
                subjectsInput.split(',').forEach(subName => {
                    const trimmedName = subName.trim();
                    if (trimmedName) {
                        const subjectId = trimmedName.toLowerCase().replace(/\s+/g, '-');
                        if (!mockData.subjects.some(s => s.id === subjectId)) {
                            mockData.subjects.push({ id: subjectId, name: trimmedName, color: 'bg-gray-200', textColor: 'text-gray-800' });
                        }
                    }
                });
            } else { showNotification("Please enter at least one subject.", true); return; }
        }

        if (currentOnboardingStep < onboardingSequence.length - 1) {
            currentOnboardingStep++;
            updateOnboardingStep();
        } else {
            // Last step, finish onboarding
            appState.onboardingCompleted = true;
            saveUserData();
            hideModal(onboardingModal);
            showNotification("Setup complete! Welcome to AuraLearn.", false);
            loadView('dashboard');
        }
    }

    function skipOnboarding() {
        if (window.confirm("Are you sure you want to skip the setup? You can configure these settings later in the Settings section.")) {
            appState.onboardingCompleted = true;
            saveUserData();
            hideModal(onboardingModal);
            loadView('dashboard');
            showNotification("Onboarding skipped. You can complete setup in settings.", false);
        }
    }

    // Data Export/Import Functions
    function exportAllData() {
        const data = JSON.stringify(mockData, null, 2); // Pretty print JSON
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        const now = new Date();
        const fileName = `auralearn_backup_${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}.json`;
        a.download = fileName;
        document.body.appendChild(a); // Required for Firefox
        a.click();
        document.body.removeChild(a); // Clean up
        URL.revokeObjectURL(url);
        mockData.user.lastExportDate = now.toISOString();
        saveUserData();
        showNotification("Data exported successfully!");
        checkBackupReminder();
    }

    function importAllData(event) {
        const file = event.target.files[0];
        if (!file) {
            showNotification("No file selected.", true);
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);

                // Basic validation for critical properties
                if (!importedData.user || !importedData.flashcards || !importedData.subjects) {
                    throw new Error("Invalid data format. Missing core sections.");
                }

                // Confirm overwrite
                if (!window.confirm("Importing data will OVERWRITE all your current AuraLearn data. Are you sure you want to proceed?")) {
                    return;
                }

                // Assign imported data to mockData, ensuring Dates are re-parsed
                mockData.user = importedData.user;
                mockData.subjects = importedData.subjects;
                mockData.flashcards = (importedData.flashcards || []).map(f => ({
                    ...f,
                    lastReviewed: f.lastReviewed ? new Date(f.lastReviewed) : null,
                    nextReview: f.nextReview ? new Date(f.nextReviewed) : null // Fixed potential typo: nextReviewed instead of nextReview
                }));
                mockData.aiMaterials = importedData.aiMaterials || [];
                mockData.glossary = importedData.glossary || [];
                mockData.mindMaps = importedData.mindMaps || [];
                mockData.calendarEvents = (importedData.calendarEvents || []).map(event => ({
                    ...event,
                    date: event.date ? new Date(event.date) : null
                }));

                // Ensure all user properties are present after import, using initialUserData as default
                for (const key in initialUserData) {
                    if (mockData.user[key] === undefined) {
                        if (typeof initialUserData[key] === 'object' && initialUserData[key] !== null) {
                            mockData.user[key] = JSON.parse(JSON.stringify(initialUserData[key]));
                        } else {
                            mockData.user[key] = initialUserData[key];
                        }
                    }
                }


                saveUserData(); // Re-save the imported data to localStorage
                showNotification("Data imported successfully! Reloading application...", false);
                setTimeout(() => window.location.reload(), 1000); // Reload to apply changes fully
            } catch (error) {
                console.error("Error importing data:", error);
                showNotification(`Failed to import data: ${error.message}. Please ensure it's a valid AuraLearn JSON file.`, true);
            }
        };
        reader.readAsText(file);
    }

    // --- Analytics Chart Functions ---
    let masteryChartInstance = null;
    let activityChartInstance = null;
    let growthChartInstance = null;

    function renderAnalyticsCharts() {
        // Mastery Distribution Chart
        const masteryCtx = document.getElementById('masteryChart').getContext('2d');
        const masteredCount = mockData.flashcards.filter(f => f.wasMastered).length;
        const learningCount = mockData.flashcards.length - masteredCount;

        if (masteryChartInstance) masteryChartInstance.destroy();
        masteryChartInstance = new Chart(masteryCtx, {
            type: 'pie',
            data: {
                labels: ['Mastered Flashcards', 'Learning Flashcards'],
                datasets: [{
                    data: [masteredCount, learningCount],
                    backgroundColor: [
                        getComputedStyle(document.body).getPropertyValue('--text-green'),
                        getComputedStyle(document.body).getPropertyValue('--accent-blue')
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: getComputedStyle(document.body).getPropertyValue('--text-primary')
                        }
                    },
                    title: {
                        display: true,
                        text: 'Flashcard Mastery Distribution',
                        color: getComputedStyle(document.body).getPropertyValue('--text-primary')
                    }
                }
            }
        });

        // Weekly Study Activity Chart
        const activityCtx = document.getElementById('activityChart').getContext('2d');
        const dailyLogs = mockData.user.dailyStudyLogs || []; // Ensure it's an array
        const labels = dailyLogs.map(log => new Date(log.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }));
        const data = dailyLogs.map(log => log.flashcardsReviewed);

        if (activityChartInstance) activityChartInstance.destroy();
        activityChartInstance = new Chart(activityCtx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Flashcards Reviewed Daily',
                    data: data,
                    backgroundColor: getComputedStyle(document.body).getPropertyValue('--accent-blue'),
                    borderColor: getComputedStyle(document.body).getPropertyValue('--accent-blue-hover'),
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Daily Flashcards Reviewed (Last 7 Days)',
                        color: getComputedStyle(document.body).getPropertyValue('--text-primary')
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: getComputedStyle(document.body).getPropertyValue('--text-secondary')
                        },
                        grid: {
                            color: getComputedStyle(document.body).getPropertyValue('--border-color')
                        }
                    },
                    x: {
                        ticks: {
                            color: getComputedStyle(document.body).getPropertyValue('--text-secondary')
                        },
                        grid: {
                            color: getComputedStyle(document.body).getPropertyValue('--border-color')
                        }
                    }
                }
            }
        });

        // Knowledge Growth Over Time Chart
        const growthCtx = document.getElementById('growthChart').getContext('2d');
        const monthlyLogs = mockData.user.monthlyMasteryLogs || []; // Ensure it's an array
        const growthLabels = monthlyLogs.map(log => log.monthYear);
        const growthData = monthlyLogs.map(log => log.masteredFlashcards);

        if (growthChartInstance) growthChartInstance.destroy();
        growthChartInstance = new Chart(growthCtx, {
            type: 'line',
            data: {
                labels: growthLabels,
                datasets: [{
                    label: 'Total Mastered Flashcards',
                    data: growthData,
                    borderColor: getComputedStyle(document.body).getPropertyValue('--text-green'),
                    tension: 0.3,
                    fill: true,
                    backgroundColor: 'rgba(34, 197, 94, 0.2)', // Green with transparency
                    pointBackgroundColor: getComputedStyle(document.body).getPropertyValue('--text-green')
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Mastered Flashcards Over Time (Last 7 Months)',
                        color: getComputedStyle(document.body).getPropertyValue('--text-primary')
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: getComputedStyle(document.body).getPropertyValue('--text-secondary')
                        },
                        grid: {
                            color: getComputedStyle(document.body).getPropertyValue('--border-color')
                        }
                    },
                    x: {
                        ticks: {
                            color: getComputedStyle(document.body).getPropertyValue('--text-secondary')
                        },
                        grid: {
                            color: getComputedStyle(document.body).getPropertyValue('--border-color')
                        }
                    }
                }
            }
        });
    }

    /**
     * Updates daily study log for analytics.
     */
    function updateDailyStudyLog() {
        const today = new Date();
        const todayDateString = today.toISOString().split('T')[0];
        // Find existing log for today or create new one
        let currentDayLog = mockData.user.dailyStudyLogs.find(log => log.date === todayDateString);

        if (!currentDayLog) {
            currentDayLog = { date: todayDateString, flashcardsReviewed: 0 };
            mockData.user.dailyStudyLogs.push(currentDayLog);
        }
        currentDayLog.flashcardsReviewed = (currentDayLog.flashcardsReviewed || 0) + (appState.studySession.flashcardsReviewedInSession || 0);


        // Keep only last 7 days of logs (sort by date before slicing to ensure correct 7 days)
        mockData.user.dailyStudyLogs.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        if (mockData.user.dailyStudyLogs.length > 7) {
            mockData.user.dailyStudyLogs = mockData.user.dailyStudyLogs.slice(-7);
        }
        saveUserData();
    }

    /**
     * Updates monthly mastery log for analytics.
     */
    function updateMonthlyMasteryLog() {
        const todayInit = new Date();
        const currentMonthYearInit = `${todayInit.getFullYear()}-${todayInit.getMonth() + 1}`;
        // Ensure monthlyMasteryLogs is an array before accessing length
        const lastMonthLogInit = (mockData.user.monthlyMasteryLogs && mockData.user.monthlyMasteryLogs.length > 0) ?
            mockData.user.monthlyMasteryLogs[mockData.user.monthlyMasteryLogs.length - 1] : null;

        if (!lastMonthLogInit || lastMonthLogInit.monthYear !== currentMonthYearInit) {
            mockData.user.monthlyMasteryLogs.push({
                date: todayInit.toISOString().split('T')[0],
                monthYear: currentMonthYearInit,
                masteredFlashcards: mockData.flashcards.filter(f => f.repetitions >= 3 && f.easeFactor >= 2.0).length // Renamed
            });
            if (mockData.user.monthlyMasteryLogs.length > 7) {
                mockData.user.monthlyMasteryLogs = mockData.user.monthlyMasteryLogs.slice(-7);
            }
        } else {
            lastMonthLogInit.masteredFlashcards = mockData.flashcards.filter(f => f.repetitions >= 3 && f.easeFactor >= 2.0).length; // Renamed
        }

        saveUserData(); // Ensure the latest state is saved
    }


    // --- Event Listeners ---

    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            loadView(e.currentTarget.dataset.view);
        });
    });

    // Mobile menu
    if (mobileMenuButton && mobileSidebarContainer && mobileSidebar) {
        mobileMenuButton.addEventListener('click', () => {
            mobileSidebarContainer.classList.remove('hidden');
            setTimeout(() => {
                mobileSidebar.classList.add('translate-x-0');
            }, 10);
        });
    }

    if (closeMenuButton && mobileSidebarContainer && mobileSidebar) {
        closeMenuButton.addEventListener('click', () => {
            mobileSidebar.classList.remove('translate-x-0');
            setTimeout(() => {
                mobileSidebarContainer.classList.add('hidden');
            }, 300);
        });
    }

    // Theme selection
    // Delegated event listener for theme buttons to handle dynamic rendering
    document.addEventListener('click', (event) => {
        if (event.target.closest('.theme-btn')) {
            const themeBtn = event.target.closest('.theme-btn');
            const themeName = themeBtn.dataset.theme;
            if (themeName) {
                setTheme(themeName);
            }
        }
    });

    // Study Session
    startReviewBtn.addEventListener('click', () => startStudySession(false)); // Start normal review
    studyWeakFlashcardsBtn.addEventListener('click', () => startStudySession(true)); // Start weak flashcards review
    showAnswerBtn.addEventListener('click', showAnswer);
    recallButtons.forEach(button => {
        button.addEventListener('click', (e) => handleRecall(parseInt(e.currentTarget.dataset.rating)));
    });

    // Quick Add Flashcard
    quickAddFlashcardBtnDashboard.addEventListener('click', () => {
        populateSubjectSelect(quickAddSubjectSelect); // Populate dropdown before showing
        showModal(quickAddFlashcardModal);
    });
    quickAddFlashcardBtnLibrary.addEventListener('click', () => {
        populateSubjectSelect(quickAddSubjectSelect); // Populate dropdown before showing
        showModal(quickAddFlashcardModal);
    });
    closeQuickAddModalBtn.addEventListener('click', () => hideModal(quickAddFlashcardModal));
    addFlashcardBtn.addEventListener('click', addFlashcard);

    toggleNewSubjectInputBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent form submission if button is inside a form
        newSubjectInput.classList.toggle('hidden');
        if (!newSubjectInput.classList.contains('hidden')) {
            toggleNewSubjectInputBtn.textContent = 'Hide New Subject Field';
            quickAddSubjectSelect.value = ''; // Clear selection when new subject input is shown
            newSubjectInput.focus();
        } else {
            toggleNewSubjectInputBtn.textContent = 'Add New Subject';
        }
    });

    // Calendar Events
    prevMonthBtn.addEventListener('click', () => {
        const newDate = new Date(appState.calendar.currentDate);
        newDate.setMonth(newDate.getMonth() - 1);
        renderCalendar(newDate);
    });
    nextMonthBtn.addEventListener('click', () => {
        const newDate = new Date(appState.calendar.currentDate);
        newDate.setMonth(newDate.getMonth() + 1);
        renderCalendar(newDate);
    });
    addEventBtn.addEventListener('click', () => openEventModal());
    closeEventModalBtn.addEventListener('click', () => hideModal(addEditEventModal));
    saveEventBtn.addEventListener('click', saveEvent);
    deleteEventBtn.addEventListener('click', deleteEvent);

    // Learning Goals
    addGoalBtn.addEventListener('click', () => showModal(addGoalModal));
    closeAddGoalModalBtn.addEventListener('click', () => hideModal(addGoalModal));
    createGoalBtn.addEventListener('click', createLearningGoal);

    // Detail Modal
    closeDetailModalBtn.addEventListener('click', () => hideModal(detailModal));

    // Subject Detail Modal
    closeSubjectDetailModalBtn.addEventListener('click', () => hideModal(subjectDetailModal));

    // Reflection Modal
    closeReflectionModalBtn.addEventListener('click', () => {
        hideModal(reflectionModal);
        loadView('dashboard'); // Go to dashboard after reflection
    });
    saveReflectionBtn.addEventListener('click', () => {
        // In a real app, you might save the reflection text here
        showNotification("Reflection saved!");
        hideModal(reflectionModal);
        loadView('dashboard');
    });

    // Settings
    saveUsernameBtn.addEventListener('click', saveSettings);
    saveIntervalsBtn.addEventListener('click', saveSettings);

    // AI Learning Studio
    aiInputModeToggle.addEventListener('change', toggleAiInputMode);
    generateAiNotesBtn.addEventListener('click', () => generateAiContent('notes'));
    generateNotesFlashcardsBtn.addEventListener('click', () => generateAiContent('flashcards'));
    generateQuizBtn.addEventListener('click', () => generateAiContent('quiz'));
    extractKeywordsBtn.addEventListener('click', () => generateAiContent('keywords'));
    predictExamQuestionsBtn.addEventListener('click', () => generateAiContent('exam-questions'));
    summarizeContentBtn.addEventListener('click', () => generateAiContent('summary'));

    // AI Quiz Modal
    quizSubmitAnswerBtn.addEventListener('click', submitQuizAnswer);
    closeQuizModalBtn.addEventListener('click', () => hideModal(quizModal));
    quizRetakeBtn.addEventListener('click', retakeQuiz);
    quizReviewAnswersBtn.addEventListener('click', reviewQuizAnswers);
    quizBackToResultsBtn.addEventListener('click', backToQuizResults);

    // Handle Quiz Settings Visibility
    generateQuizBtn.addEventListener('click', () => {
        quizSettingsContainer.classList.remove('hidden');
        aiInputContentLabel.textContent = "Enter a topic for the AI to generate a quiz:";
        aiInputContent.placeholder = "e.g., 'React Hooks', 'European History'";
        aiInputModeToggle.checked = true; // Force topic mode for quizzes
        appState.aiInputMode = 'topic';
    });
    // Ensure quiz settings are hidden when other AI generation buttons are clicked
    [generateAiNotesBtn, generateNotesFlashcardsBtn, extractKeywordsBtn, predictExamQuestionsBtn, summarizeContentBtn].forEach(btn => {
        btn.addEventListener('click', () => {
            quizSettingsContainer.classList.add('hidden');
        });
    });


    // Mind Map
    mindMapAddNodeBtn.addEventListener('click', addNode);
    mindMapClearAllBtn.addEventListener('click', clearMindMap);
    mindMapSaveBtn.addEventListener('click', saveMindMap);
    mindMapLoadSelect.addEventListener('change', loadMindMap);
    if (mindMapCanvas) {
        mindMapCanvas.addEventListener('mousedown', handleMouseDown);
        mindMapCanvas.addEventListener('mousemove', handleMouseMove);
        mindMapCanvas.addEventListener('mouseup', handleMouseUp);
        mindMapCanvas.addEventListener('dblclick', handleDblClick);
        mindMapCanvas.addEventListener('wheel', handleMouseWheel); // For zoom
        // Touch events
        mindMapCanvas.addEventListener('touchstart', handleTouchStart, { passive: false });
        mindMapCanvas.addEventListener('touchmove', handleTouchMove, { passive: false });
        mindMapCanvas.addEventListener('touchend', handleTouchEnd);

        // Initial resize
        resizeMindMapCanvas();
        // Listen for window resize to make canvas responsive
        window.addEventListener('resize', resizeMindMapCanvas);
    }


    // Glossary Search
    glossarySearchInput.addEventListener('input', renderGlossary);

    // Learning Hub Tabs
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', (e) => {
            renderLearningHubContent(e.currentTarget.dataset.category);
        });
    });

    // Global Search
    globalSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performGlobalSearch();
        }
    });
    closeSearchResultsModalBtn.addEventListener('click', () => hideModal(searchResultsModal));

    // Daily Challenge Claim Button
    claimChallengeBtn.addEventListener('click', () => {
        const today = new Date().toDateString();
        if (mockData.user.dailyChallengeProgress >= 5 && mockData.user.lastChallengeClaimDate !== today) {
            mockData.user.streak++; // Increment streak upon successful challenge claim
            mockData.user.dailyChallengeCount = (mockData.user.dailyChallengeCount || 0) + 1; // Increment challenge count
            mockData.user.lastChallengeClaimDate = today; // Mark as claimed today
            saveUserData();
            showNotification("Daily challenge reward claimed! Streak updated.", false);
            updateDailyChallengeProgress(); // Update UI
            updateDashboard(); // Refresh dashboard data
            checkAchievements(); // Check if new achievements unlocked
        } else if (mockData.user.lastChallengeClaimDate === today) {
            showNotification("You've already claimed today's reward!", true);
        } else {
            showNotification("Complete the challenge first!", true);
        }
    });

    // Onboarding
    onboardingNextBtn.addEventListener('click', goToNextOnboardingStep);
    onboardingSkipBtn.addEventListener('click', skipOnboarding);

    // Data Export/Import
    exportDataBtn.addEventListener('click', exportAllData);
    importDataBtn.addEventListener('click', () => importDataInput.click()); // Trigger file input click
    importDataInput.addEventListener('change', importAllData);

    // Init App
    // Ensure all data is loaded and merged from localStorage (if exists) or initialized
    // This needs to happen BEFORE any other functions that depend on mockData or appState run.

    // Load current theme from appState and apply
    setTheme(appState.currentTheme);


    // Initial setup of daily/monthly logs on DOMContentLoaded if they haven't been updated for today/this month
    // This is crucial to ensure these arrays exist and have a current entry for ongoing tracking.
    const todayInit = new Date();
    const currentDayStringInit = todayInit.toISOString().split('T')[0];
    const currentMonthYearInit = `${todayInit.getFullYear()}-${todayInit.getMonth() + 1}`;

    // Update daily study log for today if needed
    let lastDailyLogInit = mockData.user.dailyStudyLogs[mockData.user.dailyStudyLogs.length - 1];
    if (!lastDailyLogInit || lastDailyLogInit.date !== currentDayStringInit) {
        mockData.user.dailyStudyLogs.push({ date: currentDayStringInit, flashcardsReviewed: 0 });
        // Keep only last 7 days of logs
        if (mockData.user.dailyStudyLogs.length > 7) {
            mockData.user.dailyStudyLogs = mockData.user.dailyStudyLogs.slice(-7);
        }
    }

    // Update monthly mastery log for current month if needed
    let lastMonthlyLogInit = (mockData.user.monthlyMasteryLogs && mockData.user.monthlyMasteryLogs.length > 0) ?
            mockData.user.monthlyMasteryLogs[mockData.user.monthlyMasteryLogs.length - 1] : null;

    if (!lastMonthlyLogInit || lastMonthlyLogInit.monthYear !== currentMonthYearInit) {
        mockData.user.monthlyMasteryLogs.push({
            date: todayInit.toISOString().split('T')[0],
            monthYear: currentMonthYearInit,
            masteredFlashcards: mockData.flashcards.filter(f => f.repetitions >= 3 && f.easeFactor >= 2.0).length // Renamed
        });
        if (mockData.user.monthlyMasteryLogs.length > 7) {
            mockData.user.monthlyMasteryLogs = mockData.user.monthlyMasteryLogs.slice(-7);
        }
    }
    saveUserData(); // Save initial log state if changed

    // Now, determine if onboarding should be shown based on the loaded state
    if (!appState.onboardingCompleted) {
        // If onboarding explicitly not completed in localStorage or new user
        // Ensure that mockData is initialized with default empty arrays/objects if it came back as null
        // (This is covered by the `|| []` or `|| {}` in mockData object initialization)
        showOnboarding();
    } else {
        // If onboarding completed, just render the app
        usernameInput.value = mockData.user.name;
        checkAchievements(); // Check achievements initially
        loadView(appState.currentView); // Load the last saved view
        renderSoundscapes(); // Render soundscape buttons
        populateMindMapLoadSelect(); // Populate mind map dropdown
        if (appState.currentView === 'mind-map') {
            // Load the most recently saved map if available, otherwise initialize empty
            if (mockData.mindMaps.length > 0) {
                mindData = JSON.parse(JSON.stringify(mockData.mindMaps[mockData.mindMaps.length - 1].data)); // Deep copy last map
            }
            drawMindMap(); // Draw mind map if this is the initial view
        }
    }
});

// Polyfill for crypto.randomUUID for older browsers (optional, but good for robustness)
if (typeof crypto.randomUUID === 'undefined') {
    crypto.randomUUID = function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
}
