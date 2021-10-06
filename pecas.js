let peso = 101;


if(peso > 100){
    console.log("A peça pode ser cadastrada.")
} else {
    console.log("Peça com peso inferior, não poderá ser cadastrada.")
}

let listaPecas = ["Disco de Freio","Am ","Pastilha de Freio","Amortecedor","Barra de Direção","Vela","Cabo de Vela","Correia Denteda","Bateria","Pneus"]
if (listaPecas.length < 10) {
    console.log("A lista ainda possui espaço para inclusão de mais itens.")
    
} else {
    console.log("A lista está cheia, máx. de 10 itens.")
}

let nomePeca = listaPecas [1]

if (nomePeca.length > 3) {
    console.log  ("Nome válido")
} else {
    console.log("O nome precias ter no mínimo 3 caracteres.")
} 