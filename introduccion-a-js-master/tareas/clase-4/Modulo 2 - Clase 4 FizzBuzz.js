function fizzBuzzV1(){
    for(let i = 1; i <= 50; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }else if(i % 3 === 0){
            console.log("Fizz");
        }else if(i % 5 === 0){
            console.log("Buzz")
        }else{
            console.log(i);
        }
    }
}

function fizzBuzzV2(){
    for(let i = 1; i <= 50; i++){
        let txtRta = "";
        i % 3 === 0 ? txtRta += "Fizz" : "";
        i % 5 === 0 ? txtRta += "Buzz" : "";
        console.log(txtRta || i);
    }
}
