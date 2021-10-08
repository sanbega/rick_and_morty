function suma(num1, num2) {
    return num1 + num2

}

function result (num1 , num2, cb){
    return cb(num1, num2)
}

console.log(cb(2, 2, suma))

