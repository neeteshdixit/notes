export const numberSystemsTopic = {
    id: "number-systems",
    subjectId: "quant",
    title: "Number Systems",
    category: "Quant",
    badgeColor: "#3b82f6",
    accentGradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    pages: [
  {
    "pageNumber": 1,
    "title": "🟦 1. NUMBER SYSTEMS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 1. NUMBER SYSTEMS",
      "subtitle": "From Zero → Placement Level",
      "sections": [
        {
          "heading": "What is Number System?",
          "items": [
            "It is the mathematics of integers. How numbers behave, divisibility, remainders, factors, and trailing zeros."
          ]
        },
        {
          "heading": "Why is it important?",
          "items": [
            "This is the most asked topic in TCS NQT, Infosys, and Capgemini. It tests pure logical mathematics."
          ]
        },
        {
          "heading": "Classification of Numbers",
          "items": [
            {
              "text": "Real Numbers (Everything on number line)",
              "visual": "├── Rational (Fractions, Integers, Terminating)\n│   ├── Integers (..., -2, -1, 0, 1, 2, ...)\n│   └── Fractions (1/2, 3/4)\n└── Irrational (π, √2, non-terminating)"
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
    "title": "🟦 2. PRIME & COMPOSITE NUMBERS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 2. PRIME & COMPOSITE NUMBERS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Definitions",
          "items": [
            "Prime: Divisible by EXACTLY two distinct numbers (1 and itself).",
            "Composite: Divisible by more than two numbers."
          ]
        },
        {
          "heading": "Crucial Facts",
          "items": [
            "1 is NEITHER prime nor composite.",
            "2 is the ONLY even prime number.",
            "Primes up to 50: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 (Total 15)."
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
    "title": "🟦 3. DIVISIBILITY RULES I",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 3. DIVISIBILITY RULES I",
      "subtitle": "",
      "sections": [
        {
          "heading": "Rule of 2, 4, 8",
          "items": [
            "2: Last digit is even.",
            "4: Last 2 digits form a number divisible by 4.",
            "8: Last 3 digits form a number divisible by 8."
          ]
        },
        {
          "heading": "Rule of 3 and 9",
          "items": [
            "3: Sum of all digits is divisible by 3.",
            "9: Sum of all digits is divisible by 9."
          ]
        },
        {
          "heading": "Rule of 5 and 6",
          "items": [
            "5: Last digit is 0 or 5.",
            "6: Number must be divisible by BOTH 2 and 3."
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
    "pageNumber": 4,
    "title": "🟦 4. DIVISIBILITY RULES II",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 4. DIVISIBILITY RULES II",
      "subtitle": "",
      "sections": [
        {
          "heading": "Rule of 11 (Extremely Important)",
          "items": [
            "Difference between (Sum of digits at odd places) and (Sum of digits at even places) must be 0 or a multiple of 11."
          ]
        },
        {
          "heading": "Example: 1331",
          "items": [
            "Odd places: 1 + 3 = 4",
            "Even places: 3 + 1 = 4",
            "Diff = 4 - 4 = 0. So it IS divisible by 11."
          ]
        },
        {
          "heading": "Rule of 7",
          "items": [
            "Double the last digit and subtract it from the rest of the number. If result is div by 7, original is div by 7."
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
    "title": "🟦 5. FINDING THE UNIT DIGIT",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 5. FINDING THE UNIT DIGIT",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Logic",
          "items": [
            "The unit digit of A × B depends ONLY on the unit digits of A and B."
          ]
        },
        {
          "heading": "Example",
          "items": [
            "Unit digit of 123 × 456?",
            "Just do 3 × 6 = 18.",
            "Unit digit is 8."
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
    "title": "🟦 6. UNIT DIGIT (CYCLICITY)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 6. UNIT DIGIT (CYCLICITY)",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Power Cycle of 4",
          "items": [
            "Every number's unit digit repeats in a cycle of 4 powers."
          ]
        },
        {
          "heading": "The Rule",
          "items": [
            "To find unit digit of x^n:",
            "Step 1: Divide power n by 4. Find the remainder (R).",
            "Step 2: If R=1, 2, 3, use x^R.",
            "Step 3: If R=0, use x^4."
          ]
        },
        {
          "heading": "Example",
          "items": [
            "Find unit digit of 7^45.",
            "45 / 4 gives Remainder 1.",
            "Use 7^1 = 7. Unit digit is 7."
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
    "title": "🟦 7. SPECIAL CYCLES",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 7. SPECIAL CYCLES",
      "subtitle": "",
      "sections": [
        {
          "heading": "0, 1, 5, 6",
          "items": [
            "They NEVER change.",
            "6^999 will always end in 6.",
            "5^823 will always end in 5."
          ]
        },
        {
          "heading": "4 and 9 (Cycle of 2)",
          "items": [
            "4^odd ends in 4. 4^even ends in 6.",
            "9^odd ends in 9. 9^even ends in 1."
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
    "title": "🟦 8. REMAINDER THEOREM",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 8. REMAINDER THEOREM",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "Remainder of (A × B) / N = [Rem(A/N) × Rem(B/N)] / N"
          ]
        },
        {
          "heading": "Example",
          "items": [
            "Find remainder of (15 × 17) / 7.",
            "Rem of 15/7 = 1.",
            "Rem of 17/7 = 3.",
            "Result = 1 × 3 = 3."
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
    "title": "🟦 9. NEGATIVE REMAINDERS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 9. NEGATIVE REMAINDERS",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Trick",
          "items": [
            "What is remainder of 14 / 15?",
            "It is 14. BUT it is also -1.",
            "Using -1 makes calculations much easier!"
          ]
        },
        {
          "heading": "Example",
          "items": [
            "Find remainder of (14^3) / 15.",
            "Use negative rem: (-1)^3 = -1.",
            "Final answer = 15 - 1 = 14."
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
    "title": "🟦 10. FERMAT'S THEOREM",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 10. FERMAT'S THEOREM",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Theorem",
          "items": [
            "If P is a prime number, and A is not divisible by P:",
            "Remainder of [A^(P-1)] / P = 1"
          ]
        },
        {
          "heading": "Example",
          "items": [
            "Find remainder of 2^6 / 7.",
            "Here P=7 (prime). Power is 7-1 = 6.",
            "By Fermat, Remainder = 1 instantly."
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
    "title": "🟦 11. TOTAL NUMBER OF FACTORS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 11. TOTAL NUMBER OF FACTORS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Prime Factorization Method",
          "items": [
            "To find how many numbers divide N:",
            "Step 1: Write N = p^a × q^b × r^c (where p, q, r are primes).",
            "Step 2: Total Factors = (a+1)(b+1)(c+1)."
          ]
        },
        {
          "heading": "Example",
          "items": [
            "Find total factors of 120.",
            "120 = 8 × 15 = 2^3 × 3^1 × 5^1.",
            "Factors = (3+1) × (1+1) × (1+1)",
            "= 4 × 2 × 2 = 16 factors."
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
    "title": "🟦 12. TRAILING ZEROS IN FACTORIAL",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 12. TRAILING ZEROS IN FACTORIAL",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "A zero at the end is formed by 10. And 10 is formed by 2 × 5.",
            "In any factorial (like 100!), there are always more 2s than 5s.",
            "So, just count the number of 5s!"
          ]
        },
        {
          "heading": "The Successive Division Method",
          "items": [
            "To find trailing zeros in 100!:",
            "100 / 5 = 20",
            "20 / 5 = 4",
            "Total zeros = 20 + 4 = 24."
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
    "title": "🟦 13. HCF AND LCM",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 13. HCF AND LCM",
      "subtitle": "",
      "sections": [
        {
          "heading": "Definitions",
          "items": [
            "HCF (Highest Common Factor): The largest number that divides all given numbers.",
            "LCM (Lowest Common Multiple): The smallest number divided by all given numbers."
          ]
        },
        {
          "heading": "The Master Rule",
          "items": [
            "For two numbers A and B:",
            "A × B = HCF(A,B) × LCM(A,B)"
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
    "title": "🟦 14. HCF/LCM OF FRACTIONS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 14. HCF/LCM OF FRACTIONS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Formulas",
          "items": [
            "HCF of fractions = (HCF of Numerators) / (LCM of Denominators)",
            "LCM of fractions = (LCM of Numerators) / (HCF of Denominators)"
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
    "title": "🟦 15. LCM REMAINDER TRICK",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 15. LCM REMAINDER TRICK",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Question Type",
          "items": [
            "Find the smallest number which when divided by X, Y, Z leaves remainder R in each case."
          ]
        },
        {
          "heading": "The Solution",
          "items": [
            "Answer = LCM(X, Y, Z) + R"
          ]
        },
        {
          "heading": "If Remainders are different",
          "items": [
            "Div by X leaves r1, Div by Y leaves r2.",
            "If (X - r1) = (Y - r2) = K (a constant difference).",
            "Answer = LCM(X, Y) - K."
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
    "title": "🟦 16. SUCCESSIVE DIVISION",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 16. SUCCESSIVE DIVISION",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "A number is divided by 4, and the REMAINDER is divided by 5... NO!",
            "Successive division means dividing the QUOTIENT of the previous step."
          ]
        },
        {
          "heading": "How to solve",
          "items": [
            "Work backwards. Assume the final quotient is 1 or 0.",
            "Dividend = Divisor × Quotient + Remainder."
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
    "title": "🟦 17. DIGITAL ROOT TRICK",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 17. DIGITAL ROOT TRICK",
      "subtitle": "",
      "sections": [
        {
          "heading": "What is it?",
          "items": [
            "Keep adding the digits of a number until you get a single digit.",
            "Example: 456 -> 4+5+6 = 15 -> 1+5 = 6."
          ]
        },
        {
          "heading": "Why use it?",
          "items": [
            "It helps in checking options quickly for huge multiplication questions."
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
    "title": "🟦 18. PROGRESSIONS (AP/GP)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 18. PROGRESSIONS (AP/GP)",
      "subtitle": "",
      "sections": [
        {
          "heading": "Arithmetic Progression (AP)",
          "items": [
            "Difference (d) is constant. (2, 5, 8, 11...)",
            "Nth term = a + (n-1)d",
            "Sum = n/2 [2a + (n-1)d]"
          ]
        },
        {
          "heading": "Geometric Progression (GP)",
          "items": [
            "Ratio (r) is constant. (2, 6, 18, 54...)",
            "Nth term = a * r^(n-1)",
            "Sum of infinite GP (if -1 < r < 1) = a / (1 - r)"
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
    "title": "🟦 19. IMPORTANT SUM FORMULAS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 19. IMPORTANT SUM FORMULAS",
      "subtitle": "",
      "sections": [
        {
          "heading": "First n natural numbers",
          "items": [
            "Sum = n(n+1)/2"
          ]
        },
        {
          "heading": "Squares of first n",
          "items": [
            "Sum = n(n+1)(2n+1)/6"
          ]
        },
        {
          "heading": "Cubes of first n",
          "items": [
            "Sum = [n(n+1)/2]²"
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
    "title": "🟦 20. ADVANCED REMAINDERS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 20. ADVANCED REMAINDERS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Euler's Totient Theorem",
          "items": [
            "Used for Remainder when divisor is not prime.",
            "A^(E(N)) / N leaves remainder 1 (if A and N are co-prime).",
            "Advanced placements only."
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
    "title": "📌 21. FORMULA BOOK",
    "desc": "",
    "handwrittenContent": {
      "title": "📌 21. FORMULA BOOK",
      "subtitle": "",
      "sections": [
        {
          "heading": "Key Formulas",
          "items": [
            "• A × B = HCF × LCM",
            "• LCM of frac = LCM(Num)/HCF(Den)",
            "• Divisor = (Dividend - Rem) / Quotient",
            "• Factors = (a+1)(b+1)...",
            "• Trailing Zeros = N/5 + N/25 + N/125..."
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
    "title": "🔍 22. QUESTION IDENTIFIER",
    "desc": "",
    "handwrittenContent": {
      "title": "🔍 22. QUESTION IDENTIFIER",
      "subtitle": "",
      "sections": [
        {
          "heading": "Decision Tree",
          "items": [
            {
              "text": "Identify the type:",
              "visual": "Question\n   |\n   ├── \"Find unit digit\" -> Cycle of 4\n   ├── \"Trailing zeros\" -> Divide by 5s\n   ├── \"Smallest num div by X,Y,Z\" -> LCM\n   └── \"Largest num dividing X,Y,Z\" -> HCF"
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
    "pageNumber": 23,
    "title": "⚠️ 23. COMMON TRAPS",
    "desc": "",
    "handwrittenContent": {
      "title": "⚠️ 23. COMMON TRAPS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Avoid these in Placements",
          "items": [
            "1. Treating 1 as a prime number.",
            "2. In unit digit, forgetting that Remainder 0 means power 4.",
            "3. In LCM questions, adding the remainder before taking LCM.",
            "4. Confusing 'divided by' (LCM) with 'dividing' (HCF)."
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
    "title": "🟦 24. BASIC SOLVED EXAMPLES",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 24. BASIC SOLVED EXAMPLES",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": [
        {
          "label": "Unit Digit",
          "question": "Find unit digit of 3^43.",
          "statements": [
            "43 / 4 gives Rem 3."
          ],
          "thinking": "Use 3^3 = 27.",
          "answer": "7."
        }
      ],
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 25,
    "title": "🟦 25. INTERMEDIATE SOLVED EXAMPLES",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 25. INTERMEDIATE SOLVED EXAMPLES",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": [
        {
          "label": "Trailing Zeros",
          "question": "Trailing zeros in 50!?",
          "statements": [
            "50/5 = 10",
            "10/5 = 2"
          ],
          "thinking": "Add quotients.",
          "answer": "12."
        }
      ],
      "questions": null,
      "answerKey": null,
      "difficulty": null
    }
  },
  {
    "pageNumber": 26,
    "title": "🟢 26. PRACTICE SET (Q1-Q10)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟢 26. PRACTICE SET (Q1-Q10)",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": [
        {
          "text": "Which is a prime number?",
          "statements": [
            "A. 9",
            "B. 15",
            "C. 31",
            "D. 39"
          ]
        },
        {
          "text": "Find unit digit of 43 × 58.",
          "statements": [
            "A. 2",
            "B. 4",
            "C. 6",
            "D. 8"
          ]
        },
        {
          "text": "HCF of 12 and 18?",
          "statements": [
            "A. 3",
            "B. 4",
            "C. 6",
            "D. 36"
          ]
        },
        {
          "text": "LCM of 12 and 18?",
          "statements": [
            "A. 6",
            "B. 24",
            "C. 36",
            "D. 72"
          ]
        },
        {
          "text": "If a number is div by 2 and 3, it must be div by?",
          "statements": [
            "A. 5",
            "B. 6",
            "C. 8",
            "D. 9"
          ]
        },
        {
          "text": "Product of 2 numbers is 120. HCF is 2. LCM is?",
          "statements": [
            "A. 30",
            "B. 60",
            "C. 120",
            "D. 240"
          ]
        },
        {
          "text": "Find remainder when 25 is divided by 7.",
          "statements": [
            "A. 1",
            "B. 2",
            "C. 3",
            "D. 4"
          ]
        },
        {
          "text": "Trailing zeros in 10!?",
          "statements": [
            "A. 1",
            "B. 2",
            "C. 3",
            "D. 4"
          ]
        },
        {
          "text": "Sum of first 10 natural numbers?",
          "statements": [
            "A. 45",
            "B. 50",
            "C. 55",
            "D. 60"
          ]
        },
        {
          "text": "Is 1 a prime number?",
          "statements": [
            "A. Yes",
            "B. No",
            "C. Sometimes",
            "D. Only for odd"
          ]
        }
      ],
      "answerKey": null,
      "difficulty": "Beginner"
    }
  },
  {
    "pageNumber": 27,
    "title": "🟡 27. PRACTICE SET (Q11-Q20)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟡 27. PRACTICE SET (Q11-Q20)",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": [
        {
          "text": "Unit digit of (234)^102 + (234)^103?",
          "statements": [
            "A. 0",
            "B. 4",
            "C. 6",
            "D. 8"
          ]
        },
        {
          "text": "Total number of factors of 36?",
          "statements": [
            "A. 6",
            "B. 8",
            "C. 9",
            "D. 12"
          ]
        },
        {
          "text": "What is the remainder when (17^200) / 18?",
          "statements": [
            "A. 1",
            "B. 2",
            "C. 16",
            "D. 17"
          ]
        },
        {
          "text": "Trailing zeros in 100!?",
          "statements": [
            "A. 20",
            "B. 21",
            "C. 24",
            "D. 25"
          ]
        },
        {
          "text": "Smallest number div by 12, 15, 20 leaving remainder 5?",
          "statements": [
            "A. 60",
            "B. 65",
            "C. 120",
            "D. 125"
          ]
        },
        {
          "text": "HCF of 2/3, 4/5, 6/7?",
          "statements": [
            "A. 2/105",
            "B. 12/105",
            "C. 2/35",
            "D. 12/35"
          ]
        },
        {
          "text": "Number 738A6A is div by 11. Find A.",
          "statements": [
            "A. 3",
            "B. 4",
            "C. 9",
            "D. 6"
          ]
        },
        {
          "text": "A number leaves rem 29 when div by 68. Rem when div by 17?",
          "statements": [
            "A. 5",
            "B. 10",
            "C. 12",
            "D. 14"
          ]
        },
        {
          "text": "Find unit digit of 7^95 - 3^58.",
          "statements": [
            "A. 0",
            "B. 4",
            "C. 6",
            "D. 7"
          ]
        },
        {
          "text": "Number of prime factors of (30)^5 ?",
          "statements": [
            "A. 5",
            "B. 10",
            "C. 15",
            "D. 20"
          ]
        }
      ],
      "answerKey": null,
      "difficulty": "Intermediate"
    }
  },
  {
    "pageNumber": 28,
    "title": "🔴 28. PRACTICE SET (Q21-Q30)",
    "desc": "",
    "handwrittenContent": {
      "title": "🔴 28. PRACTICE SET (Q21-Q30)",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": [
        {
          "text": "Rem when 2^64 is divided by 7?",
          "statements": [
            "A. 1",
            "B. 2",
            "C. 3",
            "D. 4"
          ]
        },
        {
          "text": "Largest 4 digit number exactly divisible by 12, 15, 18, 27?",
          "statements": [
            "A. 9720",
            "B. 9936",
            "C. 9960",
            "D. 9990"
          ]
        },
        {
          "text": "Three bells toll at intervals of 9, 12, 15 mins. If they start at 8 AM, when will they toll together?",
          "statements": [
            "A. 9 AM",
            "B. 10 AM",
            "C. 11 AM",
            "D. 11:30 AM"
          ]
        },
        {
          "text": "Successively divided by 3, 5, 8 leaves rem 1, 4, 7. Find number.",
          "statements": [
            "A. 118",
            "B. 120",
            "C. 238",
            "D. 358"
          ]
        },
        {
          "text": "Rem of 3^101 / 11?",
          "statements": [
            "A. 3",
            "B. 4",
            "C. 5",
            "D. 9"
          ]
        },
        {
          "text": "Sum of all factors of 24?",
          "statements": [
            "A. 60",
            "B. 72",
            "C. 84",
            "D. 96"
          ]
        },
        {
          "text": "Find unit digit of 1! + 2! + 3! + ... + 50!",
          "statements": [
            "A. 1",
            "B. 3",
            "C. 5",
            "D. 7"
          ]
        },
        {
          "text": "A boy multiplied 987 by a certain number and got 559981. If answer is wrong, what is correct?",
          "statements": [
            "A. 553707",
            "B. 555111",
            "C. 555681",
            "D. 556581"
          ]
        },
        {
          "text": "Let N = 1421 * 1423 * 1425. Rem when N is div by 12?",
          "statements": [
            "A. 0",
            "B. 3",
            "C. 9",
            "D. 11"
          ]
        },
        {
          "text": "Difference of squares of two consecutive odd integers is always div by?",
          "statements": [
            "A. 3",
            "B. 6",
            "C. 7",
            "D. 8"
          ]
        }
      ],
      "answerKey": null,
      "difficulty": "Placement"
    }
  },
  {
    "pageNumber": 29,
    "title": "✅ 29. ANSWER KEY",
    "desc": "",
    "handwrittenContent": {
      "title": "✅ 29. ANSWER KEY",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": [
        "C",
        "B",
        "C",
        "C",
        "B",
        "B",
        "D",
        "B",
        "C",
        "B",
        "A",
        "C",
        "A",
        "C",
        "B",
        "A",
        "C",
        "C",
        "B",
        "C",
        "B",
        "A",
        "C",
        "C",
        "A",
        "A",
        "B",
        "C",
        "B",
        "D"
      ],
      "difficulty": null
    }
  },
  {
    "pageNumber": 30,
    "title": "🧮 30. SOLUTIONS Q1-Q5",
    "desc": "",
    "handwrittenContent": {
      "title": "🧮 30. SOLUTIONS Q1-Q5",
      "subtitle": "",
      "sections": [
        {
          "heading": "Solution Q1",
          "items": [
            "31 has no factors other than 1 and 31."
          ]
        },
        {
          "heading": "Solution Q2",
          "items": [
            "3 * 8 = 24",
            "Unit digit is 4."
          ]
        },
        {
          "heading": "Solution Q3",
          "items": [
            "Factors of 12 (1,2,3,4,6,12), 18 (1,2,3,6,9,18)",
            "Common is 6."
          ]
        },
        {
          "heading": "Solution Q4",
          "items": [
            "Multiples of 18: 18, 36",
            "36 is div by 12",
            "So 36."
          ]
        },
        {
          "heading": "Solution Q5",
          "items": [
            "2 * 3 = 6."
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
    "pageNumber": 31,
    "title": "🧮 31. SOLUTIONS Q6-Q10",
    "desc": "",
    "handwrittenContent": {
      "title": "🧮 31. SOLUTIONS Q6-Q10",
      "subtitle": "",
      "sections": [
        {
          "heading": "Solution Q6",
          "items": [
            "A * B = HCF * LCM",
            "120 = 2 * LCM",
            "LCM = 60."
          ]
        },
        {
          "heading": "Solution Q7",
          "items": [
            "25 = 7*3 + 4."
          ]
        },
        {
          "heading": "Solution Q8",
          "items": [
            "10/5 = 2."
          ]
        },
        {
          "heading": "Solution Q9",
          "items": [
            "n(n+1)/2 = 10*11/2 = 55."
          ]
        },
        {
          "heading": "Solution Q10",
          "items": [
            "1 has only one factor",
            "Primes need exactly 2 distinct factors."
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
    "pageNumber": 32,
    "title": "🧮 32. SOLUTIONS Q11-Q15",
    "desc": "",
    "handwrittenContent": {
      "title": "🧮 32. SOLUTIONS Q11-Q15",
      "subtitle": "",
      "sections": [
        {
          "heading": "Solution Q11",
          "items": [
            "Unit digits: 4^even + 4^odd = 6 + 4 = 10",
            "Unit is 0."
          ]
        },
        {
          "heading": "Solution Q12",
          "items": [
            "36 = 2^2 * 3^2",
            "Factors = (2+1)(2+1) = 9."
          ]
        },
        {
          "heading": "Solution Q13",
          "items": [
            "17 = -1 mod 18",
            "(-1)^200 = 1."
          ]
        },
        {
          "heading": "Solution Q14",
          "items": [
            "100/5 = 20",
            "20/5 = 4",
            "20+4 = 24."
          ]
        },
        {
          "heading": "Solution Q15",
          "items": [
            "LCM(12,15,20) = 60",
            "60 + 5 = 65."
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
    "pageNumber": 33,
    "title": "🧮 33. SOLUTIONS Q16-Q20",
    "desc": "",
    "handwrittenContent": {
      "title": "🧮 33. SOLUTIONS Q16-Q20",
      "subtitle": "",
      "sections": [
        {
          "heading": "Solution Q16",
          "items": [
            "HCF(2,4,6)/LCM(3,5,7) = 2/105."
          ]
        },
        {
          "heading": "Solution Q17",
          "items": [
            "Odd: A+A+3=2A+3",
            "Even: 6+8+7=21",
            "21 - (2A+3) = 18 - 2A",
            "Div by 11 -> A=9."
          ]
        },
        {
          "heading": "Solution Q18",
          "items": [
            "Since 68 is div by 17",
            "Just do 29/17",
            "Rem = 12."
          ]
        },
        {
          "heading": "Solution Q19",
          "items": [
            "7^95 -> 95/4 rem 3 -> 7^3 = 343 (3)",
            "3^58 -> 58/4 rem 2 -> 3^2 = 9",
            "3 - 9 = -6 -> +10 = 4."
          ]
        },
        {
          "heading": "Solution Q20",
          "items": [
            "30 = 2 * 3 * 5",
            "(2*3*5)^5 = 2^5 * 3^5 * 5^5",
            "Primes = 5+5+5 = 15."
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
    "pageNumber": 34,
    "title": "🧮 34. SOLUTIONS Q21-Q25",
    "desc": "",
    "handwrittenContent": {
      "title": "🧮 34. SOLUTIONS Q21-Q25",
      "subtitle": "",
      "sections": [
        {
          "heading": "Solution Q21",
          "items": [
            "2^64 = (2^3)^21 * 2 = 8^21 * 2",
            "8 mod 7 = 1",
            "1^21 * 2 = 2."
          ]
        },
        {
          "heading": "Solution Q22",
          "items": [
            "LCM(12,15,18,27) = 540",
            "Largest 4-digit = 9999",
            "9999/540 rem is 279",
            "9999-279 = 9720."
          ]
        },
        {
          "heading": "Solution Q23",
          "items": [
            "LCM(9,12,15) = 180 mins = 3 hours",
            "8 AM + 3 hours = 11 AM."
          ]
        },
        {
          "heading": "Solution Q24",
          "items": [
            "Assume last quot = 1",
            "Num = 8*1+7 = 15",
            "Next = 5*15+4 = 79",
            "Next = 3*79+1 = 238."
          ]
        },
        {
          "heading": "Solution Q25",
          "items": [
            "Fermat: 3^10 mod 11 = 1",
            "3^101 = (3^10)^10 * 3 = 1 * 3 = 3."
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
    "pageNumber": 35,
    "title": "🧮 35. SOLUTIONS Q26-Q30",
    "desc": "",
    "handwrittenContent": {
      "title": "🧮 35. SOLUTIONS Q26-Q30",
      "subtitle": "",
      "sections": [
        {
          "heading": "Solution Q26",
          "items": [
            "24 = 2^3 * 3^1",
            "Sum = (2^0+2^1+2^2+2^3)(3^0+3^1) = (15)(4) = 60."
          ]
        },
        {
          "heading": "Solution Q27",
          "items": [
            "1!=1, 2!=2, 3!=6, 4!=24",
            "From 5! onwards, unit digit is 0",
            "Sum = 1+2+6+4 = 13",
            "Unit = 3."
          ]
        },
        {
          "heading": "Solution Q28",
          "items": [
            "Check digital root or divisibility by 3",
            "987 is div by 3",
            "Answer must be div by 3."
          ]
        },
        {
          "heading": "Solution Q29",
          "items": [
            "Rem of 1421/12 = 5",
            "1423/12 = 7",
            "1425/12 = 9",
            "5*7*9 = 315",
            "315/12 rem = 3."
          ]
        },
        {
          "heading": "Solution Q30",
          "items": [
            "(2n+1)^2 - (2n-1)^2 = 4n^2+4n+1 - (4n^2-4n+1) = 8n",
            "Always div by 8."
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