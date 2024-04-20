let num = [8, 1, 7, 4, 2]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)
if (pos == -1) {
     console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor esta na posição ${pos}`)
}
