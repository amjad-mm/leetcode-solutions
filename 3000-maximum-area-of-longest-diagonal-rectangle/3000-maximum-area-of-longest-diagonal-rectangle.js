/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
    let diagonal = 0;
    let area = 0;
    let l = 0;
    let w = 1;

    for (let val of dimensions) {
        let currDiagonal = Math.sqrt(((val[l] ** 2) + (val[w] ** 2)));
        let currArea = val[l] * val[w];

        if (diagonal < currDiagonal || ((currDiagonal === diagonal) && currArea >= area)) {
            diagonal = currDiagonal;
            area = currArea;
        };
    };

    return area;
};