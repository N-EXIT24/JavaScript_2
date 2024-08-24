function random(min, max){
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

let number = +prompt ("Введите кол-во примеров")

for(let i = 0; i < number; i++){
    let one = random(1,100)
    let two = random(1,100)
    let symbol = random(1,4)
    let result = 0
    
    if(symbol == 1){
        result = one + two
        symbol = " + "
    }else if(symbol == 2){
        result = one - two
        symbol = " - "
    }else if(symbol == 3){
        result = one * two
        symbol = " * "
    }else if(symbol == 4){
        result = one / two
        symbol = " / "
    }
    
    let answer = +prompt (one + symbol + two + " = ")
    
    console.log(answer == result ? "Все правильно " : "Все не правильно");
}