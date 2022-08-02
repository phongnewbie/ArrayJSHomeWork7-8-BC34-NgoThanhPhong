var arrayIntegerNumber = [];
function numberInArray(){
     var inputNumber1 = document.querySelector("#inputForm1").value * 1;
      arrayIntegerNumber.push(inputNumber1);
      console.log(arrayIntegerNumber);
}
function calcPositiveNumber(){
    var totalAmount = 0;
    for(var index = 0; index<= arrayIntegerNumber.length; index++){
        if(arrayIntegerNumber[index] >= 0){
            totalAmount += arrayIntegerNumber[index]
        }
    }
    document.getElementById(
      "alertResult"
    ).innerHTML = `Tổng số dương là : ${totalAmount} </br> số lượng phần tủ có : ${arrayIntegerNumber.length} </br>`;
    
}




function findingLowestNumber(){
    var minNumber = arrayIntegerNumber[0];
 for (var index = 0; index <= arrayIntegerNumber.length; index++) {
   if (minNumber > arrayIntegerNumber[index]) {
     minNumber = arrayIntegerNumber[index];
   }
 }
 document.getElementById(
   "alertResult"
 ).innerHTML = `So nhỏ nhất trong mảng là : ${minNumber}`;
}




function findingLowestPlusNumber() {
  var minNumber1 = arrayIntegerNumber[0];
  for (var index = 0; index <= arrayIntegerNumber.length; index++) {
    if (minNumber1 > arrayIntegerNumber[index] && minNumber1 > 0) {
      minNumber1 = arrayIntegerNumber[index];
    }
  }
  document.getElementById(
    "alertResult"
  ).innerHTML = `Số dương nhỏ nhất trong mảng là : ${minNumber1}`;
}



function theLastEvenNum(){
  var resultEven = 0;
  for (let index = arrayIntegerNumber.length-1; index >=0; index --) {
    if (arrayIntegerNumber[index] % 2 == 0) {
        resultEven = arrayIntegerNumber[index];
      document.getElementById("alertResult").innerHTML = `So chẵn cuối cùng trong mảng là : ${resultEven}`;
    } else {
      return -1;
    }
  }
}




function shiftLocation() {
  //     //input : // arrDIem = [6.4,8.2,3.4,9.8,2.4,1.4,9.4]
  //     //output
  var numberOne = document.getElementById("inputForm2").value * 1;
  var numberTwo = document.getElementById("inputForm3").value * 1;
  var result = "";
  //console.log(output);
  for (var index = 0; index < arrayIntegerNumber.length; index++) {
    //    document.querySelector("#dtbTang").innerHTML += '<p>'+output[index] + '</p>'
    const output = arrayIntegerNumber[numberOne];
    arrayIntegerNumber[numberOne] = arrayIntegerNumber[numberTwo];
    arrayIntegerNumber[numberTwo] = output;
    result = `${arrayIntegerNumber}`;
    document.getElementById(
      "alertResult"
    ).innerHTML = `Mảng sau khi đổi là : ${result}`;
  }
};




function sortTheoNum(){
  var arrayVariable = arrayIntegerNumber;
  var result = arrayVariable.sort(function (num, numTruoc) {
    return num - numTruoc;
  });
  document.getElementById("alertResult").innerHTML = `Ket qua sau khi sap xep la : ${result}`;
}























