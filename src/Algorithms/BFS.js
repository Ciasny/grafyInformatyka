export default function findExitInMaze(maze) {
    // Directions to move: right, left, down, up
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    // Starting point
    const start = [1, 0];
    // Initialize queue with the start point and path
    let queue = [[start]];

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


    while (queue.length > 0) {


        let path = queue.shift();

        let [x, y] = path[path.length - 1];


        if (maze[x][y] === 'EX') {

            return { path: path, visited: visited };
        }


        for (let [dx, dy] of directions) {
            let newX = x + dx, newY = y + dy;
            if (isValidMove(newX, newY) && !visited.has([newX, newY].toString())) {
                visited.add([newX, newY].toString());
                queue.push([...path, [newX, newY]]);
            }
        }


    }

    return [];
}


