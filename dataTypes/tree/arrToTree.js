
function insertNode (node, parentId, target) {
    if (parentId == 0) {
        target.push(node)
        return
    }
    if (target.some(d => d.id == parentId)) {
        for (let i in target) {
            if (target[i].id === parentId) {
                target[i].children.push(node)
                return
            }
        }
    }
    for (let i in target) {
        insertNode(node, parentId, target[i].children)
    }
}

function arrToTree (arr) {
    let res = []
    for (let el of arr) {
        // console.log(el)
        const { id, parentId } = el
        insertNode({
            id, 
            children: [],
        }, parentId, res)
    }
    return res
}

console.log(arrToTree([{id:1, parentId: 0}, {id:2, parentId:1},{id:3, parentId:1}]))
console.log(arrToTree([{id:1, parentId: 0}, {id:2, parentId:1},{id:3, parentId:2}]))

// [{id:1, parentId: 0,children:[{id:2, parentId:1},{id:3, parentId:1}]}]