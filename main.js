let submit = document.querySelector('#submit-button')
let independent = document.querySelector('#translator-input')
let clickable = document.querySelector('.crouchingTiger')
let visible = false
function hideOrNot(){
    if(visible === false){
        document.querySelector('.hiddenDragon').style.display = 'block'
        visible = true
    } else if(visible === true){
        document.querySelector('.hiddenDragon').style.display = 'none'
        visible = false
    }
}
clickable.addEventListener('click', hideOrNot)

const produceEmoji = ()=>{    
    const userInput = independent.value
    const output = document.querySelector('#results')
    const options = document.querySelectorAll('[name=translation-section]')
    for(let pick of options){
        if(pick.checked && pick.value === 'encode'){
            output.innerText = encode(userInput)
        } else if(pick.checked && pick.value === 'translate'){
            output.innerText = translate(userInput)
        } else if(pick.checked && pick.value === 'madlib'){
            output.innerText = madlib(userInput)
        } else if(pick.checked && pick.value === 'search'){
            output.innerText = ''
            let array1 = search(userInput)
            for(let i = 0; i < array1.length; i++){
                output.innerText += array1[i]['symbol']
            }
        } else if(pick.checked && pick.value === 'random'){
            const roll = Math.floor(4 * Math.random())
            console.log(roll)
            if(roll === 0){
                output.innerText = encode(userInput)
            } else if(roll === 1){
                output.innerText = translate(userInput)
            } else if(roll === 2){
                output.innerText = madlib(userInput)
            } else if(roll === 3){
                output.innerText = ''
                let array1 = search(userInput)
                for(let i = 0; i < array1.length; i++){
                    output.innerText += array1[i]['symbol']
                }
            }
        } 
    }
}

submit.addEventListener('click', produceEmoji)
independent.addEventListener('input', produceEmoji)