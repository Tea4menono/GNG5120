/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let row = board.length;
  let column = board[0].length;
  let res = [];

  let path = [];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (board[i][j] == word[0]) {
        path.push([i, j]);
        backtracking(1);
        path.pop();
      }
    }
  }

  function backtracking(x) {
    if (path.length == word.length) {
      res.push([...path]);
      return;
    }
    let i = path[path.length - 1][0];
    let j = path[path.length - 1][1];

    // 上
    if (board[(i + 1, j)] == word[x]) {
      path.push([i + 1, j]);
      backtracking(x + 1);
      path.pop();
    }
    if (board[(i, j + 1)] == word[x]) {
      path.push([i, j + 1]);
      backtracking(x + 1);
      path.pop();
    }
    if (board[(i - 1, j)] == word[x]) {
      path.push([i - 1, j]);
      backtracking(x + 1);
      path.pop();
    }
    if (board[(i, j - 1)] == word[x]) {
      path.push([i, j - 1]);
      backtracking(x + 1);
      path.pop();
    }
  }
};
