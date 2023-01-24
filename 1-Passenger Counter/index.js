
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let decrementBtn = document.getElementById("decrement-btn")
let saveBtn = document.getElementById("save-btn")
let resetBtn = document.getElementById("reset-btn")
let incrementBtn = document.getElementById("increment-btn")
let count = 0

incrementBtn.addEventListener("click", function(){
    count ++
    decrementBtn.disabled = false
    countEl.textContent = count
})

saveBtn.addEventListener("click", function(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
})

decrementBtn.addEventListener("click", function(){
    count --
    if (count === 0){
        decrementBtn.disabled = true
    }
    countEl.textContent = count
})

resetBtn.addEventListener("click", function(){
    saveEl.textContent = "Previous entires: "
    countEl.textContent = 0
    count = 0 
})
