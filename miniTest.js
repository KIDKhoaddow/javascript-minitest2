var arrEx
let isPrime=false
function createArray(){
    arrEx=new Array()
    let numberElement=document.getElementById("numberElement").value;
    let arrayElement=document.getElementById("arrayElement").value;
    arrEx=arrayElement.split(",")
    document.getElementById("result").innerText=arrEx
}
function  printEvenNumber(){
    let sumEven=0
    for(let i=0;i<arrEx.length;i++){
        if(arrEx[i]%2==0){
            sumEven+=1;
        }
    }
    document.getElementById("result").innerText=arrEx+"\n"+"Số lượng số chẵn trong mảng là : "+sumEven;

}
function countElement(){
    let elementA=+prompt("xin mời nhập vào phần tử muốn tìm")
    let numberElementA=0
    for(let i=0;i<arrEx.length;i++){
        if(arrEx[i]==elementA){
            numberElementA+=1;
        }
    }
    document.getElementById("result").innerText=arrEx+"\n"+
        "Số lượng phần tử "+elementA+" trong mảng là : "+numberElementA
}



function sumPrimeInArray(){
    let sumPrime=0
    for(let i=0;i<arrEx.length;i++){
        checkPrime(arrEx[i])
        if(isPrime){
            sumPrime+=parseInt(arrEx[i])
        }
    }
    document.getElementById("result").innerText=arrEx+"\n"+
        "Tổng các số nguyên tố trong mảng là : "+sumPrime

}
function sumPrime(){
    let sumPrime=0
    for(let i=0;i<500;i++){
        checkPrime(i)
        if(isPrime){
            sumPrime+=parseInt(i)
        }
    }
    document.getElementById("result").innerText=
        "Tổng các số nguyên tố dưới 500 là : "+sumPrime
}


function checkPrime(x){
    if(x<2){
        isPrime=false
    }
    else if(x==2){
        isPrime=true
    }
    else if(x==3) {
        isPrime=true
    }else {
        if(x%2==0){
            isPrime=false
        }
        else {
            for(let i=3;i<x;i=i+2){
                if(x%i==0){
                    isPrime=false;
                    break;
                }
            }
            isPrime=true;

        }
    }
}
