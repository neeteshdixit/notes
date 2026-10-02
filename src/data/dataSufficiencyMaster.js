export const dataSufficiencyTopic = {
    id: "data-sufficiency",
    subjectId: "lr",
    title: "Data Sufficiency",
    category: "Logical Reasoning",
    badgeColor: "#64748b",
    accentGradient: "linear-gradient(135deg, #64748b 0%, #475569 100%)",
    pages: [
  {
    "pageNumber": 1,
    "title": "🟦 1. DATA SUFFICIENCY",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 1. DATA SUFFICIENCY",
      "subtitle": "From Zero → Placement Level",
      "sections": [
        {
          "heading": "What is Data Sufficiency (DS)?",
          "items": [
            "In DS, you DO NOT have to solve the problem.",
            "You only need to check IF the given information is ENOUGH to solve the problem."
          ]
        },
        {
          "heading": "The Standard Options",
          "items": [
            "Usually, every DS question has these 5 options:",
            "A. Statement I alone is sufficient.",
            "B. Statement II alone is sufficient.",
            "C. Either I or II alone is sufficient.",
            "D. Both I and II together are NOT sufficient.",
            "E. Both I and II together are necessary."
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
    "title": "🟦 2. THE GOLDEN RULE OF DS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 2. THE GOLDEN RULE OF DS",
      "subtitle": "",
      "sections": [
        {
          "heading": "A Unique Answer",
          "items": [
            "For data to be 'sufficient', it MUST give a SINGLE, UNIQUE answer.",
            "If you get 'Yes' and 'No' both, it is NOT sufficient.",
            "If you get x = 5 AND x = -5, it is NOT sufficient (unless question asks for x²)."
          ]
        },
        {
          "heading": "Don't solve completely!",
          "items": [
            "Stop calculating the moment you know an answer EXISTS.",
            "If you know 'Distance = 143.52' and 'Speed = 23.4', you don't need to divide to find Time. You know it CAN be found."
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
    "title": "🟦 3. THE ELIMINATION STRATEGY",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 3. THE ELIMINATION STRATEGY",
      "subtitle": "",
      "sections": [
        {
          "heading": "Step-by-Step Flowchart",
          "items": [
            {
              "text": "Follow this exact sequence in your brain:",
              "visual": "Check Statement I alone\n   │\n   ├── [SUFFICIENT] -> Answer is A or D (if D means 'either') -> Check II.\n   │\n   └── [NOT SUFFICIENT] -> Answer is B, C, or E. -> Check II alone."
            }
          ]
        },
        {
          "heading": "When to Combine?",
          "items": [
            "NEVER combine Statement I and II initially.",
            "Combine them ONLY IF both I alone and II alone fail."
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
    "title": "🟦 4. DS IN NUMBER SYSTEMS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 4. DS IN NUMBER SYSTEMS",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Scenario",
          "items": [
            "Question: Is x an even number?",
            "I. x is a multiple of 4.",
            "II. x is divisible by 2."
          ]
        },
        {
          "heading": "The Analysis",
          "items": [
            "Check I: Multiples of 4 are (4, 8, 12...). All are even. -> UNIQUE 'Yes'. (I is sufficient)",
            "Check II: Divisible by 2 means even. -> UNIQUE 'Yes'. (II is sufficient)",
            "Answer: Either I or II is sufficient (Option C)."
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
    "title": "🟦 5. DS IN ALGEBRA",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 5. DS IN ALGEBRA",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Scenario",
          "items": [
            "Question: What is the value of x?",
            "I. x² = 25",
            "II. x > 0"
          ]
        },
        {
          "heading": "The Analysis",
          "items": [
            "Check I: x = 5 OR x = -5. Not unique! (I is NOT sufficient).",
            "Check II: Just says x is positive. (II is NOT sufficient).",
            "Combine: x=5 or -5, AND x>0. So x MUST be 5. Unique answer! (Both together are sufficient)."
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
    "title": "🟦 6. DS IN GEOMETRY",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 6. DS IN GEOMETRY",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Visual Trap",
          "items": [
            "Never trust geometry based on how you 'imagine' it.",
            "Question: What is the area of the rectangle?",
            "I. Perimeter is 20.",
            "II. Diagonal is 5√2."
          ]
        },
        {
          "heading": "The Analysis",
          "items": [
            "I: 2(L+B) = 20 -> L+B=10. Area = L*B. Many values (6*4=24, 5*5=25). (Not suff).",
            "II: L² + B² = 50. Not suff.",
            "Combine: (L+B)² = L² + B² + 2LB. 100 = 50 + 2(Area). Area = 25. Unique! (Both suff)."
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
    "title": "⚠️ 7. COMMON TRAPS",
    "desc": "",
    "handwrittenContent": {
      "title": "⚠️ 7. COMMON TRAPS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Avoid these in Placements",
          "items": [
            "1. Solving the whole equation and wasting time.",
            "2. Combining statements before checking them individually.",
            "3. Assuming variables are positive integers. (What if x is a fraction? Or negative?).",
            "4. Answering 'Yes' from Statement I and 'No' from Statement II. (This means both are sufficient!)."
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
    "title": "🟢 8. PRACTICE (Q1-Q5)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟢 8. PRACTICE (Q1-Q5)",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": [
        {
          "text": "Is x an integer?\nI. 3x is an integer.\nII. x/3 is an integer.",
          "statements": [
            "A. Statement I alone is sufficient",
            "B. Statement II alone is sufficient",
            "C. Either I or II alone is sufficient",
            "D. Both I and II together are NOT sufficient",
            "E. Both I and II together are necessary"
          ]
        },
        {
          "text": "What is the value of x?\nI. 2x + y = 10\nII. y = 4",
          "statements": [
            "A. Statement I alone is sufficient",
            "B. Statement II alone is sufficient",
            "C. Either I or II alone is sufficient",
            "D. Both I and II together are NOT sufficient",
            "E. Both I and II together are necessary"
          ]
        },
        {
          "text": "Is ABCD a square?\nI. All 4 sides are equal.\nII. One angle is 90 degrees.",
          "statements": [
            "A. Statement I alone is sufficient",
            "B. Statement II alone is sufficient",
            "C. Either I or II alone is sufficient",
            "D. Both I and II together are NOT sufficient",
            "E. Both I and II together are necessary"
          ]
        },
        {
          "text": "What is A's salary?\nI. A earns 20% more than B.\nII. B earns Rs 50,000.",
          "statements": [
            "A. Statement I alone is sufficient",
            "B. Statement II alone is sufficient",
            "C. Either I or II alone is sufficient",
            "D. Both I and II together are NOT sufficient",
            "E. Both I and II together are necessary"
          ]
        },
        {
          "text": "Is x > y?\nI. x = y + 5\nII. x and y are positive.",
          "statements": [
            "A. Statement I alone is sufficient",
            "B. Statement II alone is sufficient",
            "C. Either I or II alone is sufficient",
            "D. Both I and II together are NOT sufficient",
            "E. Both I and II together are necessary"
          ]
        }
      ],
      "answerKey": null,
      "difficulty": "Beginner"
    }
  },
  {
    "pageNumber": 9,
    "title": "🟡 9. PRACTICE (Q6-Q10)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟡 9. PRACTICE (Q6-Q10)",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": [
        {
          "text": "What is the two-digit number?\nI. Sum of digits is 8.\nII. Diff between digits is 2.",
          "statements": [
            "A. Statement I alone is sufficient",
            "B. Statement II alone is sufficient",
            "C. Either I or II alone is sufficient",
            "D. Both I and II together are NOT sufficient",
            "E. Both I and II together are necessary"
          ]
        },
        {
          "text": "In a class, what is the average weight?\nI. Avg weight of boys is 50kg.\nII. Avg weight of girls is 40kg.",
          "statements": [
            "A. Statement I alone is sufficient",
            "B. Statement II alone is sufficient",
            "C. Either I or II alone is sufficient",
            "D. Both I and II together are NOT sufficient",
            "E. Both I and II together are necessary"
          ]
        },
        {
          "text": "Find the speed of the train.\nI. Train crosses a 100m platform in 10s.\nII. Length of train is 200m.",
          "statements": [
            "A. Statement I alone is sufficient",
            "B. Statement II alone is sufficient",
            "C. Either I or II alone is sufficient",
            "D. Both I and II together are NOT sufficient",
            "E. Both I and II together are necessary"
          ]
        },
        {
          "text": "Is x a prime number?\nI. x is odd.\nII. x < 5.",
          "statements": [
            "A. Statement I alone is sufficient",
            "B. Statement II alone is sufficient",
            "C. Either I or II alone is sufficient",
            "D. Both I and II together are NOT sufficient",
            "E. Both I and II together are necessary"
          ]
        },
        {
          "text": "What is the profit percentage?\nI. Cost price is Rs 400.\nII. Selling price is Rs 500.",
          "statements": [
            "A. Statement I alone is sufficient",
            "B. Statement II alone is sufficient",
            "C. Either I or II alone is sufficient",
            "D. Both I and II together are NOT sufficient",
            "E. Both I and II together are necessary"
          ]
        }
      ],
      "answerKey": null,
      "difficulty": "Intermediate"
    }
  },
  {
    "pageNumber": 10,
    "title": "🔴 10. PRACTICE (Q11-Q15)",
    "desc": "",
    "handwrittenContent": {
      "title": "🔴 10. PRACTICE (Q11-Q15)",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": [
        {
          "text": "Is x³ > x²?\nI. x > 0\nII. x < 1",
          "statements": [
            "A. Statement I alone is sufficient",
            "B. Statement II alone is sufficient",
            "C. Either I or II alone is sufficient",
            "D. Both I and II together are NOT sufficient",
            "E. Both I and II together are necessary"
          ]
        },
        {
          "text": "Find the area of the circle.\nI. Perimeter of a square inscribed in it is 24.\nII. Radius is a prime number.",
          "statements": [
            "A. Statement I alone is sufficient",
            "B. Statement II alone is sufficient",
            "C. Either I or II alone is sufficient",
            "D. Both I and II together are NOT sufficient",
            "E. Both I and II together are necessary"
          ]
        },
        {
          "text": "Who is taller, A or B?\nI. A is taller than C.\nII. B is shorter than C.",
          "statements": [
            "A. Statement I alone is sufficient",
            "B. Statement II alone is sufficient",
            "C. Either I or II alone is sufficient",
            "D. Both I and II together are NOT sufficient",
            "E. Both I and II together are necessary"
          ]
        },
        {
          "text": "Is integer n divisible by 15?\nI. n is multiple of 5.\nII. n is multiple of 6.",
          "statements": [
            "A. Statement I alone is sufficient",
            "B. Statement II alone is sufficient",
            "C. Either I or II alone is sufficient",
            "D. Both I and II together are NOT sufficient",
            "E. Both I and II together are necessary"
          ]
        },
        {
          "text": "What day of the week is it?\nI. Yesterday was not Monday.\nII. Tomorrow is Wednesday.",
          "statements": [
            "A. Statement I alone is sufficient",
            "B. Statement II alone is sufficient",
            "C. Either I or II alone is sufficient",
            "D. Both I and II together are NOT sufficient",
            "E. Both I and II together are necessary"
          ]
        }
      ],
      "answerKey": null,
      "difficulty": "Placement"
    }
  },
  {
    "pageNumber": 11,
    "title": "✅ 11. ANSWER KEY",
    "desc": "",
    "handwrittenContent": {
      "title": "✅ 11. ANSWER KEY",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": [
        "B",
        "E",
        "E",
        "E",
        "A",
        "D",
        "D",
        "E",
        "D",
        "E",
        "E",
        "A",
        "E",
        "E",
        "B"
      ],
      "difficulty": null
    }
  },
  {
    "pageNumber": 12,
    "title": "🧮 12. SOLUTIONS Q1-Q5",
    "desc": "",
    "handwrittenContent": {
      "title": "🧮 12. SOLUTIONS Q1-Q5",
      "subtitle": "",
      "sections": [
        {
          "heading": "Solution Q1",
          "items": [
            "I: 3x=integer",
            "x could be 1/3 (Not int)",
            "Not suff",
            "II: x/3=int",
            "Means x = 3 * int = int",
            "Suff",
            "Ans B."
          ]
        },
        {
          "heading": "Solution Q2",
          "items": [
            "I: Need y",
            "II: Need eq",
            "Together: 2x+4=10",
            "x=3",
            "Both needed",
            "Ans E."
          ]
        },
        {
          "heading": "Solution Q3",
          "items": [
            "I: Could be rhombus",
            "II: Not suff",
            "Together: Rhombus + 90 deg = Square",
            "Both needed",
            "Ans E."
          ]
        },
        {
          "heading": "Solution Q4",
          "items": [
            "I gives ratio",
            "II gives absolute value",
            "Together give A's salary",
            "Ans E."
          ]
        },
        {
          "heading": "Solution Q5",
          "items": [
            "I: x-y = 5",
            "Diff is positive, so x>y",
            "Suff alone",
            "Ans A."
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
    "title": "🧮 13. SOLUTIONS Q6-Q10",
    "desc": "",
    "handwrittenContent": {
      "title": "🧮 13. SOLUTIONS Q6-Q10",
      "subtitle": "",
      "sections": [
        {
          "heading": "Solution Q6",
          "items": [
            "I: 17,71,26,62,35,53,44",
            "II: Many diff 2s",
            "Together: 53 or 35",
            "Still TWO answers! Not unique! Ans D."
          ]
        },
        {
          "heading": "Solution Q7",
          "items": [
            "Need ratio of boys and girls to find combined average",
            "Not given",
            "Ans D."
          ]
        },
        {
          "heading": "Solution Q8",
          "items": [
            "I: Speed = (L+100)/10",
            "Need L",
            "II gives L=200",
            "Together, Speed = 300/10 = 30",
            "Ans E."
          ]
        },
        {
          "heading": "Solution Q9",
          "items": [
            "I: 9 is odd but not prime",
            "II: Primes < 5 are 2,3",
            "1 is not prime",
            "Even combined: Odd and <5 means 3 and 1",
            "3 is prime, 1 is not",
            "Not unique",
            "Ans D."
          ]
        },
        {
          "heading": "Solution Q10",
          "items": [
            "Both needed to calculate Profit = SP-CP",
            "Ans E."
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
    "title": "🧮 14. SOLUTIONS Q11-Q15",
    "desc": "",
    "handwrittenContent": {
      "title": "🧮 14. SOLUTIONS Q11-Q15",
      "subtitle": "",
      "sections": [
        {
          "heading": "Solution Q11",
          "items": [
            "For x³ > x², divide by x² (since x!=0)",
            "Need x > 1",
            "I: x>0 (could be 0.5, 0.5³<0.5²)",
            "Not suff",
            "II: x<1",
            "Combine: 0<x<1",
            "Here x³ < x²",
            "UNIQUE 'NO'",
            "So both suff to answer 'No'",
            "Ans E."
          ]
        },
        {
          "heading": "Solution Q12",
          "items": [
            "I: Square peri=24 -> side=6",
            "Diagonal = 6√2",
            "Circle diameter = diagonal",
            "So Area can be found",
            "Suff",
            "Ans A."
          ]
        },
        {
          "heading": "Solution Q13",
          "items": [
            "I: A>C",
            "II: B<C",
            "Combine: A > C > B",
            "Therefore A > B",
            "Both needed",
            "Ans E."
          ]
        },
        {
          "heading": "Solution Q14",
          "items": [
            "Need div by 3 and 5",
            "I gives 5",
            "II gives 6 (which implies 2 and 3)",
            "Combine: Div by 5 and 3",
            "So div by 15",
            "Ans E."
          ]
        },
        {
          "heading": "Solution Q15",
          "items": [
            "II alone gives: Today is Tuesday",
            "Unique answer",
            "Ans B."
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