
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment(){
    count ++
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0    
}

function decrement(){
    count --
    countEl.textContent = count
}

function reset(){
    saveEl.textContent = "Previous entires: "
    countEl.textContent = 0
    count = 0 
}