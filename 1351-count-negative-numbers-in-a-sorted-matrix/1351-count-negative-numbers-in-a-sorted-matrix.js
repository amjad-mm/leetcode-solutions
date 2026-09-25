/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {

    function flatten(grid) {

        let count = 0;

        for (let i = 0; i < grid.length; i++) {

            if (Array.isArray(grid[i])) {
                count += flatten(grid[i]);
            }else if (grid[i] < 0) {
                count++;
            }

            
        }

        return count;
    }

    return flatten(grid);
};