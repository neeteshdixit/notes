export const javaCollectionsTopic = {
    id: "java-collections",
    subjectId: "tech",
    title: "Java Collections Framework",
    category: "Technical",
    badgeColor: "#16a34a",
    accentGradient: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
    pages: [
  {
    "pageNumber": 1,
    "title": "🟦 1. JAVA COLLECTIONS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 1. JAVA COLLECTIONS",
      "subtitle": "From Zero → Placement Level",
      "sections": [
        {
          "heading": "What is a Collection?",
          "items": [
            "A framework that provides an architecture to store and manipulate a group of objects.",
            "It handles all operations like searching, sorting, insertion, manipulation, and deletion."
          ]
        },
        {
          "heading": "Why Collections over Arrays?",
          "items": [
            "Arrays have a FIXED size. Collections are dynamic (grow automatically).",
            "Arrays can hold both primitives (int, double) and objects. Collections can ONLY hold objects (Integer, Double).",
            "Arrays have no built-in methods. Collections have powerful methods (sort, remove, contains)."
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
    "title": "🟦 2. THE COLLECTION HIERARCHY",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 2. THE COLLECTION HIERARCHY",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Root Interfaces",
          "items": [
            {
              "text": "Iterable is the super root. Collection extends Iterable.",
              "visual": "Iterable (Interface)\n   |\nCollection (Interface)\n   ├── List (Interface) -> ArrayList, LinkedList, Vector\n   ├── Set (Interface)  -> HashSet, LinkedHashSet, TreeSet\n   └── Queue (Interface)-> PriorityQueue, ArrayDeque"
            }
          ]
        },
        {
          "heading": "The Odd One Out",
          "items": [
            "Map DOES NOT inherit from the Collection interface. It is a separate branch.",
            "Map -> HashMap, LinkedHashMap, TreeMap."
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
    "title": "🟦 3. THE LIST INTERFACE",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 3. THE LIST INTERFACE",
      "subtitle": "",
      "sections": [
        {
          "heading": "Core Properties",
          "items": [
            "1. Preserves Insertion Order.",
            "2. Allows Duplicate Elements.",
            "3. Accessed via Index (like arrays)."
          ]
        },
        {
          "heading": "ArrayList vs LinkedList",
          "items": [
            "ArrayList: Internally uses dynamic array. Best for retrieving elements (O(1)). Worst for inserting/deleting in the middle (shifting needed).",
            "LinkedList: Internally uses Doubly Linked List. Best for inserting/deleting in the middle (O(1)). Worst for retrieving elements (O(N))."
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
    "title": "🟦 4. THE SET INTERFACE",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 4. THE SET INTERFACE",
      "subtitle": "",
      "sections": [
        {
          "heading": "Core Properties",
          "items": [
            "1. NO Duplicate Elements allowed.",
            "2. No index-based access."
          ]
        },
        {
          "heading": "The 3 Main Sets",
          "items": [
            "1. HashSet: Fastest. Order is completely RANDOM. Internally uses HashMap.",
            "2. LinkedHashSet: Slower. Maintains INSERTION ORDER.",
            "3. TreeSet: Slowest. Maintains SORTED ORDER (Ascending by default)."
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
    "title": "🟦 5. THE MAP INTERFACE",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 5. THE MAP INTERFACE",
      "subtitle": "",
      "sections": [
        {
          "heading": "Core Properties",
          "items": [
            "1. Stores Key-Value pairs.",
            "2. Keys MUST be unique. Values can be duplicated.",
            "3. One key can map to at most one value."
          ]
        },
        {
          "heading": "The 3 Main Maps",
          "items": [
            "1. HashMap: Random order of keys. Allows ONE null key and multiple null values.",
            "2. LinkedHashMap: Maintains insertion order of keys.",
            "3. TreeMap: Maintains sorted order of keys. Does NOT allow null keys."
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
    "title": "🟦 6. HOW HASHMAP WORKS INTERNALLY?",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 6. HOW HASHMAP WORKS INTERNALLY?",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Array of Nodes (Buckets)",
          "items": [
            "Internally, HashMap uses an array of Linked Lists (Nodes). Default size is 16."
          ]
        },
        {
          "heading": "The Put Operation",
          "items": [
            "1. Calculate Hash of the Key: hash(key).",
            "2. Calculate Index: index = hash & (n-1).",
            "3. Go to that index in the array.",
            "4. If empty, place the Node. If occupied (Collision), add to the end of the Linked List."
          ]
        },
        {
          "heading": "Java 8 Optimization",
          "items": [
            "If the Linked List size at one bucket crosses 8, it converts into a Balanced Binary Tree (Red-Black Tree) for faster searching O(log N)."
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
    "title": "🟦 7. ITERATORS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 7. ITERATORS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Iterator",
          "items": [
            "Can be used for ANY Collection (List, Set, Queue).",
            "Can only move FORWARD.",
            "Methods: hasNext(), next(), remove()."
          ]
        },
        {
          "heading": "ListIterator",
          "items": [
            "Can be used ONLY for Lists.",
            "Can move FORWARD and BACKWARD.",
            "Methods: hasNext(), hasPrevious(), next(), previous(), add(), set()."
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
    "title": "🟦 8. SORTING OBJECTS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 8. SORTING OBJECTS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Comparable (java.lang)",
          "items": [
            "Provides a SINGLE default sorting sequence.",
            "Modifies the actual class (implements Comparable).",
            "Method: public int compareTo(Object o)"
          ]
        },
        {
          "heading": "Comparator (java.util)",
          "items": [
            "Provides MULTIPLE sorting sequences (sort by age, then sort by name).",
            "Does NOT modify the actual class (create separate class or lambda).",
            "Method: public int compare(Object o1, Object o2)"
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
    "title": "🟦 9. CONCURRENT MODIFICATIONS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 9. CONCURRENT MODIFICATIONS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Fail-Fast Iterators",
          "items": [
            "If you modify the collection (add/remove) while iterating over it, it throws ConcurrentModificationException.",
            "Examples: ArrayList, HashMap, HashSet."
          ]
        },
        {
          "heading": "Fail-Safe Iterators",
          "items": [
            "They iterate over a CLONE of the collection, so modifications don't affect the iteration. No exception thrown.",
            "Examples: ConcurrentHashMap, CopyOnWriteArrayList."
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
    "title": "⚠️ 10. PLACEMENT TRAPS",
    "desc": "",
    "handwrittenContent": {
      "title": "⚠️ 10. PLACEMENT TRAPS",
      "subtitle": "",
      "sections": [
        {
          "heading": "Avoid these in Interviews",
          "items": [
            "1. Map is NOT a Collection. It's part of the Framework, but doesn't implement Collection interface.",
            "2. TreeSet/TreeMap CANNOT have null values/keys because they use compareTo(), which throws NullPointerException.",
            "3. Vector and Hashtable are LEGACY and SYNCHRONIZED (Thread-safe but slow). Avoid using them in modern code.",
            "4. Initial capacity of ArrayList is 10. Load factor of HashMap is 0.75."
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
    "title": "🟢 11. PRACTICE SET (Q1-Q8)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟢 11. PRACTICE SET (Q1-Q8)",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": [
        {
          "text": "Which interface does NOT extend the Collection interface?",
          "statements": [
            "A. List",
            "B. Set",
            "C. Queue",
            "D. Map"
          ]
        },
        {
          "text": "Which class allows duplicate elements?",
          "statements": [
            "A. HashSet",
            "B. TreeSet",
            "C. ArrayList",
            "D. LinkedHashSet"
          ]
        },
        {
          "text": "Which collection maintains the insertion order?",
          "statements": [
            "A. HashSet",
            "B. TreeMap",
            "C. LinkedHashSet",
            "D. PriorityQueue"
          ]
        },
        {
          "text": "What is the time complexity of adding an element at the end of ArrayList?",
          "statements": [
            "A. O(1)",
            "B. O(N)",
            "C. O(log N)",
            "D. O(N^2)"
          ]
        },
        {
          "text": "Which of these is thread-safe?",
          "statements": [
            "A. ArrayList",
            "B. HashMap",
            "C. Vector",
            "D. LinkedList"
          ]
        },
        {
          "text": "Which Map allows exactly one null key?",
          "statements": [
            "A. TreeMap",
            "B. HashMap",
            "C. Hashtable",
            "D. ConcurrentHashMap"
          ]
        },
        {
          "text": "What exception is thrown by Fail-Fast iterators?",
          "statements": [
            "A. NullPointerException",
            "B. ConcurrentModificationException",
            "C. IllegalStateException",
            "D. ArrayOutOfBoundsException"
          ]
        },
        {
          "text": "Which method is used by Comparable interface?",
          "statements": [
            "A. compare()",
            "B. compareTo()",
            "C. equals()",
            "D. sort()"
          ]
        }
      ],
      "answerKey": null,
      "difficulty": "Beginner"
    }
  },
  {
    "pageNumber": 12,
    "title": "🟡 12. PRACTICE SET (Q9-Q15)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟡 12. PRACTICE SET (Q9-Q15)",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": [
        {
          "text": "In Java 8, HashMap buckets convert from Linked List to what structure when size > 8?",
          "statements": [
            "A. Array",
            "B. Stack",
            "C. Red-Black Tree",
            "D. Doubly Linked List"
          ]
        },
        {
          "text": "What is the default initial capacity of an ArrayList?",
          "statements": [
            "A. 0",
            "B. 10",
            "C. 16",
            "D. 32"
          ]
        },
        {
          "text": "Which iterator allows traversing in both directions?",
          "statements": [
            "A. Iterator",
            "B. Enumeration",
            "C. ListIterator",
            "D. Both A and C"
          ]
        },
        {
          "text": "How does HashSet ensure uniqueness internally?",
          "statements": [
            "A. It uses an Array",
            "B. It uses a HashMap",
            "C. It uses a LinkedList",
            "D. It overrides equals() only"
          ]
        },
        {
          "text": "What is the default load factor of a HashMap?",
          "statements": [
            "A. 0.5",
            "B. 0.75",
            "C. 1.0",
            "D. 1.5"
          ]
        },
        {
          "text": "Which of the following is an unordered Map?",
          "statements": [
            "A. TreeMap",
            "B. LinkedHashMap",
            "C. HashMap",
            "D. Both A and C"
          ]
        },
        {
          "text": "Can we add primitive types directly to an ArrayList?",
          "statements": [
            "A. Yes, ArrayList<int>",
            "B. No, must use Wrapper classes",
            "C. Only in Java 8+",
            "D. Yes, but it's slow"
          ]
        }
      ],
      "answerKey": null,
      "difficulty": "Placement"
    }
  },
  {
    "pageNumber": 13,
    "title": "✅ 13. ANSWER KEY",
    "desc": "",
    "handwrittenContent": {
      "title": "✅ 13. ANSWER KEY",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": null,
      "answerKey": [
        "D",
        "C",
        "C",
        "A",
        "C",
        "B",
        "B",
        "B",
        "C",
        "B",
        "C",
        "B",
        "B",
        "C",
        "B"
      ],
      "difficulty": null
    }
  }
]
};