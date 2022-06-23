let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};
let produtos = [produtoA,produtoB,produtoC]

for(let i = 0; i<3 ;i++){
    if(produtos[i].internacional == true){
        let valor = produtos[i].valor +(produtos[i].valor*0.2)
        console.log( "O valor de ",produtos[i].nome, "com imposto de importação é:", valor  )
} else{
    let valor1 = produtos[i].valor +(produtos[i].valor*0.12)
    console.log("O valor de ",produtos[i].nome, "nacional com imposto é:", valor1)
}


}