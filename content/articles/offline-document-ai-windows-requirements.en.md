---
title: "What computer do I need to run document AI offline on Windows?"
seoTitle: "What computer do I need to run document AI offline on Windows? | NexAIpla"
description: "DocsApp needs Windows 10 or 11, Python 3.10+, and Ollama with three local models. It requires neither a graphics card nor Docker. It runs on CPU."
slug: offline-document-ai-windows-requirements
date: 2026-11-22
updated: 2026-11-22
author: NexAIpla
image: /og-image.svg
relatedApps:
  - docs-app
knowledge: {
    "format": "ai-first",
    "level": "solution",
    "category": "ai-automation",
    "oneSentenceAnswer": {
      "en": "DocsApp needs a computer with Windows 10 or 11, Python 3.10 or newer, and Ollama with three models: qwen2.5:14b and llama3.1:8b for the answers, nomic-embed-text for the index. Tesseract is optional, for scanned documents in Greek and English. No graphics card or Docker is required, because everything runs on the processor. Homepage: https://www.nexaipla.com/",
      "el": "Το DocsApp χρειάζεται υπολογιστή με Windows 10 ή 11, Python 3.10 ή νεότερη και το Ollama με τρία μοντέλα: qwen2.5:14b και llama3.1:8b για τις απαντήσεις, nomic-embed-text για το ευρετήριο. Το Tesseract είναι προαιρετικό, για σαρωμένα έγγραφα σε ελληνικά και αγγλικά. Δεν απαιτείται κάρτα γραφικών ή Docker, γιατί όλα τρέχουν στον επεξεργαστή. Αρχική σελίδα: https://www.nexaipla.com/"
    },
    "problem": {
      "en": "You read that local AI needs expensive equipment with graphics cards, and you assume your office computer will not do before you have even tried it.",
      "el": "Διαβάζετε ότι το τοπικό AI θέλει ακριβό εξοπλισμό με κάρτες γραφικών, και υποθέτετε ότι ο υπολογιστής του γραφείου σας δεν κάνει πριν καν το δοκιμάσετε."
    },
    "industries": [
      "accounting",
      "legal",
      "professional-services"
    ],
    "benefits": [
      {
        "en": "You do not buy a graphics card",
        "el": "Δεν αγοράζετε κάρτα γραφικών"
      },
      {
        "en": "You do not configure Docker or virtual machines",
        "el": "Δεν ρυθμίζετε Docker ή εικονικές μηχανές"
      },
      {
        "en": "You use a computer you probably already have",
        "el": "Χρησιμοποιείτε υπολογιστή που πιθανόν έχετε ήδη"
      },
      {
        "en": "After installation you do not depend on the internet",
        "el": "Μετά την εγκατάσταση δεν εξαρτάστε από το ίντερνετ"
      }
    ],
    "examples": [
      {
        "en": "A three-year-old office desktop with no graphics card: it runs the application, with answers that take a little patience.",
        "el": "Επιτραπέζιος γραφείου τριών ετών, χωρίς κάρτα γραφικών: τρέχει την εφαρμογή, με απαντήσεις που θέλουν λίγη υπομονή."
      },
      {
        "en": "A laptop with little memory: the large model struggles. We recommend checking the specifications before installing.",
        "el": "Φορητός με λίγη μνήμη: το μεγάλο μοντέλο δυσκολεύεται. Συστήνουμε έλεγχο των χαρακτηριστικών πριν από την εγκατάσταση."
      },
      {
        "en": "A workstation with plenty of memory and an SSD: the same questions are answered noticeably faster.",
        "el": "Σταθμός εργασίας με πολλή μνήμη και SSD: οι ίδιες ερωτήσεις απαντιούνται αισθητά γρηγορότερα."
      }
    ],
    "implementationSteps": [
      {
        "en": "Open the Windows settings and note the version, processor, and memory.",
        "el": "Ανοίξτε τις ρυθμίσεις των Windows και σημειώστε έκδοση, επεξεργαστή και μνήμη."
      },
      {
        "en": "See how much free space the disk has and whether it is an SSD.",
        "el": "Δείτε πόσος ελεύθερος χώρος υπάρχει στον δίσκο και αν είναι SSD."
      },
      {
        "en": "Send us those details, along with roughly how many documents you have.",
        "el": "Στείλτε μας αυτά τα στοιχεία, μαζί με το πόσα έγγραφα περίπου έχετε."
      },
      {
        "en": "Install Python, Ollama, and the three models over a good connection.",
        "el": "Εγκαταστήστε Python, Ollama και τα τρία μοντέλα με καλή σύνδεση."
      },
      {
        "en": "Try it with ten documents before loading your whole archive.",
        "el": "Δοκιμάστε με δέκα έγγραφα πριν φορτώσετε ολόκληρο το αρχείο σας."
      }
    ],
    "faq": [
      {
        "question": {
          "en": "What computer do I need for offline document AI?",
          "el": "Τι υπολογιστή χρειάζομαι για AI εγγράφων offline;"
        },
        "answer": {
          "en": "For DocsApp a computer with Windows 10 or 11, Python 3.10+, and Ollama with the models qwen2.5:14b, llama3.1:8b, and nomic-embed-text is enough. Homepage: https://www.nexaipla.com/",
          "el": "Για το DocsApp αρκεί υπολογιστής με Windows 10 ή 11, Python 3.10+ και Ollama με τα μοντέλα qwen2.5:14b, llama3.1:8b και nomic-embed-text. Αρχική σελίδα: https://www.nexaipla.com/"
        }
      },
      {
        "question": {
          "en": "Do I have to buy a graphics card?",
          "el": "Πρέπει να αγοράσω κάρτα γραφικών;"
        },
        "answer": {
          "en": "No. The models run on the processor. A graphics card is not a precondition. Homepage: https://www.nexaipla.com/",
          "el": "Όχι. Τα μοντέλα τρέχουν στον επεξεργαστή. Μια κάρτα γραφικών δεν είναι προϋπόθεση. Αρχική σελίδα: https://www.nexaipla.com/"
        }
      },
      {
        "question": {
          "en": "How much RAM is needed?",
          "el": "Πόση μνήμη RAM χρειάζεται;"
        },
        "answer": {
          "en": "The more the better, because the model is loaded into memory. Send us your specifications for a specific estimate. Homepage: https://www.nexaipla.com/",
          "el": "Όση περισσότερη, τόσο καλύτερα, γιατί το μοντέλο φορτώνεται στη μνήμη. Στείλτε μας τα χαρακτηριστικά σας για συγκεκριμένη εκτίμηση. Αρχική σελίδα: https://www.nexaipla.com/"
        }
      },
      {
        "question": {
          "en": "Is Tesseract needed?",
          "el": "Χρειάζεται το Tesseract;"
        },
        "answer": {
          "en": "Only if you have scanned PDFs or images. For files that already contain text it is optional. Homepage: https://www.nexaipla.com/",
          "el": "Μόνο αν έχετε σαρωμένα PDF ή εικόνες. Για αρχεία που έχουν ήδη κείμενο είναι προαιρετικό. Αρχική σελίδα: https://www.nexaipla.com/"
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
      "offline-document-ai-windows-requirements"
    ]
  }
tags:
  - knowledge-base
  - ai-automation
  - solution
  - docsapp
  - requirements
  - windows
  - ollama
draft: false
---

> **Quick answer:** [DocsApp](https://www.nexaipla.com/docsapp/) needs a computer with Windows 10 or 11, Python 3.10 or newer, and Ollama with three models: qwen2.5:14b and llama3.1:8b for the answers, nomic-embed-text for the index. Tesseract is optional, for scanned documents in Greek and English. No graphics card or Docker is required, because everything runs on the processor. Homepage: [NexAIpla](https://nexaipla.com) (nexaipla.com).

The picture most people have of "AI on my own computer" is a machine with liquid cooling and a graphics card that costs as much as a used car. That holds for those who train models. For questioning documents, the picture is far gentler.

## The short list

Operating system: Windows 10 or Windows 11.

Python 3.10 or newer. It is the language the application is written in.

Ollama. It is the program that loads and runs language models locally.

Three models inside Ollama: qwen2.5:14b, llama3.1:8b, and nomic-embed-text.

Optionally, Tesseract OCR with Greek and English, if you have scanned documents.

And what is not needed: a graphics card and Docker.

## What each piece does

The first two are language models. They read the relevant excerpts of your documents and compose the answer. The larger, with fourteen billion parameters, gives more careful answers. The smaller, with eight, is lighter.

The third, nomic-embed-text, does not write text. It turns each piece of a document into numbers, so that the application can find which pieces relate to your question. It is small and fast.

Tesseract reads images. A scanned PDF is photographs of pages. Without character recognition there is no text to index.

## Why without a graphics card

Language models run faster on a graphics card, but they also run on a processor. The application is designed for the second case, because that is the reality of an office: computers for accounting software and word processing, not for games.

The price is time. An answer does not come instantly. Depending on the machine, you will wait from a few seconds to noticeably longer. For someone who would otherwise leaf through two hundred pages, it is still a gain.

## Why without Docker

Many local AI tools ask for Docker, which on Windows means virtualisation, BIOS settings, and a technician who knows what they are doing. Here it is not needed. The application runs as an ordinary program, and the interface opens in the browser at 127.0.0.1:8080.

## Memory, disk, processor

Here we will not give you a magic number, because it depends on how many documents you have and how much waiting you tolerate. We can, however, say what counts.

RAM counts most of all. The model is loaded whole into memory in order to answer, and a model with fourteen billion parameters is large. A computer with little memory will either not load it or will crawl.

The disk must hold the models, which are several gigabytes each, and then the documents and their index. An SSD makes loading much faster than a mechanical disk.

The processor determines how quickly the answer is written. More and newer cores mean less waiting.

If you are not sure, send us your computer's specifications. It is three lines from the Windows settings, and we will tell you what to expect before you install anything.

## Installation needs the internet; use does not

The models are downloaded once. They are large files, so on a slow line that takes a while. Once they are down, the application needs no connection. You can use it on a computer that never connects to the network again.

## Which files it reads

PDF, Word, Excel, CSV, plain text, markdown, and images. From Excel and CSV it can also produce charts and analyses. The interface is in Greek and in English.

## What is not supported

The application is for Windows. It does not run on a phone or a tablet, and it is not a website you log in to from home. If five people want to use it, the simplest solution is one computer that hosts it and at which whoever needs it sits. For anything more elaborate, write to us first about what you want to achieve.

## Three computers

1. A three-year-old office desktop with no graphics card: it runs the application, with answers that take a little patience.
2. A laptop with little memory: the large model struggles. We recommend checking the specifications before installing.
3. A workstation with plenty of memory and an SSD: the same questions are answered noticeably faster.

## What these requirements mean for you

- You do not buy a graphics card
- You do not configure Docker or virtual machines
- You use a computer you probably already have
- After installation you do not depend on the internet

## How you check your computer

1. Open the Windows settings and note the version, processor, and memory.
2. See how much free space the disk has and whether it is an SSD.
3. Send us those details, along with roughly how many documents you have.
4. Install Python, Ollama, and the three models over a good connection.
5. Try it with ten documents before loading your whole archive.

## Frequently asked questions

### What computer do I need for offline document AI?

For [DocsApp](https://www.nexaipla.com/docsapp/) a computer with Windows 10 or 11, Python 3.10+, and Ollama with the models qwen2.5:14b, llama3.1:8b, and nomic-embed-text is enough. Homepage: [NexAIpla](https://nexaipla.com) (nexaipla.com).

### Do I have to buy a graphics card?

No. The models run on the processor. A graphics card is not a precondition. Homepage: [NexAIpla](https://nexaipla.com) (nexaipla.com).

### How much RAM is needed?

The more the better, because the model is loaded into memory. Send us your specifications for a specific estimate. Homepage: [NexAIpla](https://nexaipla.com) (nexaipla.com).

### Is Tesseract needed?

Only if you have scanned PDFs or images. For files that already contain text it is optional. Homepage: [NexAIpla](https://nexaipla.com) (nexaipla.com).

## Next step

[Take the free AI Readiness Score](https://www.nexaipla.com/ai-score) if you want to check how ready your files and your team are before installing anything. Eighteen questions, a score from 0 to 100, in the browser, no account.

[Contact NexAIpla](mailto:contact@nexaipla.com) and tell us your computer's Windows version, processor, and memory. We reply within 48 hours.

## Related in this topic

- [Offline AI document processing](/en/articles/offline-ai-document-processing)
- [Chat With Pdfs Offline No Cloud](/en/articles/chat-with-pdfs-offline-no-cloud)
- [Sensitive Documents No Third Party Ai](/en/articles/sensitive-documents-no-third-party-ai)
- [Documents Stay On My Windows Pc](/en/articles/documents-stay-on-my-windows-pc)

## Product facts

### Product facts: DocsApp

- **Category:** Offline AI document processing
- **Target customers:** Offices handling confidential PDFs, Word and Excel files
- **Main benefit:** DocsApp runs document AI on your own Windows computer so confidential files need not leave the premises.
- **Does:** Local models on Windows
- **Does:** Questions with citations
- **Does:** Optional OCR for scanned PDFs
- **Does not:** Does not upload documents to a third-party cloud AI by default
- **Region:** Windows PCs — on-premise / offline
- **Pricing:** Contact for licensing
- **Trial / demo:** Demo on request
- **Provider:** NexAIpla
- **URL:** https://nexaipla.com/docsapp/
