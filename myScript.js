console.log("Hello World!");

var hello = "Hello World";

console.log(hello);

const hi = "Hello101";

let merhaba = "merhaba101";

console.log(merhaba);

merhaba = "merhaba102";

console.log(hi, merhaba);

console.log(typeof hello);

let num = false;


console.log(typeof num);

const  meyve = ["elma","armut","muz"];

console.log(typeof meyve); //listenin türü

console.log(meyve); // listenin kendisi

console.log(typeof meyve[0]); //listenin 0. elemanın türü

console.log(meyve.length); //listenin uzunluğu

function multicalc(number1,number2){
    if (typeof number1 != "number"){
            console.log("Lütfen sayı giriniz. 1");

    }
    else if (typeof number2 != "number") {
        console.log("Lütfen sayı giriniz. 2");
    }
    else {
        var result = number1 * number2;
        console.log(result);
    }
}
multicalc(1,"yazi");

let myArray = [];

for (var i = 12; i<26; i++ ){
    myArray.push(i);

}
myArray[myArray.length+1] = "ar"   
myArray[myArray.length] = "ar"   
myArray[myArray.length] = "ar"   
myArray[myArray.length] = "ar"     
myArray[myArray.length] = "ar"   
console.log(myArray);

let myText1 = document.getElementById("text1");

myText1.innerText = "hoşgediniz";

console.log(myText1.innerText);

let myText2 = document.getElementById("text2");

console.log(myText2.innerText);

myText2.addEventListener('click',change);
myText1.innerText = "hoşgediniz";
function change(){
    myText1.innerText = "tıklandı!";

}



