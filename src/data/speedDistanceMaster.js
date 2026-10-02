export const speedDistanceTopic = {
    id: "speed-distance-time",
    subjectId: "quant",
    title: "Speed, Distance & Time",
    category: "Quant",
    badgeColor: "#f59e0b",
    accentGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    pages: [
  {
    "pageNumber": 1,
    "title": "🟦 1. SPEED, DISTANCE & TIME",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 1. SPEED, DISTANCE & TIME",
      "subtitle": "From Zero → Placement Level",
      "sections": [
        {
          "heading": "What is Speed?",
          "items": [
            "Speed tells us how fast an object is moving. It is the rate at which distance is covered over time."
          ]
        },
        {
          "heading": "Why is it important?",
          "items": [
            "This topic forms the basis for Trains, Boats & Streams, and Races. It is heavily tested in TCS, Wipro, Infosys, and all major tech placements."
          ]
        },
        {
          "heading": "The Magic Triangle",
          "items": [
            {
              "text": "Remember this visual to never forget the formula:",
              "visual": "      /\\\n     /  \\\n    / D  \\\n   /------\\\n  / S | T  \\\n /__________\\\n\nD = S × T\nS = D / T\nT = D / S"
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
    "title": "🟦 2. UNITS & CONVERSIONS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 2. UNITS & CONVERSIONS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Standard Units",
          "items": [
            "Distance: meters (m) or kilometers (km)",
            "Time: seconds (s) or hours (hr)",
            "Speed: m/s or km/hr"
          ]
        },
        {
          "heading": "The Golden Conversion Rule",
          "items": [
            "To convert km/hr to m/s: Multiply by (5/18)",
            "To convert m/s to km/hr: Multiply by (18/5)"
          ]
        },
        {
          "heading": "Why 5/18?",
          "items": [
            {
              "text": "Here is the proof:",
              "visual": "1 km/hr = 1000 meters / 3600 seconds\n        = 10 / 36\n        = 5 / 18 m/s"
            }
          ]
        }
      ],
      "tips": [
        "Memorize: 18 km/hr = 5 m/s, 36 km/hr = 10 m/s, 54 km/hr = 15 m/s, 72 km/hr = 20 m/s, 90 km/hr = 25 m/s."
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
    "pageNumber": 3,
    "title": "🟦 3. PROPORTIONALITY RULES",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 3. PROPORTIONALITY RULES",
      "subtitle": "",
      "sections": [
        {
          "heading": "Rule 1: Time is Constant",
          "items": [
            "If T is constant, D ∝ S.",
            "If you drive twice as fast, you cover twice the distance."
          ]
        },
        {
          "heading": "Rule 2: Speed is Constant",
          "items": [
            "If S is constant, D ∝ T.",
            "If you drive for twice as long, you cover twice the distance."
          ]
        },
        {
          "heading": "Rule 3: Distance is Constant (MOST IMPORTANT)",
          "items": [
            {
              "text": "If D is constant, S ∝ 1/T.",
              "visual": "If Speed Ratio A : B = a : b\nThen Time Ratio A : B = b : a\n\nFaster speed = Less time!"
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
    "pageNumber": 4,
    "title": "🟦 4. AVERAGE SPEED BASICS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 4. AVERAGE SPEED BASICS",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Biggest Trap",
          "items": [
            "Average Speed is NEVER just (S1 + S2) / 2 unless the TIMES are exactly equal!"
          ]
        },
        {
          "heading": "The Universal Formula",
          "items": [
            "Average Speed = (Total Distance) / (Total Time)"
          ]
        },
        {
          "heading": "Example",
          "items": [
            "Goes 100km at 50 km/h, then 150km at 75 km/h.",
            "Total Dist = 250km.",
            "Time 1 = 100/50 = 2 hr. Time 2 = 150/75 = 2 hr.",
            "Total Time = 4 hr.",
            "Avg Speed = 250/4 = 62.5 km/h."
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
    "title": "🟦 5. AVERAGE SPEED (EQUAL DISTANCE)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 5. AVERAGE SPEED (EQUAL DISTANCE)",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Scenario",
          "items": [
            "A person travels from A to B at speed X, and returns from B to A at speed Y."
          ]
        },
        {
          "heading": "⚡ The Shortcut Formula",
          "items": [
            {
              "text": "When distance is equal:",
              "visual": "Avg Speed = (2 × X × Y) / (X + Y)"
            }
          ]
        },
        {
          "heading": "Example",
          "items": [
            "Goes at 40 km/h, returns at 60 km/h.",
            "Avg = (2 * 40 * 60) / (40 + 60)",
            "= 4800 / 100 = 48 km/h.",
            "(Notice it is NOT 50!)"
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
    "title": "🟦 6. EARLY & LATE CONCEPT",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 6. EARLY & LATE CONCEPT",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Scenario",
          "items": [
            "If I travel at S1, I reach 't1' minutes late.",
            "If I travel at S2, I reach 't2' minutes early.",
            "Find Distance."
          ]
        },
        {
          "heading": "⚡ The Master Formula",
          "items": [
            "Distance = (S1 × S2) / (S1 ~ S2) × (Total Time Difference)"
          ]
        },
        {
          "heading": "Time Difference Rules",
          "items": [
            "Late & Late -> Subtract",
            "Early & Early -> Subtract",
            "Late & Early -> ADD",
            "Convert total minutes to hours!"
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
    "title": "🟦 7. RELATIVE SPEED (SAME DIRECTION)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 7. RELATIVE SPEED (SAME DIRECTION)",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "When two bodies move in the SAME direction, the faster body OVERTAKES the slower one."
          ]
        },
        {
          "heading": "Formula",
          "items": [
            {
              "text": "Relative Speed = S1 - S2 (where S1 > S2)",
              "visual": "A (60 km/h) →\nB (40 km/h) →\n\nNet effectively, A is approaching B at 20 km/h."
            }
          ]
        },
        {
          "heading": "Example: Police & Thief",
          "items": [
            "Thief is 200m ahead. Thief speed = 10 m/s, Police = 12 m/s.",
            "Relative speed = 2 m/s.",
            "Time to catch = Distance / Rel Speed = 200 / 2 = 100 seconds."
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
    "title": "🟦 8. RELATIVE SPEED (OPPOSITE DIR)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 8. RELATIVE SPEED (OPPOSITE DIR)",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "When two bodies move TOWARDS each other, they cover the gap very fast."
          ]
        },
        {
          "heading": "Formula",
          "items": [
            {
              "text": "Relative Speed = S1 + S2",
              "visual": "A (60 km/h) →      ← B (40 km/h)\n\nThey are closing the gap at 100 km/h!"
            }
          ]
        },
        {
          "heading": "Example: Meeting Point",
          "items": [
            "Cities are 500km apart. A and B leave at same time towards each other at 60 and 40 km/h.",
            "Time to meet = 500 / (60+40) = 500/100 = 5 hours."
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
    "title": "🟦 9. TRAINS: BASIC CONCEPTS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 9. TRAINS: BASIC CONCEPTS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Distance = Length of Train",
          "items": [
            "A train is not a point object! It has length."
          ]
        },
        {
          "heading": "Case 1: Crossing a Point Object",
          "items": [
            {
              "text": "Pole, standing man, tree.",
              "visual": "Distance to cover = Length of Train (Lt)\nSpeed = Speed of Train (St)\n\nTime = Lt / St"
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
    "pageNumber": 10,
    "title": "🟦 10. TRAINS: LENGTHY OBJECTS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 10. TRAINS: LENGTHY OBJECTS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Case 2: Crossing a Bridge/Platform",
          "items": [
            "The train must cover its OWN length AND the platform's length."
          ]
        },
        {
          "heading": "Formula",
          "items": [
            {
              "text": "Distance = Lt + Lp",
              "visual": "Train (Lt)   Platform (Lp)\n[========]   [------------]\nDistance to cross = Lt + Lp\n\nTime = (Lt + Lp) / St"
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
    "pageNumber": 11,
    "title": "🟦 11. TRAINS CROSSING MOVING BODIES",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 11. TRAINS CROSSING MOVING BODIES",
      "subtitle": "",
      "sections": [
        {
          "heading": "Case 3: Man running",
          "items": [
            "Same direction: Rel Speed = (St - Sm)",
            "Opp direction: Rel Speed = (St + Sm)",
            "Distance is still just Lt."
          ]
        },
        {
          "heading": "Case 4: Two Trains",
          "items": [
            "Distance is ALWAYS (L1 + L2) whether same or opp direction!",
            "Same dir Time = (L1 + L2) / (S1 - S2)",
            "Opp dir Time = (L1 + L2) / (S1 + S2)"
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
    "title": "🟦 12. BOATS & STREAMS: TERMS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 12. BOATS & STREAMS: TERMS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Core Variables",
          "items": [
            "B = Speed of Boat in STILL water (engine speed).",
            "S = Speed of Stream (river current)."
          ]
        },
        {
          "heading": "Downstream & Upstream",
          "items": [
            {
              "text": "Downstream (D) = With the river.",
              "visual": "Boat (B) →\nStream (S) →\nDownstream Speed (D) = B + S"
            },
            {
              "text": "Upstream (U) = Against the river.",
              "visual": "Boat (B) →\nStream (S) ←\nUpstream Speed (U) = B - S"
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
    "pageNumber": 13,
    "title": "🟦 13. BOATS & STREAMS: FORMULAS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 13. BOATS & STREAMS: FORMULAS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Finding B and S from D and U",
          "items": [
            "If Downstream (D) and Upstream (U) speeds are given:",
            "B = (D + U) / 2",
            "S = (D - U) / 2"
          ]
        },
        {
          "heading": "Example",
          "items": [
            "A boat goes 40km downstream in 4 hrs -> D = 10 km/h.",
            "It goes 12km upstream in 6 hrs -> U = 2 km/h.",
            "Boat speed (B) = (10+2)/2 = 6 km/h.",
            "Stream speed (S) = (10-2)/2 = 4 km/h."
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
    "title": "🟦 14. RACES (LINEAR)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 14. RACES (LINEAR)",
      "subtitle": "",
      "sections": [
        {
          "heading": "What does 'A gives B a start of x meters' mean?",
          "items": [
            "In a 1000m race, if A gives B a start of 100m:",
            "A runs 1000m.",
            "B runs 1000 - 100 = 900m.",
            "But they take the SAME TIME to finish."
          ]
        },
        {
          "heading": "Ratio Rule",
          "items": [
            "Since Time is constant, Speed Ratio = Distance Ratio.",
            "Sa : Sb = 1000 : 900 = 10 : 9."
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
    "title": "🟦 15. RACES (TIME BEAT)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 15. RACES (TIME BEAT)",
      "subtitle": "",
      "sections": [
        {
          "heading": "What does 'A beats B by t seconds' mean?",
          "items": [
            "A and B both run the FULL distance (1000m).",
            "If A finishes in Ta, B finishes in Ta + t.",
            "B is slower."
          ]
        },
        {
          "heading": "Dead Heat",
          "items": [
            "If a race ends in a dead heat, both finish at the exact same time."
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
    "title": "🟦 16. CIRCULAR TRACKS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 16. CIRCULAR TRACKS",
      "subtitle": "",
      "sections": [
        {
          "heading": "First Meeting Anywhere",
          "items": [
            "Time = Track Length / Relative Speed.",
            "Same direction: L / (S1 - S2)",
            "Opp direction: L / (S1 + S2)"
          ]
        },
        {
          "heading": "First Meeting at STARTING POINT",
          "items": [
            "Find time for A to complete 1 round: t1 = L/S1",
            "Find time for B to complete 1 round: t2 = L/S2",
            "Time to meet at start = LCM(t1, t2)."
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
    "title": "🟦 17. BULLET & SOUND PROBLEMS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 17. BULLET & SOUND PROBLEMS",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Scenario",
          "items": [
            "Two bullets fired from same place at interval of T1 mins.",
            "Man in a train approaching hears them at interval of T2 mins."
          ]
        },
        {
          "heading": "⚡ The Shortcut",
          "items": [
            "Distance travelled by man in T2 = Distance travelled by sound in (T1 - T2)",
            "ManSpeed × T2 = SoundSpeed × (T1 - T2)"
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
    "title": "🟦 18. STOPPAGE TIME",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 18. STOPPAGE TIME",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Scenario",
          "items": [
            "Without stoppages, bus speed = 54 km/h.",
            "With stoppages, bus speed = 45 km/h.",
            "How many mins per hour does it stop?"
          ]
        },
        {
          "heading": "⚡ The Formula",
          "items": [
            "Stop Time/hr = (Fast Speed - Slow Speed) / Fast Speed",
            "In minutes: Multiply by 60."
          ]
        },
        {
          "heading": "Calculation",
          "items": [
            "= (54 - 45) / 54 * 60",
            "= (9 / 54) * 60",
            "= 1/6 * 60 = 10 minutes."
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
    "title": "🟦 19. ESCALATOR PROBLEMS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 19. ESCALATOR PROBLEMS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Connection to Boats & Streams",
          "items": [
            "Walking up an UP escalator = Downstream (Man + Escalator).",
            "Walking down an UP escalator = Upstream (Man - Escalator)."
          ]
        },
        {
          "heading": "Steps as Distance",
          "items": [
            "Total steps on escalator = Man's steps + Escalator's steps (if moving together)."
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
    "title": "🟦 20. TRAIN ACCIDENT PROBLEM",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 20. TRAIN ACCIDENT PROBLEM",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Scenario",
          "items": [
            "Train meets accident, travels at 3/4 of original speed, reaches 40 mins late.",
            "Find original time."
          ]
        },
        {
          "heading": "⚡ The Shortcut",
          "items": [
            "Speed becomes a/b.",
            "Original Time = (a / (b-a)) × Late Time."
          ]
        },
        {
          "heading": "Calculation",
          "items": [
            "a=3, b=4. Late = 40.",
            "Orig Time = (3 / 1) × 40 = 120 mins = 2 hours."
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
    "title": "🟦 21. CROSSING AND REACHING",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 21. CROSSING AND REACHING",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Scenario",
          "items": [
            "Two trains start at same time towards each other.",
            "AFTER meeting, they take t1 and t2 time to reach destinations."
          ]
        },
        {
          "heading": "⚡ The Formula",
          "items": [
            "S1 / S2 = √(t2 / t1)",
            "(Notice the inverse relationship inside the root!)"
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
    "title": "🟦 22. MONKEY CLIMBING POLE",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 22. MONKEY CLIMBING POLE",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Scenario",
          "items": [
            "Monkey climbs 5m in 1st minute, slips down 2m in 2nd minute.",
            "Pole is 35m."
          ]
        },
        {
          "heading": "The Trap",
          "items": [
            "Net climb = 3m in 2 mins.",
            "Do NOT just do 35/3! Because on the LAST jump, he reaches the top and DOES NOT slip."
          ]
        },
        {
          "heading": "The Correct Method",
          "items": [
            "Subtract last jump from total: 35 - 5 = 30m.",
            "Climb 30m at net rate: (30/3) = 10 cycles = 20 mins.",
            "Then add 1 min for the last 5m jump = 21 mins."
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
    "title": "🟦 23. ADVANCED MIXED CONCEPTS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 23. ADVANCED MIXED CONCEPTS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Dog and Hare",
          "items": [
            "Dog takes 3 leaps for every 4 leaps of hare.",
            "But 2 dog leaps = 3 hare leaps.",
            "Find speed ratio."
          ]
        },
        {
          "heading": "Solution",
          "items": [
            "Time ratio (Freq) = 3 : 4.",
            "Distance ratio (Size) = 3 : 2.",
            "Speed = Distance × Freq = (3×3) : (4×2) = 9 : 8."
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
    "title": "🟦 24. TWO BULLETS WITH WIND",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 24. TWO BULLETS WITH WIND",
      "subtitle": "",
      "sections": [
        {
          "heading": "Logic",
          "items": [
            "If wind blows, sound speed = Sound ± Wind.",
            "Treat it exactly like Boats and Streams."
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
            "• S = D/T",
            "• 1 km/h = 5/18 m/s",
            "• Avg Speed = Total D / Total T",
            "• Avg Speed (Equal D) = 2xy / (x+y)",
            "• Rel Speed (Same) = S1 - S2",
            "• Rel Speed (Opp) = S1 + S2",
            "• Train passing platform: T = (Lt+Lp)/S",
            "• Boats: D = B+S, U = B-S, B = (D+U)/2",
            "• Stoppage: (Fast - Slow)/Fast * 60",
            "• Meeting post-cross: S1/S2 = √(t2/t1)",
            "• Early/Late Dist = (S1×S2)/(S1~S2) × TimeDiff"
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
              "visual": "Question\n   |\n   ├── \"Average speed\"\n   |      ↓\n   |   Are distances equal? (2xy/x+y)\n   |\n   ├── \"Crossing\"\n   |      ↓\n   |   Opp or Same dir? Add lengths!\n   |\n   ├── \"River/Stream\"\n   |      ↓\n   |   B+S and B-S\n   |\n   └── \"Early/Late\"\n          ↓\n       Use difference formula"
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
            "1. Forgetting to convert km/h to m/s when length is in meters.",
            "2. Averaging speeds as (A+B)/2.",
            "3. Forgetting to add BOTH train lengths in passing questions.",
            "4. In boats, mixing up 'Downstream Speed' with 'Stream Speed'.",
            "5. In monkey problem, dividing total height by net climb.",
            "6. Forgetting to convert minutes to hours in the Early/Late formula."
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
          "label": "Basic Train",
          "question": "Train 150m long, speed 54 km/h. Crosses a pole in?",
          "statements": [
            "Speed = 54 * 5/18 = 15 m/s.",
            "Distance = 150m."
          ],
          "thinking": "Time = D/S.",
          "answer": "150/15 = 10 seconds."
        },
        {
          "label": "Basic Boat",
          "question": "Downstream 14 km/h, Upstream 10 km/h. Boat speed?",
          "statements": [
            "B = (D + U) / 2"
          ],
          "thinking": "Direct formula.",
          "answer": "(14 + 10) / 2 = 12 km/h."
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
          "label": "Avg Speed",
          "question": "Half distance at 40 km/h, half at 60 km/h. Avg speed?",
          "statements": [
            "Distances are equal."
          ],
          "thinking": "Use 2xy/(x+y).",
          "answer": "(2*40*60)/(100) = 48 km/h."
        },
        {
          "label": "Stoppages",
          "question": "Excluding stops 50 km/h, including stops 40 km/h.",
          "statements": [
            "Stop time = (50 - 40) / 50 * 60"
          ],
          "thinking": "Formula.",
          "answer": "10/50 * 60 = 12 mins/hour."
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
          "label": "Early/Late",
          "question": "At 3 km/h reach 15 min late. At 4 km/h reach 15 min early. Distance?",
          "statements": [
            "Time diff = 15 (late) + 15 (early) = 30 mins = 1/2 hour."
          ],
          "thinking": "D = (3*4)/(4-3) * (1/2).",
          "answer": "12/1 * 1/2 = 6 km."
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
          "text": "Convert 72 km/hr into m/s.",
          "statements": [
            "A. 15 m/s",
            "B. 20 m/s",
            "C. 25 m/s",
            "D. 30 m/s"
          ]
        },
        {
          "text": "Convert 25 m/s into km/hr.",
          "statements": [
            "A. 72 km/hr",
            "B. 80 km/hr",
            "C. 90 km/hr",
            "D. 100 km/hr"
          ]
        },
        {
          "text": "A car covers 150 km in 3 hours. Find its speed.",
          "statements": [
            "A. 40 km/hr",
            "B. 45 km/hr",
            "C. 50 km/hr",
            "D. 60 km/hr"
          ]
        },
        {
          "text": "If a person runs at 5 m/s, how much distance is covered in 2 minutes?",
          "statements": [
            "A. 100m",
            "B. 300m",
            "C. 600m",
            "D. 1200m"
          ]
        },
        {
          "text": "A train 200m long is running at 36 km/h. Time to cross a pole?",
          "statements": [
            "A. 10s",
            "B. 15s",
            "C. 20s",
            "D. 25s"
          ]
        },
        {
          "text": "A boat goes downstream at 20 km/h and upstream at 10 km/h. Boat's speed in still water?",
          "statements": [
            "A. 5 km/h",
            "B. 10 km/h",
            "C. 15 km/h",
            "D. 30 km/h"
          ]
        },
        {
          "text": "A boy goes to school at 3 km/h and returns at 2 km/h. Average speed?",
          "statements": [
            "A. 2.4 km/h",
            "B. 2.5 km/h",
            "C. 2.6 km/h",
            "D. 5 km/h"
          ]
        },
        {
          "text": "Two trains moving in same direction at 60 km/h and 40 km/h. Relative speed?",
          "statements": [
            "A. 20 km/h",
            "B. 50 km/h",
            "C. 100 km/h",
            "D. 120 km/h"
          ]
        },
        {
          "text": "Two trains moving towards each other at 50 km/h and 30 km/h. Relative speed?",
          "statements": [
            "A. 20 km/h",
            "B. 40 km/h",
            "C. 80 km/h",
            "D. 100 km/h"
          ]
        },
        {
          "text": "If walking at 3/4 of usual speed a man is 20 mins late, his usual time is?",
          "statements": [
            "A. 40 mins",
            "B. 60 mins",
            "C. 80 mins",
            "D. 100 mins"
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
          "text": "Train A is 120m long, running at 54 km/h. Time to cross a 180m platform?",
          "statements": [
            "A. 15s",
            "B. 20s",
            "C. 25s",
            "D. 30s"
          ]
        },
        {
          "text": "Without stoppages train goes 60 km/h, with stoppages 45 km/h. Stoppage time per hour?",
          "statements": [
            "A. 10 mins",
            "B. 12 mins",
            "C. 15 mins",
            "D. 20 mins"
          ]
        },
        {
          "text": "A train 100m long at 60 km/h crosses a man running in SAME direction at 6 km/h in?",
          "statements": [
            "A. 6.66s",
            "B. 7.5s",
            "C. 8s",
            "D. 10s"
          ]
        },
        {
          "text": "In a 1000m race, A beats B by 100m or 10 seconds. Find A's time over the course.",
          "statements": [
            "A. 80s",
            "B. 90s",
            "C. 100s",
            "D. 110s"
          ]
        },
        {
          "text": "A boat can row 15 km/h in still water. If stream is 3 km/h, time to row 72km downstream?",
          "statements": [
            "A. 3.5 hrs",
            "B. 4 hrs",
            "C. 4.5 hrs",
            "D. 6 hrs"
          ]
        },
        {
          "text": "Speed ratio of A to B is 3:4. A takes 20 mins more than B. Time taken by A?",
          "statements": [
            "A. 40 mins",
            "B. 60 mins",
            "C. 80 mins",
            "D. 100 mins"
          ]
        },
        {
          "text": "A man covers 1/3 distance at 10 km/h and remaining at 20 km/h. Average speed?",
          "statements": [
            "A. 13.33",
            "B. 15",
            "C. 16.66",
            "D. 18"
          ]
        },
        {
          "text": "Two men start from P to Q. A at 4 km/h, B at 5 km/h. B reaches Q and returns, meeting A at 2km from Q. PQ distance?",
          "statements": [
            "A. 12km",
            "B. 16km",
            "C. 18km",
            "D. 20km"
          ]
        },
        {
          "text": "A train passes a man standing on platform in 8s, and the 264m platform in 20s. Train length?",
          "statements": [
            "A. 150m",
            "B. 176m",
            "C. 200m",
            "D. 220m"
          ]
        },
        {
          "text": "A monkey climbs 6m in 1 min and slips 3m in next min. Pole is 21m. Time?",
          "statements": [
            "A. 10 mins",
            "B. 11 mins",
            "C. 12 mins",
            "D. 13 mins"
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
          "text": "Two trains start at same time towards each other. After crossing, they take 4 hrs and 9 hrs to reach destinations. Speed ratio?",
          "statements": [
            "A. 2:3",
            "B. 3:2",
            "C. 4:9",
            "D. 9:4"
          ]
        },
        {
          "text": "At 5 km/h, a student is 7 mins late. At 6 km/h, 5 mins early. Distance?",
          "statements": [
            "A. 5 km",
            "B. 6 km",
            "C. 7 km",
            "D. 8 km"
          ]
        },
        {
          "text": "A gives B a start of 20m in 100m race. A gives C a start of 36m. B gives C a start of?",
          "statements": [
            "A. 16m",
            "B. 20m",
            "C. 25m",
            "D. 30m"
          ]
        },
        {
          "text": "Two trains of equal length, running in opposite directions, pass a pole in 18s and 12s. Time to cross each other?",
          "statements": [
            "A. 14.4s",
            "B. 15s",
            "C. 16s",
            "D. 16.8s"
          ]
        },
        {
          "text": "A man fires 2 bullets at interval of 34 mins. Driver approaching hears them at 33 mins interval. Sound speed 330 m/s. Car speed?",
          "statements": [
            "A. 10 m/s",
            "B. 15 m/s",
            "C. 20 m/s",
            "D. 33 m/s"
          ]
        },
        {
          "text": "A boy rides his bicycle 10km at 12km/h and again 12km at 10km/h. Average speed approximately?",
          "statements": [
            "A. 10.4",
            "B. 10.8",
            "C. 11.0",
            "D. 11.2"
          ]
        },
        {
          "text": "A thief is spotted by police at 200m. Thief runs at 10km/h, police at 11km/h. Distance after 6 mins?",
          "statements": [
            "A. 100m",
            "B. 120m",
            "C. 150m",
            "D. 180m"
          ]
        },
        {
          "text": "A boat travels 24km up and 36km down in 6 hrs. Also 36km up and 24km down in 6.5 hrs. Current speed?",
          "statements": [
            "A. 1.5",
            "B. 2",
            "C. 2.5",
            "D. 3"
          ]
        },
        {
          "text": "A train meets an accident and travels at 3/4 of speed, reaching 20 mins late. Original time?",
          "statements": [
            "A. 40 mins",
            "B. 50 mins",
            "C. 60 mins",
            "D. 80 mins"
          ]
        },
        {
          "text": "In a 1km race, A beats B by 100m, and B beats C by 150m. A beats C by?",
          "statements": [
            "A. 235m",
            "B. 250m",
            "C. 265m",
            "D. 280m"
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
        "B",
        "C",
        "C",
        "C",
        "C",
        "C",
        "A",
        "A",
        "C",
        "B",
        "B",
        "C",
        "A",
        "B",
        "B",
        "C",
        "B",
        "C",
        "B",
        "B",
        "B",
        "B",
        "B",
        "A",
        "A",
        "B",
        "A",
        "B",
        "C",
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
            "72 * (5/18) = 4 * 5 = 20 m/s."
          ]
        },
        {
          "heading": "Solution Q2",
          "items": [
            "25 * (18/5) = 5 * 18 = 90 km/hr."
          ]
        },
        {
          "heading": "Solution Q3",
          "items": [
            "Speed = Distance / Time = 150 / 3 = 50 km/hr."
          ]
        },
        {
          "heading": "Solution Q4",
          "items": [
            "Time = 2 mins = 120s",
            "Dist = 5 * 120 = 600m."
          ]
        },
        {
          "heading": "Solution Q5",
          "items": [
            "Speed = 36 * 5/18 = 10 m/s",
            "Time = 200 / 10 = 20s."
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
            "B = (D + U) / 2 = (20 + 10) / 2 = 15 km/h."
          ]
        },
        {
          "heading": "Solution Q7",
          "items": [
            "Avg = 2xy/(x+y) = (2*3*2)/(3+2) = 12/5 = 2.4 km/h."
          ]
        },
        {
          "heading": "Solution Q8",
          "items": [
            "Same direction -> Subtract -> 60 - 40 = 20 km/h."
          ]
        },
        {
          "heading": "Solution Q9",
          "items": [
            "Opposite direction -> Add -> 50 + 30 = 80 km/h."
          ]
        },
        {
          "heading": "Solution Q10",
          "items": [
            "Speed ratio = 3:4",
            "Time ratio = 4:3",
            "Diff = 1 ratio = 20 mins",
            "Usual time = 3 ratio = 60 mins."
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
            "Speed = 54 * 5/18 = 15 m/s",
            "Total Dist = 120 + 180 = 300m",
            "Time = 300 / 15 = 20s."
          ]
        },
        {
          "heading": "Solution Q12",
          "items": [
            "Stoppage = (60 - 45)/60 * 60 = 15/60 * 60 = 15 mins."
          ]
        },
        {
          "heading": "Solution Q13",
          "items": [
            "Same dir rel speed = 60 - 6 = 54 km/h = 15 m/s",
            "Time = 100 / 15 = 6.66s."
          ]
        },
        {
          "heading": "Solution Q14",
          "items": [
            "B runs 100m in 10s -> B speed = 10m/s",
            "B takes 1000/10 = 100s for full race",
            "A beats B by 10s, so A takes 90s."
          ]
        },
        {
          "heading": "Solution Q15",
          "items": [
            "D = B + S = 15 + 3 = 18 km/h",
            "Time = 72 / 18 = 4 hrs."
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
            "S ratio 3:4",
            "T ratio 4:3",
            "Diff 1 = 20 mins",
            "A's time (4) = 80 mins."
          ]
        },
        {
          "heading": "Solution Q17",
          "items": [
            "Let Dist = 30km",
            "Part 1 = 10km @ 10 = 1hr",
            "Part 2 = 20km @ 20 = 1hr",
            "Total D=30, Total T=2",
            "Avg = 15."
          ]
        },
        {
          "heading": "Solution Q18",
          "items": [
            "Time is same",
            "D ratio = S ratio = 4:5",
            "Let PQ = D",
            "A covers D-2, B covers D+2",
            "(D-2)/(D+2) = 4/5",
            "5D-10 = 4D+8",
            "D = 18."
          ]
        },
        {
          "heading": "Solution Q19",
          "items": [
            "Speed = Lt/8 = (Lt+264)/20",
            "20 Lt = 8 Lt + 2112",
            "12 Lt = 2112",
            "Lt = 176m."
          ]
        },
        {
          "heading": "Solution Q20",
          "items": [
            "Net = 3m in 2 mins",
            "Last jump is 6m",
            "21 - 6 = 15m",
            "15m takes 10 mins (5 cycles)",
            "Total = 11 mins."
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
            "S1/S2 = √(t2/t1) = √(9/4) = 3/2",
            "Ratio is 3:2."
          ]
        },
        {
          "heading": "Solution Q22",
          "items": [
            "Time diff = 12 mins = 1/5 hr",
            "D = (5*6)/(6-5) * (1/5) = 30/5 = 6 km."
          ]
        },
        {
          "heading": "Solution Q23",
          "items": [
            "A runs 100, B runs 80",
            "A runs 100, C runs 64",
            "Ratio B:C = 80:64",
            "If B runs 100, C runs 80",
            "B gives C 20m."
          ]
        },
        {
          "heading": "Solution Q24",
          "items": [
            "Let L be length",
            "S1 = L/18, S2 = L/12",
            "Rel speed = L/18 + L/12 = 5L/36",
            "Time = 2L / (5L/36) = 72/5 = 14.4s."
          ]
        },
        {
          "heading": "Solution Q25",
          "items": [
            "Car * 33 = 330 * (34 - 33)",
            "Car * 33 = 330",
            "Car = 10 m/s."
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
            "T1 = 10/12 hr",
            "T2 = 12/10 hr",
            "Total D = 22",
            "Total T = 5/6 + 6/5 = 61/30",
            "Avg = 22 / (61/30) = 660 / 61 = 10.8 approx."
          ]
        },
        {
          "heading": "Solution Q27",
          "items": [
            "Rel speed = 1 km/h = 1000m/60m = 50/3 m/min",
            "In 6 mins, gap closed = 100m",
            "Remaining gap = 200 - 100 = 100m."
          ]
        },
        {
          "heading": "Solution Q28",
          "items": [
            "24/U + 36/D = 6",
            "36/U + 24/D = 6.5",
            "Solve linear equations",
            "U = 8, D = 12",
            "S = (12-8)/2 = 2 km/h."
          ]
        },
        {
          "heading": "Solution Q29",
          "items": [
            "Speed 3/4 => Time 4/3",
            "Extra time = 1/3 of orig = 20 mins",
            "Orig time = 60 mins."
          ]
        },
        {
          "heading": "Solution Q30",
          "items": [
            "A:B = 1000:900",
            "B:C = 1000:850",
            "Multiply ratios -> A:C = (1000/900)*(1000/850) = 1000 : 765",
            "A beats C by 235m."
          ]
        },
        {
          "heading": "⚡ 5-MINUTE REVISION",
          "items": [
            "• 5/18 rule for km/h to m/s",
            "• Early/Late = (xy/(x~y)) * time_diff",
            "• S1/S2 = √(t2/t1)",
            "• Avg Speed = Total Dist / Total Time",
            "• Monkey climbs: subtract last jump first!"
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