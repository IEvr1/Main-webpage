/**
 * Generates src/i18n/ai-score-locales.ts with all ConsultLang translations.
 * Run: node scripts/generate-ai-score-locales.mjs
 */
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

/** @typedef {typeof en} AiScoreLocale */

const en = {
  assessmentLanguage: 'Assessment language',
  quizTitle: 'Assessment',
  quizSubtitle:
    'Choose the answer that best matches your business today — honesty beats optimism.',
  step: 'Question {current} of {total}',
  progressAria: 'Progress: question {current} of {total}',
  back: 'Back',
  next: 'Next',
  seeResults: 'See my score',
  dim: {
    strategy: 'Strategy & use cases',
    data: 'Data readiness',
    people: 'People & skills',
    process: 'Process & operations',
    tech: 'Tech & integration',
    governance: 'Governance & change',
  },
  questions: {
    strategy_use_cases: {
      q: 'Have you identified concrete business problems where AI could help?',
      a: [
        'Not yet — we are still exploring the idea of AI.',
        'We have a shortlist of ideas, but nothing prioritized.',
        'We have 1–2 clear use cases tied to a business goal.',
        'We have a prioritized roadmap of AI use cases with owners.',
      ],
    },
    strategy_roi: {
      q: 'How do you think about return on AI investment?',
      a: [
        'We have not defined success metrics yet.',
        'We expect savings, but without numbers or a timeline.',
        'We have rough cost/benefit estimates for a pilot.',
        'We track ROI with clear KPIs and a stop/continue rule.',
      ],
    },
    strategy_pilot: {
      q: 'Have you run any AI pilot or proof-of-concept?',
      a: [
        'No pilots yet — only informal experiments at most.',
        'We tried a tool casually, without a defined pilot scope.',
        'We ran at least one scoped pilot with clear success criteria.',
        'We have completed pilots and moved at least one into production use.',
      ],
    },
    data_location: {
      q: 'Where does your critical business data live today?',
      a: [
        'Mostly spreadsheets, email, and paper — hard to find.',
        'In a few systems, but they do not talk to each other.',
        'Central tools cover most operations, with some gaps.',
        'Data is centralized, accessible, and largely integrated.',
      ],
    },
    data_quality: {
      q: 'How reliable is the data you would feed into AI?',
      a: [
        'Often incomplete, duplicated, or outdated.',
        'Usable for humans, but messy for automation.',
        'Mostly clean for our main workflows; some cleanup needed.',
        'Documented, validated, and trusted for decisions.',
      ],
    },
    data_access: {
      q: 'How easy is it for the right people to access the data they need?',
      a: [
        'Access is slow, manual, or depends on one person.',
        'Access works, but requests and permissions are often delayed.',
        'Most decision-makers can get the data they need within days.',
        'Authorized staff get timely, controlled access to the data they need.',
      ],
    },
    people_ownership: {
      q: 'Who would own an AI initiative inside your business?',
      a: [
        'Nobody — we would rely entirely on a vendor.',
        'Someone interested, but with no dedicated time.',
        'A named owner who can spend part of their week on it.',
        'Clear internal ownership with capacity and decision rights.',
      ],
    },
    people_skills: {
      q: 'How familiar is your team with AI tools?',
      a: [
        'Little to no practical experience.',
        'A few people use ChatGPT/Copilot casually.',
        'Team members regularly use AI in daily work.',
        'We can evaluate, configure, and improve AI tools ourselves.',
      ],
    },
    people_capacity: {
      q: 'Does your team have capacity to adopt a new AI tool without disrupting daily work?',
      a: [
        'Everyone is overloaded — no bandwidth for change.',
        'Someone could try, but only after hours or on the side.',
        'We can free limited time for a focused adoption period.',
        'We plan capacity for training, rollout, and ongoing ownership.',
      ],
    },
    process_visibility: {
      q: 'Are your key workflows documented and measurable?',
      a: [
        "They live in people's heads — little is written down.",
        'Some SOPs exist, but they are incomplete or outdated.',
        'Main workflows are documented with basic metrics.',
        'Processes are mapped, measured, and regularly reviewed.',
      ],
    },
    process_bottlenecks: {
      q: 'Do you know where time or money is lost in operations?',
      a: [
        'We sense issues, but cannot point to specific bottlenecks.',
        'We know a few pain points from complaints or overtime.',
        'We have identified high-volume, repetitive bottlenecks.',
        'We measure exception rates and cost of delays by process.',
      ],
    },
    process_exceptions: {
      q: 'How often do key processes rely on manual judgment or one-off exceptions?',
      a: [
        'Most work is judgment-heavy or handled case by case.',
        'Many steps are routine, but exceptions are frequent and undocumented.',
        'Core path is clear; exceptions are known and handled in a defined way.',
        'Exceptions are measured, categorized, and continuously reduced.',
      ],
    },
    tech_integration: {
      q: 'Can your current systems connect to new tools via APIs or exports?',
      a: [
        'Mostly closed/legacy systems with manual copy-paste.',
        'Some CSV/export options; limited live integrations.',
        'Key systems have APIs or proven integration paths.',
        'API-first stack with reliable integrations already in use.',
      ],
    },
    tech_stack: {
      q: 'How modern is your day-to-day technology stack?',
      a: [
        'Heavy reliance on paper, phone, and disconnected tools.',
        'Mix of older software and a few cloud tools.',
        'Mostly cloud/SaaS tools covering core operations.',
        'Modern, cloud-based stack with automation already running.',
      ],
    },
    tech_security: {
      q: 'How do you handle access and security for business systems and tools?',
      a: [
        'Shared logins or informal access are common.',
        'Basic passwords exist, but policies are loose or inconsistent.',
        'Role-based access and basic security practices are in place.',
        'Access, audit, and vendor/security requirements are actively managed.',
      ],
    },
    governance_leadership: {
      q: 'How does leadership approach AI adoption?',
      a: [
        'Skeptical or not engaged.',
        'Curious, but no sponsor or mandate yet.',
        'An executive sponsor supports a first project.',
        'Leadership actively drives AI with budget and change plans.',
      ],
    },
    governance_risk: {
      q: 'Have you discussed data privacy, customer consent, and AI risk?',
      a: [
        'Not discussed at all.',
        'Informal awareness — no written rules.',
        'Basic guidelines for who can use AI and what data is allowed.',
        'Written policies covering privacy, access, and vendor use.',
      ],
    },
    governance_change: {
      q: 'How does your organization handle process change when new tools arrive?',
      a: [
        'Changes happen ad hoc; people resist or invent workarounds.',
        'We announce tools, but with little training or follow-up.',
        'We plan rollout with training and a clear owner for adoption.',
        'Change is managed with communication, training, feedback, and iteration.',
      ],
    },
  },
  resultsTitle: 'Your AI Readiness Score',
  resultsSubtitle:
    'Instant results — then tell us if you want a custom AI solution built around your weakest areas.',
  dimensionsTitle: 'Score by dimension',
  gapsTitle: 'Likely inefficiencies to fix first',
  ctaRequest: 'Request a custom AI solution',
  ctaCustom: 'Learn about custom AI tools',
  ctaRetake: 'Retake assessment',
  band: {
    red: {
      label: 'Not ready yet',
      desc: 'Foundations are thin. Focus on one clear use case, cleaner data, and an internal owner before a large AI spend.',
    },
    amber: {
      label: 'Partially ready',
      desc: 'You have a base to build on. Close the weakest gaps first, then run a focused pilot with measurable goals.',
    },
    green: {
      label: 'AI-ready',
      desc: 'You are in a strong position to adopt or scale AI. Prioritize production use cases and keep governance tight.',
    },
  },
  rec: {
    strategy:
      'Name one high-impact process and define what success looks like in numbers before buying tools.',
    data: 'Consolidate the data for your top workflow — if AI cannot access clean inputs, projects stall.',
    people:
      'Assign an internal owner with weekly capacity; vendor-only projects rarely stick.',
    process:
      'Document and measure the bottleneck you want AI to fix — volume, time, and exception rate.',
    tech: 'Confirm APIs or reliable exports from the systems AI would need to connect to.',
    governance:
      'Get leadership sponsorship and basic rules for data use, privacy, and customer impact.',
  },
  contactIntro:
    'I completed the AI Readiness Score and would like to discuss a custom AI solution.',
  contactScoreLine: 'Overall score: {score}/100',
  contactBandLine: 'Band: {band}',
  contactGapsIntro: 'Weakest areas:',
  contactGapLine: '{name} ({score}/100)',
};

/** Full locale overrides keyed by ConsultLang. Missing keys fall back to English at runtime. */
const locales = {
  en,
  el: {
    assessmentLanguage: 'Γλώσσα αξιολόγησης',
    quizTitle: 'Αξιολόγηση',
    quizSubtitle:
      'Επιλέξτε την απάντηση που ταιριάζει καλύτερα στην επιχείρησή σας σήμερα — η ειλικρίνεια μετράει περισσότερο από την αισιοδοξία.',
    step: 'Ερώτηση {current} από {total}',
    progressAria: 'Πρόοδος: ερώτηση {current} από {total}',
    back: 'Πίσω',
    next: 'Επόμενη',
    seeResults: 'Δείτε το σκορ',
    dim: {
      strategy: 'Στρατηγική & περιπτώσεις χρήσης',
      data: 'Ετοιμότητα δεδομένων',
      people: 'Άνθρωποι & δεξιότητες',
      process: 'Διαδικασίες & λειτουργία',
      tech: 'Τεχνολογία & ενσωμάτωση',
      governance: 'Διακυβέρνηση & αλλαγή',
    },
    questions: {
      strategy_use_cases: {
        q: 'Έχετε εντοπίσει συγκεκριμένα επιχειρηματικά προβλήματα όπου μπορεί να βοηθήσει το AI;',
        a: [
          'Όχι ακόμα — εξερευνούμε ακόμα την ιδέα του AI.',
          'Έχουμε λίστα ιδεών, αλλά χωρίς προτεραιότητες.',
          'Έχουμε 1–2 ξεκάθαρες περιπτώσεις χρήσης συνδεδεμένες με στόχο.',
          'Έχουμε οδικό χάρτη AI με προτεραιότητες και υπεύθυνους.',
        ],
      },
      strategy_roi: {
        q: 'Πώς σκέφτεστε την απόδοση επένδυσης σε AI;',
        a: [
          'Δεν έχουμε ορίσει ακόμη μετρήσεις επιτυχίας.',
          'Περιμένουμε εξοικονόμηση, χωρίς αριθμούς ή χρονοδιάγραμμα.',
          'Έχουμε πρόχειρες εκτιμήσεις κόστους/οφέλους για πιλοτικό.',
          'Παρακολουθούμε ROI με KPIs και κανόνα συνέχισης/διακοπής.',
        ],
      },
      strategy_pilot: {
        q: 'Έχετε τρέξει κάποιο πιλοτικό AI ή proof-of-concept;',
        a: [
          'Όχι ακόμα — το πολύ άτυπα πειράματα.',
          'Δοκιμάσαμε ένα εργαλείο άτυπα, χωρίς ορισμένο scope.',
          'Τρέξαμε τουλάχιστον ένα πιλοτικό με ξεκάθαρα κριτήρια επιτυχίας.',
          'Έχουμε ολοκληρώσει πιλοτικά και μεταφέραμε τουλάχιστον ένα σε παραγωγική χρήση.',
        ],
      },
      data_location: {
        q: 'Πού βρίσκονται σήμερα τα κρίσιμα επιχειρηματικά σας δεδομένα;',
        a: [
          'Κυρίως υπολογιστικά φύλλα, email και χαρτί — δύσκολο να βρεθούν.',
          'Σε λίγα συστήματα που δεν επικοινωνούν μεταξύ τους.',
          'Κεντρικά εργαλεία καλύπτουν τα περισσότερα, με κάποια κενά.',
          'Τα δεδομένα είναι κεντρικά, προσβάσιμα και σε μεγάλο βαθμό ενσωματωμένα.',
        ],
      },
      data_quality: {
        q: 'Πόσο αξιόπιστα είναι τα δεδομένα που θα τροφοδοτούσατε σε AI;',
        a: [
          'Συχνά ελλιπή, διπλότυπα ή παρωχημένα.',
          'Χρήσιμα για ανθρώπους, αλλά ακατάστατα για αυτοματισμό.',
          'Σχετικά καθαρά για τις κύριες ροές· χρειάζεται κάποιος καθαρισμός.',
          'Τεκμηριωμένα, επικυρωμένα και αξιόπιστα για αποφάσεις.',
        ],
      },
      data_access: {
        q: 'Πόσο εύκολο είναι για τους σωστούς ανθρώπους να έχουν πρόσβαση στα δεδομένα που χρειάζονται;',
        a: [
          'Η πρόσβαση είναι αργή, χειροκίνητη ή εξαρτάται από ένα άτομο.',
          'Η πρόσβαση υπάρχει, αλλά αιτήματα και δικαιώματα καθυστερούν συχνά.',
          'Οι περισσότεροι decision-makers παίρνουν τα δεδομένα εντός ημερών.',
          'Το εξουσιοδοτημένο προσωπικό έχει έγκαιρη, ελεγχόμενη πρόσβαση στα δεδομένα που χρειάζεται.',
        ],
      },
      people_ownership: {
        q: 'Ποιος θα αναλάμβανε μια πρωτοβουλία AI μέσα στην επιχείρηση;',
        a: [
          'Κανείς — θα βασιζόμασταν εξ ολοκλήρου σε προμηθευτή.',
          'Κάποιος ενδιαφερόμενος, χωρίς διαθέσιμο χρόνο.',
          'Ονομαστικός υπεύθυνος που μπορεί να αφιερώσει μέρος της εβδομάδας.',
          'Ξεκάθαρη εσωτερική ιδιοκτησία με χρόνο και δικαίωμα αποφάσεων.',
        ],
      },
      people_skills: {
        q: 'Πόσο εξοικειωμένη είναι η ομάδα σας με εργαλεία AI;',
        a: [
          'Ελάχιστη έως καμία πρακτική εμπειρία.',
          'Λίγοι χρησιμοποιούν ChatGPT/Copilot περιστασιακά.',
          'Μέλη της ομάδας χρησιμοποιούν AI τακτικά στην καθημερινή εργασία.',
          'Μπορούμε να αξιολογήσουμε, ρυθμίσουμε και βελτιώσουμε εργαλεία AI μόνοι μας.',
        ],
      },
      people_capacity: {
        q: 'Έχει η ομάδα σας χωρητικότητα να υιοθετήσει νέο εργαλείο AI χωρίς να διαταραχθεί η καθημερινή εργασία;',
        a: [
          'Όλοι είναι υπερφορτωμένοι — δεν υπάρχει χρόνος για αλλαγή.',
          'Κάποιος θα μπορούσε να δοκιμάσει, μόνο εκτός ωραρίου ή στο περιθώριο.',
          'Μπορούμε να ελευθερώσουμε περιορισμένο χρόνο για εστιασμένη υιοθέτηση.',
          'Προγραμματίζουμε χρόνο για εκπαίδευση, rollout και συνεχή ιδιοκτησία.',
        ],
      },
      process_visibility: {
        q: 'Είναι οι βασικές ροές εργασίας σας τεκμηριωμένες και μετρήσιμες;',
        a: [
          'Ζουν στο μυαλό των ανθρώπων — λίγα είναι γραμμένα.',
          'Υπάρχουν κάποια SOPs, αλλά ελλιπή ή παρωχημένα.',
          'Οι κύριες ροές είναι τεκμηριωμένες με βασικά metrics.',
          'Οι διαδικασίες είναι χαρτογραφημένες, μετρημένες και αναθεωρούνται τακτικά.',
        ],
      },
      process_bottlenecks: {
        q: 'Ξέρετε πού χάνεται χρόνος ή χρήμα στη λειτουργία;',
        a: [
          'Αισθανόμαστε προβλήματα, αλλά δεν εντοπίζουμε συγκεκριμένα bottlenecks.',
          'Ξέρουμε μερικά σημεία πόνου από παράπονα ή υπερωρίες.',
          'Έχουμε εντοπίσει bottlenecks υψηλού όγκου και επανάληψης.',
          'Μετράμε ποσοστά εξαιρέσεων και κόστος καθυστερήσεων ανά διαδικασία.',
        ],
      },
      process_exceptions: {
        q: 'Πόσο συχνά βασίζονται οι βασικές διαδικασίες σε χειροκίνητη κρίση ή μεμονωμένες εξαιρέσεις;',
        a: [
          'Το περισσότερο έργο είναι κρίση ή ανά περίπτωση.',
          'Πολλά βήματα είναι ρουτίνα, αλλά οι εξαιρέσεις είναι συχνές και ατεκμηρίωτες.',
          'Η κύρια διαδρομή είναι ξεκάθαρη· οι εξαιρέσεις είναι γνωστές και αντιμετωπίζονται με ορισμένο τρόπο.',
          'Οι εξαιρέσεις μετράνται, κατηγοριοποιούνται και μειώνονται συνεχώς.',
        ],
      },
      tech_integration: {
        q: 'Μπορούν τα τρέχοντα συστήματά σας να συνδεθούν με νέα εργαλεία μέσω API ή εξαγωγών;',
        a: [
          'Κυρίως κλειστά/παλαιά συστήματα με χειροκίνητο copy-paste.',
          'Κάποιες επιλογές CSV/εξαγωγής· περιορισμένες ζωντανές ενσωματώσεις.',
          'Τα βασικά συστήματα έχουν API ή δοκιμασμένες διαδρομές ενσωμάτωσης.',
          'API-first στοίβα με αξιόπιστες ενσωματώσεις ήδη σε χρήση.',
        ],
      },
      tech_stack: {
        q: 'Πόσο σύγχρονη είναι η καθημερινή τεχνολογική σας στοίβα;',
        a: [
          'Μεγάλη εξάρτηση από χαρτί, τηλέφωνο και αποσυνδεδεμένα εργαλεία.',
          'Μείγμα παλαιότερου λογισμικού και λίγων cloud εργαλείων.',
          'Κυρίως cloud/SaaS εργαλεία που καλύπτουν τις βασικές λειτουργίες.',
          'Σύγχρονη, cloud-based στοίβα με αυτοματισμούς ήδη σε λειτουργία.',
        ],
      },
      tech_security: {
        q: 'Πώς χειρίζεστε την πρόσβαση και την ασφάλεια για επιχειρηματικά συστήματα και εργαλεία;',
        a: [
          'Κοινά login ή άτυπη πρόσβαση είναι συνηθισμένα.',
          'Υπάρχουν βασικοί κωδικοί, αλλά οι πολιτικές είναι χαλαρές ή ασυνεπείς.',
          'Υπάρχει role-based πρόσβαση και βασικές πρακτικές ασφάλειας.',
          'Πρόσβαση, audit και απαιτήσεις ασφάλειας/προμηθευτών διαχειρίζονται ενεργά.',
        ],
      },
      governance_leadership: {
        q: 'Πώς προσεγγίζει η ηγεσία την υιοθέτηση AI;',
        a: [
          'Σκεπτικισμός ή απουσία εμπλοκής.',
          'Ενδιαφέρον, αλλά χωρίς χορηγό ή εντολή ακόμα.',
          'Ένας executive sponsor υποστηρίζει ένα πρώτο έργο.',
          'Η ηγεσία οδηγεί ενεργά το AI με budget και σχέδιο αλλαγής.',
        ],
      },
      governance_risk: {
        q: 'Έχετε συζητήσει ιδιωτικότητα δεδομένων, συναίνεση πελατών και κίνδυνο AI;',
        a: [
          'Καθόλου συζήτηση.',
          'Άτυπη ενημέρωση — χωρίς γραπτούς κανόνες.',
          'Βασικές οδηγίες για ποιος χρησιμοποιεί AI και ποια δεδομένα επιτρέπονται.',
          'Γραπτές πολιτικές για ιδιωτικότητα, πρόσβαση και χρήση προμηθευτών.',
        ],
      },
      governance_change: {
        q: 'Πώς χειρίζεται ο οργανισμός σας την αλλαγή διαδικασιών όταν έρχονται νέα εργαλεία;',
        a: [
          'Οι αλλαγές γίνονται άτυπα· οι άνθρωποι αντιστέκονται ή εφευρίσκουν workarounds.',
          'Ανακοινώνουμε εργαλεία, αλλά με λίγη εκπαίδευση ή follow-up.',
          'Σχεδιάζουμε rollout με εκπαίδευση και ξεκάθαρο υπεύθυνο υιοθέτησης.',
          'Η αλλαγή διαχειρίζεται με επικοινωνία, εκπαίδευση, feedback και επανάληψη.',
        ],
      },
    },
    resultsTitle: 'Το AI Readiness Score σας',
    resultsSubtitle:
      'Άμεσα αποτελέσματα — μετά πείτε μας αν θέλετε μια προσαρμοσμένη λύση AI γύρω από τα πιο αδύναμα σημεία σας.',
    dimensionsTitle: 'Σκορ ανά διάσταση',
    gapsTitle: 'Πιθανές αναποτελεσματικότητες να διορθώσετε πρώτα',
    ctaRequest: 'Ζητήστε προσαρμοσμένη λύση AI',
    ctaCustom: 'Μάθετε για custom AI εργαλεία',
    ctaRetake: 'Επανάληψη αξιολόγησης',
    band: {
      red: {
        label: 'Όχι ακόμα έτοιμοι',
        desc: 'Τα θεμέλια είναι λεπτά. Εστιάστε σε μία ξεκάθαρη περίπτωση χρήσης, καθαρότερα δεδομένα και εσωτερικό υπεύθυνο πριν από μεγάλη επένδυση AI.',
      },
      amber: {
        label: 'Μερικώς έτοιμοι',
        desc: 'Έχετε βάση για να χτίσετε. Κλείστε πρώτα τα πιο αδύναμα κενά και μετά τρέξτε εστιασμένο πιλοτικό με μετρήσιμους στόχους.',
      },
      green: {
        label: 'Έτοιμοι για AI',
        desc: 'Είστε σε ισχυρή θέση να υιοθετήσετε ή να κλιμακώσετε AI. Προτεραιοποιήστε παραγωγικές περιπτώσεις χρήσης και κρατήστε σφιχτή τη διακυβέρνηση.',
      },
    },
    rec: {
      strategy:
        'Ονομάστε μία διαδικασία υψηλού αντίκτυπου και ορίστε τι σημαίνει επιτυχία σε αριθμούς πριν αγοράσετε εργαλεία.',
      data: 'Συγκεντρώστε τα δεδομένα της κύριας ροής σας — αν το AI δεν έχει καθαρά δεδομένα, τα έργα κολλάνε.',
      people:
        'Ορίστε εσωτερικό υπεύθυνο με εβδομαδιαίο χρόνο· έργα μόνο με προμηθευτή σπάνια μένουν.',
      process:
        'Τεκμηριώστε και μετρήστε το bottleneck που θέλετε να διορθώσει το AI — όγκο, χρόνο και ποσοστό εξαιρέσεων.',
      tech: 'Επιβεβαιώστε APIs ή αξιόπιστες εξαγωγές από τα συστήματα με τα οποία θα συνδεθεί το AI.',
      governance:
        'Εξασφαλίστε χορηγία ηγεσίας και βασικούς κανόνες για δεδομένα, ιδιωτικότητα και επίδραση στους πελάτες.',
    },
    contactIntro:
      'Ολοκλήρωσα το AI Readiness Score και θα ήθελα να συζητήσουμε μια προσαρμοσμένη λύση AI.',
    contactScoreLine: 'Συνολικό σκορ: {score}/100',
    contactBandLine: 'Ζώνη: {band}',
    contactGapsIntro: 'Πιο αδύναμα σημεία:',
    contactGapLine: '{name} ({score}/100)',
  },
};

// For remaining languages, import from companion JSON packs written below in this script.
import { EXTRA_LOCALES } from './ai-score-locale-packs.mjs';

Object.assign(locales, EXTRA_LOCALES);

function deepMerge(base, over) {
  if (!over) return structuredClone(base);
  const out = structuredClone(base);
  for (const [k, v] of Object.entries(over)) {
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      out[k] = deepMerge(base[k] ?? {}, v);
    } else {
      out[k] = v;
    }
  }
  return out;
}

const LANGS = [
  'bg','hr','cs','da','nl','en','et','fi','fr','de','el','he','hu','ga','it','lv','lt','mt','pl','pt','ro','ru','sk','sl','es','sv',
];

function emitValue(v, indent) {
  const pad = ' '.repeat(indent);
  if (Array.isArray(v)) {
    return `[${v.map((x) => JSON.stringify(x)).join(', ')}]`;
  }
  if (v && typeof v === 'object') {
    const entries = Object.entries(v)
      .map(([k, val]) => `${pad}  ${k}: ${emitValue(val, indent + 2)},`)
      .join('\n');
    return `{\n${entries}\n${pad}}`;
  }
  return JSON.stringify(v);
}

const header = `import type { ConsultLang } from '../constants/consult-languages';
import type { AiScoreDimensionId, AiScoreQuestionId } from '../constants/ai-score-questions';
import type { AiScoreBand } from '../utils/ai-score';

export type AiScoreQuestionLocale = {
  q: string;
  a: [string, string, string, string];
};

export type AiScoreLocaleStrings = {
  assessmentLanguage: string;
  quizTitle: string;
  quizSubtitle: string;
  step: string;
  progressAria: string;
  back: string;
  next: string;
  seeResults: string;
  dim: Record<AiScoreDimensionId, string>;
  questions: Record<AiScoreQuestionId, AiScoreQuestionLocale>;
  resultsTitle: string;
  resultsSubtitle: string;
  dimensionsTitle: string;
  gapsTitle: string;
  ctaRequest: string;
  ctaCustom: string;
  ctaRetake: string;
  band: Record<AiScoreBand, { label: string; desc: string }>;
  rec: Record<AiScoreDimensionId, string>;
  contactIntro: string;
  contactScoreLine: string;
  contactBandLine: string;
  contactGapsIntro: string;
  contactGapLine: string;
};

function fill(template: string, vars: Record<string, string | number>): string {
  let s = template;
  for (const [k, v] of Object.entries(vars)) {
    s = s.replaceAll(\`{\${k}}\`, String(v));
  }
  return s;
}

export function formatAiScoreLocale(
  template: string,
  vars: Record<string, string | number>,
): string {
  return fill(template, vars);
}

`;

const bodyParts = [];
bodyParts.push('export const AI_SCORE_LOCALES: Record<ConsultLang, AiScoreLocaleStrings> = {');

for (const code of LANGS) {
  const merged = deepMerge(en, locales[code] ?? {});
  bodyParts.push(`  ${code}: ${emitValue(merged, 2)},`);
}

bodyParts.push('};');
bodyParts.push('');
bodyParts.push(`export function getAiScoreLocale(code: ConsultLang): AiScoreLocaleStrings {
  return AI_SCORE_LOCALES[code] ?? AI_SCORE_LOCALES.en;
}
`);

const out = header + bodyParts.join('\n');
const outPath = resolve(root, 'src/i18n/ai-score-locales.ts');
writeFileSync(outPath, out, 'utf8');
console.log(`Wrote ${outPath}`);
