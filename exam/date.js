
// var tableData 
var data = [];
var ascend = null;
function getData () {
    var rows = document.getElementById("tbody").getElementsByTagName('tr')
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i].getElementsByTagName('td');
        let col1 = row[0].innerHTML;
        let date = new Date(col1.replace('年', '/').replace('月', '/').replace('日', ''));
        let count = row[1].innerHTML;
        // console.log(date, count)
        data.push({
            col1,
            date,
            count
        })
    }
    // console.log(data)
}

function sortTable() {
    data.sort((a, b) => {
        if (!ascend) {
            return b.date - a.date
        } else {
            return a.date - b.date
        }
    })
    // console.log(ascend,data)
    renderTable()
    ascend = !ascend;
}

function renderTable() {
    let newBody = document.createElement('tbody')
    for(let i = 0; i < data.length; i++) {
        let {col1, count} = data[i]
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let tr = document.createElement('tr');
        td1.innerHTML = col1
        tr.appendChild(td1)
        td2.innerHTML = count
        tr.appendChild(td2)
        newBody.appendChild(tr);
    }
    console.log(newBody)
    document.getElementById('tbody').remove()
    newBody.setAttribute('id', 'tbody')
    document.getElementsByTagName('table')[0].appendChild(newBody)
}

getData();

document.getElementById('sortBtn').addEventListener('click', sortTable)