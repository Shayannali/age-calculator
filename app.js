function getNumber(num){
    var resutlt = document.getElementById("result")
    resutlt.value += num
}
function clearAll(){
    var resutlt = document.getElementById("result")
    resutlt.value = ""
}
function getResult(){
    var resutlt = document.getElementById("result")
    resutlt.value = eval(resutlt.value)
}