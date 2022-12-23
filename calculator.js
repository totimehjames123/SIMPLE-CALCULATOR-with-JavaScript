var input = document.getElementById("input");

function keys(num){
    input.value += num 


}
function evalExp(){
    var y = input.value
    let x = eval(y)
    input.value = x
    if (x == null){
        input.value = " "
    }
}
function clearScreen(){
    input.value = " ";
}

function deleteExp(){
    input.value = input.value.slice(0,-1);
}
