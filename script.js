let inputEl = document.getElementById('input-el');
console.log(inputEl)
let convertBtn = document.getElementById('convert-btn');
console.log(convertBtn)
let lenghtEl = document.getElementById('length-result');
let volumeEl = document.getElementById('volume-result');
let massEl = document.getElementById('mass-result');
convertBtn.addEventListener('click', function(){
    console.log(inputEl.value)
    solutionone()
    solutiontwo()
    solutionthree()
})


function solutionone(){
    let solution = " "
    let meterSol = inputEl.value * 3.281
    let meter = meterSol.toFixed(3)
    let feetSol = inputEl.value * 0.3048
    let feet = feetSol.toFixed(3)
    solution += `
        <p class="supporting-text">
            ${inputEl.value} meters = ${meter} feet | ${inputEl.value} feet = ${feet} meters
        </p>
    `
    lenghtEl.innerHTML += solution
}
function solutiontwo(){
    let solution = " "
    let litersSol = inputEl.value * 0.264
    let liters = litersSol.toFixed(3)
    let gallonsSol = inputEl.value * 3.785411784
    let gallons = gallonsSol.toFixed(3)
    solution += `
        <p class="supporting-text">
            ${inputEl.value} liters = ${liters} gallons | ${inputEl.value} gallons = ${gallons} liters
        </p>
    `
    volumeEl.innerHTML += solution
}

function solutionthree(){
    let solution = " "
    let kilosSol = inputEl.value * 2.204 
    let kilos = kilosSol.toFixed(3)
    let poundsSol = inputEl.value * 0.45359237
    let pounds = poundsSol.toFixed(3)
    solution += `
        <p class="supporting-text">
            ${inputEl.value} kilos = ${kilos} pounds | ${inputEl.value} pounds = ${pounds} kilos
        </p>
    `
    massEl.innerHTML += solution
}





//create a length meter/feet function