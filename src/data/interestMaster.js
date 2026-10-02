export const interestTopic = {
    id: "simple-compound-interest",
    subjectId: "quant",
    title: "Simple & Compound Interest",
    category: "Quant",
    badgeColor: "#14b8a6",
    accentGradient: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
    pages: [
  {
    "pageNumber": 1,
    "title": "🟦 1. SIMPLE & COMPOUND INTEREST",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 1. SIMPLE & COMPOUND INTEREST",
      "subtitle": "From Zero → Placement Level",
      "sections": [
        {
          "heading": "What is Interest?",
          "items": [
            "When you borrow money, you pay extra for using it. That extra money is Interest."
          ]
        },
        {
          "heading": "Basic Terms",
          "items": [
            "Principal (P): Original money borrowed or invested.",
            "Rate (R): Percentage charged per year (usually % p.a.).",
            "Time (T): Duration the money is kept (in years!).",
            "Amount (A): Total money returned (Principal + Interest)."
          ]
        },
        {
          "heading": "SI vs CI Difference",
          "items": [
            {
              "text": "Simple Interest (SI) is calculated ONLY on the Principal.",
              "visual": "SI -> Every year you pay the SAME interest."
            },
            {
              "text": "Compound Interest (CI) is calculated on Principal + Previous Interest.",
              "visual": "CI -> Interest on Interest! It grows much faster."
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
    "title": "🟦 2. SIMPLE INTEREST FORMULA",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 2. SIMPLE INTEREST FORMULA",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Universal Formula",
          "items": [
            "SI = (P × R × T) / 100"
          ]
        },
        {
          "heading": "Example",
          "items": [
            "P = 1000, R = 10%, T = 3 years.",
            "SI = (1000 × 10 × 3) / 100 = 300.",
            "Amount = 1000 + 300 = 1300."
          ]
        },
        {
          "heading": "The Percentage Trick",
          "items": [
            "Instead of the formula, just think in %.",
            "Total Interest % = R × T.",
            "If R = 10% and T = 3 years, total SI = 30%.",
            "30% of 1000 = 300. Done instantly!"
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
    "title": "🟦 3. FINDING MISSING VALUES (SI)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 3. FINDING MISSING VALUES (SI)",
      "subtitle": "",
      "sections": [
        {
          "heading": "Derived Formulas",
          "items": [
            "Just re-arrange the main formula:",
            "P = (100 × SI) / (R × T)",
            "R = (100 × SI) / (P × T)",
            "T = (100 × SI) / (P × R)"
          ]
        },
        {
          "heading": "Time Trap",
          "items": [
            "If Time is given in months, divide by 12.",
            "6 months = 6/12 = 1/2 year.",
            "If Time is given in days, divide by 365.",
            "73 days = 73/365 = 1/5 year."
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
    "title": "🟦 4. SUM BECOMES 'N' TIMES",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 4. SUM BECOMES 'N' TIMES",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Scenario",
          "items": [
            "A sum of money doubles itself in 5 years. Find the rate."
          ]
        },
        {
          "heading": "The Logic",
          "items": [
            "Sum doubles means Amount = 2P.",
            "So, Interest earned = Amount - P = 2P - P = P.",
            "You earned 100% of P in 5 years."
          ]
        },
        {
          "heading": "⚡ The Shortcut Formula",
          "items": [
            "R = 100(N - 1) / T",
            "T = 100(N - 1) / R",
            "Example: Doubles (N=2), T=5. R = 100(2-1)/5 = 20%."
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
    "title": "🟦 5. SPLITTING PRINCIPAL (SI)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 5. SPLITTING PRINCIPAL (SI)",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Scenario",
          "items": [
            "₹10,000 is lent in two parts: Part 1 at 5% and Part 2 at 10%.",
            "Total SI earned is ₹700."
          ]
        },
        {
          "heading": "Method 1: Equation",
          "items": [
            "Let parts be x and (10000 - x).",
            "(x * 5 * 1)/100 + ((10000-x) * 10 * 1)/100 = 700."
          ]
        },
        {
          "heading": "Method 2: Mixture & Alligation (Fastest)",
          "items": [
            "Average Rate = (700 / 10000) * 100 = 7%.",
            "Mix 5% and 10% to get 7%. Ratio is (10-7) : (7-5) = 3 : 2.",
            "Parts are 6000 and 4000."
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
    "title": "🟦 6. COMPOUND INTEREST (CI)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 6. COMPOUND INTEREST (CI)",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Formula",
          "items": [
            "Amount = P × (1 + R/100)^T",
            "CI = Amount - Principal"
          ]
        },
        {
          "heading": "Example",
          "items": [
            "P = 1000, R = 10%, T = 2 years.",
            "A = 1000 × (1 + 10/100)² = 1000 × (11/10)²",
            "A = 1000 × 121/100 = 1210.",
            "CI = 1210 - 1000 = 210."
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
    "title": "🟦 7. THE MULTIPLIER (TREE) METHOD",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 7. THE MULTIPLIER (TREE) METHOD",
      "subtitle": "",
      "sections": [
        {
          "heading": "Why formula is bad?",
          "items": [
            "If T=3 and R=15%, doing (1.15)³ is a nightmare."
          ]
        },
        {
          "heading": "The Ratio / Tree Method",
          "items": [
            {
              "text": "For 2 years, Ratio is 2:1",
              "visual": "P = 1000, R = 10%\nStep 1: 10% of 1000 = 100\nStep 2: 10% of 100 = 10\n\nCI = 2×(100) + 1×(10) = 200 + 10 = 210."
            },
            {
              "text": "For 3 years, Ratio is 3:3:1",
              "visual": "Step 3: 10% of 10 = 1\nCI = 3×(100) + 3×(10) + 1×(1) = 300 + 30 + 1 = 331."
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
    "pageNumber": 8,
    "title": "🟦 8. SUCCESSIVE FRACTION METHOD",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 8. SUCCESSIVE FRACTION METHOD",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Logic",
          "items": [
            "CI is exactly the same as Successive Percentage Increase."
          ]
        },
        {
          "heading": "Example",
          "items": [
            "P = 10,000. R = 20%. T = 2 years.",
            "20% = 1/5. This means Principal 5 becomes Amount 6.",
            "Year 1: 5 -> 6",
            "Year 2: 5 -> 6",
            "Multiply: 25 -> 36.",
            "So P = 25 units, A = 36 units. CI = 11 units.",
            "If 25 units = 10,000, then 1 unit = 400.",
            "CI = 11 × 400 = 4400."
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
    "title": "🟦 9. DIFFERENT COMPOUNDING PERIODS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 9. DIFFERENT COMPOUNDING PERIODS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Compounded Half-Yearly",
          "items": [
            "The bank gives interest every 6 months.",
            "Rate is halved: R -> R/2",
            "Time (cycles) is doubled: T -> 2T"
          ]
        },
        {
          "heading": "Compounded Quarterly",
          "items": [
            "The bank gives interest every 3 months.",
            "Rate is quartered: R -> R/4",
            "Time (cycles) is 4 times: T -> 4T"
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
    "title": "🟦 10. CI - SI DIFFERENCE TRICKS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 10. CI - SI DIFFERENCE TRICKS",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "For the 1st year, CI and SI are EXACTLY the same.",
            "Difference starts from the 2nd year (Interest on Interest)."
          ]
        },
        {
          "heading": "⚡ Formula for 2 Years",
          "items": [
            "Diff = P(R/100)²",
            "Example: P=1000, R=10%. Diff = 1000(10/100)² = 1000(1/100) = 10."
          ]
        },
        {
          "heading": "⚡ Formula for 3 Years",
          "items": [
            "Diff = P(R/100)² * (3 + R/100)"
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
    "title": "🟦 11. CI 'TIMES' MULTIPLICATION",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 11. CI 'TIMES' MULTIPLICATION",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Scenario",
          "items": [
            "A sum doubles in 3 years at CI. In how many years will it become 8 times?"
          ]
        },
        {
          "heading": "The Logic",
          "items": [
            "Unlike SI (which adds), CI MULTIPLIES.",
            "3 yrs -> ×2",
            "Next 3 yrs -> ×2 (Total ×4)",
            "Next 3 yrs -> ×2 (Total ×8)"
          ]
        },
        {
          "heading": "⚡ The Shortcut",
          "items": [
            "Express the target as a power of the base.",
            "8 = 2³.",
            "Time = Original Time × Power",
            "Time = 3 × 3 = 9 years."
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
    "title": "🟦 12. INSTALLMENTS IN SI",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 12. INSTALLMENTS IN SI",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "You pay back a loan in equal yearly amounts (X).",
            "Debt = Total amount to be paid at end of time if NO installments were given."
          ]
        },
        {
          "heading": "⚡ The Formula",
          "items": [
            "Installment (X) = (100 × Debt) / (100T + R×T×(T-1)/2)"
          ]
        },
        {
          "heading": "Example",
          "items": [
            "Debt = 1092, T=3, R=12%.",
            "X = (100*1092) / (300 + 12*3*2/2) = 109200 / 336 = 325."
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
    "title": "🟦 13. INSTALLMENTS IN CI",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 13. INSTALLMENTS IN CI",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "Present Value of all installments must equal the Loan Principal."
          ]
        },
        {
          "heading": "The Formula for 2 Installments",
          "items": [
            "P = [X / (1+R/100)] + [X / (1+R/100)²]"
          ]
        },
        {
          "heading": "Fraction Trick",
          "items": [
            "If R=10% (1/10). Multiplier = 11/10.",
            "Year 1: Principal 10, Installment 11",
            "Year 2: Principal 100, Installment 121",
            "Make Installments equal! Multiply Year 1 by 11.",
            "Year 1: P=110, I=121. Year 2: P=100, I=121.",
            "Total P = 210. Installment = 121."
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
    "title": "🟦 14. POPULATION & DEPRECIATION",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 14. POPULATION & DEPRECIATION",
      "subtitle": "",
      "sections": [
        {
          "heading": "Population Growth",
          "items": [
            "Acts exactly like Compound Interest.",
            "P_new = P_old (1 + R/100)^T"
          ]
        },
        {
          "heading": "Depreciation (Machines/Cars)",
          "items": [
            "Value DECREASES every year.",
            "Value = P (1 - R/100)^T"
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
    "title": "🟦 15. P FROM DIFF (2 YEARS)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 15. P FROM DIFF (2 YEARS)",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Scenario",
          "items": [
            "Difference between CI and SI for 2 years at 5% is ₹25. Find Principal."
          ]
        },
        {
          "heading": "Using Formula",
          "items": [
            "Diff = P(R/100)²",
            "25 = P(5/100)² = P(1/20)² = P / 400",
            "P = 25 × 400 = 10,000."
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
    "title": "🟦 16. FINDING RATE IN CI",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 16. FINDING RATE IN CI",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Scenario",
          "items": [
            "A sum becomes 1.44 times itself in 2 years at CI. Find R."
          ]
        },
        {
          "heading": "⚡ The Root Trick",
          "items": [
            "A / P = (1 + R/100)^T",
            "1.44 = (1 + R/100)²",
            "Take square root (because T=2):",
            "1.2 = 1 + R/100",
            "0.2 = R/100 => R = 20%."
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
    "title": "🟦 17. FRACTIONAL YEARS IN CI",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 17. FRACTIONAL YEARS IN CI",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Scenario",
          "items": [
            "Time = 2.5 years, Rate = 10%."
          ]
        },
        {
          "heading": "How to calculate?",
          "items": [
            "Year 1: 10%",
            "Year 2: 10%",
            "Next 0.5 Year: Rate becomes 10% / 2 = 5%.",
            "Amount = P × (1.1) × (1.1) × (1.05)"
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
    "title": "🟦 18. EQUAL SI AND CI",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 18. EQUAL SI AND CI",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Trap",
          "items": [
            "For the first year (or first compounding period), SI and CI are EXACTLY the same.",
            "If someone says 'Interest earned in 1st year', don't waste time looking for CI formulas."
          ]
        },
        {
          "heading": "Finding Rate from Year 1 and 2",
          "items": [
            "SI for 2 years = 100. CI for 2 years = 105.",
            "Year 1 SI = 50. Year 2 SI = 50.",
            "Year 1 CI = 50. Year 2 CI = 55.",
            "The extra 5 is the interest ON the 1st year's 50.",
            "Rate = (5 / 50) × 100 = 10%."
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
    "title": "🟦 19. VARIABLE RATES (R1, R2, R3)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 19. VARIABLE RATES (R1, R2, R3)",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Scenario",
          "items": [
            "Rate is 5% in Yr 1, 10% in Yr 2, 20% in Yr 3."
          ]
        },
        {
          "heading": "In Simple Interest",
          "items": [
            "Just add the rates!",
            "Total SI % = 5 + 10 + 20 = 35% of P."
          ]
        },
        {
          "heading": "In Compound Interest",
          "items": [
            "Multiply the multipliers!",
            "Amount = P × (1.05) × (1.10) × (1.20)"
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
    "title": "🟦 20. PARTIAL PAYMENTS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 20. PARTIAL PAYMENTS",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Scenario",
          "items": [
            "Borrowed 1000 at 10% SI. Paid 500 after 1 year. How much to pay at end of 2nd year?"
          ]
        },
        {
          "heading": "Step-by-step",
          "items": [
            "End of Yr 1: Debt = 1000 + 10% of 1000 = 1100.",
            "Pay 500. Remaining Principal = 1100 - 500 = 600.",
            "End of Yr 2: Interest is on 600!",
            "Debt = 600 + 10% of 600 = 660."
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
    "title": "🟦 21. CONTINUOUS COMPOUNDING",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 21. CONTINUOUS COMPOUNDING",
      "subtitle": "",
      "sections": [
        {
          "heading": "Rare but tested",
          "items": [
            "Amount = P × e^(rt)",
            "Usually only asked in advanced tech rounds."
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
    "title": "🟦 22. EQUAL AMOUNTS RECEIVED",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 22. EQUAL AMOUNTS RECEIVED",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Scenario",
          "items": [
            "Money divided into two sons so they get EQUAL amounts at age 18."
          ]
        },
        {
          "heading": "The Method",
          "items": [
            "P1 × (1+R/100)^T1 = P2 × (1+R/100)^T2",
            "P1 / P2 = (1+R/100)^(T2 - T1)",
            "Find ratio, then split the total money."
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
    "title": "🟦 23. SI MIXTURE SHORTCUT",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 23. SI MIXTURE SHORTCUT",
      "subtitle": "",
      "sections": [
        {
          "heading": "When Equal Interest is received",
          "items": [
            "P1 × R1 × T1 = P2 × R2 × T2 = P3 × R3 × T3",
            "Ratio P1 : P2 : P3 = (1/R1T1) : (1/R2T2) : (1/R3T3)"
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
    "title": "🟦 24. EXACT DAYS TRAP",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 24. EXACT DAYS TRAP",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Scenario",
          "items": [
            "Find SI from 4th March to 16th May."
          ]
        },
        {
          "heading": "The Rule",
          "items": [
            "Count the days of ONE boundary, not both.",
            "March (31-4) = 27",
            "April = 30",
            "May = 16",
            "Total = 73 days = 73/365 = 1/5 year."
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
            "• SI = (PRT)/100",
            "• CI Amount = P(1+R/100)^T",
            "• SI Doubles: R = 100/T",
            "• CI Doubles: N=2^x -> T = T1*x",
            "• Diff 2 yr: P(R/100)²",
            "• Diff 3 yr: P(R/100)²(3+R/100)",
            "• SI Installment: 100D / (100T + RT(T-1)/2)",
            "• CI Ratio: 2yrs(2:1), 3yrs(3:3:1)"
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
              "visual": "Question\n   |\n   ├── \"Difference between CI and SI\"\n   |      ↓\n   |   Use P(R/100)² formula!\n   |\n   ├── \"Becomes N times\"\n   |      ↓\n   |   SI? Use 100(N-1)/T. CI? Use powers.\n   |\n   ├── \"Installments\"\n   |      ↓\n   |   Use specific SI/CI installment formula.\n   |\n   └── \"Find Rate in CI\"\n          ↓\n       Use Square Root (2yr) or Cube Root (3yr)."
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
            "1. Calculating SI for months without dividing by 12.",
            "2. Treating 'Amount' as 'Interest' in formulas.",
            "3. In Half-Yearly CI, forgetting to MULTIPLY Time by 2.",
            "4. Using SI formulas for CI 'times itself' problems.",
            "5. In SI Installments, calculating interest on the installment incorrectly."
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
          "label": "Basic SI",
          "question": "Find SI on ₹2000 at 5% for 4 years.",
          "statements": [
            "SI = PRT/100"
          ],
          "thinking": "Total % = 5 * 4 = 20%. 20% of 2000.",
          "answer": "400."
        },
        {
          "label": "Basic CI",
          "question": "Find CI on ₹1000 at 10% for 2 years.",
          "statements": [
            "2:1 Ratio method."
          ],
          "thinking": "10% of 1000 = 100. 10% of 100 = 10. 2(100) + 1(10).",
          "answer": "210."
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
          "label": "Difference",
          "question": "Diff between CI and SI for 2 years at 5% is ₹15. Principal?",
          "statements": [
            "Diff = P(R/100)^2"
          ],
          "thinking": "15 = P(1/20)^2 = P/400.",
          "answer": "P = 6000."
        },
        {
          "label": "SI Times",
          "question": "A sum trebles (3 times) in 10 yrs at SI. Rate?",
          "statements": [
            "R = 100(N-1)/T"
          ],
          "thinking": "100(3-1)/10 = 200/10.",
          "answer": "20%."
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
          "label": "CI Times",
          "question": "Sum becomes 4 times in 4 years at CI. When will it be 64 times?",
          "statements": [
            "4^1 -> 4 yrs",
            "64 = 4^3"
          ],
          "thinking": "Time = Original Time * Power = 4 * 3.",
          "answer": "12 years."
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
          "text": "Find SI on ₹5000 at 10% for 3 years.",
          "statements": [
            "A. 1000",
            "B. 1200",
            "C. 1500",
            "D. 1800"
          ]
        },
        {
          "text": "At what rate will ₹1000 yield ₹200 as SI in 4 years?",
          "statements": [
            "A. 4%",
            "B. 5%",
            "C. 6%",
            "D. 8%"
          ]
        },
        {
          "text": "Find CI on ₹2000 at 10% p.a. for 2 years.",
          "statements": [
            "A. 400",
            "B. 420",
            "C. 440",
            "D. 450"
          ]
        },
        {
          "text": "A sum becomes double in 5 years at SI. Find the rate of interest.",
          "statements": [
            "A. 10%",
            "B. 15%",
            "C. 20%",
            "D. 25%"
          ]
        },
        {
          "text": "Find the time in which ₹1200 will become ₹1440 at 5% p.a. SI.",
          "statements": [
            "A. 2 yrs",
            "B. 3 yrs",
            "C. 4 yrs",
            "D. 5 yrs"
          ]
        },
        {
          "text": "If P = 1000, R = 10% compounded half-yearly for 1 year. Amount?",
          "statements": [
            "A. 1100",
            "B. 1102.5",
            "C. 1105",
            "D. 1110"
          ]
        },
        {
          "text": "A sum amounts to ₹1180 in 3 years and ₹1300 in 5 years at SI. Principal?",
          "statements": [
            "A. 900",
            "B. 950",
            "C. 1000",
            "D. 1050"
          ]
        },
        {
          "text": "What is the difference between CI and SI on ₹5000 at 10% for 2 years?",
          "statements": [
            "A. 40",
            "B. 50",
            "C. 60",
            "D. 75"
          ]
        },
        {
          "text": "Find SI on ₹3000 at 12% p.a. for 8 months.",
          "statements": [
            "A. 200",
            "B. 240",
            "C. 280",
            "D. 300"
          ]
        },
        {
          "text": "If SI is ₹100 for 1st year, what is the CI for 1st year at same rate?",
          "statements": [
            "A. 100",
            "B. 105",
            "C. 110",
            "D. Cannot be determined"
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
          "text": "A sum at CI doubles in 4 years. In how many years will it be 8 times?",
          "statements": [
            "A. 8 yrs",
            "B. 12 yrs",
            "C. 16 yrs",
            "D. 24 yrs"
          ]
        },
        {
          "text": "Diff between CI and SI for 2 years at 5% is ₹25. Find Principal.",
          "statements": [
            "A. 5000",
            "B. 8000",
            "C. 10000",
            "D. 12000"
          ]
        },
        {
          "text": "A sum of ₹1550 is lent in 2 parts, at 5% and 8% SI. Total interest in 3 yrs is ₹300. Ratio of parts?",
          "statements": [
            "A. 16:15",
            "B. 15:16",
            "C. 8:5",
            "D. 5:8"
          ]
        },
        {
          "text": "At what rate % p.a. CI will ₹1000 become ₹1331 in 3 years?",
          "statements": [
            "A. 8%",
            "B. 10%",
            "C. 12%",
            "D. 15%"
          ]
        },
        {
          "text": "Find CI on ₹10000 for 2 years at 20% p.a., compounded half-yearly.",
          "statements": [
            "A. 4400",
            "B. 4641",
            "C. 4800",
            "D. 4841"
          ]
        },
        {
          "text": "The SI on a sum is 1/9 of Principal. Num of years equals rate %. Find Rate.",
          "statements": [
            "A. 3%",
            "B. 3.33%",
            "C. 4%",
            "D. 4.5%"
          ]
        },
        {
          "text": "A loan of ₹8400 is to be paid in 2 equal annual installments at 10% CI. Installment?",
          "statements": [
            "A. 4600",
            "B. 4800",
            "C. 4840",
            "D. 4900"
          ]
        },
        {
          "text": "Diff between CI and SI for 3 years at 10% is ₹31. Principal?",
          "statements": [
            "A. 800",
            "B. 1000",
            "C. 1200",
            "D. 1500"
          ]
        },
        {
          "text": "A sum becomes 3 times in 5 years at SI. In how many years will it become 7 times?",
          "statements": [
            "A. 10 yrs",
            "B. 12 yrs",
            "C. 15 yrs",
            "D. 20 yrs"
          ]
        },
        {
          "text": "Machine depreciates at 10% p.a. Current value is ₹8100. Value 2 years ago?",
          "statements": [
            "A. 9000",
            "B. 10000",
            "C. 11000",
            "D. 12000"
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
          "text": "CI for 2nd year is ₹132, for 1st year is ₹120. Principal?",
          "statements": [
            "A. 1000",
            "B. 1200",
            "C. 1500",
            "D. 2000"
          ]
        },
        {
          "text": "Divide ₹3903 between A and B so A's share at end of 7 yrs = B's share at end of 9 yrs at 4% CI. A's share?",
          "statements": [
            "A. 1875",
            "B. 1950",
            "C. 2028",
            "D. 2100"
          ]
        },
        {
          "text": "A borrowed ₹10,000 at 10% SI. Paid ₹4000 at end of 1st year. How much to pay to clear debt at end of 2nd yr?",
          "statements": [
            "A. 7000",
            "B. 7500",
            "C. 7700",
            "D. 8000"
          ]
        },
        {
          "text": "SI for 3 years is ₹225, CI for 2 years is ₹153. Rate and Principal?",
          "statements": [
            "A. 4%, 1875",
            "B. 5%, 1500",
            "C. 6%, 1250",
            "D. 8%, 1000"
          ]
        },
        {
          "text": "Annual payment of ₹700 in 5 years at 10% SI will discharge a debt of?",
          "statements": [
            "A. 4000",
            "B. 4200",
            "C. 4500",
            "D. 4800"
          ]
        },
        {
          "text": "Sum of money at CI becomes ₹4800 in 4 yrs, ₹6000 in 8 yrs. What is the sum?",
          "statements": [
            "A. 3600",
            "B. 3840",
            "C. 4000",
            "D. 4200"
          ]
        },
        {
          "text": "Equal SI from 3 parts. R1=2%, T1=3. R2=3%, T2=4. R3=4%, T3=5. Ratio of Principals?",
          "statements": [
            "A. 10:5:3",
            "B. 12:6:5",
            "C. 15:10:6",
            "D. 20:15:12"
          ]
        },
        {
          "text": "What annual installment will discharge a debt of ₹1092 due in 3 years at 12% SI?",
          "statements": [
            "A. 300",
            "B. 325",
            "C. 350",
            "D. 375"
          ]
        },
        {
          "text": "CI on a sum for 3 yrs is ₹331 and SI is ₹300. Principal?",
          "statements": [
            "A. 900",
            "B. 1000",
            "C. 1100",
            "D. 1200"
          ]
        },
        {
          "text": "A father leaves ₹120,000 for two sons 14 and 12, to get equal amount at 18. Rate 5% SI. Share of younger?",
          "statements": [
            "A. 50000",
            "B. 55000",
            "C. 57600",
            "D. 60000"
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
        "B",
        "B",
        "C",
        "C",
        "B",
        "C",
        "B",
        "B",
        "A",
        "B",
        "C",
        "A",
        "B",
        "B",
        "B",
        "C",
        "B",
        "C",
        "B",
        "B",
        "C",
        "C",
        "A",
        "B",
        "B",
        "A",
        "B",
        "B",
        "C"
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
            "(5000 * 10 * 3)/100 = 1500."
          ]
        },
        {
          "heading": "Solution Q2",
          "items": [
            "200 = 1000 * R * 4 / 100",
            "40R = 200",
            "R=5%."
          ]
        },
        {
          "heading": "Solution Q3",
          "items": [
            "2:1 method -> 2(200) + 1(20) = 420."
          ]
        },
        {
          "heading": "Solution Q4",
          "items": [
            "R = 100(2-1)/5 = 20%."
          ]
        },
        {
          "heading": "Solution Q5",
          "items": [
            "SI = 240",
            "T = (100*240)/(1200*5) = 4 yrs."
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
            "R=5%, T=2 cycles",
            "A = 1000(1.05)^2 = 1102.5."
          ]
        },
        {
          "heading": "Solution Q7",
          "items": [
            "2 yr SI = 120",
            "1 yr SI = 60",
            "3 yr SI = 180",
            "P = 1180 - 180 = 1000."
          ]
        },
        {
          "heading": "Solution Q8",
          "items": [
            "5000(10/100)^2 = 50."
          ]
        },
        {
          "heading": "Solution Q9",
          "items": [
            "T = 8/12 = 2/3 yr",
            "SI = (3000 * 12 * 2/3)/100 = 240."
          ]
        },
        {
          "heading": "Solution Q10",
          "items": [
            "1st year SI and CI are always equal."
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
            "8 = 2^3",
            "Time = 4 * 3 = 12 yrs."
          ]
        },
        {
          "heading": "Solution Q12",
          "items": [
            "25 = P(1/20)^2",
            "P = 25 * 400 = 10000."
          ]
        },
        {
          "heading": "Solution Q13",
          "items": [
            "Let P1=x",
            "(x*5*3)/100 + ((1550-x)*8*3)/100 = 300",
            "Solve x = 800, P2 = 750",
            "Ratio 800:750 = 16:15."
          ]
        },
        {
          "heading": "Solution Q14",
          "items": [
            "1331/1000 = (1+R/100)^3",
            "Cube root -> 11/10 = 1+R/100",
            "R=10%."
          ]
        },
        {
          "heading": "Solution Q15",
          "items": [
            "Half yr: R=10%, T=4 cycles",
            "10000(1.1)^4 = 14641",
            "CI = 4641."
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
            "P * R * R / 100 = P/9",
            "R^2 = 100/9",
            "R = 10/3 = 3.33%."
          ]
        },
        {
          "heading": "Solution Q17",
          "items": [
            "P = X/(1.1) + X/(1.21)",
            "8400 = 2.1X / 1.21",
            "X = 4840."
          ]
        },
        {
          "heading": "Solution Q18",
          "items": [
            "Diff = P(10/100)^2 * (3 + 10/100)",
            "31 = P(1/100)(3.1)",
            "31 = 3.1P / 100",
            "P = 1000."
          ]
        },
        {
          "heading": "Solution Q19",
          "items": [
            "SI: (3-1)/5 = (7-1)/T",
            "2/5 = 6/T",
            "2T = 30",
            "T = 15 yrs."
          ]
        },
        {
          "heading": "Solution Q20",
          "items": [
            "P(0.9)^2 = 8100",
            "P(0.81) = 8100",
            "P = 10000."
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
            "Extra interest in 2nd year = 12",
            "Rate = (12/120)*100 = 10%",
            "P = (120*100)/(10*1) = 1200."
          ]
        },
        {
          "heading": "Solution Q22",
          "items": [
            "A*(1.04)^7 = B*(1.04)^9",
            "A/B = (1.04)^2 = 1.0816 = 676/625",
            "A's share = 676/(676+625) * 3903 = 2028."
          ]
        },
        {
          "heading": "Solution Q23",
          "items": [
            "End of yr 1 debt = 11000",
            "Pay 4000",
            "Left = 7000",
            "Interest on 7000 for yr 2 = 700",
            "Debt = 7700."
          ]
        },
        {
          "heading": "Solution Q24",
          "items": [
            "1 yr SI = 75",
            "2 yr SI = 150",
            "CI is 153, diff is 3",
            "Rate = (3/75)*100 = 4%",
            "P = (75*100)/4 = 1875."
          ]
        },
        {
          "heading": "Solution Q25",
          "items": [
            "Debt = 700 + (700+70) + (700+140) + (700+210) + (700+280) = 4200."
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
            "Amount1^2 / Amount2 (ratio trick)",
            "P = (4800*4800)/6000 = 3840."
          ]
        },
        {
          "heading": "Solution Q27",
          "items": [
            "1/(2*3) : 1/(3*4) : 1/(4*5) = 1/6 : 1/12 : 1/20",
            "Multiply by 60 -> 10 : 5 : 3."
          ]
        },
        {
          "heading": "Solution Q28",
          "items": [
            "X = (100*1092)/(300 + 12*3*2/2) = 109200 / 336 = 325."
          ]
        },
        {
          "heading": "Solution Q29",
          "items": [
            "3 yr SI=300 -> 1yr=100",
            "3yr CI is 331",
            "3(100) + 3(10) + 1",
            "Diff is 31",
            "Rate = 10%",
            "P = 1000."
          ]
        },
        {
          "heading": "Solution Q30",
          "items": [
            "S1(1 + 5*4/100) = S2(1 + 5*6/100)",
            "S1(1.2) = S2(1.3)",
            "S1/S2 = 13/12",
            "Younger (S2) = 12/25 * 120000 = 57600."
          ]
        },
        {
          "heading": "⚡ 5-MINUTE REVISION",
          "items": [
            "• SI is on Principal. CI is on Amount.",
            "• Year 1 SI and CI are equal.",
            "• Half-yearly: Rate/2, Time*2.",
            "• CI Multipliers: 2:1 and 3:3:1",
            "• Diff 2 Yr: P(R/100)^2"
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