const price = 2700;

if (price >= 5000){
    const discount = price * 10/100;
    const PayAmount = price - discount;
    console.log(PayAmount);

}
else if(price>=2500){
    const discount = price * 5/100;
    const PayAmount = price - discount;
    console.log(PayAmount);
}
else{
    console.log(price);
}

