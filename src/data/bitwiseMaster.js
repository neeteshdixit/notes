export const bitwiseTopic = {
    id: "bitwise",
    subjectId: "tech",
    title: "Bitwise Operators",
    category: "Technical",
    badgeColor: "#0f766e",
    accentGradient: "linear-gradient(135deg, #0f766e 0%, #115e59 100%)",
    pages: [
  {
    "pageNumber": 1,
    "title": "🟦 1. BITWISE OPERATIONS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 1. BITWISE OPERATIONS",
      "subtitle": "From Zero → Placement Level",
      "sections": [
        {
          "heading": "What are they?",
          "items": [
            "Computers don't understand 5 or 10. They understand 0 and 1 (Binary).",
            "Bitwise operators perform operations DIRECTLY on the individual bits of numbers.",
            "They are extremely fast!"
          ]
        },
        {
          "heading": "The 6 Bitwise Operators",
          "items": [
            "1. AND (&)",
            "2. OR (|)",
            "3. XOR (^)",
            "4. NOT (~)",
            "5. Left Shift (<<)",
            "6. Right Shift (>>)"
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
    "title": "🟦 2. AND, OR, XOR",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 2. AND, OR, XOR",
      "subtitle": "",
      "sections": [
        {
          "heading": "AND (&)",
          "items": [
            "Both bits must be 1 to get 1.",
            "1 & 1 = 1",
            "1 & 0 = 0",
            "0 & 0 = 0"
          ]
        },
        {
          "heading": "OR (|)",
          "items": [
            "At least one bit must be 1 to get 1.",
            "1 | 0 = 1",
            "0 | 0 = 0"
          ]
        },
        {
          "heading": "XOR (^)",
          "items": [
            "Bits must be DIFFERENT to get 1.",
            "1 ^ 0 = 1",
            "1 ^ 1 = 0",
            "0 ^ 0 = 0"
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
    "title": "🟦 3. LEFT SHIFT (<<)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 3. LEFT SHIFT (<<)",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "Shifts all bits to the left by 'N' places.",
            "Fills empty spaces on the right with 0."
          ]
        },
        {
          "heading": "The Mathematical Formula",
          "items": [
            "x << n = x * (2^n)",
            "Example: 5 << 2",
            "It means: 5 * (2^2) = 5 * 4 = 20.",
            "It's a very fast way to multiply by powers of 2!"
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
    "title": "🟦 4. RIGHT SHIFT (>>)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 4. RIGHT SHIFT (>>)",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "Shifts all bits to the right by 'N' places.",
            "The rightmost bits fall off and are deleted."
          ]
        },
        {
          "heading": "The Mathematical Formula",
          "items": [
            "x >> n = floor( x / (2^n) )",
            "Example: 20 >> 2",
            "It means: 20 / (2^2) = 20 / 4 = 5.",
            "It's a very fast way to divide by powers of 2!"
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
    "title": "🟦 5. BITWISE TRICKS (V.V. IMP)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 5. BITWISE TRICKS (V.V. IMP)",
      "subtitle": "",
      "sections": [
        {
          "heading": "1. Even/Odd Check",
          "items": [
            "If (N & 1) == 1, N is ODD.",
            "If (N & 1) == 0, N is EVEN.",
            "Faster than N % 2 == 0!"
          ]
        },
        {
          "heading": "2. XOR Trick",
          "items": [
            "X ^ X = 0 (XORing a number with itself gives 0).",
            "X ^ 0 = X",
            "Used to find the 'single non-repeating number' in an array where every other number repeats twice."
          ]
        },
        {
          "heading": "3. Power of 2 Check",
          "items": [
            "If N & (N - 1) == 0, then N is a power of 2 (like 4, 8, 16).",
            "(Make sure N > 0)."
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
    "title": "⚠️ 6. PLACEMENT TRAPS",
    "desc": "",
    "handwrittenContent": {
      "title": "⚠️ 6. PLACEMENT TRAPS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Avoid these in Interviews",
          "items": [
            "1. & vs &&: Single '&' is Bitwise AND (evaluates both sides). Double '&&' is Logical AND (short-circuits).",
            "2. ^ means XOR in Java/C/C++. It does NOT mean Power! (Use Math.pow for power).",
            "3. ~ Operator: NOT operator flips 0s and 1s. The formula is: ~N = -(N + 1). So ~5 is -6."
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
    "title": "🟢 7. PRACTICE SET (Q1-Q5)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟢 7. PRACTICE SET (Q1-Q5)",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": [
        {
          "text": "What is 5 & 3?",
          "statements": [
            "A. 1",
            "B. 3",
            "C. 5",
            "D. 7"
          ]
        },
        {
          "text": "What does the expression `x << 1` do mathematically?",
          "statements": [
            "A. Multiplies x by 2",
            "B. Divides x by 2",
            "C. Adds 1 to x",
            "D. Squares x"
          ]
        },
        {
          "text": "Which operator is used to toggle a specific bit?",
          "statements": [
            "A. AND (&)",
            "B. OR (|)",
            "C. XOR (^)",
            "D. NOT (~)"
          ]
        },
        {
          "text": "What is the value of 10 ^ 10?",
          "statements": [
            "A. 100",
            "B. 20",
            "C. 0",
            "D. 1"
          ]
        },
        {
          "text": "How to check if an integer 'n' is a power of 2?",
          "statements": [
            "A. n & 1 == 0",
            "B. n | (n-1) == 0",
            "C. n & (n-1) == 0",
            "D. n ^ (n-1) == 0"
          ]
        }
      ],
      "answerKey": null,
      "difficulty": "Beginner"
    }
  },
  {
    "pageNumber": 8,
    "title": "🟡 8. PRACTICE SET (Q6-Q10)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟡 8. PRACTICE SET (Q6-Q10)",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": [
        {
          "text": "What is the value of ~5?",
          "statements": [
            "A. 5",
            "B. -5",
            "C. 6",
            "D. -6"
          ]
        },
        {
          "text": "What is 16 >> 2?",
          "statements": [
            "A. 32",
            "B. 4",
            "C. 8",
            "D. 64"
          ]
        },
        {
          "text": "To check if a number 'N' is ODD using bitwise operators, you use:",
          "statements": [
            "A. N & 1 == 1",
            "B. N | 1 == 1",
            "C. N ^ 1 == 1",
            "D. N >> 1 == 1"
          ]
        },
        {
          "text": "In an array, every number appears twice except one number. Which operator is best to find it?",
          "statements": [
            "A. AND",
            "B. OR",
            "C. XOR",
            "D. NOT"
          ]
        },
        {
          "text": "What is the output of 7 | 4?",
          "statements": [
            "A. 7",
            "B. 3",
            "C. 11",
            "D. 4"
          ]
        }
      ],
      "answerKey": null,
      "difficulty": "Placement"
    }
  },
  {
    "pageNumber": 9,
    "title": "✅ 9. ANSWER KEY",
    "desc": "",
    "handwrittenContent": {
      "title": "✅ 9. ANSWER KEY",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": [
        "A",
        "A",
        "C",
        "C",
        "C",
        "D",
        "B",
        "A",
        "C",
        "A"
      ],
      "difficulty": null
    }
  }
]
};