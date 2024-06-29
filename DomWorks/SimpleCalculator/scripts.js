
// Using old method =================================

// function performAdd(){
    
//     let num1=+document.querySelector('#box1').value
//     let num2=+document.querySelector('#box2').value

//     let result=num1+num2
//     let answer=document.querySelector('#res')
//     answer.innerHTML=`${num1} + ${num2} = ${result}`
// }

// function performSub(){

//     let num1=+document.querySelector('#box1').value
//     let num2=+document.querySelector('#box2').value

//     let result=num1-num2
    
//     let answer=document.querySelector('#res')
//     answer.innerHTML=`${num1} - ${num2} = ${result}`
// }

// function performMul(){

//     let num1=+document.querySelector("#box1").value
//     let num2=+document.querySelector("#box2").value

//     let result=num1*num2

//     let answer=document.querySelector('#res')
//     answer.innerHTML=`${num1} * ${num2} = ${result}`
// }

// function performDiv(){

//     let num1=+document.querySelector("#box1").value
//     let num2=document.querySelector("#box2").value

//     let result=num1/num2

//     let answer=document.querySelector('#res')
//     answer.innerHTML=`${num1} / ${num2} = ${result}`
// }

// Using old method =================================


function handleClick(event){

    let operator=event.target.value;
    let num1=box1.value;
    let num2=box2.value;

    let result=eval(`${num1} ${operator} ${num2}`);

    document.querySelector('#res').innerHTML=`${num1} ${operator} ${num2} = ${result}`;
}
