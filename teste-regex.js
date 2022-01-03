const alvo = '11a22b33c';
const exp = /(\d\d)(\w)/g; //gera uma regex fixa, que tem como vantagem ser compilada e analisada quando ocorre o carregamento do navegador, ou seja, ela é mais performática
let resultado = null;
while (resultado = exp.exec(alvo)){ //enquanto o resultado existir irá continuar executando
    console.log(resultado);
    console.log(exp.lastIndex);
}