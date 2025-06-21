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
    const quizSettingsContainer = document.getElementById('quiz-settings-container'); // Existing element
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
    const reflectionModal = document = document.getElementById('reflection-modal'); // Corrected typo
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
    const quizSubmitAnswerBtn = document.getElementById('quiz-submit-answer-btn');
    const quizFeedback = document.getElementById('quiz-feedback');
    const quizResultsContainer = document.getElementById('quiz-results-container');
    const quizScoreDisplay = document.getElementById('quiz-score-display');
    const quizRetakeBtn = document.getElementById('quiz-retake-btn');
    const quizReviewAnswersBtn = document.getElementById('quiz-review-answers-btn');
    const quizReviewDetailContainer = document.getElementById('quiz-review-detail-container');
    const quizReviewList = document.getElementById('quiz-review-list');
    const quizBackToResultsBtn = document.getElementById('quiz-back-to-results-btn');
    const dailyQueueList = document.getElementById('daily-queue-list'); // For dashboard scrollability

    // Charts
    const masteryChartCanvas = document.getElementById('masteryChart');
    const activityChartCanvas = document.getElementById('activityChart');
    const growthChartCanvas = document.getElementById('growthChart');

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
        dailyStudyLogs: [], // Initialize daily study logs
        monthlyMasteryLogs: [] // Initialize monthly mastery logs
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
            { name: 'Waves', icon: '�', file: 'waves.mp3' }
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
        learningHubContent: {
            auralearnBasics: [
                { title: "What are Flashcards?", summary: "The building blocks of your knowledge in AuraLearn.", details: "In AuraLearn, a 'Flashcard' is the smallest, most fundamental piece of information or concept you want to master, presented as a question-answer pair. Breaking down knowledge into these atomic units allows AuraLearn's intelligent Spaced Repetition System (SRS) to precisely track your mastery of each individual piece and schedule it for optimal review, ensuring you don't waste time on what you already know while reinforcing challenging concepts." }, // Updated 'Learning Atom'
                { title: "How Spaced Repetition Works", summary: "A science-backed method for long-term memory.", details: "AuraLearn's core is its Spaced Repetition System (SRS). After you review a 'Flashcard', you rate how well you recalled it. Based on your rating, AuraLearn's algorithm calculates the optimal time to show you that card again – just before you're likely to forget it. Easy concepts are reviewed less often, difficult ones more frequently. This adaptive scheduling is scientifically proven to move information from short-term to long-term memory much more efficiently than traditional cramming." }, // Updated 'Learning Atom'
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
        tutorialContent: {
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
                        <li><strong>Be Specific:</strong> The more precise your prompt or input text, the better the AI can understand your needs.</li>
                        <li><strong>Topic Mode vs. Text Mode:</strong>
                            <ul>
                                <li><strong>Topic Mode:</strong> Use for broad subjects (e.g., "Quantum Physics", "French Revolution"). The AI will generate general knowledge.</li>
                                <li><strong>Text Mode:</strong> Use when you have specific content (e.g., lecture notes, an article snippet) you want the AI to process directly.</li>
                            </ul>
                        </li>
                        <li><strong>Assign Subjects:</strong> Always assign generated content to a relevant subject for better organization, especially for flashcards.</li>
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
    // This ensures that even if a new property is added, existing users don't get 'null'
    // but rather a default for that specific property.
    mockData.user = mockData.user || JSON.parse(JSON.stringify(initialUserData));
    mockData.subjects = mockData.subjects || []; // Ensure subjects array exists
    mockData.aiMaterials = mockData.aiMaterials || [];
    mockData.glossary = mockData.glossary || [];
    mockData.mindMaps = mockData.mindMaps || [];
    // flashcards are already handled with a default empty array and map over
    // calendarEvents are already handled with a default empty array and map over


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
    const apiKey = ""; // Keep this empty, Canvas provides it at runtime

    // --- Helper Functions ---

    /**
     * Shows a notification toast with a message.
     * @param {string} message - The message to display.
     * @param {boolean} isError - If true, displays an error style.
     */
    function showNotification(message, isError = false) {
        if (!notificationToast) {
            console.error("Notification toast element not found!");
            return;
        }
        notificationToast.textContent = message;
        notificationToast.classList.remove('hidden', 'notification-error', 'notification-success');
        if (isError) {
            notificationToast.classList.add('notification-error');
            notificationToast.classList.remove('notification-success'); // Ensure success class is removed
        } else {
            notificationToast.classList.add('notification-success');
            notificationToast.classList.remove('notification-error'); // Ensure error class is removed
        }
        notificationToast.classList.add('show');
        notificationToast.setAttribute('aria-live', isError ? 'assertive' : 'polite'); // Accessibility

        setTimeout(() => {
            notificationToast.classList.remove('show');
            setTimeout(() => {
                notificationToast.classList.add('hidden');
            }, 300); // Allow fade out before hiding
        }, 4000); // Display for 4 seconds
    }

    /**
     * Shows/hides a modal.
     * @param {HTMLElement} modalElement - The modal DOM element.
     * @param {boolean} show - True to show, false to hide.
     */
    function toggleModal(modalElement, show) {
        if (show) {
            modalElement.classList.remove('hidden');
            // Force reflow for transition
            void modalElement.offsetWidth;
            modalElement.classList.add('modal-active');
        } else {
            modalElement.classList.remove('modal-active');
            // Add hidden after transition
            setTimeout(() => {
                modalElement.classList.add('hidden');
            }, 300); // Match CSS transition duration
        }
    }

    /**
     * Populates the subject dropdown for the Quick Add Flashcard modal, including default subjects.
     */
    function populateQuickAddSubjectSelect() {
        quickAddSubjectSelect.innerHTML = '<option value="">Select or Add New Subject</option>';

        // Add default subjects first
        defaultSubjects.forEach(subject => {
            const option = document.createElement('option');
            option.value = subject.id;
            option.textContent = subject.name;
            quickAddSubjectSelect.appendChild(option);
        });

        // Add user-added subjects, avoiding duplicates if they have the same ID as a default
        mockData.subjects.filter(s => !defaultSubjects.some(ds => ds.id === s.id)).forEach(subject => {
            const option = document.createElement('option');
            option.value = subject.id;
            option.textContent = subject.name;
            quickAddSubjectSelect.appendChild(option);
        });
        quickAddSubjectSelect.value = "";
    }


    /**
     * Checks if a new achievement has been unlocked.
     * @param {string} achievementId - The ID of the achievement to check.
     */
    function unlockAchievement(achievementId) {
        if (!mockData.user.achievements.includes(achievementId)) {
            mockData.user.achievements.push(achievementId);
            // Assuming mockData.achievements is updated elsewhere or can be derived
            // For now, let's ensure achievements in mockData always reflect the user's unlocked ones
            // This is just a UI message, the actual check is in checkAchievements()
            const achievementName = (mockData.achievements || []).find(a => a.id === achievementId)?.name || achievementId;
            showNotification(`Achievement Unlocked: ${achievementName}! 🏅`);
            saveUserData();
            if (appState.currentView === 'achievements') renderAchievements(); // Re-render if on achievements page
        }
    }

    /**
     * Calculates the next review date for a flashcard using an SM-2 like algorithm.
     * @param {Date} lastReviewed - The date the flashcard was last reviewed.
     * @param {number} quality - Recall quality (0-3: Forgot, Struggled, Good, Perfect).
     * @param {number} currentEaseFactor - The current ease factor for the flashcard.
     * @param {number} currentInterval - The current interval in days.
     * @param {number} repetitions - Number of consecutive successful recalls (quality >= 2).
     * @returns {{nextReview: Date, newInterval: number, newEaseFactor: number, newRepetitions: number}}
     */
    function calculateNextReviewDateSM2(lastReviewed, quality, currentEaseFactor, currentInterval, repetitions) {
        let newEaseFactor = currentEaseFactor;
        let newInterval = currentInterval;
        let newRepetitions = repetitions;

        // Adjust ease factor based on quality
        if (quality === 3) { // Perfect
            newEaseFactor += (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)); // Quality directly affects ease factor adjustment
            newRepetitions++;
        } else if (quality === 2) { // Good
            // No change to ease factor
            newRepetitions++;
        } else { // Forgot (quality === 0) or Struggled (quality === 1)
            newEaseFactor -= 0.2;
            newRepetitions = 0; // Reset repetitions
        }

        // Clamp ease factor between 1.3 and 2.5 (or higher if intervals allow, but 2.5 is common max)
        newEaseFactor = Math.max(1.3, newEaseFactor);

        // Calculate new interval using user-defined SRS intervals
        if (quality < 2) { // Forgot or Struggled
            newInterval = quality === 0 ? mockData.user.srsIntervals.forgot : mockData.user.srsIntervals.struggled;
        } else { // Good or Perfect
            if (newRepetitions === 1) { // First successful recall after learning/reset
                newInterval = mockData.user.srsIntervals.good;
            } else if (newRepetitions === 2) { // Second consecutive successful recall
                newInterval = mockData.user.srsIntervals.perfect;
            } else { // Further successful recalls
                newInterval = newInterval * newEaseFactor;
            }
        }

        // Ensure interval is at least 1 day if repetitions > 0 and interval was previously short and quality is good/perfect
        if (newRepetitions > 0 && newInterval < 1 && quality >= 2) {
            newInterval = 1; // Minimum 1 day for proper spaced repetition if mastery is good/perfect
        }

        const nextDate = new Date(lastReviewed.getTime() + newInterval * 24 * 60 * 60 * 1000); // Convert days to milliseconds

        return {
            nextReview: nextDate,
            newInterval: newInterval,
            newEaseFactor: newEaseFactor,
            newRepetitions: newRepetitions
        };
    }

    /**
     * Gets flashcards due for review today, sorted by next review date.
     * @returns {Array<Object>} Filtered and sorted list of flashcards.
     */
    function getDailyQueue() {
        const now = new Date();
        now.setHours(0, 0, 0, 0); // Normalize 'now' to start of today for comparison

        return mockData.flashcards.filter(flashcard => {
            const nextReviewDate = flashcard.nextReview instanceof Date ? flashcard.nextReview : new Date(flashcard.nextReview);
            nextReviewDate.setHours(0, 0, 0, 0); // Normalize flashcard's next review date

            // Handle very short intervals (less than a day) correctly for new/forgotten cards
            if (flashcard.interval < 1 && flashcard.repetitions === 0 && new Date(flashcard.lastReviewed).getTime() + flashcard.interval * 24 * 60 * 60 * 1000 <= new Date().getTime()) {
                 return true;
            }
            return nextReviewDate <= now; // For intervals >= 1 day, just compare dates
        }).sort((a, b) => {
            const dateA = a.nextReview instanceof Date ? a.nextReview : new Date(a.nextReview);
            const dateB = b.nextReview instanceof Date ? b.nextReview : new Date(b.nextReview);
            return dateA.getTime() - dateB.getTime();
        }).slice(0, 15); // Limit to 15 for a manageable daily session
    }

    /**
     * Gets flashcards that the user has struggled with (low repetitions, low ease factor).
     * @returns {Array<Object>} List of weak flashcards.
     */
    function getWeakFlashcards() {
        return mockData.flashcards
            .filter(flashcard => flashcard.repetitions < 3 && flashcard.easeFactor < 2.0 && flashcard.interval > 0) // Struggled, but not brand new
            .sort((a, b) => a.easeFactor - b.easeFactor) // Sort by lowest ease factor first
            .slice(0, 20); // Limit to 20 weak flashcards for a session
    }

    /**
     * Gets recommended flashcards (e.g., lowest difficulty and not in today's queue).
     * @returns {Array<Object>} List of recommended flashcards.
     */
    function getRecommendedFlashcards() {
        const todayQueueIds = new Set(getDailyQueue().map(f => f.id));
        return mockData.flashcards
            .filter(flashcard => flashcard.repetitions === 0 && !todayQueueIds.has(flashcard.id)) // Only truly new flashcards not in today's queue
            .sort((a, b) => new Date(a.nextReview).getTime() - new Date(b.nextReview).getTime()) // Sort by next review for new flashcards
            .slice(0, 3); // Show top 3 recommendations
    }

    /**
     * Gets upcoming calendar events for the next 7 days.
     * @returns {Array<Object>} List of upcoming events.
     */
    function getUpcomingEvents() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const sevenDaysLater = new Date(today);
        sevenDaysLater.setDate(today.getDate() + 7);

        return mockData.calendarEvents.filter(event => {
            const eventDate = new Date(event.date);
            eventDate.setHours(0, 0, 0, 0);
            return eventDate >= today && eventDate <= sevenDaysLater;
        }).sort((a, b) => a.date.getTime() - b.date.getTime());
    }


    /**
     * Main render function to switch views and update common UI elements.
     */
    function render() {
        // Hide all views first
        Object.values(views).forEach(view => view.classList.add('hidden'));
        // Show current view
        if (views[appState.currentView]) {
            views[appState.currentView].classList.remove('hidden');
        }
        updateActiveNav();
        localStorage.setItem('auralearn_currentView', appState.currentView); // Save current view state

        // Update common UI elements
        dashboardUsername.textContent = mockData.user.name;
        sidebarUsername.textContent = mockData.user.name;
        sidebarUsernameMobile.textContent = mockData.user.name;
        currentStreak.textContent = `🔥 ${mockData.user.streak} Days`;
        totalMasteredFlashcards.textContent = mockData.flashcards.filter(f => f.repetitions >= 3 && f.easeFactor >= 2.0).length;
        dailyQueueCount.textContent = `${getDailyQueue().length} Flashcards`;
        upcomingEventsCount.textContent = getUpcomingEvents().length;

        // Render content specific to the current view
        if (appState.currentView === 'dashboard') renderDashboard();
        if (appState.currentView === 'calendar') renderCalendar();
        if (appState.currentView === 'library') renderLibrary();
        if (appState.currentView === 'ai-learning') renderAILearning();
        if (appState.currentView === 'mind-map') renderMindMap();
        if (appState.currentView === 'glossary') renderGlossary();
        if (appState.currentView === 'analytics') renderAnalytics();
        if (appState.currentView === 'achievements') renderAchievements();
        if (appState.currentView === 'focus') renderFocusTools();
        if (appState.currentView === 'learning-hub') renderLearningHub();
        if (appState.currentView === 'settings') renderSettings();
        if (appState.currentView === 'tutorial') renderTutorial();
    }

    /**
     * Renders content for the Dashboard view.
     */
    function renderDashboard() {
        const dailyQueue = getDailyQueue();
        const weakFlashcards = getWeakFlashcards();
        dailyQueueList.innerHTML = ''; // Clear previous list items

        if (dailyQueue.length === 0) {
            dailyQueueList.innerHTML = '<li class="p-3 text-secondary text-center list-item-themed">No flashcards due for review today. Great job!</li>';
            startReviewBtn.textContent = 'No Reviews Today';
            startReviewBtn.disabled = true;
        } else {
            dailyQueue.forEach(flashcard => {
                const subject = mockData.subjects.find(s => s.id === flashcard.subjectId) || defaultSubjects.find(s => s.id === flashcard.subjectId);
                const li = document.createElement('li');
                li.className = 'flex items-center justify-between p-3 rounded-lg border list-item-themed hover:list-item-themed';
                const subjectColorClass = subject ? `${subject.color} ${subject.textColor}` : 'bg-gray-200 text-gray-800';
                li.innerHTML = `
                    <div>
                        <p class="font-medium text-primary">${flashcard.question}</p>
                        <span class="text-xs font-semibold ${subjectColorClass} px-2 py-1 rounded-full">${subject ? subject.name : 'Unknown Subject'}</span>
                    </div>
                    <span class="text-secondary text-lg">›</span>
                `;
                dailyQueueList.appendChild(li);
            });
            startReviewBtn.textContent = `Start Daily Review (${dailyQueue.length} items)`;
            startReviewBtn.disabled = false;
        }

        // Update Weak Flashcards button text
        studyWeakFlashcardsBtn.textContent = `Study Weak Flashcards (${weakFlashcards.length})`;
        studyWeakFlashcardsBtn.disabled = weakFlashcards.length === 0;

        // Render Recommended Flashcards
        const recommendedFlashcards = getRecommendedFlashcards();
        recommendedFlashcardsList.innerHTML = '';
        if (recommendedFlashcards.length === 0) {
            recommendedFlashcardsList.innerHTML = `<p class="text-secondary text-center mt-4">No specific recommendations yet. Start importing content!</p>`;
        } else {
            recommendedFlashcards.forEach(flashcard => {
                const subject = mockData.subjects.find(s => s.id === flashcard.subjectId) || defaultSubjects.find(s => s.id === flashcard.subjectId);
                const li = document.createElement('div');
                li.className = 'flex items-center justify-between p-3 rounded-lg border list-item-themed hover:list-item-themed';
                const subjectColorClass = subject ? `${subject.color} ${subject.textColor}` : 'bg-gray-200 text-gray-800';
                li.innerHTML = `
                    <div>
                        <p class="font-medium text-primary">${flashcard.question}</p>
                        <span class="text-xs font-semibold ${subjectColorClass} px-2 py-1 rounded-full">${subject ? subject.name : 'Unknown Subject'}</span>
                    </div>
                    <button class="bg-accent-blue text-white text-xs py-1 px-2 rounded-md hover:bg-accent-blue-hover" data-flashcard-id="${flashcard.id}" aria-label="Review ${flashcard.question}">Review</button>
                `;
                recommendedFlashcardsList.appendChild(li);

                const reviewBtn = li.querySelector('button');
                reviewBtn.addEventListener('click', () => {
                    const flashcardId = parseInt(reviewBtn.dataset.flashcardId);
                    const selectedFlashcard = mockData.flashcards.find(f => f.id === flashcardId);
                    if (selectedFlashcard) {
                        showDetailModal({ title: selectedFlashcard.question, details: selectedFlashcard.answer });
                    }
                });
            });
        }

        // Daily Challenge Logic
        const today = new Date().toISOString().split('T')[0];
        if (mockData.user.lastChallengeDate !== today) {
            mockData.user.dailyChallengeProgress = 0;
            // Only reset streak if the day before was also not studied
            const yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0];
            if (mockData.user.lastChallengeDate !== yesterday) {
                mockData.user.streak = 0;
            }
        }
        dailyChallengeText.textContent = `Review 5 flashcards to complete today's challenge!`;
        dailyChallengeProgress.style.width = `${(mockData.user.dailyChallengeProgress / 5) * 100}%`;
        dailyChallengeStatus.textContent = `${mockData.user.dailyChallengeProgress}/5 Flashcards Reviewed`;

        if (mockData.user.dailyChallengeProgress >= 5 && mockData.user.lastChallengeDate === today) {
            claimChallengeBtn.classList.remove('hidden');
            // This achievement is checked in claimChallengeBtn's event listener
        } else {
            claimChallengeBtn.classList.add('hidden');
        }
        saveUserData();

        // Backup Reminder
        const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;
        const lastExportDate = mockData.user.lastExportDate ? new Date(mockData.user.lastExportDate) : null;
        if (!lastExportDate || (new Date() - lastExportDate > ONE_WEEK_MS)) {
            backupReminder.classList.remove('hidden');
        } else {
            backupReminder.classList.add('hidden');
        }
    }

    /**
     * Renders the Calendar view for the current month.
     */
    function renderCalendar() {
        const today = new Date();
        const currentMonth = appState.calendar.currentDate.getMonth();
        const currentYear = appState.calendar.currentDate.getFullYear();

        currentMonthYearDisplay.textContent = new Date(currentYear, currentMonth).toLocaleString('en-US', { month: 'long', year: 'numeric' });
        calendarGrid.innerHTML = '';
        eventsListForDay.innerHTML = ''; // Clear events list for selected day initially

        const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
        const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
        const daysInMonth = lastDayOfMonth.getDate();
        const startDayOfWeek = firstDayOfMonth.getDay(); // 0 for Sunday, 6 for Saturday

        // Add empty cells for days before the 1st of the month
        for (let i = 0; i < startDayOfWeek; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'calendar-day-cell inactive';
            calendarGrid.appendChild(emptyCell);
        }

        // Add actual days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            const dayCell = document.createElement('div');
            dayCell.className = 'calendar-day-cell';
            dayCell.dataset.date = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
            dayCell.innerHTML = `<span class="calendar-day-number">${i}</span>`;

            const fullDate = new Date(currentYear, currentMonth, i);

            // Add 'today' class if it's the current day
            if (fullDate.toDateString() === today.toDateString()) {
                dayCell.classList.add('today');
                // Select today by default on calendar load if no specific day is selected
                if (!appState.calendar.selectedDay || appState.calendar.selectedDay.toDateString() !== fullDate.toDateString()) {
                    appState.calendar.selectedDay = fullDate;
                }
            }

            // Add 'selected-day' class if it's the currently selected day
            if (appState.calendar.selectedDay && fullDate.toDateString() === appState.calendar.selectedDay.toDateString()) {
                dayCell.classList.add('selected-day');
            }

            // Add event markers
            const eventsForThisDay = mockData.calendarEvents.filter(event => {
                const eventDate = new Date(event.date);
                return eventDate.toDateString() === fullDate.toDateString();
            });

            if (eventsForThisDay.length > 0) {
                eventsForThisDay.slice(0, 3).forEach(event => { // Show up to 3 events directly on the day cell
                    const eventItem = document.createElement('div');
                    eventItem.className = `calendar-event-item event-type-${event.type}`;
                    eventItem.innerHTML = `<span class="calendar-event-marker"></span><span class="calendar-event-title">${event.title}</span>`;
                    dayCell.appendChild(eventItem);
                });
                if (eventsForThisDay.length > 3) {
                    const moreEvents = document.createElement('div');
                    moreEvents.className = 'text-xs text-secondary mt-1 ml-4';
                    moreEvents.textContent = `+${eventsForThisDay.length - 3} more`;
                    dayCell.appendChild(moreEvents);
                }
            }

            dayCell.addEventListener('click', () => {
                // Remove selected-day from previously selected cell
                const prevSelected = calendarGrid.querySelector('.calendar-day-cell.selected-day');
                if (prevSelected) prevSelected.classList.remove('selected-day');

                // Add selected-day to current cell
                dayCell.classList.add('selected-day');
                appState.calendar.selectedDay = fullDate;
                renderEventsForSelectedDay();
            });

            calendarGrid.appendChild(dayCell);
        }

        // Add empty cells for days after the last day of the month
        const endDayOfWeek = lastDayOfMonth.getDay();
        for (let i = endDayOfWeek + 1; i <= 6; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'calendar-day-cell inactive';
            calendarGrid.appendChild(emptyCell);
        }

        // Ensure events for the initially selected day are rendered
        renderEventsForSelectedDay();
    }

    /**
     * Renders events for the currently selected day in the calendar.
     */
    function renderEventsForSelectedDay() {
        if (!appState.calendar.selectedDay) {
            eventsListForDay.innerHTML = '<li class="text-secondary text-center">Select a day to view events.</li>';
            selectedDayDisplay.textContent = 'Today';
            return;
        }

        const selectedDate = appState.calendar.selectedDay;
        selectedDayDisplay.textContent = selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

        const events = mockData.calendarEvents.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.toDateString() === selectedDate.toDateString();
        }).sort((a, b) => {
            // Sort by time if available, otherwise by title
            const timeA = a.time ? a.time.split(':').map(Number) : [0, 0];
            const timeB = b.time ? b.time.split(':').map(Number) : [0, 0];
            if (timeA[0] !== timeB[0]) return timeA[0] - timeB[0];
            if (timeA[1] !== timeB[1]) return timeA[1] - timeB[1];
            return a.title.localeCompare(b.title);
        });

        eventsListForDay.innerHTML = '';
        if (events.length === 0) {
            eventsListForDay.innerHTML = '<li class="text-secondary text-center">No events for this day.</li>';
        } else {
            events.forEach(event => {
                const li = document.createElement('li');
                li.className = `p-3 rounded-lg border list-item-themed hover:list-item-themed cursor-pointer flex items-center gap-2 event-type-${event.type}`;
                const eventTime = event.time ? `${event.time}` : '';
                li.innerHTML = `
                    <span class="calendar-event-marker"></span>
                    <div>
                        <p class="font-semibold text-primary">${event.title}</p>
                        <p class="text-xs text-secondary">${eventTime} ${event.notes ? ` - ${event.notes}` : ''}</p>
                    </div>
                `;
                li.addEventListener('click', () => showAddEditEventModal(event));
                eventsListForDay.appendChild(li);
            });
        }
    }

    // Calendar Navigation event listeners
    prevMonthBtn.addEventListener('click', () => {
        appState.calendar.currentDate.setMonth(appState.calendar.currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthBtn.addEventListener('click', () => {
        appState.calendar.currentDate.setMonth(appState.calendar.currentDate.getMonth() + 1);
        renderCalendar();
    });

    addEventBtn.addEventListener('click', () => showAddEditEventModal(null, appState.calendar.selectedDay)); // Pass selected day to pre-fill date

    // Add/Edit Event Modal Logic
    function showAddEditEventModal(event = null, dateToPreFill = null) {
        toggleModal(addEditEventModal, true);
        if (event) {
            appState.calendar.editingEvent = event;
            eventModalTitle.textContent = 'Edit Event';
            eventTitleInput.value = event.title;
            eventDateInput.value = event.date.toISOString().split('T')[0]; //YYYY-MM-DD
            eventTimeInput.value = event.time || '';
            eventNotesInput.value = event.notes || '';
            eventTypeSelect.value = event.type || 'other';
            deleteEventBtn.classList.remove('hidden');
        } else {
            appState.calendar.editingEvent = null;
            eventModalTitle.textContent = 'Add New Event';
            eventTitleInput.value = '';
            eventDateInput.value = dateToPreFill ? dateToPreFill.toISOString().split('T')[0] : '';
            eventTimeInput.value = '';
            eventNotesInput.value = '';
            eventTypeSelect.value = 'assignment'; // Default type
            deleteEventBtn.classList.add('hidden');
        }
    }

    closeEventModalBtn.addEventListener('click', () => {
        toggleModal(addEditEventModal, false);
        appState.calendar.editingEvent = null; // Clear editing state
    });

    saveEventBtn.addEventListener('click', () => {
        const title = eventTitleInput.value.trim();
        const dateString = eventDateInput.value;
        const time = eventTimeInput.value.trim();
        const notes = eventNotesInput.value.trim();
        const type = eventTypeSelect.value;

        if (!title || !dateString) {
            showNotification('Event title and date are required.', true);
            return;
        }

        const eventDate = new Date(dateString);
        if (isNaN(eventDate.getTime())) {
            showNotification('Invalid date selected.', true);
            return;
        }

        if (appState.calendar.editingEvent) {
            // Update existing event
            appState.calendar.editingEvent.title = title;
            appState.calendar.editingEvent.date = eventDate;
            appState.calendar.editingEvent.time = time;
            appState.calendar.editingEvent.notes = notes;
            appState.calendar.editingEvent.type = type;
            showNotification('Event updated successfully!');
        } else {
            // Add new event
            const newEvent = {
                id: mockData.calendarEvents.length > 0 ? Math.max(...mockData.calendarEvents.map(e => e.id)) + 1 : 1,
                title: title,
                date: eventDate,
                time: time,
                notes: notes,
                type: type
            };
            mockData.calendarEvents.push(newEvent);
            showNotification('Event added successfully!');
        }
        saveUserData();
        toggleModal(addEditEventModal, false);
        render(); // Re-render to update calendar and dashboard counts
    });

    deleteEventBtn.addEventListener('click', () => {
        // Use custom confirmation
        showCustomConfirmation('Are you sure you want to delete this event?', () => {
            if (appState.calendar.editingEvent) {
                mockData.calendarEvents = mockData.calendarEvents.filter(event => event.id !== appState.calendar.editingEvent.id);
                saveUserData();
                showNotification('Event deleted successfully!');
                toggleModal(addEditEventModal, false);
                render(); // Re-render to update calendar and dashboard counts
            }
        });
    });

    /**
     * Renders content for the Library view.
     */
    function renderLibrary() {
        subjectGrid.innerHTML = '';
        if (mockData.subjects.length === 0 && mockData.flashcards.length === 0) { // Check both for emptiness
            emptyLibraryMessage.classList.remove('hidden');
        } else {
            emptyLibraryMessage.classList.add('hidden');
            // Combine default and user-added subjects for display
            const allSubjects = [...defaultSubjects.filter(ds => !mockData.subjects.some(s => s.id === ds.id)), ...mockData.subjects];

            allSubjects.forEach(subject => {
                const div = document.createElement('div');
                div.className = `p-4 rounded-xl shadow-sm border border-border-color ${subject.color} cursor-pointer hover:shadow-md transition-shadow`;
                const flashcardsInSubjectCount = mockData.flashcards.filter(f => f.subjectId === subject.id).length;
                div.innerHTML = `
                    <h4 class="font-bold ${subject.textColor}">${subject.name}</h4>
                    <p class="text-sm ${subject.textColor.replace('-800', '-600')}">${flashcardsInSubjectCount} Flashcards</p>
                `;
                div.addEventListener('click', () => showSubjectDetails(subject.id));
                subjectGrid.appendChild(div);
            });
        }

        // Render AI-Generated Materials
        aiMaterialsList.innerHTML = '';
        if (mockData.aiMaterials.length === 0) {
            emptyAiMaterialsMessage.classList.remove('hidden');
        } else {
            emptyAiMaterialsMessage.classList.add('hidden');
            mockData.aiMaterials.forEach(aiMaterial => {
                const materialDiv = document.createElement('div');
                materialDiv.className = 'p-3 rounded-lg border list-item-themed hover:list-item-themed cursor-pointer transition-colors';
                let typeLabel = '';
                let displayContent = '';

                if (aiMaterial.type === 'note') {
                    typeLabel = 'AI Note';
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = aiMaterial.content;
                    displayContent = `<p>${tempDiv.textContent.substring(0, Math.min(tempDiv.textContent.length, 100))}...</p>`;
                } else if (aiMaterial.type === 'quiz') {
                    typeLabel = 'AI Quiz';
                    displayContent = `<p>${aiMaterial.content.length} Questions</p>`;
                } else if (aiMaterial.type === 'keywords') {
                    typeLabel = 'Keywords';
                    // Check if content is array of objects or just strings
                    if (Array.isArray(aiMaterial.content) && aiMaterial.content.length > 0 && typeof aiMaterial.content[0] === 'object') {
                         displayContent = `<p>${aiMaterial.content.map(k => k.keyword).join(', ')}</p>`;
                    } else if (Array.isArray(aiMaterial.content)) {
                         displayContent = `<p>${aiMaterial.content.join(', ')}</p>`;
                    }
                } else if (aiMaterial.type === 'exam-questions') {
                    typeLabel = 'Exam Questions';
                    displayContent = `<p>${aiMaterial.content.length} Questions</p>`;
                } else if (aiMaterial.type === 'summary') {
                    typeLabel = 'AI Summary';
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = aiMaterial.content;
                    displayContent = `<p>${tempDiv.textContent.substring(0, Math.min(tempDiv.textContent.length, 100))}...</p>`;
                }

                materialDiv.innerHTML = `
                    <p class="font-semibold text-primary">${aiMaterial.title}</p>
                    <p class="text-xs text-secondary mt-1">${typeLabel} - ${new Date(aiMaterial.timestamp).toLocaleDateString()}</p>
                    ${displayContent}
                `;
                materialDiv.addEventListener('click', () => showAIGeneratedMaterial(aiMaterial));
                aiMaterialsList.appendChild(materialDiv);
            });
        }
    }

    /**
     * Shows the subject details modal with its associated flashcards.
     * @param {string} subjectId - The ID of the subject.
     */
    function showSubjectDetails(subjectId) {
        const subject = mockData.subjects.find(s => s.id === subjectId) || defaultSubjects.find(s => s.id === subjectId);
        if (!subject) return;

        subjectDetailTitle.textContent = `${subject.name} Flashcards`;
        subjectFlashcardsList.innerHTML = ''; // Clear previous list

        const flashcardsInSubject = mockData.flashcards.filter(flashcard => flashcard.subjectId === subjectId);

        if (flashcardsInSubject.length === 0) {
            subjectFlashcardsList.innerHTML = '<p class="text-secondary text-center list-item-themed">No flashcards in this subject yet.</p>';
        } else {
            flashcardsInSubject.forEach(flashcard => {
                const flashcardDiv = document.createElement('div');
                flashcardDiv.className = 'p-3 rounded-lg border list-item-themed hover:list-item-themed cursor-pointer transition-colors';
                flashcardDiv.innerHTML = `
                    <p class="font-semibold text-primary">${flashcard.question}</p>
                    <p class="text-xs text-secondary mt-1">
                        Recall: ${flashcard.repetitions}x, Interval: ${flashcard.interval.toFixed(2)} days, Ease: ${flashcard.easeFactor.toFixed(2)}
                    </p>
                    <p class="text-xs text-secondary">Next Review: ${new Date(flashcard.nextReview).toLocaleDateString()}</p>
                `;
                flashcardDiv.addEventListener('click', (e) => {
                    e.stopPropagation();
                    showDetailModal({ title: flashcard.question, details: flashcard.answer });
                });
                subjectFlashcardsList.appendChild(flashcardDiv);
            });
        }
        toggleModal(subjectDetailModal, true);
    }

    /**
     * Displays AI Generated Material in the detail modal or triggers a quiz.
     * @param {Object} aiMaterial - The AI material object.
     */
    function showAIGeneratedMaterial(aiMaterial) {
        if (aiMaterial.type === 'quiz') {
            startQuizSession(aiMaterial);
            return;
        }

        detailTitle.textContent = aiMaterial.title;
        detailLoading.classList.add('hidden');
        detailContentText.classList.remove('hidden');

        let contentHtml = '';
        if (aiMaterial.type === 'note' || aiMaterial.type === 'summary') {
            contentHtml = aiMaterial.content;
        } else if (aiMaterial.type === 'keywords') {
            contentHtml = '<h3 class="text-xl font-bold text-primary mb-4">Keywords & Definitions:</h3>';
            aiMaterial.content.forEach(item => {
                contentHtml += `<div class="mb-3 p-2 border list-item-themed rounded-md"><h4>${item.keyword}:</h4><p>${item.definition}</p></div>`;
            });
        } else if (aiMaterial.type === 'exam-questions') {
            contentHtml = '<h3 class="text-xl font-bold text-primary mb-4">Predicted Exam Questions:</h3>';
            aiMaterial.content.forEach((q, index) => {
                contentHtml += `<p class="mb-2 p-2 border list-item-themed rounded-md">Q${index + 1}: ${q}</p>`;
            });
        }

        detailContentText.innerHTML = contentHtml;
        toggleModal(detailModal, true);
    }

    /**
     * Renders content for the AI Learning view.
     */
    function renderAILearning() {
        aiInputContent.value = '';
        aiContentNewSubjectInput.value = '';
        aiContentNewSubjectInput.classList.add('hidden');
        toggleAIContentNewSubjectInput.textContent = 'Add New Subject';
        aiGeneratedOutput.classList.add('hidden');
        aiOutputContentDisplay.innerHTML = '';
        aiGenerationStatus.classList.add('hidden');
        populateAILearningSubjectSelect();
        updateAiInputUI();
        toggleQuizSettingsVisibility(false); // Hide quiz settings by default
    }

    /**
     * Populates the subject dropdown for the AI Learning section, including default subjects.
     */
    function populateAILearningSubjectSelect() {
        aiContentSubjectSelect.innerHTML = '<option value="">Select or Add New Subject</option>';

        // Add default subjects first
        defaultSubjects.forEach(subject => {
            const option = document.createElement('option');
            option.value = subject.id;
            option.textContent = subject.name;
            aiContentSubjectSelect.appendChild(option);
        });

        // Add user-added subjects, avoiding duplicates if they have the same ID as a default
        mockData.subjects.filter(s => !defaultSubjects.some(ds => ds.id === s.id)).forEach(subject => {
            const option = document.createElement('option');
            option.value = subject.id;
            option.textContent = subject.name;
            aiContentSubjectSelect.appendChild(option);
        });
        aiContentSubjectSelect.value = "";
    }

    /**
     * Updates the AI input UI based on the selected input mode (text or topic).
     */
    function updateAiInputUI() {
        if (appState.aiInputMode === 'topic') {
            aiInputContentLabel.textContent = 'Enter a topic name (e.g., "Quantum Physics", "French Revolution"):';
            aiInputContent.placeholder = "Enter topic name here...";
        } else {
            aiInputContentLabel.textContent = 'Provide text, a topic, or questions for the AI to process:';
            aiInputContent.placeholder = "Enter text, a topic, or specific questions here... e.g., 'Explain blockchain technology', 'Summarize World War 2 causes', or 'Quiz me on React hooks'.";
        }
    }

    /**
     * Toggles visibility of quiz settings based on active AI generation type.
     * @param {boolean} show - True to show, false to hide.
     */
    function toggleQuizSettingsVisibility(show) {
        if (quizSettingsContainer) {
            if (show) {
                quizSettingsContainer.classList.remove('hidden');
            } else {
                quizSettingsContainer.classList.add('hidden');
            }
        }
    }

    /**
     * Triggers AI content generation based on the specified type.
     * @param {string} type - The type of content to generate (e.g., 'note', 'quiz').
     */
    async function generateAIContent(type) {
        const buttonMap = {
            'note': generateAiNotesBtn,
            'notes-flashcards': generateNotesFlashcardsBtn,
            'quiz': generateQuizBtn,
            'keywords': extractKeywordsBtn,
            'exam-questions': predictExamQuestionsBtn,
            'summary': summarizeContentBtn
        };
        const currentButton = buttonMap[type];

        aiGenerationStatus.classList.remove('hidden');
        aiGenerationStatus.textContent = 'Generating... Please wait...';
        if (currentButton) currentButton.disabled = true;

        aiGeneratedOutput.classList.add('hidden');
        aiOutputContentDisplay.innerHTML = '';

        const content = aiInputContent.value.trim();
        if (!content) {
            showNotification('Please provide some content (topic, text, or questions) for the AI.', true);
            aiGenerationStatus.classList.add('hidden');
            if (currentButton) currentButton.disabled = false;
            return;
        }

        let subjectId;
        let subjectName;
        // First check if a new subject is being added via the input field
        if (!aiContentNewSubjectInput.classList.contains('hidden') && aiContentNewSubjectInput.value.trim()) {
            subjectName = aiContentNewSubjectInput.value.trim();
            subjectId = subjectName.toLowerCase().replace(/\s/g, '-').replace(/[^a-z0-9-]/g, '');
            // Check if this new subject already exists (either default or user-added)
            if (!mockData.subjects.find(s => s.id === subjectId) && !defaultSubjects.find(ds => ds.id === subjectId)) {
                // Add to user-specific subjects if it's genuinely new
                mockData.subjects.push({ id: subjectId, name: subjectName, color: "bg-blue-100", textColor: "text-blue-800", flashcards: 0, lastReviewed: null });
            }
        } else {
            // If not adding a new subject, use the selected subject
            subjectId = aiContentSubjectSelect.value;
            if ((type === 'notes-flashcards' || type === 'quiz') && !subjectId) { // Added quiz to subject requirement
                showNotification(`Please select an existing subject or add a new one for ${type === 'notes-flashcards' ? 'Flashcards' : 'Quizzes'}.`, true);
                aiGenerationStatus.classList.add('hidden');
                if (currentButton) currentButton.disabled = false;
                return;
            }
            subjectName = (mockData.subjects.find(s => s.id === subjectId) || defaultSubjects.find(s => s.id === subjectId))?.name || 'General AI Content';
        }

        let prompt = '';
        let responseSchema = {};
        let outputTitle = '';
        let savedContentTitle = '';

        const commonNoteFormatInstructions = `Format the content into clear sections:
        <h3>Main Info</h3>
        <ul>
            <li>[Concise bullet point]</li>
            <li>[Concise bullet point]</li>
        </ul>
        <h3>Key Terms/Keywords:</h3>
        <ul>
            <li>[Keyword]: [Brief definition]</li>
            <li>[Keyword]: [Brief definition]</li>
        </ul>
        <h3>Extra Info:</h3>
        <ul>
            <li>[Additional relevant detail]</li>
            <li>[Another additional relevant detail]</li>
        </ul>
        <h3>Conclusion</h3>
        <ul>
            <li>[Brief summary or key takeaway]</li>
        </ul>
        Ensure the entire response is valid HTML, strictly using h3 for section headers, and ul/li for all bullet points. Do not include any conversational filler, disclaimers, or extra text outside this structure.`;

        switch (type) {
            case 'note':
                outputTitle = 'AI Notes';
                savedContentTitle = `AI Notes on: ${content.substring(0, 50)}${content.length > 50 ? '...' : ''}`;
                prompt = `Generate concise, organized notes on the topic or from the text: "${content}". ${commonNoteFormatInstructions}`;
                responseSchema = { type: "STRING" }; // For direct text output
                break;
            case 'notes-flashcards':
                outputTitle = 'Generated Flashcards';
                savedContentTitle = `Flashcards for: ${content.substring(0, 50)}${content.length > 50 ? '...' : ''}`;
                prompt = `Extract key concepts and their explanations, structured as concise question-answer pairs (Flashcards). Provide at least 5 pairs if possible. For each pair, the question should be concise and the answer should be informative but brief enough for a flashcard. Ensure no markdown formatting like asterisks or bullet points are used within the question or answer text. Content: "${content}"`;
                responseSchema = {
                    type: "ARRAY",
                    items: {
                        type: "OBJECT",
                        properties: {
                            "question": { "type": "STRING" },
                            "answer": { "type": "STRING" }
                        },
                        "propertyOrdering": ["question", "answer"]
                    }
                };
                break;
            case 'quiz':
                outputTitle = 'Generated Quiz';
                savedContentTitle = `Quiz on: ${content.substring(0, 50)}${content.length > 50 ? '...' : ''}`;
                const numQuestions = quizQuestionCountInput ? parseInt(quizQuestionCountInput.value) : 5; // Default to 5
                const difficulty = quizDifficultySelect ? quizDifficultySelect.value : 'medium'; // Default to medium
                prompt = `Generate a ${numQuestions}-question multiple-choice quiz based on the following content: "${content}". The questions should be of ${difficulty} difficulty. For each question, provide 4 options (A, B, C, D) and indicate the correct answer. Format as JSON, ensuring no markdown characters like asterisks or bullet points are used within the question or option text: [{"question": "...", "options": ["A", "B", "C", "D"], "correct_answer": "A"}, ...]`;
                responseSchema = {
                    type: "ARRAY",
                    items: {
                        type: "OBJECT",
                        properties: {
                            "question": { "type": "STRING" },
                            "options": { "type": "ARRAY", "items": { "type": "STRING" } },
                            "correct_answer": { "type": "STRING" }
                        },
                        "propertyOrdering": ["question", "options", "correct_answer"]
                    }
                };
                break;
            case 'keywords':
                outputTitle = 'Extracted Keywords';
                savedContentTitle = `Keywords from: ${content.substring(0, 50)}${content.length > 50 ? '...' : ''}`;
                prompt = `Extract up to 10 most important keywords or key phrases and their brief definitions from the following text/topic: "${content}". Format as JSON, ensuring no markdown characters like asterisks or bullet points are used: [{"keyword": "...", "definition": "..."}, ...]`;
                responseSchema = {
                    type: "ARRAY",
                    items: {
                        type: "OBJECT",
                        properties: {
                            "keyword": { "type": "STRING" },
                            "definition": { "type": "STRING" }
                        },
                        "propertyOrdering": ["keyword", "definition"]
                    }
                };
                break;
            case 'exam-questions':
                outputTitle = 'Predicted Exam Questions';
                savedContentTitle = `Exam Questions for: ${content.substring(0, 50)}${content.length > 50 ? '...' : ''}`;
                prompt = `Generate 5 challenging exam-style questions for the subject related to: "${content}". Focus on core concepts and different question types (e.g., multiple choice, short answer, explanation). Provide only the questions, without answers. Format as JSON, ensuring no markdown characters like asterisks or bullet points are used in the questions: ["Q1", "Q2", "Q3", "Q4", "Q5"]`;
                responseSchema = {
                    type: "ARRAY",
                    items: {
                        type: "STRING"
                    }
                };
                break;
            case 'summary':
                outputTitle = 'AI Summary';
                savedContentTitle = `Summary for: ${content.substring(0, 50)}${content.length > 50 ? '...' : ''}`;
                prompt = `Provide a concise, key-point summary of the following text/topic: "${content}". ${commonNoteFormatInstructions}`;
                responseSchema = { type: "STRING" }; // For direct text output
                break;
            default:
                showNotification('Invalid AI generation type.', true);
                aiGenerationStatus.classList.add('hidden');
                if (currentButton) currentButton.disabled = false;
                return;
        }

        try {
            let chatHistory = [];
            chatHistory.push({ role: "user", parts: [{ text: prompt }] });
            let payload = { contents: chatHistory };

            if (Object.keys(responseSchema).length > 0 && (type !== 'note' && type !== 'summary')) {
                payload.generationConfig = {
                    responseMimeType: "application/json",
                    responseSchema: responseSchema
                };
            }

            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                let generatedContent;
                if (type === 'note' || type === 'summary' || type === 'exam-questions') { // These types return raw string or string array
                    generatedContent = result.candidates[0].content.parts[0].text;
                    if (type === 'exam-questions') {
                         generatedContent = JSON.parse(generatedContent); // Ensure it's parsed if it's a JSON string
                    }
                } else { // These types return JSON objects/arrays
                    generatedContent = JSON.parse(result.candidates[0].content.parts[0].text);
                }


                if (generatedContent && (Array.isArray(generatedContent) ? generatedContent.length > 0 : true)) {
                    aiOutputTitle.textContent = outputTitle;
                    aiGeneratedOutput.classList.remove('hidden');

                    // If generated content needs to be saved to mockData
                    if (type === 'notes-flashcards') {
                        // Merge default subjects with user-added ones for a complete list
                        const allSubjects = [...defaultSubjects, ...mockData.subjects];
                        const subjectObj = allSubjects.find(s => s.id === subjectId);

                        generatedContent.forEach(flashcardData => {
                            const newFlashcard = {
                                id: mockData.flashcards.length > 0 ? Math.max(...mockData.flashcards.map(f => f.id)) + 1 : 1,
                                subjectId: subjectId,
                                question: flashcardData.question,
                                answer: flashcardData.answer,
                                lastReviewed: new Date(),
                                easeFactor: 2.5,
                                interval: 0,
                                repetitions: 0,
                                nextReview: new Date()
                            };
                            mockData.flashcards.push(newFlashcard);
                        });
                        showNotification(`Generated flashcards added to your '${subjectName}' subject!`);
                        unlockAchievement('first-flashcards-generated');
                    } else if (type === 'keywords') {
                        generatedContent.forEach(item => {
                            if (!mockData.glossary.find(g => g.keyword.toLowerCase() === item.keyword.toLowerCase())) {
                                mockData.glossary.push(item);
                            }
                        });
                        showNotification(`Keywords extracted and added to your Glossary!`);
                        unlockAchievement('first-keywords-extracted');
                    } else if (type === 'quiz') {
                        showNotification(`Quiz generated and saved!`);
                        unlockAchievement('first-quiz-generated');
                    } else if (type === 'note') {
                        showNotification(`Notes generated and saved!`);
                        unlockAchievement('first-ai-note');
                    } else if (type === 'summary') {
                        showNotification(`Summary generated and saved!`);
                    }

                    // For content types that are NOT directly saved into flashcards/glossary,
                    // save them to aiMaterials for display in the Library.
                    if (type !== 'notes-flashcards' && type !== 'keywords') {
                        const newMaterial = {
                            id: mockData.aiMaterials.length > 0 ? Math.max(...mockData.aiMaterials.map(m => m.id)) + 1 : 1,
                            type: type,
                            title: savedContentTitle,
                            content: generatedContent, // Save the actual generated content
                            timestamp: new Date().toISOString(),
                            subjectId: subjectId
                        };
                        mockData.aiMaterials.push(newMaterial);
                    }

                    // Display generated content in the output area regardless of where it's saved
                    if (type === 'note' || type === 'summary') {
                        aiOutputContentDisplay.innerHTML = generatedContent;
                    } else if (type === 'notes-flashcards') { // Display generated flashcards for review
                        let html = '<h4 class="font-semibold text-lg mb-3 text-primary">Generated Flashcards:</h4>';
                        generatedContent.forEach((card, index) => {
                            html += `
                                <div class="bg-secondary p-3 rounded-lg shadow-sm border border-border-color mb-2">
                                    <p class="font-medium text-primary">Q${index + 1}: ${card.question}</p>
                                    <p class="text-secondary text-sm">A${index + 1}: ${card.answer}</p>
                                    <p class="text-secondary text-xs italic">Topic: ${subjectName || 'N/A'}</p>
                                </div>
                            `;
                        });
                        aiOutputContentDisplay.innerHTML = html;
                    } else if (type === 'quiz') {
                        aiOutputContentDisplay.innerHTML = '<h3 class="text-xl font-bold text-primary mb-4">Generated Quiz:</h3>';
                        generatedContent.forEach((q, index) => {
                            const quizItem = document.createElement('div');
                            quizItem.className = 'p-3 rounded-lg border list-item-themed';
                            let optionsHtml = q.options.map((opt, i) => `<p class="ml-4">${String.fromCharCode(65 + i)}. ${opt}</p>`).join('');
                            quizItem.innerHTML = `
                                <p class="font-semibold text-primary">Q${index + 1}: ${q.question}</p>
                                ${optionsHtml}
                                <p class="text-green-600 mt-2">Correct Answer: ${q.correct_answer}</p>
                            `;
                            aiOutputContentDisplay.appendChild(quizItem);
                        });
                    } else if (type === 'keywords') {
                        aiOutputContentDisplay.innerHTML = '<h3 class="text-xl font-bold text-primary mb-4">Extracted Keywords:</h3>';
                        generatedContent.forEach(item => {
                            const keywordItem = document.createElement('div');
                            keywordItem.className = 'p-3 rounded-lg border list-item-themed';
                            keywordItem.innerHTML = `<p class="font-semibold text-primary">${item.keyword}:</p><p>${item.definition}</p>`;
                            aiOutputContentDisplay.appendChild(keywordItem);
                        });
                    } else if (type === 'exam-questions') {
                        aiOutputContentDisplay.innerHTML = '<h3 class="text-xl font-bold text-primary mb-4">Predicted Exam Questions:</h3>';
                        generatedContent.forEach((q, index) => {
                            const questionItem = document.createElement('p');
                            questionItem.className = 'p-3 rounded-lg border list-item-themed';
                            questionItem.textContent = `Q${index + 1}: ${q}`;
                            aiOutputContentDisplay.appendChild(questionItem);
                        });
                    }
                    saveUserData();
                    render(); // Re-render views (especially Library) to show newly added materials
                } else {
                    showNotification('AI did not generate any content. Try a different input or subject.', true);
                    aiGeneratedOutput.classList.add('hidden');
                }
            } else {
                showNotification('Error: Could not process content with AI. Invalid response structure or API error.', true);
                console.error("AI Response Error:", result);
            }
        } catch (error) {
            console.error("Error generating AI content:", error);
            showNotification('Failed to connect to AI service or generate content. Please try again.', true);
        } finally {
            aiGenerationStatus.classList.add('hidden');
            if (currentButton) currentButton.disabled = false;
        }
    }

    // --- Chart Management ---
    let charts = {};

    function destroyCharts() {
        Object.values(charts).forEach(chart => {
            if (chart) chart.destroy();
        });
        charts = {};
    }

    /**
     * Renders content for the Analytics view, including charts.
     */
    function renderAnalytics() {
        destroyCharts();

        const primaryTextColor = getComputedStyle(document.documentElement).getPropertyValue('--text-primary');
        const secondaryTextColor = getComputedStyle(document.documentElement).getPropertyValue('--text-secondary');
        const accentBlueColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-blue');
        const borderDivColor = getComputedStyle(document.documentElement).getPropertyValue('--border-color');
        const textGreenColor = getComputedStyle(document.documentElement).getPropertyValue('--text-green');
        const textOrangeColor = getComputedStyle(document.documentElement).getPropertyValue('--text-orange');
        const bgSecondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-secondary');


        const masteredCount = mockData.flashcards.filter(f => f.repetitions >= 3 && f.easeFactor >= 2.0).length;
        const learningCount = mockData.flashcards.filter(f => f.repetitions > 0 && !(f.repetitions >= 3 && f.easeFactor >= 2.0)).length;
        const newCount = mockData.flashcards.filter(f => f.repetitions === 0).length;

        const masteryCtx = document.getElementById('masteryChart').getContext('2d');
        charts.mastery = new Chart(masteryCtx, {
            type: 'doughnut',
            data: {
                labels: ['Mastered', 'Learning', 'New'],
                datasets: [{
                    data: [masteredCount, learningCount, newCount],
                    backgroundColor: [textGreenColor, textOrangeColor, secondaryTextColor],
                    borderColor: bgSecondaryColor,
                    borderWidth: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { color: primaryTextColor } },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                let label = context.label || '';
                                if (label) { label += ': '; }
                                label += Math.round(context.parsed) + ' flashcards';
                                return label;
                            }
                        }
                    }
                }
            }
        });

        // Placeholder for real study activity data
        const activityData = Array(7).fill(0); // [Mon, Tue, ..., Sun]
        const todayMoment = new Date();
        // Adjust for start of week (Monday = 0 for chart, Sunday = 0 for JS getDay())
        const startOfWeek = new Date(todayMoment);
        startOfWeek.setDate(todayMoment.getDate() - (todayMoment.getDay() === 0 ? 6 : todayMoment.getDay() - 1)); // Set to Monday of current week
        startOfWeek.setHours(0, 0, 0, 0);

        if (mockData.user.dailyStudyLogs) {
            mockData.user.dailyStudyLogs.forEach(log => {
                const logDate = new Date(log.date);
                logDate.setHours(0, 0, 0, 0);

                if (logDate >= startOfWeek && logDate <= todayMoment) {
                    let dayOfWeekIndex = logDate.getDay(); // 0 (Sun) - 6 (Sat)
                    dayOfWeekIndex = (dayOfWeekIndex === 0) ? 6 : dayOfWeekIndex - 1; // Convert to Mon (0) - Sun (6) for chart labels
                    activityData[dayOfWeekIndex] += (log.minutes / 60); // Convert minutes to hours
                }
            });
        }

        const activityCtx = document.getElementById('activityChart').getContext('2d');
        charts.activity = new Chart(activityCtx, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{ label: 'Hours Studied', data: activityData, backgroundColor: accentBlueColor }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                let label = context.dataset.label || '';
                                if (label) { label += ': '; }
                                label += context.parsed.y.toFixed(1) + ' hrs';
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    x: { ticks: { color: secondaryTextColor }, grid: { color: borderDivColor } },
                    y: { beginAtZero: true, ticks: { color: secondaryTextColor }, grid: { color: borderDivColor } }
                }
            }
        });

        // Placeholder for knowledge growth data (Last 7 months including current)
        const growthData = Array(7).fill(0);
        const growthLabels = [];
        const currentMonthIdx = new Date().getMonth(); // 0-11
        const currentYear = new Date().getFullYear();

        // Generate labels for the last 7 months
        for (let i = 6; i >= 0; i--) {
            let month = currentMonthIdx - i;
            let year = currentYear;
            if (month < 0) {
                month += 12;
                year -= 1;
            }
            growthLabels.push(new Date(year, month, 1).toLocaleString('en-US', { month: 'short', year: '2-digit' }));
        }

        // Populate growthData from monthlyMasteryLogs
        if (mockData.user.monthlyMasteryLogs) {
            mockData.user.monthlyMasteryLogs.forEach(log => {
                const logDate = new Date(log.date);
                const logMonthYear = `${logDate.getFullYear()}-${logDate.getMonth() + 1}`;
                const currentMonthYear = `${currentYear}-${currentMonthIdx + 1}`;

                // Find index based on monthYear
                for (let i = 0; i < 7; i++) {
                    let monthToCheck = (currentMonthIdx - i + 12) % 12 + 1; // +1 for 1-12 month
                    let yearToCheck = currentYear;
                    if (currentMonthIdx - i < 0) yearToCheck--;

                    const labelMonthYear = `${yearToCheck}-${monthToCheck}`;
                    if (logMonthYear === labelMonthYear) {
                        growthData[6 - i] = log.masteredFlashcards;
                        break;
                    }
                }
            });
        }


        const growthCtx = document.getElementById('growthChart').getContext('2d');
        charts.growth = new Chart(growthCtx, {
            type: 'line',
            data: {
                labels: growthLabels,
                datasets: [{
                    label: 'Total Flashcards Mastered',
                    data: growthData,
                    fill: true,
                    borderColor: accentBlueColor,
                    backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--accent-blue-rgb').replace(')', ', 0.1)'),
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                let label = context.dataset.label || '';
                                if (label) { label += ': '; }
                                label += context.parsed.y + ' flashcards';
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    x: { ticks: { color: secondaryTextColor }, grid: { color: borderDivColor } },
                    y: { beginAtZero: true, ticks: { color: secondaryTextColor }, grid: { color: borderDivColor } }
                }
            }
        });

        // Render Learning Goals
        goalsList.innerHTML = '';
        if (mockData.user.learningGoals.length === 0) {
            emptyGoalsMessage.classList.remove('hidden');
        } else {
            emptyGoalsMessage.classList.add('hidden');
            mockData.user.learningGoals.forEach(goal => {
                let currentProgressValue = 0;
                const masteredCount = mockData.flashcards.filter(f => f.repetitions >= 3 && f.easeFactor >= 2.0).length;

                if (goal.targetType === 'flashcards') {
                    currentProgressValue = masteredCount;
                } else if (goal.targetType === 'time') {
                    const now = new Date();
                    const sevenDaysAgo = new Date(now.setDate(now.getDate() - 7)).toISOString().split('T')[0];
                    currentProgressValue = (mockData.user.dailyStudyLogs || [])
                        .filter(log => log.date >= sevenDaysAgo)
                        .reduce((sum, log) => sum + log.minutes, 0) / 60; // Convert to hours
                }

                const progress = Math.min(100, (currentProgressValue / goal.targetValue) * 100);
                const goalDiv = document.createElement('div');
                goalDiv.className = 'p-4 rounded-lg border list-item-themed';
                goalDiv.innerHTML = `
                    <div class="flex justify-between items-center mb-2">
                        <h4 class="font-semibold text-primary">${goal.name}</h4>
                        <span class="text-sm text-secondary">Due: ${new Date(goal.endDate).toLocaleDateString()}</span>
                    </div>
                    <div class="w-full bg-border-color rounded-full h-2.5">
                        <div class="bg-accent-blue h-2.5 rounded-full" style="width: ${progress}%;"></div>
                    </div>
                    <p class="text-secondary text-sm mt-2">Progress: ${currentProgressValue.toFixed(0)} / ${goal.targetValue} ${goal.targetType === 'time' ? 'hrs' : 'flashcards'}</p>
                `;
                goalsList.appendChild(goalDiv);
            });
        }
    }

    /**
     * Renders content for the Achievements view.
     */
    function renderAchievements() {
        achievementsList.innerHTML = '';
        // Defined here for clarity, but could be loaded from an external config
        const allAchievements = [
            { id: 'first-flashcard', name: 'First Flashcard Added', description: 'Add your very first flashcard.', icon: '✨' },
            { id: 'mastery-beginner', name: 'Beginner Master', description: 'Master 10 flashcards.', icon: '⭐' },
            { id: 'mastery-intermediate', name: 'Intermediate Master', description: 'Master 50 flashcards.', icon: '🌟' },
            { id: 'streak-7-days', name: '7-Day Streak', description: 'Achieve a 7-day study streak.', icon: '🗓️' },
            { id: 'streak-30-days', name: '30-Day Streak', description: 'Achieve a 30-day study streak.', icon: '🏆' },
            { id: 'daily-challenge-master', name: 'Daily Challenger', description: 'Complete 10 daily challenges.', icon: '🎯' },
            { id: 'first-ai-note', name: 'AI Note Creator', description: 'Generate your first AI Note.', icon: '📝' },
            { id: 'first-flashcards-generated', name: 'Flashcard Progenitor', description: 'Generate flashcards using AI.', icon: '💡' },
            { id: 'first-quiz-generated', name: 'Quiz Whiz', description: 'Generate your first AI quiz.', icon: '🧠' },
            { id: 'first-keywords-extracted', name: 'Keyword Explorer', description: 'Extract keywords using AI.', icon: '🔑' },
            { id: 'first-mind-map', name: 'Mind Mapper', description: 'Create your first Mind Map.', icon: '🗺️' }
        ];
        mockData.achievements = mockData.user.achievements; // Ensure mockData.achievements always reflects user's unlocked ones

        if (allAchievements.every(ach => !mockData.achievements.includes(ach.id))) {
            emptyAchievementsMessage.classList.remove('hidden');
        } else {
            emptyAchievementsMessage.classList.add('hidden');
        }

        allAchievements.forEach(ach => {
            const isUnlocked = mockData.achievements.includes(ach.id);
            const card = document.createElement('div');
            card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;
            card.innerHTML = `
                <span class="icon">${ach.icon}</span>
                <h4>${ach.name}</h4>
                <p>${ach.description}</p>
                ${isUnlocked ? '<span class="text-xs font-semibold mt-2">Unlocked!</span>' : ''}
            `;
            achievementsList.appendChild(card);
        });
    }


    /**
     * Renders content for the Focus Tools view.
     */
    function renderFocusTools() {
        const soundscapesContainer = document.getElementById('soundscapes');
        soundscapesContainer.innerHTML = '';
        mockData.soundscapes.forEach(sound => {
            const button = document.createElement('button');
            button.className = 'soundscape-btn flex items-center gap-2 p-4 rounded-lg border list-item-themed hover:list-item-themed text-primary';
            button.innerHTML = `<span class="text-2xl">${sound.icon}</span><span class="font-semibold">${sound.name}</span>`;
            button.dataset.file = sound.file;
            soundscapesContainer.appendChild(button);
        });
        updatePomodoroDisplay();
    }

    /**
     * Renders content for the Learning Hub view.
     */
    function renderLearningHub() {
        const learningHubContent = document.getElementById('learning-hub-content');
        learningHubContent.innerHTML = '';
        const currentCategory = mockData.learningHubContent[appState.learningHubCategory];

        currentCategory.forEach(item => {
            const card = document.createElement('div');
            card.className = 'bg-secondary p-5 rounded-xl shadow-sm border border-border-color cursor-pointer hover:shadow-md transition-shadow';
            card.innerHTML = `<h4 class="font-bold text-primary mb-2">${item.title}</h4><p class="text-secondary text-sm">${item.summary}</p>`;
            card.addEventListener('click', () => showDetailModal(item));
            learningHubContent.appendChild(card);
        });

        // Update active tab styling
        document.querySelectorAll('.tab-button').forEach(btn => {
            if (btn.dataset.category === appState.learningHubCategory) {
                btn.classList.add('bg-accent-blue', 'text-white');
                btn.classList.remove('hover:bg-border-color', 'text-primary');
            } else {
                btn.classList.remove('bg-accent-blue', 'text-white');
                btn.classList.add('hover:bg-border-color', 'text-primary');
            }
        });
    }

    /**
     * Renders content for the Settings view.
     */
    function renderSettings() {
        usernameInput.value = mockData.user.name;
        // Load current SRS intervals into input fields
        intervalPerfectInput.value = mockData.user.srsIntervals.perfect;
        intervalGoodInput.value = mockData.user.srsIntervals.good;
        intervalStruggledInput.value = mockData.user.srsIntervals.struggled;
        intervalForgotInput.value = mockData.user.srsIntervals.forgot;

        // Render theme buttons
        const themeButtonContainer = document.querySelector('#view-settings .flex.gap-4'); // Target the theme buttons container
        if (themeButtonContainer) {
            themeButtonContainer.innerHTML = ''; // Clear existing buttons
            mockData.themes.forEach(theme => {
                const button = document.createElement('button');
                button.dataset.theme = theme.id;
                button.className = `theme-btn border-2 p-3 rounded-lg text-primary font-semibold hover:opacity-80 transition-opacity`;
                button.textContent = theme.name;
                button.addEventListener('click', (e) => applyTheme(e.target.dataset.theme));

                if (theme.id === appState.currentTheme) {
                    button.classList.add('border-accent-blue');
                    button.classList.remove('border-border-color');
                } else {
                    button.classList.remove('border-accent-blue');
                    button.classList.add('border-border-color');
                }
                themeButtonContainer.appendChild(button);
            });
        }
    }

    /**
     * Renders content for the Tutorial view.
     */
    function renderTutorial() {
        // No specific dynamic content render needed beyond the static HTML for this view.
        // Modals will handle the tour steps and detailed guides.
    }

    /**
     * Updates the active navigation item styling.
     */
    function updateActiveNav() {
        navLinks.forEach(link => {
            if (link.dataset.view === appState.currentView) {
                link.classList.add('nav-item-active');
            } else {
                link.classList.remove('nav-item-active');
            }
        });
    }

    /**
     * Navigates to a different view in the application.
     * @param {string} view - The ID of the view to navigate to.
     */
    function navigate(view) {
        appState.currentView = view;
        render();
    }

    // Event listeners for navigation items
    document.querySelectorAll('nav').forEach(nav => {
        nav.addEventListener('click', (e) => {
            const navItem = e.target.closest('.nav-item');
            if (navItem) {
                e.preventDefault();
                const view = navItem.dataset.view;
                navigate(view);
                // Close mobile sidebar if open
                if (!mobileSidebarContainer.classList.contains('hidden')) {
                    toggleMobileMenu();
                }
            }
        });
    });

    /**
     * Toggles the visibility of the mobile sidebar.
     */
    function toggleMobileMenu() {
        const isHidden = mobileSidebarContainer.classList.contains('hidden');
        if (isHidden) {
            mobileSidebarContainer.classList.remove('hidden');
            setTimeout(() => { mobileSidebar.classList.remove('-translate-x-full'); }, 10);
        } else {
            mobileSidebar.classList.add('-translate-x-full');
            setTimeout(() => { mobileSidebarContainer.classList.add('hidden'); }, 300);
        }
    }

    // Mobile menu button event listeners
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
    closeMenuButton.addEventListener('click', toggleMobileMenu);
    mobileSidebarContainer.addEventListener('click', (e) => {
        if (e.target === mobileSidebarContainer) {
            toggleMobileMenu();
        }
    });

    // --- Study Session (Flashcards) Logic ---
    /**
     * Starts a new study session.
     * @param {string} queueType - 'daily' for daily queue, 'weak' for weak flashcards.
     */
    function startStudySession(queueType = 'daily') {
        appState.studySession.isActive = true;
        appState.studySession.queue = queueType === 'weak' ? getWeakFlashcards() : getDailyQueue();
        appState.studySession.currentIndex = 0;
        appState.studySession.flashcardsReviewedInSession = 0;

        if (appState.studySession.queue.length === 0) {
            showNotification(`Your ${queueType} review queue is empty! Import some content or review more to create weak flashcards.`, true);
            navigate('library');
            return;
        }
        navigate('study');
        renderCurrentCard();
    }

    /**
     * Renders the current flashcard in the study session.
     */
    function renderCurrentCard() {
        if (appState.studySession.currentIndex >= appState.studySession.queue.length) {
            endStudySession();
            return;
        }
        flashcardContainer.classList.remove('flipped');

        const currentFlashcard = appState.studySession.queue[appState.studySession.currentIndex];
        const subject = mockData.subjects.find(s => s.id === currentFlashcard.subjectId) || defaultSubjects.find(s => s.id === currentFlashcard.subjectId);

        document.getElementById('card-subject-front').textContent = subject ? subject.name : 'Unknown';
        document.getElementById('card-subject-back').textContent = subject ? subject.name : 'Unknown';
        document.getElementById('card-question').textContent = currentFlashcard.question;
        document.getElementById('card-answer').textContent = currentFlashcard.answer;

        const totalItems = appState.studySession.queue.length;
        const progress = ((appState.studySession.currentIndex + 1) / totalItems) * 100;
        document.getElementById('study-progress-bar').style.width = `${progress}%`;
        document.getElementById('study-progress-text').textContent = `Flashcard ${appState.studySession.currentIndex + 1} of ${totalItems}`;
    }

    /**
     * Ends the current study session.
     */
    function endStudySession() {
        appState.studySession.isActive = false;
        showReflectionModal();

        const today = new Date().toISOString().split('T')[0];
        const yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0];

        // Update streak logic
        if (mockData.user.lastChallengeDate === today) {
            // Already updated streak today, no change
        } else if (mockData.user.lastChallengeDate === yesterday) {
            mockData.user.streak = (mockData.user.streak || 0) + 1;
        } else {
            mockData.user.streak = 1; // Start new streak if not consecutive
        }

        mockData.user.lastChallengeDate = today;
        mockData.user.dailyChallengeProgress += appState.studySession.flashcardsReviewedInSession;

        // Log daily study time (placeholder, actual tracking would be more robust)
        const minutesStudiedThisSession = appState.studySession.flashcardsReviewedInSession * 2; // Rough estimate: 2 mins per flashcard
        if (!mockData.user.dailyStudyLogs) {
            mockData.user.dailyStudyLogs = [];
        }
        const existingLog = mockData.user.dailyStudyLogs.find(log => log.date === today);
        if (existingLog) {
            existingLog.minutes += minutesStudiedThisSession;
        } else {
            mockData.user.dailyStudyLogs.push({ date: today, minutes: minutesStudiedThisSession });
        }

        // Check for achievements
        checkAchievements();
        saveUserData();
    }

    // Study session button event listeners
    startReviewBtn.addEventListener('click', () => startStudySession('daily'));
    studyWeakFlashcardsBtn.addEventListener('click', () => startStudySession('weak'));
    showAnswerBtn.addEventListener('click', () => { flashcardContainer.classList.add('flipped'); });

    recallButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const quality = parseInt(e.currentTarget.dataset.rating);
            const currentFlashcard = appState.studySession.queue[appState.studySession.currentIndex];

            const wasMasteredBefore = currentFlashcard.repetitions >= 3 && currentFlashcard.easeFactor >= 2.0;

            // Update SM-2 properties for the current flashcard
            const { nextReview, newInterval, newEaseFactor, newRepetitions } = calculateNextReviewDateSM2(
                currentFlashcard.lastReviewed, quality, currentFlashcard.easeFactor, currentFlashcard.interval, currentFlashcard.repetitions
            );

            currentFlashcard.lastReviewed = new Date();
            currentFlashcard.nextReview = nextReview;
            currentFlashcard.interval = newInterval;
            currentFlashcard.easeFactor = newEaseFactor;
            currentFlashcard.repetitions = newRepetitions;

            const isNowMastered = newRepetitions >= 3 && newEaseFactor >= 2.0;
            if (!wasMasteredBefore && isNowMastered) {
                // Flashcard just became mastered
                // This achievement check is typically handled by checkAchievements
            }

            saveUserData();
            console.log(`Rated card ${currentFlashcard.id} with rating: ${quality}. Next review: ${currentFlashcard.nextReview.toLocaleDateString()}`);

            flashcardContainer.classList.remove('flipped');
            appState.studySession.currentIndex++;
            appState.studySession.flashcardsReviewedInSession++;
            setTimeout(renderCurrentCard, 300);
        });
    });

    // Daily Challenge Claim Button
    claimChallengeBtn.addEventListener('click', () => {
        const today = new Date().toISOString().split('T')[0];
        if (mockData.user.dailyChallengeProgress >= 5 && mockData.user.lastChallengeDate === today) {
            showNotification('Congratulations! You claimed your daily challenge reward!');
            mockData.user.dailyChallengeProgress = 0; // Reset for next day
            // Only increment daily challenge count for achievement if it's the first claim today
            if (mockData.user.lastChallengeClaimDate !== today) {
                mockData.user.dailyChallengeCount = (mockData.user.dailyChallengeCount || 0) + 1;
                mockData.user.lastChallengeClaimDate = today;
            }
            mockData.user.lastChallengeDate = null; // Forces new streak check or challenge reset tomorrow
            checkAchievements(); // Check again after challenge completion
            saveUserData();
            renderDashboard();
        } else {
            showNotification('You have not completed the daily challenge yet!', true);
        }
    });


    // --- Pomodoro Timer Logic ---
    const pomodoroTimerEl = document.getElementById('pomodoro-timer');
    const pomodoroStatusEl = document.getElementById('pomodoro-status');
    const pomodoroStartBtn = document.getElementById('pomodoro-start');
    const pomodoroPauseBtn = document.getElementById('pomodoro-pause');
    const pomodoroResetBtn = document.getElementById('pomodoro-reset');

    function updatePomodoroDisplay() {
        const minutes = Math.floor(appState.pomodoro.timeLeft / 60).toString().padStart(2, '0');
        const seconds = (appState.pomodoro.timeLeft % 60).toString().padStart(2, '0');
        pomodoroTimerEl.textContent = `${minutes}:${seconds}`;
    }

    function tick() {
        if (appState.pomodoro.timeLeft > 0) {
            appState.pomodoro.timeLeft--;
            updatePomodoroDisplay();
        } else {
            clearInterval(appState.pomodoro.timerId);
            appState.pomodoro.isRunning = false;
            // Record study minutes for analytics
            const today = new Date().toISOString().split('T')[0];
            const minutesStudied = appState.pomodoro.mode === 'work' ? 25 : 5; // 25 work, 5 break
            if (!mockData.user.dailyStudyLogs) {
                mockData.user.dailyStudyLogs = [];
            }
            const existingLog = mockData.user.dailyStudyLogs.find(log => log.date === today);
            if (existingLog) {
                existingLog.minutes += minutesStudied;
            } else {
                mockData.user.dailyStudyLogs.push({ date: today, minutes: minutesStudied });
            }
            saveUserData(); // Save updated study log

            if (appState.pomodoro.mode === 'work') {
                appState.pomodoro.mode = 'break';
                appState.pomodoro.timeLeft = 5 * 60; // 5-minute break
                pomodoroStatusEl.textContent = "Time for a short break!";
                showNotification("Time for a short break!");
            } else {
                appState.pomodoro.mode = 'work';
                appState.pomodoro.timeLeft = 25 * 60; // 25-minute work
                pomodoroStatusEl.textContent = "Time to focus!";
                showNotification("Break time is over! Time to focus!");
            }
            updatePomodoroDisplay();
            // Check for achievements
            checkAchievements();
        }
    }

    // Pomodoro controls event listeners
    pomodoroStartBtn.addEventListener('click', () => {
        if (!appState.pomodoro.isRunning) {
            appState.pomodoro.isRunning = true;
            appState.pomodoro.timerId = setInterval(tick, 1000);
        }
    });
    pomodoroPauseBtn.addEventListener('click', () => {
        clearInterval(appState.pomodoro.timerId);
        appState.pomodoro.isRunning = false;
    });
    pomodoroResetBtn.addEventListener('click', () => {
        clearInterval(appState.pomodoro.timerId);
        appState.pomodoro.isRunning = false;
        appState.pomodoro.mode = 'work';
        appState.pomodoro.timeLeft = 25 * 60;
        pomodoroStatusEl.textContent = "Time to focus!";
        updatePomodoroDisplay();
    });

    // Ambient soundscapes logic
    document.getElementById('soundscapes').addEventListener('click', (e) => {
        const soundscapeButton = e.target.closest('.soundscape-btn');
        if (soundscapeButton) {
            const soundFile = soundscapeButton.dataset.file;

            if (appState.activeSoundscapeAudio) {
                appState.activeSoundscapeAudio.pause();
                appState.activeSoundscapeAudio.currentTime = 0;
                appState.activeSoundscapeAudio = null;
                showNotification(`Stopped soundscape.`);
            }

            // Simple placeholder for playing sound. In a real app, you'd use actual audio files.
            // For GitHub Pages, you'd need to host these audio files.
            // For now, this just simulates playback.
            if (soundFile) {
                // IMPORTANT: For actual sound playback in Canvas, ensure audio files are either
                // small base64 embedded (for very tiny sounds) or hosted externally with CORS.
                // Using Tone.js would be ideal for generated sounds without external files.
                // For this example, we'll assume a dummy audio file for demonstration.
                const audio = new Audio(`https://file-examples.com/storage/fe33ae969b6574f07e5b536/2017/11/file_example_MP3_700KB.mp3`); // Placeholder dummy audio
                audio.loop = true;
                audio.volume = 0.5; // Default volume
                audio.play().then(() => {
                    appState.activeSoundscapeAudio = audio;
                    showNotification(`Playing ${soundFile.replace('.mp3', '')} soundscape.`);
                }).catch(error => {
                    console.error("Error playing audio:", error);
                    showNotification(`Failed to play ${soundFile.replace('.mp3', '')} soundscape. (Audio file not found or browser blocked autoplay)`, true);
                });
            }
        }
    });


    // --- Onboarding Logic ---
    let currentOnboardingStep = 1;

    function showOnboarding() {
        toggleModal(onboardingModal, true);
        currentOnboardingStep = 1;
        updateOnboardingStep();
    }

    function updateOnboardingStep() {
        // Hide all steps
        Object.values(onboardingSteps).forEach(step => step.classList.add('hidden'));

        // Show current step
        const currentStepElement = onboardingSteps[`step-${currentOnboardingStep}`];
        if (currentStepElement) {
            currentStepElement.classList.remove('hidden');
        }

        // Update text and button label
        if (currentOnboardingStep === 1) {
            onboardingText.textContent = "Let's set up your personalized learning journey. Tell us about your primary learning goals.";
            onboardingNextBtn.textContent = "Next";
        } else if (currentOnboardingStep === 2) {
            onboardingText.textContent = "How much time can you realistically dedicate to learning each week?";
            onboardingNextBtn.textContent = "Next";
        } else if (currentOnboardingStep === 3) {
            onboardingText.textContent = "What subjects or areas are you currently focusing on?";
            onboardingNextBtn.textContent = "Finish Setup";
        } else {
            completeOnboarding();
        }
    }

    function completeOnboarding() {
        const goal = document.getElementById('goal-input').value;
        const time = document.getElementById('time-input').value;
        const subjects = document.getElementById('subjects-input').value;

        mockData.user.learningGoals = goal ? [{ id: 'initial-goal', name: goal, targetType: 'general', targetValue: 0, currentProgress: 0, endDate: new Date().toISOString() }] : [];
        mockData.user.weeklyStudyTime = parseInt(time) || 0;
        mockData.user.focusedSubjects = subjects.split(',').map(s => s.trim()).filter(s => s);
        // Initialize these if they are null/undefined from localStorage
        mockData.user.dailyStudyLogs = mockData.user.dailyStudyLogs || [];
        mockData.user.monthlyMasteryLogs = mockData.user.monthlyMasteryLogs || [];
        mockData.user.lastChallengeClaimDate = mockData.user.lastChallengeClaimDate || null;
        mockData.user.dailyChallengeCount = mockData.user.dailyChallengeCount || 0;

        appState.onboardingCompleted = true; // Set appState directly
        localStorage.setItem('auralearn_onboardingCompleted', 'true'); // Persist to localStorage
        toggleModal(onboardingModal, false);
        saveUserData(); // Save mockData.user which now contains new initial values
        showNotification('Onboarding complete! Your personalized journey begins now.');
        navigate('dashboard');
    }

    onboardingNextBtn.addEventListener('click', () => {
        currentOnboardingStep++;
        updateOnboardingStep();
    });
    onboardingSkipBtn.addEventListener('click', () => {
        appState.onboardingCompleted = true; // Set appState directly
        localStorage.setItem('auralearn_onboardingCompleted', 'true'); // Persist to localStorage
        toggleModal(onboardingModal, false);
        // Ensure initial user data is saved even on skip, without resetting what was already loaded
        mockData.user.dailyStudyLogs = mockData.user.dailyStudyLogs || [];
        mockData.user.monthlyMasteryLogs = mockData.user.monthlyMasteryLogs || [];
        mockData.user.lastChallengeClaimDate = mockData.user.lastChallengeClaimDate || null;
        mockData.user.dailyChallengeCount = mockData.user.dailyChallengeCount || 0;
        saveUserData();
        navigate('dashboard');
    });

    // Toggle new subject input for AI Learning section
    toggleAIContentNewSubjectInput.addEventListener('click', () => {
        if (aiContentNewSubjectInput.classList.contains('hidden')) {
            aiContentNewSubjectInput.classList.remove('hidden');
            aiContentSubjectSelect.classList.add('hidden');
            toggleAIContentNewSubjectInput.textContent = 'Select Existing Subject';
        } else {
            aiContentNewSubjectInput.classList.add('hidden');
            aiContentSubjectSelect.classList.remove('hidden');
            toggleAIContentNewSubjectInput.textContent = 'Add New Subject';
        }
        // Re-populate subjects to ensure new custom subjects appear after toggling
        populateAILearningSubjectSelect();
    });

    // Listen for changes on aiContentSubjectSelect to ensure new subject input is correctly hidden/shown
    aiContentSubjectSelect.addEventListener('change', () => {
        if (aiContentSubjectSelect.value !== '') {
            aiContentNewSubjectInput.classList.add('hidden');
            aiContentNewSubjectInput.value = '';
            toggleAIContentNewSubjectInput.textContent = 'Add New Subject';
        }
    });

    // Event listener for the AI input mode toggle
    aiInputModeToggle.addEventListener('change', () => {
        appState.aiInputMode = aiInputModeToggle.checked ? 'topic' : 'text';
        updateAiInputUI();
    });

    // AI Learning buttons event listeners
    generateAiNotesBtn.addEventListener('click', () => {
        toggleQuizSettingsVisibility(false); // Hide quiz settings
        generateAIContent('note');
    });
    generateNotesFlashcardsBtn.addEventListener('click', () => {
        toggleQuizSettingsVisibility(false); // Hide quiz settings
        generateAIContent('notes-flashcards');
    });
    generateQuizBtn.addEventListener('click', () => {
        toggleQuizSettingsVisibility(true); // Show quiz settings
        generateAIContent('quiz');
    });
    extractKeywordsBtn.addEventListener('click', () => {
        toggleQuizSettingsVisibility(false); // Hide quiz settings
        generateAIContent('keywords');
    });
    predictExamQuestionsBtn.addEventListener('click', () => {
        toggleQuizSettingsVisibility(false); // Hide quiz settings
        generateAIContent('exam-questions');
    });
    summarizeContentBtn.addEventListener('click', () => {
        toggleQuizSettingsVisibility(false); // Hide quiz settings
        generateAIContent('summary');
    });


    // --- Quick Add Flashcard Modal Handlers ---
    quickAddFlashcardBtnDashboard.addEventListener('click', showQuickAddFlashcardModal);
    quickAddFlashcardBtnLibrary.addEventListener('click', showQuickAddFlashcardModal);

    function showQuickAddFlashcardModal() {
        toggleModal(quickAddFlashcardModal, true);
        quickAddQuestionInput.value = '';
        quickAddAnswerInput.value = '';
        newSubjectInput.value = '';
        newSubjectInput.classList.add('hidden');
        quickAddSubjectSelect.classList.remove('hidden');
        toggleNewSubjectInputBtn.textContent = 'Add New Subject';
        populateQuickAddSubjectSelect();
    }

    closeQuickAddModalBtn.addEventListener('click', () => {
        toggleModal(quickAddFlashcardModal, false);
    });

    toggleNewSubjectInputBtn.addEventListener('click', () => {
        if (newSubjectInput.classList.contains('hidden')) {
            newSubjectInput.classList.remove('hidden');
            quickAddSubjectSelect.classList.add('hidden');
            quickAddSubjectSelect.value = '';
            toggleNewSubjectInputBtn.textContent = 'Select Existing Subject';
        } else {
            newSubjectInput.classList.add('hidden');
            newSubjectInput.value = '';
            quickAddSubjectSelect.classList.remove('hidden');
            toggleNewSubjectInputBtn.textContent = 'Add New Subject';
        }
        populateQuickAddSubjectSelect(); // Re-populate subjects to ensure new custom subjects appear after toggling
    });

    quickAddSubjectSelect.addEventListener('change', () => {
        if (quickAddSubjectSelect.value !== '') {
            newSubjectInput.classList.add('hidden');
            newSubjectInput.value = '';
            toggleNewSubjectInputBtn.textContent = 'Add New Subject';
        }
    });

    addFlashcardBtn.addEventListener('click', () => {
        let subjectId;
        let subjectName;
        // Check if a new subject is being added via the input field
        if (!newSubjectInput.classList.contains('hidden') && newSubjectInput.value.trim()) {
            subjectName = newSubjectInput.value.trim();
            subjectId = subjectName.toLowerCase().replace(/\s/g, '-').replace(/[^a-z0-9-]/g, '');
            // Check if this new subject already exists (either default or user-added)
            if (!mockData.subjects.find(s => s.id === subjectId) && !defaultSubjects.find(ds => ds.id === subjectId)) {
                // Add to user-specific subjects if it's genuinely new
                mockData.subjects.push({ id: subjectId, name: subjectName, color: "bg-blue-100", textColor: "text-blue-800", flashcards: 0, lastReviewed: null });
            }
        } else {
            // If not adding a new subject, use the selected subject
            subjectId = quickAddSubjectSelect.value;
            if (!subjectId) {
                showNotification('Please select an existing subject or add a new one.', true);
                return;
            }
            subjectName = (mockData.subjects.find(s => s.id === subjectId) || defaultSubjects.find(s => s.id === subjectId))?.name;
        }

        const question = quickAddQuestionInput.value.trim();
        const answer = quickAddAnswerInput.value.trim();

        if (!question || !answer) {
            showNotification('Please enter both a question/concept and an answer/explanation.', true);
            return;
        }

        const newFlashcard = {
            id: mockData.flashcards.length > 0 ? Math.max(...mockData.flashcards.map(f => f.id)) + 1 : 1,
            subjectId: subjectId,
            question: question,
            answer: answer,
            lastReviewed: new Date(),
            easeFactor: 2.5,
            interval: 0,
            repetitions: 0,
            nextReview: new Date()
        };
        mockData.flashcards.push(newFlashcard);

        saveUserData();
        showNotification('Flashcard added successfully!');
        toggleModal(quickAddFlashcardModal, false);
        unlockAchievement('first-flashcard'); // Check if first flashcard added unlocks achievement
        checkAchievements(); // Recalculate other achievements potentially
        render();
    });

    // --- Add Goal Modal Handlers ---
    addGoalBtn.addEventListener('click', () => {
        toggleModal(addGoalModal, true);
        goalNameInput.value = '';
        goalTargetValueInput.value = '';
        goalEndDateInput.value = '';
    });

    closeAddGoalModalBtn.addEventListener('click', () => {
        toggleModal(addGoalModal, false);
    });

    createGoalBtn.addEventListener('click', () => {
        const name = goalNameInput.value.trim();
        const targetType = goalTargetTypeSelect.value;
        const targetValue = parseInt(goalTargetValueInput.value);
        const endDate = goalEndDateInput.value;

        if (!name || !targetValue || !endDate) {
            showNotification('Please fill in all goal fields.', true);
            return;
        }
        if (isNaN(targetValue) || targetValue <= 0) {
            showNotification('Target value must be a positive number.', true);
            return;
        }

        const newGoal = {
            id: `goal-${mockData.user.learningGoals.length > 0 ? Math.max(...mockData.user.learningGoals.map(g => parseInt(g.id.split('-')[1]))) + 1 : 1}`,
            name: name,
            targetType: targetType,
            targetValue: targetValue,
            currentProgress: 0,
            endDate: endDate
        };
        mockData.user.learningGoals.push(newGoal);
        saveUserData();
        showNotification('Goal created successfully!');
        toggleModal(addGoalModal, false);
        render();
    });

    // --- Reflection Modal Handlers ---
    function showReflectionModal() {
        toggleModal(reflectionModal, true);
        reflectionTextarea.value = '';
    }

    closeReflectionModalBtn.addEventListener('click', () => {
        toggleModal(reflectionModal, false);
        navigate('dashboard');
    });

    saveReflectionBtn.addEventListener('click', () => {
        const reflectionText = reflectionTextarea.value.trim();
        if (reflectionText) {
            console.log("User Reflection:", reflectionText);
            // In a more complex app, you might save this reflection with a timestamp
            showNotification('Reflection saved! Thank you for your insights.');
        } else {
            showNotification('No reflection entered.');
        }
        toggleModal(reflectionModal, false);
        navigate('dashboard');
    });

    // --- Global Search Functionality ---
    globalSearchInput.addEventListener('input', () => {
        const query = globalSearchInput.value.toLowerCase().trim();
        if (query.length > 2 || query.length === 0) {
            filterAndDisplaySearchResults(query);
        } else if (query.length <= 2 && !searchResultsModal.classList.contains('hidden')) {
            toggleModal(searchResultsModal, false); // Hide modal if query is too short
        }
    });

    closeSearchResultsModalBtn.addEventListener('click', () => {
        toggleModal(searchResultsModal, false);
    });

    function filterAndDisplaySearchResults(query) {
        searchResultsContent.innerHTML = ''; // Clear previous results

        if (query.length === 0) {
            toggleModal(searchResultsModal, false);
            return;
        }

        let foundResults = [];

        // Search in Flashcards
        const filteredFlashcards = mockData.flashcards.filter(f =>
            f.question.toLowerCase().includes(query) ||
            f.answer.toLowerCase().includes(query) ||
            mockData.subjects.find(s => s.id === f.subjectId)?.name.toLowerCase().includes(query) ||
            defaultSubjects.find(s => s.id === f.subjectId)?.name.toLowerCase().includes(query)
        );
        if (filteredFlashcards.length > 0) {
            foundResults.push({ type: "heading", content: "Flashcards" });
            filteredFlashcards.forEach(flashcard => {
                const subjectName = (mockData.subjects.find(s => s.id === flashcard.subjectId) || defaultSubjects.find(s => s.id === flashcard.subjectId))?.name || 'Unknown';
                foundResults.push({ type: "flashcard", title: flashcard.question, subtitle: `Subject: ${subjectName}`, details: flashcard.answer });
            });
        }

        // Search in AI Materials
        const filteredAiMaterials = mockData.aiMaterials.filter(m =>
            m.title.toLowerCase().includes(query) ||
            (typeof m.content === 'string' && m.content.toLowerCase().includes(query)) ||
            (Array.isArray(m.content) && m.content.some(item =>
                (item.question && item.question.toLowerCase().includes(query)) ||
                (item.keyword && item.keyword.toLowerCase().includes(query)) ||
                (item.definition && item.definition.toLowerCase().includes(query)) ||
                (typeof item === 'string' && item.toLowerCase().includes(query))
            ))
        );
        if (filteredAiMaterials.length > 0) {
            foundResults.push({ type: "heading", content: "AI-Generated Materials" });
            filteredAiMaterials.forEach(material => {
                foundResults.push({ type: "ai-material", title: material.title, subtitle: `Type: ${material.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}` , materialData: material });
            });
        }

        // Search in Learning Hub Content
        let learningHubMatches = [];
        for (const category in mockData.learningHubContent) {
            mockData.learningHubContent[category].forEach(item => {
                if (item.title.toLowerCase().includes(query) || item.summary.toLowerCase().includes(query) || (item.details && item.details.toLowerCase().includes(query))) {
                    learningHubMatches.push({ type: "learning-hub", title: item.title, subtitle: `Category: ${category.replace(/\b\w/g, l => l.toUpperCase())}`, itemData: item });
                }
            });
        }
        if (learningHubMatches.length > 0) {
            foundResults.push({ type: "heading", content: "Learning Hub Articles" });
            foundResults = foundResults.concat(learningHubMatches);
        }

        // Search in Glossary
        const filteredGlossary = mockData.glossary.filter(g =>
            g.keyword.toLowerCase().includes(query) ||
            g.definition.toLowerCase().includes(query)
        );
        if (filteredGlossary.length > 0) {
            foundResults.push({ type: "heading", content: "Glossary Terms" });
            filteredGlossary.forEach(term => {
                foundResults.push({ type: "glossary-item", title: term.keyword, subtitle: term.definition });
            });
        }

        // Search in Mind Maps
        const filteredMindMaps = mockData.mindMaps.filter(m =>
            m.name.toLowerCase().includes(query) ||
            m.nodes.some(node => node.text.toLowerCase().includes(query))
        );
        if (filteredMindMaps.length > 0) {
            foundResults.push({ type: "heading", content: "Mind Maps" });
            filteredMindMaps.forEach(map => {
                foundResults.push({ type: "mind-map-item", title: map.name, subtitle: `Nodes: ${map.nodes.length}`, mapData: map });
            });
        }

        // Search in Calendar Events
        const filteredCalendarEvents = mockData.calendarEvents.filter(e =>
            e.title.toLowerCase().includes(query) ||
            (e.notes && e.notes.toLowerCase().includes(query)) ||
            e.type.toLowerCase().includes(query)
        );
        if (filteredCalendarEvents.length > 0) {
            foundResults.push({ type: "heading", content: "Calendar Events" });
            filteredCalendarEvents.forEach(event => {
                foundResults.push({ type: "calendar-event", title: event.title, subtitle: `Date: ${event.date.toLocaleDateString()} (${event.type})`, eventData: event });
            });
        }


        if (foundResults.length === 0) {
            searchResultsContent.innerHTML = `<p class="text-secondary text-center">No matching results found for "${query}".</p>`;
        } else {
            foundResults.forEach(result => {
                const resultDiv = document.createElement('div');
                resultDiv.className = 'p-3 rounded-lg border list-item-themed hover:list-item-hover-bg cursor-pointer';

                if (result.type === "heading") {
                    resultDiv.className = 'col-span-full font-bold text-primary mt-4 mb-2 border-b border-border-color pb-2';
                    resultDiv.textContent = result.content;
                    resultDiv.style.cursor = 'default';
                } else {
                    resultDiv.innerHTML = `
                        <p class="font-semibold text-primary">${result.title}</p>
                        <p class="text-xs text-secondary">${result.subtitle}</p>
                    `;
                    resultDiv.addEventListener('click', () => {
                        toggleModal(searchResultsModal, false); // Close search modal
                        if (result.type === "flashcard") {
                            showDetailModal({ title: result.title, details: result.details });
                        } else if (result.type === "ai-material") {
                            showAIGeneratedMaterial(result.materialData);
                        } else if (result.type === "learning-hub") {
                            showDetailModal(result.itemData);
                        } else if (result.type === "glossary-item") {
                            navigate('glossary');
                            setTimeout(() => {
                                glossarySearchInput.value = result.title;
                                renderGlossary();
                            }, 100);
                        } else if (result.type === "mind-map-item") {
                            navigate('mind-map');
                            setTimeout(() => loadMindMap(result.mapData.id), 100);
                            unlockAchievement('first-mind-map');
                        } else if (result.type === "calendar-event") {
                            navigate('calendar');
                            setTimeout(() => {
                                appState.calendar.currentDate = new Date(result.eventData.date);
                                appState.calendar.selectedDay = new Date(result.eventData.date);
                                renderCalendar();
                                showAddEditEventModal(result.eventData);
                            }, 100);
                        }
                    });
                }
                searchResultsContent.appendChild(resultDiv);
            });
        }
        toggleModal(searchResultsModal, true);
    }

    // Learning Hub Tab switching
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', (e) => {
            appState.learningHubCategory = e.target.dataset.category;
            renderLearningHub();
        });
    });

    // --- Detail Modal Handlers ---
    async function showDetailModal(item) {
        detailTitle.textContent = item.title;
        toggleModal(detailModal, true);
        detailContentText.classList.add('hidden');
        detailLoading.classList.remove('hidden');

        let contentToDisplay = item.details;

        // If the item details are short or not yet expanded by LLM, call LLM
        // Added formatting instructions to the prompt
        if (item.details.length < 200 || !item.llm_expanded) {
            try {
                const prompt = `Provide a detailed, comprehensive, and practical explanation of the concept or technique "${item.title}".
                Format the content into clear sections:
                <h3>Main Info</h3>
                <ul>
                    <li>[Concise bullet point]</li>
                    <li>[Concise bullet point]</li>
                </ul>
                <h3>Key Terms/Keywords:</h3>
                <ul>
                    <li>[Keyword]: [Brief definition]</li>
                    <li>[Keyword]: [Brief definition]</li>
                </ul>
                <h3>Extra Info:</h3>
                <ul>
                    <li>[Additional relevant detail]</li>
                    <li>[Another additional relevant detail]</li>
                </ul>
                <h3>Conclusion</h3>
                <ul>
                    <li>[Brief summary or key takeaway]</li>
                </ul>
                Ensure the entire response is valid HTML, strictly using h3 for section headers, and ul/li for all bullet points. Do not include any conversational filler, disclaimers, or extra text outside this structure.`;

                let chatHistory = [];
                chatHistory.push({ role: "user", parts: [{ text: prompt }] });
                const payload = { contents: chatHistory };
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                const result = await response.json();

                if (result.candidates && result.candidates.length > 0 &&
                    result.candidates[0].content && result.candidates[0].content.parts &&
                    result.candidates[0].content.parts.length > 0) {
                    contentToDisplay = result.candidates[0].content.parts[0].text;
                    item.details = contentToDisplay; // Update item in mockData for subsequent views
                    item.llm_expanded = true; // Mark as expanded by LLM
                } else {
                    console.error("LLM did not return valid content for Learning Hub explanation.");
                    showNotification('Failed to generate detailed explanation. Showing original content.', true);
                }
            } catch (error) {
                console.error("Error fetching detailed explanation from LLM:", error);
                showNotification('Error fetching detailed explanation. Showing original content.', true);
            }
        }

        detailLoading.classList.add('hidden');
        detailContentText.classList.remove('hidden');
        detailContentText.innerHTML = contentToDisplay;
    }

    closeDetailModalBtn.addEventListener('click', () => {
        toggleModal(detailModal, false);
    });

    closeSubjectDetailModalBtn.addEventListener('click', () => {
        toggleModal(subjectDetailModal, false);
    });

    // --- User Profile & Settings ---
    saveUsernameBtn.addEventListener('click', () => {
        const newUsername = usernameInput.value.trim();
        if (newUsername) {
            mockData.user.name = newUsername;
            saveUserData();
            showNotification('Username updated successfully!');
            render();
        } else {
            showNotification('Username cannot be empty.', true);
        }
    });

    saveIntervalsBtn.addEventListener('click', () => {
        const perfect = parseFloat(intervalPerfectInput.value);
        const good = parseFloat(intervalGoodInput.value);
        const struggled = parseFloat(intervalStruggledInput.value);
        const forgot = parseFloat(intervalForgotInput.value);

        if (isNaN(perfect) || isNaN(good) || isNaN(struggled) || isNaN(forgot) ||
            perfect < 0 || good < 0 || struggled < 0 || forgot < 0) {
            showNotification('Please enter valid non-negative numbers for all intervals.', true);
            return;
        }

        mockData.user.srsIntervals = { perfect, good, struggled, forgot };
        showNotification('Spaced Repetition intervals saved!');
        saveUserData();
    });

    // --- Theme Switching ---
    // Event listeners are dynamically attached in renderSettings() now
    // themeButtons.forEach(button => {
    //     button.addEventListener('click', (e) => {
    //         applyTheme(e.target.dataset.theme);
    //     });
    // });

    /**
     * Applies the selected theme to the application.
     * @param {string} theme - The name of the theme ('light', 'dark', 'vibrant', 'forest-green', 'ocean-blue').
     */
    function applyTheme(theme) {
        if (document.documentElement) { // Target the root element for themes
            // Remove all existing theme classes and add the new one
            document.documentElement.classList.forEach(cls => {
                if (cls.startsWith('theme-')) {
                    document.documentElement.classList.remove(cls);
                }
            });
            document.documentElement.classList.add(`theme-${theme}`);
        }
        // Update button states in settings view
        const themeBtnsInSettings = document.querySelectorAll('#view-settings .theme-btn');
        themeBtnsInSettings.forEach(btn => {
            if (btn.dataset.theme === theme) {
                btn.classList.add('border-accent-blue');
                btn.classList.remove('border-border-color');
            } else {
                btn.classList.remove('border-accent-blue');
                btn.classList.add('border-border-color');
            }
        });

        localStorage.setItem('auralearn_theme', theme);
        appState.currentTheme = theme; // Update appState theme
        // Re-render charts on theme change to update colors
        if (appState.currentView === 'analytics') {
            renderAnalytics();
        }
        // Re-render mind map on theme change to update colors
        if (appState.currentView === 'mind-map') {
            drawMindMap();
        }
        // Re-render calendar on theme change to update colors
        if (appState.currentView === 'calendar') {
            renderCalendar();
        }
    }

    // --- Data Export/Import ---
    exportDataBtn.addEventListener('click', exportData);
    importDataBtn.addEventListener('click', () => importDataInput.click()); // Trigger file input click
    importDataInput.addEventListener('change', importData);

    function exportData() {
        const dataToExport = JSON.stringify(mockData, (key, value) => {
            // Convert Date objects to ISO strings for export
            if (value instanceof Date) {
                return value.toISOString();
            }
            return value;
        }, 2); // Pretty print with 2 space indentation

        const blob = new Blob([dataToExport], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `auralearn_data_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showNotification('Data exported successfully!');
        mockData.user.lastExportDate = new Date().toISOString(); // Update last export date
        saveUserData();
        renderDashboard(); // Update dashboard to hide reminder
    }

    function importData(event) {
        const file = event.target.files[0];
        if (!file) {
            showNotification('No file selected for import.', true);
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);

                // Basic validation for imported data structure
                if (importedData.user && importedData.flashcards && importedData.subjects && importedData.aiMaterials) {
                    // Convert date strings back to Date objects for flashcards
                    importedData.flashcards = importedData.flashcards.map(f => ({
                        ...f,
                        lastReviewed: new Date(f.lastReviewed),
                        nextReview: new Date(f.nextReview)
                    }));
                    // Ensure new SM-2 properties are set if missing in old imported data
                    importedData.flashcards.forEach(flashcard => {
                        flashcard.easeFactor = flashcard.easeFactor !== undefined ? flashcard.easeFactor : 2.5;
                        flashcard.interval = flashcard.interval !== undefined ? flashcard.interval : 0;
                        flashcard.repetitions = flashcard.repetitions !== undefined ? flashcard.repetitions : 0;
                    });

                    // Safely merge or set user properties from imported data
                    mockData.user = { ...initialUserData, ...importedData.user };
                    mockData.user.srsIntervals = mockData.user.srsIntervals || initialUserData.srsIntervals;
                    mockData.user.srsFactors = mockData.user.srsFactors || initialUserData.srsFactors;
                    mockData.user.dailyStudyLogs = mockData.user.dailyStudyLogs || [];
                    mockData.user.monthlyMasteryLogs = mockData.user.monthlyMasteryLogs || [];
                    mockData.user.achievements = mockData.user.achievements || [];
                    mockData.user.lastExportDate = mockData.user.lastExportDate || null;
                    mockData.user.dailyChallengeCount = mockData.user.dailyChallengeCount || 0;
                    mockData.user.lastChallengeClaimDate = mockData.user.lastChallengeClaimDate || null;
                    mockData.user.onboardingCompleted = typeof mockData.user.onboardingCompleted === 'boolean' ? mockData.user.onboardingCompleted : false;


                    // Overwrite main data arrays
                    mockData.subjects = importedData.subjects;
                    mockData.flashcards = importedData.flashcards;
                    mockData.aiMaterials = importedData.aiMaterials;
                    mockData.glossary = importedData.glossary || [];
                    mockData.mindMaps = importedData.mindMaps || [];
                    mockData.calendarEvents = (importedData.calendarEvents || []).map(event => ({
                        ...event,
                        date: new Date(event.date)
                    }));


                    saveUserData(); // Save the imported data to local storage
                    showNotification('Data imported successfully! App will reload.');
                    location.reload(); // Reload to ensure all data is correctly loaded and UI refreshed
                } else {
                    showNotification('Invalid data file structure. Please ensure it\'s a valid AuraLearn export.', true);
                }
            } catch (error) {
                console.error("Error importing data:", error);
                showNotification('Failed to import data. Corrupted file or invalid JSON.', true);
            }
        };
        reader.readAsText(file);
    }

    // Custom Confirmation Dialog (Replaces alert/confirm)
    function showCustomConfirmation(message, onConfirm) {
        // Remove any existing custom confirm modal to prevent duplicates
        const existingModal = document.getElementById('custom-confirm-modal');
        if (existingModal) {
            existingModal.remove();
        }

        const modalHtml = `
            <div id="custom-confirm-modal" class="modal-overlay">
                <div class="modal-content max-w-sm">
                    <h3 class="text-xl font-bold text-primary mb-4">Confirm Action</h3>
                    <p class="text-secondary mb-6">${message}</p>
                    <div class="flex justify-end space-x-3">
                        <button id="cancel-confirm-btn" class="bg-gray-400 text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-500 transition-colors">Cancel</button>
                        <button id="confirm-action-btn" class="button-primary px-5 py-2 rounded-lg font-semibold">Confirm</button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        const confirmModal = document.getElementById('custom-confirm-modal');
        toggleModal(confirmModal, true);

        document.getElementById('cancel-confirm-btn').addEventListener('click', () => {
            toggleModal(confirmModal, false);
            confirmModal.remove();
        });
        document.getElementById('confirm-action-btn').addEventListener('click', () => {
            toggleModal(confirmModal, false);
            confirmModal.remove();
            onConfirm();
        });
    }

    // --- Quiz Session Logic ---
    function startQuizSession(quizMaterial) {
        appState.currentQuiz = quizMaterial;
        appState.quizSession = {
            isActive: true,
            questions: [...quizMaterial.content], // Copy questions to avoid modifying original
            currentIndex: 0,
            score: 0,
            selectedAnswer: null,
            answers: [] // Store user's answers and correctness
        };

        quizTitle.textContent = quizMaterial.title;
        toggleModal(quizModal, true);
        renderQuizQuestion();
    }

    function renderQuizQuestion() {
        quizQuestionContainer.classList.remove('hidden');
        quizResultsContainer.classList.add('hidden');
        quizReviewDetailContainer.classList.add('hidden');
        quizFeedback.classList.add('hidden');
        quizSubmitAnswerBtn.disabled = true; // Disable until an option is selected

        if (appState.quizSession.currentIndex >= appState.quizSession.questions.length) {
            endQuizSession();
            return;
        }

        const currentQuestion = appState.quizSession.questions[appState.quizSession.currentIndex];
        quizQuestionText.textContent = `Q${appState.quizSession.currentIndex + 1}: ${currentQuestion.question}`;
        quizOptions.innerHTML = '';
        currentQuestion.options.forEach((option, index) => {
            const optionButton = document.createElement('button');
            optionButton.className = 'quiz-option-btn button-secondary w-full text-left px-4 py-3 rounded-lg font-semibold hover:bg-border-color transition-colors';
            optionButton.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
            optionButton.dataset.option = option;
            optionButton.addEventListener('click', () => selectQuizOption(optionButton));
            quizOptions.appendChild(optionButton);
        });

        appState.quizSession.selectedAnswer = null; // Reset selected answer
    }

    function selectQuizOption(selectedButton) {
        document.querySelectorAll('.quiz-option-btn').forEach(btn => {
            btn.classList.remove('selected', 'bg-accent-blue', 'text-white');
        });
        selectedButton.classList.add('selected', 'bg-accent-blue', 'text-white');
        appState.quizSession.selectedAnswer = selectedButton.dataset.option;
        quizSubmitAnswerBtn.disabled = false;
    }

    function submitQuizAnswer() {
        if (!appState.quizSession.selectedAnswer) {
            showNotification('Please select an answer.', true);
            return;
        }

        const currentQuestion = appState.quizSession.questions[appState.quizSession.currentIndex];
        const isCorrect = (appState.quizSession.selectedAnswer === currentQuestion.correct_answer);

        if (isCorrect) {
            appState.quizSession.score++;
            quizFeedback.textContent = 'Correct!';
            quizFeedback.className = 'mt-4 text-center font-semibold text-green-600';
        } else {
            quizFeedback.textContent = `Incorrect. Correct answer was: ${currentQuestion.correct_answer}`;
            quizFeedback.className = 'mt-4 text-center font-semibold text-red-600';
        }
        quizFeedback.classList.remove('hidden');

        // Store result for review
        appState.quizSession.answers.push({
            question: currentQuestion.question,
            selected: appState.quizSession.selectedAnswer,
            correct: currentQuestion.correct_answer,
            isCorrect: isCorrect
        });

        // Highlight correct/incorrect answers
        document.querySelectorAll('.quiz-option-btn').forEach(btn => {
            btn.disabled = true; // Disable all options
            if (btn.dataset.option === currentQuestion.correct_answer) {
                btn.classList.add('bg-green-200', 'text-green-800'); // Correct answer highlight
            } else if (btn.dataset.option === appState.quizSession.selectedAnswer && !isCorrect) {
                btn.classList.add('bg-red-200', 'text-red-800'); // Incorrect selected answer highlight
            }
            btn.classList.remove('selected', 'bg-accent-blue', 'text-white'); // Remove selection style
        });
        quizSubmitAnswerBtn.disabled = true;

        // Auto-advance after a short delay
        setTimeout(() => {
            appState.quizSession.currentIndex++;
            renderQuizQuestion();
        }, 2000); // 2 seconds to show feedback
    }

    function endQuizSession() {
        quizQuestionContainer.classList.add('hidden');
        quizResultsContainer.classList.remove('hidden');
        quizScoreDisplay.textContent = `You scored: ${appState.quizSession.score} / ${appState.quizSession.questions.length}`;
    }

    function reviewQuizAnswers() {
        quizResultsContainer.classList.add('hidden');
        quizReviewDetailContainer.classList.remove('hidden');
        quizReviewList.innerHTML = '';

        appState.quizSession.answers.forEach((answer, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'p-3 rounded-lg border list-item-themed mb-3';
            reviewItem.innerHTML = `
                <p class="font-semibold text-primary">Q${index + 1}: ${answer.question}</p>
                <p class="${answer.isCorrect ? 'text-green-600' : 'text-red-600'}">Your Answer: ${answer.selected} ${answer.isCorrect ? ' (Correct)' : ' (Incorrect)'}</p>
                ${!answer.isCorrect ? `<p class="text-green-600">Correct Answer: ${answer.correct}</p>` : ''}
            `;
            quizReviewList.appendChild(reviewItem);
        });
    }

    // Quiz event listeners
    quizSubmitAnswerBtn.addEventListener('click', submitQuizAnswer);
    quizRetakeBtn.addEventListener('click', () => startQuizSession(appState.currentQuiz));
    quizReviewAnswersBtn.addEventListener('click', reviewQuizAnswers);
    quizBackToResultsBtn.addEventListener('click', () => {
        quizReviewDetailContainer.classList.add('hidden');
        quizResultsContainer.classList.remove('hidden');
    });
    closeQuizModalBtn.addEventListener('click', () => {
        toggleModal(quizModal, false);
        appState.quizSession.isActive = false;
        appState.currentQuiz = null;
    });

    // --- Tutorial Logic ---
    function startTutorial(tourId) {
        appState.currentTutorial = mockData.tutorialContent[tourId];
        appState.currentTutorialStep = 0;

        // Clear existing highlights from previous tours
        document.querySelectorAll('[data-tutorial-highlighted]').forEach(el => {
            el.classList.remove('highlighted-element');
            el.removeAttribute('data-tutorial-highlighted');
        });


        if (appState.currentTutorial.isDetailedGuide) {
            // For detailed guides, just display content in the modal
            tutorialStepTitle.textContent = appState.currentTutorial.title;
            tutorialStepContent.innerHTML = appState.currentTutorial.content;
            tutorialPrevBtn.classList.add('hidden');
            tutorialNextBtn.classList.add('hidden');
            tutorialFinishBtn.classList.remove('hidden');
            toggleModal(tutorialStepModal, true);
        } else {
            // For interactive tours, navigate to the first step
            showTutorialStep();
            toggleModal(tutorialStepModal, true);
        }
    }

    function showTutorialStep() {
        const tour = appState.currentTutorial;
        const step = tour.steps[appState.currentTutorialStep];

        tutorialStepTitle.textContent = `${tour.title} - ${step.heading}`;
        tutorialStepContent.innerHTML = `<p>${step.content}</p>`;

        // Remove previous highlights
        document.querySelectorAll('[data-tutorial-highlighted]').forEach(el => {
            el.classList.remove('highlighted-element');
            el.removeAttribute('data-tutorial-highlighted');
        });

        // Highlight the relevant element
        if (step.highlightElementId) {
            const targetElement = document.getElementById(step.highlightElementId);
            if (targetElement) {
                targetElement.classList.add('highlighted-element'); // Use the class defined in CSS
                targetElement.setAttribute('data-tutorial-highlighted', 'true'); // Mark as highlighted
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

        // Update navigation buttons
        tutorialPrevBtn.classList.toggle('hidden', appState.currentTutorialStep === 0);
        tutorialNextBtn.classList.toggle('hidden', appState.currentTutorialStep >= tour.steps.length - 1);
        tutorialFinishBtn.classList.toggle('hidden', appState.currentTutorialStep < tour.steps.length - 1);
    }

    function goToNextTutorialStep() {
        if (appState.currentTutorialStep < appState.currentTutorial.steps.length - 1) {
            appState.currentTutorialStep++;
            showTutorialStep();
        } else {
            endTutorial();
        }
    }

    function goToPrevTutorialStep() {
        if (appState.currentTutorialStep > 0) {
            appState.currentTutorialStep--;
            showTutorialStep();
        }
    }

    function endTutorial() {
        toggleModal(tutorialStepModal, false);
        // Clear all highlights
        document.querySelectorAll('[data-tutorial-highlighted]').forEach(el => {
            el.classList.remove('highlighted-element');
            el.removeAttribute('data-tutorial-highlighted');
        });
        // Reset tutorial state
        appState.currentTutorial = null;
        appState.currentTutorialStep = 0;
        appState.onboardingCompleted = true; // Mark onboarding as complete after tutorial
        localStorage.setItem('auralearn_onboardingCompleted', 'true');
        showNotification("Tutorial finished! Welcome to AuraLearn.");
        navigate('dashboard'); // Go to dashboard after tutorial
    }

    // Tutorial Event Listeners
    tutorialTourButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            startTutorial(e.target.dataset.tour);
        });
    });

    tutorialDetailedGuideItems.forEach(item => {
        item.addEventListener('click', (e) => {
            startTutorial(e.currentTarget.dataset.guide);
        });
    });

    closeTutorialStepModalBtn.addEventListener('click', endTutorial);
    tutorialNextBtn.addEventListener('click', goToNextTutorialStep);
    tutorialPrevBtn.addEventListener('click', goToPrevTutorialStep);
    tutorialFinishBtn.addEventListener('click', endTutorial);

    // --- Mind Map Logic ---
    let mindMapNodes = appState.mindMap.nodes;
    let mindMapConnections = appState.mindMap.connections;
    let selectedNode = null;
    let connectingNode = null;
    let isDragging = false;
    let dragStart = { x: 0, y: 0 };

    function renderMindMap() {
        // Ensure canvas dimensions are set, especially after view change
        mindMapCanvas.width = mindMapCanvas.offsetWidth;
        mindMapCanvas.height = mindMapCanvas.offsetHeight;
        drawMindMap();
        populateMindMapLoadSelect();
    }

    function drawMindMap() {
        mindMapCtx.clearRect(0, 0, mindMapCanvas.width, mindMapCanvas.height);

        // Draw connections first
        mindMapConnections.forEach(conn => {
            const nodeA = mindMapNodes.find(n => n.id === conn.from);
            const nodeB = mindMapNodes.find(n => n.id === conn.to);
            if (nodeA && nodeB) {
                mindMapCtx.beginPath();
                mindMapCtx.moveTo(nodeA.x, nodeA.y);
                mindMapCtx.lineTo(nodeB.x, nodeB.y);
                mindMapCtx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--connection-color');
                mindMapCtx.lineWidth = 2;
                mindMapCtx.stroke();
            }
        });

        // Draw nodes
        mindMapNodes.forEach(node => {
            mindMapCtx.beginPath();
            mindMapCtx.arc(node.x, node.y, 40, 0, Math.PI * 2); // Node circle
            mindMapCtx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--node-bg');
            mindMapCtx.fill();
            mindMapCtx.strokeStyle = node === selectedNode ? getComputedStyle(document.documentElement).getPropertyValue('--node-selected-border') : getComputedStyle(document.documentElement).getPropertyValue('--node-border');
            mindMapCtx.lineWidth = node === selectedNode ? 4 : 2;
            mindMapCtx.stroke();

            // Draw text
            mindMapCtx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--node-text');
            mindMapCtx.font = '14px Inter';
            mindMapCtx.textAlign = 'center';
            mindMapCtx.textBaseline = 'middle';
            mindMapCtx.fillText(node.text, node.x, node.y);
        });

        // Draw connecting line if a node is selected for connection
        if (connectingNode && selectedNode && connectingNode.id !== selectedNode.id) {
            mindMapCtx.beginPath();
            mindMapCtx.moveTo(connectingNode.x, connectingNode.y);
            mindMapCtx.lineTo(selectedNode.x, selectedNode.y); // Draw to selected node for visualization
            mindMapCtx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent-blue');
            mindMapCtx.lineWidth = 3;
            mindMapCtx.setLineDash([5, 5]); // Dashed line
            mindMapCtx.stroke();
            mindMapCtx.setLineDash([]); // Reset line dash
        }
    }

    // Function to add a new node
    mindMapAddNodeBtn.addEventListener('click', () => {
        const newNodeId = mindMapNodes.length > 0 ? Math.max(...mindMapNodes.map(n => n.id)) + 1 : 1;
        const nodeText = mindMapNodeTextInput.value.trim() || `Node ${newNodeId}`;
        const newNode = {
            id: newNodeId,
            text: nodeText,
            x: mindMapCanvas.width / 2, // Start in center
            y: mindMapCanvas.height / 2
        };
        mindMapNodes.push(newNode);
        appState.mindMap.nodes = mindMapNodes; // Update appState reference
        drawMindMap();
        mindMapNodeTextInput.value = '';
        showNotification('Node added! Double-click to edit, drag to move.');
        unlockAchievement('first-mind-map'); // Check for achievement
        saveUserData(); // Save the new node
    });

    // Clear all nodes and connections
    mindMapClearAllBtn.addEventListener('click', () => {
        showCustomConfirmation('Are you sure you want to clear the entire mind map? This cannot be undone.', () => {
            mindMapNodes = [];
            mindMapConnections = [];
            selectedNode = null;
            connectingNode = null;
            appState.mindMap.nodes = [];
            appState.mindMap.connections = [];
            drawMindMap();
            showNotification('Mind map cleared.');
            saveUserData(); // Save the cleared state
        });
    });

    // Save Mind Map
    mindMapSaveBtn.addEventListener('click', () => {
        const mapName = prompt('Enter a name for this mind map:');
        if (mapName) {
            const mapId = mapName.toLowerCase().replace(/\s/g, '-').replace(/[^a-z0-9-]/g, '');
            const existingMapIndex = mockData.mindMaps.findIndex(m => m.id === mapId);
            const newMap = {
                id: mapId,
                name: mapName,
                nodes: mindMapNodes,
                connections: mindMapConnections
            };
            if (existingMapIndex > -1) {
                mockData.mindMaps[existingMapIndex] = newMap;
                showNotification(`Mind map "${mapName}" updated.`);
            } else {
                mockData.mindMaps.push(newMap);
                showNotification(`Mind map "${mapName}" saved.`);
            }
            saveUserData();
            populateMindMapLoadSelect();
        } else {
            showNotification('Mind map not saved. Name is required.', true);
        }
    });

    // Populate and Load Mind Map
    function populateMindMapLoadSelect() {
        mindMapLoadSelect.innerHTML = '<option value="">Load Map</option>';
        mockData.mindMaps.forEach(map => {
            const option = document.createElement('option');
            option.value = map.id;
            option.textContent = map.name;
            mindMapLoadSelect.appendChild(option);
        });
    }

    mindMapLoadSelect.addEventListener('change', (e) => {
        const mapId = e.target.value;
        if (mapId) {
            loadMindMap(mapId);
        }
    });

    function loadMindMap(mapId) {
        const mapToLoad = mockData.mindMaps.find(m => m.id === mapId);
        if (mapToLoad) {
            mindMapNodes = JSON.parse(JSON.stringify(mapToLoad.nodes)); // Deep copy
            mindMapConnections = JSON.parse(JSON.stringify(mapToLoad.connections)); // Deep copy
            appState.mindMap.nodes = mindMapNodes;
            appState.mindMap.connections = mindMapConnections;
            selectedNode = null;
            connectingNode = null;
            drawMindMap();
            showNotification(`Mind map "${mapToLoad.name}" loaded.`);
            mindMapLoadSelect.value = mapId; // Set selected option
        } else {
            showNotification('Mind map not found.', true);
        }
    }


    // Mind Map Interaction: Mouse/Touch Events
    mindMapCanvas.addEventListener('mousedown', (e) => {
        const rect = mindMapCanvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Check if clicking on an existing node
        const clickedNode = mindMapNodes.find(node => {
            const distance = Math.sqrt((mouseX - node.x)**2 + (mouseY - node.y)**2);
            return distance < 40; // 40 is node radius
        });

        if (clickedNode) {
            if (e.detail === 2) { // Double click to edit text
                const newText = prompt('Edit node text:', clickedNode.text);
                if (newText !== null) { // User didn't cancel
                    clickedNode.text = newText;
                    drawMindMap();
                    saveUserData(); // Save change
                }
            } else { // Single click for selection/connection
                if (connectingNode) { // Already selected a first node, now connecting
                    if (connectingNode.id !== clickedNode.id) { // Cannot connect to itself
                        const connectionExists = mindMapConnections.some(conn =>
                            (conn.from === connectingNode.id && conn.to === clickedNode.id) ||
                            (conn.from === clickedNode.id && conn.to === connectingNode.id)
                        );
                        if (!connectionExists) {
                            mindMapConnections.push({ from: connectingNode.id, to: clickedNode.id });
                            appState.mindMap.connections = mindMapConnections;
                            showNotification('Nodes connected!');
                            saveUserData(); // Save new connection
                        } else {
                            showNotification('Connection already exists.', true);
                        }
                    }
                    connectingNode = null; // Reset for next connection
                    selectedNode = null; // Deselect to stop highlighting
                } else { // First node selection for connection or dragging
                    connectingNode = clickedNode;
                    selectedNode = clickedNode; // Highlight it as selected
                    isDragging = true;
                    dragStart.x = mouseX - clickedNode.x;
                    dragStart.y = mouseY - clickedNode.y;
                }
            }
        } else { // Clicked on empty space
            selectedNode = null;
            connectingNode = null;
            isDragging = false;
        }
        drawMindMap();
    });

    mindMapCanvas.addEventListener('mousemove', (e) => {
        if (!isDragging || !selectedNode) return;
        const rect = mindMapCanvas.getBoundingClientRect();
        selectedNode.x = e.clientX - rect.left - dragStart.x;
        selectedNode.y = e.clientY - rect.top - dragStart.y;
        drawMindMap();
    });

    mindMapCanvas.addEventListener('mouseup', () => {
        isDragging = false;
        if (selectedNode) {
             // If a node was just dragged, save its new position
             saveUserData();
        }
        // Keep node selected for connection until another click
    });

    mindMapCanvas.addEventListener('mouseout', () => { // If mouse leaves canvas while dragging
        isDragging = false;
    });

    // Adjust canvas size on window resize
    window.addEventListener('resize', () => {
        if (appState.currentView === 'mind-map') {
            renderMindMap(); // Re-render to adjust canvas size and redraw
        }
    });

    // --- Glossary Logic ---
    function renderGlossary() {
        glossaryList.innerHTML = '';
        const searchTerm = glossarySearchInput.value.toLowerCase().trim();

        const filteredGlossary = mockData.glossary.filter(item =>
            item.keyword.toLowerCase().includes(searchTerm) ||
            item.definition.toLowerCase().includes(searchTerm)
        ).sort((a, b) => a.keyword.localeCompare(b.keyword)); // Alphabetical sort

        if (filteredGlossary.length === 0) {
            emptyGlossaryMessage.classList.remove('hidden');
        } else {
            emptyGlossaryMessage.classList.add('hidden');
            filteredGlossary.forEach(item => {
                const div = document.createElement('div');
                div.className = 'glossary-item p-4 rounded-lg border list-item-themed shadow-sm'; // Added styling
                div.innerHTML = `
                    <h4 class="font-semibold text-primary">${item.keyword}</h4>
                    <p class="text-secondary text-sm">${item.definition}</p>
                `;
                glossaryList.appendChild(div);
            });
        }
    }

    glossarySearchInput.addEventListener('input', renderGlossary);


    // --- Achievements Logic ---
    function checkAchievements() {
        const masteredFlashcardsCount = mockData.flashcards.filter(f => f.repetitions >= 3 && f.easeFactor >= 2.0).length;
        const totalFlashcardsAdded = mockData.flashcards.length;
        const totalAiNotes = mockData.aiMaterials.filter(m => m.type === 'note').length;
        const totalAiFlashcardsGenerated = mockData.aiMaterials.filter(m => m.type === 'notes-flashcards').length;
        const totalAiQuizzesGenerated = mockData.aiMaterials.filter(m => m.type === 'quiz').length;
        const totalAiKeywordsExtracted = mockData.aiMaterials.filter(m => m.type === 'keywords').length;
        const totalMindMapsCreated = mockData.mindMaps.length;

        // Mastered Flashcards
        if (totalFlashcardsAdded >= 1 && !mockData.user.achievements.includes('first-flashcard')) {
            unlockAchievement('first-flashcard');
        }
        if (masteredFlashcardsCount >= 10) {
            unlockAchievement('mastery-beginner');
        }
        if (masteredFlashcardsCount >= 50) {
            unlockAchievement('mastery-intermediate');
        }

        // Streak Achievements
        if (mockData.user.streak >= 7) {
            unlockAchievement('streak-7-days');
        }
        if (mockData.user.streak >= 30) {
            unlockAchievement('streak-30-days');
        }

        // Daily Challenge Achievement
        if (mockData.user.dailyChallengeCount >= 10) {
             unlockAchievement('daily-challenge-master');
        }

        // AI Usage Achievements
        if (totalAiNotes >= 1) {
            unlockAchievement('first-ai-note');
        }
        if (totalAiFlashcardsGenerated >= 1) {
            unlockAchievement('first-flashcards-generated');
        }
        if (totalAiQuizzesGenerated >= 1) {
            unlockAchievement('first-quiz-generated');
        }
        if (totalAiKeywordsExtracted >= 1) {
            unlockAchievement('first-keywords-extracted');
        }

        // Mind Map Achievement
        if (totalMindMapsCreated >= 1) {
            unlockAchievement('first-mind-map');
        }

        saveUserData(); // Ensure achievements are saved
    }


    // --- Local Storage Management ---
    /**
     * Saves all relevant mockData to localStorage.
     * Converts Date objects to ISO strings for proper storage.
     */
    function saveUserData() {
        try {
            localStorage.setItem('auralearn_user', JSON.stringify(mockData.user));
            localStorage.setItem('auralearn_flashcards', JSON.stringify(mockData.flashcards.map(f => ({
                ...f,
                lastReviewed: f.lastReviewed.toISOString(),
                nextReview: f.nextReview.toISOString()
            }))));
            localStorage.setItem('auralearn_subjects', JSON.stringify(mockData.subjects));
            localStorage.setItem('auralearn_ai_materials', JSON.stringify(mockData.aiMaterials));
            localStorage.setItem('auralearn_glossary', JSON.stringify(mockData.glossary));
            localStorage.setItem('auralearn_mind_maps', JSON.stringify(mockData.mindMaps));
            localStorage.setItem('auralearn_calendar_events', JSON.stringify(mockData.calendarEvents.map(event => ({
                ...event,
                date: event.date.toISOString()
            }))));
        } catch (e) {
            console.error("Error saving to localStorage:", e);
            if (e.name === 'QuotaExceededError') {
                showNotification('Local storage limit exceeded! Please export your data and clear some space.', true);
            } else {
                showNotification('An error occurred while saving data.', true);
            }
        }
    }

    // --- Initial Application Setup on Load ---
    window.onerror = function(message, source, lineno, colno, error) {
        console.error("Global JavaScript Error:", { message, source, lineno, colno, error });
        showNotification('An unexpected error occurred. Check console for details.', true);
    };

    applyTheme(appState.currentTheme);

    // Initialize/ensure user properties for existing users in localStorage
    // If a property doesn't exist in localStorage.user, use the initialUserData default
    mockData.user.dailyStudyLogs = mockData.user.dailyStudyLogs || initialUserData.dailyStudyLogs;
    mockData.user.monthlyMasteryLogs = mockData.user.monthlyMasteryLogs || initialUserData.monthlyMasteryLogs;
    mockData.user.achievements = mockData.user.achievements || initialUserData.achievements;
    mockData.user.lastExportDate = mockData.user.lastExportDate || initialUserData.lastExportDate;
    mockData.user.dailyChallengeCount = mockData.user.dailyChallengeCount || initialUserData.dailyChallengeCount;
    mockData.user.lastChallengeClaimDate = mockData.user.lastChallengeClaimDate || initialUserData.lastChallengeClaimDate;
    mockData.user.srsIntervals = mockData.user.srsIntervals || initialUserData.srsIntervals;
    mockData.user.srsFactors = mockData.user.srsFactors || initialUserData.srsFactors;
    mockData.user.onboardingCompleted = typeof mockData.user.onboardingCompleted === 'boolean' ? mockData.user.onboardingCompleted : false;


    // Check and update monthly mastery logs
    const todayInit = new Date();
    const currentMonthYearInit = `${todayInit.getFullYear()}-${todayInit.getMonth() + 1}`;
    const lastMonthLogInit = mockData.user.monthlyMasteryLogs[mockData.user.monthlyMasteryLogs.length - 1];

    if (!lastMonthLogInit || lastMonthLogInit.monthYear !== currentMonthYearInit) {
        mockData.user.monthlyMasteryLogs.push({
            date: todayInit.toISOString().split('T')[0],
            monthYear: currentMonthYearInit,
            masteredFlashcards: mockData.flashcards.filter(f => f.repetitions >= 3 && f.easeFactor >= 2.0).length
        });
        if (mockData.user.monthlyMasteryLogs.length > 7) {
            mockData.user.monthlyMasteryLogs = mockData.user.monthlyMasteryLogs.slice(-7);
        }
        saveUserData();
    } else {
        lastMonthLogInit.masteredFlashcards = mockData.flashcards.filter(f => f.repetitions >= 3 && f.easeFactor >= 2.0).length;
        saveUserData(); // Ensure it's saved even if only updated
    }

    // Now, determine if onboarding should be shown based on the loaded state
    if (!appState.onboardingCompleted) {
        // If onboarding explicitly not completed in localStorage or new user
        // Ensure that mockData is initialized with default empty arrays/objects if it came back as null
        // (This is covered by the `|| []` or `|| {}` in mockData object initialization)
        showOnboarding();
    } else {
        // If onboarding completed, just render the app
        usernameInput.value = mockData.user.name;
        checkAchievements(); // Check achievements on load to update initial state
        render(); // Initial render of the app
    }
});
