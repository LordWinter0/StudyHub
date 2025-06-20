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
        library: document.getElementById('view-library'),
        'ai-learning': document.getElementById('view-ai-learning'),
        'mind-map': document.getElementById('view-mind-map'), // New
        glossary: document.getElementById('view-glossary'),   // New
        analytics: document.getElementById('view-analytics'),
        achievements: document.getElementById('view-achievements'), // New
        study: document.getElementById('view-study'),
        focus: document.getElementById('view-focus'),
        'learning-hub': document.getElementById('view-learning-hub'),
        settings: document.getElementById('view-settings'),
        tutorial: document.getElementById('view-tutorial')
    };
    const startReviewBtn = document.getElementById('start-review-btn');
    const studyWeakAtomsBtn = document.getElementById('study-weak-atoms-btn'); // New
    const showAnswerBtn = document.getElementById('show-answer-btn');
    const flashcardContainer = document.getElementById('flashcard-container');
    const recallButtons = document.querySelectorAll('.recall-btn');
    const dashboardUsername = document.getElementById('dashboard-username');
    const dailyQueueCount = document.getElementById('daily-queue-count');
    const currentStreak = document.getElementById('current-streak');
    const totalMasteredAtoms = document.getElementById('total-mastered-atoms');
    const recommendedAtomsList = document.getElementById('recommended-atoms-list');
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

    // Mind Map elements (New)
    const mindMapCanvas = document.getElementById('mind-map-canvas');
    const mindMapCtx = mindMapCanvas.getContext('2d');
    const mindMapAddNodeBtn = document.getElementById('mind-map-add-node-btn');
    const mindMapClearAllBtn = document.getElementById('mind-map-clear-all-btn');
    const mindMapNodeTextInput = document.getElementById('mind-map-node-text-input');
    const mindMapSaveBtn = document.getElementById('mind-map-save-btn');
    const mindMapLoadSelect = document.getElementById('mind-map-load-select');

    // Glossary elements (New)
    const glossarySearchInput = document.getElementById('glossary-search-input');
    const glossaryList = document.getElementById('glossary-list');
    const emptyGlossaryMessage = document.getElementById('empty-glossary-message');

    // Achievements elements (New)
    const achievementsList = document.getElementById('achievements-list');
    const emptyAchievementsMessage = document.getElementById('empty-achievements-message');

    // Notification Toast (Global)
    const notificationToast = document.getElementById('notification-toast');
    const backupReminder = document.getElementById('backup-reminder'); // New

    const emptyLibraryMessage = document.getElementById('empty-library-message');
    const quickAddAtomBtnDashboard = document.getElementById('quick-add-atom-btn-dashboard');
    const quickAddAtomBtnLibrary = document.getElementById('quick-add-atom-btn-library');
    const quickAddAtomModal = document.getElementById('quick-add-atom-modal');
    const closeQuickAddModalBtn = document.getElementById('close-quick-add-modal');
    const quickAddSubjectSelect = document.getElementById('quick-add-subject');
    const newSubjectInput = document.getElementById('new-subject-input');
    const toggleNewSubjectInputBtn = document.getElementById('toggle-new-subject-input');
    const quickAddQuestionInput = document.getElementById('quick-add-question');
    const quickAddAnswerInput = document.getElementById('quick-add-answer');
    const addAtomBtn = document.getElementById('add-atom-btn');
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
    const subjectAtomsList = document.getElementById('subject-atoms-list');
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
    const quizSubmitAnswerBtn = document.getElementById('quiz-submit-answer-btn');
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
        achievements: [], // New: Store unlocked achievement IDs
        lastExportDate: null // New: Track last data export for reminders
    };

    let initialLearningAtoms = [];
    let initialSubjects = [];
    let initialAiMaterials = [];
    let initialGlossary = []; // New
    let initialMindMaps = []; // New

    // All application data stored in mockData, loaded from localStorage
    let mockData = {
        user: JSON.parse(localStorage.getItem('auralearn_user')) || JSON.parse(JSON.stringify(initialUserData)),
        subjects: JSON.parse(localStorage.getItem('auralearn_subjects')) || JSON.parse(JSON.stringify(initialSubjects)),
        learningAtoms: (JSON.parse(localStorage.getItem('auralearn_atoms')) || initialLearningAtoms).map(a => ({
            ...a,
            lastReviewed: a.lastReviewed ? new Date(a.lastReviewed) : new Date(),
            nextReview: a.nextReview ? new Date(a.nextReview) : new Date(),
            // Ensure SM-2 properties exist for existing atoms
            easeFactor: a.easeFactor || 2.5,
            interval: a.interval || 0, // In days
            repetitions: a.repetitions || 0
        })),
        aiMaterials: (JSON.parse(localStorage.getItem('auralearn_ai_materials')) || initialAiMaterials),
        glossary: (JSON.parse(localStorage.getItem('auralearn_glossary')) || initialGlossary), // New
        mindMaps: (JSON.parse(localStorage.getItem('auralearn_mind_maps')) || initialMindMaps), // New
        soundscapes: [
            { name: 'Rain', icon: '🌧️', file: 'rain.mp3' },
            { name: 'Forest', icon: '🌲', file: 'forest.mp3' },
            { name: 'Cafe', icon: '☕', file: 'cafe.mp3' },
            { name: 'Waves', icon: '🌊', file: 'waves.mp3' }
        ],
        // Learning Hub Content with LLM-expandable details (will be formatted by AI)
        learningHubContent: {
            auralearnBasics: [
                { title: "What are Learning Atoms?", summary: "The building blocks of your knowledge in AuraLearn.", details: "In AuraLearn, a 'Learning Atom' is the smallest, most fundamental piece of information or concept you want to master. Breaking down knowledge into these atomic units allows AuraLearn's intelligent Spaced Repetition System (SRS) to precisely track your mastery of each individual piece and schedule it for optimal review, ensuring you don't waste time on what you already know while reinforcing challenging concepts." },
                { title: "How Spaced Repetition Works", summary: "A science-backed method for long-term memory.", details: "AuraLearn's core is its Spaced Repetition System (SRS). After you review a 'Learning Atom', you rate how well you recalled it. Based on your rating, AuraLearn's algorithm calculates the optimal time to show you that atom again – just before you're likely to forget it. Easy concepts are reviewed less often, difficult ones more frequently. This adaptive scheduling is scientifically proven to move information from short-term to long-term memory much more efficiently than traditional cramming." },
                { title: "Your Mastery Score", summary: "Understanding your progress.", details: "Your 'Mastery Score' in AuraLearn reflects how deeply ingrained a 'Learning Atom' is in your long-term memory. It's dynamically updated based on your recall performance during study sessions. The higher your mastery, the less frequently an atom needs to be reviewed. This metric provides a clear, objective view of your knowledge retention over time across all your subjects." }
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
                { title: "Combat ADHD (Study Tips)", summary: "Strategies for studying with attention challenges.", details: "" },
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
        // Tutorial content data (as previously defined)
        tutorialContent: {
            dashboard: {
                title: "Dashboard Overview",
                steps: [
                    {
                        heading: "Your Learning Hub",
                        content: "The Dashboard is your personalized home for AuraLearn. It gives you a quick snapshot of your daily learning queue, current streak, and overall progress.",
                        highlightElementId: "view-dashboard"
                    },
                    {
                        heading: "Daily Review Queue",
                        content: "This section shows you the 'Learning Atoms' that are due for review today based on our intelligent Spaced Repetition algorithm. Click 'Start Daily Review' to begin!",
                        highlightElementId: "daily-queue-list"
                    },
                    {
                        heading: "Progress at a Glance",
                        content: "Track your current study streak and total mastered atoms to see your consistency and knowledge growth.",
                        highlightElementId: "current-streak"
                    },
                    {
                        heading: "Recommended for You",
                        content: "AuraLearn intelligently suggests atoms you might want to review next, helping you prioritize your learning.",
                        highlightElementId: "recommended-atoms-list"
                    },
                    {
                        heading: "Study Weak Atoms",
                        content: "Target your most challenging concepts with a dedicated study session for 'Weak Atoms'. These are cards you've struggled with.",
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
                        content: "The Library is where all your 'Learning Atoms' and AI-generated materials are stored and organized by subject.",
                        highlightElementId: "view-library"
                    },
                    {
                        heading: "Subjects and Atoms",
                        content: "Your flashcards (Learning Atoms) are grouped into subjects. Click on a subject to see all the atoms within it.",
                        highlightElementId: "subject-grid"
                    },
                    {
                        heading: "Quick Add Atoms",
                        content: "Easily add new flashcards (questions and answers) directly to your library via the 'Quick Add Atom' button.",
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
                        content: "Always assign generated content to a subject for better organization, especially for flashcards.",
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
                        <li><strong>Specific:</strong> Clearly define what you want to achieve. (e.g., "Master 50 new JavaScript atoms" instead of "Learn JavaScript").</li>
                        <li><strong>Measurable:</strong> Ensure your goal can be tracked. AuraLearn helps with this by tracking mastered atoms and study time.</li>
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
                        <li>In the <strong>Settings</strong> view, click the "<strong>Export Data</strong>" button. This will download a JSON file containing all your user profile, learning atoms, subjects, AI materials, glossary, and mind maps.</li>
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
    let appState = {
        currentView: localStorage.getItem('auralearn_currentView') || 'dashboard',
        studySession: { isActive: false, queue: [], currentIndex: 0, atomsReviewedInSession: 0 },
        pomodoro: { timerId: null, timeLeft: 25 * 60, isRunning: false, mode: 'work', audio: null },
        onboardingCompleted: localStorage.getItem('auralearn_onboardingCompleted') === 'true',
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
            scale: 1, // Future: for zoom
            offsetX: 0, // Future: for pan
            offsetY: 0  // Future: for pan
        }
    };

    // Gemini API configuration (placeholder - Canvas will provide this at runtime)
    const apiKey = "";

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
        notificationToast.classList.remove('hidden', 'error');
        if (isError) {
            notificationToast.classList.add('error');
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
     * Checks if a new achievement has been unlocked.
     * @param {string} achievementId - The ID of the achievement to check.
     */
    function unlockAchievement(achievementId) {
        if (!mockData.user.achievements.includes(achievementId)) {
            mockData.user.achievements.push(achievementId);
            showNotification(`Achievement Unlocked: ${mockData.achievements.find(a => a.id === achievementId)?.name || achievementId}! 🏅`);
            saveUserData();
            if (appState.currentView === 'achievements') renderAchievements(); // Re-render if on achievements page
        }
    }

    /**
     * Calculates the next review date for a learning atom using an SM-2 like algorithm.
     * @param {Date} lastReviewed - The date the atom was last reviewed.
     * @param {number} quality - Recall quality (0-3: Forgot, Struggled, Good, Perfect).
     * @param {number} currentEaseFactor - The current ease factor for the atom.
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
            newEaseFactor += (0.1 - (5 - mockData.user.srsFactors.perfect) * (0.08 + (5 - mockData.user.srsFactors.perfect) * 0.02));
            newRepetitions++;
        } else if (quality === 2) { // Good
            // No change to ease factor
            newRepetitions++;
        } else if (quality === 1) { // Struggled
            newEaseFactor -= 0.2;
            newRepetitions = 0; // Reset repetitions
        } else { // Forgot (quality === 0)
            newEaseFactor -= 0.2;
            newRepetitions = 0; // Reset repetitions
        }

        // Clamp ease factor between 1.3 and 2.5 (or higher if intervals allow, but 2.5 is common max)
        newEaseFactor = Math.max(1.3, newEaseFactor);

        // Calculate new interval
        if (quality < 2) { // Forgot or Struggled
            newInterval = quality === 0 ? mockData.user.srsIntervals.forgot : mockData.user.srsIntervals.struggled;
            // If the interval is in hours (e.g., 0.25 days = 6 hours), keep it that way for the first review
            if (newInterval < 1) {
                 // For very short intervals, use minutes/hours for more precise timing.
                 // Storing in days, so 0.25 means 6 hours.
            }
        } else { // Good or Perfect
            if (newRepetitions === 1) { // First successful recall after learning/reset
                newInterval = mockData.user.srsIntervals.good; // Use good interval for initial successful pass
            } else if (newRepetitions === 2) { // Second consecutive successful recall
                newInterval = mockData.user.srsIntervals.perfect; // Use perfect interval for second pass
            } else { // Further successful recalls
                newInterval = newInterval * newEaseFactor;
            }
        }

        // Ensure interval is at least 1 day if repetitions > 0 and interval was previously short
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
     * Gets atoms due for review today, sorted by next review date.
     * @returns {Array<Object>} Filtered and sorted list of learning atoms.
     */
    function getDailyQueue() {
        const now = new Date();
        now.setHours(0, 0, 0, 0); // Normalize 'now' to start of today for comparison

        return mockData.learningAtoms.filter(atom => {
            const nextReviewDate = atom.nextReview instanceof Date ? atom.nextReview : new Date(atom.nextReview);
            nextReviewDate.setHours(0, 0, 0, 0); // Normalize atom's next review date

            // Handle very short intervals (less than a day) correctly
            if (atom.interval < 1 && atom.repetitions === 0) { // If it's a new/forgotten card with short interval
                const reviewTime = new Date(atom.lastReviewed.getTime() + atom.interval * 24 * 60 * 60 * 1000);
                return reviewTime <= new Date(); // Check if actual time has passed
            }
            return nextReviewDate <= now; // For intervals >= 1 day, just compare dates
        }).sort((a, b) => {
            const dateA = a.nextReview instanceof Date ? a.nextReview : new Date(a.nextReview);
            const dateB = b.nextReview instanceof Date ? b.nextReview : new Date(b.nextReview);
            return dateA.getTime() - dateB.getTime();
        }).slice(0, 15); // Limit to 15 for a manageable daily session
    }

    /**
     * Gets atoms that the user has struggled with (low repetitions, low ease factor).
     * @returns {Array<Object>} List of weak learning atoms.
     */
    function getWeakAtoms() {
        return mockData.learningAtoms
            .filter(atom => atom.repetitions < 3 && atom.easeFactor < 2.0 && atom.interval > 0) // Struggled, but not brand new
            .sort((a, b) => a.easeFactor - b.easeFactor) // Sort by lowest ease factor first
            .slice(0, 20); // Limit to 20 weak atoms for a session
    }

    /**
     * Gets recommended atoms (e.g., lowest difficulty and not in today's queue).
     * @returns {Array<Object>} List of recommended learning atoms.
     */
    function getRecommendedAtoms() {
        const todayQueueIds = new Set(getDailyQueue().map(a => a.id));
        return mockData.learningAtoms
            .filter(atom => atom.repetitions === 0 && !todayQueueIds.has(atom.id)) // Only truly new atoms not in today's queue
            .sort((a, b) => new Date(a.nextReview).getTime() - new Date(b.nextReview).getTime()) // Sort by next review for new atoms
            .slice(0, 3); // Show top 3 recommendations
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
        totalMasteredAtoms.textContent = mockData.learningAtoms.filter(atom => atom.repetitions >= 3 && atom.easeFactor >= 2.0).length; // Define mastered as 3+ reps and good ease
        dailyQueueCount.textContent = `${getDailyQueue().length} Atoms`;

        // Render content specific to the current view
        if (appState.currentView === 'dashboard') renderDashboard();
        if (appState.currentView === 'library') renderLibrary();
        if (appState.currentView === 'ai-learning') renderAILearning();
        if (appState.currentView === 'mind-map') renderMindMap(); // New
        if (appState.currentView === 'glossary') renderGlossary(); // New
        if (appState.currentView === 'analytics') renderAnalytics();
        if (appState.currentView === 'achievements') renderAchievements(); // New
        if (appState.currentView === 'focus') renderFocusTools();
        if (appState.currentView === 'learning-hub') renderLearningHub();
        if (appState.currentView === 'settings') renderSettings();
        if (appState.currentView === 'tutorial') renderTutorial(); // Render tutorial view
    }

    /**
     * Renders content for the Dashboard view.
     */
    function renderDashboard() {
        const dailyQueue = getDailyQueue();
        const weakAtoms = getWeakAtoms(); // New
        const queueList = document.getElementById('daily-queue-list');
        queueList.innerHTML = ''; // Clear previous list items

        if (dailyQueue.length === 0) {
            queueList.innerHTML = '<li class="p-3 text-secondary text-center list-item-themed">No atoms due for review today. Great job!</li>';
            startReviewBtn.textContent = 'No Reviews Today';
            startReviewBtn.disabled = true;
        } else {
            dailyQueue.forEach(atom => {
                const subject = mockData.subjects.find(s => s.id === atom.subjectId);
                const li = document.createElement('li');
                li.className = 'flex items-center justify-between p-3 rounded-lg border list-item-themed hover:list-item-themed';
                const subjectColorClass = subject ? `${subject.color} ${subject.textColor}` : 'bg-gray-200 text-gray-800';
                li.innerHTML = `
                    <div>
                        <p class="font-medium text-primary">${atom.question}</p>
                        <span class="text-xs font-semibold ${subjectColorClass} px-2 py-1 rounded-full">${subject ? subject.name : 'Unknown Subject'}</span>
                    </div>
                    <span class="text-secondary text-lg">›</span>
                `;
                queueList.appendChild(li);
            });
            startReviewBtn.textContent = `Start Daily Review (${dailyQueue.length} items)`;
            startReviewBtn.disabled = false;
        }

        // Update Weak Atoms button text
        studyWeakAtomsBtn.textContent = `Study Weak Atoms (${weakAtoms.length})`;
        studyWeakAtomsBtn.disabled = weakAtoms.length === 0;

        // Render Recommended Atoms
        const recommendedAtoms = getRecommendedAtoms();
        recommendedAtomsList.innerHTML = '';
        if (recommendedAtoms.length === 0) {
            recommendedAtomsList.innerHTML = `<p class="text-secondary text-center mt-4">No specific recommendations yet. Start importing content!</p>`;
        } else {
            recommendedAtoms.forEach(atom => {
                const subject = mockData.subjects.find(s => s.id === atom.subjectId);
                const li = document.createElement('div');
                li.className = 'flex items-center justify-between p-3 rounded-lg border list-item-themed hover:list-item-themed';
                const subjectColorClass = subject ? `${subject.color} ${subject.textColor}` : 'bg-gray-200 text-gray-800';
                li.innerHTML = `
                    <div>
                        <p class="font-medium text-primary">${atom.question}</p>
                        <span class="text-xs font-semibold ${subjectColorClass} px-2 py-1 rounded-full">${subject ? subject.name : 'Unknown Subject'}</span>
                    </div>
                    <button class="bg-accent-blue text-white text-xs py-1 px-2 rounded-md hover:bg-accent-blue-hover" data-atom-id="${atom.id}" aria-label="Review ${atom.question}">Review</button>
                `;
                recommendedAtomsList.appendChild(li);

                const reviewBtn = li.querySelector('button');
                reviewBtn.addEventListener('click', () => {
                    const atomId = parseInt(reviewBtn.dataset.atom-id);
                    const selectedAtom = mockData.learningAtoms.find(a => a.id === atomId);
                    if (selectedAtom) {
                        showDetailModal({ title: selectedAtom.question, details: selectedAtom.answer });
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
        dailyChallengeText.textContent = `Review 5 atoms to complete today's challenge!`;
        dailyChallengeProgress.style.width = `${(mockData.user.dailyChallengeProgress / 5) * 100}%`;
        dailyChallengeStatus.textContent = `${mockData.user.dailyChallengeProgress}/5 Atoms Reviewed`;

        if (mockData.user.dailyChallengeProgress >= 5 && mockData.user.lastChallengeDate === today) {
            claimChallengeBtn.classList.remove('hidden');
            unlockAchievement('daily-challenge-master'); // Unlock achievement
        } else {
            claimChallengeBtn.classList.add('hidden');
        }
        saveUserData();

        // Backup Reminder (New)
        const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;
        const lastExportDate = mockData.user.lastExportDate ? new Date(mockData.user.lastExportDate) : null;
        if (!lastExportDate || (new Date() - lastExportDate > ONE_WEEK_MS)) {
            backupReminder.classList.remove('hidden');
        } else {
            backupReminder.classList.add('hidden');
        }
    }

    /**
     * Renders content for the Library view.
     */
    function renderLibrary() {
        subjectGrid.innerHTML = '';
        if (mockData.subjects.length === 0) {
            emptyLibraryMessage.classList.remove('hidden');
        } else {
            emptyLibraryMessage.classList.add('hidden');
            mockData.subjects.forEach(subject => {
                const div = document.createElement('div');
                div.className = `p-4 rounded-xl shadow-sm border border-border-color ${subject.color} cursor-pointer hover:shadow-md transition-shadow`;
                div.innerHTML = `
                    <h4 class="font-bold ${subject.textColor}">${subject.name}</h4>
                    <p class="text-sm ${subject.textColor.replace('-800', '-600')}">${mockData.learningAtoms.filter(a => a.subjectId === subject.id).length} Atoms</p>
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
                    displayContent = `<p>${tempDiv.textContent.substring(0, 100)}...</p>`;
                } else if (aiMaterial.type === 'quiz') {
                    typeLabel = 'AI Quiz';
                    displayContent = `<p>${aiMaterial.content.length} Questions</p>`;
                } else if (aiMaterial.type === 'keywords') {
                    typeLabel = 'Keywords';
                    displayContent = `<p>${aiMaterial.content.map(k => k.keyword).join(', ')}</p>`;
                } else if (aiMaterial.type === 'exam-questions') {
                    typeLabel = 'Exam Questions';
                    displayContent = `<p>${aiMaterial.content.length} Questions</p>`;
                } else if (aiMaterial.type === 'summary') {
                    typeLabel = 'AI Summary';
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = aiMaterial.content;
                    displayContent = `<p>${tempDiv.textContent.substring(0, 100)}...</p>`;
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
     * Shows the subject details modal with its associated learning atoms.
     * @param {string} subjectId - The ID of the subject.
     */
    function showSubjectDetails(subjectId) {
        const subject = mockData.subjects.find(s => s.id === subjectId);
        if (!subject) return;

        subjectDetailTitle.textContent = `${subject.name} Atoms`;
        subjectAtomsList.innerHTML = ''; // Clear previous list

        const atomsInSubject = mockData.learningAtoms.filter(atom => atom.subjectId === subjectId);

        if (atomsInSubject.length === 0) {
            subjectAtomsList.innerHTML = '<p class="text-secondary text-center list-item-themed">No learning atoms in this subject yet.</p>';
        } else {
            atomsInSubject.forEach(atom => {
                const atomDiv = document.createElement('div');
                atomDiv.className = 'p-3 rounded-lg border list-item-themed hover:list-item-themed cursor-pointer transition-colors';
                atomDiv.innerHTML = `
                    <p class="font-semibold text-primary">${atom.question}</p>
                    <p class="text-xs text-secondary mt-1">
                        Recall: ${atom.repetitions}x, Interval: ${atom.interval.toFixed(2)} days, Ease: ${atom.easeFactor.toFixed(2)}
                    </p>
                    <p class="text-xs text-secondary">Next Review: ${new Date(atom.nextReview).toLocaleDateString()}</p>
                `;
                atomDiv.addEventListener('click', (e) => {
                    e.stopPropagation();
                    showDetailModal({ title: atom.question, details: atom.answer });
                });
                subjectAtomsList.appendChild(atomDiv);
            });
        }
        subjectDetailModal.classList.remove('hidden');
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
        detailModal.classList.remove('hidden');
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
    }

    /**
     * Populates the subject dropdown for the AI Learning section.
     */
    function populateAILearningSubjectSelect() {
        aiContentSubjectSelect.innerHTML = '<option value="">Select or Add New Subject</option>';
        mockData.subjects.forEach(subject => {
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
        if (!aiContentNewSubjectInput.classList.contains('hidden') && aiContentNewSubjectInput.value.trim()) {
            subjectName = aiContentNewSubjectInput.value.trim();
            subjectId = subjectName.toLowerCase().replace(/\s/g, '-').replace(/[^a-z0-9-]/g, '');
            if (!mockData.subjects.find(s => s.id === subjectId)) {
                mockData.subjects.push({ id: subjectId, name: subjectName, color: "bg-blue-100", textColor: "text-blue-800", atoms: 0, lastReviewed: null });
            }
        } else {
            subjectId = aiContentSubjectSelect.value;
            if (type === 'notes-flashcards' && !subjectId) {
                showNotification('Please select an existing subject or add a new one for Flashcards.', true);
                aiGenerationStatus.classList.add('hidden');
                if (currentButton) currentButton.disabled = false;
                return;
            }
            subjectName = mockData.subjects.find(s => s.id === subjectId)?.name || 'General AI Content';
        }

        let prompt = '';
        let responseSchema = {};
        let outputTitle = '';
        let savedContentTitle = '';

        // Added specific formatting instructions for notes and summaries
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
                responseSchema = { type: "STRING" }; // For direct HTML string output
                break;
            case 'notes-flashcards':
                outputTitle = 'Generated Flashcards';
                savedContentTitle = `Flashcards for: ${content.substring(0, 50)}${content.length > 50 ? '...' : ''}`;
                prompt = `Extract key concepts and their explanations, structured as concise question-answer pairs (Learning Atoms). Provide at least 5 pairs if possible. For each pair, the question should be concise and the answer should be informative but brief enough for a flashcard. Ensure no markdown formatting like asterisks or bullet points are used within the question or answer text. Content: "${content}"`;
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
                prompt = `Generate a 5-question multiple-choice quiz based on the following content: "${content}". For each question, provide 4 options (A, B, C, D) and indicate the correct answer. Format as JSON, ensuring no markdown characters like asterisks or bullet points are used within the question or option text: [{"question": "...", "options": ["A", "B", "C", "D"], "correct_answer": "A"}, ...]`;
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
                responseSchema = { type: "STRING" }; // For direct HTML string output
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
            const payload = {
                contents: chatHistory,
                generationConfig: {
                    responseMimeType: "application/json",
                    responseSchema: responseSchema
                }
            };

            // Special handling for 'note' and 'summary' types which return plain string, not JSON
            if (type === 'note' || type === 'summary') {
                delete payload.generationConfig.responseMimeType;
                delete payload.generationConfig.responseSchema;
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
                if (type === 'note' || type === 'summary') {
                    generatedContent = result.candidates[0].content.parts[0].text;
                } else {
                    generatedContent = JSON.parse(result.candidates[0].content.parts[0].text);
                }

                if (generatedContent && (Array.isArray(generatedContent) ? generatedContent.length > 0 : true)) {
                    aiOutputTitle.textContent = outputTitle;
                    aiGeneratedOutput.classList.remove('hidden');

                    if (type === 'notes-flashcards') {
                        const subjectObj = mockData.subjects.find(s => s.id === subjectId);
                        generatedContent.forEach(atomData => {
                            const newAtom = {
                                id: mockData.learningAtoms.length + 1,
                                subjectId: subjectId,
                                question: atomData.question,
                                answer: atomData.answer,
                                lastReviewed: new Date(),
                                // Initialize for SM-2
                                easeFactor: 2.5,
                                interval: 0,
                                repetitions: 0,
                                nextReview: new Date() // Will be updated on first review
                            };
                            mockData.learningAtoms.push(newAtom);
                        });
                        showNotification(`Generated flashcards added to your '${subjectName}' subject!`);
                        unlockAchievement('first-flashcards-generated'); // Unlock achievement
                    } else if (type === 'keywords') {
                        generatedContent.forEach(item => {
                            if (!mockData.glossary.find(g => g.keyword.toLowerCase() === item.keyword.toLowerCase())) {
                                mockData.glossary.push(item); // Add to global glossary
                            }
                        });
                        showNotification(`Keywords extracted and added to your Glossary!`);
                        unlockAchievement('first-keywords-extracted'); // Unlock achievement
                    } else if (type === 'quiz') {
                         showNotification(`Quiz generated and saved!`);
                         unlockAchievement('first-quiz-generated'); // Unlock achievement
                    } else if (type === 'note') {
                         showNotification(`Notes generated and saved!`);
                         unlockAchievement('first-ai-note'); // Unlock achievement
                    } else if (type === 'summary') {
                        showNotification(`Summary generated and saved!`);
                    }


                    // Save material for all types except notes-flashcards (handled above)
                    if (type !== 'notes-flashcards') {
                        const newMaterial = {
                            id: mockData.aiMaterials.length + 1,
                            type: type,
                            title: savedContentTitle,
                            content: generatedContent,
                            timestamp: new Date().toISOString(),
                            subjectId: subjectId // Can be empty string if no subject selected
                        };
                        mockData.aiMaterials.push(newMaterial);
                    }


                    // Display generated content in the output area regardless of where it's saved
                    if (type === 'note' || type === 'summary') {
                        aiOutputContentDisplay.innerHTML = generatedContent;
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
                    render();
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

        const primaryTextColor = getComputedStyle(document.body).getPropertyValue('--text-primary');
        const secondaryTextColor = getComputedStyle(document.body).getPropertyValue('--text-secondary');
        const accentBlueColor = getComputedStyle(document.body).getPropertyValue('--accent-blue');
        const borderDivColor = getComputedStyle(document.body).getPropertyValue('--border-color');
        const textGreenColor = getComputedStyle(document.body).getPropertyValue('--text-green');
        const textOrangeColor = getComputedStyle(document.body).getPropertyValue('--text-orange');

        const masteredCount = mockData.learningAtoms.filter(atom => atom.repetitions >= 3 && atom.easeFactor >= 2.0).length;
        const learningCount = mockData.learningAtoms.filter(atom => atom.repetitions > 0 && !(atom.repetitions >= 3 && atom.easeFactor >= 2.0)).length;
        const newCount = mockData.learningAtoms.filter(atom => atom.repetitions === 0).length;

        const masteryCtx = document.getElementById('masteryChart').getContext('2d');
        charts.mastery = new Chart(masteryCtx, {
            type: 'doughnut',
            data: {
                labels: ['Mastered', 'Learning', 'New'],
                datasets: [{
                    data: [masteredCount, learningCount, newCount],
                    backgroundColor: [textGreenColor, textOrangeColor, secondaryTextColor],
                    borderColor: getComputedStyle(document.body).getPropertyValue('--bg-secondary'),
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
                                label += Math.round(context.parsed) + ' atoms';
                                return label;
                            }
                        }
                    }
                }
            }
        });

        // Placeholder for real study activity data
        const activityData = Array(7).fill(0); // [Mon, Tue, ..., Sun]
        const today = new Date().toISOString().split('T')[0];
        if (mockData.user.dailyStudyLogs) {
            mockData.user.dailyStudyLogs.forEach(log => {
                // Check if the log date is within the last 7 days from today
                const logDate = new Date(log.date);
                const diffTime = Math.abs(today - logDate.getTime());
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                if (diffDays <= 7) {
                    const dayOfWeek = logDate.getDay(); // 0 for Sunday, 1 for Monday
                    activityData[dayOfWeek === 0 ? 6 : dayOfWeek - 1] += (log.minutes / 60); // Convert minutes to hours
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

        // Placeholder for knowledge growth data
        const growthData = [0, 0, 0, 0, 0, 0, 0]; // Last 6 months + Current Month
        const currentMonth = new Date().getMonth(); // 0-11
        if (mockData.user.monthlyMasteryLogs) {
            mockData.user.monthlyMasteryLogs.forEach(log => {
                const logDate = new Date(log.date);
                // Calculate month difference to place data correctly in the last 6 months + current
                const monthDiff = (currentMonth - logDate.getMonth() + 12) % 12;
                if (monthDiff < 7) { // 0 for current month, 1 for last month, ..., 6 for 6 months ago
                    growthData[6 - monthDiff] = log.masteredAtoms;
                }
            });
        }
        growthData[6] = masteredCount; // Always show current month's real-time mastered count

        const growthCtx = document.getElementById('growthChart').getContext('2d');
        charts.growth = new Chart(growthCtx, {
            type: 'line',
            data: {
                labels: ['6M Ago', '5M Ago', '4M Ago', '3M Ago', '2M Ago', 'Last Month', 'Current'],
                datasets: [{
                    label: 'Total Atoms Mastered',
                    data: growthData,
                    fill: true,
                    borderColor: accentBlueColor,
                    backgroundColor: accentBlueColor.replace('rgb', 'rgba').replace(')', ', 0.1)'),
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
                                label += context.parsed.y + ' atoms';
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
                const masteredCount = mockData.learningAtoms.filter(atom => atom.repetitions >= 3 && atom.easeFactor >= 2.0).length;

                if (goal.targetType === 'atoms') {
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
                    <p class="text-secondary text-sm mt-2">Progress: ${Math.round(progress)}% (${currentProgressValue.toFixed(0)} / ${goal.targetValue})</p>
                `;
                goalsList.appendChild(goalDiv);
            });
        }
    }

    /**
     * Renders content for the Achievements view. (New)
     */
    function renderAchievements() {
        achievementsList.innerHTML = '';
        const allAchievements = [
            { id: 'first-atom', name: 'First Atom Added', description: 'Add your very first learning atom.', icon: '✨' },
            { id: 'mastery-beginner', name: 'Beginner Master', description: 'Master 10 learning atoms.', icon: '⭐' },
            { id: 'mastery-intermediate', name: 'Intermediate Master', description: 'Master 50 learning atoms.', icon: '🌟' },
            { id: 'streak-7-days', name: '7-Day Streak', description: 'Achieve a 7-day study streak.', icon: '🗓️' },
            { id: 'streak-30-days', name: '30-Day Streak', description: 'Achieve a 30-day study streak.', icon: '🏆' },
            { id: 'daily-challenge-master', name: 'Daily Challenger', description: 'Complete 10 daily challenges.', icon: '🎯' }, // Note: check for 10 daily challenges, not just one completion
            { id: 'first-ai-note', name: 'AI Note Creator', description: 'Generate your first AI Note.', icon: '📝' },
            { id: 'first-flashcards-generated', name: 'Flashcard Progenitor', description: 'Generate flashcards using AI.', icon: '💡' },
            { id: 'first-quiz-generated', name: 'Quiz Whiz', description: 'Generate your first AI quiz.', icon: '🧠' },
            { id: 'first-keywords-extracted', name: 'Keyword Explorer', description: 'Extract keywords using AI.', icon: '🔑' },
            { id: 'first-mind-map', name: 'Mind Mapper', description: 'Create your first Mind Map.', icon: '🗺️' }
            // Add more achievements here
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
     * @param {string} queueType - 'daily' for daily queue, 'weak' for weak atoms.
     */
    function startStudySession(queueType = 'daily') {
        appState.studySession.isActive = true;
        appState.studySession.queue = queueType === 'weak' ? getWeakAtoms() : getDailyQueue();
        appState.studySession.currentIndex = 0;
        appState.studySession.atomsReviewedInSession = 0;

        if (appState.studySession.queue.length === 0) {
            showNotification(`Your ${queueType} review queue is empty! Import some content or review more to create weak atoms.`, true);
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

        const currentAtom = appState.studySession.queue[appState.studySession.currentIndex];
        const subject = mockData.subjects.find(s => s.id === currentAtom.subjectId);

        document.getElementById('card-subject-front').textContent = subject ? subject.name : 'Unknown';
        document.getElementById('card-subject-back').textContent = subject ? subject.name : 'Unknown';
        document.getElementById('card-question').textContent = currentAtom.question;
        document.getElementById('card-answer').textContent = currentAtom.answer;

        const totalItems = appState.studySession.queue.length;
        const progress = ((appState.studySession.currentIndex + 1) / totalItems) * 100;
        document.getElementById('study-progress-bar').style.width = `${progress}%`;
        document.getElementById('study-progress-text').textContent = `Atom ${appState.studySession.currentIndex + 1} of ${totalItems}`;
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
        mockData.user.dailyChallengeProgress += appState.studySession.atomsReviewedInSession;

        // Log daily study time (placeholder, actual tracking would be more robust)
        const minutesStudiedThisSession = appState.studySession.atomsReviewedInSession * 2; // Rough estimate: 2 mins per atom
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
    startReviewBtn.addEventListener('click', () => startStudySession('daily')); // Start daily queue
    studyWeakAtomsBtn.addEventListener('click', () => startStudySession('weak')); // Start weak atoms queue
    showAnswerBtn.addEventListener('click', () => { flashcardContainer.classList.add('flipped'); });

    recallButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const quality = parseInt(e.currentTarget.dataset.rating);
            const currentAtom = appState.studySession.queue[appState.studySession.currentIndex];

            const wasMasteredBefore = currentAtom.repetitions >= 3 && currentAtom.easeFactor >= 2.0;

            // Update SM-2 properties for the current atom
            const { nextReview, newInterval, newEaseFactor, newRepetitions } = calculateNextReviewDateSM2(
                currentAtom.lastReviewed, quality, currentAtom.easeFactor, currentAtom.interval, currentAtom.repetitions
            );

            currentAtom.lastReviewed = new Date();
            currentAtom.nextReview = nextReview;
            currentAtom.interval = newInterval;
            currentAtom.easeFactor = newEaseFactor;
            currentAtom.repetitions = newRepetitions;

            const isNowMastered = newRepetitions >= 3 && newEaseFactor >= 2.0;
            if (!wasMasteredBefore && isNowMastered) {
                // Atom just became mastered
                unlockAchievement('first-atom'); // Placeholder, actual mastery achievements would be based on count
            }

            saveUserData();
            console.log(`Rated card ${currentAtom.id} with rating: ${quality}. Next review: ${currentAtom.nextReview.toLocaleDateString()}`);

            flashcardContainer.classList.remove('flipped');
            appState.studySession.currentIndex++;
            appState.studySession.atomsReviewedInSession++;
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
            // Check for achievements related to study time
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
                const audio = new Audio(`audio/${soundFile}`); // Assumes an 'audio' folder exists
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
        onboardingModal.classList.remove('hidden');
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
        mockData.user.dailyStudyLogs = []; // Initialize daily study logs
        mockData.user.monthlyMasteryLogs = []; // Initialize monthly mastery logs
        mockData.user.lastChallengeClaimDate = null; // New
        mockData.user.dailyChallengeCount = 0; // New

        localStorage.setItem('auralearn_onboardingCompleted', 'true');
        appState.onboardingCompleted = true;
        onboardingModal.classList.add('hidden');
        saveUserData();
        showNotification('Onboarding complete! Your personalized journey begins now.');
        navigate('dashboard');
    }

    onboardingNextBtn.addEventListener('click', () => {
        currentOnboardingStep++;
        updateOnboardingStep();
    });
    onboardingSkipBtn.addEventListener('click', () => {
        localStorage.setItem('auralearn_onboardingCompleted', 'true');
        appState.onboardingCompleted = true;
        onboardingModal.classList.add('hidden');
        // Ensure initial user data is saved even on skip
        mockData.user.dailyStudyLogs = [];
        mockData.user.monthlyMasteryLogs = [];
        mockData.user.lastChallengeClaimDate = null;
        mockData.user.dailyChallengeCount = 0;
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
    generateAiNotesBtn.addEventListener('click', () => generateAIContent('note'));
    generateNotesFlashcardsBtn.addEventListener('click', () => generateAIContent('notes-flashcards'));
    generateQuizBtn.addEventListener('click', () => generateAIContent('quiz'));
    extractKeywordsBtn.addEventListener('click', () => generateAIContent('keywords'));
    predictExamQuestionsBtn.addEventListener('click', () => generateAIContent('exam-questions'));
    summarizeContentBtn.addEventListener('click', () => generateAIContent('summary'));


    // --- Quick Add Atom Modal Handlers ---
    quickAddAtomBtnDashboard.addEventListener('click', showQuickAddAtomModal);
    quickAddAtomBtnLibrary.addEventListener('click', showQuickAddAtomModal);

    function showQuickAddAtomModal() {
        quickAddAtomModal.classList.remove('hidden');
        quickAddQuestionInput.value = '';
        quickAddAnswerInput.value = '';
        newSubjectInput.value = '';
        newSubjectInput.classList.add('hidden');
        quickAddSubjectSelect.classList.remove('hidden');
        toggleNewSubjectInputBtn.textContent = 'Add New Subject';
        populateQuickAddSubjectSelect();
    }

    closeQuickAddModalBtn.addEventListener('click', () => {
        quickAddAtomModal.classList.add('hidden');
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
    });

    quickAddSubjectSelect.addEventListener('change', () => {
        if (quickAddSubjectSelect.value !== '') {
            newSubjectInput.classList.add('hidden');
            newSubjectInput.value = '';
            toggleNewSubjectInputBtn.textContent = 'Add New Subject';
        }
    });

    addAtomBtn.addEventListener('click', () => {
        let subjectId;
        let subjectName;
        if (!newSubjectInput.classList.contains('hidden') && newSubjectInput.value.trim()) {
            subjectName = newSubjectInput.value.trim();
            subjectId = subjectName.toLowerCase().replace(/\s/g, '-').replace(/[^a-z0-9-]/g, '');
            if (!mockData.subjects.find(s => s.id === subjectId)) {
                mockData.subjects.push({ id: subjectId, name: subjectName, color: "bg-blue-100", textColor: "text-blue-800", atoms: 0, lastReviewed: null });
            }
        } else {
            subjectId = quickAddSubjectSelect.value;
            if (!subjectId) {
                showNotification('Please select an existing subject or add a new one.', true);
                return;
            }
            subjectName = mockData.subjects.find(s => s.id === subjectId).name;
        }

        const question = quickAddQuestionInput.value.trim();
        const answer = quickAddAnswerInput.value.trim();

        if (!question || !answer) {
            showNotification('Please enter both a question/concept and an answer/explanation.', true);
            return;
        }

        const newAtom = {
            id: mockData.learningAtoms.length + 1,
            subjectId: subjectId,
            question: question,
            answer: answer,
            lastReviewed: new Date(),
            easeFactor: 2.5,
            interval: 0,
            repetitions: 0,
            nextReview: new Date() // Will be set on first review
        };
        mockData.learningAtoms.push(newAtom);

        saveUserData();
        showNotification('Learning Atom added successfully!');
        quickAddAtomModal.classList.add('hidden');
        unlockAchievement('first-atom'); // Check if first atom added unlocks achievement
        checkAchievements(); // Recalculate other achievements potentially
        render();
    });

    // --- Add Goal Modal Handlers ---
    addGoalBtn.addEventListener('click', () => {
        addGoalModal.classList.remove('hidden');
        goalNameInput.value = '';
        goalTargetValueInput.value = '';
        goalEndDateInput.value = '';
    });

    closeAddGoalModalBtn.addEventListener('click', () => {
        addGoalModal.classList.add('hidden');
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
            id: `goal-${mockData.user.learningGoals.length + 1}`,
            name: name,
            targetType: targetType,
            targetValue: targetValue,
            currentProgress: 0,
            endDate: endDate
        };
        mockData.user.learningGoals.push(newGoal);
        saveUserData();
        showNotification('Goal created successfully!');
        addGoalModal.classList.add('hidden');
        render();
    });

    // --- Reflection Modal Handlers ---
    function showReflectionModal() {
        reflectionModal.classList.remove('hidden');
        reflectionTextarea.value = '';
    }

    closeReflectionModalBtn.addEventListener('click', () => {
        reflectionModal.classList.add('hidden');
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
        reflectionModal.classList.add('hidden');
        navigate('dashboard');
    });

    // --- Global Search Functionality ---
    globalSearchInput.addEventListener('input', () => {
        const query = globalSearchInput.value.toLowerCase().trim();
        if (query.length > 2 || query.length === 0) {
            filterAndDisplaySearchResults(query);
        } else if (query.length <= 2 && !searchResultsModal.classList.contains('hidden')) {
            searchResultsModal.classList.add('hidden'); // Hide modal if query is too short
        }
    });

    closeSearchResultsModalBtn.addEventListener('click', () => {
        searchResultsModal.classList.add('hidden');
    });

    function filterAndDisplaySearchResults(query) {
        searchResultsContent.innerHTML = ''; // Clear previous results

        if (query.length === 0) {
            searchResultsModal.classList.add('hidden');
            return;
        }

        let foundResults = [];

        // Search in Learning Atoms
        const filteredAtoms = mockData.learningAtoms.filter(a =>
            a.question.toLowerCase().includes(query) ||
            a.answer.toLowerCase().includes(query) ||
            mockData.subjects.find(s => s.id === a.subjectId)?.name.toLowerCase().includes(query)
        );
        if (filteredAtoms.length > 0) {
            foundResults.push({ type: "heading", content: "Learning Atoms" });
            filteredAtoms.forEach(atom => {
                const subjectName = mockData.subjects.find(s => s.id === atom.subjectId)?.name || 'Unknown';
                foundResults.push({ type: "atom", title: atom.question, subtitle: `Subject: ${subjectName}`, details: atom.answer });
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
                if (item.title.toLowerCase().includes(query) || item.summary.toLowerCase().includes(query) || item.details.toLowerCase().includes(query)) {
                    learningHubMatches.push({ type: "learning-hub", title: item.title, subtitle: `Category: ${category.replace(/\b\w/g, l => l.toUpperCase())}`, itemData: item });
                }
            });
        }
        if (learningHubMatches.length > 0) {
            foundResults.push({ type: "heading", content: "Learning Hub Articles" });
            foundResults = foundResults.concat(learningHubMatches);
        }

        // Search in Glossary (New)
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

        // Search in Mind Maps (New)
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
                        searchResultsModal.classList.add('hidden'); // Close search modal
                        if (result.type === "atom") {
                            showDetailModal({ title: result.title, details: result.details });
                        } else if (result.type === "ai-material") {
                            showAIGeneratedMaterial(result.materialData); // Use existing AI material display function
                        } else if (result.type === "learning-hub") {
                            showDetailModal(result.itemData); // Use existing Learning Hub display function
                        } else if (result.type === "glossary-item") {
                            // For glossary, simply navigate to glossary view and filter/scroll to item
                            navigate('glossary');
                            setTimeout(() => {
                                glossarySearchInput.value = result.title;
                                renderGlossary();
                            }, 100); // Small delay for view transition
                        } else if (result.type === "mind-map-item") {
                            navigate('mind-map');
                            // Load the specific mind map
                            setTimeout(() => loadMindMap(result.mapData.id), 100);
                            unlockAchievement('first-mind-map');
                        }
                    });
                }
                searchResultsContent.appendChild(resultDiv);
            });
        }
        searchResultsModal.classList.remove('hidden');
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
        detailModal.classList.remove('hidden');
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
        detailModal.classList.add('hidden');
    });

    closeSubjectDetailModalBtn.addEventListener('click', () => {
        subjectDetailModal.classList.add('hidden');
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
    themeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            applyTheme(e.target.dataset.theme);
        });
    });

    /**
     * Applies the selected theme to the application.
     * @param {string} theme - The name of the theme ('light', 'dark', 'vibrant').
     */
    function applyTheme(theme) {
        if (appContainer) {
            appContainer.className = `flex h-screen theme-${theme}`;
        }
        themeButtons.forEach(btn => {
            if (btn.dataset.theme === theme) {
                btn.classList.add('border-accent-blue');
                btn.classList.remove('border-border-color');
            } else {
                btn.classList.remove('border-accent-blue');
                btn.classList.add('border-border-color');
            }
        });
        localStorage.setItem('auralearn_theme', theme);
        // Re-render charts on theme change to update colors
        if (appState.currentView === 'analytics') {
            renderAnalytics();
        }
        // Re-render mind map on theme change to update colors
        if (appState.currentView === 'mind-map') {
            drawMindMap();
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
                if (importedData.user && importedData.learningAtoms && importedData.subjects && importedData.aiMaterials) {
                    // Convert date strings back to Date objects
                    importedData.learningAtoms = importedData.learningAtoms.map(a => ({
                        ...a,
                        lastReviewed: new Date(a.lastReviewed),
                        nextReview: new Date(a.nextReview)
                    }));
                    // Ensure new SM-2 properties are set if missing in old imported data
                    importedData.learningAtoms.forEach(atom => {
                        atom.easeFactor = atom.easeFactor !== undefined ? atom.easeFactor : 2.5;
                        atom.interval = atom.interval !== undefined ? atom.interval : 0;
                        atom.repetitions = atom.repetitions !== undefined ? atom.repetitions : 0;
                    });
                    if (!importedData.user.srsIntervals) importedData.user.srsIntervals = initialUserData.srsIntervals;
                    if (!importedData.user.srsFactors) importedData.user.srsFactors = initialUserData.srsFactors;
                    if (!importedData.user.dailyStudyLogs) importedData.user.dailyStudyLogs = [];
                    if (!importedData.user.monthlyMasteryLogs) importedData.user.monthlyMasteryLogs = [];
                    if (!importedData.user.achievements) importedData.user.achievements = []; // New
                    if (!importedData.user.lastExportDate) importedData.user.lastExportDate = null; // New
                    if (!importedData.user.dailyChallengeCount) importedData.user.dailyChallengeCount = 0; // New
                    if (!importedData.user.lastChallengeClaimDate) importedData.user.lastChallengeClaimDate = null; // New

                    if (!importedData.glossary) importedData.glossary = []; // New
                    if (!importedData.mindMaps) importedData.mindMaps = []; // New


                    mockData = importedData;
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
        quizModal.classList.remove('hidden');
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
            optionButton.className = 'quiz-option-btn';
            optionButton.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
            optionButton.dataset.option = option;
            optionButton.addEventListener('click', () => selectQuizOption(optionButton));
            quizOptions.appendChild(optionButton);
        });

        appState.quizSession.selectedAnswer = null; // Reset selected answer
    }

    function selectQuizOption(selectedButton) {
        document.querySelectorAll('.quiz-option-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        selectedButton.classList.add('selected');
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

        // Disable options and submit button after answer
        document.querySelectorAll('.quiz-option-btn').forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.option === currentQuestion.correct_answer) {
                btn.classList.add('correct');
            } else if (btn.dataset.option === appState.quizSession.selectedAnswer) {
                btn.classList.add('incorrect');
            }
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
        quizModal.classList.add('hidden');
        appState.quizSession.isActive = false;
        appState.currentQuiz = null;
    });

    // --- Tutorial Logic ---
    function startTutorial(tourId) {
        appState.currentTutorial = mockData.tutorialContent[tourId];
        appState.currentTutorialStep = 0;

        // Clear existing highlights from previous tours
        document.querySelectorAll('[data-tutorial-highlight]').forEach(el => {
            el.classList.remove('border-4', 'border-accent-blue', 'rounded-lg', 'shadow-lg', 'z-50');
            el.removeAttribute('data-tutorial-highlight'); // Remove the marker attribute
        });


        if (appState.currentTutorial.isDetailedGuide) {
            // For detailed guides, just display content in the modal
            tutorialStepTitle.textContent = appState.currentTutorial.title;
            tutorialStepContent.innerHTML = appState.currentTutorial.content;
            tutorialPrevBtn.classList.add('hidden');
            tutorialNextBtn.classList.add('hidden');
            tutorialFinishBtn.classList.remove('hidden');
            tutorialStepModal.classList.remove('hidden');
        } else {
            // For interactive tours, navigate to the first step
            showTutorialStep();
            tutorialStepModal.classList.remove('hidden');
        }
    }

    function showTutorialStep() {
        const tour = appState.currentTutorial;
        const step = tour.steps[appState.currentTutorialStep];

        tutorialStepTitle.textContent = `${tour.title} - ${step.heading}`;
        tutorialStepContent.innerHTML = `<p>${step.content}</p>`;

        // Remove previous highlights
        document.querySelectorAll('[data-tutorial-highlighted]').forEach(el => {
            el.classList.remove('border-4', 'border-accent-blue', 'rounded-lg', 'shadow-lg', 'z-50');
            el.removeAttribute('data-tutorial-highlighted');
        });

        // Highlight the relevant element
        if (step.highlightElementId) {
            const targetElement = document.getElementById(step.highlightElementId);
            if (targetElement) {
                targetElement.classList.add('border-4', 'border-accent-blue', 'rounded-lg', 'shadow-lg', 'z-50');
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
        tutorialStepModal.classList.add('hidden');
        // Clear all highlights
        document.querySelectorAll('[data-tutorial-highlighted]').forEach(el => {
            el.classList.remove('border-4', 'border-accent-blue', 'rounded-lg', 'shadow-lg', 'z-50');
            el.removeAttribute('data-tutorial-highlighted');
        });
        // Reset tutorial state
        appState.currentTutorial = null;
        appState.currentTutorialStep = 0;
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

    // --- Mind Map Logic (New) ---
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
                mindMapCtx.strokeStyle = getComputedStyle(document.body).getPropertyValue('--connection-color');
                mindMapCtx.lineWidth = 2;
                mindMapCtx.stroke();
            }
        });

        // Draw nodes
        mindMapNodes.forEach(node => {
            mindMapCtx.beginPath();
            mindMapCtx.arc(node.x, node.y, 40, 0, Math.PI * 2); // Node circle
            mindMapCtx.fillStyle = getComputedStyle(document.body).getPropertyValue('--node-bg');
            mindMapCtx.fill();
            mindMapCtx.strokeStyle = node === selectedNode ? getComputedStyle(document.body).getPropertyValue('--node-selected-border') : getComputedStyle(document.body).getPropertyValue('--node-border');
            mindMapCtx.lineWidth = node === selectedNode ? 4 : 2;
            mindMapCtx.stroke();

            // Draw text
            mindMapCtx.fillStyle = getComputedStyle(document.body).getPropertyValue('--node-text');
            mindMapCtx.font = '14px Inter';
            mindMapCtx.textAlign = 'center';
            mindMapCtx.textBaseline = 'middle';
            mindMapCtx.fillText(node.text, node.x, node.y);
        });

        // Draw connecting line if a node is selected for connection
        if (connectingNode && selectedNode) {
            mindMapCtx.beginPath();
            mindMapCtx.moveTo(connectingNode.x, connectingNode.y);
            mindMapCtx.lineTo(selectedNode.x, selectedNode.y); // Draw to selected node for visualization
            mindMapCtx.strokeStyle = getComputedStyle(document.body).getPropertyValue('--accent-blue');
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
    });

    // Clear all nodes and connections
    mindMapClearAllBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear the entire mind map? This cannot be undone.')) {
            mindMapNodes = [];
            mindMapConnections = [];
            selectedNode = null;
            connectingNode = null;
            appState.mindMap.nodes = [];
            appState.mindMap.connections = [];
            drawMindMap();
            showNotification('Mind map cleared.');
        }
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

    // --- Glossary Logic (New) ---
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
                div.className = 'glossary-item';
                div.innerHTML = `
                    <h4>${item.keyword}</h4>
                    <p>${item.definition}</p>
                `;
                glossaryList.appendChild(div);
            });
        }
    }

    glossarySearchInput.addEventListener('input', renderGlossary);


    // --- Achievements Logic (New) ---
    function checkAchievements() {
        const masteredAtomsCount = mockData.learningAtoms.filter(atom => atom.repetitions >= 3 && atom.easeFactor >= 2.0).length;
        const totalAtomsAdded = mockData.learningAtoms.length;
        const totalAiNotes = mockData.aiMaterials.filter(m => m.type === 'note').length;
        const totalAiFlashcardsGenerated = mockData.aiMaterials.filter(m => m.type === 'notes-flashcards').length;
        const totalAiQuizzesGenerated = mockData.aiMaterials.filter(m => m.type === 'quiz').length;
        const totalAiKeywordsExtracted = mockData.aiMaterials.filter(m => m.type === 'keywords').length;
        const totalMindMapsCreated = mockData.mindMaps.length;

        // Mastered Atoms
        if (totalAtomsAdded >= 1 && !mockData.user.achievements.includes('first-atom')) {
            unlockAchievement('first-atom');
        }
        if (masteredAtomsCount >= 10) {
            unlockAchievement('mastery-beginner');
        }
        if (masteredAtomsCount >= 50) {
            unlockAchievement('mastery-intermediate');
        }

        // Streak Achievements
        if (mockData.user.streak >= 7) {
            unlockAchievement('streak-7-days');
        }
        if (mockData.user.streak >= 30) {
            unlockAchievement('streak-30-days');
        }

        // Daily Challenge Achievement (assuming 'daily-challenge-master' means completing the challenge N times, e.g., 10 times)
        // Note: The achievement description for 'daily-challenge-master' states "Complete 10 daily challenges."
        // We'll increment mockData.user.dailyChallengeCount when they successfully claim the challenge reward.
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
            localStorage.setItem('auralearn_atoms', JSON.stringify(mockData.learningAtoms.map(a => ({
                ...a,
                lastReviewed: a.lastReviewed.toISOString(),
                nextReview: a.nextReview.toISOString()
            }))));
            localStorage.setItem('auralearn_subjects', JSON.stringify(mockData.subjects));
            localStorage.setItem('auralearn_ai_materials', JSON.stringify(mockData.aiMaterials));
            localStorage.setItem('auralearn_glossary', JSON.stringify(mockData.glossary)); // New
            localStorage.setItem('auralearn_mind_maps', JSON.stringify(mockData.mindMaps)); // New
            // No need to save mockData.soundscapes or mockData.learningHubContent as they are static
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

    // Initialize new user properties if they don't exist in existing localStorage data
    if (!mockData.user.dailyStudyLogs) {
        mockData.user.dailyStudyLogs = [];
    }
    if (!mockData.user.monthlyMasteryLogs) {
        mockData.user.monthlyMasteryLogs = [];
    }
    if (!mockData.user.achievements) { // New
        mockData.user.achievements = [];
    }
    if (!mockData.user.lastExportDate) { // New
        mockData.user.lastExportDate = null;
    }
    if (!mockData.user.dailyChallengeCount) { // New
        mockData.user.dailyChallengeCount = 0;
    }
    if (!mockData.user.lastChallengeClaimDate) { // New
        mockData.user.lastChallengeClaimDate = null;
    }

    // Check and update monthly mastery logs
    const today = new Date();
    const currentMonthYear = `${today.getFullYear()}-${today.getMonth() + 1}`;
    const lastMonthLog = mockData.user.monthlyMasteryLogs[mockData.user.monthlyMasteryLogs.length - 1];

    if (!lastMonthLog || lastMonthLog.monthYear !== currentMonthYear) {
        // If it's a new month or no logs, add a new entry
        mockData.user.monthlyMasteryLogs.push({
            date: today.toISOString().split('T')[0],
            monthYear: currentMonthYear,
            masteredAtoms: mockData.learningAtoms.filter(atom => atom.repetitions >= 3 && atom.easeFactor >= 2.0).length
        });
        // Keep only last 7 months (6 prior + current)
        if (mockData.user.monthlyMasteryLogs.length > 7) {
            mockData.user.monthlyMasteryLogs = mockData.user.monthlyMasteryLogs.slice(-7);
        }
        saveUserData();
    } else {
        // Update current month's log (e.g., if mastered atoms changed during the month)
        lastMonthLog.masteredAtoms = mockData.learningAtoms.filter(atom => atom.repetitions >= 3 && atom.easeFactor >= 2.0).length;
    }

    // Initialize mockData for new sections if they are empty
    if (!mockData.glossary) mockData.glossary = [];
    if (!mockData.mindMaps) mockData.mindMaps = [];

    if (!appState.onboardingCompleted) {
        // Reset to initial defaults if onboarding hasn't been completed before
        mockData.user = JSON.parse(JSON.stringify(initialUserData));
        mockData.learningAtoms = [];
        mockData.subjects = [];
        mockData.aiMaterials = [];
        mockData.glossary = []; // Ensure new properties are reset too
        mockData.mindMaps = []; // Ensure new properties are reset too
        saveUserData();
        showOnboarding();
    } else {
        usernameInput.value = mockData.user.name;
        checkAchievements(); // Check achievements on load to update initial state
        render();
    }
});
