export const loopsControlTopic = {
    id: "loops-control",
    subjectId: "tech",
    title: "Loops & Control Flow",
    category: "Technical",
    badgeColor: "#0284c7",
    accentGradient: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
    pages: [
  {
    "pageNumber": 1,
    "title": "🟦 1. LOOPS & CONTROL FLOW",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 1. LOOPS & CONTROL FLOW",
      "subtitle": "From Zero → Placement Level",
      "sections": [
        {
          "heading": "What is Control Flow?",
          "items": [
            "By default, a program runs line by line from top to bottom.",
            "Control flow statements (if/else, switch, loops) allow us to CHANGE this path."
          ]
        },
        {
          "heading": "The if-else statement",
          "items": [
            "Used to make decisions.",
            "if (condition is true) { execute this block } else { execute this block }"
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
    "title": "🟦 2. THE 'FOR' LOOP",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 2. THE 'FOR' LOOP",
      "subtitle": "",
      "sections": [
        {
          "heading": "Structure",
          "items": [
            "for (initialization; condition; update) { ... }",
            "1. Initialization runs exactly ONCE.",
            "2. Condition is checked before EVERY iteration.",
            "3. Update runs at the END of every iteration."
          ]
        },
        {
          "heading": "The Infinite For Loop",
          "items": [
            "You can leave all 3 parts empty!",
            "for(;;) { System.out.println(\"Hi\"); } -> Runs forever!"
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
    "title": "🟦 3. WHILE vs DO-WHILE",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 3. WHILE vs DO-WHILE",
      "subtitle": "",
      "sections": [
        {
          "heading": "while loop",
          "items": [
            "Entry-controlled loop. The condition is checked BEFORE entering.",
            "If the condition is initially false, it runs 0 times."
          ]
        },
        {
          "heading": "do-while loop",
          "items": [
            "Exit-controlled loop. The code runs first, THEN the condition is checked.",
            "Even if the condition is false, it is GUARANTEED to run at least 1 time!"
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
    "title": "🟦 4. BREAK AND CONTINUE",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 4. BREAK AND CONTINUE",
      "subtitle": "",
      "sections": [
        {
          "heading": "break",
          "items": [
            "Immediately KILLS the loop it is inside.",
            "Control jumps to the first line after the loop."
          ]
        },
        {
          "heading": "continue",
          "items": [
            "Immediately SKIPS the rest of the current iteration.",
            "Control jumps to the 'update' part (in a for loop) or the 'condition' check (in a while loop)."
          ]
        },
        {
          "heading": "Nested Loops Trap",
          "items": [
            "A simple 'break' only stops the INNER loop, not the outer loop."
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
    "title": "🟦 5. SWITCH STATEMENT",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 5. SWITCH STATEMENT",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "An alternative to writing many if-else-if ladders.",
            "Matches a variable against multiple 'case' values."
          ]
        },
        {
          "heading": "The Fall-Through Trap 🚨",
          "items": [
            "If you don't write 'break;' at the end of a case, execution will FALL THROUGH to the next case and execute it too, even if the value doesn't match!"
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
            "1. Semicolon after For: for(int i=0; i<5; i++); { print(i) } -> The semicolon ends the loop immediately. It does nothing 5 times, then prints '5' once.",
            "2. Assignment in If: if(a = 5) is WRONG in Java (except for booleans). Use if(a == 5).",
            "3. Switch data types: switch works with int, char, String, enum. It does NOT work with float, double, or boolean."
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
          "text": "Which loop is guaranteed to execute at least once?",
          "statements": [
            "A. for loop",
            "B. while loop",
            "C. do-while loop",
            "D. foreach loop"
          ]
        },
        {
          "text": "What happens if you omit the condition in a for loop? for(int i=0; ; i++)",
          "statements": [
            "A. Compilation error",
            "B. Assumes condition is true (Infinite loop)",
            "C. Assumes condition is false (0 times)",
            "D. Runtime error"
          ]
        },
        {
          "text": "Which statement is used to skip the current iteration of a loop?",
          "statements": [
            "A. break",
            "B. continue",
            "C. return",
            "D. skip"
          ]
        },
        {
          "text": "What is the output? int x=0; if(x=1) print(\"A\"); else print(\"B\"); (In C/C++)",
          "statements": [
            "A. A",
            "B. B",
            "C. Compilation error",
            "D. 0"
          ]
        },
        {
          "text": "What is the output? (Java)\nfor(int i=0; i<3; i++);\nSystem.out.print(i);",
          "statements": [
            "A. 012",
            "B. 123",
            "C. 3",
            "D. Compile Error"
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
          "text": "What causes a 'fall-through' in a switch statement?",
          "statements": [
            "A. Missing default case",
            "B. Missing break statement",
            "C. Using strings in case",
            "D. Missing curly braces"
          ]
        },
        {
          "text": "Which data type CANNOT be used in a Java switch statement?",
          "statements": [
            "A. int",
            "B. String",
            "C. char",
            "D. float"
          ]
        },
        {
          "text": "What is the output? int i=0; while(i<3) { i++; if(i==2) continue; System.out.print(i); }",
          "statements": [
            "A. 123",
            "B. 13",
            "C. 12",
            "D. 23"
          ]
        },
        {
          "text": "How do you break out of a specific outer loop from an inner loop in Java?",
          "statements": [
            "A. break outer;",
            "B. break 2;",
            "C. Labeled break (e.g., break myLabel;)",
            "D. Not possible"
          ]
        },
        {
          "text": "What is the output? int n=1; do { System.out.print(n); } while(n++ < 3);",
          "statements": [
            "A. 123",
            "B. 12",
            "C. 1234",
            "D. Infinite loop"
          ]
        }
      ],
      "answerKey": null,
      "difficulty": "Placement"
    }
  },
  {
    "pageNumber": 9,
    "title": "✅ 9. ANSWER KEY & SOLUTIONS",
    "desc": "",
    "handwrittenContent": {
      "title": "✅ 9. ANSWER KEY & SOLUTIONS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Important Explanations",
          "items": [
            "Q4: In C/C++, 'x=1' assigns 1 to x, and returns 1. Since 1 is non-zero, the 'if' condition is true. Output is A. (In Java, this gives a compile error because 'if' requires a boolean).",
            "Q5: The semicolon after the for loop ends the loop. The variable 'i' was declared INSIDE the for loop definition, so it gets destroyed after the semicolon. The print statement cannot find 'i'. Compile Error!"
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": [
        "C",
        "B",
        "B",
        "A",
        "D",
        "B",
        "D",
        "B",
        "C",
        "A"
      ],
      "difficulty": null
    }
  }
]
};