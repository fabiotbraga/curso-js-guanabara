let num = [2,3,4,5,6]

console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log('\n\n')

for (let pos =0;pos<num.length;pos++) {
    console.log(num[pos])
}
console.log('\n')
///////////////////////////////
for (let pos in num) {
    console.log(num[pos])
}
console.log('\n')
///////////////////////////////
let num2 = [2,54,65,46,55,3,5]
num2.push(1)
num2.sort()
console.log(num2)
console.log(`O vetor tem ${num2.length} posições`)
console.log(`O primeiro valor do vetor é ${num2[0]}`)
let pos2 = num2.indexOf(2)
if (pos2 == -1) {
    console.log('Valor não encontrado!!!')
} else {
    console.log(`O valor está na posição ${pos2}`)
}
