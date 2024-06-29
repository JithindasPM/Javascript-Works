// var students={
//     name:'jithin',
//     course:'python',
//     place:'thrissur'
// }


// console.log(students.name);
// console.log(students);


// add a attribute================================
// students.age='25';
// or 
// students['age']=25

// if ('name' in students){
//     console.log('present');
// }
// else{
//     console.log("absent");
// }


// update a attribute========================

// var students={
//     name:'jithin',
//     course:'python',
//     place:'thrissur',
//     mark:10
// }

// if('mark' in students){
//     students.mark+=10;
// }
// else{
//     students.mark=15;
// }

// console.log(students);



// charector occuarence ==============================================

// var word='jithindas';

// var wc={};

// for (ch of word){
//     if(ch in wc){
//         wc[ch]+=1;
//     }
//     else{
//         wc[ch]=1
//     }
// }
// console.log(wc);

// or==================================

// word.split('').map( ch=> ch in wc ? wc[ch]+=1 : wc[ch]=1)
// console.log(wc);



// first reccursive charecter==================================

// var word='ABCBDDE'

// wc={}

// for (ch of word){
//     if (ch in wc){
//         console.log(ch);
//         break;
//     }
//     else{
//         wc[ch]=1
//     }
// }



// word occuarence ==============================================


// var word='hai hello hai hello hai b';
// var wc={}

// word.split(' ').map(wo=> wo in wc ? wc[wo]+=1 : wc[wo]=1)
// console.log(wc);

// =======================================================
// entries method in object   
// Object to array 
// Object.entries(Object Name)
// =======================================================


// var items={red:10,blue:20,green:5,black:50};

// var nestedarray=Object.entries(items);
// var costly=nestedarray.reduce((p1,p2)=>p1[1]>p2[1] ? p1 : p2);
// console.log(costly);




var text='jithindasii';

var wc={};

for (ch of text){
    if (ch in wc){
        wc[ch]+=1;
    }
    else{
        wc[ch]=1
    }
}
console.log(wc);
var nestedArray=Object.entries(wc)
maxCharactor=nestedArray.reduce((p1,p2)=>p1[1]>p2[1] ? p1 : p2)

console.log(maxCharactor);


