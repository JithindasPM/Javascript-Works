
fetch('https://jsonplaceholder.typicode.com/todos').then(res=>res.json()).then(data=>displayTodo(data))

function displayTodo(data){

    htmlData=``
    for (let todo of data){

    htmlData+=`
   
    <tr>
    <td>${todo.userId}</td>
    <td>${todo.id}</td>
    <td>${todo.title}</td>
    <td>${todo.completed}</td>
    </tr>
    
    `
    }
    document.querySelector("#root").innerHTML=htmlData
}
