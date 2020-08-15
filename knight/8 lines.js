const traveling = (x, y, n, visited = [], position = 1) => {
    (visited[x] = visited[x] || [])[y] = position;
    if (position >= n * n) return console.log(visited) || (visited[x][y] = 0);
    for (const [nX, nY] of [[2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-2, -2], [1, -2], [2, -1]].map(([_x, _y]) => [_x + x, _y + y]))
        if (!(nX < 0 || nY < 0 || nX >= n || nY >= n) && (!visited[nX] || !visited[nX][nY])) traveling(nX, nY, n, visited, position + 1);
    visited[x][y] = 0;
}
traveling(0, 0, 5);
