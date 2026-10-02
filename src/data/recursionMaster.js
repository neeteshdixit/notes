export const recursionTopic = {
    id: "recursion",
    subjectId: "tech",
    title: "Recursion Basics",
    category: "Technical",
    badgeColor: "#8b5cf6",
    accentGradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
    pages: [
  {
    "pageNumber": 1,
    "title": "🟦 1. RECURSION",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 1. RECURSION",
      "subtitle": "From Zero → Placement Level",
      "sections": [
        {
          "heading": "What is Recursion?",
          "items": [
            "Recursion is a process in which a function calls ITSELF directly or indirectly.",
            "It's like looking into two mirrors facing each other — an endless loop of reflections, UNLESS you step out!"
          ]
        },
        {
          "heading": "The 2 Essential Parts",
          "items": [
            "1. BASE CASE: The condition where the function STOPS calling itself. (Without this, you get infinite recursion).",
            "2. RECURSIVE CASE: Where the function calls itself with a modified (usually smaller) parameter."
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
    "title": "🟦 2. HOW IT WORKS IN MEMORY",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 2. HOW IT WORKS IN MEMORY",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Call Stack",
          "items": [
            "Every time a function is called, it gets its own 'frame' in the Call Stack memory.",
            "When a function calls itself, a NEW frame is placed on TOP of the old one.",
            "The old function is PAUSED until the new function finishes and returns a value."
          ]
        },
        {
          "heading": "Stack Overflow",
          "items": [
            "If you forget the Base Case, the function keeps calling itself forever.",
            "Eventually, the memory limit of the Call Stack is reached, causing a 'StackOverflowError'!"
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
    "title": "🟦 3. THE CLASSIC FACTORIAL",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 3. THE CLASSIC FACTORIAL",
      "subtitle": "",
      "sections": [
        {
          "heading": "Factorial of N (N!)",
          "items": [
            "5! = 5 × 4 × 3 × 2 × 1",
            "Notice that 5! = 5 × (4!)",
            "So, N! = N × (N-1)!"
          ]
        },
        {
          "heading": "The Code",
          "items": [
            {
              "text": "Java/C++ Implementation",
              "visual": "int fact(int n) {\n    if (n == 0 || n == 1) // Base Case\n        return 1;\n    \n    return n * fact(n - 1); // Recursive Case\n}"
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
    "title": "🟦 4. THE FIBONACCI SEQUENCE",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 4. THE FIBONACCI SEQUENCE",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Series",
          "items": [
            "0, 1, 1, 2, 3, 5, 8, 13...",
            "Rule: Current Number = Sum of previous two numbers.",
            "Fib(n) = Fib(n-1) + Fib(n-2)"
          ]
        },
        {
          "heading": "The Code",
          "items": [
            {
              "text": "Implementation",
              "visual": "int fib(int n) {\n    if (n == 0) return 0; // Base Case 1\n    if (n == 1) return 1; // Base Case 2\n    \n    return fib(n - 1) + fib(n - 2);\n}"
            }
          ]
        },
        {
          "heading": "The Trap 🚨",
          "items": [
            "Recursive Fibonacci is extremely SLOW (Time Complexity: O(2^N)).",
            "Why? Because it recalculates the same values over and over again! We use Dynamic Programming (DP) to fix this."
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
    "title": "🟦 5. TYPES OF RECURSION",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 5. TYPES OF RECURSION",
      "subtitle": "",
      "sections": [
        {
          "heading": "1. Tail Recursion",
          "items": [
            "The recursive call is the VERY LAST thing executed by the function.",
            "No calculation is left to do after the call returns.",
            "Compilers optimize this easily to save memory."
          ]
        },
        {
          "heading": "2. Head Recursion",
          "items": [
            "The recursive call is the FIRST thing in the function.",
            "Processing happens AFTER the call returns."
          ]
        },
        {
          "heading": "3. Tree Recursion",
          "items": [
            "The function calls itself MULTIPLE times (like Fibonacci)."
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
            "1. Missing Base Case: Always check what happens if n=0 or n<0.",
            "2. Post-increment trap: fun(n--) passes 'n' then decrements. It causes infinite loops! Always use fun(n-1) or fun(--n).",
            "3. Print order: System.out.print(n) BEFORE the recursive call prints in descending order. Printing AFTER the call prints in ascending order!"
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
          "text": "What happens if the base case is missing in a recursive function?",
          "statements": [
            "A. Code runs faster",
            "B. StackOverflowError",
            "C. OutOfMemoryError for Heap",
            "D. Compilation Error"
          ]
        },
        {
          "text": "Which data structure is internally used to manage recursion?",
          "statements": [
            "A. Queue",
            "B. Heap",
            "C. Stack",
            "D. Linked List"
          ]
        },
        {
          "text": "void print(int n) {\n  if(n==0) return;\n  System.out.print(n);\n  print(n-1);\n}\nOutput of print(3)?",
          "statements": [
            "A. 123",
            "B. 321",
            "C. 3210",
            "D. 1230"
          ]
        },
        {
          "text": "void print(int n) {\n  if(n==0) return;\n  print(n-1);\n  System.out.print(n);\n}\nOutput of print(3)?",
          "statements": [
            "A. 123",
            "B. 321",
            "C. 3210",
            "D. 1230"
          ]
        },
        {
          "text": "What is the time complexity of a simple recursive Fibonacci function?",
          "statements": [
            "A. O(N)",
            "B. O(N^2)",
            "C. O(log N)",
            "D. O(2^N)"
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
          "text": "Recursion generally uses more memory than iteration because:",
          "statements": [
            "A. It creates new variables in heap",
            "B. Each function call adds a new frame to the call stack",
            "C. It uses multiple threads",
            "D. Compiler cannot optimize it"
          ]
        },
        {
          "text": "When a recursive call is the last statement executed in a function, it is called:",
          "statements": [
            "A. Head Recursion",
            "B. Tail Recursion",
            "C. Tree Recursion",
            "D. Indirect Recursion"
          ]
        },
        {
          "text": "int fun(int n) {\n  if(n <= 1) return 1;\n  return fun(n-1) + fun(n-1);\n}\nWhat does fun(4) return?",
          "statements": [
            "A. 4",
            "B. 8",
            "C. 16",
            "D. 32"
          ]
        },
        {
          "text": "int f(int n) {\n  if(n <= 0) return 0;\n  return n + f(n - 2);\n}\nf(5)?",
          "statements": [
            "A. 5",
            "B. 9",
            "C. 10",
            "D. 15"
          ]
        },
        {
          "text": "If we use `fun(n--)` inside the recursive call `fun` (where n > 0 initially), what happens?",
          "statements": [
            "A. Infinite loop / StackOverflow",
            "B. Works normally",
            "C. Works but skips 0",
            "D. Compile error"
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
          "heading": "Explanations",
          "items": [
            "Q4: The print happens AFTER the recursive call returns. So it prints from the bottom of the stack up! (123).",
            "Q8: fun(4) calls fun(3)+fun(3). Each fun(3) calls fun(2)+fun(2). Total calls = 2^(N-1). For n=4, result is 2^3 = 8.",
            "Q10: n-- is Post-Decrement. It passes the CURRENT value of n to the function, and only decrements the local copy afterwards. Result: Infinite recursion with the exact same value!"
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": [
        "B",
        "C",
        "B",
        "A",
        "D",
        "B",
        "B",
        "B",
        "B",
        "A"
      ],
      "difficulty": null
    }
  }
]
};