export default function findExitInMazeDFS(maze) {
    // Directions to move: right, left, down, up
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    // Starting point
    const start = [1, 0];
    // Initialize the stack with the start position and path
    let stack = [[start]];
    // Set to keep track of visited positions
    let visited = new Set([start.toString()]);

    // Function to check if a move is valid
    function isValidMove(x, y) {
        return (
            x >= 0 && x < maze.length &&
            y >= 0 && y < maze[0].length &&
            maze[x][y] !== 'x'
        );
    }

    // DFS Algorithm
    while (stack.length > 0) {
        // Get the current path from the stack
        let path = stack.pop();
        // Current position is the last element of the path
        let [x, y] = path[path.length - 1];

        // Check if we've reached the exit
        if (maze[x][y] === 'EX') {
            return { path: path, visited: visited };
        }

        // Explore neighbors
        for (let [dx, dy] of directions) {
            let newX = x + dx, newY = y + dy;
            if (isValidMove(newX, newY) && !visited.has([newX, newY].toString())) {
                visited.add([newX, newY].toString());
                // Add new path to stack
                stack.push([...path, [newX, newY]]);
            }
        }
    }

    // If no path is found, return an empty array
    return [];
}

