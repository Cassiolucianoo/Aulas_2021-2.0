const nome = 'Cassio\n'
const concaternacao  = 'Olá \n' + nome + '!..........................'

const template = `
 olá 
 ${nome}!
`
console.log(concaternacao, template)

//expressoes

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei..... ${up('cuidado')}!`)