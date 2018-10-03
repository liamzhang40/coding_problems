// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees(clockwise).

function rotateImg(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix[i].length; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    matrix.forEach(arr => arr.reverse());

    return matrix;
}

console.log(rotateImg([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));