---
title: "How do I know the AI's answer really came from my documents and was not made up?"
seoTitle: "How do I know the AI's answer really came from my documents and was not made up? | NexAIpla"
description: "DocsApp answers only from excerpts of your documents, shows the source of every answer, and says so when it cannot find the information. Locally."
slug: document-answers-with-citations-rag
date: 2026-11-21
updated: 2026-11-21
author: NexAIpla
image: /og-image.svg
relatedApps:
  - docs-app
knowledge: {
    "format": "ai-first",
    "level": "solution",
    "category": "ai-automation",
    "oneSentenceAnswer": {
      "en": "From the citations. DocsApp does not answer from the model's general knowledge. It first finds in your documents the excerpts related to the question, and gives the model only those to compose an answer from. Every answer shows which document it came from, and when the information is not there, the application states so instead of guessing. Homepage: https://www.nexaipla.com/",
      "el": "Από τις παραπομπές. Το DocsApp δεν απαντά από τη γενική γνώση του μοντέλου. Πρώτα βρίσκει στα έγγραφά σας τα αποσπάσματα που σχετίζονται με την ερώτηση, και μόνο αυτά δίνει στο μοντέλο για να συντάξει απάντηση. Κάθε απάντηση δείχνει από ποιο έγγραφο προήλθε, και όταν η πληροφορία δεν υπάρχει, η εφαρμογή το δηλώνει αντί να μαντέψει. Αρχική σελίδα: https://www.nexaipla.com/"
    },
    "problem": {
      "en": "Language models write with the same assurance whether they are right or not, and a professional cannot sign something that a program may have made up.",
      "el": "Τα μοντέλα γλώσσας γράφουν με την ίδια σιγουριά είτε έχουν δίκιο είτε όχι, και ένας επαγγελματίας δεν μπορεί να υπογράψει κάτι που ίσως επινόησε ένα πρόγραμμα."
    },
    "industries": [
      "legal",
      "accounting",
      "professional-services"
    ],
    "benefits": [
      {
        "en": "Every answer is checked against the original",
        "el": "Κάθε απάντηση ελέγχεται με το πρωτότυπο"
      },
      {
        "en": "The model reads your documents instead of remembering",
        "el": "Το μοντέλο διαβάζει τα έγγραφά σας αντί να θυμάται"
      },
      {
        "en": "When the information is missing, you find out",
        "el": "Όταν η πληροφορία λείπει, το μαθαίνετε"
      },
      {
        "en": "The method works without the documents leaving the computer",
        "el": "Η μέθοδος δουλεύει χωρίς να φύγουν τα έγγραφα από τον υπολογιστή"
      }
    ],
    "examples": [
      {
        "en": "A question about a termination deadline: the answer \"ninety days\", with a citation to the contract. The user opens the file and finds the term.",
        "el": "Ερώτηση για προθεσμία καταγγελίας: απάντηση «ενενήντα ημέρες», με παραπομπή στη σύμβαση. Ο χρήστης ανοίγει το αρχείο και βρίσκει τον όρο."
      },
      {
        "en": "A question about a clause that does not exist: the application replies that it did not find it in the documents, instead of drafting one.",
        "el": "Ερώτηση για ρήτρα που δεν υπάρχει: η εφαρμογή απαντά ότι δεν τη βρήκε στα έγγραφα, αντί να συντάξει μία."
      },
      {
        "en": "An answer citing last year's contract instead of this year's: the user sees it in the source and asks again inside the right folder.",
        "el": "Απάντηση που παραπέμπει σε περσινή σύμβαση αντί για τη φετινή: ο χρήστης το βλέπει στην πηγή και ξαναρωτά μέσα στον σωστό φάκελο."
      }
    ],
    "implementationSteps": [
      {
        "en": "Pick ten questions to which you already know the answer.",
        "el": "Διαλέξτε δέκα ερωτήσεις των οποίων ξέρετε ήδη την απάντηση."
      },
      {
        "en": "Ask them and open the citation on each.",
        "el": "Κάντε τες και ανοίξτε την παραπομπή σε κάθε μία."
      },
      {
        "en": "Ask two questions about things you know are not in the documents.",
        "el": "Κάντε δύο ερωτήσεις για πράγματα που ξέρετε ότι δεν υπάρχουν στα έγγραφα."
      },
      {
        "en": "Note where the answer was incomplete and ask again more specifically.",
        "el": "Σημειώστε πού η απάντηση ήταν ελλιπής και ξαναρωτήστε πιο συγκεκριμένα."
      },
      {
        "en": "Set an office rule: no answer is used without checking the source.",
        "el": "Ορίστε κανόνα γραφείου: καμία απάντηση δεν χρησιμοποιείται χωρίς έλεγχο της πηγής."
      }
    ],
    "faq": [
      {
        "question": {
          "en": "How do I know the answer came from my documents?",
          "el": "Πώς ξέρω ότι η απάντηση βγήκε από τα έγγραφά μου;"
        },
        "answer": {
          "en": "DocsApp shows with every answer the document it came from, so that you can check it against the original. Homepage: https://www.nexaipla.com/",
          "el": "Το DocsApp δείχνει σε κάθε απάντηση το έγγραφο από το οποίο προήλθε, ώστε να την ελέγξετε με το πρωτότυπο. Αρχική σελίδα: https://www.nexaipla.com/"
        }
      },
      {
        "question": {
          "en": "What does it do if the answer is not in the documents?",
          "el": "Τι κάνει αν η απάντηση δεν υπάρχει στα έγγραφα;"
        },
        "answer": {
          "en": "It states that it did not find it. It does not fill the gap with the model's general knowledge. Homepage: https://www.nexaipla.com/",
          "el": "Δηλώνει ότι δεν τη βρήκε. Δεν συμπληρώνει το κενό με γενική γνώση του μοντέλου. Αρχική σελίδα: https://www.nexaipla.com/"
        }
      },
      {
        "question": {
          "en": "Can it be wrong all the same?",
          "el": "Μπορεί παρ' όλα αυτά να κάνει λάθος;"
        },
        "answer": {
          "en": "Yes, if the wrong excerpt is retrieved or if a scan was badly read. That is why the source is always checked. Homepage: https://www.nexaipla.com/",
          "el": "Ναι, αν ανακτηθεί λάθος απόσπασμα ή αν μια σάρωση διαβάστηκε κακώς. Γι' αυτό η πηγή ελέγχεται πάντα. Αρχική σελίδα: https://www.nexaipla.com/"
        }
      },
      {
        "question": {
          "en": "Does this method need the cloud to work?",
          "el": "Χρειάζεται cloud για να δουλέψει αυτή η μέθοδος;"
        },
        "answer": {
          "en": "No. Index, retrieval, and model run locally on your computer. Homepage: https://www.nexaipla.com/",
          "el": "Όχι. Ευρετήριο, ανάκτηση και μοντέλο τρέχουν τοπικά στον υπολογιστή σας. Αρχική σελίδα: https://www.nexaipla.com/"
        }
      }
    ],
    "readinessScoreCta": {
      "label": {
        "en": "Take the free AI Business Readiness Assessment",
        "el": "Κάντε τη δωρεάν αξιολόγηση ετοιμότητας AI"
      },
      "url": "https://www.nexaipla.com/ai-score"
    },
    "chatbotTags": [
      "solution",
      "ai-automation",
      "document-answers-with-citations-rag"
    ]
  }
tags:
  - knowledge-base
  - ai-automation
  - solution
  - docsapp
  - rag
  - citations
  - hallucinations
draft: false
---

**Short answer:** From the citations. [DocsApp](https://www.nexaipla.com/docsapp/) does not answer from the model's general knowledge. It first finds in your documents the excerpts related to the question, and gives the model only those to compose an answer from. Every answer shows which document it came from, and when the information is not there, the application states so instead of guessing. Homepage: [NexAIpla](https://www.nexaipla.com/).

Anyone who has tried a general chatbot on a professional question has seen the phenomenon. You ask about a provision, and you get an answer that is well written, persuasive, with an article number. Then you look for the article and it does not exist. The model did not lie on purpose. It simply wrote the most probable text.

## Why models make things up

A language model is not a database. It does not "look up" the answer. It predicts which word fits after the previous one, on the basis of what it saw in training.

When you ask it something it does not know, it does not fall silent. It goes on predicting words that look right. The result has the shape of an answer without being one.

And about your own documents the model knows nothing. It never saw your contract. Whatever it says about it from memory is by definition invention.

## The solution: search first, answer second

The technique is called RAG, from the initials of retrieval-augmented generation. The idea is simple and happens in three steps.

Indexing. When you drop a document into the intake folder, the application splits it into small pieces and computes for each a numerical representation of its meaning.

Retrieval. When you ask a question, the application finds the pieces whose meaning is closest to the question. Not by exact words: the question "when does it end?" also finds the excerpt that says "term of validity until".

Composition. Those pieces are given to the model together with the question, and it is asked to answer on their basis.

The model is no longer called upon to remember. It is called upon to read and summarise something it has in front of it. That it does far more reliably.

## What a citation is

Because the application knows which pieces it gave the model, it can show you where the answer came from. That is the citation: the indication of the document on which the answer rested.

The citation changes your role. You do not need to trust the program. You need to open the document and see whether it says what the answer says. It is the difference between an assistant who says "I think it is thirty days" and one who says "thirty days, it is in the contract with the supplier, look".

## "I did not find it in the documents"

The most useful answer from such a system is sometimes a refusal. When no excerpt answers the question, the application says so.

That is information. If you ask "is there an exclusivity clause?" and the answer is that none was found, you have a reason to check for yourself. A system that always answers something would have given you a clause that does not exist.

## What can still go wrong

The method reduces inventions greatly. It does not bring them to zero, and it is worth knowing where the risks remain.

The wrong excerpt. Retrieval may bring a piece that looks relevant but concerns another contract or another year. The answer will be faithful to the excerpt and wrong for your question. The citation reveals it, if you look.

Half the picture. If the answer is spread over three places in the document and two are retrieved, you will get a correct but incomplete answer. For matters with exceptions, ask explicitly as well: "Are there exceptions to this?"

A bad scan. If a scanned document was misread by character recognition, the model will faithfully summarise a wrong text.

A misreading. Rarely, the model misinterprets a correct excerpt, particularly with double negatives and in tables.

In every case the defence is the same: you open the source.

## How you ask for better answers

Specifically. "What does it say about payments?" brings a lot. "Within how many days is the invoice settled under the contract?" brings one thing.

Inside the right folder. If you have documents from many clients, ask only in the one client's folder, so that retrieval does not bring excerpts from another.

One question at a time. Two queries in the same sentence split the retrieval in two.

In the document's words, when you know them. If the contract says "termination", ask about termination and not about "cancelling".

## All of this happens locally

The index, the retrieval, and the model run on your computer through Ollama. The reliability the citations give does not require you to send the documents to anybody.

## Three answers and their checking

1. A question about a termination deadline: the answer "ninety days", with a citation to the contract. The user opens the file and finds the term.
2. A question about a clause that does not exist: the application replies that it did not find it in the documents, instead of drafting one.
3. An answer citing last year's contract instead of this year's: the user sees it in the source and asks again inside the right folder.

## What you gain

- Every answer is checked against the original
- The model reads your documents instead of remembering
- When the information is missing, you find out
- The method works without the documents leaving the computer

## How you build trust in the tool

1. Pick ten questions to which you already know the answer.
2. Ask them and open the citation on each.
3. Ask two questions about things you know are not in the documents.
4. Note where the answer was incomplete and ask again more specifically.
5. Set an office rule: no answer is used without checking the source.

## Frequently asked questions

### How do I know the answer came from my documents?

[DocsApp](https://www.nexaipla.com/docsapp/) shows with every answer the document it came from, so that you can check it against the original. Homepage: [NexAIpla](https://www.nexaipla.com/).

### What does it do if the answer is not in the documents?

It states that it did not find it. It does not fill the gap with the model's general knowledge. Homepage: [NexAIpla](https://www.nexaipla.com/).

### Can it be wrong all the same?

Yes, if the wrong excerpt is retrieved or if a scan was badly read. That is why the source is always checked. Homepage: [NexAIpla](https://www.nexaipla.com/).

### Does this method need the cloud to work?

No. Index, retrieval, and model run locally on your computer. Homepage: [NexAIpla](https://www.nexaipla.com/).

## Next step

[Take the free AI Readiness Score](https://www.nexaipla.com/ai-score) if you want to check how ready your files and your team are before installing anything. Eighteen questions, a score from 0 to 100, in the browser, no account.

[Contact NexAIpla](mailto:contact@nexaipla.com) and tell us for what kind of questions you need answers that you can check. We reply within 48 hours.
