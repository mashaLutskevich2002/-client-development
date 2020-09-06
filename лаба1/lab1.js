//task1
function numberToArr(x){
    let arr = []
    for(i = 0; i < x; i++){
        arr.push(i)
    }
   return arr
}

console.log( numberToArr(10))


//task2
function division(a,b,c){
    if (a % b == 0  && a % c == 0 ){
        return true
    }
    else {
        return false
    }        
}
console.log(division(90,10,5))



//task3
function myCapitalize(string){
    if(string.length >= 1 && string.length<=10){
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    else{
        return("Ошибка. Слово не должно иметь более 10 символов!")
    }
}
    console.log(myCapitalize("мария"))
    



