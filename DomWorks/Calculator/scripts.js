var pointfrequency=1

function display(event){

    const operators=['+','-','*','/','.']

    let textBox=document.querySelector("#result")

    let currentExp=textBox.value

    let displayNum=event.target.value

    if (displayNum=='.' && pointfrequency==1){

        pointfrequency=0

    }

    else if(displayNum=='.' && pointfrequency==0){

        return

    }

    if(operators.includes(displayNum) && displayNum!='.'){

        pointfrequency=1

    }

    let currentExpLastChar=currentExp.slice(-1)

    if (operators.includes(displayNum) && operators.includes(currentExpLastChar)){

        currentExp=currentExp.slice(0,-1)

    }

    textBox.value=currentExp+displayNum

}

function clearBox(){

    document.querySelector("#result").value=""
}

function answer(event){

    let nums=document.querySelector('#result').value

    let result=eval(nums)

    if (result.toString().split('').includes('.')){
        pointfrequency=0
    }
    else{
        pointfrequency=1
    }

    document.querySelector('#result').value=result

    pointfrequency=1

}

function backSpace(event){

    let nums=document.querySelector('#result').value

    let result=nums.slice(0,-1)

    document.querySelector("#result").value=result
    
}

