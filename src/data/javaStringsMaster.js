export const javaStringsTopic = {
    id: "java-strings",
    subjectId: "tech",
    title: "Java Strings",
    category: "Technical",
    badgeColor: "#ea580c",
    accentGradient: "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
    pages: [
  {
    "pageNumber": 1,
    "title": "🟦 1. JAVA STRINGS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 1. JAVA STRINGS",
      "subtitle": "From Zero → Placement Level",
      "sections": [
        {
          "heading": "What is a String?",
          "items": [
            "In Java, String is NOT a primitive data type (like int, char).",
            "String is an OBJECT that represents a sequence of characters.",
            "It is backed by a char[] array internally."
          ]
        },
        {
          "heading": "How to create a String?",
          "items": [
            "Method 1: String Literal -> String s = \"Hello\";",
            "Method 2: new Keyword -> String s = new String(\"Hello\");"
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
    "title": "🟦 2. IMMUTABILITY OF STRING",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 2. IMMUTABILITY OF STRING",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Golden Concept",
          "items": [
            "Strings in Java are IMMUTABLE.",
            "This means once a String object is created, its data or state CANNOT be changed."
          ]
        },
        {
          "heading": "What happens if we change it?",
          "items": [
            "String s = \"Sachin\";",
            "s.concat(\" Tendulkar\");",
            "System.out.println(s); // Output is STILL 'Sachin'!",
            "To actually change it: s = s.concat(\" Tendulkar\"); (This creates a completely NEW object in memory)."
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
    "title": "🟦 3. STRING CONSTANT POOL (SCP)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 3. STRING CONSTANT POOL (SCP)",
      "subtitle": "",
      "sections": [
        {
          "heading": "Memory Magic",
          "items": [
            "To save memory, Java stores all String literals in a special area inside the Heap memory called String Constant Pool (SCP)."
          ]
        },
        {
          "heading": "How it works?",
          "items": [
            "String s1 = \"Java\";",
            "String s2 = \"Java\";",
            "Java does NOT create two objects. s1 and s2 both point to the SAME \"Java\" object in the SCP."
          ]
        },
        {
          "heading": "The 'new' Keyword Trap",
          "items": [
            "String s3 = new String(\"Java\");",
            "This forces Java to create a NEW object in the normal Heap memory, even if \"Java\" already exists in SCP."
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
    "title": "🟦 4. EQUALS (==) vs .equals()",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 4. EQUALS (==) vs .equals()",
      "subtitle": "",
      "sections": [
        {
          "heading": "The '==' Operator",
          "items": [
            "Checks REFERENCE equality. Do both variables point to the exact same object in memory?"
          ]
        },
        {
          "heading": "The .equals() Method",
          "items": [
            "Checks VALUE equality. Are the characters inside the strings identical?"
          ]
        },
        {
          "heading": "Example",
          "items": [
            "String s1 = new String(\"Hi\");",
            "String s2 = new String(\"Hi\");",
            "s1 == s2 -> FALSE (Different objects in Heap).",
            "s1.equals(s2) -> TRUE (Same content)."
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
    "title": "🟦 5. STRINGBUILDER vs STRINGBUFFER",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 5. STRINGBUILDER vs STRINGBUFFER",
      "subtitle": "",
      "sections": [
        {
          "heading": "Why do we need them?",
          "items": [
            "Since String is immutable, doing s += \"a\" inside a loop creates thousands of garbage objects and slows down the program.",
            "StringBuilder and StringBuffer are MUTABLE strings."
          ]
        },
        {
          "heading": "The Difference",
          "items": [
            "StringBuffer: All methods are SYNCHRONIZED (Thread-safe). Very slow.",
            "StringBuilder: Not synchronized (Not thread-safe). Extremely FAST. (Always use this for coding interviews!)"
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
    "title": "🟦 6. IMPORTANT STRING METHODS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 6. IMPORTANT STRING METHODS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Length and Chars",
          "items": [
            "s.length() -> Returns int (Note: It's a method with (), unlike array.length).",
            "s.charAt(2) -> Returns char at index 2."
          ]
        },
        {
          "heading": "Substrings",
          "items": [
            "s.substring(start) -> From start index to end.",
            "s.substring(start, end) -> From start to (end - 1). (End index is EXCLUSIVE)."
          ]
        },
        {
          "heading": "Searching & Replacing",
          "items": [
            "s.indexOf('a') -> First occurrence index.",
            "s.replace('a', 'b') -> Replaces all 'a' with 'b'."
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
            "1. Using '==' to compare strings. (Always use .equals() !)",
            "2. Thinking s.length is a property. (It's a method: s.length() )",
            "3. Forgetting that substring(1, 4) gives chars at 1, 2, and 3. (4 is excluded).",
            "4. Doing string concatenation in a for loop. (Use StringBuilder.append() instead)."
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
          "text": "Strings in Java are:",
          "statements": [
            "A. Mutable",
            "B. Immutable",
            "C. Primitive",
            "D. Thread-safe by default"
          ]
        },
        {
          "text": "Which class is fast and mutable?",
          "statements": [
            "A. String",
            "B. StringBuffer",
            "C. StringBuilder",
            "D. StringReader"
          ]
        },
        {
          "text": "String s = \"Java\";\nString s2 = \"Java\";\ns == s2 evaluates to?",
          "statements": [
            "A. true",
            "B. false",
            "C. compilation error",
            "D. runtime error"
          ]
        },
        {
          "text": "String s = new String(\"Java\");\nString s2 = new String(\"Java\");\ns == s2 evaluates to?",
          "statements": [
            "A. true",
            "B. false",
            "C. compilation error",
            "D. runtime error"
          ]
        },
        {
          "text": "Which method compares the actual content of Strings?",
          "statements": [
            "A. ==",
            "B. compare()",
            "C. equals()",
            "D. content()"
          ]
        },
        {
          "text": "Where are String literals stored in memory?",
          "statements": [
            "A. Stack",
            "B. String Constant Pool (SCP)",
            "C. Method Area",
            "D. PC Register"
          ]
        },
        {
          "text": "String s = \"Hello\";\ns.concat(\" World\");\nSystem.out.println(s);",
          "statements": [
            "A. Hello",
            "B. Hello World",
            "C. World",
            "D. null"
          ]
        },
        {
          "text": "What is the output of \"Hello\".substring(1, 3)?",
          "statements": [
            "A. He",
            "B. el",
            "C. ell",
            "D. lo"
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
          "text": "Which of these is thread-safe?",
          "statements": [
            "A. StringBuilder",
            "B. StringBuffer",
            "C. String",
            "D. Both B and C"
          ]
        },
        {
          "text": "How to get the length of a String 's'?",
          "statements": [
            "A. s.length",
            "B. s.size()",
            "C. s.length()",
            "D. s.capacity()"
          ]
        },
        {
          "text": "What does the intern() method do?",
          "statements": [
            "A. Reverses the string",
            "B. Creates a new object in heap",
            "C. Puts string in SCP if not present",
            "D. Converts to lowercase"
          ]
        },
        {
          "text": "String s = \"\";\ns.isEmpty() returns?",
          "statements": [
            "A. true",
            "B. false",
            "C. NullPointerException",
            "D. 0"
          ]
        },
        {
          "text": "String s = null;\ns.isEmpty() returns?",
          "statements": [
            "A. true",
            "B. false",
            "C. NullPointerException",
            "D. 0"
          ]
        },
        {
          "text": "Which keyword prevents a String class from being inherited?",
          "statements": [
            "A. static",
            "B. abstract",
            "C. final",
            "D. strictfp"
          ]
        },
        {
          "text": "String is backed by which internal data structure?",
          "statements": [
            "A. char[] (or byte[] in Java 9+)",
            "B. ArrayList",
            "C. LinkedList",
            "D. int[]"
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
        "B",
        "C",
        "A",
        "B",
        "C",
        "B",
        "A",
        "B",
        "D",
        "C",
        "C",
        "A",
        "C",
        "C",
        "A"
      ],
      "difficulty": null
    }
  }
]
};