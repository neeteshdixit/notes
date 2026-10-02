export const javaExceptionsTopic = {
    id: "java-exceptions",
    subjectId: "tech",
    title: "Java Exceptions",
    category: "Technical",
    badgeColor: "#be123c",
    accentGradient: "linear-gradient(135deg, #be123c 0%, #881337 100%)",
    pages: [
  {
    "pageNumber": 1,
    "title": "🟦 1. JAVA EXCEPTIONS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 1. JAVA EXCEPTIONS",
      "subtitle": "From Zero → Placement Level",
      "sections": [
        {
          "heading": "What is an Exception?",
          "items": [
            "An unwanted or unexpected event that disrupts the normal flow of the program.",
            "(e.g., trying to divide by zero, or trying to read a file that doesn't exist)."
          ]
        },
        {
          "heading": "Exception Handling",
          "items": [
            "A mechanism to handle these runtime errors so that the normal flow of the application can be maintained."
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
    "title": "🟦 2. THE EXCEPTION HIERARCHY",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 2. THE EXCEPTION HIERARCHY",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Throwable Class",
          "items": [
            {
              "text": "Throwable is the root class of all errors and exceptions.",
              "visual": "Throwable\n   ├── Error (Out of our control: OutOfMemoryError, StackOverflowError)\n   └── Exception (Can be handled)\n        ├── RuntimeException (Unchecked: NullPointerException, ArithmeticException)\n        ├── IOException (Checked)\n        └── SQLException (Checked)"
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
    "pageNumber": 3,
    "title": "🟦 3. CHECKED vs UNCHECKED",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 3. CHECKED vs UNCHECKED",
      "subtitle": "",
      "sections": [
        {
          "heading": "Checked Exceptions",
          "items": [
            "Checked by the COMPILER at compile-time.",
            "You MUST handle them using try-catch or throws, otherwise your code won't compile.",
            "Examples: IOException, SQLException."
          ]
        },
        {
          "heading": "Unchecked Exceptions",
          "items": [
            "NOT checked by compiler. They happen at RUNTIME.",
            "All subclasses of RuntimeException are unchecked.",
            "Examples: ArithmeticException (5/0), NullPointerException, ArrayIndexOutOfBoundsException."
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
    "title": "🟦 4. TRY - CATCH - FINALLY",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 4. TRY - CATCH - FINALLY",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Try-Catch Block",
          "items": [
            "try { // Code that might throw exception }",
            "catch(Exception e) { // Code to handle it }"
          ]
        },
        {
          "heading": "The Finally Block",
          "items": [
            "Always executes, whether exception is thrown or not, whether it is caught or not.",
            "Used to close resources (scanners, database connections).",
            "🚨 Exception: finally does NOT execute if you call System.exit(0)."
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
    "title": "🟦 5. THROW vs THROWS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 5. THROW vs THROWS",
      "subtitle": "",
      "sections": [
        {
          "heading": "throw keyword",
          "items": [
            "Used to EXPLICITLY throw an exception from inside a method.",
            "Example: if(age < 18) throw new ArithmeticException(\"Not eligible\");"
          ]
        },
        {
          "heading": "throws keyword",
          "items": [
            "Used in the method SIGNATURE to declare that this method might throw a checked exception.",
            "Example: void readFile() throws IOException { ... }"
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
    "title": "🟦 6. MULTIPLE CATCH BLOCKS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 6. MULTIPLE CATCH BLOCKS",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Rule of Order",
          "items": [
            "When using multiple catch blocks, you MUST order them from specific (child) to general (parent).",
            "Wrong: catch(Exception e) { } catch(ArithmeticException a) { } -> Compiler error! (Unreachable code).",
            "Right: catch(ArithmeticException a) { } catch(Exception e) { }"
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
    "title": "⚠️ 7. PLACEMENT TRAPS",
    "desc": "",
    "handwrittenContent": {
      "title": "⚠️ 7. PLACEMENT TRAPS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Avoid these in Interviews",
          "items": [
            "1. Error vs Exception: Errors (like OutOfMemory) shouldn't be caught. Exceptions should be.",
            "2. Try without catch: A try block MUST have either a catch or a finally block.",
            "3. System.exit(0) kills the JVM, so the finally block will not run.",
            "4. Return in finally: If both try and finally have a return statement, the finally return overrides the try return."
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
    "title": "🟢 8. PRACTICE SET (Q1-Q8)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟢 8. PRACTICE SET (Q1-Q8)",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": [
        {
          "text": "Which class is the root of the exception hierarchy?",
          "statements": [
            "A. Exception",
            "B. Error",
            "C. Throwable",
            "D. Object"
          ]
        },
        {
          "text": "Which block always executes regardless of an exception?",
          "statements": [
            "A. try",
            "B. catch",
            "C. finally",
            "D. finalize"
          ]
        },
        {
          "text": "ArithmeticException is a:",
          "statements": [
            "A. Checked Exception",
            "B. Unchecked Exception",
            "C. Error",
            "D. Checked Error"
          ]
        },
        {
          "text": "Which keyword is used to explicitly trigger an exception?",
          "statements": [
            "A. throws",
            "B. throw",
            "C. try",
            "D. catch"
          ]
        },
        {
          "text": "What stops the finally block from executing?",
          "statements": [
            "A. return in try",
            "B. throw in catch",
            "C. System.exit(0)",
            "D. Nothing"
          ]
        },
        {
          "text": "Which of these is a Checked Exception?",
          "statements": [
            "A. NullPointerException",
            "B. IOException",
            "C. ArithmeticException",
            "D. ClassCastException"
          ]
        },
        {
          "text": "Can we have a try block without a catch block?",
          "statements": [
            "A. Yes, if followed by finally",
            "B. No, catch is mandatory",
            "C. Yes, it can be alone",
            "D. Only for unchecked exceptions"
          ]
        },
        {
          "text": "What happens if a parent Exception is caught before its child exception?",
          "statements": [
            "A. It works fine",
            "B. Runtime Error",
            "C. Compile Time Error (Unreachable code)",
            "D. Warning"
          ]
        }
      ],
      "answerKey": null,
      "difficulty": "Beginner"
    }
  },
  {
    "pageNumber": 9,
    "title": "🟡 9. PRACTICE SET (Q9-Q15)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟡 9. PRACTICE SET (Q9-Q15)",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": [
        {
          "text": "Where is the 'throws' keyword used?",
          "statements": [
            "A. Inside method body",
            "B. In method signature",
            "C. In class declaration",
            "D. In catch block"
          ]
        },
        {
          "text": "What does try-with-resources do in Java 7+?",
          "statements": [
            "A. Automatically throws exceptions",
            "B. Automatically closes resources",
            "C. Prevents System.exit(0)",
            "D. Replaces finally block completely"
          ]
        },
        {
          "text": "If try returns 1 and finally returns 2, what does the method return?",
          "statements": [
            "A. 1",
            "B. 2",
            "C. Compilation error",
            "D. Runtime error"
          ]
        },
        {
          "text": "Is Error a subclass of Exception?",
          "statements": [
            "A. Yes",
            "B. No",
            "C. Only in Java 8+",
            "D. They are interfaces"
          ]
        },
        {
          "text": "What causes StackOverflowError?",
          "statements": [
            "A. Infinite loop",
            "B. Infinite recursion",
            "C. Array out of bounds",
            "D. Dividing by zero"
          ]
        },
        {
          "text": "NullPointerException occurs at:",
          "statements": [
            "A. Compile time",
            "B. Run time",
            "C. Load time",
            "D. None"
          ]
        },
        {
          "text": "Can we throw a Checked Exception using 'throw' keyword?",
          "statements": [
            "A. Yes",
            "B. No, only Unchecked",
            "C. Yes, but must handle or declare it",
            "D. No, compiler restricts it"
          ]
        }
      ],
      "answerKey": null,
      "difficulty": "Placement"
    }
  },
  {
    "pageNumber": 10,
    "title": "✅ 10. ANSWER KEY",
    "desc": "",
    "handwrittenContent": {
      "title": "✅ 10. ANSWER KEY",
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
        "C",
        "B",
        "A",
        "C",
        "B",
        "B",
        "B",
        "B",
        "B",
        "B",
        "C"
      ],
      "difficulty": null
    }
  }
]
};