var container=document.querySelector('#cont')
container.style.backgroundColor='red'

function handleClick(event){
    let color=event.target.value

    let container=document.querySelector('#cont')
    if (color=='red'){
        container.style.backgroundColor='red';
        container.style.color='green';
    }
    else if (color=='green'){
        container.style.backgroundColor='green';
        container.style.color='red';
    }
}

// function colorToggle(event){
//     let color = event.target.value;
//     let rootElement = document.querySelector("#cont")

//     rootElement.removeAttribute("class")
//     rootElement.setAttribute("class",bg-${color})
// }