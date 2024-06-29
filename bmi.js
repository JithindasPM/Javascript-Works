w=75;
h=165;

bmi=w/(h/100)**2;

console.log(bmi);

if (bmi<19){
    console.log('under weight');
}
else if(bmi>=19 && bmi<25){
    console.log('normal');
}
else if(bmi>=25 && bmi<30){
    console.log('over weight');
}
else{
    console.log('obese');
}