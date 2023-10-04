
// header of the grid of columns
let gridHeader = document.getElementById("grid-header");
for(let i = 65; i <= 90; i++){
    let bold = document.createElement("b");
    bold.innerText = String.fromCharCode(i);
    gridHeader.appendChild(bold);
}


// al the rows of the grid
function constructEachRow(rowNumber){
    let row = document.createElement("div");
    for(let i = 64; i <= 90; i++){
        if(i === 64){
            let bold = document.createElement("b");
            bold.innerText = rowNumber;
            row.appendChild(bold);
        }else{
            let cols = document.createElement("div");
            cols.contentEditable = true;
            cols.id = String.fromCharCode(i)+rowNumber;
            cols.style.s
            cols.addEventListener("focus", onSellFocus);
            row.appendChild(cols);
        }
    }
    return row;
}

let body = document.getElementById("body");
for(let i = 1; i <= 100; i++){
    let row = constructEachRow(i);
    body.appendChild(row);
}


