const input = document.querySelector("#input");
var exp = "";

function press(num){
    exp += num;
    input.value = exp;
}

function ketQua(){
    input.value = eval(exp);
    exp = "";
}

function xoaTatCa(){
    exp = "0";
    input.value = exp;
}