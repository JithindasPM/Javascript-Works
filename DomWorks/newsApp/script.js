



const APIKEY='8a508af45403453e88142eacdd20a3c1'
var url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${APIKEY}`

// fetch(url).then(res=>res.json()).then(data=>displayNews(data))


function filterNews(event){

  let value=event.target.value
  let filterUrl=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${APIKEY}&category=${value}`
  fetch(filterUrl).then(res=>res.json()).then(data=>displayNews(data))
}

getData()
async function getData(){

  let res=await fetch(url)
  let data=await res.json()
  displayNews(data)
}


function displayNews(news){
    htmlData=``

    for (let n of news.articles){
        htmlData+=`
        
        <div class="col">
        <div class="card">
        <img src="${n.urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${n.title}</h5>
        <p class="card-text">${n.description}</p>
        </div>
        </div>
        </div>
        
        `
    }
    document.querySelector('#root').innerHTML=htmlData
}


const categories=["business","entertainment","general","health","science","sports","technology"]


function displayCategory(category){

    htmlData=``

    for (let c of category){

        htmlData+=`
        
        <button class="btn btn-outline-success mb-4" value="${c}">${c}</button>

        `
    }
    document.querySelector("#category").innerHTML=htmlData
}
displayCategory(categories)

