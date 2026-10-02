export const javaOopsTopic = {
    id: "java-oops",
    subjectId: "tech",
    title: "Java OOPs Concepts",
    category: "Technical",
    badgeColor: "#dc2626",
    accentGradient: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
    pages: [
  {
    "pageNumber": 1,
    "title": "🟦 1. OBJECT ORIENTED PROGRAMMING",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 1. OBJECT ORIENTED PROGRAMMING",
      "subtitle": "From Zero → Placement Level",
      "sections": [
        {
          "heading": "What is OOP?",
          "items": [
            "OOP is a programming paradigm based on the concept of 'Objects'.",
            "Instead of just writing functions (like in C), we group data and functions together into Objects."
          ]
        },
        {
          "heading": "Class vs Object",
          "items": [
            {
              "text": "CLASS is a Blueprint. OBJECT is the real thing.",
              "visual": "CLASS: Car (Blueprint)\nProperties: color, speed\nMethods: drive(), brake()\n\nOBJECT: My Honda City\nProperties: color='Red', speed=120\nMethods: Real car driving."
            }
          ]
        },
        {
          "heading": "The 4 Pillars of OOP",
          "items": [
            "1. Encapsulation",
            "2. Inheritance",
            "3. Polymorphism",
            "4. Abstraction"
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
    "title": "🟦 2. ENCAPSULATION",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 2. ENCAPSULATION",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "Wrapping data (variables) and code (methods) together as a single unit.",
            "Like a Capsule: The medicine (data) is hidden inside the shell (methods)."
          ]
        },
        {
          "heading": "How to achieve it?",
          "items": [
            "1. Declare variables as 'private'.",
            "2. Provide public 'getter' and 'setter' methods to modify and view the variables."
          ]
        },
        {
          "heading": "Why?",
          "items": [
            "For Data Hiding and Security.",
            "You can't change the bank balance directly. You must use the deposit() method."
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
    "title": "🟦 3. INHERITANCE",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 3. INHERITANCE",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "One class acquires the properties and methods of another class.",
            "Parent (Super) Class -> Child (Sub) Class."
          ]
        },
        {
          "heading": "The 'IS-A' Relationship",
          "items": [
            "Inheritance represents an IS-A relationship.",
            "A Dog IS-A Animal. A Car IS-A Vehicle."
          ]
        },
        {
          "heading": "Types of Inheritance in Java",
          "items": [
            "1. Single (A -> B)",
            "2. Multilevel (A -> B -> C)",
            "3. Hierarchical (A -> B, A -> C)"
          ]
        },
        {
          "heading": "🚨 Java Multiple Inheritance Trap",
          "items": [
            "Java DOES NOT support Multiple Inheritance through classes (C extends A, B).",
            "It causes the 'Diamond Problem'. (Which parent's method to call?)",
            "We use Interfaces instead."
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
    "title": "🟦 4. POLYMORPHISM",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 4. POLYMORPHISM",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "Poly = Many, Morph = Forms.",
            "One thing acting in different ways."
          ]
        },
        {
          "heading": "Type 1: Compile-Time (Method Overloading)",
          "items": [
            "Same method name, different parameters (in same class).",
            "add(int a, int b) vs add(int a, int b, int c).",
            "Resolved by compiler."
          ]
        },
        {
          "heading": "Type 2: Run-Time (Method Overriding)",
          "items": [
            "Child class provides specific implementation of a method already in Parent.",
            "Parent has animalSound(). Dog overrides it to bark().",
            "Resolved by JVM at runtime (Dynamic Method Dispatch)."
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
    "title": "🟦 5. ABSTRACTION",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 5. ABSTRACTION",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "Hiding internal implementation details and showing only functionality to the user.",
            "Like a Car: You press the accelerator to go faster. You don't know how the engine works internally."
          ]
        },
        {
          "heading": "How to achieve it?",
          "items": [
            "1. Abstract Classes (0 to 100% abstraction)",
            "2. Interfaces (100% abstraction - before Java 8)"
          ]
        },
        {
          "heading": "Abstract Class Rules",
          "items": [
            "Cannot be instantiated (You cannot create an object of it using 'new').",
            "Can have abstract methods (no body) and concrete methods (with body).",
            "Child class MUST implement the abstract methods."
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
    "title": "🟦 6. INTERFACES",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 6. INTERFACES",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "A contract. It tells 'WHAT' to do, but not 'HOW' to do it.",
            "All methods are 'public abstract' by default.",
            "All variables are 'public static final' by default."
          ]
        },
        {
          "heading": "Multiple Inheritance",
          "items": [
            "A class can implement MULTIPLE interfaces.",
            "class Dog implements Animal, Pet"
          ]
        },
        {
          "heading": "Java 8 Updates",
          "items": [
            "Now interfaces can have 'default' and 'static' methods with a body!"
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
    "title": "🟦 7. CONSTRUCTORS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 7. CONSTRUCTORS",
      "subtitle": "",
      "sections": [
        {
          "heading": "What are they?",
          "items": [
            "Special method used to initialize objects.",
            "Called automatically when object is created."
          ]
        },
        {
          "heading": "Rules",
          "items": [
            "1. Name MUST exactly match Class name.",
            "2. NO return type (not even void).",
            "3. If you don't write one, Java provides a Default Constructor."
          ]
        },
        {
          "heading": "Constructor Overloading",
          "items": [
            "You can have multiple constructors with different parameters."
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
    "title": "🟦 8. 'this' AND 'super' KEYWORDS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 8. 'this' AND 'super' KEYWORDS",
      "subtitle": "",
      "sections": [
        {
          "heading": "The 'this' Keyword",
          "items": [
            "Refers to the CURRENT object.",
            "Used to resolve shadowing: this.name = name.",
            "Used to call another constructor in the same class: this()"
          ]
        },
        {
          "heading": "The 'super' Keyword",
          "items": [
            "Refers to the PARENT class object.",
            "Used to call parent method: super.methodName()",
            "Used to call parent constructor: super()",
            "🚨 super() MUST be the FIRST statement in child constructor."
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
    "title": "🟦 9. 'static' KEYWORD",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 9. 'static' KEYWORD",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "Belongs to the CLASS, not the object.",
            "Memory is allocated only ONCE in class area."
          ]
        },
        {
          "heading": "Static Variable",
          "items": [
            "Shared by all objects. (e.g., collegeName for all students)."
          ]
        },
        {
          "heading": "Static Method",
          "items": [
            "Can be called without creating an object. (e.g., Math.pow()).",
            "Cannot use 'this' or 'super'.",
            "Can ONLY access other static data directly."
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
    "title": "🟦 10. 'final' KEYWORD",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 10. 'final' KEYWORD",
      "subtitle": "",
      "sections": [
        {
          "heading": "final Variable",
          "items": [
            "Value cannot be changed (Constant)."
          ]
        },
        {
          "heading": "final Method",
          "items": [
            "Cannot be OVERRIDDEN by child class."
          ]
        },
        {
          "heading": "final Class",
          "items": [
            "Cannot be INHERITED by any class. (e.g., String class is final)."
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
    "title": "🟦 11. OVERRIDING RULES",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 11. OVERRIDING RULES",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Rules",
          "items": [
            "1. Method name and parameters must be EXACTLY the same.",
            "2. Return type must be same or covariant (subtype).",
            "3. Access modifier cannot be more restrictive. (If parent is protected, child can be protected or public, but NOT private).",
            "4. Private, static, and final methods CANNOT be overridden."
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
    "title": "⚠️ 12. PLACEMENT TRAPS",
    "desc": "",
    "handwrittenContent": {
      "title": "⚠️ 12. PLACEMENT TRAPS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Avoid these in Interviews",
          "items": [
            "1. Overloading vs Overriding confusion.",
            "2. Trying to instantiate an abstract class.",
            "3. Putting super() anywhere other than the first line of constructor.",
            "4. Thinking 'static' methods can be overridden (They can be HODDEN, not overridden).",
            "5. Not knowing that String is a final class."
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
    "title": "🟢 13. PRACTICE SET (Q1-Q5)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟢 13. PRACTICE SET (Q1-Q5)",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": [
        {
          "text": "Which OOP concept hides data?",
          "statements": [
            "A. Encapsulation",
            "B. Polymorphism",
            "C. Inheritance",
            "D. Abstraction"
          ]
        },
        {
          "text": "Can we create an object of an Abstract class?",
          "statements": [
            "A. Yes",
            "B. No",
            "C. Yes, if it has no abstract methods",
            "D. Depends"
          ]
        },
        {
          "text": "Method Overloading is an example of:",
          "statements": [
            "A. Run-time polymorphism",
            "B. Compile-time polymorphism",
            "C. Inheritance",
            "D. Encapsulation"
          ]
        },
        {
          "text": "Which keyword is used to inherit a class?",
          "statements": [
            "A. implements",
            "B. extends",
            "C. inherit",
            "D. super"
          ]
        },
        {
          "text": "A class can implement multiple _____",
          "statements": [
            "A. Classes",
            "B. Abstract classes",
            "C. Interfaces",
            "D. Objects"
          ]
        }
      ],
      "answerKey": null,
      "difficulty": "Beginner"
    }
  },
  {
    "pageNumber": 14,
    "title": "🟡 14. PRACTICE SET (Q6-Q10)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟡 14. PRACTICE SET (Q6-Q10)",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": [
        {
          "text": "Which method MUST be overridden by the child class?",
          "statements": [
            "A. Final methods",
            "B. Static methods",
            "C. Abstract methods",
            "D. Private methods"
          ]
        },
        {
          "text": "Can a constructor be marked as final?",
          "statements": [
            "A. Yes",
            "B. No",
            "C. Yes in Java 8",
            "D. Yes if class is final"
          ]
        },
        {
          "text": "What happens if return type is different in Method Overloading?",
          "statements": [
            "A. It is valid overloading",
            "B. Compiler error if parameters are same",
            "C. It becomes Overriding",
            "D. Run-time error"
          ]
        },
        {
          "text": "Which access modifier allows access within same package and subclasses?",
          "statements": [
            "A. Default",
            "B. Private",
            "C. Protected",
            "D. Public"
          ]
        },
        {
          "text": "What does 'super()' do?",
          "statements": [
            "A. Calls parent class method",
            "B. Calls parent class constructor",
            "C. Creates a super object",
            "D. Refers to current object"
          ]
        }
      ],
      "answerKey": null,
      "difficulty": "Intermediate"
    }
  },
  {
    "pageNumber": 15,
    "title": "🔴 15. PRACTICE SET (Q11-Q15)",
    "desc": "",
    "handwrittenContent": {
      "title": "🔴 15. PRACTICE SET (Q11-Q15)",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": [
        {
          "text": "Can we override a static method?",
          "statements": [
            "A. Yes",
            "B. No, it gets hidden (Method Hiding)",
            "C. Yes, if parent is not final",
            "D. Compiler error"
          ]
        },
        {
          "text": "Parent has 'protected void display()'. Child overriding it can use which modifier?",
          "statements": [
            "A. private",
            "B. default",
            "C. protected or public",
            "D. only protected"
          ]
        },
        {
          "text": "Which statement is true about interfaces (pre Java 8)?",
          "statements": [
            "A. Can have instance variables",
            "B. Can have constructors",
            "C. All methods are public abstract",
            "D. Can extend classes"
          ]
        },
        {
          "text": "What is the return type of a constructor?",
          "statements": [
            "A. void",
            "B. Class itself",
            "C. int",
            "D. None"
          ]
        },
        {
          "text": "Is 'Multiple Inheritance' supported in Java?",
          "statements": [
            "A. Yes",
            "B. No",
            "C. Yes, via classes",
            "D. Yes, via interfaces"
          ]
        }
      ],
      "answerKey": null,
      "difficulty": "Placement"
    }
  },
  {
    "pageNumber": 16,
    "title": "✅ 16. ANSWER KEY & SOLUTIONS",
    "desc": "",
    "handwrittenContent": {
      "title": "✅ 16. ANSWER KEY & SOLUTIONS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Important Explanations",
          "items": [
            "Q7: Constructors cannot be final, static, or abstract.",
            "Q8: Overloading depends ONLY on parameters, not return type.",
            "Q11: Static methods belong to the class. If child writes the same method, it HIDES the parent method, it doesn't override it.",
            "Q12: Child method cannot have a weaker access privilege. protected -> public is fine."
          ]
        }
      ],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": [
        "A",
        "B",
        "B",
        "B",
        "C",
        "C",
        "B",
        "B",
        "C",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D"
      ],
      "difficulty": null
    }
  }
]
};