function dijkstra(graph, start) {
    const visited = new Set();
    const distances = {};
    const steps = [];

    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[start] = 0;
    while (true) {
        let curr = null;
        for (let node in distances) {
            if (!visited.has(node) && (curr == null || distances[node] < distances[curr])) {
                curr = node;
            }
        }
        if (curr == null) {
            break;
        }
        visited.add(curr)
        steps.push({
            curr,
            distances: { ...distances },
            visited: [...visited]
        });
        for (let neighbor of graph[curr]) {
            const newDistance = distances[curr] + neighbor.weight;
            if (newDistance < distances[neighbor.node]) {
                distances[neighbor.node] = newDistance;
                steps.push({
                    curr,
                    action: "update",
                    node: neighbor.node,
                    distances: { ...distances },
                    visited: [...visited]
                });
            }
        }
    }
    return steps
}