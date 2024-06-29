fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then(data=>displayPost(data))

function displayPost(data){

    htmldata=``

    for (p of data){

        htmldata+=`
        
        <div class="col-12 crd shadow">
            <h2 class="text">${p.title}</h2>
            <p class="text">${p.body}</p>
        </div>
        
        `
    }
    document.querySelector("#root").innerHTML=htmldata
}