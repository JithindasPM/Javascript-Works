n=2100

if(n%100==0 && n% 400==0){
    console.log('leap year');
}
else if(n%100!=0 && n%4==0){
    console.log('leap year');
}
else{
    console.log('not leap year');
}