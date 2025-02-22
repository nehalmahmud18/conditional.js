const age = 65;
const price = 500;

if(age<=12){
    console.log('you can eat for free')
}
else if(age>=60){
    const discount= price * 50/100;
    const PayAmount = price- discount;
    console.log(PayAmount);
}
else{
    console.log(price);
}