/* 
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Execution: validSudoku(
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]])

Output: true

Space: O(N)  
Time: O(N^2) // N being the length of a row
*/


const validSudoku = (board) => {
    // checks rows and cols 
    for(let i = 0; i < board.length; i++){
        let rows = {}
        let cols = {}
        for(let j = 0; j < board.length; j++){
            let rowItem = board[i][j]
            let colItem = board[j][i]
            if(rows[rowItem] && rowItem !== "."){
                return false
            } else {
                rows[rowItem] = true
            }
            if(cols[colItem] && colItem !== "."){
                return false
            } else {
                cols[colItem] = true
            }
        }
    }

    // checks boxes
    for(let i = 0; i < board.length; i += 3){
        for(let j = 0; j < board.length; j += 3){
            let box = {}
            for(let row = 0; row < 3; row++){
                for(let col = 0; col < 3; col++){
                    let boxItem = board[i+row][j+col]
                    if(box[boxItem] && boxItem !== '.'){
                        return false
                    } else {
                        box[boxItem] = true
                    }
                }
            }
        }
    }

    return true
}

console.log(validSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]])) // true

console.log(validSudoku([[".",".",".",".","5",".",".","1","."]
,[".","4",".","3",".",".",".",".","."]
,[".",".",".",".",".","3",".",".","1"]
,["8",".",".",".",".",".",".","2","."]
,[".",".","2",".","7",".",".",".","."]
,[".","1","5",".",".",".",".",".","."]
,[".",".",".",".",".","2",".",".","."]
,[".","2",".","9",".",".",".",".","."]
,[".",".","4",".",".",".",".",".","."]])) //false
