// calculator 2




function getNumber(num){
    var result = document.getElementById("inputResult")
    result.value += num; 
}

function clearResult(){
    var result = document.getElementById("inputResult")
    result.value = ""
}

function getResult(){
    var result = document.getElementById("inputResult")
    result.value = eval(result.value)

}








