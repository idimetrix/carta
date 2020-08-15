const row = [2, 1, -1, -2, -2, -1, 1, 2], col = [1, 2, 2, 1, -1, -2, -2, -1] // support all 8 directions

const validate = (x, y, n) => !(x < 0 || y < 0 || x >= n || y >= n) // check we are inside the box
const print = (visited) => console.log(visited) // we can support any formatting we want, by default just log it - will be good enough

const traveling = (x, y, n, visited = [], position = 1) => {
    visited[x] = visited[x] || []; // check if we have second level of the array, if no - create it
    visited[x][y] = position; // set current position

    if (position >= n * n) { // we check all possible positions, stop our function
        print(visited); // print what we have
        visited[x][y] = 0; // reset current point
        return;
    }

    for (let i = 0; i < 8; i++) { // check all possible directions (only 8 possible directions)
        const newX = x + row[i]; // get new X position
        const newY = y + col[i]; // gew new Y position

        if (validate(newX, newY, n) && (!visited[newX] || !visited[newX][newY])) // check if we are inside the box and we do not visit our section with (newX, newY) coordinates
            traveling(newX, newY, n, visited, position + 1); // call our function with new coordinates and move visited and position variables inside to have a history )
    }

    visited[x][y] = 0;  // reset current point
}

traveling(0, 0, 5);
