function bfs (graph, start) {
    const visited = new Set();
    const queue = [start];
    const steps = [];

    visited.add(start);
    while (queue.length) {
        const node = queue.shift();
        steps.push({
            current: node,
            queue: [...queue],
            visited: new Set(visited)
        });

        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);

                steps.push({
                    current: node,
                    action: "enqueue",
                    nodeAdded: neighbor,
                    queue: [...queue],
                    visited: new Set(visited)
                });
            }
        }
    }
    return steps 
}