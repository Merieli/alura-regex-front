//Extrair os códigos concatenados que por padrão que começa com uma letra e termina com 1 ou mais dígitos, em um array para poder usar em verificações:
const codigos = 'A121B12112C12212F12G01';
const exp3 = /[A-Za-z]\d+/g;
let codigosExtraidos = codigos.match(exp3);

console.log(codigosExtraidos);