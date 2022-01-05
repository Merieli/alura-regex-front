const alvo = '11a22b33c';
const exp = /(\d\d)(\w)/g; //gera uma regex fixa, que tem como vantagem ser compilada e analisada quando ocorre o carregamento do navegador, ou seja, ela é mais performática
let resultado = null;

console.log(exp.test(alvo)); //testa se a REGEX existe dentro do alvo definido

//while (resultado = exp.exec(alvo)){ //enquanto o resultado da Regex existir irá continuar executando
//    console.log(resultado);
//    console.log(exp.lastIndex);
//}