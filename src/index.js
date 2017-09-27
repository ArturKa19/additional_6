module.exports = function zeros(expression) {
    let tempArr = expression.split("*");

    for(let arr of tempArr){
        let b = arr.match(/!!/ig);
        if(b == null){
            let numb = parseStr(arr,1);
            let mass = factorialDecomp(numb);
            calc(mass);
        }
        else{
            let numb = parseStr(arr,2);
            let mass = doubleFactorialDecomp(numb);
            calc(mass);
        }
    }
    let res = result.twice>result.fives?result.fives:result.twice;
    result.twice = result.fives = 0;
    return res;
}

let result = {
    twice:0,
    fives:0
}

function parseStr(str,parseValue){
    return Number(str.substr(0,str.length-parseValue));
}



function decomposition(num){
    let resVec = [];
    let probe = 2;

    while(num != 1){
        if(num%probe != 0)
            probe++;
        else{
            num /= probe;
            resVec.push(probe);
        }
    }
    return resVec;
}

function factorialDecomp(number){
    let arr = [];
    for(let i = 1; i <= number;i++){
        arr.push(i);
    }
    return arr;
}

function doubleFactorialDecomp(number){
    let arr = [];
    if(number % 2 == 0){
        for(let i = 2;i <= number; i+=2){
            arr.push(i);
        }
    }else{
        for(let i = 1;i <= number; i+=2){
            arr.push(i);
        }
    }
    return arr;
}

function calc(mass) {
    for(let i =0; i<mass.length;i++){
        let temp = decomposition(mass[i]);
        for(let j = 0; j<temp.length;j++){
            if(temp[j] % 2 == 0)
                result.twice++;
            else if(temp[j] % 5 == 0)
                result.fives++;
        }
    }
}
