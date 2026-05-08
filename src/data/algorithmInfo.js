export const algorithmInfo = {
    "Bubble Sort" : {
        title: "Bubble Sort",
        description: "Bubble Sort repeatedly compares adjacent elements and swaps them if they are in the wrong order.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
    },
    "Merge Sort" : {
        title: "Merge Sort",
        description: "Merge Sort divides the array into halves, sorts them, and merges them back together.",
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(n)",
    },
    "Quick Sort" : {
        title: "Quick Sort",
        description: "Quick Sort picks a pivot and partitions the array around it.",
        timeComplexity: "O(n log n) average, O(n²) worst",
        spaceComplexity: "O(log n)",
    },
    "Insertion Sort" : {
        title: "Insertion Sort",
        description: "Insertion Sort builds the sorted array one item at a time by placing each element in its correct position.",
        timeComplexity: "O(n²)",
        spaceComplexity: "O(1)",
    },
    BFS: {
        title: "Breadth First Search",
        description: "BFS explores nodes level by level using a queue.",
        timeComplexity: "O(V + E)",
        spaceComplexity: "O(V)",
    },
    DFS : {
        title: "Depth First Search",
        description: "DFS explores as far as possible along one branch before backtracking.",
        timeComplexity: "O(V + E)",
        spaceComplexity: "O(V)",
    },
    Dijkstra : {
        title: "Dijkstra's Algorithm",
        description: "Dijkstra finds the shortest path from a start node to all other nodes in a weighted graph with non-negative weights.",
        timeComplexity: "O((V + E) log V)",
        spaceComplexity: "O(V)",
    },
}