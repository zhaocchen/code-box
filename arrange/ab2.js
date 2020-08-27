
    function dfs(arr, dep, solution, res) {
        // console.log(arr, dep, solution, res);
        if (dep == arr.length) {
            res.push(solution.join(''));
            return
        }
        for (var i = 0; i < arr[dep].length;i++) {
            solution.push(arr[dep][i]);
            dfs(arr, dep+1, solution, res);
            solution.pop();
        }
    }


function arrange(arr) {
    var res = [];
    dfs(arr, 0, [], res)
    return res;
}


var testArr =[['A','B'],['a','b'],[1,2]]
// Aa1,Aa2,Ab1,Ab2,Ba1,Ba2,Bb1,Bb2

console.log(arrange(testArr))

