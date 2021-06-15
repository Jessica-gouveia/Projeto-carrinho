console.log('--------------------------------------')
console.log('    Projeto Carrinho de compras       ')
console.log('         Jéssica Gouveia              ')
console.log('--------------------------------------')


const produtos = require('./database')

produtos.sort((a,b)=> a.preco - b.preco)

const read = require('readline-sync')

const carrinho = []

console.table(produtos)
console.log("-----------------------------------------------------")

const verProdutosPorCategoria = read.question('Você deseja encontrar um produto por categoria? (S/N) ')

if(verProdutosPorCategoria.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('------------------------------------')
    console.log('Alimento, Bebida, Casa, Higiene, Informática')
    console.log('------------------------------------')
    
    
    const qualCategoria = read.question('Qual categoria você deseja escolher?')
    const categoria = produtos.filter(produtos => produtos.categoria === qualCategoria)

    console.table(categoria)

}else{
    (verProdutosPorCategoria.toLocaleUpperCase() !== 'S')
    console.log('Essas são todas as categorias e todos os produtos:')
    console.log('--------------------------------------------------')
    console.table(produtos)
}

const array = new Array() // criei essa classe para o id

class Pedido {
    constructor(array) {
        this.products = array 
        this.subTotal = 0
        this.valorTotal = 0
        this.totalItens = 0

    }
}

const compras = () => {
    productId = parseInt(read.question("Digite o ID do produto:")) // parseint converte, analisa a primeira coisa que digitarmos em string , inteiro ou escrito
    for(i = 0; i < 1000; i++) {
        findId = produtos.find(item => item.id == productId)
        if(findId) {
            break;
        }else{
            productId = parseInt(read.question("ID não encontrado. Tente novamente"))
        }

    }


    quantidadeItem = parseInt(read.question("Digite a quantidade desejada:"))
    for(i = 0; i <1000; i++) {
    if(quantidadeItem > 0 ) {
        break;
    }else{
        quantidadeItem = parseInt(read.question("Digite uma quantidade válida"))
    }
}
const produtosCarrinho = { ...findId, quantidade: quantidadeItem}
carrinho.push(produtosCarrinho)

const continueComprando = read.question("Deseja inserir mais algum produto ? (S/N)")
const continueComprandoFormato = continueComprando.toLowerCase()
if(continueComprandoFormato === "n") {
cupom = parseInt(read.question("Digite o cupom de desconto:"))

}else{
    compras()
}

for(i = 0; i < 1000; i++) {
    if(cupom > 15 || cupom < 0 ) {
        cupom = parseInt(read.question("Cupom inválido, tente novamente."))
    }else{
        break;
    }
}

}

compras()

class Order {
    constructor(carrinho) {
        this.newProducts = carrinho
        this.subTotal = 0
    }

    calcSubTotal() {
        this.subTotal = this.newProducts.reduce((acumulator,item)=> acumulator + (item.preco * item.quantidade),0)

    }


}

const order = new Order(carrinho)
console.table(order.newProducts)

order.calcSubTotal()
console.log(`Valor do pedido: R$ ${order.subTotal.toFixed(2)}.`)

const desconto = order.subTotal * (cupom/100)
console.log(`O valor do desconto: R$ ${desconto.toFixed(2)}.`)

const total = order.subTotal - desconto
console.log(`O valor total da compra é: R$ ${total.toFixed(2)}.`)
console.log("----------------------------------------------")

console.log("Obrigada por comprar conosco! Volte Sempre!!!")

const hoje = new Date()
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
const dataHoje = hoje.toLocaleDateString('pt-BR', options)

console.log(dataHoje)


















 

 




