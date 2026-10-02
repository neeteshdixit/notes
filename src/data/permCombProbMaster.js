export const permCombProbTopic = {
    id: "perm-comb-prob",
    subjectId: "quant",
    title: "P&C and Probability",
    category: "Quant",
    badgeColor: "#8b5cf6",
    accentGradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    pages: [
  {
    "pageNumber": 1,
    "title": "🟦 1. P&C AND PROBABILITY",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 1. P&C AND PROBABILITY",
      "subtitle": "From Zero → Placement Level",
      "sections": [
        {
          "heading": "What is this topic about?",
          "items": [
            "Counting! It's all about finding out 'How many ways' something can be done, and 'What are the chances' it will happen."
          ]
        },
        {
          "heading": "Three Main Pillars",
          "items": [
            "1. Permutation (Arrangement)",
            "2. Combination (Selection)",
            "3. Probability (Chance)"
          ]
        },
        {
          "heading": "Why students struggle?",
          "items": [
            {
              "text": "They confuse Selection vs Arrangement.",
              "visual": "Picking a team of 3 from 10 players = COMBINATION (Order doesn't matter).\nMaking a 3-digit password from 10 numbers = PERMUTATION (Order matters!)."
            }
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 2,
    "title": "🟦 2. FACTORIAL (!) CONCEPT",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 2. FACTORIAL (!) CONCEPT",
      "subtitle": "",
      "sections": [
        {
          "heading": "What is a Factorial?",
          "items": [
            "n! (n factorial) means multiplying all whole numbers from n down to 1."
          ]
        },
        {
          "heading": "Values to Memorize",
          "items": [
            "0! = 1 (Important exception!)",
            "1! = 1",
            "2! = 2",
            "3! = 6",
            "4! = 24",
            "5! = 120",
            "6! = 720"
          ]
        },
        {
          "heading": "Simplification Trick",
          "items": [
            "7! / 5! = (7 × 6 × 5!) / 5! = 7 × 6 = 42."
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 3,
    "title": "🟦 3. PRINCIPLE OF COUNTING",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 3. PRINCIPLE OF COUNTING",
      "subtitle": "",
      "sections": [
        {
          "heading": "The 'AND' vs 'OR' Rule",
          "items": [
            "This is the golden rule of P&C."
          ]
        },
        {
          "heading": "Rule of Multiplication (AND)",
          "items": [
            "If task A has 'm' ways AND task B has 'n' ways, doing BOTH takes (m × n) ways."
          ]
        },
        {
          "heading": "Rule of Addition (OR)",
          "items": [
            "If you can do task A in 'm' ways OR task B in 'n' ways, total ways = (m + n)."
          ]
        }
      ],
      "tips": [
        "In P&C questions: When you say 'AND', MULTIPLY. When you say 'OR', ADD."
      ],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 4,
    "title": "🟦 4. PERMUTATION (nPr)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 4. PERMUTATION (nPr)",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "Arranging 'r' objects out of 'n' distinct objects."
          ]
        },
        {
          "heading": "The Formula",
          "items": [
            "nPr = n! / (n - r)!"
          ]
        },
        {
          "heading": "Without Formula (Dash Method)",
          "items": [
            {
              "text": "Make a 3-letter word from A, B, C, D, E.",
              "visual": "__ × __ × __\n1st spot: 5 options\n2nd spot: 4 options\n3rd spot: 3 options\nTotal = 5 × 4 × 3 = 60 ways."
            }
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 5,
    "title": "🟦 5. ARRANGING LETTERS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 5. ARRANGING LETTERS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Case 1: All Distinct Letters",
          "items": [
            "Word: 'CAT'",
            "3 letters = 3! = 6 ways."
          ]
        },
        {
          "heading": "Case 2: Repeated Letters (Very Common)",
          "items": [
            "Word: 'APPLE'",
            "5 letters, but 'P' repeats 2 times.",
            "Total ways = 5! / 2! = 120 / 2 = 60."
          ]
        },
        {
          "heading": "The Universal Rule",
          "items": [
            "If a word has n letters, and letters repeat p times, q times, etc.",
            "Ways = n! / (p! × q! ...)"
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 6,
    "title": "🟦 6. VOWELS TOGETHER RULE",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 6. VOWELS TOGETHER RULE",
      "subtitle": "",
      "sections": [
        {
          "heading": "The 'Tie' Method",
          "items": [
            "Question: Arrange 'DETAIL' so all vowels are together."
          ]
        },
        {
          "heading": "Step-by-Step",
          "items": [
            "Vowels = (E, A, I). Consonants = D, T, L.",
            "1. Tie the vowels in a bag: (EAI)",
            "2. Treat the bag as ONE unit. Units = D, T, L, (EAI) -> 4 units.",
            "3. Arrange the 4 units: 4!",
            "4. Arrange the vowels inside the bag: 3!",
            "5. Total = 4! × 3! = 24 × 6 = 144."
          ]
        },
        {
          "heading": "NOT Together Rule",
          "items": [
            "Ways vowels NOT together = (Total Ways) - (Ways Vowels ARE together)."
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 7,
    "title": "🟦 7. CIRCULAR ARRANGEMENT",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 7. CIRCULAR ARRANGEMENT",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "In a circle, there is no fixed starting point. So we fix 1 person and arrange the rest."
          ]
        },
        {
          "heading": "Formula 1: Table Seating",
          "items": [
            "n people in a circle = (n - 1)!"
          ]
        },
        {
          "heading": "Formula 2: Necklaces/Garlands",
          "items": [
            "If clockwise and anti-clockwise are identical (like beads in a necklace):",
            "Ways = (n - 1)! / 2"
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 8,
    "title": "🟦 8. COMBINATION (nCr)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 8. COMBINATION (nCr)",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "Selecting 'r' objects from 'n' objects, where order DOES NOT matter."
          ]
        },
        {
          "heading": "The Formula",
          "items": [
            "nCr = n! / (r! × (n - r)!)"
          ]
        },
        {
          "heading": "Fast Calculation Shortcut",
          "items": [
            {
              "text": "How to calculate 10C3 quickly?",
              "visual": "Step 1: Write 3 numbers down from 10: (10 × 9 × 8)\nStep 2: Write 3! in denominator: (3 × 2 × 1)\nResult = (10 × 9 × 8) / (3 × 2 × 1) = 120."
            }
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 9,
    "title": "🟦 9. PROPERTIES OF nCr",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 9. PROPERTIES OF nCr",
      "subtitle": "",
      "sections": [
        {
          "heading": "Property 1 (Symmetry)",
          "items": [
            "nCr = nC(n-r)",
            "Example: 100C98 is too hard to calculate?",
            "100C98 = 100C2 = (100 × 99) / 2 = 4950."
          ]
        },
        {
          "heading": "Property 2 (Extremes)",
          "items": [
            "nC0 = 1 (Selecting nothing is 1 way)",
            "nCn = 1 (Selecting everything is 1 way)",
            "nC1 = n (Selecting 1 item from n is n ways)"
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 10,
    "title": "🟦 10. TEAM SELECTION",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 10. TEAM SELECTION",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Scenario",
          "items": [
            "Select a team of 4 from 6 Boys and 5 Girls, such that it has 2 Boys and 2 Girls."
          ]
        },
        {
          "heading": "The Solution",
          "items": [
            "Select 2 boys from 6: 6C2",
            "AND",
            "Select 2 girls from 5: 5C2",
            "Total ways = 6C2 × 5C2",
            "= 15 × 10 = 150 ways."
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 11,
    "title": "🟦 11. AT LEAST / AT MOST",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 11. AT LEAST / AT MOST",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Scenario",
          "items": [
            "Team of 3 from 5 Men and 4 Women. Must have 'AT LEAST 1 Woman'."
          ]
        },
        {
          "heading": "Method 1: Direct Cases",
          "items": [
            "Case 1: 1W and 2M -> 4C1 × 5C2 = 4 × 10 = 40",
            "Case 2: 2W and 1M -> 4C2 × 5C1 = 6 × 5 = 30",
            "Case 3: 3W and 0M -> 4C3 × 5C0 = 4 × 1 = 4",
            "Total = 40 + 30 + 4 = 74."
          ]
        },
        {
          "heading": "Method 2: Reverse (Total - None)",
          "items": [
            "Total ways to pick 3 from 9 = 9C3 = 84.",
            "Ways with NO women (only 3 men) = 5C3 = 10.",
            "At least 1 woman = 84 - 10 = 74."
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 12,
    "title": "🟦 12. GEOMETRY & HANDSHAKES",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 12. GEOMETRY & HANDSHAKES",
      "subtitle": "",
      "sections": [
        {
          "heading": "Handshakes Formula",
          "items": [
            "If 'n' people shake hands with each other once.",
            "Ways = nC2 = n(n-1) / 2"
          ]
        },
        {
          "heading": "Straight Lines",
          "items": [
            "From 'n' non-collinear points, how many lines?",
            "Lines = nC2"
          ]
        },
        {
          "heading": "Triangles",
          "items": [
            "From 'n' non-collinear points, how many triangles?",
            "Triangles = nC3"
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 13,
    "title": "🟦 13. PROBABILITY BASICS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 13. PROBABILITY BASICS",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Formula",
          "items": [
            "P(E) = (Number of Favorable Outcomes) / (Total Possible Outcomes)"
          ]
        },
        {
          "heading": "The Range",
          "items": [
            "0 ≤ P(E) ≤ 1",
            "0 means Impossible.",
            "1 means 100% Certain."
          ]
        },
        {
          "heading": "Complementary Event",
          "items": [
            "P(Not E) = 1 - P(E)",
            "Probability of losing = 1 - Probability of winning."
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 14,
    "title": "🟦 14. TOSSING COINS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 14. TOSSING COINS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Total Outcomes",
          "items": [
            "Toss 1 coin: 2^1 = 2 (H, T)",
            "Toss 2 coins: 2^2 = 4 (HH, HT, TH, TT)",
            "Toss 3 coins: 2^3 = 8",
            "Toss n coins: 2^n"
          ]
        },
        {
          "heading": "Example: 3 Coins",
          "items": [
            "Probability of exactly 2 Heads?",
            "Favorable: (HHT, HTH, THH) -> 3 ways.",
            "Total: 8.",
            "Prob = 3/8."
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 15,
    "title": "🟦 15. ROLLING DICE",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 15. ROLLING DICE",
      "subtitle": "",
      "sections": [
        {
          "heading": "Total Outcomes",
          "items": [
            "1 Die: 6^1 = 6",
            "2 Dice: 6^2 = 36",
            "3 Dice: 6^3 = 216"
          ]
        },
        {
          "heading": "The 2 Dice Sum Shortcut",
          "items": [
            {
              "text": "How many ways to get a sum on 2 dice?",
              "visual": "Sum:  2  3  4  5  6  7  8  9 10 11 12\nWays: 1  2  3  4  5  6  5  4  3  2  1\n\nMax probability is for sum 7 (6/36)."
            }
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 16,
    "title": "🟦 16. PLAYING CARDS DECODED",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 16. PLAYING CARDS DECODED",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Deck (52 Cards)",
          "items": [
            {
              "text": "Split into 4 Suits (13 each):",
              "visual": "RED: Hearts (♥️), Diamonds (♦️)\nBLACK: Spades (♠️), Clubs (♣️)"
            }
          ]
        },
        {
          "heading": "Face Cards",
          "items": [
            "Jack (J), Queen (Q), King (K).",
            "3 face cards per suit × 4 suits = 12 Face Cards total.",
            "(Ace is NOT a face card)."
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 17,
    "title": "🟦 17. CARD PROBABILITIES",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 17. CARD PROBABILITIES",
      "subtitle": "",
      "sections": [
        {
          "heading": "Drawing 1 Card",
          "items": [
            "Prob of a Red Card = 26/52 = 1/2",
            "Prob of a King = 4/52 = 1/13",
            "Prob of a Red King = 2/52 = 1/26"
          ]
        },
        {
          "heading": "Drawing 2 Cards (Together)",
          "items": [
            "Must use Combinations!",
            "Prob of drawing 2 Kings?",
            "Favorable = 4C2 = 6.",
            "Total = 52C2 = (52*51)/2 = 1326.",
            "Prob = 6/1326 = 1/221."
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 18,
    "title": "🟦 18. BALLS & BAGS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 18. BALLS & BAGS",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Scenario",
          "items": [
            "Bag has 3 Red, 4 Green, 5 Blue balls. Total = 12."
          ]
        },
        {
          "heading": "Pick 3 balls. Prob they are all Green?",
          "items": [
            "Favorable = 4C3",
            "Total = 12C3",
            "Prob = 4C3 / 12C3"
          ]
        },
        {
          "heading": "Pick 3 balls. 1 is Red, 2 are Blue?",
          "items": [
            "Favorable = 3C1 × 5C2",
            "Total = 12C3",
            "Prob = (3 × 10) / 220 = 30/220 = 3/22."
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 19,
    "title": "🟦 19. CONDITIONAL / WITH REPLACEMENT",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 19. CONDITIONAL / WITH REPLACEMENT",
      "subtitle": "",
      "sections": [
        {
          "heading": "With Replacement",
          "items": [
            "Draw a card, put it back, draw another.",
            "Prob(King then King) = (4/52) × (4/52)"
          ]
        },
        {
          "heading": "Without Replacement",
          "items": [
            "Draw a card, keep it, draw another.",
            "Prob(King then King) = (4/52) × (3/51)"
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 20,
    "title": "🟦 20. EVENTS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 20. EVENTS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Mutually Exclusive Events",
          "items": [
            "Events that cannot happen at the same time.",
            "Ex: Rolling a 2 OR a 3.",
            "P(A ∪ B) = P(A) + P(B)"
          ]
        },
        {
          "heading": "Independent Events",
          "items": [
            "One event doesn't affect the other.",
            "Ex: Tossing a coin AND rolling a die.",
            "P(A ∩ B) = P(A) × P(B)"
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 21,
    "title": "🟦 21. PROBABILITY OF A OR B",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 21. PROBABILITY OF A OR B",
      "subtitle": "",
      "sections": [
        {
          "heading": "General Addition Rule",
          "items": [
            "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)"
          ]
        },
        {
          "heading": "Example",
          "items": [
            "Draw 1 card. Prob it is a King OR a Heart?",
            "P(King) = 4/52",
            "P(Heart) = 13/52",
            "P(King AND Heart) = 1/52 (The King of Hearts)",
            "Prob = (4+13-1)/52 = 16/52 = 4/13."
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 22,
    "title": "🟦 22. AT LEAST ONE RULE",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 22. AT LEAST ONE RULE",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Shortcut",
          "items": [
            "P(At least 1) = 1 - P(None)"
          ]
        },
        {
          "heading": "Example",
          "items": [
            "3 coins tossed. Prob of AT LEAST 1 Head?",
            "Prob(None) = Prob(All Tails) = 1/8",
            "Prob(At least 1 Head) = 1 - (1/8) = 7/8."
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 23,
    "title": "🟦 23. LEAP YEAR PROBABILITIES",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 23. LEAP YEAR PROBABILITIES",
      "subtitle": "",
      "sections": [
        {
          "heading": "Non-Leap Year (365 days)",
          "items": [
            "365 = 52 weeks + 1 extra day.",
            "Prob of 53 Sundays = 1/7."
          ]
        },
        {
          "heading": "Leap Year (366 days)",
          "items": [
            "366 = 52 weeks + 2 extra days.",
            "Extra days can be (Mon,Tue), (Tue,Wed), (Wed,Thu), (Thu,Fri), (Fri,Sat), (Sat,Sun), (Sun,Mon).",
            "2 pairs have Sunday.",
            "Prob of 53 Sundays = 2/7."
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 24,
    "title": "🟦 24. DIVISIBILITY",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 24. DIVISIBILITY",
      "subtitle": "",
      "sections": [
        {
          "heading": "Example",
          "items": [
            "A number is chosen from 1 to 100. Prob it is divisible by 3 OR 5?"
          ]
        },
        {
          "heading": "Calculation",
          "items": [
            "Divisible by 3: 100/3 = 33",
            "Divisible by 5: 100/5 = 20",
            "Divisible by 15 (LCM): 100/15 = 6",
            "Total Favorable = 33 + 20 - 6 = 47.",
            "Prob = 47/100."
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 25,
    "title": "📌 25. FORMULA BOOK",
    "desc": "",
    "handwrittenContent": {
      "title": "📌 25. FORMULA BOOK",
      "subtitle": "",
      "sections": [
        {
          "heading": "All Formulas",
          "items": [
            "• nPr = n! / (n-r)!",
            "• nCr = n! / [r! × (n-r)!]",
            "• Circular = (n-1)!",
            "• nCr = nC(n-r)",
            "• Handshakes = n(n-1)/2",
            "• P(E) = Fav / Total",
            "• P(A or B) = P(A) + P(B) - P(A and B)",
            "• P(At least 1) = 1 - P(None)"
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 26,
    "title": "🔍 26. QUESTION IDENTIFIER",
    "desc": "",
    "handwrittenContent": {
      "title": "🔍 26. QUESTION IDENTIFIER",
      "subtitle": "",
      "sections": [
        {
          "heading": "Decision Tree",
          "items": [
            {
              "text": "Identify the type:",
              "visual": "Question\n   |\n   ├── \"Form a committee/team\"\n   |      ↓\n   |   Use Combination (C)\n   |\n   ├── \"Arrange in a row/word\"\n   |      ↓\n   |   Use Permutation (!)\n   |\n   ├── \"Draw 2 balls from bag\"\n   |      ↓\n   |   Use C for Fav and Total\n   |\n   └── \"At least one...\"\n          ↓\n       1 - P(None)"
            }
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 27,
    "title": "⚠️ 27. COMMON TRAPS",
    "desc": "",
    "handwrittenContent": {
      "title": "⚠️ 27. COMMON TRAPS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Avoid these in Placements",
          "items": [
            "1. Using Permutation when order doesn't matter (Team selection).",
            "2. Forgetting to divide by repeated letters in word arrangement.",
            "3. In Cards, assuming Ace is a Face Card (It is NOT).",
            "4. In 2 Dice sum, assuming all sums 2-12 have equal probability.",
            "5. Multiplying when you should Add (AND vs OR)."
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 28,
    "title": "🟦 28. BASIC SOLVED EXAMPLES",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 28. BASIC SOLVED EXAMPLES",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": [
        {
          "label": "Word Arrangement",
          "question": "How many ways to arrange letters of 'LEADER'?",
          "statements": [
            "L, E(2), A, D, R. Total = 6 letters. E repeats 2 times."
          ],
          "thinking": "Use formula for repeats: n! / p!",
          "answer": "6! / 2! = 720 / 2 = 360 ways."
        },
        {
          "label": "Basic Coin Prob",
          "question": "Two coins tossed. Prob of getting at most 1 tail?",
          "statements": [
            "Outcomes: HH, HT, TH, TT."
          ],
          "thinking": "At most 1 tail means 0 tails or 1 tail (HH, HT, TH).",
          "answer": "3/4."
        }
      ],
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 29,
    "title": "🟦 29. INTERMEDIATE EXAMPLES",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 29. INTERMEDIATE EXAMPLES",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": [
        {
          "label": "Vowels Together",
          "question": "Arrange 'MACHINE' so vowels are always together.",
          "statements": [
            "Vowels = A, I, E. Consonants = M, C, H, N.",
            "Tie vowels: (AIE), M, C, H, N -> 5 units."
          ],
          "thinking": "Arrange 5 units, then arrange 3 vowels inside.",
          "answer": "5! × 3! = 120 × 6 = 720."
        },
        {
          "label": "Balls Prob",
          "question": "4 Red, 3 Blue. Draw 2 balls. Prob both are Red?",
          "statements": [
            "Fav = 4C2 = 6.",
            "Total = 7C2 = 21."
          ],
          "thinking": "Prob = Fav/Total.",
          "answer": "6/21 = 2/7."
        }
      ],
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 30,
    "title": "🟦 30. PLACEMENT EXAMPLES",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 30. PLACEMENT EXAMPLES",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": [
        {
          "label": "Handshakes",
          "question": "There are 10 people in a room. Each shakes hands with exactly everyone else. Total handshakes?",
          "statements": [
            "Formula is nC2 or n(n-1)/2."
          ],
          "thinking": "10 * 9 / 2.",
          "answer": "45 handshakes."
        }
      ],
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 31,
    "title": "🟢 31. PRACTICE SET (Q1-Q10)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟢 31. PRACTICE SET (Q1-Q10)",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": [
        {
          "text": "Evaluate 6! / 4!.",
          "statements": [
            "A. 10",
            "B. 20",
            "C. 30",
            "D. 40"
          ]
        },
        {
          "text": "In how many ways can 5 boys sit in a row?",
          "statements": [
            "A. 24",
            "B. 60",
            "C. 120",
            "D. 240"
          ]
        },
        {
          "text": "Find 7C2.",
          "statements": [
            "A. 14",
            "B. 21",
            "C. 42",
            "D. 35"
          ]
        },
        {
          "text": "How many ways to arrange letters of word 'APPLE'?",
          "statements": [
            "A. 120",
            "B. 60",
            "C. 30",
            "D. 24"
          ]
        },
        {
          "text": "A coin is tossed 3 times. Prob of getting all heads?",
          "statements": [
            "A. 1/4",
            "B. 1/8",
            "C. 3/8",
            "D. 1/2"
          ]
        },
        {
          "text": "A die is rolled. Prob of getting a prime number?",
          "statements": [
            "A. 1/2",
            "B. 1/3",
            "C. 2/3",
            "D. 1/6"
          ]
        },
        {
          "text": "Draw 1 card from 52. Prob it is an Ace?",
          "statements": [
            "A. 1/13",
            "B. 4/13",
            "C. 1/52",
            "D. 1/26"
          ]
        },
        {
          "text": "How many ways to select a team of 3 from 7 people?",
          "statements": [
            "A. 21",
            "B. 35",
            "C. 42",
            "D. 210"
          ]
        },
        {
          "text": "In how many ways can 6 people sit around a circular table?",
          "statements": [
            "A. 720",
            "B. 120",
            "C. 360",
            "D. 60"
          ]
        },
        {
          "text": "P(E) = 0.3. Find P(Not E).",
          "statements": [
            "A. 0.3",
            "B. 0.7",
            "C. 1.3",
            "D. 0"
          ]
        }
      ],
      "answerKey": null,
      "difficulty": "Beginner"
    }
  },
  {
    "pageNumber": 32,
    "title": "🟡 32. PRACTICE SET (Q11-Q20)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟡 32. PRACTICE SET (Q11-Q20)",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": [
        {
          "text": "How many ways to arrange letters of 'MATHEMATICS'?",
          "statements": [
            "A. 11!",
            "B. 11! / (2!2!2!)",
            "C. 11! / (2!2!)",
            "D. 11! / (3!)"
          ]
        },
        {
          "text": "Arrange 'SOFTWARE' so vowels are always together.",
          "statements": [
            "A. 4320",
            "B. 2160",
            "C. 720",
            "D. 1440"
          ]
        },
        {
          "text": "Select 3 men from 6, and 2 women from 4. Ways?",
          "statements": [
            "A. 100",
            "B. 120",
            "C. 140",
            "D. 160"
          ]
        },
        {
          "text": "From a party of 12, how many handshakes if everyone shakes hands?",
          "statements": [
            "A. 24",
            "B. 48",
            "C. 66",
            "D. 132"
          ]
        },
        {
          "text": "Two dice are thrown. Prob that sum is 9?",
          "statements": [
            "A. 1/9",
            "B. 1/12",
            "C. 1/6",
            "D. 5/36"
          ]
        },
        {
          "text": "A bag has 3 Red, 5 Blue. Draw 2 balls. Prob both are Blue?",
          "statements": [
            "A. 5/14",
            "B. 10/28",
            "C. 5/7",
            "D. 2/7"
          ]
        },
        {
          "text": "Prob of picking a Red card OR a King from 52 cards?",
          "statements": [
            "A. 28/52",
            "B. 30/52",
            "C. 7/13",
            "D. 15/26"
          ]
        },
        {
          "text": "Out of 5 boys and 3 girls, form a committee of 3 with at least 1 girl.",
          "statements": [
            "A. 24",
            "B. 36",
            "C. 46",
            "D. 56"
          ]
        },
        {
          "text": "Number of diagonals in a decagon (10 sides)?",
          "statements": [
            "A. 35",
            "B. 45",
            "C. 55",
            "D. 25"
          ]
        },
        {
          "text": "Toss 4 coins. Prob of getting exactly 2 Heads?",
          "statements": [
            "A. 1/4",
            "B. 3/8",
            "C. 1/2",
            "D. 5/8"
          ]
        }
      ],
      "answerKey": null,
      "difficulty": "Intermediate"
    }
  },
  {
    "pageNumber": 33,
    "title": "🔴 33. PRACTICE SET (Q21-Q30)",
    "desc": "",
    "handwrittenContent": {
      "title": "🔴 33. PRACTICE SET (Q21-Q30)",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": [
        {
          "text": "Prob that a leap year has 53 Fridays OR 53 Saturdays?",
          "statements": [
            "A. 2/7",
            "B. 3/7",
            "C. 4/7",
            "D. 1/7"
          ]
        },
        {
          "text": "In how many ways can 3 letters be posted in 4 letter boxes?",
          "statements": [
            "A. 12",
            "B. 64",
            "C. 81",
            "D. 24"
          ]
        },
        {
          "text": "Arrange 'MISSISSIPPI'. How many ways?",
          "statements": [
            "A. 34650",
            "B. 11!",
            "C. 3150",
            "D. 11550"
          ]
        },
        {
          "text": "Two cards drawn from 52. Prob they are a King and a Queen?",
          "statements": [
            "A. 4/663",
            "B. 8/663",
            "C. 2/663",
            "D. 1/13"
          ]
        },
        {
          "text": "Select 4 members from 6 men, 4 women. Prob of exactly 2 men and 2 women?",
          "statements": [
            "A. 3/7",
            "B. 4/7",
            "C. 2/9",
            "D. 5/14"
          ]
        },
        {
          "text": "Bag A: 3R, 4B. Bag B: 5R, 3B. Pick 1 ball from random bag. Prob it is Red?",
          "statements": [
            "A. 11/15",
            "B. 1/2",
            "C. 59/112",
            "D. 43/56"
          ]
        },
        {
          "text": "How many 3-digit numbers can be formed using 0, 1, 2, 3, 4 without repetition?",
          "statements": [
            "A. 48",
            "B. 60",
            "C. 120",
            "D. 100"
          ]
        },
        {
          "text": "A speaks truth in 75% cases, B in 80% cases. Prob they contradict each other?",
          "statements": [
            "A. 30%",
            "B. 35%",
            "C. 40%",
            "D. 45%"
          ]
        },
        {
          "text": "10 points in a plane, 4 are collinear. Number of straight lines?",
          "statements": [
            "A. 45",
            "B. 40",
            "C. 39",
            "D. 38"
          ]
        },
        {
          "text": "In a race of 5 horses, you must pick 1st, 2nd, and 3rd perfectly to win. Prob of winning?",
          "statements": [
            "A. 1/60",
            "B. 1/120",
            "C. 1/24",
            "D. 1/10"
          ]
        }
      ],
      "answerKey": null,
      "difficulty": "Placement"
    }
  },
  {
    "pageNumber": 34,
    "title": "✅ 34. ANSWER KEY",
    "desc": "",
    "handwrittenContent": {
      "title": "✅ 34. ANSWER KEY",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": [
        "C",
        "C",
        "B",
        "B",
        "B",
        "A",
        "A",
        "B",
        "B",
        "B",
        "B",
        "A",
        "B",
        "C",
        "A",
        "A",
        "C",
        "C",
        "A",
        "B",
        "B",
        "B",
        "A",
        "B",
        "A",
        "C",
        "A",
        "B",
        "B",
        "A"
      ],
      "difficulty": null
    }
  },
  {
    "pageNumber": 35,
    "title": "🧮 35. SOLUTIONS Q1-Q5",
    "desc": "",
    "handwrittenContent": {
      "title": "🧮 35. SOLUTIONS Q1-Q5",
      "subtitle": "",
      "sections": [
        {
          "heading": "Solution Q1",
          "items": [
            "(6*5*4!) / 4! = 30."
          ]
        },
        {
          "heading": "Solution Q2",
          "items": [
            "5! = 120."
          ]
        },
        {
          "heading": "Solution Q3",
          "items": [
            "7 * 6 / 2 * 1 = 21."
          ]
        },
        {
          "heading": "Solution Q4",
          "items": [
            "5! / 2! (P repeats) = 120 / 2 = 60."
          ]
        },
        {
          "heading": "Solution Q5",
          "items": [
            "Outcomes = 8",
            "(HHH) is 1",
            "Prob = 1/8."
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 36,
    "title": "🧮 36. SOLUTIONS Q6-Q10",
    "desc": "",
    "handwrittenContent": {
      "title": "🧮 36. SOLUTIONS Q6-Q10",
      "subtitle": "",
      "sections": [
        {
          "heading": "Solution Q6",
          "items": [
            "Primes = 2, 3, 5 (3 numbers)",
            "Prob = 3/6 = 1/2."
          ]
        },
        {
          "heading": "Solution Q7",
          "items": [
            "4 Aces in 52",
            "Prob = 4/52 = 1/13."
          ]
        },
        {
          "heading": "Solution Q8",
          "items": [
            "7C3 = (7*6*5)/(3*2*1) = 35."
          ]
        },
        {
          "heading": "Solution Q9",
          "items": [
            "Circular: (6-1)! = 5! = 120."
          ]
        },
        {
          "heading": "Solution Q10",
          "items": [
            "1 - 0.3 = 0.7."
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 37,
    "title": "🧮 37. SOLUTIONS Q11-Q15",
    "desc": "",
    "handwrittenContent": {
      "title": "🧮 37. SOLUTIONS Q11-Q15",
      "subtitle": "",
      "sections": [
        {
          "heading": "Solution Q11",
          "items": [
            "11 letters",
            "M=2, A=2, T=2",
            "Ways = 11! / (2!2!2!)."
          ]
        },
        {
          "heading": "Solution Q12",
          "items": [
            "SOFTWARE = S,F,T,W,R + (O,A,E)",
            "6 units",
            "6! * 3! = 720 * 6 = 4320."
          ]
        },
        {
          "heading": "Solution Q13",
          "items": [
            "6C3 * 4C2 = 20 * 6 = 120."
          ]
        },
        {
          "heading": "Solution Q14",
          "items": [
            "12C2 = (12*11)/2 = 66."
          ]
        },
        {
          "heading": "Solution Q15",
          "items": [
            "Ways for 9 = (3,6), (4,5), (5,4), (6,3) = 4 ways",
            "4/36 = 1/9."
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 38,
    "title": "🧮 38. SOLUTIONS Q16-Q20",
    "desc": "",
    "handwrittenContent": {
      "title": "🧮 38. SOLUTIONS Q16-Q20",
      "subtitle": "",
      "sections": [
        {
          "heading": "Solution Q16",
          "items": [
            "Total = 8",
            "Fav = 5C2 = 10",
            "Total = 8C2 = 28",
            "Prob = 10/28 = 5/14."
          ]
        },
        {
          "heading": "Solution Q17",
          "items": [
            "P(Red) + P(King) - P(Red King) = 26/52 + 4/52 - 2/52 = 28/52 = 7/13."
          ]
        },
        {
          "heading": "Solution Q18",
          "items": [
            "Total ways to pick 3 from 8 = 8C3 = 56",
            "Ways with NO girls = 5C3 = 10",
            "At least 1 girl = 56 - 10 = 46."
          ]
        },
        {
          "heading": "Solution Q19",
          "items": [
            "Formula for diagonals = n(n-3)/2",
            "10 * 7 / 2 = 35."
          ]
        },
        {
          "heading": "Solution Q20",
          "items": [
            "Fav = 4C2 = 6",
            "Total = 2^4 = 16",
            "Prob = 6/16 = 3/8."
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 39,
    "title": "🧮 39. SOLUTIONS Q21-Q25",
    "desc": "",
    "handwrittenContent": {
      "title": "🧮 39. SOLUTIONS Q21-Q25",
      "subtitle": "",
      "sections": [
        {
          "heading": "Solution Q21",
          "items": [
            "Leap yr has 2 extra days",
            "Sets with Fri or Sat: (Thu,Fri), (Fri,Sat), (Sat,Sun)",
            "Total 3 sets out of 7",
            "Prob = 3/7."
          ]
        },
        {
          "heading": "Solution Q22",
          "items": [
            "Letter 1 has 4 choices, Letter 2 has 4 choices, Letter 3 has 4 choices",
            "4^3 = 64."
          ]
        },
        {
          "heading": "Solution Q23",
          "items": [
            "11 letters",
            "I=4, S=4, P=2",
            "11! / (4!4!2!) = 34650."
          ]
        },
        {
          "heading": "Solution Q24",
          "items": [
            "Pick 1 K and 1 Q = 4C1 * 4C1 = 16",
            "Total = 52C2 = 1326",
            "Prob = 16/1326 = 8/663."
          ]
        },
        {
          "heading": "Solution Q25",
          "items": [
            "Fav = 6C2 * 4C2 = 15 * 6 = 90",
            "Total = 10C4 = 210",
            "Prob = 90/210 = 3/7."
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 40,
    "title": "🧮 40. SOLUTIONS & REVISION",
    "desc": "",
    "handwrittenContent": {
      "title": "🧮 40. SOLUTIONS & REVISION",
      "subtitle": "",
      "sections": [
        {
          "heading": "Solution Q26",
          "items": [
            "Prob = (1/2)*P(Red from A) + (1/2)*P(Red from B) = (1/2)*(3/7) + (1/2)*(5/8) = (24+35)/112 = 59/112."
          ]
        },
        {
          "heading": "Solution Q27",
          "items": [
            "1st digit cannot be 0 (4 choices)",
            "2nd digit (4 choices)",
            "3rd digit (3 choices)",
            "4 * 4 * 3 = 48."
          ]
        },
        {
          "heading": "Solution Q28",
          "items": [
            "(A truth * B lie) + (A lie * B truth) = (0.75 * 0.20) + (0.25 * 0.80) = 0.15 + 0.20 = 0.35 = 35%."
          ]
        },
        {
          "heading": "Solution Q29",
          "items": [
            "10C2 - 4C2 + 1 = 45 - 6 + 1 = 40",
            "(The 4 collinear points form only 1 line)."
          ]
        },
        {
          "heading": "Solution Q30",
          "items": [
            "Permutation matters here (1st, 2nd, 3rd)",
            "Ways = 5P3 = 5*4*3 = 60",
            "You pick 1 specific order",
            "Prob = 1/60."
          ]
        },
        {
          "heading": "⚡ 5-MINUTE REVISION",
          "items": [
            "• 'AND' means MULTIPLY, 'OR' means ADD.",
            "• Letters repeat? Divide by factorial.",
            "• Vowels together? Tie them as 1 unit.",
            "• At least 1 = 1 - None.",
            "• Collinear lines = nC2 - mC2 + 1."
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  }
]
};