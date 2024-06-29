// var a='jithin das'

// console.log(a.split(' '));
// var start=a.slice(0,6)
// var end=a.slice(7,10)
// console.log(start,end);

            // or 

// b=(a.split(' '));
// console.log(b[0]);
// console.log(b[1]);




// var a='jithin'

// var b='aeiou'
// vowelcount=0
// nonvowelcount=0

// for (let i of a){
//     if(b.includes(i)){
//         vowelcount+=1
//     }
//     else{
//         nonvowelcount+=1
//     }
// }
// console.log(vowelcount);
// console.log(nonvowelcount);




//          anagram


// var a='mom'
// var b='mom'


// anagram=true
// for(let i of a){
//     if (b.includes(i) && a.length==b.length){
//         anagram=true
//     }
//     else{  
//         anagram=false
//     }
// }
// if (anagram==true){
//     console.log(' anagram');
// }
// else{
//     console.log('not anagram');
// }


// =============== or ============ 


// var sorted_a=a.split('').sort().join('')
// var sorted_b=b.split('').sort().join('')
// console.log(sorted_a==sorted_b ? 'anagram' : 'not anagram');



// #           panagram



// var a='jithin';
// var b='abcdefghijklmnopqrstuvwxyz';
// var panagram=true;
// for(let i of b){
//     if(!a.includes(i)){
//         panagram=false;
//         break;
//     }
// }
// console.log(panagram);



// palindrome 



// var text='mom'

// var reversed_text=text.split('').reverse().join('')

// console.log(text==reversed_text ? 'palindrome' : 'not palindrome');



// var a='ABC';
// var b='pqr';

// var add=''

// for(i=0;i<a.length;i++){
//     add+=a[i]+b[i]
// }
// console.log(add);



// abbaabb