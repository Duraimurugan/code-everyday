/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let totalNumberOfIslands = 0;
    if (!grid.length) {
        return totalNumberOfIslands;
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                totalNumberOfIslands += getIslandCount(grid, i, j);
            }
        }
    }
    return totalNumberOfIslands;
};

function getIslandCount(grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === '0') {
        return 0;
    }
    grid[i][j] = '0';
    getIslandCount(grid, i + 1, j);
    getIslandCount(grid, i - 1, j);
    getIslandCount(grid, i, j + 1);
    getIslandCount(grid, i, j - 1);

    return 1;
}