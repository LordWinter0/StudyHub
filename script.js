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
        analytics: document.getElementById('view-analytics'),
        study: document.getElementById('view-study'),
        focus: document.getElementById('view-focus'),
        'learning-hub': document.getElementById('view-learning-hub'),
        settings: document.getElementById('view-settings'),
        tutorial: document.getElementById('view-tutorial') // New Tutorial View
    };
    const startReviewBtn = document.getElementById('start-review-btn');
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

    // Notification Toast (Global)
    const notificationToast = document.getElementById('notification-toast');

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
    const searchResultsModal = document.getElementById('search-results-modal'); // New search results modal
    const closeSearchResultsModalBtn = document.getElementById('close-search-results-modal'); // New search results modal close button
    const searchResultsContent = document.getElementById('search-results-content'); // New search results content div

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
        // Default Spaced Repetition Intervals (in days, 0.5 means 12 hours)
        srsIntervals: { perfect: 7, good: 3, struggled: 1, forgot: 0.25 }, // 0.25 days = 6 hours
        // New SM-2 properties for each atom: ease factor, interval, repetitions
        srsFactors: { perfect: 2.5, good: 2.0, struggled: 1.5, forgot: 1.3 } // Base Ease Factors
    };

    let initialLearningAtoms = [];
    let initialSubjects = [];
    let initialAiMaterials = [];

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
        soundscapes: [
            { name: 'Rain', icon: '🌧️', file: 'rain.mp3' },
            { name: 'Forest', icon: '🌲', file: 'forest.mp3' },
            { name: 'Cafe', icon: '☕', file: 'cafe.mp3' },
            { name: 'Waves', icon: '🌊', file: 'waves.mp3' }
        ],
        // Learning Hub Content with LLM-expandable details
        learningHubContent: {
            auralearnBasics: [
                { title: "What are Learning Atoms?", summary: "The building blocks of your knowledge in AuraLearn.", details: "In AuraLearn, a 'Learning Atom' is the smallest, most fundamental piece of information or concept you want to master. Breaking down knowledge into these atomic units allows AuraLearn's intelligent Spaced Repetition System (SRS) to precisely track your mastery of each individual piece and schedule it for optimal review, ensuring you don't waste time on what you already know while reinforcing challenging concepts." },
                { title: "How Spaced Repetition Works", summary: "A science-backed method for long-term memory.", details: "AuraLearn's core is its Spaced Repetition System (SRS). After you review a 'Learning Atom', you rate how well you recalled it. Based on your rating, AuraLearn's algorithm calculates the optimal time to show you that atom again – just before you're likely to forget it. Easy concepts are reviewed less often, difficult ones more frequently. This adaptive scheduling is scientifically proven to move information from short-term to long-term memory much more efficiently than traditional cramming." },
                { title: "Your Mastery Score", summary: "Understanding your progress.", details: "Your 'Mastery Score' in AuraLearn reflects how deeply ingrained a 'Learning Atom' is in your long-term memory. It's dynamically updated based on your recall performance during study sessions. The higher your mastery, the less frequently an atom needs to be reviewed. This metric provides a clear, objective view of your knowledge retention over time across all your subjects." }
            ],
            techniques: [
                { title: "Spaced Repetition", summary: "Reviewing material at increasing intervals to optimize retention.", details: "This technique is a cornerstone of effective learning. It leverages the 'spacing effect,' which demonstrates that learning is more effective when study sessions are spaced out over time rather than crammed into a single session. AuraLearn's algorithm dynamically adjusts the review intervals for each 'learning atom' based on your recall performance. If you recall an atom easily, it's scheduled further into the future (e.g., 7 days); if you struggle, it comes back sooner (e.g., 1 day or even hours). This adaptive scheduling ensures you revisit information just as you're about to forget it, significantly enhancing long-term memory consolidation and reducing study time on already mastered concepts." },
                { title: "Active Recall", summary: "Testing yourself rather than passively re-reading.", details: "Active recall, also known as 'retrieval practice,' is a powerful study technique that involves actively pulling information from your memory rather than passively rereading notes or textbooks. When you practice active recall (e.g., through flashcards, self-quizzing, or explaining concepts aloud), you strengthen the neural pathways associated with that information, making it easier to retrieve in the future. This effortful retrieval process is much more effective for long-term retention than simply reviewing material. AuraLearn's flashcard system and 'Explain Concept' AI feature are designed to facilitate active recall, transforming passive study into active, effective learning." },
                { title: "Feynman Technique", summary: "Learn by teaching; simplify complex ideas.", details: "The Feynman Technique, named after Nobel laureate physicist Richard Feynman, is a method for deeply understanding concepts by attempting to explain them in simple terms. The process involves four steps: 1) Choose a concept and study it, 2) Explain it as if to a child, 3) Identify gaps in your explanation and go back to the source material, and 4) Organize and simplify your explanation until it's clear and concise. This technique forces you to identify areas where your understanding is superficial, encourages simplification, and solidifies your knowledge by making connections. It's highly practical for moving from memorization to true comprehension." },
                { title: "Interleaving", summary: "Mixing different topics/problems during study.", details: "Interleaving is a study strategy where you mix different types of problems or topics within a single study session, rather than 'blocking' (studying one topic exhaustively before moving to the next). For example, instead of practicing 20 algebra problems, then 20 geometry problems, you would mix them up. While initially it might feel harder because it requires your brain to constantly switch contexts, research shows interleaving leads to stronger long-term retention and better transfer of knowledge to new situations. It helps you discriminate between different concepts and choose the correct strategy for each problem type." },
                { title: "Elaboration", summary: "Connecting new info to existing knowledge.", details: "Elaboration is a powerful memory encoding strategy that involves actively trying to connect new information with what you already know, or by creating a deeper understanding of the new material. This can involve asking 'why?' or 'how?' questions about the material, thinking of real-world examples, creating analogies, or finding personal relevance. By building a richer and more interconnected web of knowledge, you create more retrieval pathways, making the information easier to recall and less likely to be forgotten. It turns rote memorization into meaningful learning." },
                { title: "Retrieval Practice", summary: "Actively pulling information out of your brain.", details: "Retrieval practice is the act of recalling learned information from memory. This is not just a way to assess knowledge, but a powerful learning strategy in itself. Every time you successfully retrieve a piece of information, the memory trace for that information becomes stronger and more stable. This means that activities like self-quizzing, using flashcards, writing summaries from memory, or attempting practice problems without looking at notes are incredibly effective. It's about effortful recall, which solidifies learning more than passive re-reading or highlighting." },
                { title: "Reading & Understanding Fast", summary: "Strategies to accelerate comprehension without losing depth.", details: "Efficient reading isn't just about speed; it's about accelerating comprehension without sacrificing depth. Key strategies include: 1) **Previewing:** Skim the title, headings, introduction, and conclusion to get a general idea. 2) **Questioning:** Formulate questions before and during reading. 3) **Active Engagement:** Highlight key points, take concise notes, and summarize sections in your own words. 4) **Chunking:** Read in phrases rather than word-by-word. 5) **Minimizing Subvocalization:** Try to reduce mentally 'saying' words as you read. These practices help you extract the most important information quickly and improve overall understanding." },
                { title: "Study Effectively", summary: "Optimizing your study time for maximum impact.", details: "Studying effectively is about maximizing the quality, not just the quantity, of your study time. Practical strategies include: 1) **Set Clear Goals:** Define what you want to achieve in each session. 2) **Active Learning:** Prioritize active recall, spaced repetition, and problem-solving over passive methods. 3) **Minimize Distractions:** Create a dedicated study environment free from interruptions. 4) **Take Strategic Breaks:** Use methods like Pomodoro (25 min work, 5 min break) to maintain focus and prevent burnout. 5) **Self-Assessment:** Regularly test yourself to identify knowledge gaps. 6) **Vary Study Methods:** Mix techniques to keep engagement high. These habits build consistent, high-impact learning." }
            ],
            memorization: [
                { title: "Mnemonic Devices", summary: "Using memory aids like acronyms or rhymes.", details: "Mnemonic devices are techniques that act as memory aids, helping you recall information that might otherwise be difficult to remember. They work by creating a vivid and often unusual connection between the new information and something you already know. Common types include: 1) **Acronyms:** Using the first letter of each word to form a new word (e.g., 'ROY G BIV' for the colors of the rainbow). 2) **Acrostics:** Creating a sentence where the first letter of each word represents an item to be remembered (e.g., 'My Very Educated Mother Just Served Us Noodles' for planets). 3) **Rhymes & Songs:** Setting information to a catchy tune or rhyme. 4) **Visual Imagery:** Creating a bizarre mental picture involving the items. These techniques provide strong retrieval cues for complex information." },
                { title: "Method of Loci (Memory Palace)", summary: "Associating items with locations in a familiar place.", details: "The Method of Loci, or 'Memory Palace,' is an ancient memorization technique that leverages our strong spatial memory. You associate items you want to remember with specific locations along a familiar mental 'journey' or within a well-known building (your 'palace'). To recall the information, you mentally 'walk' through your palace, encountering the items in their assigned locations. The more vivid and interactive your mental images are, the more effective this method becomes. It's particularly useful for remembering lists, sequences, or speeches, as it transforms abstract information into a concrete, navigable mental landscape." },
                { title: "Chunking", summary: "Grouping information into smaller, manageable units.", details: "Chunking is a cognitive strategy that involves organizing individual pieces of information into larger, more meaningful units or 'chunks.' Our working memory has a limited capacity (roughly 7 +/- 2 items). By grouping related items into a single chunk, you effectively expand this capacity. For example, remembering a 10-digit phone number as three chunks (e.g., 555-123-4567) is easier than remembering 10 individual digits. This technique is highly practical for memorizing long numbers, lists, or even complex concepts by breaking them down into digestible, interconnected components." },
                { title: "Visual Imagery", summary: "Creating vivid mental pictures to aid recall.", details: "Visual imagery for memorization involves forming strong, vivid mental pictures of the information you want to remember. The human brain is highly adept at processing visual information. The more bizarre, exaggerated, humorous, or interactive the mental image you create, the more memorable it becomes. This technique is especially effective for concrete nouns, but it can also be applied to abstract concepts by translating them into visual metaphors. For instance, picturing a specific historical event unfolding like a movie scene can embed it more firmly in your memory than simply reading about it." },
                { title: "Story Method", summary: "Weaving items into a narrative.", details: "The Story Method, or 'chaining,' is a mnemonic technique where you connect items you need to remember by creating a narrative or story that links them together. The story doesn't necessarily need to be logical or make perfect sense; in fact, often the more imaginative, unusual, or humorous the story, the easier it is to recall the sequence of items. Each item in your list becomes a 'character' or 'event' in your mental narrative. This method is particularly useful for remembering lists in a specific order, as the flow of the story provides a natural retrieval cue." },
                { title: "Remember What You Read", summary: "Strategies to retain information from texts.", details: "To effectively remember what you read, passive consumption isn't enough. Employ active reading techniques: 1) **SQ3R Method:** Survey, Question, Read, Recite, Review. 2) **Highlight & Annotate:** But do so selectively; don't just highlight everything. Add your own thoughts and questions in the margins. 3) **Take Summary Notes:** After each section, close the book and write down the main ideas in your own words. 4) **Active Recall:** Periodically quiz yourself on what you've just read. 5) **Connect to Prior Knowledge:** Relate new information to what you already know to create stronger memory links. These strategies transform reading into an active learning process." },
                { title: "Memorize Fast", summary: "Accelerated memorization techniques.", details: "To memorize quickly and effectively for long-term retention, combine multiple powerful techniques: 1) **Understand First:** Don't try to memorize what you don't understand. Deep comprehension makes memorization easier. 2) **Spaced Repetition:** Use tools like AuraLearn to schedule optimal review times. 3) **Active Recall:** Constantly test yourself. 4) **Chunking:** Break information into smaller, digestible units. 5) **Mnemonic Devices:** Employ acronyms, visual imagery, or the Method of Loci for complex lists. 6) **Teach Others:** Explaining a concept solidifies your own understanding and exposes gaps. Focus on these active, scientifically-backed methods rather than passive cramming." }
            ],
            biases: [
                { title: "Confirmation Bias", summary: "Seeking info that confirms existing beliefs.", details: "Confirmation bias is the tendency to seek out, interpret, and favor information that confirms your existing beliefs or hypotheses, while disproportionately ignoring or downplaying evidence that contradicts them. In the context of learning, this can be detrimental because it prevents objective evaluation of new information. For example, if you believe a certain study method is best, you might only notice successes and dismiss failures. To combat this, actively seek out diverse perspectives, consider alternative explanations, and specifically look for evidence that challenges your current understanding. AuraLearn's reflection tools can prompt you to consider different viewpoints." },
                { title: "Availability Heuristic", summary: "Overestimating based on ease of recall.", details: "The Availability Heuristic is a mental shortcut where we estimate the likelihood or frequency of an event based on how easily examples or instances come to mind. If something is easily recalled (e.g., due to recent exposure, vividness, or emotional impact), we tend to overestimate its prevalence. In learning, this might lead you to believe you understand a topic thoroughly because the most common examples are at the tip of your tongue, even if you lack a deeper, comprehensive grasp. To mitigate this, intentionally seek out less obvious or more challenging examples, and rely on systematic review rather than just what feels familiar." },
                { title: "Dunning-Kruger Effect", summary: "Mistakenly overestimating one's knowledge/ability.", details: "The Dunning-Kruger Effect is a cognitive bias in which people with low ability at a task overestimate their own ability, while those with high ability tend to underestimate their competence. In learning, this means novices might falsely believe they've mastered a subject after a superficial review, leading to insufficient study. Conversely, true experts might assume a task is easy for everyone, underestimating the effort required. AuraLearn's objective mastery tracking and spaced repetition system aim to provide concrete, unbiased feedback on your true knowledge gaps, helping you allocate study time effectively and overcome both overconfidence and undue self-doubt." },
                { title: "Anchoring Bias", summary: "Over-relying on the first piece of info encountered.", details: "Anchoring bias is the tendency to rely too heavily on the first piece of information offered (the 'anchor') when making decisions or judgments. Subsequent information is then interpreted relative to this initial anchor. In learning, an initial incorrect or limited understanding of a concept can become an 'anchor,' making it difficult to adjust your understanding later, even when presented with more accurate information. For instance, if you first learn a simplified version of a complex theory, that simplification might 'anchor' your understanding, hindering you from grasping its full nuances later. Be aware of your initial impressions and be willing to actively challenge and adjust them as new information comes in." },
                { title: "Hindsight Bias", summary: "'I knew it all along' phenomenon.", details: "Hindsight bias, often called the 'I-knew-it-all-along' effect, is the inclination, after an event has occurred, to see the event as having been predictable, despite there having been little or no objective basis for predicting it beforehand. This bias can impede effective learning from past mistakes because you falsely believe you already understood the outcome or the solution, reducing the perceived need for deeper analysis or corrective action. To combat this, actively record your predictions *before* an event or problem is solved, and compare them with the actual outcomes to realistically assess your initial knowledge and identify true learning opportunities." }
            ],
            productivity: [
                { title: "The 1-Hour Study Method", summary: "Structured, efficient study blocks.", details: "The 1-Hour Study Method is a structured time management technique designed to maximize focus and productivity. It involves dedicating **50 minutes to intense, uninterrupted, focused study**, immediately followed by a **10-minute break**. This method is similar to the Pomodoro Technique but allows for a slightly longer period of deep work, which can be beneficial for complex subjects requiring more sustained concentration. The short, scheduled breaks help prevent mental fatigue, improve retention, and keep you refreshed. It trains your brain to concentrate for set periods, making your study sessions much more efficient than unstructured, lengthy sessions prone to distraction." },
                { title: "Love Disciplining Yourself", summary: "Strategies for building self-discipline.", details: "Building self-discipline for learning isn't about harshness, but about consistent, small actions that build momentum. Key strategies include: 1) **Set Clear Micro-Goals:** Break large goals into tiny, achievable daily tasks. 2) **Establish Routines:** Consistently study at the same time and place to create strong habits. 3) **Eliminate Distractions:** Design your environment to make studying easier and distractions harder (e.g., put phone away). 4) **Practice Delayed Gratification:** Resist immediate temptations for long-term rewards. 5) **Reward Small Wins:** Acknowledge your efforts and progress to reinforce positive behavior. 6) **Understand Your 'Why':** Connect your discipline to your overarching learning goals and purpose. Discipline is a muscle that strengthens with consistent exercise." },
                { title: "Stop Phone Addiction", summary: "Practical steps to reduce digital distractions.", details: "Phone addiction severely impacts focus and learning. To combat it effectively: 1) **Set App Limits:** Use your phone's built-in features to limit time on distracting apps. 2) **Use 'Do Not Disturb' Modes:** Silence notifications during study blocks. 3) **Physical Separation:** Keep your phone in another room or out of sight during focused work. 4) **Scheduled Checks:** Designate specific times to check messages/social media. 5) **Find Alternatives:** Replace phone-checking habits with productive or relaxing break activities (e.g., light stretching, reading a physical book). 6) **Awareness:** Track your usage to understand triggers. Gradually reducing reliance helps regain focus and control over your attention." },
                { title: "6-Step Method for Catching Up", summary: "A structured approach to recover lost study time.", details: "When you fall behind, a structured approach is crucial to avoid overwhelm: 1) **Prioritize ruthlessly:** Identify the most critical topics or exams that need immediate attention. 2) **Break it down:** Divide the daunting backlog into very small, manageable chunks. 3) **Schedule dedicated blocks:** Allocate specific, uninterrupted time slots in your calendar just for catch-up work. 4) **Focus on active recall:** Use self-quizzing, flashcards, or practice problems to maximize efficiency. 5) **Leverage summaries:** If time is extremely short, focus on summaries, key concepts, and past exam questions rather than re-reading entire chapters. 6) **Seek help strategically:** Don't hesitate to ask specific questions from teachers or peers for clarity on difficult points. Avoid the urge to cram everything; focus on high-impact learning." },
                { title: "Use Second Brain", summary: "Organizing your knowledge outside your head.", details: "A 'Second Brain' is a digital system for organizing all your notes, ideas, and learning resources, essentially serving as an extension of your own memory. Tools like Notion, Evernote, or Obsidian allow you to: 1) **Capture:** Quickly save anything interesting or important you encounter. 2) **Organize:** Structure your notes by projects, areas of interest, resources, and archives. 3) **Distill:** Summarize and highlight key information. 4) **Express:** Use your organized knowledge to create, write, and learn more effectively. This system frees up your mental RAM, reduces cognitive load, and allows you to connect disparate ideas, fostering deeper learning and creativity." },
                { title: "5 Productivity Tips Teachers Never Teach", summary: "Unconventional but effective study habits.", details: "Beyond traditional advice, these 'secret' A+ study tips focus on deep learning and efficiency: 1) **Teach What You Learn:** Explaining a concept to someone else (or even an imaginary audience) exposes gaps in your understanding and solidifies knowledge. 2) **Strategic Breaks:** Go beyond just short breaks; take walks in nature, engage in light exercise, or meditate to refresh your mind. 3) **Change Your Study Environment:** Shifting locations can improve memory retention due to context-dependent learning. 4) **Use Background Music (Carefully):** Instrumental music, especially classical or lo-fi beats, can enhance focus for some, but lyrics can distract. 5) **Know Your Peak Performance Times:** Identify when you are most alert and focused, and schedule your most challenging tasks for those times. Experiment to discover what truly works for your unique learning style." },
                { title: "Manage Your Study Schedule", summary: "Creating and sticking to an effective learning routine.", details: "An effective study schedule is a roadmap to consistent progress. Practical steps: 1) **Assess Your Time:** Honestly evaluate how much time you *actually* have. 2) **Prioritize:** List subjects/tasks by importance and urgency. 3) **Allocate Time:** Assign specific blocks for each subject, including review and break times. Be realistic. 4) **Be Specific:** Instead of 'Study Math,' write 'Complete Ch 3 problems 1-10.' 5) **Build Flexibility:** Don't overschedule; leave buffer time for unexpected events. 6) **Review & Adapt:** Weekly, review your progress and adjust your schedule based on what worked and what didn't. Consistency in following a well-planned schedule is far more important than a perfect, but unrealistic, one." },
                { title: "Best Study Schedules for YOU!", summary: "Tailoring study plans to individual needs.", details: "There's no one-size-fits-all study schedule. The best one is tailored to *your* unique energy levels, commitments, and learning style. Consider: 1) **Chronotype:** Are you a morning lark or a night owl? Schedule your hardest tasks when you're most alert. 2) **Commitments:** Factor in classes, work, and personal obligations. 3) **Learning Style:** Do you prefer short, intense bursts (like Pomodoro) or longer, deep-dive sessions? 4) **Subject Needs:** Some subjects might require more frequent, shorter sessions, while others benefit from longer, focused blocks. Experiment with different structures (e.g., block scheduling, interleaved scheduling) and adjust until you find a rhythm that maximizes your focus, retention, and well-being. Flexibility and self-awareness are key." },
                { title: "Combat ADHD (Study Tips)", summary: "Strategies for studying with attention challenges.", details: "For individuals with ADHD, effective study strategies are crucial for maintaining focus and maximizing learning: 1) **Break Tasks into Micro-Chunks:** Instead of 'write essay,' think 'outline essay,' 'write intro paragraph,' etc. 2) **Use Visual Aids & Timers:** Visual timers can help manage time and transition. 3) **Incorporate Movement:** Fidgeting or short bursts of exercise can help release restless energy. 4) **Create a Distraction-Free Zone:** Minimize visual and auditory clutter; consider noise-cancelling headphones. 5) **Externalize Information:** Don't rely solely on memory; use notes, checklists, and reminders. 6) **Regular Breaks & Rewards:** Short, frequent breaks prevent burnout, and small rewards can boost motivation. 7) **Medication/Therapy:** These can be powerful tools when combined with behavioral strategies. Focus on structured, engaging, and multi-sensory approaches." },
                { title: "5 Most Effective Note-Taking Methods", summary: "Optimizing your notes for better retention and recall.", details: "Effective note-taking transforms passive listening into active learning. Here are 5 highly effective methods: 1) **Cornell Notes:** Divide your paper into sections for main notes, cues, and a summary. Promotes active recall. 2) **Sketchnoting:** Combines drawings, symbols, and text to represent ideas visually. Enhances engagement and memory. 3) **Mind Mapping:** Branching diagrams connect central ideas to sub-ideas, showing relationships. Great for brainstorming and complex topics. 4) **Linear Note-Taking:** Traditional bullet points, but with careful use of headings and subheadings. Good for structured information. 5) **Outlining Method:** Uses Roman numerals, letters, and numbers to organize notes hierarchically. Excellent for highly structured lectures or texts. Choose the method that best suits the content and your learning style, or combine elements from different methods." },
                { title: "5 Effective Study Methods to Boost Motivation", summary: "Techniques to stay engaged and energized.", details: "Maintaining study motivation can be challenging. Here are 5 effective methods: 1) **Set Small, Achievable Goals:** Instead of 'study for 3 hours,' aim for 'complete this section.' Success builds confidence. 2) **Reward Yourself:** Plan small, immediate rewards for completing tasks (e.g., a short break, a favorite snack). 3) **Find a Study Buddy/Group:** Accountability and collaborative learning can boost morale. 4) **Understand Your 'Why':** Connect your current study efforts to your long-term aspirations. Remind yourself of the bigger picture. 5) **Practice Positive Self-Talk:** Challenge negative thoughts; focus on your progress and capabilities. Remember, motivation isn't constant; it's something you actively cultivate." },
                { title: "Understand Better and Faster", summary: "Deepening comprehension with efficient techniques.", details: "To understand concepts better and faster, move beyond superficial engagement: 1) **Pre-Read/Scan:** Get a general idea before diving deep. 2) **Ask Questions:** Formulate 'why' and 'how' questions as you read/listen. 3) **Explain Aloud:** Articulate the concept in your own words, as if teaching someone. This quickly reveals gaps. 4) **Connect Ideas:** Actively link new information to what you already know. Use analogies. 5) **Summarize Actively:** After a section, summarize it from memory. 6) **Seek Clarification:** Don't let confusion linger; ask questions. These active strategies force deeper processing and lead to more robust, lasting understanding." },
                { title: "Focus When Feeling Tired", summary: "Tips for maintaining concentration when fatigued.", details: "Studying effectively when tired requires smart strategies: 1) **Short Power Naps:** A 10-20 minute nap can significantly boost alertness. 2) **Hydration & Nutrition:** Drink water and have a healthy snack. 3) **Light Physical Activity:** A quick walk or stretch can increase blood flow and energy. 4) **Change Tasks/Environment:** Switch to a less demanding task or move to a different study spot. 5) **Use Ambient Sounds:** Gentle background noise can sometimes help block out other distractions. 6) **Prioritize Sleep:** These are temporary fixes; consistent, adequate sleep is the ultimate foundation for sustained focus. If truly exhausted, prioritize rest over ineffective study." },
                { title: "5 Scientifically-Backed Study Methods to Build Discipline", summary: "Practical strategies for fostering self-control in learning.", details: "Building study discipline is about creating strong habits reinforced by science: 1) **Habit Stacking:** Attach a new study habit to an existing one (e.g., 'After I brush my teeth, I will review flashcards for 10 minutes'). 2) **Environmental Design:** Make your study environment conducive to focus and remove temptations (e.g., phone in another room). 3) **If-Then Plans:** Decide in advance how you'll handle common distractions or procrastination triggers ('If I feel like checking social media, then I will immediately do 5 push-ups'). 4) **Accountability Partners:** A study buddy or mentor can provide external motivation and structure. 5) **Progress Tracking:** Visually track your consistent study sessions (e.g., on a calendar or in AuraLearn's analytics) to see your progress and reinforce the habit loop. These methods leverage behavioral psychology to make discipline easier and more automatic." }
            ],
            examPrep: [
                { title: "How to Predict Exam Questions", summary: "Strategies to anticipate potential test content.", details: "Predicting exam questions is about strategic preparation: 1) **Analyze Past Exams:** Look for recurring themes, question formats, and highly tested concepts. 2) **Instructor Clues:** Pay close attention to topics emphasized repeatedly in lectures, readings, or homework assignments. What does your teacher say is 'important'? 3) **Review Learning Objectives/Syllabus:** These often directly state what you're expected to know. 4) **Transform Headings into Questions:** Convert chapter/section headings into questions you can answer. 5) **Practice Problem Patterns:** Understand the *types* of problems rather than just memorizing solutions. 6) **Connect Concepts:** Exam questions often test your ability to link different parts of the material. AuraLearn's AI prediction feature can further assist by generating potential questions based on your input." },
                { title: "A+ Study Tips Students Won't Tell", summary: "Insider tips for achieving top grades.", details: "Beyond the obvious, these 'secret' A+ study tips focus on deep learning and efficiency: 1) **Active Recall from Day One:** Don't just re-read; test yourself continuously. 2) **Teach to Learn:** Explain concepts to friends, family, or even pets. If you can teach it, you understand it. 3) **Explain Aloud:** Verbally articulating concepts forces coherent understanding. 4) **Vary Study Environments:** Studying in different locations can create more retrieval cues. 5) **Focus on Weaknesses:** Don't just review what you know; identify and actively target your knowledge gaps. 6) **Strategic Breaks & Rewards:** Use short, refreshing breaks and small rewards to maintain motivation and prevent burnout. These methods prioritize quality and active engagement." },
                { title: "Ace Your Science Exams", summary: "Specific strategies for excelling in science subjects.", details: "Acing science exams requires a specific approach: 1) **Understand Principles:** Don't just memorize facts; grasp the 'why' behind phenomena. 2) **Practice Problem-Solving Relentlessly:** Science is applied knowledge. Work through all practice problems available. 3) **Draw Diagrams & Visuals:** Illustrate processes, structures, and relationships. Label everything. 4) **Concept Maps:** Create visual maps to connect disparate ideas and see the 'big picture.' 5) **Consistent Review:** Science builds incrementally; regular spaced repetition is vital. Focus on active application of knowledge." },
                { title: "Study Less and Get Higher Grades", summary: "Efficiency strategies for academic success.", details: "This isn't about laziness; it's about smart, high-leverage studying. Strategies include: 1) **Prioritize High-Yield Topics:** Focus on concepts most likely to appear on exams or those fundamental to understanding the subject. 2) **Active Learning Over Passive:** Spend more time quizzing yourself, teaching, and problem-solving, and less time re-reading. 3) **Spaced Repetition:** Let AuraLearn's algorithm optimize your review schedule so you don't overstudy. 4) **Pre-reading:** Skim material before lectures to get context. 5) **Effective Note-Taking:** Use methods that encourage active processing (e.g., Cornell, mind maps). 6) **Quality Over Quantity:** A focused 30-minute session using active recall is more effective than 2 hours of distracted passive reading. It's about working smarter, not harder." },
                { title: "Ace Exams in Just 3 Days", summary: "High-intensity, focused exam preparation.", details: "While not ideal for deep retention, this is a crisis strategy for urgent exam prep: 1) **Triage Content:** Ruthlessly prioritize. Focus only on the absolute most important topics based on syllabus, past exams, and instructor cues. 2) **Active Recall ONLY:** No passive reading. Use flashcards, rapid self-quizzing, and practice problems immediately. 3) **Timed Practice:** Do full-length practice exams under strict time limits to build stamina and identify weak spots. 4) **Summarize Key Concepts:** Quickly write down everything you remember about crucial topics. 5) **Prioritize Sleep:** Even during crunch time, some sleep is better than none for cognitive function. This method is about maximizing short-term retrieval, but long-term mastery still requires spaced, consistent effort." },
                { title: "Decode Exam Questions Like a Pro", summary: "Understanding what questions are truly asking.", details: "Mastering exam questions goes beyond knowing the content; it's about understanding the question itself: 1) **Read Carefully, Twice:** Don't skim. Identify all keywords and constraints. 2) **Identify Command Words:** Words like 'compare,' 'contrast,' 'analyze,' 'explain,' 'evaluate,' 'describe,' 'define,' tell you *what* to do. 3) **Break Down Complex Questions:** If a question has multiple parts, deconstruct it into individual components. 4) **Rephrase in Your Own Words:** If unsure, rephrase the question simply to ensure you grasp its core meaning. 5) **Outline Your Answer:** Before writing, mentally (or physically) outline the key points you'll include, ensuring you address all parts of the prompt. This systematic approach prevents 'answer-what-you-know' instead of 'answer-what-is-asked'." }
            ],
            advanced: [
                { title: "Metacognition & Self-Regulation", summary: "Understanding and managing your own learning.", details: "Metacognition is 'thinking about thinking' – your awareness and understanding of your own thought processes. Self-regulation in learning is the ability to actively manage and direct your learning process. This involves: 1) **Planning:** Setting goals and choosing strategies. 2) **Monitoring:** Checking your comprehension and progress during learning. 3) **Evaluating:** Assessing the effectiveness of your strategies and your overall learning outcome. 4) **Adapting:** Adjusting your approach based on what you've learned from monitoring and evaluating. AuraLearn encourages metacognition through features like reflection prompts and detailed analytics, empowering you to become a more independent, strategic, and ultimately more effective learner." },
                { title: "Dual Coding Theory", summary: "Combining verbal and visual representations.", details: "Dual Coding Theory, proposed by Allan Paivio, suggests that information is processed and stored in memory through two distinct channels: one for verbal information (words, text) and another for non-verbal information (images, diagrams, sounds). Learning is significantly enhanced when both channels are engaged simultaneously. For example, when you read about a concept (verbal) and also visualize it or look at a diagram (non-verbal), you create two separate mental representations. This dual encoding makes the information more robust in memory and increases the likelihood of successful retrieval. Practical applications include using diagrams, illustrations, mind maps, or creating mental images while reading or listening." },
                { title: "Desirable Difficulties", summary: "Strategies that slow learning but aid long-term retention.", details: "Desirable difficulties are learning conditions that, while initially seeming to make learning harder or slower, actually lead to better long-term retention and transfer of knowledge. Examples include: 1) **Spaced Repetition:** Spreading out study sessions over time instead of cramming. 2) **Active Recall:** Testing yourself rather than just re-reading. 3) **Interleaving:** Mixing different types of problems or topics. 4) **Varied Practice:** Practicing skills in different contexts. These strategies introduce a beneficial 'struggle' that forces deeper cognitive processing and strengthens memory traces, making the learning more robust and flexible for future application. Embrace the effort, as it often signifies more effective learning." },
                { title: "Growth Mindset", summary: "Believing intelligence can be developed.", details: "A Growth Mindset, a concept developed by Carol Dweck, is the belief that your basic abilities, intelligence, and talents can be developed through dedication and hard work. In contrast to a Fixed Mindset (belief that abilities are static), a growth mindset sees challenges as opportunities for growth, effort as a path to mastery, and mistakes as learning experiences. Embracing this mindset leads to greater persistence in the face of setbacks, a love of learning, and a stronger drive to improve. For learners, cultivating a growth mindset means focusing on the process of learning, celebrating effort, and seeing failures not as an end, but as valuable feedback for improvement." },
                { title: "Pomodoro Technique", summary: "Structured time management for focus.", details: "The Pomodoro Technique is a time management method developed by Francesco Cirillo. It uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a 'pomodoro'. The steps are: 1) Choose a task. 2) Set a timer for 25 minutes. 3) Work on the task until the timer rings. 4) Take a 5-minute short break. 5) After four pomodoros, take a longer break (15-30 minutes). This technique helps improve focus, prevents burnout, and fosters a sense of urgency. It teaches your brain to concentrate for fixed periods and provides regular opportunities to rest and recharge, making long study sessions more manageable and effective." }
            ]
        },
        // Tutorial content data
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
                    <h3>What is Spaced Repetition?</h3>
                    <p>Spaced Repetition is a learning technique where you review material at increasing intervals over time. The goal is to revisit information just as you're about to forget it, which dramatically improves long-term retention compared to cramming.</p>
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
                    <p>This adaptive system ensures that concepts you find easy are reviewed less often, freeing up time for more challenging material.</p>
                `
            },
            'customizing-ai': {
                title: "Customizing AI Generation",
                isDetailedGuide: true,
                content: `
                    <h3>Getting the Best Results from AI Learning Studio</h3>
                    <p>The AI Learning Studio is powerful, but good input leads to great output:</p>
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
                `
            },
            'goal-setting': {
                title: "Effective Goal Setting",
                isDetailedGuide: true,
                content: `
                    <h3>Setting SMART Learning Goals</h3>
                    <p>Goals help you stay motivated and track progress. Use the SMART framework:</p>
                    <ul>
                        <li><strong>Specific:</strong> Clearly define what you want to achieve. (e.g., "Master 50 new JavaScript atoms" instead of "Learn JavaScript").</li>
                        <li><strong>Measurable:</strong> Ensure your goal can be tracked. AuraLearn helps with this by tracking mastered atoms and study time.</li>
                        <li><strong>Achievable:</strong> Set realistic goals that challenge you but are not impossible.</li>
                        <li><strong>Relevant:</strong> Your goals should align with your broader academic or personal development objectives.</li>
                        <li><strong>Time-bound:</strong> Give your goal a clear end date. This creates urgency.</li>
                    </ul>
                    <p><strong>In AuraLearn:</strong> Go to the Analytics view and click "+ Add Goal" to set your objectives.</p>
                `
            },
            'data-management': {
                title: "Data Backup & Import",
                isDetailedGuide: true,
                content: `
                    <h3>Protecting Your Learning Data</h3>
                    <p>AuraLearn stores all your data locally in your browser's storage. While convenient, it's a good practice to back up your data regularly.</p>
                    <ul>
                        <li><strong>Export Data:</strong>
                            <p>In the <strong>Settings</strong> view, click the "Export Data" button. This will download a JSON file containing all your user profile, learning atoms, subjects, and AI materials.</p>
                            <p class="text-sm text-secondary"><em>Recommendation: Store this file in a safe place, like cloud storage (Google Drive, Dropbox) or an external hard drive.</em></p>
                        </li>
                        <li><strong>Import Data:</strong>
                            <p>To restore your data, go to <strong>Settings</strong> and click "Import Data". Select the JSON file you previously exported. This will overwrite your current AuraLearn data with the imported data.</p>
                            <p class="text-red-500 text-sm"><strong>Warning:</strong> Importing data will replace your current app data. Only import data you trust and intend to use.</p>
                        </li>
                    </ul>
                    <p>Regular backups ensure your hard work is never lost!</p>
                `
            }
        }
    };
    let appState = {
        currentView: localStorage.getItem('auralearn_currentView') || 'dashboard',
        studySession: { isActive: false, queue: [], currentIndex: 0, atomsReviewedInSession: 0 },
        pomodoro: { timerId: null, timeLeft: 25 * 60, isRunning: false, mode: 'work', audio: null }, // Added audio property
        onboardingCompleted: localStorage.getItem('auralearn_onboardingCompleted') === 'true',
        currentTheme: localStorage.getItem('auralearn_theme') || 'light',
        learningHubCategory: 'auralearnBasics',
        aiInputMode: 'text', // 'text' or 'topic'
        currentQuiz: null, // Stores the active quiz object
        quizSession: { isActive: false, questions: [], currentIndex: 0, score: 0, selectedAnswer: null, answers: [] }, // Stores quiz session state
        currentTutorial: null, // Stores the active tutorial data (e.g., 'dashboard' tour or 'srs-deep-dive' guide)
        currentTutorialStep: 0, // Current step index within the active tutorial
        activeSoundscapeAudio: null // To manage single audio playback for soundscapes
    };

    // Gemini API configuration (placeholder - Canvas will provide this at runtime)
    const apiKey = "AIzaSyBVDc_pdjpvbv4nzcKnxmRPLiKCu7BXF2I";

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
            // If the interval is in hours (e.g., 0.5 days = 12 hours), keep it that way for the first review
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
        if (appState.currentView === 'analytics') renderAnalytics();
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
                    const atomId = parseInt(reviewBtn.dataset.atomId);
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
        } else {
            claimChallengeBtn.classList.add('hidden');
        }
        saveUserData();
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
            contentHtml = '<h4 class="font-semibold text-primary mb-2">Keywords & Definitions:</h4>';
            aiMaterial.content.forEach(item => {
                contentHtml += `<div class="mb-3 p-2 border list-item-themed rounded-md"><p class="font-medium text-primary">${item.keyword}:</p><p>${item.definition}</p></div>`;
            });
        } else if (aiMaterial.type === 'exam-questions') {
            contentHtml = '<h4 class="font-semibold text-primary mb-2">Predicted Exam Questions:</h4>';
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

        switch (type) {
            case 'note':
                outputTitle = 'AI Notes';
                savedContentTitle = `AI Notes on: ${content.substring(0, 50)}${content.length > 50 ? '...' : ''}`;
                prompt = `Generate concise, organized notes on the topic or from the text: "${content}". Format the notes as HTML using <ul> and <li> tags for bullet points and <strong> tags for bolding key terms. Ensure the entire response is valid HTML. Focus only on key points and important information, designed specifically to help teach and retain the info with no fluff or unnecessary details. Avoid introductions, conclusions, or conversational filler.`;
                responseSchema = { type: "STRING" };
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
                prompt = `Provide a concise, key-point summary of the following text/topic: "${content}". Use HTML paragraphs and <strong> tags for important terms. Keep it brief but informative. Avoid conversational filler.`;
                responseSchema = { type: "STRING" };
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
                    } else {
                        const newMaterial = {
                            id: mockData.aiMaterials.length + 1,
                            type: type,
                            title: savedContentTitle,
                            content: generatedContent,
                            timestamp: new Date().toISOString(),
                            subjectId: subjectId
                        };
                        mockData.aiMaterials.push(newMaterial);
                        showNotification(`${outputTitle} generated and saved to 'AI Materials'!`);
                    }

                    // Display generated content in the output area regardless of where it's saved
                    if (type === 'note' || type === 'summary') {
                        aiOutputContentDisplay.innerHTML = generatedContent;
                    } else if (type === 'quiz') {
                        aiOutputContentDisplay.innerHTML = '<h4 class="font-semibold text-primary mb-2">Generated Quiz:</h4>';
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
                        aiOutputContentDisplay.innerHTML = '<h4 class="font-semibold text-primary mb-2">Extracted Keywords:</h4>';
                        generatedContent.forEach(item => {
                            const keywordItem = document.createElement('div');
                            keywordItem.className = 'p-3 rounded-lg border list-item-themed';
                            keywordItem.innerHTML = `<p class="font-semibold text-primary">${item.keyword}:</p><p>${item.definition}</p>`;
                            aiOutputContentDisplay.appendChild(keywordItem);
                        });
                    } else if (type === 'exam-questions') {
                        aiOutputContentDisplay.innerHTML = '<h4 class="font-semibold text-primary mb-2">Predicted Exam Questions:</h4>';
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
        // Example: Track minutes studied today
        const today = new Date().toISOString().split('T')[0];
        if (mockData.user.dailyStudyLogs) {
            mockData.user.dailyStudyLogs.forEach(log => {
                if (log.date.startsWith(today)) { // Assuming daily logs are for the current day
                    const dayOfWeek = new Date(log.date).getDay(); // 0 for Sunday, 1 for Monday
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
        const growthData = [0, 0, 0, 0, 0, 0]; // Last 6 months
        if (mockData.user.monthlyMasteryLogs) {
            const currentMonth = new Date().getMonth(); // 0-11
            mockData.user.monthlyMasteryLogs.forEach(log => {
                const logDate = new Date(log.date);
                const monthDiff = (currentMonth - logDate.getMonth() + 12) % 12;
                if (monthDiff < 6) {
                    growthData[5 - monthDiff] = log.masteredAtoms; // Populate data backwards
                }
            });
        }
        growthData[5] = masteredCount; // Always show current month's mastered count

        const growthCtx = document.getElementById('growthChart').getContext('2d');
        charts.growth = new Chart(growthCtx, {
            type: 'line',
            data: {
                labels: ['6M Ago', '5M Ago', '4M Ago', '3M Ago', '2M Ago', 'Last Month', 'Current'], // Updated labels
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
                if (goal.targetType === 'atoms') {
                    currentProgressValue = masteredCount; // Use actual mastered count
                } else if (goal.targetType === 'time') {
                    // Sum up study time from last 7 days for 'weekly study time' target type
                    const now = new Date();
                    const last7Days = new Date(now.setDate(now.getDate() - 7)).toISOString().split('T')[0];
                    currentProgressValue = (mockData.user.dailyStudyLogs || [])
                        .filter(log => log.date >= last7Days)
                        .reduce((sum, log) => sum + log.minutes, 0) / 60; // Convert to hours
                }

                const progress = Math.min(100, (currentProgressValue / goal.targetValue) * 100);
                const goalDiv = document.createElement('div');
                goalDiv.className = 'p-4 rounded-lg border list-item-themed';
                goalDiv.innerHTML = `
                    <div class="flex justify-between items-center mb-2">
                        <h4 class="font-semibold text-primary">${goal.name}</h4>
                        <span class="text-sm text-secondary">${new Date(goal.endDate).toLocaleDateString()}</span>
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
     */
    function startStudySession() {
        appState.studySession.isActive = true;
        appState.studySession.queue = getDailyQueue();
        appState.studySession.currentIndex = 0;
        appState.studySession.atomsReviewedInSession = 0;

        if (appState.studySession.queue.length === 0) {
            showNotification('Your daily review queue is empty! Import some content to get started.', true);
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
        const currentLog = mockData.user.dailyStudyLogs.find(log => log.date === today);
        if (currentLog) {
            currentLog.minutes += appState.studySession.atomsReviewedInSession * 2; // Rough estimate: 2 mins per atom
        } else {
            mockData.user.dailyStudyLogs.push({ date: today, minutes: appState.studySession.atomsReviewedInSession * 2 });
        }

        saveUserData();
    }

    // Study session button event listeners
    startReviewBtn.addEventListener('click', startStudySession);
    showAnswerBtn.addEventListener('click', () => { flashcardContainer.classList.add('flipped'); });

    recallButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const quality = parseInt(e.currentTarget.dataset.rating);
            const currentAtom = appState.studySession.queue[appState.studySession.currentIndex];

            // Update SM-2 properties for the current atom
            const { nextReview, newInterval, newEaseFactor, newRepetitions } = calculateNextReviewDateSM2(
                currentAtom.lastReviewed, quality, currentAtom.easeFactor, currentAtom.interval, currentAtom.repetitions
            );

            currentAtom.lastReviewed = new Date();
            currentAtom.nextReview = nextReview;
            currentAtom.interval = newInterval;
            currentAtom.easeFactor = newEaseFactor;
            currentAtom.repetitions = newRepetitions;

            // Update total mastered atoms count (if an atom reaches mastery status)
            const wasMastered = currentAtom.repetitions >= 3 && currentAtom.easeFactor >= 2.0;
            if (!wasMastered && newRepetitions >= 3 && newEaseFactor >= 2.0) {
                 // Atom just became mastered
            } else if (wasMastered && (newRepetitions < 3 || newEaseFactor < 2.0)) {
                // Atom was mastered but now recalled poorly (lost mastery)
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
            mockData.user.lastChallengeDate = null; // Forces new streak check or challenge reset tomorrow
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

    function populateQuickAddSubjectSelect() {
        quickAddSubjectSelect.innerHTML = '<option value="">Select a Subject</option>';
        mockData.subjects.forEach(subject => {
            const option = document.createElement('option');
            option.value = subject.id;
            option.textContent = subject.name;
            quickAddSubjectSelect.appendChild(option);
        });
    }

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
        if (item.details.length < 200 || !item.llm_expanded) {
            try {
                const prompt = `Provide a detailed, comprehensive, and practical explanation of the concept or technique "${item.title}". The explanation should be informative, easy to understand, and include actionable insights or real-world relevance where appropriate. Use clear paragraphs, subheadings (h3, h4 tags), and HTML unordered lists (<ul>, <li>) for key points. Use <strong> tags for important terms. Do not include any conversational filler.`;

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

        // Highlight the relevant element
        document.querySelectorAll('[data-tutorial-highlight]').forEach(el => el.classList.remove('border-4', 'border-accent-blue', 'rounded-lg', 'shadow-lg', 'z-50'));
        if (step.highlightElementId) {
            const targetElement = document.getElementById(step.highlightElementId);
            if (targetElement) {
                targetElement.classList.add('border-4', 'border-accent-blue', 'rounded-lg', 'shadow-lg', 'z-50');
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
        document.querySelectorAll('[data-tutorial-highlight]').forEach(el => el.classList.remove('border-4', 'border-accent-blue', 'rounded-lg', 'shadow-lg', 'z-50'));
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

    // Initialize daily study logs and monthly mastery logs if they don't exist
    if (!mockData.user.dailyStudyLogs) {
        mockData.user.dailyStudyLogs = [];
    }
    if (!mockData.user.monthlyMasteryLogs) {
        mockData.user.monthlyMasteryLogs = [];
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
        // Keep only last 6 months
        if (mockData.user.monthlyMasteryLogs.length > 6) {
            mockData.user.monthlyMasteryLogs = mockData.user.monthlyMasteryLogs.slice(-6);
        }
        saveUserData();
    } else {
        // Update current month's log (e.g., if mastered atoms changed during the month)
        lastMonthLog.masteredAtoms = mockData.learningAtoms.filter(atom => atom.repetitions >= 3 && atom.easeFactor >= 2.0).length;
    }


    if (!appState.onboardingCompleted) {
        // Reset to initial defaults if onboarding hasn't been completed before
        mockData.user = JSON.parse(JSON.stringify(initialUserData));
        mockData.learningAtoms = [];
        mockData.subjects = [];
        mockData.aiMaterials = [];
        saveUserData();
        showOnboarding();
    } else {
        usernameInput.value = mockData.user.name;
        render();
    }
});
