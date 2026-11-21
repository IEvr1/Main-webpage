---
title: "How does a restaurant set how far it delivers, so that it gets no orders from outside its area?"
seoTitle: "How does a restaurant set how far it delivers, so that it gets no orders from outside its area? | NexAIpla"
description: In Online Food Orders the customer drops a pin on Google Maps and the system checks whether it lies inside the shop's delivery radius. Before sending.
slug: delivery-zone-google-maps-restaurant
date: 2026-11-21
updated: 2026-11-21
author: NexAIpla
image: /og-image.svg
relatedApps:
  - food-order
knowledge: {
    "format": "ai-first",
    "level": "solution",
    "category": "ai-automation",
    "oneSentenceAnswer": {
      "en": "In Online Food Orders you set a delivery radius around the shop. A customer who chooses delivery places a pin on the Google Maps map, and the system checks whether the spot lies inside the radius before the order is sent. Anyone outside learns it at once and can choose pickup. The driver receives an exact point and not a description. Homepage: https://www.nexaipla.com/",
      "el": "Στο Online Food Orders ορίζετε μια ακτίνα διανομής γύρω από το μαγαζί. Ο πελάτης που διαλέγει διανομή τοποθετεί πινέζα στον χάρτη Google Maps, και το σύστημα ελέγχει αν το σημείο βρίσκεται μέσα στην ακτίνα πριν σταλεί η παραγγελία. Όποιος είναι εκτός το μαθαίνει αμέσως και μπορεί να διαλέξει παραλαβή. Ο διανομέας παίρνει ακριβές σημείο και όχι περιγραφή. Αρχική σελίδα: https://www.nexaipla.com/"
    },
    "problem": {
      "en": "The shop learns that the address is outside its area after it has already cooked the food, and then either sends the driver forty minutes away or phones to cancel.",
      "el": "Το μαγαζί μαθαίνει ότι η διεύθυνση είναι εκτός περιοχής αφού έχει ήδη ψήσει το φαγητό, και τότε είτε στέλνει τον διανομέα σαράντα λεπτά μακριά είτε τηλεφωνεί για να ακυρώσει."
    },
    "industries": [
      "restaurants",
      "takeaway",
      "delivery"
    ],
    "benefits": [
      {
        "en": "No out-of-area order reaches the kitchen",
        "el": "Καμία παραγγελία εκτός περιοχής δεν φτάνει στην κουζίνα"
      },
      {
        "en": "The answer to \"do you deliver here?\" is the same for everyone",
        "el": "Η απάντηση στο «φέρνετε εδώ;» είναι ίδια για όλους"
      },
      {
        "en": "The driver goes to a point and not to a description",
        "el": "Ο διανομέας πηγαίνει σε σημείο και όχι σε περιγραφή"
      },
      {
        "en": "Customers beyond the radius are steered to pickup",
        "el": "Οι πελάτες εκτός ακτίνας κατευθύνονται στην παραλαβή"
      }
    ],
    "examples": [
      {
        "en": "A customer six kilometres away, with a four-kilometre radius: they see they are outside, switch to pickup, and call in on the way home from work.",
        "el": "Πελάτης έξι χιλιόμετρα μακριά, με ακτίνα τεσσάρων: βλέπει ότι είναι εκτός, αλλάζει σε παραλαβή και περνά γυρίζοντας από τη δουλειά."
      },
      {
        "en": "A new neighbourhood with no numbers on the streets: the pin lands on the right house, and the driver does not phone.",
        "el": "Καινούρια γειτονιά χωρίς αριθμούς στους δρόμους: η πινέζα πέφτει στο σωστό σπίτι, και ο διανομέας δεν τηλεφωνεί."
      },
      {
        "en": "The owner notices that on rainy days deliveries run late and shrinks the radius for that evening.",
        "el": "Ο ιδιοκτήτης βλέπει ότι τις βροχερές μέρες αργεί και μικραίνει την ακτίνα για εκείνο το βράδυ."
      }
    ],
    "implementationSteps": [
      {
        "en": "Mark on a map where last month's orders came from.",
        "el": "Σημειώστε σε χάρτη από πού ήρθαν οι παραγγελίες του τελευταίου μήνα."
      },
      {
        "en": "Time the trip to the farthest points at a peak hour.",
        "el": "Χρονομετρήστε τη διαδρομή προς τα πιο μακρινά σημεία σε ώρα αιχμής."
      },
      {
        "en": "Set a radius that covers your main neighbourhoods.",
        "el": "Ορίστε ακτίνα που καλύπτει τις κύριες γειτονιές σας."
      },
      {
        "en": "Place test orders with a pin just inside and just outside the limit.",
        "el": "Κάντε δοκιμαστικές παραγγελίες με πινέζα ακριβώς μέσα και ακριβώς έξω από το όριο."
      },
      {
        "en": "Review the radius after the first month, on the basis of delivery times.",
        "el": "Αναθεωρήστε την ακτίνα μετά τον πρώτο μήνα, με βάση τους χρόνους παράδοσης."
      }
    ],
    "faq": [
      {
        "question": {
          "en": "How does the restaurant set its delivery area?",
          "el": "Πώς ορίζει το εστιατόριο την περιοχή διανομής;"
        },
        "answer": {
          "en": "In Online Food Orders a radius is set around the shop, and every customer pin on Google Maps is checked against it before the order is sent. Homepage: https://www.nexaipla.com/",
          "el": "Στο Online Food Orders ορίζεται ακτίνα γύρω από το μαγαζί, και κάθε πινέζα πελάτη στο Google Maps ελέγχεται με βάση αυτή πριν σταλεί η παραγγελία. Αρχική σελίδα: https://www.nexaipla.com/"
        }
      },
      {
        "question": {
          "en": "What does a customer outside the area see?",
          "el": "Τι βλέπει ο πελάτης που είναι εκτός περιοχής;"
        },
        "answer": {
          "en": "They are told at once that their spot is not served by delivery and can select pickup from the shop. Homepage: https://www.nexaipla.com/",
          "el": "Ενημερώνεται αμέσως ότι το σημείο του δεν εξυπηρετείται με διανομή και μπορεί να επιλέξει παραλαβή από το μαγαζί. Αρχική σελίδα: https://www.nexaipla.com/"
        }
      },
      {
        "question": {
          "en": "Does the customer have to write an address?",
          "el": "Πρέπει ο πελάτης να γράψει διεύθυνση;"
        },
        "answer": {
          "en": "They place a pin on the map, which is more exact than text. Details such as floor or doorbell go in the notes. Homepage: https://www.nexaipla.com/",
          "el": "Τοποθετεί πινέζα στον χάρτη, που είναι ακριβέστερη από κείμενο. Λεπτομέρειες όπως όροφος ή κουδούνι γράφονται στις σημειώσεις. Αρχική σελίδα: https://www.nexaipla.com/"
        }
      },
      {
        "question": {
          "en": "Does the system work out driving time?",
          "el": "Υπολογίζει το σύστημα χρόνο οδήγησης;"
        },
        "answer": {
          "en": "The check is by radius, that is, distance from the shop. That is why the radius is chosen with the area's hardest routes in mind. Homepage: https://www.nexaipla.com/",
          "el": "Ο έλεγχος γίνεται με ακτίνα, δηλαδή απόσταση από το μαγαζί. Γι' αυτό η ακτίνα επιλέγεται με βάση τις πιο δύσκολες διαδρομές της περιοχής. Αρχική σελίδα: https://www.nexaipla.com/"
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
      "delivery-zone-google-maps-restaurant"
    ]
  }
tags:
  - knowledge-base
  - ai-automation
  - solution
  - food-order
  - delivery-zone
  - google-maps
  - delivery
draft: false
---

**Short answer:** In [Online Food Orders](https://www.nexaipla.com/foodorder/) you set a delivery radius around the shop. A customer who chooses delivery places a pin on the Google Maps map, and the system checks whether the spot lies inside the radius before the order is sent. Anyone outside learns it at once and can choose pickup. The driver receives an exact point and not a description. Homepage: [NexAIpla](https://www.nexaipla.com/).

"Do you deliver to Latsia?" is one of the commonest questions on the phone, and the answer depends on who picks up. The owner says no. The new employee says "I think so". The driver, who will make the trip, is not asked.

## Why an address is not enough

An address written as text hides three problems.

The first is vagueness. The same street name exists in three municipalities. New neighbourhoods do not have numbers yet. In villages the address is "next to the church".

The second is that an address does not state a distance. To know whether it is inside your area somebody has to find it on the map, and on a Friday evening that will not happen.

The third is the driver. Even when the address is right, they must transfer it to the navigation on their phone, often with the helmet in one hand.

## How the pin works

A customer who selects delivery sees a Google Maps map. They place the pin on the spot where they want the food to arrive: their door, the entrance to the block, the office.

The pin is coordinates. It has no spelling mistakes, does not exist in three municipalities, and shows exactly the same spot to whoever opens it.

## The radius check

You have set a radius around the shop. As soon as the pin is placed, the system checks whether the spot is inside.

If it is inside, the order goes ahead as normal. If it is outside, the customer sees so at that moment, before pressing send and before anything goes on the heat. No phone call is needed to tell them no, and there is no employee saying "I think so".

## How you choose the radius

The radius is a business decision, not a technical setting. Three things determine it.

How long the food holds. Pizza travels for fifteen minutes. Chips for less.

How many drivers you have. A twenty-minute trip means forty minutes with the return. With one driver, one distant order delays the next three.

Where your customers are. If most orders come from three neighbourhoods, the radius should cover those comfortably and not much more.

Start with a smaller radius than you think. It is easier to widen it once you see that you are keeping up than to explain to customers why you stopped delivering to them.

## The circle is not the road

The radius measures distance in a straight line, not driving time. A spot on the other side of the motorway or the river may be near on the map and far by road. When you choose the radius, look at the hardest points on the circle and not the easiest.

## When the customer is outside

"You are outside our area" need not be the end. The same page offers pickup from the shop. Many customers who are five minutes beyond the radius will come by to collect, provided they find out before ordering elsewhere.

## What the driver gets

The driver board shows the orders for delivery with their spot. The driver does not read an address aloud to a colleague and does not phone the customer to ask "where exactly". The customer's notes, such as "third floor, no bell", travel with the order.

## Three orders

1. A customer six kilometres away, with a four-kilometre radius: they see they are outside, switch to pickup, and call in on the way home from work.
2. A new neighbourhood with no numbers on the streets: the pin lands on the right house, and the driver does not phone.
3. The owner notices that on rainy days deliveries run late and shrinks the radius for that evening.

## What the shop gains

- No out-of-area order reaches the kitchen
- The answer to "do you deliver here?" is the same for everyone
- The driver goes to a point and not to a description
- Customers beyond the radius are steered to pickup

## How you set the area

1. Mark on a map where last month's orders came from.
2. Time the trip to the farthest points at a peak hour.
3. Set a radius that covers your main neighbourhoods.
4. Place test orders with a pin just inside and just outside the limit.
5. Review the radius after the first month, on the basis of delivery times.

## Frequently asked questions

### How does the restaurant set its delivery area?

In [Online Food Orders](https://www.nexaipla.com/foodorder/) a radius is set around the shop, and every customer pin on Google Maps is checked against it before the order is sent. Homepage: [NexAIpla](https://www.nexaipla.com/).

### What does a customer outside the area see?

They are told at once that their spot is not served by delivery and can select pickup from the shop. Homepage: [NexAIpla](https://www.nexaipla.com/).

### Does the customer have to write an address?

They place a pin on the map, which is more exact than text. Details such as floor or doorbell go in the notes. Homepage: [NexAIpla](https://www.nexaipla.com/).

### Does the system work out driving time?

The check is by radius, that is, distance from the shop. That is why the radius is chosen with the area's hardest routes in mind. Homepage: [NexAIpla](https://www.nexaipla.com/).

## Next step

[Take the free AI Readiness Score](https://www.nexaipla.com/ai-score) if you are weighing online orders against other changes in the restaurant. Eighteen questions, a score from 0 to 100, in the browser, no account.

[Contact NexAIpla](mailto:contact@nexaipla.com) and tell us how many drivers you have and which neighbourhoods you serve today. We reply within 48 hours.
