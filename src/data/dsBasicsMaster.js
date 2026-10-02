export const dsBasicsTopic = {
    id: "ds-basics",
    subjectId: "tech",
    title: "Data Structures Basics",
    category: "Technical",
    badgeColor: "#4338ca",
    accentGradient: "linear-gradient(135deg, #4338ca 0%, #312e81 100%)",
    pages: [
  {
    "pageNumber": 1,
    "title": "🟦 1. DATA STRUCTURES BASICS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 1. DATA STRUCTURES BASICS",
      "subtitle": "From Zero → Placement Level",
      "sections": [
        {
          "heading": "What is a Data Structure?",
          "items": [
            "A way of organizing and storing data in a computer so that it can be accessed and modified efficiently.",
            "Algorithm + Data Structure = Program."
          ]
        },
        {
          "heading": "Linear vs Non-Linear",
          "items": [
            "Linear: Elements are arranged sequentially. (Arrays, Linked Lists, Stacks, Queues).",
            "Non-Linear: Elements are arranged hierarchically. (Trees, Graphs)."
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
    "title": "🟦 2. ARRAYS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 2. ARRAYS",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "A collection of items stored at CONTIGUOUS memory locations.",
            "Size is fixed once created."
          ]
        },
        {
          "heading": "Time Complexities",
          "items": [
            "Access by Index: O(1) -> Lightning fast!",
            "Search: O(N) for linear, O(log N) for binary search.",
            "Insertion/Deletion at start/middle: O(N) -> Slow (requires shifting all elements)."
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
    "title": "🟦 3. LINKED LISTS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 3. LINKED LISTS",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "Elements are NOT stored in contiguous memory.",
            "Each element (Node) contains DATA and a POINTER (link) to the next node."
          ]
        },
        {
          "heading": "Time Complexities",
          "items": [
            "Access by Index: O(N) -> Slow! Have to traverse from the head.",
            "Insertion/Deletion at start: O(1) -> Very fast! Just change the pointer."
          ]
        },
        {
          "heading": "Types",
          "items": [
            "Singly: Node -> Next",
            "Doubly: Prev <- Node -> Next",
            "Circular: Last node points back to the First node."
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
    "title": "🟦 4. STACKS",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 4. STACKS",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept (LIFO)",
          "items": [
            "LIFO = Last In, First Out.",
            "Like a stack of plates in a cafeteria. The last plate put on top is the first one taken off."
          ]
        },
        {
          "heading": "Operations & Complexities",
          "items": [
            "Push (Insert): O(1)",
            "Pop (Remove): O(1)",
            "Peek (View top): O(1)"
          ]
        },
        {
          "heading": "Real Life Uses",
          "items": [
            "Undo mechanism in text editors (Ctrl+Z).",
            "Browser back button.",
            "Function Call Stack in memory (Recursion)."
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
    "title": "🟦 5. QUEUES",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 5. QUEUES",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept (FIFO)",
          "items": [
            "FIFO = First In, First Out.",
            "Like a line at a ticket counter. The person who comes first gets the ticket first."
          ]
        },
        {
          "heading": "Operations & Complexities",
          "items": [
            "Enqueue (Insert at rear): O(1)",
            "Dequeue (Remove from front): O(1)"
          ]
        },
        {
          "heading": "Real Life Uses",
          "items": [
            "Printer task scheduling.",
            "CPU task scheduling.",
            "Handling website requests."
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
    "title": "🟦 6. TREES",
    "desc": "",
    "handwrittenContent": {
      "title": "🟦 6. TREES",
      "subtitle": "",
      "sections": [
        {
          "heading": "The Concept",
          "items": [
            "A hierarchical structure with a Root node and child subtrees."
          ]
        },
        {
          "heading": "Binary Search Tree (BST)",
          "items": [
            "Left child is LESS than parent. Right child is GREATER than parent.",
            "Search time: O(log N) average, O(N) worst case (if tree is skewed)."
          ]
        },
        {
          "heading": "Traversals",
          "items": [
            "Inorder (Left-Root-Right): Gives sorted order in BST.",
            "Preorder (Root-Left-Right)",
            "Postorder (Left-Right-Root)"
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
            "1. Array vs Linked List: If asked for frequent insertions, say Linked List. If asked for frequent access, say Array.",
            "2. Stack vs Queue: Know which is LIFO and which is FIFO.",
            "3. BST Worst Case: Don't say BST search is always O(log N). If you insert 1, 2, 3, 4 sequentially, it becomes a line (O(N)). You need AVL or Red-Black trees to guarantee O(log N)."
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
    "title": "🟢 8. PRACTICE SET (Q1-Q5)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟢 8. PRACTICE SET (Q1-Q5)",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": [
        {
          "text": "Which data structure is based on LIFO principle?",
          "statements": [
            "A. Array",
            "B. Queue",
            "C. Stack",
            "D. Tree"
          ]
        },
        {
          "text": "Which data structure uses FIFO?",
          "statements": [
            "A. Stack",
            "B. Queue",
            "C. Linked List",
            "D. Graph"
          ]
        },
        {
          "text": "What is the time complexity to access the nth element in an Array?",
          "statements": [
            "A. O(1)",
            "B. O(N)",
            "C. O(log N)",
            "D. O(N^2)"
          ]
        },
        {
          "text": "What is the time complexity to access the nth element in a Linked List?",
          "statements": [
            "A. O(1)",
            "B. O(N)",
            "C. O(log N)",
            "D. O(N^2)"
          ]
        },
        {
          "text": "Which tree traversal gives data in sorted order for a BST?",
          "statements": [
            "A. Preorder",
            "B. Postorder",
            "C. Inorder",
            "D. Level Order"
          ]
        }
      ],
      "answerKey": null,
      "difficulty": "Beginner"
    }
  },
  {
    "pageNumber": 9,
    "title": "🟡 9. PRACTICE SET (Q6-Q10)",
    "desc": "",
    "handwrittenContent": {
      "title": "🟡 9. PRACTICE SET (Q6-Q10)",
      "subtitle": "",
      "sections": [],
      "tips": [],
      "traps": [],
      "table": null,
      "examples": null,
      "questions": [
        {
          "text": "A browser's 'Back' button is best implemented using:",
          "statements": [
            "A. Queue",
            "B. Stack",
            "C. Tree",
            "D. Graph"
          ]
        },
        {
          "text": "A printer's job scheduling is best implemented using:",
          "statements": [
            "A. Stack",
            "B. Queue",
            "C. Linked List",
            "D. Hash Map"
          ]
        },
        {
          "text": "In a Doubly Linked List, how many pointers does a node have?",
          "statements": [
            "A. 1",
            "B. 2",
            "C. 3",
            "D. 0"
          ]
        },
        {
          "text": "What is the worst-case search time complexity of a standard Binary Search Tree?",
          "statements": [
            "A. O(1)",
            "B. O(log N)",
            "C. O(N)",
            "D. O(N log N)"
          ]
        },
        {
          "text": "Which of these is a Non-Linear data structure?",
          "statements": [
            "A. Array",
            "B. Stack",
            "C. Queue",
            "D. Graph"
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
        "B",
        "A",
        "B",
        "C",
        "B",
        "B",
        "B",
        "C",
        "D"
      ],
      "difficulty": null
    }
  }
]
};