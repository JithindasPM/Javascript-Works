
// fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>displayUser(data))


getData()
async function getData(){

    let res=await fetch('https://jsonplaceholder.typicode.com/users')

    let data=await res.json()
    displayUser(data)
}

function displayUser(data){
    htmldata=``
    for (let u of data){
        htmldata+=`
        
        <div class="col-4 mb-2 crd">

            <h3 class="heading">${u.name}</h3>
           <p class="text">Phone : ${u.phone}</p>
            <p class="text">Website : ${u.website}</p>

            </div>
        
        `
    }
    document.querySelector('#root').innerHTML=htmldata
}