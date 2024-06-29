// var arr=[10,20,30,40]

// var k =2;

// for (let i=1;i<=k;i++){
//     element=arr.pop(i)
//     arr.unshift(element)
// }
// console.log(arr);


var words=['fly','flyout','flyin','flout']
arr=[];
check=[];

for (let i of words){
    k=i.length;
    arr.push(k);
}
arr.sort();
smallest=arr.shift();

for(let i of words){
    if(i.length==smallest){
        check.push(i);
    }
}
console.log(check);

found=true;

for (let i of words){
    if (!i.includes(check)){
        found=false;
    }
    check.pop();
}

console.log(found);