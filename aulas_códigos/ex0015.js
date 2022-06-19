function parImpar (n) {
    if (n%2==0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}
 let res = parImpar(4)
 console.log(res)

 function soma (n1=0,n2=0) {
    return n1+n2
 }

console.log(soma(7,7))

let y = function (x) {
    return x*2
}
console.log(y(2))
console.log('\n\n')

function fatorial (t) {
    let fat = 1
    for (let c = t; c>1;c--){
        fat = fat * c
    }
    return fat
}
//5! = 5x4x3x2x1
console.log(fatorial(5))

function fatorial2(n) {
    if (n==1){
        return 1
    } else {
        return n * fatorial2(n-1)
    }
}
console.log(fatorial2(5))