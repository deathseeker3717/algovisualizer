function dfs (graph, start) {
    const visited = new Set();
    const steps = [];

    function traverse(node) {
        if (visited.has(node)) {
            return 
        }
        visited.add(node);
        steps.push({
            current: node,
            visited: [...visited]
        });
        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                steps.push({
                    current: node,
                    action: "traverse",
                    nextNode: neighbor,
                    visited: [...visited]
                });
                traverse(neighbor);
            }
        }
    }
    traverse(start);
    return steps;
}